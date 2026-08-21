# Requirements for the Property Trust Framework

**Layer 0 — draft for first reading, Trust, Legal & Policy Sprint 1**

Offered for the coalition to amend, reject or replace. Nothing here is settled, and a requirement removed in session is the process working rather than failing.

---

## 1. What this document is

Layer 0 of the decision structure. Everything downstream — the nine root decisions, the decisions beneath them, and eventually the normative specification — is argued against the requirements ratified here. A design proposal is assessed by asking which requirements it meets and which it fails, not by asking who proposed it or what already exists.

Three things follow from that, and they are worth stating before the first reading rather than discovering during it.

**Requirements are ratified individually, not as a set.** A block objection to "the requirements" is not actionable. An objection to R9 is.

**This is not a warm-up.** Some of what follows is close to architecturally determinative — ratifying it forecloses whole families of design. That is the point, and it is why this layer deserves real debate rather than a nod. Section 5 says which ones, openly, so that nobody discovers it later.

**Anyone who wants a different architecture should contest the requirements, not the architecture.** That is a legitimate and welcome argument and this is the right place to have it. A participant who believes the sector needs a data-sharing agreement rather than a trust framework should say so here, where the coalition can decide it deliberately.

---

## 2. The purpose statement

Everything descends from one sentence, and ratifying it is the most consequential act of the Clarify phase:

> A trust framework for property data in England and Wales that enables any fact about a property, its title, or the parties to a transaction to be established once, and thereafter relied upon by any authorised party, in any transaction, on any platform — with its origin and integrity verifiable independently of whoever transmits it.

The phrase carrying the weight is **"independently of whoever transmits it."** It is the difference between a framework in which a fact is trusted because of where it came from, and one in which a fact is trusted because of who asserted it and what they signed.

Declining that phrase is a legitimate choice. It produces something narrower — an interoperability and data-sharing agreement between participating platforms — which is a real and useful thing to build, and considerably faster. What it does not produce is reuse across parties who have no relationship with each other, which is where most of the value in the reform programme sits. The coalition should choose between them knowingly.

---

## 3. What makes a requirement admissible

Four tests. They are offered as the working group's own quality bar, to be applied to everything below and to anything added.

**Falsifiable.** It must be possible to say of a proposed design "this meets it" or "this does not", without appeal to taste. Every requirement below carries an explicit test for exactly this reason. Vague requirements — *the framework should be secure and user-friendly* — are worse than none, because they can be cited in support of anything and against anything.

**Technology-neutral.** A requirement states a property the framework must have, not the mechanism that delivers it. "A consumer can establish origin and integrity without trusting the transmitter" is a requirement. "The framework uses verifiable credentials" is a design decision wearing a requirement's clothes, and admitting it here would settle at Layer 0 what belongs at Layer 2.

**Traceable to purpose.** Each should be derivable from the purpose statement, or from an obligation the framework cannot avoid — legal, regulatory, or practical.

**Not a preference.** "Data should be exchanged over REST APIs" is a preference. So, more subtly, is any requirement whose test only one existing implementation can pass. If a proposed requirement is written such that exactly one product in the market satisfies it, that is worth noticing out loud before ratifying it.

---

## 4. The candidate requirements

Seventeen, grouped for readability. Each is intended to be ratified, amended or rejected on its own.

### Findability and identity

| # | Requirement | Test |
|---|---|---|
| **R1** | Every fact is about a subject that has a stable, resolvable identifier persisting beyond any single transaction. | Can the same subject be referred to unambiguously in a later, unrelated transaction? |
| **R2** | Identifiers are drawn from open schemes, not from any single operator's internal namespace. | Can a competitor mint and resolve identifiers without permission from any incumbent? |

*R1 is what makes reuse structurally possible: a fact attached only to a transaction dies with it. R2 is what stops the identifier layer becoming a private toll.*

### Accessibility and openness

| # | Requirement | Test |
|---|---|---|
| **R3** | Any conformant participant can issue, hold, and consume data through published open interfaces, without bilateral negotiation with the framework operator. | Is there any point at which a single organisation can refuse a compliant participant? |
| **R4** | The framework operator is not in the data path. | Does any transaction require data to transit a body that governs the framework? |
| **R5** | Entry criteria are objective, published, and appealable. | Could a rejected applicant challenge the decision against written criteria? |

*These three together are what make the framework mandatable. Government will not create a regulated position for a market participant, and the first question officials ask is who can refuse whom.*

### Interoperability

| # | Requirement | Test |
|---|---|---|
| **R6** | Facts carry machine-readable semantics from a shared, versioned, openly published vocabulary; no private knowledge is needed to interpret them. | Can a party with no prior relationship to the issuer interpret the data correctly? |
| **R7** | The framework aligns with UK and EU digital identity and credentials infrastructure rather than defining a property-only stack. | Can a party already conformant with GOV.UK Wallet / DIATF / eIDAS 2.0 reuse that investment? |
| **R8** | New data, new participants, and new versions can be added without coordinated upgrade of all parties. | Can one participant adopt a new data type without every other participant changing? |

