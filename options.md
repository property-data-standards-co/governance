# Options for the Decisions That Cannot Be Settled in Session

**Companion to the Decision Hierarchy.** Draft for discussion — offered for the coalition to amend, extend or replace.

---

## 1. What this document is

The decision map enumerates ninety-two decisions. Around seventy-three of them can be settled by argument in a working session against ratified requirements, once any decision they depend on has resolved. The remaining nineteen cannot, and this document sets out the candidate options for those.

Options for decisions that *can* be settled in session — including every root decision — are in the decision map alongside the question, with their dependencies stated there.

They are grouped by *how they would be settled* rather than by strand, because that is the property that matters for scheduling. A decision that needs a written legal opinion cannot be compressed by adding people to a sprint. Nor can one that needs a body who is not yet at the table.

**No option below is recommended.** Where an asymmetry between options is stated, it is a statement about consequence rather than preference, and it should be contested if it is wrong. Options are almost certainly missing; adding one is more useful than agreeing with those here.

---

## 2. The four ways these get settled

| | | |
|---|---|---|
| **Written legal opinion** | 4 decisions | Weeks of elapsed time. Several downstream decisions are unsafe to close before it lands. |
| **A build round** | 6 decisions | One sprint interval each, and they cannot run before their parent decision resolves. |
| **External confirmation** | 4 decisions | Depends on other organisations' timetables, not the coalition's. |
| **Participation or policy** | 5 decisions | Cannot be settled among software suppliers alone. |

Some decisions appear in two groups. S7-3 needs both a build round and originator participation; S9-5 and S8-8 are both policy and external.

---

## 3. Needing a written legal opinion

### S6-4 — Controller and processor mapping for each personal-data flow
*Trace: R-CONTROLLER*

For each flow of personal data through the framework, which party is controller, which is processor, and where are there joint controllers?

- **(a) Per-role determination.** The framework states, for each defined role — issuer, holder, verifier, intermediary — its default status under UK GDPR.
- **(b) Per-flow determination.** Status follows the specific flow rather than the role, since one organisation may be controller for some data and processor for other data in the same transaction.
- **(c) Framework silent.** Participants determine status bilaterally in their own contracts.
- **(d) Joint controllership** for defined shared operations, with an agreed Article 26 arrangement published as part of the framework.

**Why an opinion.** Controllership is determined by who decides the purposes and means of processing, as a matter of law. It is not established by what the parties agree to call themselves, so a framework can simply be wrong about it — and (c) does not avoid the problem, it distributes it. R-CONTROLLER's test asks whether the controller for each flow is determinable from the framework's own model; (c) answers no.

**Sequencing.** Cannot be commissioned until the data flows are settled, so it depends on S5 and S6-2.

### S6-8 — Lawful basis for each flow
*Trace: R-CONTROLLER*

On what lawful basis does each processing operation rest, and does the answer differ by role and by data category?

- **(a) Consent throughout**, with the framework's consent artefacts as the evidence.
- **(b) Contract or legitimate interests** for transaction-necessary flows, with consent reserved for reuse beyond the immediate transaction.
- **(c) Mixed, determined per data category**, with special-category data treated separately.
- **(d) Framework states evidencing requirements** for whatever basis a participant relies on, without prescribing the basis.

**Why an opinion.** Consent is fragile where processing is necessary to complete a transaction, and withdrawal mid-transaction has to be survivable. There is also a direct interaction with R-REUSE: if reuse rests on consent alone, reuse is revocable in ways that may make it unreliable in practice. Option (d) is the most flexible and gives a participant seeking certainty the least.

### S8-5 — Liability allocation and redress
*Trace: R-LIABILITY*

When a party relies on an assertion that proves wrong and suffers loss, who is answerable, on what basis, and what redress exists?

