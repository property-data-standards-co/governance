# Requirements for the Property Trust Framework

**Layer 0 — draft, published ahead of first reading**

Offered for the coalition to amend, reject or replace. Nothing here is settled, and a requirement removed in session is the process working rather than failing.

---

## 1. What this document is

Layer 0 of the decision structure. Everything downstream — the ten root decisions, the decisions beneath them, and eventually the normative specification — is argued against the requirements ratified here. A design proposal is assessed by asking which requirements it meets and which it fails, not by asking who proposed it or what already exists.

Three things follow from that, and they are worth stating before the first reading rather than discovering during it.

**Requirements are ratified individually, not as a set.** A block objection to "the requirements" is not actionable. An objection to R-INDEPENDENCE is.

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

Grouped by theme. Each is intended to be ratified, amended or rejected on its own.

### Findability and identity

| ID | Requirement | Test |
|---|---|---|
| **R-SUBJECT** | Every fact is about a subject that has a stable, resolvable identifier persisting beyond any single transaction. | Can the same subject be referred to unambiguously in a later, unrelated transaction? |
| **R-IDENTIFIERS** | Identifiers are drawn from open schemes, not from any single operator's internal namespace. | Can a competitor mint and resolve identifiers without permission from any incumbent? |
| **R-DISCOVERY** | Given a subject identifier, an authorised party can locate the current holders of facts about that subject, without prior arrangement with them. | Can a newly instructed party find the data knowing only the identifier, rather than being told who holds it? |

*R-SUBJECT is what makes reuse structurally possible: a fact attached only to a transaction dies with it. R-IDENTIFIERS is what stops the identifier layer becoming a private toll.*

*R-DISCOVERY is separable from R-SUBJECT and often confused with it. R-SUBJECT says an identifier is stable and unambiguous; it does not say anyone can find what the identifier refers to. A framework can satisfy R-SUBJECT completely while leaving every party dependent on being told, out of band, which system holds the data — which is the present state of the market and is what makes reuse a matter of who you already know.*

### Accessibility and openness

| ID | Requirement | Test |
|---|---|---|
| **R-PARTICIPATION** | Any conformant participant can issue, hold, and consume data through published open interfaces, without bilateral negotiation with the framework operator. | Is there any point at which a single organisation can refuse a compliant participant? |
| **R-DATA-PATH** | The framework operator is not in the data path. | Does any transaction require data to transit a body that governs the framework? |
| **R-ENTRY** | Entry criteria are objective, published, and appealable. | Could a rejected applicant challenge the decision against written criteria? |

*These three together are what make the framework mandatable. Government will not create a regulated position for a market participant, and the first question officials ask is who can refuse whom.*

### Interoperability

| ID | Requirement | Test |
|---|---|---|
| **R-SEMANTICS** | Facts carry machine-readable semantics from a shared, versioned, openly published vocabulary; no private knowledge is needed to interpret them. | Can a party with no prior relationship to the issuer interpret the data correctly? |
| **R-ALIGNMENT** | The framework aligns with UK and EU digital identity and credentials infrastructure rather than defining a property-only stack. | Can a party already conformant with GOV.UK Wallet / DIATF / eIDAS 2.0 reuse that investment? |
| **R-EXTENSION** | New data, new participants, and new versions can be added without coordinated upgrade of all parties. | Can one participant adopt a new data type without every other participant changing? |

*R-EXTENSION is the anti-ossification requirement. A framework that needs everyone to upgrade together will stop changing about eighteen months after launch.*

### Reusable trust

