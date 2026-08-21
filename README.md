# Property Trust Framework — coalition governance

The record of how the framework is decided, and what was decided.

This repository holds the process, the requirements everything is tested against, the map of every decision the framework requires, and — as they close — a record of each decision with its options, evidence, resolution and objections.

It does not hold the framework itself. Normative specification text, schemas and the conformance suite are separate repositories, populated from decisions resolved here.

## Start here

| | |
|---|---|
| [Overview](overview.md) | The method in two pages |
| [Charter](charter.md) | How a decision is made: lifecycle, consensus rule, evidence tiers, chairing and recusal |
| [Requirements](requirements.md) | Layer 0. The properties the framework must have, each with a test |
| [Decision map](decision-map.md) | All 88 decisions, their dependencies, and what it would take to close them |
| [Options](options.md) | Candidate options for the 18 decisions that cannot be settled in a session |
| [`decision-records/`](decision-records/) | One record per decision, opened as the coalition reaches it |

## How the process works, in one paragraph

The coalition ratifies the requirements. The requirements decide the architecture. Existing work enters as evidence and never as the starting assumption. Decisions are taken by rough consensus rather than voting, with objections recorded permanently and named, and evidence weighed on a hierarchy published before anyone knows who can satisfy it. Where consensus cannot be reached, the working group refers the decision on a full record. The method recommends; CFIT decides.

## Working conventions

**Issues are objections and proposals.** Raising an issue against a decision record is how an objection enters the record. It is timestamped, attributed and permanent, which is exactly what the charter requires of objections — so the ordinary way of working produces the audit trail rather than someone having to maintain one.

**Pull requests are drafts.** Changes to requirements, options or records are proposed as pull requests and discussed there. Nothing substantive is edited in place without a trail.

**The decision register is generated, never hand-written.** `decisions.html` is built from the frontmatter of the records themselves, so the index cannot drift from what the records say.

**Nothing here is anyone's product.** No participant's prior work is a baseline. Contributions are attributed where they are positions, and unattributed where they are process.

## Building the site

```
npm install
npm run build      # → _site/
npm run serve      # → http://localhost:8080
```

Every document renders as a reading page, every file in `sessions/` renders as a 16:9 deck (arrow keys to navigate, `F` for fullscreen, `P` to print to PDF), and the decision register is collated from the records. GitHub Pages publishes on push to `main`.

Every page prints cleanly — navigation drops away, links resolve to their URLs, and tables and options avoid breaking across pages. Printing to PDF from the browser is the supported way to get a document on paper; there is no separate PDF build to keep in step.

Not everyone who should be able to read this uses GitHub. The published site is the answer to that, and it matters that it stays readable without a login — the charter asks for balance across originators, professional users, platforms, suppliers and consumer interests, and a record only legible to people comfortable with pull requests does not deliver it.

## Licence

Prose and documentation: **CC BY 4.0**. Code, schemas and test vectors: **Apache 2.0**. See [LICENCE.md](LICENCE.md).

Both permit commercial use and derivative works. That is deliberate: a standard that cannot be built on commercially, or forked if its custodian fails, is not open in the sense that matters — and it is not one that government can reference.

## Custody

This repository is coalition material. It is intended to sit with whoever holds the framework, and to transfer with it.
