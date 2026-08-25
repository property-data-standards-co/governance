# Decision Hierarchy for the Property Trust Framework

**The map of what has to be decided.** Companion to *Building the Trust Framework by Consensus*.

**Status:** Draft for discussion · **Date:** 6 August 2026

Offered for the coalition to use, amend or issue as its own. This is the Layer 1 output the method asks Clarify to produce: every decision the framework requires, what each is tested against, what depends on what, and how large the job is.

---


## 1. How to read this

This is the proposed map of everything the coalition has to decide, arranged so that each decision is genuinely open, each is testable against agreed requirements, and each opens a known set of sub-decisions beneath it.

**Requirement trace** appears throughout: which Layer 0 requirements the decision is tested against. This is what makes a decision arguable on the merits rather than by preference. No requirement is yet ratified, so every trace is conditional: it names what the decision *would* be tested against, and a requirement amended or rejected at Layer 0 changes what its traces mean.

A decision either carries a trace or states that it has none and why. The two that state it — one policy, one method — are decisions the requirements do not reach, and marking them is not a formality: a decision with nothing to test it against is settled by argument in the room, which is what the requirement layer exists to replace. Sub-decisions inherit the trace of the question they decompose.

**The option sets are not exhaustive.** They are what drafting produced, and an option nobody has thought of is not evidence that the list is complete. Adding one is the expected first act of a working group opening a decision, and options are cited by letter elsewhere, so a new option takes the next free letter at the end of the list rather than displacing what is there.

Reading the map before Layer 0 closes is how the consequences of a requirement can be seen before it is ratified. A requirement is a sentence; what it commits the coalition to is a set of decisions, and those are here.

Decision identifiers use `PDR-{strand}-{n}`.

---

## 2. Layer 0 — requirements

Everything below descends from the requirements, and they are not reproduced here.
They live in [requirements.md](requirements.md), which is the single place they are
maintained: the purpose statement, the candidate requirements each with an explicit
test, which of them are architecturally determinative, the tensions between them,
and the candidates considered and not proposed.

Each decision below carries a **requirement trace** naming the requirements it is
tested against. Those references are the link between the two documents, so a
requirement that is amended or rejected changes what the traces mean — which is why
Layer 0 is ratified before any decision beneath it opens.

## 3. The strand map (Layer 1)

Ten strands, S0 to S9. Each has exactly one root question, all of which are decided together in the first wave.

| # | Strand | Root question | Depends on |
|---|---|---|---|
| **S0** | Scope | What transactions, parties, jurisdictions and data are in scope? | — |
| **S1** | Semantics | What is the shared vocabulary of property facts, and where does it come from? | S0 |
| **S2** | Subjects & identity | What are facts *about*, and how are those things named? | S0 |
| **S3** | Assertions | What is the atomic unit of assertion, and what does it carry? | S2 |
| **S4** | Authority & trust | Who may assert what, and how is that authority established and verified? | S3 |
| **S5** | Exchange | How does data move between parties? | S3, S4 |
| **S6** | Consent & privacy | Who may see what, on what lawful basis, and how is that enforced? | S3, S4 |
| **S7** | Lifecycle | How do facts change, expire, get corrected, and get withdrawn? | S3 |
| **S8** | Governance | Who operates the framework, admits participants, and handles failure and redress? | S0 |
| **S9** | Adoption | How does the sector get from here to there? | all |

**S2 → S3 → S4 is the spine.** Everything else is consequential. If those three are decided coherently, the rest of the tree is mostly detail; if they are decided incoherently, no amount of care elsewhere recovers it.

---

## 4. The first wave: ten root decisions

These are decided together, at plenary, tested directly against Layer 0. They are the decisions with the highest cost of being wrong and the lowest cost of being decided early.

### PDR-S0-1 — Scope

**Question.** What is in scope: which transaction types, which parties, which jurisdictions, and does the framework cover only sale/purchase or also the wider property lifecycle?

**Requirement trace.** R-REUSE (reuse across transactions materially depends on scope), R-INCREMENTAL.

**Options.**
- **(a)** Residential sale and purchase, England & Wales, transaction-only.
- **(b)** As (a), plus the property's enduring record between transactions — the "logbook".
- **(c)** As (b), plus lettings, remortgage and new build.
- **(d)** UK-wide, including Scotland's distinct process.


**Opens.** Everything. Scope decisions cascade further than any other.

**Note for the coalition.** (a) and (b) look similar but are architecturally very different. R-REUSE is close to unsatisfiable under (a): if nothing outlives the transaction, nothing can be reused by the next one.

---

### PDR-S1-1 — Vocabulary inheritance

**Question.** From where does the framework take its vocabulary of property facts?

**Requirement trace.** R-SEMANTICS, R-EXTENSION, R-INCREMENTAL.

**Options.**
- **(a)** Adopt the PDTF Schema, currently v3.6, as baseline, extended by agreement.
- **(b)** Start from an external ontology.
- **(c)** Start fresh from sector consultation.
- **(d)** Adopt the PDTF Schema plus mandatory alignment to named external vocabularies where they exist.


**Opens.** PDR-S1-2 (extension and namespacing), PDR-S1-3 (external vocabulary alignment), PDR-S1-4 (form overlay mechanism), PDR-S1-5 (versioning of the vocabulary).

---

### PDR-S2-1 — Subject model

**Question.** What are facts attached to: the transaction, or persistent real-world subjects?