| ID | Requirement | Test |
|---|---|---|
| **R-INDEPENDENCE** | A consumer can establish the origin and integrity of a fact without trusting the party that transmitted it. | If the transmitting platform were hostile, would tampering be detectable? |
| **R-PROVENANCE** | Every fact carries who asserted it, on what basis, and when. | Given any single data point, can its provenance be recovered? |
| **R-ARTEFACT** | Where an assertion rests on a document or other artefact, a relying party can obtain that artefact and establish that it is the one the issuer relied on. | If the stored artefact were substituted or altered, would a relying party detect it? |
| **R-REUSE** | A fact established once can be relied upon again — by another party, in another transaction, on another platform — subject to consent and continued validity. | Is re-collection ever forced by the framework's own structure rather than by the fact's age? |
| **R-WITHDRAWAL** | An erroneous assertion can be withdrawn, and parties relying on it can determine that it has been. | Is there a path from "issuer discovers error" to "consumer learns of it"? |
| **R-LIABILITY** | Liability for a false assertion attaches to an identifiable legal entity. | For any fact, can a relying party name who is answerable for it? |
| **R-AUTHORITY** | A statement of authority is itself an assertion: it carries who made it, on what basis, when, and until when, and is verifiable by the same means as the facts it authorises. | Can a relying party determine, without contacting the asserting party, both the basis and the currency of the authority it is relying on? |

*Composition does not create a new object of trust. A view assembled from many assertions is a convenience, and flattening provenance into it is a reasonable thing for a view to do — the history remains reconstructible from the assertions underneath. But the assertions are the evidence, and a consumer given only the composed view cannot establish origin or integrity without trusting whoever assembled it. R-INDEPENDENCE is therefore a requirement about what a consumer can get behind the view to, and not only about what the view says.*

*R-WITHDRAWAL is the one most often forgotten and most expensive to retrofit. A framework that can publish facts but not withdraw them will eventually publish something wrong and have no way to stop people relying on it.*

*What withdrawal does not do is undo disclosure, and the requirement should not be read as though it does. A party that has received a fact retains it, along with any artefact it obtained alongside it. Withdrawal tells that party the issuer no longer stands behind the assertion, and tells anyone who has not yet obtained it that they should not rely on it; neither effect reaches what has already been read. A design that treats revocable access to already-disclosed material as a confidentiality control is relying on a property this requirement does not provide. Confidentiality of restricted material is R-CONFIDENTIALITY's problem, and it is decided at the point of release rather than maintained afterwards.*

*R-ARTEFACT exists because many property facts are established by looking at a document, and will be for as long as a person is answerable for the conclusion. A surveyor's report, a consent to a building alteration, a photograph of a boundary feature: the assertion is the machine-readable claim, and the artefact is what a human checks it against. Provenance records that an issuer relied on something; it does not let anyone retrieve that something and confirm it is unchanged. Without R-ARTEFACT an assertion can cite evidence that no longer exists, or that has been quietly replaced, and nothing on the wire distinguishes the two.*

*R-ARTEFACT says nothing about whether the artefact is carried inside the assertion or referenced from it — that is the evidence model decision in S3, and the answer plainly differs between a two-page consent and a three-gigabyte survey video. It does constrain the referenced case more than it first appears: if R-CONFIDENTIALITY is also ratified, a restricted artefact held behind its host's own access controls does not satisfy it, because that is precisely the protection R-CONFIDENTIALITY declines to rely on. A reference to a protected resource is therefore not automatically available as an answer, and the interaction should be settled before S3's evidence model is closed rather than after.*

*R-AUTHORITY exists because authority is easy to describe and hard to represent. Saying that a body is authoritative because statute makes it so, or that a firm may assert because it is regulated, states where the authority comes from — it does not put anything on the wire that a verifier can check. Statute is not a signed artefact and professional registers are generally web lookups rather than credentials, so something must translate an externally-established authority into a checkable form. That translation is itself an assertion, made by somebody, and R-AUTHORITY requires it to carry the same provenance as the facts it underwrites. Without it, verifiable facts rest on unverifiable authority.*

### Privacy and consumer protection

| ID | Requirement | Test |
|---|---|---|
| **R-MINIMISATION** | A party receives only the data it needs; the framework must not require over-disclosure as a side effect of its structure. | Does obtaining one fact structurally force disclosure of others? |
| **R-CONTROLLER** | The data subject can determine who holds their personal data and on what basis, and can exercise data protection rights against an identifiable controller. | Is the controller for each personal data flow determinable from the framework's own model? |
| **R-CONFIDENTIALITY** | A fact whose disclosure is restricted remains unreadable to a party not entitled to it, independently of the access controls of whoever stores or transmits it. | If a holder's store were disclosed in full, would restricted facts be readable by a party not entitled to them? |

