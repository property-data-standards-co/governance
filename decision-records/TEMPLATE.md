---
pdr: PDR-S0-0
title: One-sentence question, neutrally framed
layer: 2
status: drafted
strand: S0
requirements: []
depends_on: []
opens: []
opened: YYYY-MM-DD
resolved: YYYY-MM-DD
chair_of_record:
recusals: []
---

# Decision Record — template

*Copy this file to `decision-records/PDR-{strand}-{n}.md` and replace the heading below with the decision's own identifier and short title.*

## PDR-S0-0 — {short title}

> **Status:** drafted · **Layer:** 2 · **Strand:** S0
> **Requirements tested against:** —
> **Depends on:** — · **Opens:** —

## Question

*One sentence. Neutral framing. No embedded answer.*

A question is badly framed if it names a technology, if it can be answered yes or no in a way that settles the architecture, or if one option is the obvious reading of the words. "Should we use verifiable credentials?" imports its answer. "What is the minimum unit of assertion that satisfies R9?" does not.

**Framing is reviewed by the architecture group before publication.** This is where capture happens most invisibly, and it is the step most often skipped.

## Options

*Each option gets its own block. Options remain open for at least three weeks from the OPEN date. No new options are admitted after OPTIONS CLOSED — argument only.*

### (a) {name}

**Description.**

**Proposed by.**

**Evidence submitted.** *Cite with tier — see method §7. Evidence that could not have come out the other way is discounted, whatever tier it nominally sits in.*

**Assessment against each cited requirement.** *Requirement by requirement, met or not met, with reasoning. Not an overall verdict.*

| Requirement | Meets? | Reasoning |
|---|---|---|
| R— | | |

**Cost of adoption.** *What implementers have to do.*

**Cost of being wrong.** *See the note below — this field is not optional.*

### (b) {name}

*As above.*

## Evidence

*All evidence cited above, listed with its tier and its provenance. Where evidence was produced by a participant with an interest in the outcome, that is noted here — not to discount it, but because the reader should be able to see it.*

| Ref | Tier | Source | What it shows | Could it have gone the other way? |
|---|---|---|---|---|
| | | | | |

## Resolution

*The chosen option, and why — stated in terms of the requirements, not in terms of preference or of who proposed it.*

**Disposition:** resolved | provisional | referred to CFIT | deferred

*If **provisional**: what would firm it up, and when it is revisited.*
*If **referred**: the full record goes with it. State what the working group could not settle and why.*
*If **deferred**: the named owner, and the evidence test that would settle it.*

## Objections

*Sustained objections, named, with the response given. Recorded permanently whether or not they changed the outcome.*

| Objector | Objection | Requirement cited | Response | Sustained after response? |
|---|---|---|---|---|
| | | | | |

*A sustained objection is one holding that the decision violates an agreed requirement. That blocks, and escalates. Any other objection — preference, cost to the objector's own roadmap, unfamiliarity — is recorded here but does not block. Record it anyway: being permanently on the record as having predicted a problem is a real form of standing, and it lowers the temperature of disagreement considerably.*

## Consequences

**What this forecloses.**

**What this opens.** *Which PDRs become live.*

**What reversing it would cost.** *Be specific: schema change, migration, re-issuance, renegotiation, or nothing much.*

## Non-decisions

*What the framework deliberately does not prescribe here, and why leaving it open is safe. An explicit non-decision is a decision and belongs in the register — it is not the same as an omission.*

## Chair of record

**Framed and judged by:**

**Recusals:** *Which chair stood back, and the declared interest that prompted it. Record it whether or not anyone asked. A recusal visible only to those in the room is not a control. See method §11.1.*

---

## Notes on filling this in

**Cost of being wrong is the field that earns its keep.** Most of these decisions are cheap to reverse — a field name, a cardinality. A few are effectively permanent: the unit of assertion, the locus of trust, the subject model. The coalition should knowingly spend more time on the irreversible ones, and this field is what surfaces which those are. If it says "low" on a decision three others depend on, that is worth a second look before resolving.

**Assess options requirement by requirement, not overall.** "Option (b) is better" is not a resolution. "Option (b) meets R9 and R11 where (a) fails R11; (a) is stronger on R21, and the working group judged R11 the harder constraint" is. The second survives being read by someone who was not there.

**A decision with no recorded objections is not automatically a good sign.** It may mean the question was well-framed and genuinely uncontested. It may also mean nobody who would have objected was in the room. The segment-balance check in method §4 exists for this, and a resolution reached by a group drawn from one segment is procedurally weak whatever its merits.

**Fill the record as the decision runs, not afterwards.** A record written up after resolution reconstructs the reasoning that justified the outcome rather than the reasoning that produced it. The two are rarely identical, and only the first is any use to someone deciding whether to reopen it in two years.
