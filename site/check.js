#!/usr/bin/env node
/**
 * Integrity checks for the governance record. Run by `npm run check`, by the
 * pre-commit hook, and in CI. Exits non-zero on failure.
 *
 * These exist because everything they test for has gone wrong at least once:
 * a participant's name left in a document, positioning language surviving into
 * the map, an option list truncated by a bad conversion, a sizing table that
 * disagreed with the map it summarised.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DOCS = ['overview.md', 'charter.md', 'requirements.md', 'decision-map.md', 'options.md', 'README.md'];

let failures = 0;
let warnings = 0;

function fail(check, detail) { failures++; console.log(`  FAIL  ${check}\n        ${detail}`); }
function warn(check, detail) { warnings++; console.log(`  warn  ${check}\n        ${detail}`); }
function pass(check, detail) { console.log(`  ok    ${check}${detail ? '  — ' + detail : ''}`); }

function corpus() {
  const files = [...DOCS];
  for (const dir of ['decision-records', 'sessions', 'build-rounds']) {
    const d = path.join(ROOT, dir);
    if (fs.existsSync(d)) {
      for (const f of fs.readdirSync(d)) if (f.endsWith('.md')) files.push(path.join(dir, f));
    }
  }
  return files
    .filter((f) => fs.existsSync(path.join(ROOT, f)))
    .map((f) => ({ file: f, lines: fs.readFileSync(path.join(ROOT, f), 'utf8').split('\n') }));
}

/* ---------- neutrality ---------- */

// Participant and product names. Extend when a new participant joins.
const NAMES = /\b(LMS|Lloyds|Connells|NPTN|Moverly|Coadjute|Landmark)\b/;

// First-person advocacy. Word-bounded: "your own" must not match "our own".
const ADVOCACY = /\bwe (think|argue|would|believe|want|propose)\b|\bour (own|position|view|proposal)\b|\bin our (view|experience)\b/i;

// Reasoning about the audience rather than the decision.
const POSITIONING = /most likely to succeed|worth (proposing|investing|leading)|strongest (single|available) (idea|argument|thing)|argument to make|before it is asked|credibility of the (whole )?process|land grab|put in front of|the obvious rule/i;

function checkText() {
  const hits = { names: [], advocacy: [], positioning: [] };
  for (const { file, lines } of corpus()) {
    lines.forEach((line, i) => {
      const at = `${file}:${i + 1}`;
      if (NAMES.test(line)) hits.names.push(`${at}  ${line.trim().slice(0, 88)}`);
      if (ADVOCACY.test(line)) hits.advocacy.push(`${at}  ${line.trim().slice(0, 88)}`);
      if (POSITIONING.test(line)) hits.positioning.push(`${at}  ${line.trim().slice(0, 88)}`);
    });
  }
  for (const [k, label] of [['names', 'no participant is named'], ['advocacy', 'no first-person advocacy'], ['positioning', 'no positioning language']]) {
    if (hits[k].length) fail(label, hits[k].join('\n        '));
    else pass(label);
  }
}

/* ---------- requirements ---------- */

function checkRequirements() {
  const src = path.join(ROOT, 'requirements.md');
  if (!fs.existsSync(src)) return warn('requirements present', 'requirements.md not found');
  const md = fs.readFileSync(src, 'utf8');

  // Defined by a table row in requirements.md. Nothing else defines a requirement.
  const defined = [...md.matchAll(/^\|\s*\*\*(R-[A-Z][A-Z-]*)\*\*\s*\|/gm)].map((m) => m[1]);
  if (!defined.length) return fail('requirements parse', 'no requirement rows matched');

  const seen = new Set();
  const dupes = defined.filter((id) => (seen.has(id) ? true : (seen.add(id), false)));
  if (dupes.length) fail('requirement identifiers unique', 'defined twice: ' + [...new Set(dupes)].join(', '));
  else pass('requirement identifiers unique', `${defined.length} requirements`);

  // Every identifier cited anywhere must resolve to one of those rows. This is what
  // makes identifiers safe to add and drop: a trace citing a requirement that no
  // longer exists is caught here rather than read past in session.
  const unresolved = [];
  for (const { file, lines } of corpus()) {
    lines.forEach((line, i) => {
      for (const m of line.matchAll(/\bR-[A-Z][A-Z-]*\b/g)) {
        if (!seen.has(m[0])) unresolved.push(`${file}:${i + 1}  ${m[0]}`);
      }
    });
  }
  if (unresolved.length) fail('requirement citations resolve', [...new Set(unresolved)].join('\n        '));
  else pass('requirement citations resolve');
}