*R-CONTROLLER is not satisfied by a privacy policy. It is a question about whether the framework's own structure makes controllership determinable.*

*R-CONFIDENTIALITY is the counterpart to R-INDEPENDENCE. R-INDEPENDENCE says a fact's origin survives a hostile transmitter; R-CONFIDENTIALITY says a restricted fact's secrecy does. Both are statements about what happens when the party in the middle cannot be trusted, and neither is satisfied by a well-behaved holder — the test is what remains true when the holder is not.*

### Disclosure and permission

Property facts are not uniform in character, and a permission model that treats them as though they were will be wrong in both directions at once.

Some facts are already public: the title register is available to anyone on request, and an EPC sits on a public register searchable by address. Some are private but disclosed for a purpose — a seller's answers on a property information form are authored precisely in order to be shown to prospective buyers. Some are restricted and must not reach most parties to the transaction at all: an anti-money-laundering check result is the clearest case, and the party who needs it is not the party who holds the relationship with the subject.

Applying a single consent gate across all of these produces consent theatre over facts that are public anyway — which trains people to click through, records a control that does not exist, and makes the framework worse than the status quo it replaces — while giving no additional protection to the facts that actually need it. These requirements exist so that the permission model is derived from the character of the fact rather than from an assumption imported from other sectors.

| ID | Requirement | Test |
|---|---|---|
| **R-CLASSIFICATION** | Every fact carries a classification of its disclosure character, and that classification travels with the fact. | Given a fact in isolation, can a relying party determine its disclosure class without asking the issuer? |
| **R-PUBLIC** | Where a fact is already available to any member of the public from its authoritative source, the framework does not require the data subject's permission to obtain it. | Does obtaining a public record through the framework require a step that obtaining it from the source does not? |
| **R-ENTITLEMENT** | A party's role in a transaction does not by itself entitle it to every fact in that transaction. | Can a party with a valid role be structurally prevented from obtaining a fact it has no need for? |
| **R-ABSENCE** | A transaction can proceed without the data subject being online, responsive, or holding infrastructure that outlives the transaction. | Can a sale complete if the seller stops logging in after week two? Can a first-time buyer participate with no prior enrolment? |
| **R-COPIES** | Where a fact is copied into another system, its classification and the conditions on its use travel with it, and the copy is subject to the same rules as the original. | Can a party obtain by replication anything it could not have obtained by request? |

*R-ABSENCE is the scale requirement. The data subjects here are the entire home-moving population — hundreds of thousands of people a year, each engaged for a few months and then gone, most of whom will never think about this framework again. Any design that requires them to enrol in advance, hold something durable, or respond promptly at each step will fail in practice, however sound it looks. It cuts against a purist holder-mediated model and against a permission model routed through a subject-operated consent service, and it does so on practical grounds rather than architectural preference.*

*R-COPIES exists because property data does not only move by request. Platforms synchronise whole transaction states between themselves, and a system holding a copy has already received everything in it — there is no disclosure decision left to make at the point a question is asked. A permission model that only governs requests governs the smaller half of the traffic. R-COPIES does not say whether replication should be permitted; it says the rules cannot be escaped by choosing it.*

### Implementability

| ID | Requirement | Test |
|---|---|---|
| **R-RENDERING** | The framework can produce a human-readable presentation of the facts it carries, and a party can establish that the presentation and the assertions behind it agree. | Can an existing form or report be produced from framework data alone, and would a disagreement between the rendered document and the assertions be detectable? |
| **R-SMALL-FIRM** | A sole practitioner or small firm can participate fully without operating specialist cryptographic infrastructure. | Can a two-person conveyancing firm participate using services they can buy? |
| **R-INCREMENTAL** | The framework can be adopted incrementally, alongside existing practice, without a flag-day migration. | Can a participant adopt partially and still transact with non-adopters? |