**Requirement trace.** R-SUBJECT (stable identifiers persisting beyond a transaction), R-REUSE, R-MINIMISATION (a fact bound into a monolithic pack cannot be disclosed alone).

**Options.**
- **(a)** Transaction-scoped: all facts belong to a transaction record.
- **(b)** Subject-scoped: facts attach to identified subjects (property, title, person, organisation), and transactions reference them.
- **(c)** Hybrid: subject-scoped for enduring facts, transaction-scoped for process facts.


**Requirement consequences.** (a) fails R-REUSE on its face and fails R-MINIMISATION structurally. That leaves (b) against (c), and the difference turns on whether facts that are genuinely about *this sale* — the number of sellers, the existing lender, whether it is a limited company sale — can be attached to the property without distortion. Whichever is chosen, the boundary needs a criterion that can be applied consistently by different parties, and agreeing that criterion may matter more than agreeing the option.

**Opens.** PDR-S2-2 (entity set), PDR-S2-3 (identifier schemes per subject type), PDR-S2-4 (relationship model), PDR-S2-5 (identifier evolution: unregistered title → registered, new build → UPRN), PDR-S2-6 (multi-property / multi-title cardinality).

---

### PDR-S3-1 — Unit of assertion

**Question.** What is the atomic unit in which a fact enters the framework, and what must it carry?

**Requirement trace.** R-INDEPENDENCE, R-PROVENANCE, R-WITHDRAWAL, R-LIABILITY, R-MINIMISATION.

**Options.**
- **(a)** API responses from an authoritative platform.
- **(b)** Signed documents/payloads with a defined provenance envelope.
- **(c)** Verifiable credentials in the W3C/IETF sense — independently verifiable signed assertions with issuer, subject, validity, status and evidence.
- **(d)** Notarised events on a shared ledger.


**Requirement consequences.** This is the decision where the requirements do most of the work. (a) fails R-INDEPENDENCE outright — if trust in a fact reduces to trust in whoever served it, there is no trust framework. (b) is a partial answer and, pursued rigorously, converges on (c) while forgoing all external tooling and alignment, so fails R-ALIGNMENT. (d) fails R-MINIMISATION and R-CONTROLLER for personal data and introduces a shared-infrastructure dependency in tension with R-DATA-PATH.

**Deliberately not decided here.** Two things sit below this decision and must not be run together with it: the *format* (SD-JWT-VC vs mdoc vs JSON-LD Data Integrity, PDR-S3-2) and the *typology* (whether the framework defines named credential types, PDR-S3-9). Conflating either with the root concept is the most likely way to lose this decision on an irrelevance — a participant with a view about JSON-LD, or about how many credential types there should be, should not thereby be voting on whether facts are independently verifiable at all.

**Opens.** PDR-S3-2 (credential format and securing mechanism), PDR-S3-3 (instance granularity), PDR-S3-4 (evidence and provenance model), PDR-S3-5 (assurance/trust levels), PDR-S3-6 (merge and conflict semantics), PDR-S3-7 (selective disclosure), PDR-S3-9 (credential typology).

---

### PDR-S4-1 — Locus of trust

**Question.** How does a relying party establish that an issuer was entitled to assert what it asserted?

**Requirement trace.** R-PARTICIPATION, R-DATA-PATH, R-ENTRY (no gatekeeper, open entry), R-INDEPENDENCE, R-LIABILITY.

**Options.**
- **(a)** Bilateral: parties trust those they have contracts with.
- **(b)** Central registry: a single operator maintains the list of who may say what, queried at verification time.
- **(c)** Federated: a trust anchor publishes signed statements; authority is resolved by a signed chain, verifiable offline, with intermediates able to onboard subordinates.
- **(d)** Reliance on an existing external scheme without a property-specific layer.
- **(e)** Statutory designation: legislation names who is authoritative for what.
- **(f)** Regulator-derived: authority follows from existing professional regulation and accreditation.
- **(g)** Relying-party policy: each verifier maintains its own trust list, chosen from published sources.
- **(h)** Multi-attestor: authority established by several independent attestations rather than one anchor.


**A distinction that may matter more than the option.** Property has two kinds of authority, and they may not want the same mechanism. Some facts have a single authoritative source that is already settled outside this framework — the title register is the title register, and there is no competing claimant. Other facts are asserted by professionals of whom there are many: a surveyor's valuation, a conveyancer's assertion about a matter, an agent's listing. The first kind needs a way to *express* an authority that already exists; the second needs a way to *establish* one. A decision that assumes both are the same problem may answer neither well.

- **(a) Bilateral.** Parties trust those they hold contracts with.
- **(b) Central registry.** One operator maintains the list of who may assert what, queried at verification time.
- **(c) Federated.** A trust anchor publishes signed statements; authority is resolved by following a signed chain, verifiable offline, with intermediates able to onboard subordinates.
- **(d) External scheme reliance.** An existing identity or assurance scheme carries it, with no property-specific layer.
- **(e) Statutory designation.** Legislation names the authoritative source for each class of fact, and the framework expresses rather than establishes it.
- **(f) Regulator-derived.** Authority follows from existing professional regulation — the bodies that already license conveyancers, surveyors and agents — mapped onto classes of assertion.
- **(g) Relying-party policy.** Each verifier maintains its own trust list, assembled from published sources, as browsers do with root stores.
- **(h) Multi-attestor.** Authority is established by several independent attestations rather than a single anchor, with a relying party setting its own threshold.

