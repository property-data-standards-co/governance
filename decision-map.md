# Decision Hierarchy for the Property Trust Framework

**The map of what has to be decided.** Companion to *Building the Trust Framework by Consensus*.

**Status:** Draft for discussion · **Date:** 6 August 2026

Offered for the coalition to use, amend or issue as its own. This is the Layer 1 output the method asks Clarify to produce: every decision the framework requires, what each is tested against, what depends on what, and how large the job is.

---


## 1. How to read this

This is the proposed map of everything the coalition has to decide, arranged so that each decision is genuinely open, each is testable against agreed requirements, and each opens a known set of sub-decisions beneath it.

**Requirement trace** appears throughout: which Layer 0 requirements the decision is tested against. This is what makes a decision arguable on the merits rather than by preference.

Decision identifiers use `PDR-{strand}-{n}`.

---

## 2. Layer 0 — Purpose and requirements

Everything descends from here. These must be **testable**: for each one it must be possible to say of a proposed design "this meets it" or "this does not", without appeal to taste. Vague requirements ("the framework should be secure and user-friendly") are worse than none, because they can be cited in support of anything.

### 2.1 Purpose statement (to be agreed)

> A trust framework for property data in England and Wales that enables any fact about a property, its title, or the parties to a transaction to be established once, and thereafter relied upon by any authorised party, in any transaction, on any platform — with its origin and integrity verifiable independently of whoever transmits it.

The phrase doing the work is **"independently of whoever transmits it."** If the coalition adopts that, a very large part of the architecture follows. If it does not, the coalition is building a data-sharing agreement rather than a trust framework, and it should say so.

### 2.2 Candidate requirements

Derived from FAIR data principles, open ecosystem, and reusable trust. Grouped for readability; each is intended to be individually ratified.

**Findability and identity**

| # | Requirement | Test |
|---|---|---|
| **R1** | Every fact is about a subject that has a stable, resolvable identifier persisting beyond any single transaction. | Can the same subject be referred to unambiguously in a later, unrelated transaction? |
| **R2** | Identifiers are drawn from open schemes, not from any single operator's internal namespace. | Can a competitor mint and resolve identifiers without permission from any incumbent? |

**Accessibility and openness**

| # | Requirement | Test |
|---|---|---|
| **R3** | Any conformant participant can issue, hold, and consume data through published open interfaces, without bilateral negotiation with the framework operator. | Is there any point at which a single organisation can refuse a compliant participant? |
| **R4** | The framework operator is not in the data path. | Does any transaction require data to transit a body that governs the framework? |
| **R5** | Entry criteria are objective, published, and appealable. | Could a rejected applicant challenge the decision against written criteria? |

**Interoperability**

| # | Requirement | Test |
|---|---|---|
| **R6** | Facts carry machine-readable semantics from a shared, versioned, openly published vocabulary; no private knowledge is needed to interpret them. | Can a party with no prior relationship to the issuer interpret the data correctly? |
| **R7** | The framework aligns with UK and EU digital identity and credentials infrastructure rather than defining a property-only stack. | Can a party already conformant with GOV.UK Wallet / DIATF / eIDAS 2.0 reuse that investment? |
| **R8** | New data, new participants, and new versions can be added without coordinated upgrade of all parties. | Can one participant adopt a new data type without every other participant changing? |

**Reusable trust**

| # | Requirement | Test |
|---|---|---|
| **R9** | A consumer can establish the origin and integrity of a fact without trusting the party that transmitted it. | If the transmitting platform were hostile, would tampering be detectable? |
| **R10** | Every fact carries who asserted it, on what basis, and when. | Given any single data point, can its provenance be recovered? |
| **R11** | A fact established once can be relied upon again — by another party, in another transaction, on another platform — subject to consent and continued validity. | Is re-collection ever forced by the framework's own structure rather than by the fact's age? |
| **R12** | An erroneous assertion can be withdrawn, and parties relying on it can determine that it has been. | Is there a path from "issuer discovers error" to "consumer learns of it"? |
| **R13** | Liability for a false assertion attaches to an identifiable legal entity. | For any fact, can a relying party name who is answerable for it? |

**Privacy and consumer protection**

