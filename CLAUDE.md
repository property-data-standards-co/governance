# CLAUDE.md

Context for working in this repository.

## What this is

The governance record for a property data trust framework being built by the CFIT
Open Property Coalition (Coalition 4), Phase 2. It holds the process, the
requirements, the map of decisions, and the record of each decision as it closes.

It does **not** hold the framework. Normative specification text, schemas and the
conformance suite are separate repositories, populated from decisions resolved here.

## The process model

Four layers. Nothing at a lower layer opens until its parent resolves.

| Layer | Content | Phase |
|---|---|---|
| 0 | 25 testable requirements, ratified | Clarify |
| 1 | Ten root decisions, one per strand | Clarify |
| 2 | ~68 decisions within the strands, as Decision Records | Develop |
| 3 | Normative text, conformance suite, interop results | Implement |

Clarify closes 22 October 2026 and releases the Develop-phase programme, which
**is** the Layer 2 decision schedule. Develop is then one or four months —
a live decision — and Implement is six.

The governing rule, from which most of the drafting follows:

> The coalition agrees the requirements. The requirements decide the architecture.
> Existing work enters as evidence — never as the starting assumption.

Decisions are taken by rough consensus rather than voting. Objections are recorded
permanently and named. Evidence is tiered, with the tiers published before anyone
knows who can satisfy them, counting only results that could have gone the other
way. The method recommends; CFIT decides.

CFIT has confirmed the output is a **specification anyone can implement**, not an
instance somebody operates. Much follows: a specification is conformed to, so it
needs conformance criteria, which is what the requirements are; and it binds every
implementer, not only the pilot.

## The neutrality bar

This is the constraint that matters most, and it is easy to breach by accident.

Everything here is coalition material, written so it could be badged by CFIT as its
own. That means:

- **No participant is named**, and no participant's product, service or prior work
  appears as a baseline. Positions belong in decision records, attributed, when the
  decision opens.
- **No first-person advocacy.** Not "we think", "we would argue", "our position".
  Where an asymmetry between options is real, state it as a consequence that can be
  contested, not as a recommendation.
- **No strategy language.** Anything reasoning about how to win an argument, whose
  interests are served, or how material should be timed for effect does not belong
  in this repository at any point.

Before committing changes to any document, check for advocacy that has crept in:

```
grep -rniE '\bwe (think|argue|would|believe)|\bour (own|position|view)|in our (view|experience)' \
  *.md decision-records/ sessions/ --exclude=CLAUDE.md
```

Expect zero hits. Participants working in this repository should also check for
their own organisation's name, and for the names of any partners or services they
have a commercial relationship with. A document that could be traced to its author
by its examples is not yet neutral.

Some option text legitimately names PDTF 1.0 as a candidate vocabulary in
`decision-map.md` — that is a real option in an open question, not a preference.

### The check that actually works

Pattern matching does not find advocacy. It has been found here three times, and
on each occasion keyword sweeps came back clean while the problem sat in plain
prose. Advocacy lives in commentary blocks, not in detectable phrases.

The reliable check is structural. Enumerate every commentary block in a document
and read them:

```
grep -oE '^\*\*[A-Z][^.*]{2,75}\.?\*\*' decision-map.md | sort | uniq -c | sort -rn
```

Anything that is not `Question`, `Options`, `Requirement trace` or `Opens` is
commentary, and commentary is where it hides. There are around seventy-five such
blocks in the decision map; reading them takes a few minutes and is the only
method that has worked.

### The tell

**Advocacy reasons about the reader. Analysis reasons about the decision.**

Removed from this repository on that test: *"the one most worth investing in
explaining"*, *"the one most likely to succeed"*, *"does more for the credibility
of the process than a dozen resolved ones"*, *"the strongest single idea to put in
front of the coalition"*, *"answers the question before it is asked"*. Every one is
a claim about how an audience will respond.

Kept on the same test: *"constrains what is available to PDR-S6-10"*, *"the options
differ in how they behave over real sequences of amendment"*, *"a transaction-scoped
document cannot outlive its transaction"*. Every one is a claim about the subject
matter.

The question to ask of any sentence: **would it still make sense if there were no
audience in the room?** If not, it is positioning, and it belongs in a participant's
own working material rather than here.

## Supporting material stays out

Participants will keep private working material — worked positions, build
hypotheses, evidence assessments, correspondence. None of it belongs here, and it
should live outside this repository rather than in a gitignored subdirectory of it,
which is a failure mode waiting to happen.

The test for which side something belongs on: **would it read the same if a
competitor had written it?** If yes, it belongs here.

## Chairing and declared interests

Most participants able to contribute detailed technical work in this domain also
build in it. Charter §11.1 governs the resulting conflict: two chairs per strand who
must not share a material interest, and where a chair's organisation has tabled a
position on an open decision, **the other chair frames the question and judges
consensus on it**.

Recusals are recorded in the decision record's chair-of-record field whether or not
anyone asked for them. When drafting or reviewing a record, treat a missing
chair-of-record entry as incomplete rather than optional.

## Conventions

**Decision records** are one file per decision, `decision-records/PDR-{strand}-{n}.md`,
copied from `TEMPLATE.md`. A record is created when the decision is *drafted* —
question framed and published — not when it is resolved.

**The register is generated**, never hand-written. `decisions.html` is built from
record frontmatter. If you find yourself editing an index by hand, something has
gone wrong: fix the generator instead.

**Options are lettered lists**, and the letters are literal text because other
documents cite options by letter. Never renumber an existing option; add new ones
at the end. The same applies to requirement numbers: they are identifiers cited in
every requirement trace, allocated on addition and never reused. They were
renumbered once, before publication, so that they currently read in sequence — the
first requirement added after that will break the sequence, and that is fine. Check
the set with the build's contiguity report, not by scanning for order.

**Sessions** are markdown in `sessions/`, rendered as 16:9 decks. Slides split on a
`---` line, first block is the title slide.

## Building

```
npm install
npm run build      # → _site/
npm run serve      # → http://localhost:8080
```

Every document renders as a reading page, every session file as a deck, and both
print cleanly — printing from the browser is the supported route to PDF. There is
deliberately no second rendering pipeline to keep in step.

**Gotcha:** the in-app browser pane caches `styles.css` aggressively across tabs and
hard reloads. If a style change appears not to apply, check
`document.styleSheets[0].cssRules.length` before suspecting the CSS. A stale count
means the pane; restart the server on a different port to get an uncached origin.

## Writing style

The documents have a consistent voice and it is worth matching: spare, declarative,
British English. Arguments are made in terms of the requirements. Counter-arguments
are stated rather than avoided — several sections exist specifically to name the
strongest objection to their own content. Tables carry structure; prose carries
reasoning. Avoid bullets where a sentence will do.