**Requirement consequences, option by option.**

(a) fails R-PARTICIPATION and R-REUSE — a fact is reusable only by parties holding a contract with the issuer, which is the condition the framework exists to remove.

(b) is the mechanism most comparable sectors have actually built, and it works. It is in tension with R-DATA-PATH and fails R-PARTICIPATION's test if the operator can refuse a conformant participant. The counter-argument is that a registry consulted about *authority* is not a registry that data flows through; whether that distinction survives when the registry is universally required is contestable and should be tested rather than assumed. It also concentrates a control point that government would subsequently have to regulate, which bears on S8-2 and S8-8.

(c) satisfies R-PARTICIPATION and R-DATA-PATH well and depends on operational capability that is not widely deployed in the UK. The burden of operating an anchor falls on somebody, and who that is becomes S8-1 and S8-2. Verification being possible offline is its strongest property against R-DATA-PATH.

(d) is attractive for identity and has no established mechanism for expressing *domain* authority. Certifying that an organisation is a trustworthy identity provider is a different statement from establishing that a particular body is authoritative for title extents and an energy assessor is not. Whether that gap can be closed inside an existing scheme is S4-8 and depends on that scheme's owners.

(e) is strong where it applies: statutory authority is objective, published and appealable almost by definition, which satisfies R-ENTRY without the framework doing anything. Much authoritative property data already has a statutory home. It is slow, inflexible, covers only the sources that legislation names, and is not the coalition's to decide — but it may mean the framework needs to establish authority for far fewer parties than it first appears.

(f) is politically strong and cheap, because the firms concerned already hold regulated status and R-SMALL-FIRM is easier if nothing new must be obtained. Its weakness is coverage and fit: not every data source has a regulator, and regulatory permission to practise is not the same statement as authority over a class of fact.

(g) satisfies R-PARTICIPATION and R-DATA-PATH trivially, since no one can refuse anyone. It weakens R-SEMANTICS and R-REUSE in practice — reuse becomes contingent on each verifier's list — and pushes cost onto every relying party, which cuts against R-SMALL-FIRM.

(h) removes the single point of refusal and is resilient, at the cost of being hard to reason about and weak on R-LIABILITY: when several attestors disagree, it may be unclear who is answerable for a false assertion.

**These compose.** (e) for statutorily-designated sources, (f) for regulated professionals, and (c) or (b) for everyone else is a coherent combination, and probably a more honest description of the domain than any single option. The decision may be which mechanism applies to which class of issuer rather than which mechanism wins outright.

**Framing constraint.** This decision should not settle PDR-S4-3 by implication. Whether authorisation binds to a coarse role or to specific classes of fact is a separate question, and several of the options above are compatible with either answer.

**A question this decision should not assume away.** Authority in property may not be role-shaped. An issuer can be authoritative for particular facts without being authoritative for a whole category — the parties authoritative for a title extent, a flood risk, and a seller's answer about a boundary dispute are all different, and one of them is not authoritative for the others. Whether authorisation binds to roles or to specific data paths is PDR-S4-3, and this decision should be framed so that it does not settle S4-3 by implication.

**Opens.** PDR-S4-2 (trust anchor operation), PDR-S4-3 (authorisation granularity — path-level vs role-level), PDR-S4-4 (accreditation criteria and process), PDR-S4-5 (intermediates and delegation), PDR-S4-6 (assurance levels), PDR-S4-7 (multiple issuers for the same fact), PDR-S4-8 (relationship to external identity infrastructure), PDR-S4-10 (representation of externally-established authority).

---

### PDR-S5-1 — Exchange model

**Question.** How does data move between parties?

**Requirement trace.** R-PARTICIPATION, R-DATA-PATH, R-ALIGNMENT, R-EXTENSION, R-MINIMISATION.

**Options.**
- **(a)** Central hub/clearing house.
- **(b)** Point-to-point APIs against a common specification.
- **(c)** Standard credential issuance and presentation protocols with federation-based discovery.
- **(d)** Wallet-mediated, holder-presented only.
- **(e)** Replication: participating systems synchronise transaction state between themselves, and a party reads from whichever holds a copy.
- **(f)** A combination — replication between platforms, presentation to parties outside them.


**Note.** (a) fails R-DATA-PATH directly. Between (b) and (c) the question turns on R-ALIGNMENT and R-EXTENSION: bespoke APIs work but strand the sector from the wallet ecosystem and require coordinated change for every extension.

(e) is how much property data moves today, and it was absent from earlier drafts of this decision. It is not a variant of the others: under request-and-response there is a disclosure decision at the moment a question is asked, and under replication there is not, because the receiving system already holds everything. R-COPIES applies the permission model to copies regardless; what remains open is whether replication is permitted, and under what conditions. See PDR-S5-9.

**Opens.** PDR-S5-9 (replication), PDR-S5-10 (subject discovery), PDR-S5-2 (issuance protocol), PDR-S5-3 (presentation protocol), PDR-S5-4 (issuer discovery), PDR-S5-5 (security profile), PDR-S5-6 (API surface over composed state), PDR-S5-7 (state composition rules), PDR-S5-8 (backward-compatible output for existing consumers).

---

### PDR-S6-1 — Access and consent model

**Question.** What determines whether a party may see a given fact?

**Requirement trace.** R-MINIMISATION, R-CONTROLLER, R-PARTICIPATION, R-LIABILITY.