| # | Requirement | Test |
|---|---|---|
| **R14** | A party receives only the data required for its role; the framework must not require over-disclosure as a side effect of its structure. | Does obtaining one fact structurally force disclosure of others? |
| **R15** | The data subject can determine who holds their personal data and on what basis, and can exercise data protection rights against an identifiable controller. | Is the controller for each personal data flow determinable from the framework's own model? |

**Implementability**

| # | Requirement | Test |
|---|---|---|
| **R16** | A sole practitioner or small firm can participate fully without operating specialist cryptographic infrastructure. | Can a two-person conveyancing firm participate using services they can buy? |
| **R17** | The framework can be adopted incrementally, alongside existing practice, without a flag-day migration. | Can a participant adopt partially and still transact with non-adopters? |

### 2.3 Why the requirement layer is where the real argument is

Some of the requirements above are close to architecturally determinative. R9 in particular, if ratified, rules out any design in which trust in a fact reduces to trust in the platform serving it. R4 and R3 together rule out a central hub or registry through which data must flow. R11 rules out a purely transaction-scoped data model, because a transaction-scoped document cannot outlive its transaction. R1 pushes hard toward subjects — properties, titles, people — rather than documents.

Two implications follow, and they should be stated openly rather than discovered:

1. **Anyone who wants a different architecture should contest the requirements, not the architecture.** That is a legitimate and welcome argument, and it is the right place to have it. Somebody who believes the sector needs a data-sharing agreement rather than a trust framework should say so at Layer 0, where the coalition can decide it deliberately.
2. **Ratifying these requirements is a substantive commitment, not a warm-up.** Chairs should resist the temptation to nod them through in a single session. Expect and budget for real debate here — it is much cheaper than the same debate surfacing at Layer 2 disguised as a technical objection.

The counterweight is genuine: **R16 and R17** will be uncomfortable for the purest cryptographic designs, and should be. A framework only a large technology firm can implement fails, however elegant. This is the requirement that forces the honest answer about hosted keys, custodial signing, and orchestrator-mediated participation for small firms.

---

## 3. The strand map (Layer 1)

Nine strands. Each has exactly one root question, all of which are decided together in the first wave.

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

## 4. The first wave: nine root decisions

These are decided together, at plenary, tested directly against Layer 0. They are the decisions with the highest cost of being wrong and the lowest cost of being decided early.

### PDR-S0-1 — Scope

**Question.** What is in scope: which transaction types, which parties, which jurisdictions, and does the framework cover only sale/purchase or also the wider property lifecycle?

**Requirement trace.** R11 (reuse across transactions materially depends on scope), R17.

**Options.**
- **(a)** Residential sale and purchase, England & Wales, transaction-only.
- **(b)** As
- **(a)** plus the property's enduring record between transactions ("logbook").
- **(c)** As
- **(b)** plus lettings, remortgage, new build.
- **(d)** UK-wide including Scotland's distinct process.


**Opens.** Everything. Scope decisions cascade further than any other.

**Note for the coalition.** (a) and (b) look similar but are architecturally very different. R11 is close to unsatisfiable under (a): if nothing outlives the transaction, nothing can be reused by the next one.

---

### PDR-S1-1 — Vocabulary inheritance

**Question.** From where does the framework take its vocabulary of property facts?

**Requirement trace.** R6, R8, R17.

**Options.**
- **(a)** Adopt the PDTF 1.0 data dictionary as baseline, extended by agreement.
- **(b)** Start from an external ontology.
- **(c)** Start fresh from sector consultation.
- **(d)** Adopt PDTF 1.0 plus mandatory alignment to named external vocabularies where they exist.



**Opens.** PDR-S1-2 (extension and namespacing), PDR-S1-3 (external vocabulary alignment), PDR-S1-4 (form overlay mechanism), PDR-S1-5 (versioning of the vocabulary).

---

### PDR-S2-1 — Subject model

**Question.** What are facts attached to: the transaction, or persistent real-world subjects?

**Requirement trace.** R1 (stable identifiers persisting beyond a transaction), R11 (reuse), R14 (a fact bound into a monolithic pack cannot be disclosed alone).

