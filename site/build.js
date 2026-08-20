#!/usr/bin/env node
/**
 * Builds the static site for the governance repository.
 *
 *   npm install && npm run build      → _site/
 *
 * Three kinds of page:
 *   documents  — top-level .md, rendered as reading pages with navigation
 *   sessions   — sessions/*.md, rendered as 16:9 decks (slides split on `---`)
 *   index      — decision-records/*.md frontmatter, collated into a status table
 *
 * Deliberately unstyled by anyone's brand. The whole site is meant to be
 * handed over and restyled by whoever ends up holding the framework.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, '_site');

// Top-level documents, in reading order.
const DOCS = [
  { file: 'overview.md',     slug: 'index',         nav: 'Overview' },
  { file: 'charter.md',      slug: 'charter',       nav: 'Charter' },
  { file: 'requirements.md', slug: 'requirements',  nav: 'Requirements' },
  { file: 'decision-map.md', slug: 'decision-map',  nav: 'Decision map' },
  { file: 'options.md',      slug: 'options',       nav: 'Options' },
];

main().catch((e) => { console.error(e); process.exit(1); });

async function main() {
  const { marked } = await import('marked');
  marked.setOptions({ mangle: false, headerIds: true });

  fs.rmSync(OUT, { recursive: true, force: true });
  fs.mkdirSync(OUT, { recursive: true });

  const sessions = listSessions();
  const records = readRecords();
  const nav = buildNav(sessions);

  for (const doc of DOCS) {
    const src = path.join(ROOT, doc.file);
    if (!fs.existsSync(src)) { console.warn(`  skip (missing): ${doc.file}`); continue; }
    const body = markOptionLists(marked.parse(fs.readFileSync(src, 'utf8')));
    write(`${doc.slug}.html`, page({ title: doc.nav, body, nav, active: doc.slug }));
    console.log(`  doc      ${doc.file} → ${doc.slug}.html`);
  }

  write('decisions.html', page({
    title: 'Decision register',
    body: decisionIndex(records, marked),
    nav,
    active: 'decisions',
  }));
  console.log(`  index    ${records.length} decision record(s) → decisions.html`);

  write('decisions.json', JSON.stringify(records, null, 2));

  for (const r of records) {
    const md = fs.readFileSync(path.join(ROOT, 'decision-records', r.file), 'utf8')
      .replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '');
    write(`decisions/${r.slug}.html`, page({
      title: r.pdr,
      body: markOptionLists(marked.parse(md)),
      nav,
      active: 'decisions',
      base: '../',
    }));
    console.log(`  record   ${r.file} → decisions/${r.slug}.html`);
  }

  for (const s of sessions) {
    const md = fs.readFileSync(path.join(ROOT, 'sessions', s.file), 'utf8');
    write(`sessions/${s.slug}.html`, deck(md, marked, s.title));
    console.log(`  deck     sessions/${s.file} → sessions/${s.slug}.html`);
  }

  fs.copyFileSync(path.join(__dirname, 'styles.css'), path.join(OUT, 'styles.css'));
  console.log(`\n→ ${OUT}`);
}

/* ---------- inputs ---------- */

