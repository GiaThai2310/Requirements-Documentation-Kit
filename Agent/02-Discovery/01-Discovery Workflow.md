# 01 - Discovery Workflow

## 1. Purpose

This document defines how the Agent turns a raw idea into approved inputs for the SRS and, optionally, the Delivery documents. It covers Stages S0 to S2 of the kit pipeline and produces the upstream documents in the project's **Document Set** (`Agent/01-Core/09-Document Set And Output Location.md`):

| Layer | Document | Answers |
|---|---|---|
| Business | **BRS** (ISO/IEC/IEEE 29148:2018) and/or **BRD** (IIBA BABOK v3, industry practice) | Why the organization or person needs the product, business goals, environment, success criteria |
| Stakeholder / Product | **StRS** (ISO/IEC/IEEE 29148:2018) and/or **PRD** (product management practice, Lean or Standard) | Who the users are, what they need, which product features and stories satisfy them |

The SRS (Stage S3 onward) then derives software requirements from these documents, which gives the vertical trace `BG -> STR or F/US -> FR/NFR`.

Elicitation follows IIBA BABOK v3 elicitation techniques (Interviews, Brainstorming, Document Analysis) adapted to an Agent-to-human conversation.

## 2. Kit Pipeline

```text
S0 Intake -> S1 Business -> S2 Stakeholder & Product -> S3 SRS Outline -> S4 SRS Incremental -> S5 Validation & Baseline -> S6 Delivery (optional)
```

| Stage | Run Mode | Output (inside `<OutputLocation>/`) | Exit Gate |
|---|---|---|---|
| S0 Intake | Discovery | `00-Project-State.md` | Idea statement captured; Profile, Tier, Output Language, Approver, Assumption Policy, Document Set, and Output Location confirmed by the user |
| S1 Business | Discovery | `01-BRS.md` and/or `01-BRD.md` | All sections required for the depth exist; problem statement, business goals, and success criteria are `REVIEW` or `APPROVED`; BRS or BRD checks reported |
| S2 Stakeholder & Product | Discovery | `02-StRS.md` and/or `02-PRD.md` | All sections required for the depth or variant exist; StRS or PRD checks reported |
| S3 SRS Outline | Draft / Outline | `03-SRS.md` skeleton | User confirms structure |
| S4 SRS Incremental | Incremental / Full Generation | `03-SRS.md` | Each section `REVIEW` |
| S5 Validation & Baseline | Audit / Validation | `Reports/Validation-Report-YYYY-MM-DD.md` | No open Critical findings; approver baselines the SRS |
| S6 Delivery (optional) | Delivery | `04-Backlog.md`, `04-Release-Plan.md` | Delivery checks reported; approver confirms |

Stages S3 to S5 are governed by `Agent/03-SRS/`; Stage S6 by `Agent/04-Delivery/`. A stage whose documents are not in the Document Set is recorded as `Skipped (not in Document Set)`.

A gate is passed only when the user confirms it. For the `PERSONAL` profile, an explicit "continue" or "next stage" instruction is enough. For `TEAM` and `SME`, the named approver must confirm. The Agent records each gate decision in `00-Project-State.md`.

## 3. Entry Into Discovery

Enter Discovery Mode when any of these is true:

- The user asks to start a new project, shares an idea, or asks to write a BRS, BRD, StRS, or PRD.
- No `00-Project-State.md` exists for the project.
- An SRS is requested but the mandatory SRS inputs from `Agent/01-Core/01-Input Contract.md` are missing.

If the user explicitly wants to skip Discovery and has enough input for an SRS, ask once whether to skip S1 and S2. If the user confirms, record the decision as `DEC-GEN-NNN` in `00-Project-State.md` and continue with Stage S3. The SRS then traces directly to the source documents.

## 4. Stage S0 - Intake

1. Read `Context/Context.md` if it exists. Treat it as P3 source material unless the user marks it as approved.
2. Summarize the idea in one paragraph and ask the user to confirm the summary.
3. Ask the S0 questions from `02-Elicitation Question Bank.md` that the context does not already answer, in batches of 3 to 5:
   1. Project name, Profile, Tier, Output Language, Approver, Assumption Policy.
   2. **Document Set**: explain the layers and recommend a set for the profile (`09-Document Set And Output Location.md` Sections 3-4). If a layer has two documents, ask which is primary.
   3. **PRD questions** when a PRD is in the set: scope first, then whether the user wants user stories, a release plan, or a backlog (`05-PRD Output Contract.md` Section 2).
   4. **Output Location**: ask where to save the documents. If the user gives none, propose `ProjectDocuments/<ProjectName>/` and confirm the resolved path (`09-Document Set And Output Location.md` Section 7).
4. Do not guess any S0 field. If an answer is unclear, ask again with concrete options.
5. After the Output Location is confirmed, create `<OutputLocation>/00-Project-State.md` from `Context/Project-State-Template.md` and record all answers, including the Document Register rows for the chosen documents.
6. Set Stage S0 to `REVIEW` and ask the user to confirm the gate.

## 5. Stage S1 - Business Layer (BRS And/Or BRD)