- **(a) Issuer liability.** The asserting party carries it, on the face of the assertion.
- **(b) Scheme liability.** A rulebook allocates liability contractually between participants, as card schemes do.
- **(c) Limited reliance.** Assertions carry stated limits, and a relying party takes them subject to those limits.
- **(d) Insurance-backed.** Liability sits with the issuer, with a scheme-level insurance requirement making it collectable.
- **(e) Framework silent.** Existing professional liability, PI insurance and negligence law apply unmodified.

**Why an opinion.** The question is whether the framework creates new duties of care or relies on existing ones, and that is not answerable from within a design discussion. It is worth noting that (e) is what happens if nothing is decided, and that an assertion nobody is answerable for is not, in practice, one a professional will rely on — which makes this a decision with consequences for R-REUSE as well as R-LIABILITY.

### S8-7 — Intellectual property and licensing of the framework
*Trace: R-PARTICIPATION*

Under what licence are the framework text, schemas and conformance suite published, and who holds copyright?

- **(a) Permissive open licence** permitting commercial use and derivative works.
- **(b) Share-alike.** Derivatives must be published under the same terms.
- **(c) Free to use, no derivatives.** Read and implement, but no forks or modified versions.
- **(d) Membership-conditional.** Use is conditional on scheme participation.

**Why an opinion, in part.** Whether a standard can be referenced by secondary legislation depends on its licence and its custody, and that is a question for whoever would do the referencing. Worth stating: "free to use" on its own does not settle this — it is satisfied by (c) and (d), both of which constrain what implementers may do.

---

## 4. Needing a build round

Each of these is a question where argument has a known tendency to circle. The method's answer is to build against failure criteria pre-registered by the working group, in the open, before the build runs — and to discount any round that could only ever have confirmed its builder's position.

### S3-6 — Merge semantics
*Trace: R-SEMANTICS, R-EXTENSION*

When assertions about the same subject overlap, how is the resulting state computed — and what happens to dependent data when a discriminating value changes?

- **(a) Dependency-aware pruning.** Composition detects a discriminator change and removes the branch that has become invalid.
- **(b) Section-level replacement.** A new assertion replaces the entire section it covers.
- **(c) Pruning by default, with issuer opt-out** per section.
- **(d) No pruning.** Conflicts are surfaced and the consumer decides.

**Why a build.** Correctness is not arguable in the abstract: it depends on the actual shape of the vocabulary and on real sequences of amendment. Pruning requires walking schema conditionals, and whether that is tractable across the real schema is an empirical question rather than a matter of opinion.

**Candidate failure criteria.** A corpus of real amendment sequences, agreed in advance. A design fails if any sequence produces state that no participant would call correct, or if two independent implementations produce different state from identical inputs.

### S2-7 — Person identity binding
*Trace: R-ALIGNMENT, R-REUSE*

How is a real person bound to the identifier used for them, and at what assurance level?

- **(a) Reuse external assurance.** Carry the result from a certified identity provider.
- **(b) Framework-native binding.** The framework defines its own proofing requirements.
- **(c) Relying-party determined.** The framework carries whatever assurance evidence exists; consumers set their own thresholds.
- **(d) Role-differentiated.** Higher assurance for parties whose assertions others rely on than for parties only consuming.

**Why a build.** The open question is whether externally-assured identity survives being carried across a transaction boundary and remains checkable by a party with no relationship to the original assurer. That is testable, and the answer is not obvious.

### S5-7 — State composition
*Trace: R-SEMANTICS*

How do many independent assertions become one coherent view, and is the result identical regardless of the order or packaging in which they arrive?

- **(a) Deterministic rules** published as normative text, each implementer building to them.
- **(b) Reference implementation** as the normative definition.
- **(c) Rules plus a conformance suite** of test vectors, with self-certification against it.
- **(d) Composition by a designated service** rather than by each consumer.

**Why a build.** Composition invariance is a testable property, and its natural failure mode — two conformant implementations producing different state from the same inputs — only appears once there are two implementations. Note that (d) sits in tension with R-DATA-PATH and should be tested against it.

### S7-3 — Validity and refresh policy per data type
*Trace: R-REUSE, R-WITHDRAWAL*

