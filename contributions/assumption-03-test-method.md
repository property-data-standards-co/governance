# Assumption 03: test method

**Smart Data Clusters: natural and durable information domains.** Draft 0.1, 14 November
2026, from the test owner for review with the supporting group (Adrian Field, Sally
Holdway, Chris Lees) and CFIT before the written method is due on Friday 20 November.

> **The assumption.** The proposed Smart Data cluster model represents natural and
> durable information domains.

The test compares the seven clusters with one alternative way of organising the same
information: by **entity**. In an entity model, information is organised by what it is
about, and the relationships between those things are recorded as items in their own
right. If the entity organisation proves more natural and more durable, the cluster model
needs revisiting as the structure, though it may still serve as a set of views. If it
does not, the assumption stands.

---

## 1. The two models under test

**The cluster model.** The seven clusters as presented at Sprint 3: property identifiers;
title and ownership; material information; valuation and mortgage readiness; legal and
compliance; trust, identity and reliance; transaction state and milestones.

**The entity model.** Four kinds of thing, distinguished by how long they last:

| Entity | What it is | How long it lasts | Identified by |
|---|---|---|---|
| Property | The physical place | Indefinitely, across owners | UPRN |
| Title | A registered (or unregistered) legal estate | Until closed or merged | Title number, or a provisional identifier before first registration |
| Party | A person or organisation | Independently of any sale | Verified identity; company number |
| Transaction | One attempt to sell and buy | From instruction or sale agreed to completion or fall-through | A transaction identifier |

Between them sit **relationships**, each recorded as a separate item that names both
sides, says who asserted it and on what basis, and can be withdrawn without changing
anything else. Examples:

- a property relates to a title, and a title to several properties;
- a party owns a title;
- a party sells in a given capacity in a transaction;
- a party makes an offer in a transaction;
- a conveyancer or agent represents a party;
- a lender or giftor takes a role.

Both models are given to classifiers in these plain terms. Neither is presented as any
participant's product or schema.

---

## 2. The question

*Which organisation places information more consistently, groups information that shares
the same rules, survives change without restructuring, and can express the relationships
a transaction depends on?*

The assumption holds if the cluster model meets the thresholds in §4 and the entity model
does not clearly outperform it. It fails if the entity model outperforms it on three or
more of the five criteria C1 to C5.

---

## 3. Evidence, criteria and who holds the evidence

| | Criterion | What is measured | Evidence | Who holds it |
|---|---|---|---|---|
| **C1** | **Agreement** | Do independent people put the same attribute in the same place? Fleiss' κ for cluster placement and for entity placement, on the same sample. | A sample of about 200 attributes from the cluster homework spreadsheet, classified independently by three people from different segments | CFIT (spreadsheet, sample); three classifiers |
| **C2** | **Single home** | Share of attributes placed in more than one unit, or in none | Cluster homework responses (due Monday 16 November), and the same attributes placed against the entity model | CFIT; homework respondents |
| **C3** | **Shared rules** | Within each unit, the share of attributes with the same authoritative source class, refresh cycle and lifespan (ends with the transaction, or passes to the next owner) | The C1 sample, annotated with source, refresh cycle and lifespan | Supporting group; standards owners where needed |
| **C4** | **Durability** | Would the unit set have needed splitting, merging or renaming to absorb recent changes? Four are replayed: NTS material information Parts B and C (2023); Building Safety Act leasehold information; migration of local land charges to HMLR; and the move from the Phase 1 cluster set to the Sprint 2 set, including the dropped financial information cluster | Published change descriptions; the Phase 1 roadmap and Sprint 2 pre-read | Public sources; CFIT |
| **C5** | **Relationships** | Can each relationship a sale depends on be expressed as its own attributable, withdrawable item, and can the scenarios below be handled without workaround fields? | A list of ten relationships and four scenarios, walked through under each model in one working session | Supporting group, with a conveyancer and a lender present |
| **C6** | **Financial information** | Does income, affordability, proof of funds, source of wealth and decision in principle sit coherently in valuation and mortgage readiness, or does it behave as a separate domain? | The financial attributes from the homework, scored on C1 to C3 as a subset | CFIT; lender and broker respondents |

**The ten relationships for C5.**