**Options.**
- **(a)** Platform-enforced role checks.
- **(b)** Central access-control service.
- **(c)** Graph-derived: authority to read follows from verifiable relationships to the transaction, plus explicit delegated consent for parties outside it.
- **(d)** Holder-mediated only: nothing is disclosed except by the data subject presenting it.


**Note.** R-PUBLIC and R-ABSENCE bear directly on this decision and should be settled before it opens: if permission is not the gate for public facts, and the subject cannot be relied on to act, then options resting on subject-mediated permission are constrained before the argument starts. (d) is the purist wallet answer and fails R-SMALL-FIRM/R-INCREMENTAL in practice — a conveyancing transaction cannot stall on a seller being available to present each fact. (c) needs to be argued carefully against data protection law: the controller/processor analysis for each flow is a real piece of work and should be commissioned early, because getting it wrong invalidates decisions downstream in S6 and S7.

**Opens.** PDR-S6-2 (terms of use model), PDR-S6-3 (consent artefacts and revocation), PDR-S6-4 (controller/processor mapping), PDR-S6-5 (encryption at rest and in transit between parties), PDR-S6-6 (minimisation and selective disclosure policy), PDR-S6-7 (audit and subject access), PDR-S6-9 (disclosure classification), PDR-S6-10 (entitlement demonstration).

---

### PDR-S7-1 — Lifecycle and currency

**Question.** How does a relying party know that a fact is still true?

**Requirement trace.** R-WITHDRAWAL, R-REUSE, R-LIABILITY.

**Options.**
- **(a)** Timestamp only — consumers judge staleness.
- **(b)** Issuer-declared validity periods.
- **(c)** Active status checking (revocation/suspension lists).
- **(d)** Re-issuance on demand.


**Note.** The status mechanism follows from S3-2 rather than being an independent choice — W3C Bitstring Status List and IETF Token Status List are the same design, paired with different securing mechanisms. These two decisions should be taken together or one will be redone.

**Opens.** PDR-S7-2 (status mechanism), PDR-S7-3 (validity and refresh policy per data type), PDR-S7-4 (correction vs withdrawal), PDR-S7-5 (supersession), PDR-S7-6 (privacy of status checking — status lookups leak interest in a subject), PDR-S7-7 (long-term verifiability after key rotation).

---

### PDR-S8-1 — Framework operation

**Question.** What body operates the framework, and what powers does it have?

**Requirement trace.** R-PARTICIPATION, R-DATA-PATH, R-ENTRY, R-LIABILITY.

**Options.**
- **(a)** Government body.
- **(b)** Independent not-for-profit with sector governance.
- **(c)** Existing sector body extended.
- **(d)** Regulated scheme under statutory backing.


**Note.** A distinction this decision turns on, whichever option is chosen: **operating the trust anchor is not the same as operating infrastructure that data flows through.** A trust anchor publishes signed statements that anyone can fetch and cache; it can be offline for a day without stopping a single transaction. Whether the distinction holds is itself contestable — an anchor that is universally required is a dependency even if it is not in the data path — and it should be tested rather than assumed.

**Opens.** PDR-S8-2 (legal form and funding), PDR-S8-3 (accreditation and appeals), PDR-S8-4 (conformance and certification), PDR-S8-5 (liability allocation and redress), PDR-S8-6 (change control), PDR-S8-7 (IP and licensing), PDR-S8-8 (relationship to government reform programme and any statutory footing).

---

### PDR-S9-1 — Adoption path

**Question.** How does the sector move from current practice to the framework?

**Requirement trace.** R-INCREMENTAL, R-SMALL-FIRM.

**Options.**
- **(a)** Flag day.
- **(b)** Parallel running with dual output.
- **(c)** Voluntary adoption with market incentives.
- **(d)** Mandated by regulation on a timetable.


**Opens.** PDR-S9-2 (legacy format emission and for how long), PDR-S9-3 (small firm on-ramp), PDR-S9-4 (originator adoption sequence — HMLR, MHCLG, local authorities), PDR-S9-5 (incentives and mandates), PDR-S9-6 (pilot design).

---

## 5. Layer 2 — the decisions within each strand

Every strand's Layer 2 decisions are enumerated below. **Enumeration is not the same as answering them**, and the distinction is deliberate:

- **Enumerated** — we know what the decision is. Needed so the work can be sized, and so nothing arrives by surprise.
- **Answered** — resolved by the coalition against ratified requirements. That is Develop-phase work. Nothing below Layer 1 is answered here, and pre-empting it would defeat the purpose of the exercise.

Every decision below is open. Where one has a well-understood set of candidate answers, the question is phrased so that they are visible in it.

**When a decision splits.** A decision divides into sub-decisions only when it cannot be resolved in a single working session because its parts have **different requirement traces, different evidence needs, or different owners**. Otherwise it stays whole, however large it looks. On that test only PDR-S3-9 currently splits (§5.1): its parts need schema analysis, legal input and implementation evidence respectively, and no one session could take them together.

**Decisions are enumerated here, not worked through.** A row states the question and what it is tested against. Options, the assessment of options against requirements, and the reasoning that favours one are the work of the group that opens the decision, and they belong in its decision record with the positions attributed. Nothing at Layer 2 is open, so nothing here should read as though it has been argued.

### S0 — Scope