*R8 is the anti-ossification requirement. A framework that needs everyone to upgrade together will stop changing about eighteen months after launch.*

### Reusable trust

| # | Requirement | Test |
|---|---|---|
| **R9** | A consumer can establish the origin and integrity of a fact without trusting the party that transmitted it. | If the transmitting platform were hostile, would tampering be detectable? |
| **R10** | Every fact carries who asserted it, on what basis, and when. | Given any single data point, can its provenance be recovered? |
| **R11** | A fact established once can be relied upon again — by another party, in another transaction, on another platform — subject to consent and continued validity. | Is re-collection ever forced by the framework's own structure rather than by the fact's age? |
| **R12** | An erroneous assertion can be withdrawn, and parties relying on it can determine that it has been. | Is there a path from "issuer discovers error" to "consumer learns of it"? |
| **R13** | Liability for a false assertion attaches to an identifiable legal entity. | For any fact, can a relying party name who is answerable for it? |
| **R22** | A statement of authority is itself an assertion: it carries who made it, on what basis, when, and until when, and is verifiable by the same means as the facts it authorises. | Can a relying party determine, without contacting the asserting party, both the basis and the currency of the authority it is relying on? |

*R12 is the one most often forgotten and most expensive to retrofit. A framework that can publish facts but not withdraw them will eventually publish something wrong and have no way to stop people relying on it.*

*R22 exists because authority is easy to describe and hard to represent. Saying that a body is authoritative because statute makes it so, or that a firm may assert because it is regulated, states where the authority comes from — it does not put anything on the wire that a verifier can check. Statute is not a signed artefact and professional registers are generally web lookups rather than credentials, so something must translate an externally-established authority into a checkable form. That translation is itself an assertion, made by somebody, and R22 requires it to carry the same provenance as the facts it underwrites. Without it, verifiable facts rest on unverifiable authority.*

### Privacy and consumer protection

| # | Requirement | Test |
|---|---|---|
| **R14** | A party receives only the data it needs; the framework must not require over-disclosure as a side effect of its structure. | Does obtaining one fact structurally force disclosure of others? |
| **R15** | The data subject can determine who holds their personal data and on what basis, and can exercise data protection rights against an identifiable controller. | Is the controller for each personal data flow determinable from the framework's own model? |

*R15 is not satisfied by a privacy policy. It is a question about whether the framework's own structure makes controllership determinable.*

### Disclosure and permission

Property facts are not uniform in character, and a permission model that treats them as though they were will be wrong in both directions at once.

Some facts are already public: the title register is available to anyone on request, and an EPC sits on a public register searchable by address. Some are private but disclosed for a purpose — a seller's answers on a property information form are authored precisely in order to be shown to prospective buyers. Some are restricted and must not reach most parties to the transaction at all: an anti-money-laundering check result is the clearest case, and the party who needs it is not the party who holds the relationship with the subject.

Applying a single consent gate across all of these produces consent theatre over facts that are public anyway — which trains people to click through, records a control that does not exist, and makes the framework worse than the status quo it replaces — while giving no additional protection to the facts that actually need it. These requirements exist so that the permission model is derived from the character of the fact rather than from an assumption imported from other sectors.

| # | Requirement | Test |
|---|---|---|
| **R18** | Every fact carries a classification of its disclosure character, and that classification travels with the fact. | Given a fact in isolation, can a relying party determine its disclosure class without asking the issuer? |
| **R19** | Where a fact is already available to any member of the public from its authoritative source, the framework does not require the data subject's permission to obtain it. | Does obtaining a public record through the framework require a step that obtaining it from the source does not? |
| **R20** | A party's role in a transaction does not by itself entitle it to every fact in that transaction. | Can a party with a valid role be structurally prevented from obtaining a fact it has no need for? |
| **R21** | A transaction can proceed without the data subject being online, responsive, or holding infrastructure that outlives the transaction. | Can a sale complete if the seller stops logging in after week two? Can a first-time buyer participate with no prior enrolment? |

*R21 is the scale requirement. The data subjects here are the entire home-moving population — hundreds of thousands of people a year, each engaged for a few months and then gone, most of whom will never think about this framework again. Any design that requires them to enrol in advance, hold something durable, or respond promptly at each step will fail in practice, however sound it looks. It cuts against a purist holder-mediated model and against a permission model routed through a subject-operated consent service, and it does so on practical grounds rather than architectural preference.*

### Implementability

| # | Requirement | Test |
|---|---|---|
| **R16** | A sole practitioner or small firm can participate fully without operating specialist cryptographic infrastructure. | Can a two-person conveyancing firm participate using services they can buy? |
| **R17** | The framework can be adopted incrementally, alongside existing practice, without a flag-day migration. | Can a participant adopt partially and still transact with non-adopters? |

