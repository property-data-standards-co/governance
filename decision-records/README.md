# Decision records

One file per decision, named `PDR-{strand}-{n}.md`. Copy `TEMPLATE.md` to open one.

A record is created when the decision is **drafted** — question framed, requirement
trace attached, published — not when it is resolved. Publishing the question before
the argument starts is the point: it means nothing arrives by surprise, and the
framing can be challenged before it has shaped anyone's answer.

## Status

| | |
|---|---|
| `drafted` | Question framed and published. Not yet open for options. |
| `open` | Call for options and evidence. Minimum three weeks. |
| `resolved` | Working group has reached rough consensus. |
| `ratified` | Plenary sign-off. Root decisions only. |
| `superseded` | Reopened and replaced. The old record stays, with a pointer. |

Status lives in the frontmatter and drives the generated register. Nothing else
maintains an index, so the frontmatter has to be right.

## Filling one in

The notes at the end of `TEMPLATE.md` cover the fields that get skipped in
practice. The short version:

- **Fill it as the decision runs**, not afterwards. A record written up after
  resolution reconstructs the reasoning that justified the outcome rather than
  the reasoning that produced it.
- **Assess options requirement by requirement**, not overall.
- **Record objections whether or not they changed anything.** A decision with no
  recorded objections may mean the question was uncontested — or that nobody who
  would have objected was in the room.
- **Record the chair of record and any recusal**, whether or not anyone asked.
  See charter §11.1.