| PDR | Question | Trace |
|---|---|---|
| S0-2 | Which property types — residential only, or new build, leasehold, shared ownership, commercial? | R-INCREMENTAL |
| S0-3 | Which jurisdictions? | R-EXTENSION, R-INCREMENTAL |
| S0-4 | Which transaction types — sale and purchase only, or also remortgage, transfer of equity, lettings? | R-REUSE |
| S0-5 | Where is the boundary between the transaction record and the enduring property record? | R-SUBJECT, R-REUSE |
| S0-6 | Which party types must the framework model? | R-LIABILITY |
| S0-7 | Which data categories are in and out of scope? | R-MINIMISATION |
| S0-8 | **Does framework scope equal pilot scope?** CFIT's Product & Service Design paper scopes out new build, commercial, social housing, shared ownership and Scotland *for the pilot*. Does the framework inherit those exclusions? | R-EXTENSION, R-INCREMENTAL |

**S0-8 is the one to raise early.** It is not in anyone's question list and it is cheap to get wrong by inattention — the exclusions are sensible for a pilot and would be damaging in a standard.

### S1 — Semantics

| PDR | Question | Trace |
|---|---|---|
| S1-2 | Extension and namespacing — how does a participant add a data category without central coordination? | R-EXTENSION |
| S1-3 | Alignment with external vocabularies (RICS Data Standard, OSCRE, ISO 20022) | R-SEMANTICS, R-ALIGNMENT |
| S1-4 | Form overlay mechanism — BASPI, NTS, TA forms, CON29R | R-SEMANTICS, R-RENDERING |
| S1-5 | Vocabulary versioning — what constitutes a breaking change, and may versions coexist? | R-EXTENSION |
| S1-6 | Who maintains the vocabulary, and under what change process? | R-PARTICIPATION, R-ENTRY |

### S2 — Subjects & identity

| PDR | Question | Trace |
|---|---|---|
| S2-2 | What is the entity set? | R-SUBJECT, R-REUSE |
| S2-3 | Identifier scheme per subject type | R-SUBJECT, R-IDENTIFIERS |
| S2-4 | Relationship model | R-INDEPENDENCE, R-WITHDRAWAL |
| S2-5 | Identifier evolution | R-SUBJECT |
| S2-6 | Cardinality | R-SEMANTICS |
| S2-7 | Person identity binding | R-ALIGNMENT, R-REUSE |
| S2-8 | Organisation identity | R-LIABILITY |

**S2-4 carries further than its position in the strand suggests.** Whether relationships are signed assertions or fields on a record determines whether authority can be checked independently or must be taken from whoever serves the data (R-INDEPENDENCE), and it constrains what is available to S6-10 for demonstrating entitlement. A decision taken here on ergonomic grounds will be discovered later as an access-control constraint.

### S3 — Assertions

| PDR | Question | Trace |
|---|---|---|
| S3-2 | Credential format | R-ALIGNMENT, R-MINIMISATION, R-CLASSIFICATION, R-ARTEFACT |
| S3-3 | Instance granularity — how much data a single credential covers | R-EXTENSION |
| S3-9 | Credential typology — does the framework define a fixed set of named credential types? | R-SEMANTICS, R-EXTENSION, R-LIABILITY, R-INDEPENDENCE |
| S3-4 | Evidence model — how is documentary evidence bound to an assertion, carried or referenced, and protected | R-PROVENANCE, R-ARTEFACT, R-CONFIDENTIALITY |
| S3-5 | Assurance levels | R-PROVENANCE, R-LIABILITY |
| S3-6 | Merge semantics | R-SEMANTICS, R-EXTENSION |
| S3-7 | Selective disclosure | R-MINIMISATION |
| S3-8 | Assertion identifiers | R-SEMANTICS |

**S3-6 is genuinely open.** No prior work known to the coalition resolves it, and it is one of the decisions least likely to be settled by argument — the options differ in how they behave over real sequences of amendment, which is an empirical question. It is a candidate for a build round or an interop event rather than a session.

**S3-3 and S3-9 are different questions and must not be run together.** *Instance granularity* is how much data one credential happens to carry; *typology* is whether the framework defines named types at all. They are independent: a framework can define `EnvironmentalCredential` as a type while leaving an issuer free to issue one instance covering the whole of it or several covering parts. Conflating them makes the typology question look like a mandate on issuer behaviour, which it need not be.

### 5.1 PDR-S3-9 — sub-decisions

The only decision in the map that currently splits, on the rule in §5. Its parts are enumerated because the sizing in §7 counts them; the question itself sits in the S3 table above.

| # | Question | Note |
|---|---|---|
| S3-9a | **What is the decomposition axis?** | Candidates cut differently: by the schema's top-level properties, by authoritative source, by refresh cadence, by confidentiality class, by consumer need. The authority axis bears on S4 — a type spanning two authorities cannot be authorised at type level and falls back to paths. |
| S3-9b | **How many types, and do they nest?** | A supertype with subtypes, or only leaves. Nesting helps composition and query; flat is simpler to authorise. |
| S3-9c | **Is the typology binding or advisory?** | MUST an issuer use the defined type for data falling within it, or MAY it? |
| S3-9d | **Versioning semantics.** | What constitutes a breaking change to a type, given that credentials outlive schema revisions and verifiers must accept concurrent versions. |
| S3-9e | **Facts that span types.** | Boundary disputes, rights of way, flying freeholds — the Property/Title seam of S2-7 at finer grain. |
| S3-9f | **Composition invariance.** | Whether composing the entity graph must yield the same state regardless of how many credentials carried the data, and whether that belongs in the conformance suite. |
| S3-9g | **Catch-all type.** | Retain a generic type for uncovered data, or require a named type for everything. |
| S3-9h | **Migration.** | What happens to credentials already issued as an undifferentiated type. |

