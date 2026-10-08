# 06 - Human Interaction Protocol

## 1. Purpose

This document defines when, why, and how the Agent must pause, ask, and defer a decision to the human user.

The governing principle is **Ask-When-Uncertain**: whenever the Agent is not sure, it asks instead of guessing. This follows ISO/IEC/IEEE 29148, under which requirements originate from stakeholders and are validated by them, and IIBA BABOK v3, under which elicitation is iterative and confirmed with stakeholders. Visible questions are safer than invented certainty.

The protocol has two levels:

- **Clarification Question** (Section 5): a lightweight question batch. The Agent may continue unrelated work in the same turn.
- **Agent Halt** (Section 4): a blocking escalation. The Agent stops work on the affected scope until the human decides.

## 2. Mandatory Halt Conditions

The Agent must halt in these situations.

### 2.1 Same-Priority Source Conflict

**Trigger**: Two or more sources at the same priority level contradict each other.

**Required behavior**:

1. Insert `[CONFLICT]` at the affected output location.
2. Document both positions with exact source references.
3. Halt and ask the human to choose or provide a combined resolution.

### 2.2 Fatal Data Gap

**Trigger**: A mandatory input for the current stage from `01-Input Contract.md` is absent.

**Required behavior**:

1. Do not generate content for the blocked stage.
2. Enter Discovery Mode, or produce the Fatal Gap Questionnaire if the user declines Discovery.
3. Halt the blocked stage until the human provides the missing context.

### 2.3 High TBD Density

**Trigger**: More than 30 percent of the meaningful data points in a section would require `[TBD]`.

**Required behavior**:

1. Switch to Audit / Validation Mode, or back to Discovery Mode during Stages S0-S2.
2. Produce a Gap Report with the questions needed to close the gaps.
3. Halt until the human provides clarification.

### 2.4 Approved Content Change

**Trigger**: The Agent is about to modify content with `APPROVED` status.

**Required behavior**:

1. Halt before editing.
2. Present the proposed change and impact.
3. Require explicit human authorization or an approved change request, as defined for the profile in `08-Project Profiles.md`.

### 2.5 Deletion Or Deprecation

**Trigger**: The Agent is about to delete, remove, or deprecate existing content.

**Required behavior**:

1. Do not delete approved or historical requirements.
2. Use `DEPRECATED` only after human instruction or an approved change request.
3. Retain audit annotations.

### 2.6 Scope Ambiguity

**Trigger**: The user instruction can reasonably affect multiple sections, modules, documents, or projects.

**Required behavior**:

1. Identify the ambiguous scope.
2. Present specific options.
3. Halt until the user confirms the intended scope.

### 2.7 Unconfirmed Project Settings

**Trigger**: The Project Profile, Tier, Output Language, Approver, Assumption Policy, Document Set, primary document of a layer, PRD scope or variant, Delivery options, or Output Location is unknown, unclear, or contradicted by new information.

**Required behavior**:

1. Do not infer the setting.
2. Ask using the Clarification Question format, with options and a recommendation with reasoning.
3. Do not create profile-dependent or tier-dependent content until the user answers.

### 2.8 Stage Gate

**Trigger**: The exit conditions of a pipeline stage are met.

**Required behavior**:

1. Summarize what was produced, open questions, and check results.
2. Ask the approver defined for the profile to pass the gate, request changes, or stay in the stage.
3. Do not start the next stage until the gate decision is recorded.

## 3. Uncertainty Triggers (Ask Before Acting)

The Agent must ask a Clarification Question when any of these is true:

| Uncertainty | Example |
|---|---|
| An input or requirement has two or more reasonable interpretations. | "Users can share reports" - share with whom, and how? |
| The Agent does not know what to do next or which run mode applies. | The user says "continue" but two stages have open work. |
| The project size, profile, or tier is unclear. | A "personal" project mentions paying customers. |
| A term is undefined, or used with different meanings. | "Client" and "Customer" appear to mean the same thing. |
| It is unclear whether an item is in scope. | A feature appears only in a competitor list. |
| A feature seems implied by the domain but is not stated. | A checkout without a stated cart step. |
| A quality target is stated without numbers. | "The app must be fast." |
| The Agent's confidence in a conclusion is low. | A rule extracted from informal chat notes. |
| A decision has legal, privacy, security, cost, or business impact. | Whether a data protection law applies. |
| A date, estimate, price, capacity, or release cadence is needed. | "When is the MVP due?" - never invent it. |
| It is unclear which release or backlog position an item belongs to. | A `Should` feature with no stated release. |
| Two documents in one layer could both own an item. | A goal stated while writing a secondary BRD. |
| The output folder is missing, already contains files, or is inside the kit. | The user names `Context/` as the save location. |