For each category of fact, how long may it be relied upon before refresh, and who decides?

- **(a) Framework-set** validity periods per category, published normatively.
- **(b) Issuer-set.** Each issuer states validity on the assertion.
- **(c) Consumer-set.** The relying party decides what age it will accept.
- **(d) Hybrid.** Framework sets a maximum, issuer may set shorter, consumer may require fresher.

**Why a build and participation both.** The mechanism can be tested; the periods cannot be invented. What constitutes a stale local land charges search is a question for the bodies that produce them and the professionals who rely on them, and neither group is currently at the table.

### S7-5 — Supersession
*Trace: R-WITHDRAWAL*

When an assertion is reissued, how does the new one reference what it replaces, and how does a consumer holding the old one find out?

- **(a) Explicit back-reference.** The new assertion names the identifier of the one it supersedes.
- **(b) Status-driven.** The old assertion's status changes; the new one stands alone.
- **(c) Versioned subject.** Assertions carry a version, and the latest wins.
- **(d) Both (a) and (b)** — reference for audit, status for discovery.

**Why a build.** The difficulty is the interaction with per-type versioning, and it surfaces only with real reissue sequences across more than one implementation.

### S3-9a — Decomposition axis
*Trace: R-SEMANTICS, R-EXTENSION, R-INDEPENDENCE, R-LIABILITY — see §5.1 of the decision map*

Already enumerated with the sub-decisions of S3-9. Included here because it carries the same build-round dependency: whether any single credential type spans two authorities is a question to be tested property by property, not argued.

---

## 5. Needing external confirmation

### S1-3 — Alignment with external vocabularies
*Trace: R-SEMANTICS, R-ALIGNMENT*

What relationship does the framework's vocabulary have to the RICS Data Standard, OSCRE, ISO 20022, and to any vocabulary the reform programme adopts?

- **(a) Map.** Keep a distinct vocabulary, publish mappings to named external ones.
- **(b) Adopt.** Take an external vocabulary as the framework's own where one exists.
- **(c) Profile.** Define a constrained profile of an external vocabulary.
- **(d) No formal relationship.** Alignment left to implementers.

**Why external.** Options (a) to (c) all require the other standards bodies to engage, and effort spent on a mapping nobody maintains is wasted. Their timetables are not the coalition's to set.

### S3-2 — Credential format
*Trace: R-ALIGNMENT, R-MINIMISATION, R-CLASSIFICATION, R-ARTEFACT*

In what format are assertions carried, and does the choice keep the framework inside the UK and EU wallet ecosystem?

- **(a) SD-JWT-VC.** Selective disclosure and type metadata, with broad wallet support.
- **(b) W3C Verifiable Credentials with Data Integrity proofs.** Richer semantics, JSON-LD processing requirements.
- **(c) ISO mdoc.** The format the mobile identity ecosystem is converging on.
- **(d) Multiple formats** with a required minimum.

**The choice constrains more than interoperability.** A format determines what an assertion can carry alongside the fact itself. Whether a disclosure classification can travel with a fact, and whether a reference to the artefact an assertion rests on can be carried and bound to it, are properties of the format as much as of the framework — so a format that carries neither natively pushes both into extensions the framework must define and test for itself. That is a cost rather than a disqualification, and it should be counted rather than discovered.

**Why external.** The deciding constraint is which formats GOV.UK Wallet and the relevant EU profiles will accept. That list is not the coalition's to set, and choosing against it strands the sector outside infrastructure R-ALIGNMENT exists to keep it aligned with.

### S4-8 — External alignment of the trust layer
*Trace: R-ALIGNMENT*

What is the framework's relationship to DIATF and to any statutory trust framework — on top, inside, or alongside?

- **(a) On top.** Identity assurance certified externally; the framework adds domain authority — who is authoritative for which facts — as a separate layer.
- **(b) Inside.** Seek recognition of property data authority as a scheme within an existing framework.
- **(c) Alongside.** No formal relationship; participants may hold both.