1. Property to title, including a title related to a property but not being sold, such
   as the block freehold in a leasehold flat sale.
2. One title to several properties.
3. Owner to title.
4. Seller's capacity in this sale.
5. Buyer's offer.
6. Representation of the seller.
7. Representation of the buyer.
8. The lender's role.
9. A giftor's contribution.
10. A provisional title link for unregistered land, superseded at first registration.

**The four scenarios for C5.**
- **Change of conveyancer.** The seller changes conveyancer mid-transaction. Does one
  change end the old firm's access and start the new firm's?
- **Leasehold flat.** Can the superior title be shown as relevant but not conveyed?
- **Collapse and relist.** The sale collapses and the property is relisted. Which
  information carries over, and which ends with the first transaction?
- **Lender joins.** The buyer's lender is instructed. What becomes visible to it, and by
  what?

C5 is included because the assumption is about information domains, and a large part of
the information in a transaction is relational: who owns what, who acts for whom, who has
offered. A model in which relationships are items in their own right can also derive
access from them: a party sees what its relationships to the transaction entitle it to.
Whether that holds in practice is part of what C5 tests. It bears on the access and
consent questions in the Trust, Legal & Policy workstream's scope, which this test
informs but does not settle.

---

## 4. Thresholds, agreed before any evidence is analysed

| | Cluster model meets the assumption if | Entity model outperforms if |
|---|---|---|
| C1 | κ ≥ 0.7 | Its κ exceeds the cluster model's by 0.1 or more |
| C2 | At most 10% of attributes have more than one home, and at most 5% have none | Its combined rate is at least 10 percentage points lower |
| C3 | In every cluster, at least 80% of attributes share the cluster's most common source class, refresh cycle and lifespan | It meets 80% in more units, proportionally, than the cluster model |
| C4 | No cluster needs splitting, merging or renaming for any of the four changes | It needs fewer restructurings across the four |
| C5 | At least 8 of the 10 relationships, and 3 of the 4 scenarios, are handled without workaround fields | It handles more of each |
| C6 | Financial attributes meet C1 to C3 within valuation and mortgage readiness | Reported, not scored: it informs whether a financial domain is missing |

These numbers are proposals for the supporting group to change on the call before 19
November. Once agreed they are fixed, and results are reported against them whichever way
they fall.

**Outcomes.**
- **(a) The assumption holds.** The cluster model meets C1 to C4 and is not outperformed.
- **(b) It holds as views, not as structure.** The entity model outperforms on three or
  more criteria, but every one of the seven clusters can be defined as a selection over
  entities and relationships. The clusters then remain useful as views by use case, over
  an entity structure.
- **(c) Neither model passes.** Both are revisited.

---

## 5. Keeping the test fair

- **The sample** is drawn by CFIT from the homework spreadsheet, not by the test owner.
- **The classifiers** come from three different segments. None of them drafted either
  model.
- **The entity model** is described in the plain terms of §1, not as any participant's
  schema.
- **All results are published**, including any criterion on which the cluster model does
  better.
- **Declared interest.** The test owner's organisation maintains a data schema organised
  by entity. The owner writes the method and the report, while classification and scoring
  are done by others, so that the result could go either way and be seen to.

---

## 6. Timetable

| Date | Step |
|---|---|
| Mon 16 November | Cluster homework returned |
| By Thu 19 November | 30-minute call: agree the models' wording, thresholds and classifiers |
| Fri 20 November | Written test method to CFIT |
| Week of 23 November | Sample drawn; classification (about two hours per classifier); C3 annotation; C4 replay |
| Week of 30 November | C5 working session (about 90 minutes); analysis |
| Sprint 5 | Initial report against the thresholds |

---

## 7. Where the result goes

The result is evidence for the cluster model's place in the Phase 2 scope. It also
informs questions in the proposed governance record offered to CFIT as a candidate
process for the Trust, Legal & Policy workstream, which CFIT has not adopted. In that
record:

- **PDR-S3-9a** asks how the data should be decomposed;
- **PDR-S2-2** asks what the entity set is;
- **PDR-S2-4** asks whether relationships are recorded as items in their own right;
- **PDR-S6-10** asks how a party shows it is entitled to a fact.