## 4. Agent Halt Format

When halting, use this structure:

```markdown
---
### Agent Halt - [HALT TYPE]

**Context**: [What the Agent was doing]
**Issue**: [Clear statement of the problem]

**Option A**: [Resolution option]
**Option B**: [Resolution option]
**Option C**: [Optional deferral or combined option]

**Agent Recommendation**: [Recommendation with reasoning, or "No recommendation; this is a business decision."]

**Impact If Unresolved**: [Blocked sections, requirements, or risks]
---
```

## 5. Clarification Question Format

Use this format for uncertainty triggers, Discovery interviews, and TBD follow-ups. Group **3 to 5 questions per turn**, most blocking first, written in the Output Language.

```markdown
### Questions For You

**Q1 ([Question ID or OQ ID]) - [Short topic]**
[The question in plain language.]
- Why I am asking: [What is unclear and what it affects]
- Options: (A) [option] / (B) [option] / (C) [option or "something else"]
- My recommendation: [Option and reason, or "No recommendation; this is your decision."]

**Q2 ...**
```

Rules:

1. Ask only what is needed for the current stage or task.
2. Do not ask for information that a source already answers clearly.
3. Always allow a free answer and an "I don't know" answer. For "I don't know", offer to leave `[TBD]`, propose an assumption for confirmation, or skip if optional for the profile.
4. Record every unanswered question as an Open Question (`OQ-<DOMAIN>-<NNN>`) in the active document and in `00-Project-State.md`.
5. Continue with parts of the work that do not depend on the unanswered questions, unless a Halt condition applies.

## 6. Post-Decision Protocol

After the human provides a decision or answer:

1. Record it in the Decisions table, the relevant change request log, or the target document with a P1 source reference.
2. Apply it only to affected sections.
3. Update markers from `[TBD]` or `[CONFLICT]` to resolved annotations where appropriate, and close the matching Open Question.
4. Set affected Agent-edited items to `REVIEW` unless the approver explicitly instructs the Agent to record `APPROVED`.
5. Update `00-Project-State.md` (current stage, next step, open questions).

## 7. Approval Rule

The Agent may record `APPROVED` only when the approver defined for the profile explicitly approves and instructs the Agent to record that approval (`08-Project Profiles.md` Section 5). A statement such as "looks good" may be treated as review feedback, but not as formal approval unless the user clearly asks to approve or mark approved. If it is unclear whether the user intends formal approval, ask.

## 8. Permitted Autonomous Decisions

The Agent may proceed without asking first only for these low-risk actions:

| Situation | Agent Action |
|---|---|
| Missing detail inside otherwise clear content | Insert `[TBD: description]`, create an Open Question, and ask it at the end of the same turn. |
| Minor inference when the Assumption Policy is `allow-minor` | Insert `[ASSUMPTION]` with reasoning and list it for confirmation in the same turn. |
| Cross-priority conflict | Apply the higher-priority source, annotate `[CONFLICT]`, and report it to the user. |
| Formatting correction | Correct format without changing meaning. |
| Validation report generation | Generate a report in `<OutputLocation>/Reports/` without modifying the documents. |

## 9. Decision Flow

```text
Agent is about to decide:
  Covered by one clear P1-P4 source?            -> Proceed.
  Project setting (profile, tier, language, document set, PRD variant, output location) unknown? -> Ask (2.7).
  Needs a date, estimate, price, or capacity?   -> Ask; never invent.
  More than one reasonable interpretation?      -> Ask (Section 3).
  Not sure what to do next?                     -> Ask; recommend an option.
  Same-level source conflict?                   -> Halt (2.1).
  Missing mandatory input?                      -> Discovery Mode or Halt (2.2).
  Minor missing detail?                         -> Mark TBD, create OQ, ask in the same turn.
  Wants to assume something?                    -> Follow Assumption Policy; ask when policy is "ask".
  Would modify APPROVED content?                -> Halt (2.4).
  Would set APPROVED status?                    -> Halt unless the approver explicitly instructed approval recording.
  Stage exit conditions met?                    -> Ask for the gate decision (2.8).
  Ambiguous user scope?                         -> Halt (2.6).
```

## 10. Cross-References

- Source priority: `04-Source Priority.md`
- Input contract: `01-Input Contract.md`
- Run modes: `02-Run Modes.md`
- Output rules: `05-Output Rules.md`
- Project profiles: `08-Project Profiles.md`
- Question bank: `Agent/02-Discovery/02-Elicitation Question Bank.md`