**Why external.** Option (b) depends entirely on whether the existing framework's owners want to take it on, and on their timetable. Worth noting for the record that certifying an organisation as a trustworthy identity provider is a different statement from establishing that a given body is authoritative for a given class of fact; whether the second needs a property-specific layer is the substance of this decision.

### S8-8 — Relationship to the reform programme and any statutory footing
*Trace: —*

What relationship does the framework have to the homebuying reform programme, and what would it need in order to be referenceable in legislation?

- **(a) Referenced standard.** Legislation names the framework, and conformance to it.
- **(b) Referenced outcomes.** Legislation states required outcomes; the framework is one way to meet them.
- **(c) Voluntary.** No statutory relationship; adoption is commercial.
- **(d) Scheme with statutory backing** and a designated operator.

**Why policy.** This is government's decision rather than the coalition's. What the coalition can do is ensure the framework satisfies the preconditions for (a) or (b), which are mostly questions of openness, custody and licensing — and therefore depend on S8-2 and S8-7.

---

## 6. Needing participation not yet secured, or policy

### S0-2 — Which property types
*Trace: R-INCREMENTAL*

- **(a)** Residential freehold and leasehold only.
- **(b)** Plus new build.
- **(c)** Plus shared ownership and social housing.
- **(d)** All residential plus commercial.

**Why participation.** The parties affected by the wider options — developers, housing associations, commercial agents — are not currently at the table. Separately: pilot scope and framework scope are different questions and should be decided separately, since exclusions that are sensible for a pilot become permanent if inherited by a specification.

### S0-7 — Which data categories are in and out of scope
*Trace: R-MINIMISATION*

- **(a)** Material information as currently defined.
- **(b)** Material information plus title and search data.
- **(c)** Everything in a standard property pack.
- **(d)** Open-ended — the framework carries any category, and scope is set by profiles.

**Why participation.** What must be disclosed is being determined by the reform programme and the professional bodies, on their timetable rather than the coalition's.

### S8-2 — Legal form and funding of the framework operator
*Trace: R-PARTICIPATION, R-DATA-PATH*

- **(a)** Independent not-for-profit with sector governance.
- **(b)** An existing sector body, extended.
- **(c)** A government or arm's-length body.
- **(d)** A regulated scheme under statutory backing.

**Why partly policy.** Options (c) and (d) are not the coalition's to choose. Option (a) requires funding commitments no single participant can make. R-PARTICIPATION and R-DATA-PATH constrain all four: whichever is chosen must not put the operator in the data path or let it refuse a conformant participant.

### S9-4 — Originator adoption sequence
*Trace: R-PARTICIPATION*

- **(a) Originator-first.** Secure authoritative sources before building outward.
- **(b) Intermediary-first.** Platforms proxy authoritative data until originators issue directly.
- **(c) Parallel.**
- **(d) Demand-led.** Sequence follows whichever originators volunteer.

**Why participation.** This cannot be settled among software suppliers. The bodies concerned set their own timetables, and (a) is not the coalition's to choose — only to request.

### S9-5 — Incentives and mandates
*Trace: R-INCREMENTAL*

- **(a)** Voluntary, with commercial incentives only.
- **(b)** A mandate on originators to publish.
- **(c)** A mandate on transaction parties to use.
- **(d)** A conditional mandate triggered by adoption thresholds.

**Why policy.** Government's decision. The coalition's useful contribution is evidence on what voluntary adoption achieves and precisely where it stalls — which is a reason to instrument the pilot for that question specifically.

---

## 7. What this means for scheduling

Four legal opinions, six build rounds, four external dependencies and five decisions awaiting participation. The opinions and the external confirmations can be started early and run in parallel with sessions; the build rounds cannot begin until their parent decisions resolve, which puts them structurally after the root decisions close.

That is the whole of the argument about how long the Develop phase needs. It is made by the dependencies rather than by assertion, and it can be checked decision by decision against this document.