*R16 and R17 are the counterweight to everything above, and they should be uncomfortable. A framework only a large technology firm can implement has failed, however elegant. Most of the conveyancing market is small firms.*

---

## 5. Which of these are architecturally determinative

Stated openly, because the alternative is that it emerges at Layer 2 disguised as a technical objection.

- **R9**, if ratified, rules out any design in which trust in a fact reduces to trust in the platform serving it.
- **R4 and R3 together** rule out a central hub or registry through which data must flow.
- **R11** rules out a purely transaction-scoped data model, because a transaction-scoped document cannot outlive its transaction.
- **R1** pushes hard toward subjects — properties, titles, people — rather than documents.
- **R16** forces an honest answer about hosted keys, custodial signing and intermediary-mediated participation, and constrains the purest cryptographic designs.
- **R19 and R21 together** rule out any design in which every disclosure is gated on an act by the data subject — R19 because the gate adds nothing over public facts, R21 because the subject cannot be relied upon to perform it. They do not say what replaces that gate.
- **R20** rules out access determined solely by role or by membership of the transaction, since both make entitlement follow from participation rather than from need.

If the coalition wants a different architecture than these imply, the efficient path is to contest these five here, not to argue their consequences one by one over the following six months.

---

## 6. Tensions to be resolved, not hidden

A requirement set with no internal tension has not been examined. Four are visible already, and each will need a deliberate resolution rather than a preference.

**R8 against R6.** Extending without coordinated upgrade pulls toward loose, self-describing data. Shared machine-readable semantics pull toward agreed, versioned structure. The resolution determines how much the framework must agree centrally versus what it can leave to issuers.

**R14 against R10.** Full provenance on every fact — who said it, on what basis, when — is itself information about the transaction and the parties. Minimisation and complete provenance are in direct tension at the margin.

**R16 against R9.** Independent verifiability implies signing. Signing implies key custody. A two-person firm will not operate an HSM, and a first-time buyer will not operate anything at all. Whether hosted signing satisfies R9 is a real question and not a formality — and it is sharper for consumers than for firms, because a custodial arrangement for a data subject reintroduces exactly the "trust the platform" position that R9 exists to remove. Any answer that resolves this for small firms should be re-tested against consumers before it is treated as settled.

**R18 against R14.** A classification that travels with a fact is itself information about that fact. Marking an assertion as restricted tells an observer something about its content, and a scheme fine-grained enough to be useful may leak by its own labels.

**R12 against R11.** Reuse means facts travel to parties the issuer may not know about. Withdrawal means reaching those parties. The wider the reuse, the harder the revocation problem becomes.

Naming these now means the working group can decide where each is resolved, rather than rediscovering them as blockers.

---

## 7. Candidates considered and not proposed

Included so the omissions are visible and can be challenged.

**Performance and latency requirements.** Real, but they belong to an implementation profile rather than to the framework's properties. Premature at Layer 0 and likely to be set against whatever today's systems happen to achieve.

**Cost ceilings for participation.** The concern is real and is addressed by R16 in a falsifiable form. A stated cost figure would be arbitrary and would date immediately.

**Any named technology.** Verifiable credentials, DIDs, particular protocols, particular registries. All are Layer 2 decisions. Naming one here would settle the architecture by the back door.

**User experience requirements.** Genuinely important, genuinely not properties of a trust framework. They belong to the Product and Service Design workstream, and the framework should be judged on whether it obstructs good experiences rather than on whether it specifies them.

**A requirement that the framework be free to use.** Openness matters, but "free" is both insufficient and imprecise — it is satisfied by licences that forbid commercial use or derivative works. The licensing question is a governance decision with real options, and it is enumerated as one.

---

## 8. How ratification runs

Each requirement takes one of four dispositions, recorded with its reasoning:

| | |
|---|---|
| **Ratified** | Adopted as written. Everything downstream is testable against it. |
| **Amended** | Adopted with changed wording. The change and its reason are recorded. |
| **Rejected** | Not adopted. Recorded with the objection, so it is not silently reintroduced later. |
| **Deferred** | Held, with a named owner and a stated test for what would settle it. Deferral is a legitimate outcome and should not be treated as failure. |

**Additions are expected.** The set below is a starting draft, not a proposal for closure. A requirement the coalition adds is worth more than one it accepts.

**On sustained objection.** An objection that a requirement is not falsifiable, is technology-specific, or cannot be traced to the purpose statement goes to the substance and blocks ratification until answered. An objection that a requirement is inconvenient for a particular participant's roadmap is recorded but does not block. The distinction should be agreed before the first reading, not litigated during it.

**Where a requirement cannot be settled**, it is deferred with a test rather than argued to exhaustion. A requirement set of fourteen ratified and three deferred is a better Layer 0 output than seventeen agreed by fatigue.