1. If both BRS and BRD are in the set, write the primary document first; the secondary one follows the ownership rules in `09-Document Set And Output Location.md` Section 5.2.
2. Create each document from its template (`Context/BRS-Template.md`, `Context/BRD-Template.md`), keeping only the sections required or conditional for the depth (`03-BRS-StRS Output Contract.md`, `04-BRD Output Contract.md`). Mark omitted sections with the Skipped Section Protocol.
3. Run the interview loop (Section 7) over the `Q-BRS` questions, plus the `Q-BRD` questions when a BRD is in the set.
4. Write each answer into the owning document with a source trace.
5. Assign IDs: `BG` business goals, `SC` success criteria, `BP` business processes, `BR` business rules and policies, `STK` stakeholders, `OPS` preliminary operational scenarios, `CON` constraints, and `TRN` transition requirements (BRD).
6. Run the BRS checks (`03-BRS-StRS Output Contract.md` Section 8) and/or BRD checks (`04-BRD Output Contract.md` Section 6).
7. Set completed sections to `REVIEW`, update `00-Project-State.md`, and ask for the gate decision.

If the Document Set has no business-layer document, record S1 as skipped. The `BG` and `SC` items are then owned by the PRD (or the SRS Section 4 when no PRD exists).

## 6. Stage S2 - Stakeholder And Product Layer (StRS And/Or PRD)

1. If both StRS and PRD are in the set, write the primary document first; the secondary one references its IDs.
2. Reuse approved business-layer content by reference (IDs). Do not restate it.
3. **StRS**: create `02-StRS.md` from `Context/StRS-Template.md`; run the `Q-STRS` questions; write stakeholder requirements (`STR`) and operational scenarios (`OPS`) using `03-BRS-StRS Output Contract.md`; each `STR` traces to at least one `BG` or records why it does not.
4. **PRD**: create `02-PRD.md` from `Context/PRD-Template.md` for the recorded variant (Lean or Standard); run the `Q-PRD` questions; write goals, non-goals, personas, scenarios, features (`F`), and, for Standard, user stories (`US`), release criteria (`RC`), and milestones (`MS`) using `05-PRD Output Contract.md`. Never invent milestone dates.
5. Run the StRS checks (`03-BRS-StRS Output Contract.md` Section 9) and/or PRD checks (`05-PRD Output Contract.md` Section 6).
6. Set completed sections to `REVIEW`, update `00-Project-State.md`, and ask for the gate decision.
7. After the S2 gate passes, propose Stage S3 (SRS Outline Mode) if an SRS is in the set; otherwise propose Stage S6 if Delivery documents are in the set; otherwise ask whether the project is complete.

## 7. Interview Loop

The interview loop is the step-by-step core of Discovery.

1. Select the next unanswered questions for the current stage from `02-Elicitation Question Bank.md`, filtered by profile and by the documents in the Document Set.
2. Skip questions already answered by a source. Re-ask a question only when its source answer is ambiguous.
3. Ask **3 to 5 questions per turn**, ordered from most to least blocking. Use the Clarification Question format from `Agent/01-Core/06-Human Interaction Protocol.md` Section 5.
4. Where helpful, offer concrete options and a recommendation, but always allow a free answer.
5. After the user answers:
   1. Record each answer in the owning document with `Source: Discovery Interview, session YYYY-MM-DD, Q-<ID>`.
   2. Mark anything still unknown with `[TBD: description]` and create a matching `OQ-GEN-NNN` entry.
   3. If an answer raises new ambiguity, add follow-up questions to the next batch.
6. If the user answers "I don't know", offer: (A) leave as `[TBD]` and continue, (B) let the Agent propose an `[ASSUMPTION]` for confirmation, or (C) skip the item if it is optional for the profile.
7. Repeat until the stage exit gate conditions are met, then ask for the gate decision.
8. Keep `00-Project-State.md` updated after every turn: current stage, answered question IDs, open questions, and the next step.

## 8. Recording Sources

| Situation | Source Reference | Priority |
|---|---|---|
| User answer in an interview | `Discovery Interview, session YYYY-MM-DD, Q-BRS-001` | P1 |
| Content from `Context/Context.md` | `Context.md, <heading>` | P3 unless marked approved |
| Approved BRS or BRD used downstream | `BRS v<version>, <ID>` or `BRD v<version>, <ID>` | P2 |
| Approved StRS or PRD used downstream | `StRS v<version>, <ID>` or `PRD v<version>, <ID>` | P2 |

## 9. Resuming Work

At the start of every session, the Agent locates the project's `00-Project-State.md` (`Agent/01-Core/09-Document Set And Output Location.md` Section 7.3; ask for the path if it cannot be found), reads it first, and:

1. States the current stage and the next step in one or two sentences.
2. Lists open questions that block the current stage.
3. Asks whether to continue from the next step or do something else, unless the user's instruction already makes this clear.

## 10. Cross-References

- Question bank: `Agent/02-Discovery/02-Elicitation Question Bank.md`
- BRS and StRS tailoring and checks: `Agent/02-Discovery/03-BRS-StRS Output Contract.md`
- BRD rules: `Agent/02-Discovery/04-BRD Output Contract.md`
- PRD rules: `Agent/02-Discovery/05-PRD Output Contract.md`
- Document set and output location: `Agent/01-Core/09-Document Set And Output Location.md`
- Project profiles: `Agent/01-Core/08-Project Profiles.md`
- Human interaction: `Agent/01-Core/06-Human Interaction Protocol.md`
- Run modes: `Agent/01-Core/02-Run Modes.md`
- Templates: `Context/BRS-Template.md`, `Context/BRD-Template.md`, `Context/StRS-Template.md`, `Context/PRD-Template.md`, `Context/Project-State-Template.md`
