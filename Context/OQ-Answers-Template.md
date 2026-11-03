---
document_type: oq_answers
oq_answers_schema_version: "1.0"
project: "<Project Name>"
oq_blank_answer: unanswered | accept-recommendation
last_written_by_agent: YYYY-MM-DD
---

# Open Question Answer Sheet - <Project Name>

This sheet lists every open question of the project in one place so you can answer them without searching through the documents. The questions themselves stay in the Open Questions table of the document that owns them; that table remains the record. Rules: `Agent/01-Core/06-Human Interaction Protocol.md` Section 5.1.

## How To Answer

1. Write your answer in the **Decision** field of each question. You may pick an option (for example `B`), accept the recommendation, or write your own answer.
2. Use **Notes** for anything else: conditions, exceptions, or who to ask.
3. You may edit the question, the options, or the recommendation directly. The Agent compares the sheet with the version it wrote and treats your edits as your intent.
4. An empty **Decision** field means: `<unanswered: the question stays open / accept-recommendation: the recommendation is applied as written>` (setting `OQ Blank Answer` in `00-Project-State.md`).
5. When you are done, tell the Agent that the sheet is filled. The Agent summarizes how each answer will be applied, asks about unclear answers, applies the rest, and moves them to Applied Answers.

## Open Questions

### Blocking Stage `<S1 / S2 / S3 / S4 / S5 / S6 / Not blocking>`

#### OQ-GEN-001 `<Short topic>`

| Field | Content |
|---|---|
| Owning Document | `<BRS / BRD / StRS / PRD / SRS / Backlog / Release Plan / Project State>`, `<Section>` |
| Question | `<The question in plain language>` |
| Why It Is Asked | `<What is unclear and what it blocks>` |
| Affected Items | `<IDs and sections in every document that the answer changes>` |
| Options | (A) `<Option>` / (B) `<Option>` / (C) `<Option or "something else">` |
| Agent Recommendation | `<Option and reasoning, or "No recommendation; this is your decision.">` |
| **Decision** | |
| Notes | |

## Applied Answers

Answers that the Agent has applied to the documents. Kept as a short log; the full resolution is in the owning document.

| Date Applied | Question ID | Answer Applied | Resulting Decision Or Resolution |
|---|---|---|---|
| YYYY-MM-DD | OQ-GEN-001 | `<Short summary of the answer>` | `<DEC ID, or resolution summary>` |
