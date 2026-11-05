# The ten assumptions: what kind each is, how each could fail, and where each lands

**A contribution to the Product & Service Design workstream for Sprint 3 (Thursday 5 November
2026), from a participant in the Trust, Legal & Policy workstream.** Version 1, 2 November
2026.

This note responds to *CFIT Open Property PSD Assumption Prioritisation* and the *PSD
Sprint 2 Pre-Read* (22 October 2026). It refers throughout to a governance record that
has been offered to CFIT as a candidate process for the Trust, Legal & Policy workstream.
CFIT has not committed to adopting it; it is a proposal, written so that CFIT can adopt it
and badge it as its own if it chooses. Appendix A summarises it so that its requirements
can be cited by identifier, and §6 maps each assumption onto it. The full proposal is at
[property-data-standards-co.github.io/governance](https://property-data-standards-co.github.io/governance/).

---

## Summary

**The ten are four kinds of thing, and each kind needs a different test.**

| Kind | Assumptions | Tested by |
|---|---|---|
| Claims about the current state | Data availability, interoperability, the identifier half of the Digital Property ID | Measurement against a threshold set in advance |
| Design hypotheses | Verification, consent, Smart Data Clusters, reusable information assets | A build or prototype with failure criteria agreed in advance, run against an alternative design |
| Outcomes to be engineered | Trust and legal reliance, commercial incentives | Working out what would have to be true. The answer is a list of requirements and policy asks |
| The programme thesis | Strategic outcomes | A baseline now, and the pilot |

**Three points apply to all ten.**
- **Failure conditions.** Each test method needs a failure condition agreed in advance, as
  well as a pass condition. Several of the methods proposed cannot return a negative
  result as written.
- **Prioritisation.** Ranking by effort and value favours the cheapest and most widely
  believed assumptions. Ranking by what depends on an assumption, and how weak the
  evidence for it is, favours the riskiest.
- **Timing.** Three assumptions are worded against priority use cases, which Sprint 4 sets.

**Smart Data Clusters.** The set has already changed once since the Phase 1 roadmap, it
divides data along three different axes, and trust varies inside every cluster. An
agreement test against alternative axes would show whether clusters work as units of
standardisation or as views.

**Digital Property ID.** The property–title relationship is many-to-many, which a single
identifier cannot express and a graph of UPRNs, titles and their links can. Unregistered
land has to be handled without waiting for registration.

**Suggested first three tests** (§4):
1. **Conditions for reliance.** What would let conveyancers, lenders and insurers rely on
   assertions they did not make, with the lawful-basis question for consent in the same
   legal brief.
2. **Clusters.** An agreement test against alternative axes.
3. **The Digital Property ID anchor.** How often the full UPRN–title relationship can be
   established at instruction, and in what shapes.

---

## 1. Four kinds of assumption

The deck introduces the ten as "hypotheses and assumptions". They fall into four
categories, and each category calls for a different kind of test.

| Category | What it is | How it is tested | Which of the ten |
|---|---|---|---|
| **Claim about the current state** | An empirical claim about the market today, true or false now | Measured against a threshold set in advance | 1 Data availability; 2 Interoperability, once its embedded model is removed (§3.2); the identifier half of 7 Digital Property ID |
| **Design hypothesis** | "If X is built, it will do Y." True or false depending on the design | Build round or prototype with failure criteria agreed in advance, run against at least one alternative design | 4 Verification, 5 Consent, 6 Smart Data Clusters, 8 Reusable information assets |
| **Outcome to be engineered** | A condition the programme has to create. Its present answer is known and does not inform design | Establish what would have to be true for it to hold. Those conditions become requirements or policy asks | 3 Trust and legal reliance, 9 Commercial incentives |
| **Programme thesis** | The benefit case: the dependent variable rather than an input | Baseline and counterfactual defined now, tested in the pilot | 10 Strategic outcomes |

Two of the design hypotheses carry a design choice inside the assumption.

- **Consent (5)** assumes that the data subject's consent is the access gate.
- **Verification (4)** assumes a single ordinal scale of three named tiers.

A test of either as worded measures how well the assumed design performs. It does not
show whether that design was the right one. A usability study of a dynamic-consent
prototype, for example, says nothing about whether consent should be the gate.

Two of the ten are outcomes.

- **Reliance (3).** Asked today whether conveyancers, lenders and insurers rely on
  third-party verified information, the answer is that they largely do not, because
  standards of care, lender instructions, insurers' terms and caveat emptor place
  liability on the party who re-checks. Reliance follows from who is answerable, on
  what terms, and whether regulators, lenders and insurers accept it. Those conditions
  are designed, and in part legislated.
- **Commercial incentives (9).** Adoption despite lock-in depends on incentives and
  mandates that sit with the DPMSG.

For both, the productive test is *what would have to be true*, and its output is a list
of requirements and policy asks.

---

## 2. Points that apply to all ten

**Quantifiers need numbers.** "Most information", "sufficient overlap", "most market use
cases" and "materially improve" each need a threshold before a test can return a
result that counts against them.

**Each method needs a failure condition as well as a pass condition.** The Sprint 2
template asks for "what would have to be true for it to pass". Agreeing in advance what
result would count as failure is the other half. Without it, a pass and a favourable
reading of a result look the same.

Several proposed methods cannot return a negative result as written:

- mapping transaction information into the proposed clusters always places it
  somewhere;
- mapping standards, data models, identifiers and APIs always produces a map;
- prototyping permissions, delegation, duration and revocation always produces a
  prototype.

Each becomes a test once a failure condition is attached.

**The prioritisation axis.** An effort and value grid ranks a feature backlog. For
choosing which assumptions to test first, the usual axes in assumption mapping are:

- how much depends on the assumption;
- how weak the current evidence for it is;
- whether any result would change a decision soon.

On effort and value, the cheapest assumptions to test and the most widely believed rise
to the top. Those are also the least likely to change anything.

**Dependence on Sprint 4.** Assumptions 3, 4 and 10 are worded against "priority
information" or "most market use cases". Use cases are prioritised at Sprint 4 on 19
November. A sufficiency test run before then sets its own scope.

**The competition guidance constrains one method.** The method for assumption 9 includes
willingness to pay. The coalition's guiding principles on competition exclude
discussion of future pricing intentions and business strategy among partners. That
evidence would have to be collected bilaterally by CFIT and reported only in aggregate,
or gathered by an independent party.

**Three sit closer to Trust, Legal & Policy than to service design.** Reliance (3) is a
legal question, and its own method is legal review. Consent (5) is a lawful-basis
question before it is a usability one. Verification (4) is an assurance model. The
Digital Property ID boundaries already place "the approved standard" with Trust, Legal
& Policy. Applying the same division to these three would give each a single owner.

---

## 3. The ten, restated

Each entry restates the assumption so that a result could contradict it. It then gives
what would support and what would falsify it, who holds the evidence, and the
requirements and decisions it bears on. Requirement identifiers are listed in Appendix
A.2, and decision identifiers in A.3.

### 3.1 Data availability

> *Most information required for a property transaction already exists and can be
> sourced digitally.*

The wording runs together four different properties: the information exists somewhere;
it is digital; it is structured and obtainable by API; and it is obtainable on terms
that permit reuse by another party later. The pre-read's Layer 1 banner already states
the conclusion ("most of what a transaction needs already exists").

**Restated.** For the data items in the Sprint 4 priority use cases, what share (a) has an
identifiable authoritative source, (b) is held there in structured digital form, (c) is
obtainable by API at the point it is needed, and (d) is obtainable on terms that permit
onward reliance? Each limb takes its own threshold.

**Supports.** High shares on all four limbs.

**Falsifies.** A material share of decision-relevant items that exist only as seller
knowledge (much of a property information form), only as PDF reports, or only under
licences that do not permit reuse. Residential survey and valuation data is a likely
case: no published residential data schema for either is known.

**Who holds.** Originators: HMLR, local authorities, MHCLG and search providers.

**Requirements and decisions.** R-PUBLIC, R-ARTEFACT, R-REUSE; PDR-S0-7, S0-9, S9-4, S6-2.

### 3.2 Interoperability

> *Existing standards contain sufficient overlap to support a common Smart Data
> Standard.*

As worded, this tests only one of the three models CFIT has been asked to evidence. *From
Roadmap to Real-World Evidence* asks for evidence across a common standard, a common
conformance framework and a federated model, without prejudging which prevails. A
negative result on this wording reads naturally as "a new standard is needed", rather
than as evidence for a federated model with mappings.

"Standards" here also covers things that do not overlap in a comparable sense:
vocabularies, forms without schemas, registers, identity trust frameworks and protocols.

**Restated.** Per data area, does the overlap between existing standards support (a) one
common vocabulary, (b) published mappings between plural vocabularies without material
loss, or (c) neither? Does the answer differ between vocabulary, identifiers, trust and
provenance information, and interfaces?

**Supports.** Round trips from one form, through a common representation, to another form
with no material fact lost, mapped independently by two parties.

**Falsifies.** Lossy round trips for material facts. Two independent mappings of the same
form that disagree on a material share of fields.

**Who holds.** Standards owners (the Law Society, UK Finance, HBSG, NTSELAT, RICS, HMLR)
and implementers with mapping experience.

**Requirements and decisions.** R-SEMANTICS, R-INTEROPERATION, R-EXTENSION; PDR-S1-1, S1-3,
S1-4. The normativity classification (Appendix A.4) records, decision by decision,
whether an answer binds every implementer, is one of several profiles, or is left open.
Collated, that distribution is the evidence on the three models.

### 3.3 Trust and legal reliance

> *Conveyancers, lenders and insurers will rely on trusted third-party verified
> information.*

An outcome to be engineered (§1), and the barriers playback calls it the largest single
blocker.

**Restated.** What conditions must hold for a conveyancer, a lender and an insurer,
separately, to be permitted by their regulator, lender instructions and insurers to rely
on an assertion they did not make, and willing to do so? Which of those conditions can a
framework supply, and which need policy or rule change?

**Supports.** Precedents in which reliance follows from allocated liability. The register
is relied on because the state indemnifies it (Land Registration Act 2002, Schedule 8).
HM Land Registry's digital identity standard gives conveyancers a safe harbour for checks
that follow it. Regulated searches and search insurance let a buyer's conveyancer rely on
a search they did not commission.

**Falsifies.** A legal opinion that reliance on third-party assertions cannot discharge a
conveyancer's duty under current regulatory rules and lender instructions without rule
change. Or lenders and insurers stating conditions that no data-level mechanism can
meet. Either result moves reliance to the DPMSG's policy agenda, and the earlier that is
known, the earlier the referral can be made.

**A distinction that helps frame the test.** Technical non-repudiation is the property
that an assertion is attributable to an identified issuer, who cannot later deny making
it, and that any alteration is detectable. It is a precondition for allocating
liability, because a party cannot be held answerable for a statement that cannot be
attributed to them. It does not allocate liability. The legal question is who may rely,
for what purpose, under what cap or insurance, and with what redress.

**Who holds.** Regulators, UK Finance (the Lenders' Handbook), professional indemnity
insurers and the professional bodies. Legal counsel produces the opinion.

**Requirements and decisions.** R-LIABILITY, R-PROVENANCE, R-INDEPENDENCE, R-ARTEFACT,
R-AUTHORITY, R-WITHDRAWAL; PDR-S8-5 (an external legal opinion with a long lead time),
S3-5, S4-1, S7-3, and S8-8 for anything needing statute.

### 3.4 Verification

> *Tiered assurance is sufficient for most market use cases.*

The three tiers (self-attested, evidence-backed, source-verified) combine three
dimensions: who asserts the fact, what basis it rests on, and implicitly how current it
is. They omit a fourth, authority. A fact verified at source by a body with no authority
over that kind of fact is not strong however it was verified. Source-verified flood risk
and source-verified seller identity share a tier and little else.

**Restated.** For each Sprint 4 priority use case, can the assurance each relying party
needs, in order not to re-check, be expressed by a small published set of levels carried
with each fact? Can a relying party decide from the fact alone, without contacting the
issuer?

**Supports.** Relying parties' re-check rules for the same fact reduce to three levels or
fewer, and to the same levels across conveyancers, lenders and insurers.

**Falsifies.** Re-check rules that differ by relying party in ways one scale cannot carry,
for example a lender requiring a particular evidence type, a conveyancer requiring a
particular freshness, and an insurer requiring a named issuer. In that case the
underlying attributes (issuer, authority, evidence type, verification date, validity)
have to travel with the fact, each relying party applies its own policy, and tiers
become a presentation of those attributes.

**Who holds.** Relying parties. The assessment needs domain knowledge rather than
engineering.

**Requirements and decisions.** R-PROVENANCE, R-LIABILITY, R-AUTHORITY; PDR-S3-5, S4-6, S7-3,
S4-1.

### 3.5 Consent

> *Dynamic consent can support secure, portable and reusable information sharing.*

Four questions arise before any prototype is built.

- **Lawful basis.** For most transaction flows the lawful basis is more likely to be
  contract, legal obligation (which covers anti-money-laundering checks) or legitimate
  interests than consent. Consent must be freely given and capable of withdrawal, and a
  seller cannot meaningfully withdraw their conveyancer's access to the title part-way
  through a sale.
- **Public facts.** Much property data is not personal data, or is already public, such
  as the title register and the EPC register.
- **Absent subjects.** Data subjects are engaged for a few months and then disengage.
- **Authorisation is not consent.** Smart Data schemes under the Data (Use and Access) Act
  2025 rest on customer authorisation of a third party, which is a different instrument
  from consent under data protection law. The pre-read's "consent and authorisation:
  dynamic consent, delegated authority" combines the two.

**Restated.** What determines whether a party may see a given fact? For which classes of
fact (public, disclosed for a purpose, restricted) is an act by the data subject the
right gate, and where it is, does that act need to be standing, revocable and portable?

**Supports.** A lawful-basis opinion that consent, or authorisation in the Smart Data
sense, is the right basis for a material class of flows (lender access before
instruction is the likeliest), with that class large enough to justify the mechanism.

**Falsifies.** A lawful-basis opinion that consent is the wrong basis for
transaction-necessary flows. A "dynamic consent" record would then be recording an
authority rather than granting a permission, and would need to be designed as
delegation and entitlement.

**Who holds.** Data protection counsel, and the ICO's position on Smart Data schemes.

**Requirements and decisions.** R-CLASSIFICATION, R-PUBLIC, R-ENTITLEMENT, R-ABSENCE,
R-CONTROLLER; PDR-S6-1, S6-3, S6-4, S6-8, S6-9, S6-10. The decision map identifies S6-4 and
S6-8 as the longest-lead items in the tree.

### 3.6 Smart Data Clusters

> *The proposed cluster model represents natural and durable information domains.*

This is a design hypothesis: the choice of an axis on which to divide the data. The
material already available bears on both halves of it.

**Durability.** The cluster set changed between the Phase 1 roadmap and the Sprint 2
pre-read.

| Phase 1 roadmap (as used in the TLP standards-mapping exercise) | Sprint 2 pre-read |
|---|---|
| Property Identifiers and Unique Reference Numbers | Property identifiers |
| Title and Ownership Services | Title and ownership |
| Material Information and Risk | Material information |
| Valuation and Mortgage Readiness | Valuation and mortgage readiness |
| Legal and Compliance | Legal and compliance |
| **Fraud Risk and Intelligence** | **Trust, identity and reliance** |
| **Chain Progress and Telemetry** | **Transaction state and milestones** |
| *Consumer Wallet and Records* (exchange type) | not present |

Two clusters have been renamed with a change of scope, and one exchange type has been
dropped. The TLP standards-mapping spreadsheet still uses the earlier names, so two
cluster sets are currently in circulation.

**Naturalness.** The seven divide along three different axes:

- by subject (property identifiers; title and ownership);
- by purpose (valuation and mortgage readiness; legal and compliance);
- by properties that every other cluster also has (trust, identity and reliance;
  transaction state).

Every material-information fact also has a trust and reliance status, so
"trust, identity and reliance" cuts across the others rather than standing beside them.

The roadmap's own examples already sit in more than one cluster:

| Example | Placed in | Also belongs in |
|---|---|---|
| Offer data | Property identifiers | Chain progress |
| Consumer ID, digital ID, qualified electronic signature data | Title and ownership | Fraud risk and intelligence (now trust, identity and reliance) |
| Service charge | Title and ownership | Material information |
| Land charges | Material information | Legal and compliance (LLC1) |
| AML data | Valuation and mortgage readiness | Fraud risk |

**The definition.** A cluster is defined as "a group of related data with one standard for
what belongs in it and how it can be trusted". Trust varies within each cluster:

- Environment Agency flood data and a seller's answer about past flooding are both
  material information, with different authority, evidence, currency and liability;
- the register and a seller's capacity to sell are both title and ownership.

Seven clusters each with one standard would also be seven standards, where assumption 2
refers to one.

**Restated.** Four questions:

1. Do independent people from different parts of the market place the same data items in
   the same cluster?
2. Can trust, authority, refresh and disclosure rules be stated once per cluster without
   exceptions for a material share of items?
3. Would the set have survived recent structural changes to transaction data: NTS
   material information Parts B and C, Building Safety Act leasehold requirements, and the
   migration of local land charges to HMLR?
4. Does the cluster axis do better on 1 to 3 than an alternative axis? Candidates include
   division by subject (property, title, party, transaction), by authoritative source,
   and by refresh cadence.

**Supports.** Agreement above a threshold set in advance (for example Fleiss' κ of 0.7 or
more). Per-cluster rules that hold with few exceptions. Survival of the historical
changes. Clusters performing at least as well as the alternatives.

**Falsifies.** Low agreement. Rules that have to be stated per item, or per item and
source, rather than per cluster. Or the set changing again before Sprint 4.

**Method.** The agreement test needs a sample of around two hundred data items, three
classifiers from different segments, criteria published before anyone sees the sample,
and the alternative axes run on the same sample. It needs domain knowledge rather than
engineering. The decision map identifies the decomposition axis (PDR-S3-9a) as a question
settled by a build round rather than argument, and this is a version of that round.

**One reading of the result.** Clusters may perform well as use-case views (which sources
serve mortgage readiness, which serve legal and compliance) and less well as the unit of
standardisation, authorisation or disclosure. Clusters as views over a structural layer
beneath is a shape of answer the test can confirm or rule out.

**Requirements and decisions.** R-SEMANTICS, R-EXTENSION, R-INTEROPERATION; PDR-S3-9a, S2-2,
S4-3, S6-9.

### 3.7 Digital Property ID

> *A persistent property identifier can anchor reusable trusted information.*

As worded this is close to true by construction. UPRN is an open government standard
mandated for the public sector, and title numbers exist. The questions are in what the
wording leaves out.

**The relationship is many-to-many.** Both directions occur in ordinary sales.

- **One UPRN, several titles, only some of them sold.** A house on its main title with a
  garden strip or garage on a second, or a property with a retained title that stays with
  the seller.
- **One title, several UPRNs.** The freehold of a block of flats covers every flat. A
  leasehold flat sale conveys the leasehold title, and the superior freehold still
  matters to the buyer even though it is not being sold.

No single identifier can express which of a UPRN's titles are in a sale, or which flats a
freehold covers. A shape that can:

- UPRN as the canonical identifier for the property;
- title number as the canonical identifier for the title;
- a Property–Title link stating which titles relate to which properties;
- the transaction naming one or more properties and the subset of titles being sold,
  distinct from titles that are related but not conveyed.

On this reading, a Digital Property ID is the property node of a graph together with the
links that leave it, not a new identifier. The Sprint 1 anchor, "UPRN and title
relationship", fits it if read as a relationship between two canonical identifiers. Read
as a composite key derived from them, it is a single-identifier answer again and does not
handle either case above. Which reading is intended is worth settling directly.

**Where the links come from.** HM Land Registry holds the UPRN-to-title relationship data
for registered land. The data is not complete or wholly accurate, but no other source has
better standing. Three shapes of answer are available for the relationship model
(PDR-S2-4):

- **(a) Inferred from each transaction.** The parties to each sale state which titles
  relate to the property.
  - *For:* it needs no new issuer and works with current practice.
  - *Against:* the link exists only within a sale, no relationship is visible outside
    one, and the related-but-not-sold case cannot be expressed.
- **(b) Asserted by the register holder.** The holder of the relationship data asserts
  each link independently of any sale, and the transaction names which linked titles are
  being sold.
  - *For:* related-but-not-sold titles are the links not selected. A missing link shows
    up as a sold title with no link behind it, to be reported to the register holder,
    and a wrong link is simply not selected.
  - *Against:* it depends on the register holder issuing links, which is a service it
    does not offer today and would have to commit to. The links are also only as
    accurate as the underlying data.
- **(c) A composite key.** UPRN and title number combined into one identifier.
  - *For:* it is simple to adopt.
  - *Against:* it does not handle either many-to-many case.

Under option (b), whether a seller's or conveyancer's correction should also be
expressible within the graph is a separate question. It introduces competing assertions
about one fact (PDR-S4-7) and rules for conflicts between them (PDR-S3-6), and is best
informed by how often corrections turn out to be needed.

**Unregistered land.** The case needs recognising even without a settled answer. An
unregistered title has no title number and no register relationship to look up, and the
transaction cannot wait for registration. The seller's conveyancer deduces title from
the deeds, in an epitome running back to a good root. The buyer's conveyancer
investigates it, and the sale itself triggers compulsory first registration, which HMLR
processes after the sale completes. A Digital Property ID that requires a registered
title before a transaction can begin would exclude these sales.

A model that handles the case needs three things:

- an identifier for a title not yet registered;
- a link to the property, asserted by the party who deduces title and resting on the
  epitome as evidence;
- a way for that identifier to be superseded by the title number at first registration,
  with the earlier identifier still resolving.

Who issues such identifiers, and how duplicates are avoided, are open questions
(PDR-S2-3, S2-5).

**The working definition.** "A persistent digital reference for a property, holding what
has been verified about it and by whom, so that any authorised party … can rely on it
without checking again" raises three further points.

- **Holding and not holding.** "Holding what has been verified" sits beside the boundary
  "it does not hold the data". A reference that holds a record of verifications is an
  index. An index that someone assembles and keeps current, which is one of the slide's
  open questions, is an operated service. CFIT has confirmed that the programme's output
  is a specification anyone can implement rather than an instance somebody operates. The
  definition should say which of the two the Digital Property ID is.
- **The object of reliance.** "Rely on it without checking again" places reliance on the
  reference. Reliance attaches to an assertion: who made it, on what basis, when, and
  whether it is still valid (R-INDEPENDENCE, R-PROVENANCE).
- **The open questions.** The four questions the slide leaves open are each a decision in
  the map.

| Open question on the slide | Decision |
|---|---|
| Scoped to the property, or to the transaction? | PDR-S2-1, S0-5. A transaction-scoped reference is a transaction identifier, and R-REUSE cannot be met through it. |
| Who assembles it, and who keeps it current? | PDR-S5-10 (subject discovery), S8-9 (operator in the data path), S2-4 (relationship model) |
| How fresh does each part have to be? | PDR-S7-3, which needs originators |
| Does it carry on past completion? | PDR-S0-1 option (b), the enduring record |

**Restated.** Two questions.

1. **The anchor.** On a sample of real transactions, at instruction, from open or
   authoritative sources, what share can establish the full relationship set? That
   means every UPRN in the sale with all of its titles, every title with all of its
   UPRNs, which titles are being sold, and whether each is sold whole or in part.
   Record the distribution of shapes as well as the success rate: one-to-one, one UPRN
   to many titles, one title to many UPRNs. Report unregistered titles separately, since
   they cannot resolve by construction.
2. **Discovery.** Given that anchor, can a newly instructed party locate the holders of
   facts about the property without being told who they are, and without an operator in
   the data path?

**Supports.** High resolution rates. Edge cases that are infrequent and can be handled
with provisional identifiers. A discovery approach that does not reveal that a property
is in a transaction to parties with no entitlement to know.

**Falsifies.** A material share of transactions whose relationship set cannot be
established at instruction. Sold-subset and related-but-not-sold cases common enough
that they must be modelled. Many-to-many cases common enough to rule out any
single-identifier design. Separately, a finding that every workable discovery mechanism
needs an operated index would make the specification-or-instance question unavoidable.

**Who holds.** HMLR (the relationship data), GeoPlace, conveyancers (instruction data),
the Sprint 1 edge-case sub-group (frequency), and Pathfinder.

**Requirements and decisions.** R-SUBJECT, R-IDENTIFIERS, R-DISCOVERY, R-INDEPENDENCE,
R-LIABILITY; PDR-S2-1, S2-3, S2-4, S2-5, S2-6, S0-5, S5-10, S8-9.

### 3.8 Reusable information assets

> *Property and buyer information can be reused across transactions.*

Technically this depends on the design: true for a record attached to the property, false
for a pack attached to one transaction. Practically it depends on validity and
acceptance. It also covers two different cases. Reuse after a collapse (the week-nine
collapse and relist on the Digital Property ID slide) is weeks later, for the same
property and often the same seller, with a buyer's information reused across offers.
Reuse at the next sale is years later, with a different seller. Staleness differs
between the two by an order of magnitude.

**Restated.** Is re-collection ever forced by the structure rather than by a fact's age
(the test in R-REUSE)? Separately for the two cases, what share of facts is still valid
and acceptable at the next use?

**Supports.** A material share of facts still valid at the next use, and re-collection
today that is mostly structural (a new pack, a new form, a new provider).

**Falsifies.** Most facts needed at the next sale invalidated by age. Cross-sale reuse
then has low value, the value concentrates in reuse after a collapse and within a chain,
and PDR-S0-1 option (a) becomes the stronger scope.

**Who holds.** Pathfinder (fall-throughs with reasons, relist timing); originators
(validity periods).

**Requirements and decisions.** R-REUSE, R-SUBJECT, R-WITHDRAWAL, R-COPIES; PDR-S0-1, S0-5,
S2-1, S7-3.

### 3.9 Commercial incentives

> *Market participants will adopt open exchange models despite existing vendor lock-in.*

An outcome to be engineered (§1).

**Restated.** Under what combination of mandate, incentive and cost of conformance do
participants adopt, and what does conformance cost a small firm and an incumbent
supplier?

**Supports.** Adoption of open standards without a mandate; low conformance cost.

**Falsifies.** The market's own record. TA6 6th edition became mandatory for CQS firms in
March 2026, NTSELAT material information rests on consumer protection enforcement, and
Open Banking followed the CMA order. Voluntary uptake has generally been slower. On that
record PDR-S9-5 (incentives and mandates) carries the weight, and that is a question for
the DPMSG.

**A routing note.** The barriers playback routes "verify once and share reduces vendor
revenue" to the commercial workstream as not a design question. Part of it is one.
Whether reuse removes the data vendor's revenue depends on whether licence and
permitted-use terms travel with a fact (R-COPIES, PDR-S6-2). If they travel, reuse can be
priced. If they do not, each reuse is lost revenue. The commercial model belongs with the
commercial workstream, and the mechanism with design.

**Who holds.** Suppliers and firms, bilaterally (§2); the commercial workstream; the DPMSG.

**Requirements and decisions.** R-INCREMENTAL, R-SMALL-FIRM, R-PARTICIPATION; PDR-S9-1, S9-5.

### 3.10 Strategic outcomes

> *Trusted reusable information will materially improve speed, trust, cost and
> automation.*

The programme thesis. It cannot be tested within Clarify. The baseline and counterfactual
can be fixed now, which the measurement approach and the Pathfinder data request are
doing.

Four points bear on the method.

- **Isolating the effect.** Separating the effect of data reuse from wider process change
  needs a comparison group, and pilot firms select themselves.
- **What limits speed.** Chain dependencies, mortgage offers and people's decisions may
  dominate it. A large effect on information could then show as a small effect on time
  to completion.
- **Outcomes moving apart.** The four outcomes can move in different directions:
  information gathered earlier raises the cost and time to list.
- **"Trust"** has no proposed measure.

**Restated.** Measure the mechanism before the outcome. Three measures:

- facts re-collected per transaction;
- facts re-checked by a relying party;
- time from instruction to first availability of each priority fact.

Then measure the lead metric. The mechanism measures can be attributed to reuse.
End-to-end time cannot.

**Falsifies.** No fall in re-collection in pilot transactions against matched comparisons,
whatever the lead metric does.

**A small addition to a future Pathfinder round.** The data request is well suited to the
outcome baseline. Adding, per step, the number of facts obtained that had already been
obtained earlier in the same or a previous transaction would baseline the mechanism as
well.

**Requirements and decisions.** No Layer 0 requirement; PDR-S9-6 (pilot design), tested
against the evidence hierarchy (Appendix A.4).

---

## 4. A possible order of testing

Ranked on three criteria: how much depends on the assumption, how weak the current
evidence is, and whether a result would change a decision before the Develop phase
opens. Effort decides ties.

| | Assumption | Question | Passes if | Fails if | Who holds | Feeds |
|---|---|---|---|---|---|---|
| **1** | Conditions for reliance, with the lawful-basis question for consent in the same legal brief | What must hold for conveyancers, lenders and insurers to be permitted and willing to rely on assertions they did not make? Which flows rest on consent and which on another basis? | The conditions can be met within current rules | Rule change or statute is needed; or consent is the wrong basis for transaction-necessary flows | Regulators, UK Finance, insurers; counsel | PDR-S8-5, S6-4, S6-8, S6-1; DPMSG |
| **2** | Clusters as a division of the data | Do the clusters give consistent placement and per-cluster rules, and do they do better than alternative axes? | Agreement threshold met; rules hold per cluster | Low agreement; rules needed per item or per item and source; the set changes again | Three classifiers from different segments; an item sample drawn independently | PDR-S3-9a, S2-2, S4-3, S6-9 |
| **3** | The Digital Property ID anchor, as a relationship set | At instruction, what share of transactions can establish every UPRN–title link, the sold subset, and whole or part? What is the distribution of shapes? | Rate above threshold; many-to-many and edge cases infrequent enough to handle provisionally | Material share unresolvable; or many-to-many common enough to rule out a single-identifier design | HMLR, GeoPlace, conveyancers, Pathfinder, edge-case sub-group | PDR-S2-3, S2-4, S2-5, S2-6, S0-5 |

The brief for the first can be drafted by Sprint 4. The opinion itself will take longer,
which is why it is first. The second and third can report at Sprint 4.

For the remaining seven:

- data availability and interoperability are already being examined in Sprint 3's
  baseline paper and standards alignment matrix, and the restatements in §3.1 and §3.2
  add failure conditions to that work;
- verification follows once Sprint 4 has fixed the use cases;
- reusable information assets can draw on Pathfinder's fall-through and relist data;
- commercial incentives sit with the commercial workstream, collected bilaterally;
- strategic outcomes belong in the pilot's pre-registered design.

---

## 5. Further observations on the pre-read

**The layer diagram contains answers to open questions.** "Layer 2: pre-competitive shared
data layer" lists three items that are also open decisions.

- **"Issuer, holder, verifier, relying party."** This describes a particular model of
  assertion and presentation (PDR-S3-1, S5-1). The holder role has to be weighed against
  R-ABSENCE.
- **"Dynamic consent, delegated authority."** This is an access model (PDR-S6-1).
- **"Federated data sharing: no central property database."** This is the exchange
  model and the operator's place in the data path (PDR-S5-1, S8-9). The "central or
  federated" barrier on the same slides records it as a layer rather than a decision.

Each could be marked as a working assumption, pending the decision it depends on.

**"Layer" has two meanings.** P&SD uses Layers 1 to 3 for sources, the shared data layer,
and the Digital Property ID with reusable assets. The proposed governance record uses
Layers 0 to 3 for requirements, root decisions, decisions and specification. A
distinguishing word on one side would avoid confusion in joint sessions.

**When Clarify closes.** The P&SD sprint plan runs to 19 November, with Sprint 4
producing "direction for requirements", while the proposed governance record works to an
earlier close. It would help to confirm when Clarify closes for each workstream, since
that close opens the Develop schedule.

**"Direction for requirements" and Layer 0.** If Sprint 4 produces requirements and the
proposed governance record is adopted with its own requirement set, the coalition will
have two,
written to different tests. Filing anything P&SD produces as a requirement as a candidate
at Layer 0 would avoid that. It would then be held to the same four admissibility tests
(falsifiable, technology-neutral, traceable to purpose, not a preference), with P&SD's
prioritised use cases informing the scope decisions PDR-S0-4 and S0-9.

---

## 6. How the ten meet the requirement-and-decision record

Each of the ten already corresponds to requirements and decisions in the proposed
governance record.

| # | Assumption | Becomes | Requirements | Decisions |
|---|---|---|---|---|
| 1 | Data availability | Evidence for scope and sequencing | R-PUBLIC, R-ARTEFACT, R-REUSE | S0-7, S0-9, S9-4, S6-2 |
| 2 | Interoperability | Evidence for the normativity distribution, and so for the three models | R-SEMANTICS, R-INTEROPERATION, R-EXTENSION | S1-1, S1-3, S1-4 |
| 3 | Trust and legal reliance | Requirement conditions and a policy referral | R-LIABILITY, R-PROVENANCE, R-INDEPENDENCE, R-ARTEFACT, R-AUTHORITY, R-WITHDRAWAL | S8-5, S3-5, S4-1, S7-3, S8-8 |
| 4 | Verification | Evidence for the assurance model | R-PROVENANCE, R-LIABILITY, R-AUTHORITY | S3-5, S4-6, S7-3 |
| 5 | Consent | Evidence for the access model, and a legal opinion | R-CLASSIFICATION, R-PUBLIC, R-ENTITLEMENT, R-ABSENCE, R-CONTROLLER | S6-1, S6-3, S6-4, S6-8, S6-9, S6-10 |
| 6 | Smart Data Clusters | Build-round evidence on the decomposition axis | R-SEMANTICS, R-EXTENSION, R-INTEROPERATION | S3-9a, S2-2, S4-3, S6-9 |
| 7 | Digital Property ID | Evidence for the subject, identifier and relationship model | R-SUBJECT, R-IDENTIFIERS, R-DISCOVERY, R-INDEPENDENCE | S2-1, S2-3, S2-4, S2-5, S2-6, S0-5, S5-10, S8-9 |
| 8 | Reusable information assets | Evidence for scope | R-REUSE, R-SUBJECT, R-WITHDRAWAL, R-COPIES | S0-1, S0-5, S2-1, S7-3 |
| 9 | Commercial incentives | Policy referral, and evidence for adoption | R-INCREMENTAL, R-SMALL-FIRM, R-PARTICIPATION | S9-1, S9-5 |
| 10 | Strategic outcomes | Pilot outcome measures | None (method) | S9-6 |

At the close of Clarify, each assumption could take one of four dispositions, parallel to
the four a requirement can take at ratification.

| Disposition | What follows |
|---|---|
| **Requirement candidate** | The assumption names a property the framework must have. It is filed at Layer 0 and held to the admissibility tests. |
| **Evidence for a decision** | It is a claim a test can settle. The result is filed against the named decision, rated on the evidence hierarchy, with its failure condition recorded. |
| **Policy referral** | It turns on mandate, regulation or statute, and goes to the DPMSG on the record. |
| **Pilot measure** | It is an outcome. Its baseline and pre-registered criterion go into the pilot design (PDR-S9-6). |

This leaves the assumption register as P&SD's own instrument. It gives each Clarify
output a named place in the Develop programme, which the proposed governance record treats as the
schedule of decisions in its map.

---

## Appendix A. The proposed governance record in brief

**Status.** This method, its requirements and its decision map have been offered to CFIT as
a candidate process for the Trust, Legal & Policy workstream. CFIT has made no commitment
to adopt them. They are written to be neutral, so that CFIT can adopt them and badge them
as its own if it chooses. Until then they are a proposal, and the requirements are
candidates that no one has ratified.

The summary below lets requirements and decisions be cited by identifier. The full
proposal, including the
test attached to every requirement and the options for every root decision:
[property-data-standards-co.github.io/governance](https://property-data-standards-co.github.io/governance/)
([requirements](https://property-data-standards-co.github.io/governance/requirements.html),
[decision map](https://property-data-standards-co.github.io/governance/decision-map.html),
[charter](https://property-data-standards-co.github.io/governance/charter.html)).

### A.1 Purpose and governing rule

The purpose statement, proposed for ratification:

> A trust framework for property data in England and Wales that enables any fact about a
> property, its title, or the parties to a transaction to be established once, and
> thereafter relied upon by any authorised party, in any transaction, on any platform —
> with its origin and integrity verifiable independently of whoever transmits it.

The rule the method rests on:

> The coalition agrees the requirements. The requirements decide the architecture.
> Existing work enters as evidence — never as the starting assumption.

If adopted, the record would be evidence for decisions the DPMSG and government own, within the framing of
CFIT's *From Roadmap to Real-World Evidence* (September 2026). The method recommends;
CFIT decides.

### A.2 Requirements (Layer 0)

Twenty-nine candidate requirements, proposed to be ratified, amended, rejected or
deferred individually. Each carries a test in the full record. A requirement is admissible if it
is falsifiable, technology-neutral, traceable to the purpose, and not a preference.

**Findability and identity**

| ID | Requirement |
|---|---|
| R-SUBJECT | Every fact is about a subject that has a stable, resolvable identifier persisting beyond any single transaction. |
| R-IDENTIFIERS | Identifiers are drawn from open schemes, not from any single operator's internal namespace. |
| R-DISCOVERY | Given a subject identifier, an authorised party can locate the current holders of facts about that subject, without prior arrangement with them. |

**Accessibility and openness**

| ID | Requirement |
|---|---|
| R-PARTICIPATION | Any conformant participant can issue, hold, and consume data through published open interfaces, without bilateral negotiation with the framework operator. |
| R-DATA-PATH | The framework operator is not in the data path. |
| R-ENTRY | Entry criteria are objective, published, and appealable. |

**Interoperability**

| ID | Requirement |
|---|---|
| R-SEMANTICS | Facts carry machine-readable semantics from a shared, versioned, openly published vocabulary; no private knowledge is needed to interpret them. |
| R-ALIGNMENT | The framework aligns with UK and EU digital identity and credentials infrastructure rather than defining a property-only stack. |
| R-EXTENSION | New data, new participants, and new versions can be added without coordinated upgrade of all parties. |
| R-INTEROPERATION | Two participants that each conform to the framework can exchange and rely on facts with no agreement between them beyond the framework itself. |
| R-BOUNDARY | For each cross-scheme use case the coalition names, a fact established under another scheme can be relied upon within the framework, and vice versa, without re-collection and without either scheme adopting the other's rules. |

**Reusable trust**

| ID | Requirement |
|---|---|
| R-INDEPENDENCE | A consumer can establish the origin and integrity of a fact without trusting the party that transmitted it. |
| R-PROVENANCE | Every fact carries who asserted it, on what basis, and when. |
| R-ARTEFACT | Where an assertion rests on a document or other artefact, a relying party can obtain that artefact and establish that it is the one the issuer relied on. |
| R-REUSE | A fact established once can be relied upon again — by another party, in another transaction, on another platform — subject to consent and continued validity. |
| R-WITHDRAWAL | An erroneous assertion can be withdrawn, and parties relying on it can determine that it has been. |
| R-LIABILITY | Liability for a false assertion attaches to an identifiable legal entity. |
| R-AUTHORITY | A statement of authority is itself an assertion: it carries who made it, on what basis, when, and until when, and is verifiable by the same means as the facts it authorises. |

**Privacy and consumer protection**

| ID | Requirement |
|---|---|
| R-MINIMISATION | A party receives only the data it needs; the framework must not require over-disclosure as a side effect of its structure. |
| R-CONTROLLER | The data subject can determine who holds their personal data and on what basis, and can exercise data protection rights against an identifiable controller. |
| R-CONFIDENTIALITY | A fact whose disclosure is restricted remains unreadable to a party not entitled to it, independently of the access controls of whoever stores or transmits it. |

**Disclosure and permission**

| ID | Requirement |
|---|---|
| R-CLASSIFICATION | Every fact carries a classification of its disclosure character, and that classification travels with the fact. |
| R-PUBLIC | Where a fact is already available to any member of the public from its authoritative source, the framework does not require the data subject's permission to obtain it. |
| R-ENTITLEMENT | A party's role in a transaction does not by itself entitle it to every fact in that transaction. |
| R-ABSENCE | A transaction can proceed without the data subject being online, responsive, or holding infrastructure that outlives the transaction. |
| R-COPIES | Where a fact is copied into another system, its classification and the conditions on its use travel with it, and the copy is subject to the same rules as the original. |

**Implementability**

| ID | Requirement |
|---|---|
| R-RENDERING | The framework can produce a human-readable presentation of the facts it carries, and a party can establish that the presentation and the assertions behind it agree. |
| R-SMALL-FIRM | A sole practitioner or small firm can participate fully without operating specialist cryptographic infrastructure. |
| R-INCREMENTAL | The framework can be adopted incrementally, alongside existing practice, without a flag-day migration. |

R-BOUNDARY is abridged here; the full wording is in the record. The record also sets out
the requirements that would most constrain the architecture if ratified, and the
tensions between requirements, such as R-SMALL-FIRM against R-INDEPENDENCE and R-WITHDRAWAL
against R-REUSE.

### A.3 Decision hierarchy

Four layers. Nothing at a lower layer opens until its parent resolves.

| Layer | Content | Phase |
|---|---|---|
| 0 | Requirements, each with a test | Clarify |
| 1 | Ten root decisions, one per strand | Clarify |
| 2 | 77 Layer 2 decisions within the strands, each with a Decision Record | Develop |
| 3 | Normative specification, conformance suite, interoperability results | Implement |

The ten strands and their root questions:

| Strand | Root question | Depends on |
|---|---|---|
| S0 Scope | What transactions, parties, jurisdictions and data are in scope? | — |
| S1 Semantics | What is the shared vocabulary of property facts, and where does it come from? | S0 |
| S2 Subjects and identity | What are facts about, and how are those things named? | S0 |
| S3 Assertions | What is the atomic unit of assertion, and what does it carry? | S2 |
| S4 Authority and trust | Who may assert what, and how is that authority established and verified? | S3 |
| S5 Exchange | How does data move between parties? | S3, S4 |
| S6 Consent and privacy | Who may see what, on what lawful basis, and how is that enforced? | S3, S4 |
| S7 Lifecycle | How do facts change, expire, get corrected, and get withdrawn? | S3 |
| S8 Governance | Who operates the framework, admits participants, and handles failure and redress? | S0 |
| S9 Adoption | How does the sector get from here to there? | all |

S2, S3 and S4 form the spine: subjects, assertions, authority. Decision identifiers take
the form PDR-{strand}-{n}; the root decision in each strand is number 1. With one Layer 2
decision, PDR-S3-9, split into eight sub-decisions, the map holds 95 decisions in total. Of
those, 21 depend on something a working session cannot supply: an external legal
opinion, a build round, external confirmation, participation not yet secured, or policy.

### A.4 How a decision is taken

- **Consensus and objections.** Decisions are taken by rough consensus rather than
  voting. Objections are recorded permanently and named, whether or not they change the
  outcome.
- **Evidence.** Evidence is rated on tiers published in advance:
  - interoperability (I1, independent implementations against a published conformance
    suite, to I4, design only);
  - operation (O1, a live service at scale with published outcomes, to O4, no operational
    exposure);
  - and, for evidence on neither axis, A1 (an adopted external standard) to A4 (a stated
    preference).
- **Tests that could fail.** A test that could not have come out the other way counts as
  a demonstration, not as evidence. Failure criteria are pre-registered before a build
  round runs.
- **Closing.** A decision closes as resolved, provisional, referred on a full record, or
  deferred against a stated evidence test.
- **What each decision binds.** Each resolved decision records whether it is normative
  (one answer binding on every implementer), a profile (enumerated alternatives, each
  conformance-tested), or a non-decision (deliberately left to implementers). Collated
  across the tree, that classification is the evidence on CFIT's three candidate models.
- **Chairing.** Two chairs per strand. Where one chair's organisation has tabled a
  position on a decision, the other frames the question and judges consensus on it
  (charter §11.1).
