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
  const nums = [...fs.readFileSync(src, 'utf8').matchAll(/^\|\s*\*\*R(\d+)\*\*\s*\|/gm)].map((m) => Number(m[1])).sort((a, b) => a - b);
  if (!nums.length) return fail('requirements parse', 'no requirement rows matched');
  const highest = nums[nums.length - 1];
  const gaps = [];
  for (let i = 1; i <= highest; i++) if (!nums.includes(i)) gaps.push('R' + i);
  const dupes = nums.filter((n, i) => nums[i - 1] === n);
  if (gaps.length || dupes.length) {
    fail('requirements contiguous', [gaps.length ? 'missing ' + gaps.join(', ') : '', dupes.length ? 'duplicate R' + dupes.join(', R') : ''].filter(Boolean).join('; '));
  } else pass('requirements contiguous', `${nums.length}, R1-R${highest}`);
}

/* ---------- decisions ---------- */

function checkDecisions() {
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
checkDecisions();
checkOptions();
console.log('');
if (failures) {
  console.log(`${failures} check(s) failed.\n`);
  console.log('If a hit is a false positive, narrow the pattern in site/check.js rather than');
  console.log('bypassing the hook — the pattern is the record of what has gone wrong before.\n');
  process.exit(1);
}
console.log(`all checks passed${warnings ? ` (${warnings} warning)` : ''}\n`);