**Options.**
- **(a)** Transaction-scoped: all facts belong to a transaction record.
- **(b)** Subject-scoped: facts attach to identified subjects (property, title, person, organisation), and transactions reference them.
- **(c)** Hybrid: subject-scoped for enduring facts, transaction-scoped for process facts.


**Argument to make.** (a) fails R11 on its face and fails R14 structurally. The interesting argument is (b) versus (c), and the honest answer is (c): some facts genuinely are about *this sale* (number of sellers, existing lender, whether it is a limited company sale) and attaching them to the property would be wrong. The logbook test is a clean, checkable criterion for the boundary and is worth proposing as the decision rule rather than as a conclusion.

**Opens.** PDR-S2-2 (entity set), PDR-S2-3 (identifier schemes per subject type), PDR-S2-4 (relationship model), PDR-S2-5 (identifier evolution: unregistered title → registered, new build → UPRN), PDR-S2-6 (multi-property / multi-title cardinality).

---

### PDR-S3-1 — Unit of assertion

**Question.** What is the atomic unit in which a fact enters the framework, and what must it carry?

**Requirement trace.** R9 (independent verifiability), R10 (provenance), R12 (withdrawal), R13 (liability), R14 (minimisation).

**Options.**
- **(a)** API responses from an authoritative platform.
- **(b)** Signed documents/payloads with a defined provenance envelope.
- **(c)** Verifiable credentials in the W3C/IETF sense — independently verifiable signed assertions with issuer, subject, validity, status and evidence.
- **(d)** Notarised events on a shared ledger.


**Argument to make.** This is the decision where the requirements do most of the work, and it should be argued *entirely* from them. (a) fails R9 outright — if trust in a fact reduces to trust in whoever served it, there is no trust framework. (b) is a partial answer and, pursued rigorously, converges on (c) while forgoing all external tooling and alignment, so fails R7. (d) fails R14 and R15 for personal data and introduces a shared-infrastructure dependency in tension with R4.

**Deliberately not decided here.** Two things sit below this decision and must not be run together with it: the *format* (SD-JWT-VC vs mdoc vs JSON-LD Data Integrity, PDR-S3-2) and the *typology* (whether the framework defines named credential types, PDR-S3-9). Conflating either with the root concept is the most likely way to lose this decision on an irrelevance — a participant with a view about JSON-LD, or about how many credential types there should be, should not thereby be voting on whether facts are independently verifiable at all.

**Opens.** PDR-S3-2 (credential format and securing mechanism), PDR-S3-3 (instance granularity), PDR-S3-4 (evidence and provenance model), PDR-S3-5 (assurance/trust levels), PDR-S3-6 (merge and conflict semantics), PDR-S3-7 (selective disclosure), PDR-S3-9 (credential typology).

---

### PDR-S4-1 — Locus of trust

**Question.** How does a relying party establish that an issuer was entitled to assert what it asserted?

**Requirement trace.** R3, R4, R5 (no gatekeeper, open entry), R9, R13.

**Options.**
- **(a)** Bilateral: parties trust those they have contracts with.
- **(b)** Central registry: a single operator maintains the list of who may say what, queried at verification time.
- **(c)** Federated: a trust anchor publishes signed statements; authority is established by resolving a signed chain, verifiable offline, with intermediates able to onboard their own subordinates.
- **(d)** Reliance on an existing external scheme (DIATF, or a government register) without a property-specific layer.


**Argument to make.** (a) does not scale past a handful of parties and fails R3 and R11 — a fact is only reusable by parties with a contract to the issuer. (b) is the strongest rival and needs to be beaten cleanly: it fails R4 (the operator becomes an availability and commercial chokepoint), it fails R3's test (a single organisation *can* refuse), and it concentrates a control point the government would then have to regulate. (d) is attractive for identity but has no mechanism to express *domain authority* — DIATF can say an organisation is a trustworthy identity service provider; it cannot say HMLR is authoritative for title extents and an EPC assessor is not. That gap is the entire substance of a property trust framework, and naming it is the cleanest way to show why a property-specific layer is needed on top of, not instead of, national infrastructure.