/* ---------- traces ---------- */

/**
 * The trace is the link between Layer 0 and everything below it, and it is
 * load-bearing in both directions.
 *
 * A decision with no trace has nothing to test it against, so it is settled by
 * whoever argues best in the room. Every decision must therefore either carry a
 * trace or say why it has none — "No Layer 0 trace — policy", "— method". A bare
 * dash is the thing this catches: it reads as an omission and is indistinguishable
 * from one.
 *
 * Sub-decisions (a letter suffix) inherit their parent's trace. They decompose a
 * question already tested against Layer 0, and requiring each to restate the
 * parent's trace would produce copying rather than thought.
 *
 * A requirement nothing traces to is a weaker signal: it is the expected state
 * between the coalition adding a requirement and the working group enumerating
 * the decisions beneath it. It warns rather than fails, because failing it would
 * mean inventing a decision to satisfy a hook.
 */
function checkTraces() {
  const reqSrc = path.join(ROOT, 'requirements.md');
  const mapSrc = path.join(ROOT, 'decision-map.md');
  if (!fs.existsSync(reqSrc) || !fs.existsSync(mapSrc)) return;
  const defined = [...fs.readFileSync(reqSrc, 'utf8').matchAll(/^\|\s*\*\*(R-[A-Z][A-Z-]*)\*\*\s*\|/gm)].map((m) => m[1]);
  const map = fs.readFileSync(mapSrc, 'utf8');

  const traced = (cell) => /R-[A-Z]/.test(cell) || /No Layer 0 trace/i.test(cell);

  const untraced = [];
  for (const m of map.matchAll(/^\|\s*(S\d+-\d+)([a-z]?)\s*\|[^|]*\|([^|]*)\|\s*$/gm)) {
    if (m[2]) continue;                       // sub-decision: inherits its parent
    if (!traced(m[3])) untraced.push(m[1]);
  }
  for (const m of map.matchAll(/^### (PDR-S\d+-1) —.*$([\s\S]*?)(?=^### |\Z)/gm)) {
    const trace = m[2].match(/^\*\*Requirement trace\.\*\*(.*)$/m);
    if (!trace || !traced(trace[1])) untraced.push(m[1]);
  }
  if (untraced.length) fail('every decision carries a trace or states it has none', untraced.join(', '));
  else pass('every decision carries a trace or states it has none');

  const uncited = defined.filter((id) => !new RegExp(`\\b${id}\\b`).test(map));
  if (uncited.length) warn('every requirement is traced to', uncited.join(', ') + ' — no decision tests against it, so it is either redundant or the map has a hole');
  else pass('every requirement is traced to');
}

/* ---------- decisions ---------- */

function checkDecisions() {
  let computedTotal = null;
  const src = path.join(ROOT, 'decision-map.md');
  if (!fs.existsSync(src)) return warn('decision map present', 'decision-map.md not found');
  const md = fs.readFileSync(src, 'utf8');
  const roots = (md.match(/^### PDR-S\d+-1 /gm) || []).length;
  const rows = [...md.matchAll(/^\|\s*(S\d+-\d+[a-z]?)\s*\|/gm)].map((m) => m[1]);
  const subs = rows.filter((r) => /[a-z]$/.test(r)).length;
  const actual = { roots, layer2: rows.length - subs, subs, total: roots + rows.length };

  const read = (re) => { const m = md.match(re); return m ? Number(m[1]) : null; };
  const stated = {
    roots: read(/\|\s*Layer 1 root decisions\s*\|\s*(\d+)\s*\|/),
    layer2: read(/\|\s*Layer 2 decisions\s*\|\s*(\d+)\s*\|/),
    subs: read(/\|\s*Sub-decisions below Layer 2[^|]*\|\s*(\d+)\s*\|/),
    total: read(/\|\s*\*\*Total decisions to close\*\*\s*\|\s*\*\*(\d+)\*\*\s*\|/),
  };
  const bad = Object.keys(stated).filter((k) => stated[k] !== null && stated[k] !== actual[k]);
  if (bad.length) fail('sizing table agrees with the map', bad.map((k) => `${k}: table says ${stated[k]}, map has ${actual[k]}`).join('; '));
  else pass('sizing table agrees with the map', `${actual.roots} roots + ${actual.layer2} layer-2 + ${actual.subs} sub = ${actual.total}`);
  return actual.total;
}

/* ---------- decision counts in prose ---------- */

// The sizing table is checked against the map above. Prose that states the total
// separately is not, and has drifted every time a decision was added: "all 91
// decisions", "ninety-one detailed decisions", "22 of 91". This finds a number
// word or digit within three words of "decisions" and requires it to match.
const NUMBER_WORDS = {
  eighty: 80, ninety: 90, hundred: 100,
  'eighty-one': 81, 'eighty-two': 82, 'eighty-three': 83, 'eighty-four': 84, 'eighty-five': 85,
  'eighty-six': 86, 'eighty-seven': 87, 'eighty-eight': 88, 'eighty-nine': 89,
  'ninety-one': 91, 'ninety-two': 92, 'ninety-three': 93, 'ninety-four': 94, 'ninety-five': 95,
  'ninety-six': 96, 'ninety-seven': 97, 'ninety-eight': 98, 'ninety-nine': 99,
};

function checkDecisionCounts(total) {
  if (!total) return;
  const problems = [];
  for (const { file, lines } of corpus()) {
    lines.forEach((line, i) => {
      for (const m of line.matchAll(/((?:[\w-]+\s+){0,3})decisions\b/gi)) {
        const before = m[1].trim().split(/\s+/);
        // "Layer 2 decisions" is a layer number, not a count.
        if (before.some((w) => /^layer$/i.test(w))) continue;
        for (const w of before) {
          const key = w.toLowerCase().replace(/[^a-z-]/g, '');
          const n = /^\d+$/.test(w) ? Number(w) : NUMBER_WORDS[key];
          if (n === undefined || n < 50) continue; // small numbers are sub-counts, not the total
          if (n !== total) problems.push(`${file}:${i + 1}  says ${w}, map has ${total}`);
        }
      }
    });
  }
  if (problems.length) fail('prose decision counts agree with the map', [...new Set(problems)].join('\n        '));
  else pass('prose decision counts agree with the map', `${total}`);
}

/* ---------- option lists ---------- */

function checkOptions() {
  const problems = [];
  for (const { file, lines } of corpus()) {
    const text = lines.join('\n');
    for (const block of text.match(/(?:^- \*\*\([a-z]\)\*\*.*\n)+/gm) || []) {
      const letters = [...block.matchAll(/^- \*\*\(([a-z])\)\*\*/gm)].map((m) => m[1]);
      const expected = letters.map((_, i) => String.fromCharCode(97 + i));
      if (letters.join('') !== expected.join('')) problems.push(`${file}: option letters ran ${letters.join('')} — expected ${expected.join('')}`);
      for (const line of block.split('\n')) {
        const m = line.match(/^- \*\*\([a-z]\)\*\*\s*(.*)$/);
        if (m && m[1].replace(/\*/g, '').trim().length < 6) problems.push(`${file}: truncated option — ${line.trim()}`);
      }
    }
  }
  if (problems.length) fail('option lists well-formed', problems.join('\n        '));
  else pass('option lists well-formed');
}

/* ---------- run ---------- */

console.log('\ngovernance record checks\n');
checkText();
checkRequirements();
checkTraces();
checkDecisionCounts(checkDecisions());
checkOptions();
console.log('');
if (failures) {
  console.log(`${failures} check(s) failed.\n`);
  console.log('If a hit is a false positive, narrow the pattern in site/check.js rather than');
  console.log('bypassing the hook — the pattern is the record of what has gone wrong before.\n');
  process.exit(1);
}
console.log(`all checks passed${warnings ? ` (${warnings} warning)` : ''}\n`);