*R-RENDERING is not the migration requirement, and the distinction matters because conflating them makes it expire. R-INCREMENTAL is about adoption: a participant can adopt partially and still transact with non-adopters, and it stops binding once everyone has adopted. The human-readable document does not stop being needed. A fully digital conveyancer still has a client who reviews and signs, a file that is inspected, and a regulator who asks to see what the client saw — and a court that may be shown it years later. The rendered form is not a bridge to the framework; for some purposes it remains the operative artefact, which is why the requirement is about the presentation and the data agreeing rather than about the framework being able to emit a document.*

*R-SMALL-FIRM and R-INCREMENTAL are the counterweight to everything above, and they should be uncomfortable. A framework only a large technology firm can implement has failed, however elegant. Most of the conveyancing market is small firms.*

---

## 5. Which of these are architecturally determinative

Stated openly, because the alternative is that it emerges at Layer 2 disguised as a technical objection. Every consequence below is conditional on ratification: none of these requirements is agreed, and until one is, the designs it would exclude remain available and are enumerated as live options in the decision map. That is why the map can be read before Layer 0 closes — it is where the consequences of ratifying any of these can be seen in full, decision by decision, before the vote that makes them binding.

- **R-INDEPENDENCE** would rule out any design in which trust in a fact reduces to trust in the platform serving it.
- **R-DATA-PATH and R-PARTICIPATION together** would rule out a central hub or registry through which data must flow.
- **R-REUSE** would rule out a purely transaction-scoped data model, because a transaction-scoped document cannot outlive its transaction.
- **R-SUBJECT** would push hard toward subjects — properties, titles, people — rather than documents.
- **R-SMALL-FIRM** would force an honest answer about hosted keys, custodial signing and intermediary-mediated participation, and would constrain the purest cryptographic designs.
- **R-PUBLIC and R-ABSENCE together** would rule out any design in which every disclosure is gated on an act by the data subject — R-PUBLIC because the gate adds nothing over public facts, R-ABSENCE because the subject cannot be relied upon to perform it. They do not say what replaces that gate.
- **R-ENTITLEMENT** would rule out access determined solely by role or by membership of the transaction, since both make entitlement follow from participation rather than from need.
- **R-COPIES** would rule out treating bulk synchronisation between platforms as outside the permission model, whatever is decided about whether it is permitted at all.
- **R-CONFIDENTIALITY** would rule out designs in which confidentiality rests solely on a holder behaving correctly — which includes most access-control-only models.

If the coalition wants a different architecture than these imply, the efficient path is to contest the requirements named above, not to argue their consequences one by one over the following six months.

---

## 6. Tensions to be resolved, not hidden

A requirement set with no internal tension has not been examined. Those visible already are named below, and each will need a deliberate resolution rather than a preference. The list is expected to grow as requirements are added.

**R-EXTENSION against R-SEMANTICS.** Extending without coordinated upgrade pulls toward loose, self-describing data. Shared machine-readable semantics pull toward agreed, versioned structure. The resolution determines how much the framework must agree centrally versus what it can leave to issuers.

**R-MINIMISATION against R-PROVENANCE.** Full provenance on every fact — who said it, on what basis, when — is itself information about the transaction and the parties. Minimisation and complete provenance are in direct tension at the margin.

**R-SMALL-FIRM against R-INDEPENDENCE.** Independent verifiability implies signing. Signing implies key custody. A two-person firm will not operate an HSM, and a first-time buyer will not operate anything at all. Whether hosted signing satisfies R-INDEPENDENCE is a real question and not a formality — and it is sharper for consumers than for firms, because a custodial arrangement for a data subject reintroduces exactly the "trust the platform" position that R-INDEPENDENCE exists to remove. Any answer that resolves this for small firms should be re-tested against consumers before it is treated as settled.

**R-ARTEFACT against R-MINIMISATION and R-SMALL-FIRM.** An artefact carried inside the assertion travels wherever the assertion travels, which over-discloses and puts weight on parties who wanted one field. An artefact referenced instead needs a resolvable and appropriately protected home, which somebody has to operate and keep available for as long as anyone may rely on the fact. Neither resolution is free, and the choice may differ by artefact size and disclosure class rather than being settled once.

**R-CLASSIFICATION against R-MINIMISATION.** A classification that travels with a fact is itself information about that fact. Marking an assertion as restricted tells an observer something about its content, and a scheme fine-grained enough to be useful may leak by its own labels.