**The distinctive contribution to argue for.** Authority in property is not role-shaped, it is *path*-shaped: an issuer is authoritative for particular facts, not for a whole category. Binding authorisation to specific data paths — rather than to a coarse role — is the thing that makes trust in this domain tractable, and it is the strongest single idea to put in front of the coalition. It is also easy to demonstrate: it takes one worked example (who is authoritative for a title extent vs a flood risk vs a seller's answer about a boundary dispute) to make the point.

**Opens.** PDR-S4-2 (trust anchor operation), PDR-S4-3 (authorisation granularity — path-level vs role-level), PDR-S4-4 (accreditation criteria and process), PDR-S4-5 (intermediates and delegation), PDR-S4-6 (assurance levels), PDR-S4-7 (multiple issuers for the same fact), PDR-S4-8 (relationship to DIATF and GOV.UK Wallet).

---

### PDR-S5-1 — Exchange model

**Question.** How does data move between parties?

**Requirement trace.** R3, R4, R7, R8, R14.

**Options.**
- **(a)** Central hub/clearing house.
- **(b)** Point-to-point APIs against a common specification.
- **(c)** Standard credential issuance and presentation protocols (OID4VCI / OID4VP) with federation-based discovery.
- **(d)** Wallet-mediated, holder-presented only.


**Note.** (a) fails R4 directly. The real argument is (b) vs (c), and it turns on R7 and R8: bespoke APIs work but strand the sector from the wallet ecosystem and require coordinated change for every extension.

**Opens.** PDR-S5-2 (issuance protocol), PDR-S5-3 (presentation protocol), PDR-S5-4 (discovery), PDR-S5-5 (security profile), PDR-S5-6 (API surface over composed state), PDR-S5-7 (state composition rules), PDR-S5-8 (backward-compatible output for existing consumers).

---

### PDR-S6-1 — Access and consent model

**Question.** What determines whether a party may see a given fact?

**Requirement trace.** R14, R15, R3, R13.

**Options.**
- **(a)** Platform-enforced role checks.
- **(b)** Central access-control service.
- **(c)** Graph-derived: authority to read follows from verifiable relationships to the transaction, plus explicit delegated consent for parties outside it.
- **(d)** Holder-mediated only: nothing is disclosed except by the data subject presenting it.


**Note.** R19 and R21 bear directly on this decision and should be settled before it opens: if permission is not the gate for public facts, and the subject cannot be relied on to act, then options resting on subject-mediated permission are constrained before the argument starts. (d) is the purist wallet answer and fails R16/R17 in practice — a conveyancing transaction cannot stall on a seller being available to present each fact. (c) needs to be argued carefully against data protection law: the controller/processor analysis for each flow is a real piece of work and should be commissioned early, because getting it wrong invalidates decisions downstream in S6 and S7.

**Opens.** PDR-S6-2 (terms of use model), PDR-S6-3 (consent artefacts and revocation), PDR-S6-4 (controller/processor mapping), PDR-S6-5 (encryption at rest and in transit between parties), PDR-S6-6 (minimisation and selective disclosure policy), PDR-S6-7 (audit and subject access), PDR-S6-9 (disclosure classification), PDR-S6-10 (entitlement demonstration).

---

### PDR-S7-1 — Lifecycle and currency

**Question.** How does a relying party know that a fact is still true?

**Requirement trace.** R12, R11, R13.

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

**Requirement trace.** R3, R4, R5, R13.

**Options.**
- **(a)** Government body.
- **(b)** Independent not-for-profit with sector governance.
- **(c)** Existing sector body extended.
- **(d)** Regulated scheme under statutory backing.


**Note.** The distinction to hold firmly, whatever the answer: **operating the trust anchor is not the same as operating infrastructure that data flows through.** A trust anchor publishes signed statements that anyone can fetch and cache; it can be offline for a day without stopping a single transaction. Establishing that distinction early prevents an entirely avoidable objection ("this just creates a new monopoly") and is easy to demonstrate concretely.

**Opens.** PDR-S8-2 (legal form and funding), PDR-S8-3 (accreditation and appeals), PDR-S8-4 (conformance and certification), PDR-S8-5 (liability allocation and redress), PDR-S8-6 (change control), PDR-S8-7 (IP and licensing), PDR-S8-8 (relationship to government reform programme and any statutory footing).

---

### PDR-S9-1 — Adoption path

**Question.** How does the sector move from current practice to the framework?

**Requirement trace.** R17, R16.

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

### S0 — Scope

| PDR | Question | Trace |
|---|---|---|
| S0-2 | Which property types — residential only, or new build, leasehold, shared ownership, commercial? | R17 |
| S0-3 | Which jurisdictions? | R8, R17 |
| S0-4 | Which transaction types — sale and purchase only, or also remortgage, transfer of equity, lettings? | R11 |
| S0-5 | Where is the boundary between the transaction record and the enduring property record? | R1, R11 |
| S0-6 | Which party types must the framework model? | R13 |
| S0-7 | Which data categories are in and out of scope? | R14 |
| S0-8 | **Does framework scope equal pilot scope?** CFIT's Product & Service Design paper scopes out new build, commercial, social housing, shared ownership and Scotland *for the pilot*. Does the framework inherit those exclusions? | R8, R17 |

**S0-8 is the one to raise early.** It is not in anyone's question list and it is cheap to get wrong by inattention — the exclusions are sensible for a pilot and would be damaging in a standard.

### S1 — Semantics

| PDR | Question | Trace |
|---|---|---|
| S1-2 | Extension and namespacing — how does a participant add a data category without central coordination? | R8 |
| S1-3 | Alignment with external vocabularies (RICS Data Standard, OSCRE, ISO 20022) | R6, R7 |
| S1-4 | Form overlay mechanism — BASPI, NTS, TA forms, CON29R | R6 |
| S1-5 | Vocabulary versioning — what constitutes a breaking change, and may versions coexist? | R8 |
| S1-6 | Who maintains the vocabulary, and under what change process? | R3, R5 |

### S2 — Subjects & identity

| PDR | Question | Trace |
|---|---|---|
| S2-2 | What is the entity set? | R1, R11 |
| S2-3 | Identifier scheme per subject type | R1, R2 |
| S2-4 | Relationship model | R9, R12 |
| S2-5 | Identifier evolution | R1 |
| S2-6 | Cardinality | R6 |
| S2-7 | Person identity binding | R7, R11 |
| S2-8 | Organisation identity | R13 |

**The strongest argument in this strand** is S2-4. Making relationships signed assertions rather than fields is what allows authority to be *checked* rather than *asserted by the platform* — and it is what makes the access model in S6 work without a central access-control list. It is also the least obvious of the ideas and therefore the one most worth investing in explaining.

### S3 — Assertions

| PDR | Question | Trace |
|---|---|---|
| S3-2 | Credential format | R7, R14 |
| S3-3 | Instance granularity — how much data a single credential covers | R8 |
| S3-9 | Credential typology — does the framework define a fixed set of named credential types? | R6, R8, R13, R9 |
| S3-4 | Evidence model | R10 |
| S3-5 | Assurance levels | R10, R13 |
| S3-6 | Merge semantics | R6, R8 |
| S3-7 | Selective disclosure | R14 |
| S3-8 | Assertion identifiers | R6 |

**S3-6 is genuinely open and should be presented as such.** None of the tabled work resolves it. Bringing a real open question to the coalition, and saying plainly that detailed prior work could not settle it, does more for the credibility of the whole process than a dozen resolved ones. It is also a good candidate for settling by interop event rather than by argument.

**S3-3 and S3-9 are different questions and must not be run together.** *Instance granularity* is how much data one credential happens to carry; *typology* is whether the framework defines named types at all. They are independent: a framework can define `EnvironmentalCredential` as a type while leaving an issuer free to issue one instance covering the whole of it or several covering parts. Conflating them makes the typology question look like a mandate on issuer behaviour, which it need not be. S3-9 is worked through in §5.1.

### 5.1 PDR-S3-9 — Credential typology

**Question.** Does the framework define a fixed set of named credential types with their own identifiers, schemas, versions and authorisation scope — or does it define a small number of entity-level credential types whose content is delimited by the paths each instance asserts?

**Requirement trace.** R6 (shared machine-readable semantics), R8 (extend without coordinated upgrade), R13 (liability attaches to an identifiable entity), R9 (independent verifiability of what an issuer was entitled to say).

**Options.**
- **(a)** A fixed set of named credential types — for example decomposed along the top-level properties of the property-pack schema, each separately versioned and separately authorisable.
- **(b)** A small number of entity-level types whose scope is delimited by the paths each instance asserts.
- **(c)** A named typology with a generic catch-all retained for data not yet covered.

#### Why this decision is hard

A fixed typology is a **coordination cost**, and it is in tension with **R8**: adding a new data category now requires a new type to be defined and agreed, where path-delimited assertion needed no coordination at all. Two mitigations, both of which need deciding:

- Types are **additive** — a new type never invalidates existing credentials.
- A **generic `PropertyCredential`** is retained as a catch-all for data not yet covered by a named type, so a new data category can be carried immediately and typed later.

Whether to retain the catch-all is itself contested: it is the safety valve for R8, and it is also the loophole through which the typology gets ignored.

#### Open sub-decisions

| # | Question | Note |
|---|---|---|
| S3-9a | **What is the decomposition axis?** | One candidate is the top-level schema properties. Alternatives that cut differently: by authoritative source, by refresh cadence, by confidentiality/PII class, by consumer need. The *authority* axis matters most for S4 — if any single type spans two authorities, type-level authorisation breaks down for that type and must fall back to paths. This should be tested property by property. |
| S3-9b | **How many types, and do they nest?** | Is there a supertype (`PropertyCredential`) with subtypes, or only leaves? Nesting helps composition and query; flat is simpler to authorise. |
| S3-9c | **Is the typology binding or advisory?** | MUST an issuer use the defined type for data falling within it, or MAY it? Binding gives authorisation its teeth; advisory preserves R8. |
| S3-9d | **Versioning semantics.** | What constitutes a breaking change to a type? Verifiers MUST accept multiple concurrent versions — credentials outlive schema revisions — so the rule needs stating, not assuming. |
| S3-9e | **Facts that span types.** | Boundary disputes, rights of way, flying freeholds. The same edge cases as the Property/Title seam (S2-7), now at finer grain and therefore more numerous. |
| S3-9f | **Composition invariance.** | Composing the entity graph MUST yield the same property state regardless of how many credentials carried the data. This is a testable invariant and belongs in the conformance suite. |
| S3-9g | **Catch-all type.** | Retain a generic `PropertyCredential` for uncovered data, or require a named type for everything? See the cost above. |
| S3-9h | **Migration.** | What happens to credentials already issued as undifferentiated `PropertyCredential`? |

#### Dependencies

- **S3-2 (securing mechanism)** — SD-JWT-VC gives each type a `vct` and Type Metadata, so typology and versioning come almost free. A different securing mechanism still supports typology but needs another carrier for type identity and version. These interact; S3-2 should resolve first or alongside.
- **S1 (vocabulary)** — the decomposition axis is defined in terms of the schema's top-level properties, so it depends on the vocabulary decision. If the coalition adopts a pluralist position on S1 (multiple vocabularies mapping in), the typology must be expressible for each, or defined at the conformance layer above them.
- **S4-3 (authorisation granularity)** — the synthesis above. These should be taken together.
- **S7-5 (supersession)** — per-type versioning changes what "supersedes" means.

**Recommended handling.** This is a good early candidate for the Develop phase: it is well-formed, the requirement trace is clear, and the sub-decisions are tractable.

### S4 — Authority & trust

| PDR | Question | Trace |
|---|---|---|
| S4-2 | Trust anchor operation | R4 |
| S4-3 | Authorisation granularity | R9, R13 |
| S4-4 | Accreditation | R5 |
| S4-5 | Intermediates | R3, R16 |
| S4-6 | Assurance levels | R10 |
| S4-7 | Competing issuers | R3 |
| S4-8 | External alignment | R7 |
| S4-9 | Small firm participation | R16 |

**S4-7 and S4-9 are worth leading with in this strand**, ahead of the technical material. S4-7 answers the "is this a land grab?" question before it is asked — the framework explicitly permits competition for the same data. S4-9 answers "can my members actually do this?", which is the question the professional bodies will care about most and the one on which a technically superior framework most often loses.

---

### S5 — Exchange

| PDR | Question | Trace |
|---|---|---|
| S5-2 | Issuance protocol | R7 |
| S5-3 | Presentation protocol | R7, R14 |
| S5-4 | Discovery — how does a party find an issuer and its metadata? | R3 |
| S5-5 | API security profile | R7 |
| S5-6 | API surface over composed state — what does a consumer actually call? | R3 |
| S5-7 | State composition — how do many assertions become one coherent view? | R6 |
| S5-8 | Backward-compatible output for existing consumers | R17 |

### S6 — Consent & privacy

| PDR | Question | Trace |
|---|---|---|
| S6-2 | Terms of use — how is access policy expressed on an assertion? | R14 |
| S6-3 | Consent artefacts — how is consent granted, evidenced, scoped and withdrawn? | R14, R15 |
| S6-4 | Controller/processor mapping for each personal-data flow | R15 |
| S6-5 | Encryption between parties and at rest | R14, R15 |
| S6-6 | Minimisation — what must a verifier be able to obtain without over-disclosure? | R14 |
| S6-7 | Audit and subject access — how does a data subject discover who holds what about them? | R15 |
| S6-8 | Lawful basis for each flow | R15 |
| S6-9 | Disclosure classification — what is the taxonomy, who assigns it, and does it travel with the fact? | R18, R19, R20 |
| S6-10 | Entitlement demonstration — how does a requesting party show it is entitled to a fact at the point of request? | R20, R21, R3 |

**Commission S6-4 and S6-8 first.** They are the longest-lead items in the whole tree, they cannot be compressed by adding people, and several S5 and S6 decisions are unsafe to close until they land.

### S7 — Lifecycle

| PDR | Question | Trace |
|---|---|---|
| S7-2 | Status mechanism | R12 |
| S7-3 | Validity and refresh policy per data type | R11, R12 |
| S7-4 | Correction versus withdrawal — distinct operations? | R12 |
| S7-5 | Supersession — how does a reissued assertion reference what it replaces? | R12 |
| S7-6 | Privacy of status checking — lookups leak interest in a subject | R14 |
| S7-7 | Long-term verifiability after key rotation | R9 |

### S8 — Governance

| PDR | Question | Trace |
|---|---|---|
| S8-2 | Legal form and funding of the framework operator | R3, R4 |
| S8-3 | Accreditation and appeals — who admits participants, against what criteria, with what right of appeal? | R5 |
| S8-4 | Conformance and certification — what does "conformant" mean and who tests it? | R3, R5 |
| S8-5 | Liability allocation and redress — who is answerable when relied-upon data is wrong? | R13 |
| S8-6 | Change control — how does the framework itself change after v1? | R8 |
| S8-7 | IP and licensing of the framework | R3 |
| S8-8 | Relationship to the reform programme and any statutory footing | — |
| S8-9 | Does the framework operator sit in the data path? | R4 |

**S8-7 is where the licensing question belongs**, and stating it as a requirement of the framework — rather than as a complaint about anyone's terms — is both the legitimate route and the one most likely to succeed.

### S9 — Adoption

| PDR | Question | Trace |
|---|---|---|
| S9-2 | Legacy format emission — which format, and for how long? | R17 |
| S9-3 | Small firm on-ramp | R16 |
| S9-4 | Originator adoption sequence — HMLR, MHCLG, local authorities, utilities | R3 |
| S9-5 | Incentives and mandates — what conditions would make a mandate backstop necessary? | R17 |
| S9-6 | Pilot design — what must a pilot demonstrate to count as evidence? | — |

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
- S3-9 (credential typology) ↔ S4-3 (authorisation granularity) — a credential type is a named bundle of paths, so the two express the same authorisation at different resolutions (§5.1). Deciding either alone risks a type system that cannot be authorised, or an authorisation model with no ergonomic unit.
- S3-9 (credential typology) ↔ S1 (vocabulary) — the decomposition axis is defined against the schema's top-level properties. If S1 resolves pluralist, the typology must be expressible across vocabularies or defined at the conformance layer above them.
- S2-4 (relationships as assertions) ↔ S6-1 (access model) — if relationships are not verifiable assertions, the graph-derived access model is unavailable and S6 falls back to a central access-control service.
- S4-3 (path-level authorisation) ↔ S1-1 (vocabulary) — path-level authorisation is only meaningful against a stable shared vocabulary. S1 must be at least provisionally settled before S4-3 can resolve.
- S6-4 (controller/processor mapping) ↔ almost everything in S5 and S6 — commission the data protection analysis early; it is a long-lead item and a wrong answer invalidates decisions downstream.

---

## 7. Sizing: what it would take to close the tree

The tree's size is the honest basis for deciding how long Develop needs. Counting it:

| | Count |
|---|---|
| Layer 0 requirements to ratify | 17 |
| Layer 1 root decisions | 9 |
| Layer 2 decisions | 70 |
| Sub-decisions below Layer 2 (PDR-S3-9 only) | 8 |
| **Total decisions to close** | **87** |

Spread across nine strands: S0 7, S1 5, S2 7, S3 8 (+8), S4 8, S5 7, S6 9, S7 6, S8 8, S9 5.

### What would actually settle each one

Counting decisions is the weak version of this argument. What matters is that a substantial minority have a **dependency that cannot be compressed by adding people**:

| Settled by | Roughly | Can it be compressed? |
|---|---|---|
| Argument in session, against the requirements | ~47 | Yes — these are what a sprint cadence is for |
| **External legal opinion** | 4 — S6-4, S6-8, S8-5, part of S8-7 | **No.** Weeks of elapsed time, and several downstream decisions are unsafe to close before they land |
| **A build round** | 6 — S3-6 merge semantics, S3-9a decomposition axis, S2-7 field seams, S5-7 composition, S7-3 validity periods, S7-5 supersession | **No.** One sprint interval each, and they cannot run before their parent decision resolves |
| **External confirmation or alignment** | 4 — S3-2 against the GOV.UK Wallet format list, S4-8 against DIATF, S1-3 against RICS/OSCRE/ISO 20022, S8-8 against the reform programme | **Partly.** Depends on other organisations' timetables |
| **Participation not yet secured** | 5 — S9-4 originator sequence, S7-3 validity periods, S0-2, S0-7, S9-5 | **No.** Cannot be settled among suppliers; needs HMLR, MHCLG, local authorities and the professions at the table |
| Policy, sitting with government | 3 — S8-8, S9-5, part of S8-2 | Out of the coalition's hands |

### The consequence for the Develop duration

Around **22 of 87 decisions have a dependency that no amount of sprint cadence will shorten** — legal opinions take weeks, build rounds take a sprint each and must follow their parents, and originator participation has to be secured before the decisions that need it can even open.

A one-month Develop can close the ~45 argument-settled decisions if everything else goes perfectly. It cannot accommodate a single legal opinion, a single build round, or a single decision that needs a body not yet at the table. Those would carry into Implement, where the framework is supposed to be being written rather than decided.

**That is the argument for the four-month option, and it is made by the map rather than by assertion.** It is also the reason to publish the tree in September rather than argue the point in October.

### What is not yet enumerated

Stated plainly, because a map claiming completeness it does not have is worse than an honest one:

- **Layer 3 does not exist.** That is correct — it is normative specification text, and it is Implement-phase work.
- **Only PDR-S3-9 has a third level.** On the splitting rule in §5 that is the right answer today, but the rule should be applied again to each Layer 2 decision as it opens; some will divide.
- **Effort per decision is not estimated**, only the dependency class. If CFIT wants a resourced plan rather than a schedule, that is the next piece of work.

---

## 8. What this map is for

Three uses, in the order they arise.

**Sizing the Develop phase.** §7 is the argument, and it is made by the map rather than by assertion. Around 22 of 87 decisions carry a dependency no sprint cadence will shorten.

**Ordering the work.** The dependency map in §6 says which decisions cannot safely open before others resolve. Several of the most consequential sit behind decisions that look minor.

**Making the programme visible.** Publishing the whole tree before any of it is taken means nothing arrives as a surprise, and the coalition can see what it has taken on. That is worth more than any individual answer in it.