### S4 — Authority & trust

| PDR | Question | Trace |
|---|---|---|
| S4-2 | Trust anchor operation | R-DATA-PATH |
| S4-3 | Authorisation granularity | R-INDEPENDENCE, R-LIABILITY |
| S4-4 | Accreditation | R-ENTRY |
| S4-5 | Intermediates | R-PARTICIPATION, R-SMALL-FIRM |
| S4-6 | Assurance levels | R-PROVENANCE |
| S4-7 | Competing issuers | R-PARTICIPATION |
| S4-8 | External alignment | R-ALIGNMENT |
| S4-9 | Small firm participation | R-SMALL-FIRM |
| S4-10 | Representation — how is externally-established authority expressed so a machine can check it, and how current must it be? | R-AUTHORITY, R-PROVENANCE, R-WITHDRAWAL, R-ENTRY |

**S4-7 and S4-9 bear on adoption rather than architecture**, and both are commonly settled late by default. S4-7 determines whether the framework permits competition for the same data or confers exclusivity, which R-PARTICIPATION constrains. S4-9 determines whether a small firm can participate at all, which R-SMALL-FIRM constrains — and a framework that satisfies every other requirement while failing this one will not be adopted.

---

### S5 — Exchange

| PDR | Question | Trace |
|---|---|---|
| S5-2 | Issuance protocol | R-ALIGNMENT |
| S5-3 | Presentation protocol | R-ALIGNMENT, R-MINIMISATION |
| S5-4 | Discovery — how does a party find an issuer and its metadata? | R-PARTICIPATION |
| S5-5 | API security profile | R-ALIGNMENT |
| S5-6 | API surface over composed state — what does a consumer actually call? | R-PARTICIPATION |
| S5-7 | State composition — how do many assertions become one coherent view? | R-SEMANTICS |
| S5-8 | Backward-compatible output for existing consumers, and rendered documents for human review | R-INCREMENTAL, R-RENDERING |
| S5-9 | Replication — may systems hold copies of transaction state, and under what conditions? | R-COPIES, R-CONFIDENTIALITY, R-MINIMISATION, R-DATA-PATH |
| S5-10 | Subject discovery — given an identifier, how does a party locate the holders? | R-DISCOVERY, R-CONTROLLER, R-ENTITLEMENT |

**S5-10 need not resolve the same way for every subject type.** Discovery of a property or a title is a different question from discovery of a transaction: the first serves a party who must find facts without prior arrangement, and the second serves a party who must be admitted to a relationship. An answer that resolves subject discovery for durable subjects and declines it for transaction-scoped ones is a live shape of answer rather than an evasion of the question — but it is only an answer to R-DISCOVERY if the facts a party needs without an invitation are attached to the durable subjects, which is settled by PDR-S0-5 rather than here.

**S5-10 turns on two questions that are easily run together.** Whether a subject exists, and what is true of it, are separately disclosable: a mechanism may reveal that a transaction relates to a property while revealing nothing about its progress, parties or contents. The visibility of an entity's existence is therefore its own question, and the requirement trace applies to it in its own right rather than by inheritance from the facts inside. S5-10 also presupposes what R-DISCOVERY presupposes — that the requesting party already holds the identifier — so how one is obtained from an address, a title number or a UPRN sits above this decision and is not enumerated anywhere below it.

### S6 — Consent & privacy

| PDR | Question | Trace |
|---|---|---|
| S6-2 | Terms of use — how is access policy expressed on an assertion? | R-MINIMISATION |
| S6-3 | Consent artefacts — how is consent granted, evidenced, scoped and withdrawn? | R-MINIMISATION, R-CONTROLLER |
| S6-4 | Controller/processor mapping for each personal-data flow | R-CONTROLLER |
| S6-5 | Encryption between parties and at rest, for assertions and for referenced artefacts | R-CONFIDENTIALITY, R-MINIMISATION, R-CONTROLLER, R-ARTEFACT |
| S6-6 | Minimisation — what must a verifier be able to obtain without over-disclosure? | R-MINIMISATION |
| S6-7 | Audit and subject access — how does a data subject discover who holds what about them? | R-CONTROLLER |
| S6-8 | Lawful basis for each flow | R-CONTROLLER |
| S6-9 | Disclosure classification — what is the taxonomy, who assigns it, and does it travel with the fact? | R-CLASSIFICATION, R-PUBLIC, R-ENTITLEMENT |
| S6-10 | Entitlement demonstration — how does a requesting party show it is entitled to a fact at the point of request? | R-ENTITLEMENT, R-ABSENCE, R-PARTICIPATION |

**Commission S6-4 and S6-8 first.** They are the longest-lead items in the whole tree, they cannot be compressed by adding people, and several S5 and S6 decisions are unsafe to close until they land.

### S7 — Lifecycle

