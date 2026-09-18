# Building the Trust Framework by Consensus

**How the framework is decided.** The method in short; the [charter](charter.md) carries it in full.

---

## Where this sits

CFIT's paper *From Roadmap to Real-World Evidence: CFIT and the DPMSG in Phase 2 of Open Property* (September 2026) sets the relationships this record operates within.

The Digital Property Market Steering Group is the primary delivery vehicle for the government's Open Property roadmap. It owns the decisions on policy, regulation, governance and scheme design, including whether the scheme is mandated or voluntary, and it sets direction for CFIT's testing. CFIT complements it: convening a time-bound, neutral coalition, aligning each workstream to a DPMSG delivery group, testing what works in live transactions, and sharing the evidence with the DPMSG working groups and government through a bilateral reporting channel. CFIT is not a standards body and will not set or own a new property standard; the existing standards remain with their owners, and the conformance and governance work of the DPMSG sits with its own Trust and Interoperability Group.

The question CFIT has been asked to evidence is put as three candidate models: **a common standard, a common conformance framework, or a federated model**. The evidence is to show either how existing and emerging standards can interoperate or, where it supports it, the case for the market to converge on a single approach. CFIT will not prejudge which model prevails, and neither does anything here.

Within that, the Trust, Legal & Policy workstream's remit is to define and test the minimum legal, policy and trust requirements a conformance framework must meet, and to generate the evidence for the decisions the DPMSG and government own. This record is the method for doing that. Its requirements are the minimum a conformance framework must meet; its decision records are the evidence of what those requirements entail; and its output is addressed to the DPMSG rather than to the market.

## The problem the method solves

A trust framework has to be believed before it can be used, and one arrived at privately reads as a vendor's product. But a blank page burns the window rediscovering solved problems, and the Clarify phase is five Trust, Legal & Policy sessions across eleven weeks.

The method resolves that tension with a single rule:

> **The coalition agrees the requirements. The requirements decide the architecture. Existing work enters as evidence — never as the starting assumption.**

## What the framework is for

Layer 0 opens with one sentence, and ratifying it is the most consequential act of the Clarify phase:

> A trust framework for property data in England and Wales that enables any fact about a property, its title, or the parties to a transaction to be established once, and thereafter relied upon by any authorised party, in any transaction, on any platform — with its origin and integrity verifiable independently of whoever transmits it.

The phrase carrying the weight is **"independently of whoever transmits it."** Adopt it and a large part of the architecture follows; several otherwise-reasonable designs are ruled out by it alone.

Stating an ambition of that size is the easy part. Holding it through ninety-five detailed decisions taken over months, mostly by people arguing in good faith about technical particulars, is the hard part — and it is what the requirement layer exists to do. Each requirement is written so that a design either meets it or does not, which is what keeps the ambition enforceable once the arguments have become specific and the original sentence is months old.

## The four layers

Nothing at a lower layer opens until its parent resolves.

| Phase | Layer | Output |
|---|---|---|
| **Clarify** — to 22 Oct | **0 · Requirements** | Testable properties the framework must have, ratified individually |
| | **1 · Root decisions** | One root question per strand (10); the decision map published |
| **Develop** | **2 · Decisions** | The choices within each strand, as Decision Records |
| **Implement** | **3 · Specification and conformance** | Normative text traceable to Layer 2, the conformance suite that tests it, and interop results across independent implementations |

The Develop-phase programme that Clarify releases **is** the Layer 2 decision schedule. That gives the phase a checkable deliverable rather than an open-ended one, and lets the Develop duration be set against a known quantity of work rather than a guess.

## How a decision is taken

Rough consensus rather than voting. Objections are recorded permanently and named, whether or not they change the outcome. Evidence is tiered, with the tiers published before anyone knows who can satisfy them, and results that could not have gone the other way are discounted. Every decision leaves a record: the question, the requirements it was tested against, the options with their evidence, the resolution, the objections, and what reversing it would cost.

Four closing dispositions — resolved, provisional, referred on a full record, or deferred against a stated evidence test. Where argument cannot settle a question, it is built against criteria pre-registered by the working group before the build runs.

**The method recommends; CFIT decides.** Nothing here displaces that. What it does is ensure that when that power is exercised, it is exercised on a documented record — which is defensible on its merits rather than by reference to who made the decision, and is the kind of thing secondary legislation can refer to.

## What the record is evidence of

CFIT's three candidate models are three answers to one question: how much must be held in common. A common standard holds almost everything in common. A common conformance framework holds the requirements in common and permits divergence beneath them. A federated model holds little in common and bridges what exists. Put as one choice, the question has no test, and the answer differs by layer: a vocabulary can be plural with published mappings while the unit of assertion is single.

The record therefore answers it decision by decision. Each resolved decision states whether it binds every implementer, enumerates alternatives that are each conformance-tested, or is deliberately left to implementers, and the register collates that across the tree. A tree in which nearly everything is normative is the evidence for a common standard; one in which nearly everything is a profile or a non-decision is the evidence for a federated model; and the reasoning at each decision is the evidence for why. The distribution is the answer, and the requirements are written so that it can come out any of the three ways.

That is what makes the record usable by the DPMSG. For each decision it receives the options considered, the evidence weighed against ratified requirements, the objections sustained, and what had to be held in common for the requirements to hold. It is evidence for decisions the DPMSG and government own, in the form those decisions need.

## Structure tabled, content open

The requirements and the decision map were tabled as drafts, expressly so the coalition could take them apart. Eleven weeks and five sessions would not produce a falsifiable requirement set and a ten-strand decision map by facilitation, and the attempt would consume the calendar the decisions themselves need.

The answers are a different matter. No participant's prior work enters as a baseline. It enters decision by decision, with its weaknesses stated, as evidence weighed against ratified requirements like anything else. If the coalition ratifies requirements that some existing implementation fails, that implementation loses. That is what makes the output endorsable rather than merely agreed, and it is the condition the whole method rests on.

## Reading the record

| | |
|---|---|
| [Charter](charter.md) | The method in full: decision lifecycle, consensus rule, evidence hierarchy, chairing and recusal |
| [Requirements](requirements.md) | Layer 0 — what the framework must do, each with a test |
| [Decision map](decision-map.md) | Every decision the framework requires, with dependencies and sizing |
| [Options](options.md) | Candidate options for the decisions that cannot be settled in a session |
| [Decision register](decisions.html) | Each decision as it opens, with its record |

The map is published before the decisions are taken, so nothing arrives by surprise and the work can be sized honestly. An empty register is the correct state before the first substantive session.