**R-DISCOVERY against R-CONTROLLER and R-ENTITLEMENT.** Discovery leaks. A mechanism that lets any party resolve who holds data about a property also tells them that the property is in a transaction, which is information about the seller nobody asked to publish. Restricting discovery to authorised parties creates a circularity — a party may need to discover the data before it can demonstrate entitlement to it — and a mechanism that avoids both the leak and the circularity tends to do it by interposing a service that decides who may resolve what, which R-DATA-PATH and R-PARTICIPATION then constrain. The tension is three-way rather than two-way, and the discovery decision is the choice of which leg to give up.

Two things bound how much is actually at stake. How much a discovery mechanism leaks depends on what it reveals that was not already obtainable from an authoritative public source, which is R-PUBLIC's test applied to the existence of a subject rather than to a fact about it. And discovery is only required where the parties are not already in relationship — R-DISCOVERY exists to remove dependence on prior arrangement, so where prior arrangement genuinely exists there is nothing for it to do.

**R-CONFIDENTIALITY against R-SMALL-FIRM and R-ABSENCE.** Confidentiality that survives copying implies keys held by every entitled party. A two-person firm will not manage keys, and a consumer will not manage anything — so either the keys are held on their behalf, which reintroduces a trusted intermediary, or the requirement is not met for the parties who most need it. This is the same tension as R-SMALL-FIRM against R-INDEPENDENCE, arriving from the other direction, and it should be resolved once for both.

**R-WITHDRAWAL against R-REUSE.** Reuse means facts travel to parties the issuer may not know about. Withdrawal means reaching those parties. The wider the reuse, the harder the revocation problem becomes.

Naming these now means the working group can decide where each is resolved, rather than rediscovering them as blockers.

---

## 7. Candidates considered and not proposed

Included so the omissions are visible and can be challenged.

**Performance and latency requirements.** Real, but they belong to an implementation profile rather than to the framework's properties. Premature at Layer 0 and likely to be set against whatever today's systems happen to achieve.

**Cost ceilings for participation.** The concern is real and is addressed by R-SMALL-FIRM in a falsifiable form. A stated cost figure would be arbitrary and would date immediately.

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
| **Rejected** | Not adopted. Recorded with the objection, so it is not silently reintroduced later, and the decisions it was the sole trace for are re-traced or withdrawn. |
| **Deferred** | Held, with a named owner and a stated test for what would settle it. Deferral is a legitimate outcome and should not be treated as failure. |

**Additions are expected.** The set above is a starting draft, not a proposal for closure. A requirement the coalition adds is worth more than one it accepts. An added requirement takes a new identifier; an amended one keeps the identifier it had, since the identifier is a name cited by every requirement trace rather than a description of the current wording.

**Rejection and amendment reach into the decision map.** Most decisions in the map are tested against more than one requirement, but a little over half of the Layer 2 decisions cite exactly one, and around two-thirds of the requirements here are the sole trace for at least one decision. None is uncited. Rejecting a requirement therefore leaves decisions standing with nothing to test them against — which does not make them go away, because the framework still has to decide vocabulary versioning or status mechanics whatever Layer 0 says. What it removes is the claim that the decision is being argued against something the coalition agreed, and a decision with no trace is decided on preference, which is the failure this layer exists to prevent.

So a rejection is not complete when it is minuted. The decisions whose sole trace it was are listed, and each is either re-traced to a requirement that survives or withdrawn from the map, on the record. The same applies in weaker form to amendment: a requirement whose wording changes materially should have its traces re-read rather than assumed to still hold.

**On sustained objection.** An objection that a requirement is not falsifiable, is technology-specific, or cannot be traced to the purpose statement goes to the substance and blocks ratification until answered. An objection that a requirement is inconvenient for a particular participant's roadmap is recorded but does not block. The distinction should be agreed before the first reading, not litigated during it.

**Where a requirement cannot be settled**, it is deferred with a test rather than argued to exhaustion. A requirement set of twenty ratified and five deferred is a better Layer 0 output than twenty-five agreed by fatigue.