| PDR | Question | Trace |
|---|---|---|
| S7-2 | Status mechanism | R-WITHDRAWAL |
| S7-3 | Validity and refresh policy per data type | R-REUSE, R-WITHDRAWAL |
| S7-4 | Correction versus withdrawal — distinct operations? | R-WITHDRAWAL |
| S7-5 | Supersession — how does a reissued assertion reference what it replaces? | R-WITHDRAWAL |
| S7-6 | Privacy of status checking — lookups leak interest in a subject | R-MINIMISATION |
| S7-7 | Long-term verifiability after key rotation | R-INDEPENDENCE |

### S8 — Governance

| PDR | Question | Trace |
|---|---|---|
| S8-2 | Legal form and funding of the framework operator | R-PARTICIPATION, R-DATA-PATH |
| S8-3 | Accreditation and appeals — who admits participants, against what criteria, with what right of appeal? | R-ENTRY |
| S8-4 | Conformance and certification — what does "conformant" mean and who tests it? | R-PARTICIPATION, R-ENTRY |
| S8-5 | Liability allocation and redress — who is answerable when relied-upon data is wrong? | R-LIABILITY |
| S8-6 | Change control — how does the framework itself change after v1? | R-EXTENSION |
| S8-7 | IP and licensing of the framework | R-PARTICIPATION |
| S8-8 | Relationship to the reform programme and any statutory footing | No Layer 0 trace — policy, and not the coalition's to settle |
| S8-9 | Does the framework operator sit in the data path? | R-DATA-PATH |

**S8-7 is where the licensing question belongs.** It is a property the framework must have, testable against R-PARTICIPATION, and it is separable from any view about the terms on which particular existing material is published.

### S9 — Adoption

| PDR | Question | Trace |
|---|---|---|
| S9-2 | Legacy format emission — which format, and for how long? | R-INCREMENTAL |
| S9-3 | Small firm on-ramp | R-SMALL-FIRM |
| S9-4 | Originator adoption sequence — HMLR, MHCLG, local authorities, utilities | R-PARTICIPATION |
| S9-5 | Incentives and mandates — what conditions would make a mandate backstop necessary? | R-INCREMENTAL |
| S9-6 | Pilot design — what must a pilot demonstrate to count as evidence? | No Layer 0 trace — method; tested against the evidence hierarchy in charter §7 |

---

## 6. Dependency map

```
                        LAYER 0 REQUIREMENTS
                                 │
        ┌────────────────────────┼────────────────────────┐
        │                        │                        │
      S0 Scope              S8 Governance            S1 Semantics
        │                        │                        │
        └───────────┬────────────┘                        │
                    │                                     │
              S2 Subjects & identity ◄───────────────────┘
                    │
              S3 Assertions
                    │
        ┌───────────┼───────────┐
        │           │           │
   S4 Authority  S7 Lifecycle  S6 Consent
        │           │           │
        └───────────┼───────────┘
                    │
              S5 Exchange
                    │
              S9 Adoption
```

Strands that can run genuinely in parallel once roots are fixed: **S1, S8** (independent of the spine) and, after S3 resolves, **S4, S6, S7** concurrently.

Known cross-strand couplings to declare in advance rather than discover:

- S3-2 (format) ↔ S7-2 (status mechanism) — the choice of credential format determines the status mechanism. These must be decided together or one will be redone.
- S6-10 (entitlement demonstration) → S4-1 (locus of trust) — entitlement is demonstrated by presenting something issued under authority, so the source of that authority must resolve first. Framing S4-1 narrowly would settle S6-10 by implication.
- S4-10 (representation of authority) → S4-1 — what has to be represented depends on where authority comes from.
- S6-9 (disclosure classification) ↔ S6-4, S6-8 — classes must line up with the controllership and lawful-basis positions or facts acquire a class and a basis that disagree.
- S3-9 (credential typology) ↔ S4-3 (authorisation granularity) — a credential type is a named bundle of paths, so the two express the same authorisation at different resolutions (§5.1). Deciding either alone risks a type system that cannot be authorised, or an authorisation model with no ergonomic unit.
- S3-9 (credential typology) ↔ S1 (vocabulary) — the decomposition axis is defined against the schema's top-level properties. If S1 resolves pluralist, the typology must be expressible across vocabularies or defined at the conformance layer above them.
- S2-4 (relationships as assertions) ↔ S6-1 (access model) — if relationships are not verifiable assertions, the graph-derived access model is unavailable and S6 falls back to a central access-control service.
- S4-3 (path-level authorisation) ↔ S1-1 (vocabulary) — path-level authorisation is only meaningful against a stable shared vocabulary. S1 must be at least provisionally settled before S4-3 can resolve.
- S3-9 (credential typology) ↔ S3-2 (securing mechanism) — type identity and version have to be carried by whatever secures the credential, so a securing mechanism that does not carry them needs another mechanism that does.
- S3-9 (credential typology) ↔ S7-5 (supersession) — per-type versioning changes what supersession means.
- S5-9 (replication) ↔ S6-4 (controller/processor mapping) — whether a system holding a copy it cannot read is a controller determines what replication options remain available.
- Authority over transaction membership ↔ S4-1, S6-10 and S5-10 together — who is in a transaction has to be established by something, and the same shape recurs at each of the three: whatever issues a relationship, whatever admits a party, and whatever answers a discovery query is either a service that can refuse, which R-PARTICIPATION and R-DATA-PATH constrain, or a subject who may be unavailable, which R-ABSENCE constrains. Deciding any of the three without the other two settles the question by implication in the other two.
- S6-4 (controller/processor mapping) ↔ almost everything in S5 and S6 — commission the data protection analysis early; it is a long-lead item and a wrong answer invalidates decisions downstream.