function listSessions() {
  const dir = path.join(ROOT, 'sessions');
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter((f) => f.endsWith('.md') && f !== 'README.md')
    .sort()
    .map((file) => {
      const first = fs.readFileSync(path.join(dir, file), 'utf8').split('\n').find((l) => l.startsWith('# '));
      return { file, slug: file.replace(/\.md$/, ''), title: first ? first.replace(/^#\s*/, '') : file };
    });
}

function readRecords() {
  const dir = path.join(ROOT, 'decision-records');
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter((f) => f.endsWith('.md') && f !== 'TEMPLATE.md' && f !== 'README.md')
    .sort()
    .map((f) => {
      const fm = frontmatter(fs.readFileSync(path.join(dir, f), 'utf8'));
      return { file: f, slug: f.replace(/\.md$/, ''), ...fm };
    })
    .filter((r) => r.pdr);
}

/** Minimal frontmatter reader: flat scalars and inline [a, b] arrays. */
function frontmatter(src) {
  const m = src.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return {};
  const out = {};
  for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^([A-Za-z_][\w-]*):\s*(.*)$/);
    if (!kv) continue;
    let [, k, v] = kv;
    v = v.trim();
    if (v.startsWith('[') && v.endsWith(']')) {
      v = v.slice(1, -1).split(',').map((s) => s.trim().replace(/^['"]|['"]$/g, '')).filter(Boolean);
    } else {
      v = v.replace(/^['"]|['"]$/g, '');
    }
    out[k] = v;
  }
  return out;
}

/* ---------- rendering ---------- */

const STATUSES = ['drafted', 'open', 'resolved', 'ratified', 'superseded'];

function decisionIndex(records, marked) {
  const preamble = marked.parse(`
# Decision register

Generated from the records in \`decision-records/\`. It is not maintained by hand, so it cannot drift from what the records actually say.

Every decision the framework requires is listed in the [decision map](decision-map.html). A decision appears here once it has a record — that is, once it has been drafted and opened. An empty register is the correct state before the first substantive session.
`);

  if (!records.length) {
    return preamble + `<p class="empty">No decision records yet. Copy <code>decision-records/TEMPLATE.md</code> to <code>decision-records/PDR-{strand}-{n}.md</code> to open the first one.</p>`;
  }

  const counts = STATUSES
    .map((s) => `<span class="pill s-${s}">${records.filter((r) => r.status === s).length} ${s}</span>`)
    .join(' ');

  const byStrand = {};
  for (const r of records) (byStrand[r.strand || '—'] ||= []).push(r);

  const tables = Object.keys(byStrand).sort().map((strand) => `
    <h2>${esc(strand)}</h2>
    <table>
      <thead><tr><th>PDR</th><th>Question</th><th>Status</th><th>Requirements</th><th>Chair of record</th></tr></thead>
      <tbody>
      ${byStrand[strand].map((r) => `
        <tr>
          <td><a href="decisions/${esc(r.slug)}.html"><code>${esc(r.pdr)}</code></a></td>
          <td>${esc(r.title || '')}</td>
          <td><span class="pill s-${esc(r.status || 'drafted')}">${esc(r.status || 'drafted')}</span></td>
          <td>${(Array.isArray(r.requirements) ? r.requirements : []).map((x) => `<code>${esc(x)}</code>`).join(' ') || '—'}</td>
          <td>${esc(r.chair_of_record || '—')}${(Array.isArray(r.recusals) && r.recusals.length) ? ` <span class="recusal" title="recusal recorded">⚑</span>` : ''}</td>
        </tr>`).join('')}
      </tbody>
    </table>`).join('\n');

  return preamble + `<p class="counts">${counts}</p>` + tables;
}

function buildNav(sessions, base = '') {
  const items = [
    ...DOCS.map((d) => ({ href: `${d.slug}.html`, label: d.nav, key: d.slug })),
    { href: 'decisions.html', label: 'Decision register', key: 'decisions' },
  ];
  const sessionLinks = (base = '') => sessions.length
    ? `<div class="nav-group"><span class="nav-head">Sessions</span>${sessions
        .map((s) => `<a href="${base}sessions/${s.slug}.html">${esc(s.title)}</a>`).join('')}</div>`
    : '';
  return { items, sessionLinks };
}

function page({ title, body, nav, active, base = '' }) {
  const links = nav.items
    .map((i) => `<a href="${base}${i.href}"${i.key === active ? ' class="active"' : ''}>${esc(i.label)}</a>`)
    .join('');
  return `<!doctype html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)} — Property Trust Framework</title>
<link rel="stylesheet" href="${base}styles.css">
</head>
<body>
<nav id="side">
  <div class="nav-title">Property Trust Framework</div>
  <div class="nav-sub">Coalition governance</div>
  <div class="nav-group">${links}</div>
  ${typeof nav.sessionLinks === 'function' ? nav.sessionLinks(base) : nav.sessionLinks}
</nav>
<main>${body}</main>
</body>
</html>
`;
}

/** 16:9 deck. Slides split on a `---` line; first block is the title slide. */
function deck(src, marked, title) {
  const slides = src.split(/\n---\n/).map((s) => s.trim()).filter(Boolean).map((s) => markOptionLists(marked.parse(s)));
  return `<!doctype html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<link rel="stylesheet" href="../styles.css">
</head>
<body class="deck">
<div id="stage">
${slides.map((s, i) => `<section class="slide${i === 0 ? ' active' : ''}">\n${s}\n</section>`).join('\n')}
</div>
<div id="chrome"><span id="num">1</span> / ${slides.length}</div>
<div id="hint">← → to navigate · F for fullscreen · P to print</div>
<script>
  const slides = [...document.querySelectorAll('.slide')];
  const num = document.getElementById('num');
  const hint = document.getElementById('hint');
  let i = 0;
  function show(n) {
    i = Math.max(0, Math.min(slides.length - 1, n));
    slides.forEach((s, k) => s.classList.toggle('active', k === i));
    num.textContent = i + 1;
    location.hash = i + 1;
  }
  addEventListener('keydown', (e) => {
    if (['ArrowRight','PageDown',' ','Enter'].includes(e.key)) { show(i + 1); e.preventDefault(); }
    else if (['ArrowLeft','PageUp','Backspace'].includes(e.key)) { show(i - 1); e.preventDefault(); }
    else if (e.key === 'Home') show(0);
    else if (e.key === 'End') show(slides.length - 1);
    else if (e.key.toLowerCase() === 'f') document.documentElement.requestFullscreen?.();
    else if (e.key.toLowerCase() === 'p') print();
    hint.style.opacity = 0;
  });
  addEventListener('click', (e) => { if (!e.target.closest('a')) show(i + 1); });
  const start = parseInt(location.hash.slice(1), 10);
  show(Number.isFinite(start) && start > 0 ? start - 1 : 0);
  setTimeout(() => (hint.style.opacity = 0), 6000);
</script>
</body>
</html>
`;
}

/* ---------- util ---------- */

/** Tag lists whose items are lettered options, so the letters carry the numbering. */
function markOptionLists(html) {
  return html.replace(/<ul>\s*<li>(?=\s*<strong>\()/g, '<ul class="options"><li>');
}

function write(rel, content) {
  const dest = path.join(OUT, rel);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, content);
}

function esc(s) {
  return String(s ?? '').replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));
}