---

## 7. Sizing: what it would take to close the tree

The tree's size is the honest basis for deciding how long Develop needs. Counting it:

| | Count |
|---|---|
| Layer 0 requirements to ratify | 25 |
| Layer 1 root decisions | 10 |
| Layer 2 decisions | 73 |
| Sub-decisions below Layer 2 (PDR-S3-9 only) | 8 |
| **Total decisions to close** | **91** |

Spread across ten strands: S0 7, S1 5, S2 7, S3 8 (+8), S4 9, S5 9, S6 9, S7 6, S8 8, S9 5.

### What would actually settle each one

Counting decisions is the weak version of this argument. What matters is that a substantial minority have a **dependency that cannot be compressed by adding people**:

| Settled by | Roughly | Can it be compressed? |
|---|---|---|
| Argument in session, against the requirements | ~45 | Yes — these are what a sprint cadence is for |
| **External legal opinion** | 4 — S6-4, S6-8, S8-5, part of S8-7 | **No.** Weeks of elapsed time, and several downstream decisions are unsafe to close before they land |
| **A build round** | 6 — S3-6 merge semantics, S3-9a decomposition axis, S2-7 field seams, S5-7 composition, S7-3 validity periods, S7-5 supersession | **No.** One sprint interval each, and they cannot run before their parent decision resolves |
| **External confirmation or alignment** | 4 — S3-2 against the GOV.UK Wallet format list, S4-8 against DIATF, S1-3 against RICS/OSCRE/ISO 20022, S8-8 against the reform programme | **Partly.** Depends on other organisations' timetables |
| **Participation not yet secured** | 5 — S9-4 originator sequence, S7-3 validity periods, S0-2, S0-7, S9-5 | **No.** Cannot be settled among suppliers; needs HMLR, MHCLG, local authorities and the professions at the table |
| Policy, sitting with government | 3 — S8-8, S9-5, part of S8-2 | Out of the coalition's hands |

### The consequence for the Develop duration

Around **22 of 91 decisions have a dependency that no amount of sprint cadence will shorten** — legal opinions take weeks, build rounds take a sprint each and must follow their parents, and originator participation has to be secured before the decisions that need it can even open.

A one-month Develop can close the ~45 argument-settled decisions if everything else goes perfectly. It cannot accommodate a single legal opinion, a single build round, or a single decision that needs a body not yet at the table. Those would carry into Implement, where the framework is supposed to be being written rather than decided.

**That is the argument for the four-month option, and it is made by the map rather than by assertion.** It is also the reason to publish the tree in September rather than argue the point in October.

### The count depends on ratification

Ninety-one is what the tree holds against the requirements as drafted. It is not independent of them, and it moves in both directions once Layer 0 is decided.

A requirement the coalition adds adds work inside the strands beneath it, in the form of decisions that had nothing to test them against before. A requirement the coalition rejects works the other way, and less tidily: a little over half of the Layer 2 decisions cite exactly one requirement, and rejecting that requirement does not delete the decision — the framework still has to decide vocabulary versioning or status mechanics whatever Layer 0 says. What it removes is the basis on which the decision was going to be argued, so each such decision is re-traced to a requirement that survives, or withdrawn from the map deliberately. Either way the count changes.

What does not change with the requirement set is the shape above Layer 2. The strands come from the domain rather than from Layer 0, so requirements move the work inside them rather than adding or removing a strand or a root decision.

The consequence for sizing is that the Develop duration should be set against the tree that follows ratification rather than against this one, and that the dependency classes above matter more than the total. A count moves; a legal opinion that takes weeks, a build round that cannot start before its parent resolves, and a decision that needs a body not yet at the table do not become faster because the tree turned out smaller.

### What is not yet enumerated

Stated plainly, because a map claiming completeness it does not have is worse than an honest one:

- **Layer 3 does not exist.** That is correct — it is normative specification text, and it is Implement-phase work.
- **Only PDR-S3-9 has a third level.** On the splitting rule in §5 that is the right answer today, but the rule should be applied again to each Layer 2 decision as it opens; some will divide.
- **Effort per decision is not estimated**, only the dependency class. If CFIT wants a resourced plan rather than a schedule, that is the next piece of work.

---

## 8. What this map is for

Four uses, in the order they arise.

**Sizing the Develop phase.** §7 is the argument, and it is made by the map rather than by assertion. Around 22 of 91 decisions carry a dependency no sprint cadence will shorten.

**Ordering the work.** The dependency map in §6 says which decisions cannot safely open before others resolve. Several of the most consequential sit behind decisions that look minor.

**Making the programme visible.** Publishing the whole tree before any of it is taken means nothing arrives as a surprise, and the coalition can see what it has taken on. That is worth more than any individual answer in it.

**Reading the consequences of a requirement before ratifying it.** This is why the map is published while Layer 0 is still open rather than after it closes. A requirement is one sentence and its consequences are dozens of decisions; ratifying it on the sentence alone means discovering the consequences one at a time over the following months, at the point where each is expensive to revisit. Following a requirement's traces through the map shows what agreeing to it commits the coalition to, while the requirement can still be amended or rejected. It also shows the reverse: a requirement rejected at Layer 0 leaves the decisions it was the sole trace for standing with nothing to test them against, and those have to be re-traced or withdrawn deliberately rather than argued on preference.
