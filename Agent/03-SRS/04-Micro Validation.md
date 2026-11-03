# 04 - Micro Validation

## 1. Purpose

Micro Validation checks each individual requirement immediately after writing or modifying it. A requirement that fails a critical check must be rewritten before delivery.

## 2. Quality Characteristics

| ID | Characteristic | Check | Severity |
|---|---|---|---|
| C1 | Necessary | Does the requirement define a real need? | Critical |
| C2 | Unambiguous | Does it have one clear interpretation? | Critical |
| C3 | Complete | Is enough information present to implement and test it? | Critical |
| C4 | Atomic | Does it express one obligation? A requirement that applies a rule table with one acceptance criterion per rule is atomic (`03-Requirement Writing Rules.md` Section 5.1). | Critical |
| C5 | Verifiable | Can it be checked by test, analysis, inspection, or demonstration? | Critical |
| C6 | Feasible | Is it achievable within known constraints? | Warning |
| C7 | Correct | Does it match the source? | Critical |
| C8 | Conforming | Does it follow format, status, and ID rules? | Warning |
| C9 | Appropriate | Is it at the right abstraction level, with no design decision that a source does not mandate (`03-Requirement Writing Rules.md` Section 9)? | Warning |
| C10 | Measurement defined | If it uses a metric (percentage, rate, percentile, score, accuracy, precision, recall, F1, or another statistic), does it state the population, the ground truth, the matching rule, and the computation (`03-Requirement Writing Rules.md` Section 8.1)? | Critical |
| C11 | Rule content | If it is a business rule that needs a detail entry for its domain's rigor level, does it contain the minimum content for its category, or a complete deferral (`03-Requirement Writing Rules.md` Section 11)? | Critical |

## 3. EARS Syntax Checks

| Check | Rule | Severity |
|---|---|---|
| Uses mandatory keyword | Requirement body uses exactly one mandatory keyword (`shall`, or the localized keyword recorded in `00-Project-State.md`) for one obligation. | Critical |
| Has explicit subject | The system or actor performing the action is named. | Critical |
| Matches EARS | Uses a valid EARS pattern or simple valid variant. | Warning |
| No dangling clauses | Every `when`, `if`, `while`, or `where` clause is complete. | Critical |
| No excessive nesting | More than three clauses requires decomposition. | Warning |

## 4. Linguistic Checks

Check for:

- Forbidden vague terms from `03-Requirement Writing Rules.md`.
- Passive voice that hides responsibility.
- Vague quantifiers such as `some`, `many`, `usually`, or `normally`.
- Open-ended lists such as `etc.`.
- Undefined pronouns.
- Ambiguous timing.
- Double negatives.

## 5. Structural Checks

| ID | Check | Rule | Severity |
|---|---|---|---|
| S1 | ID | Uses `<TYPE>-<DOMAIN>-<NNN>`. | Critical |
| S2 | Status | Uses `DRAFT`, `REVIEW`, or `APPROVED` in the body; `DEPRECATED` items appear only in the Deprecated Items register. Open questions use `OPEN` or `CLOSED`. | Critical |
| S3 | Source | Has a backward source trace. | Critical |
| S4 | Acceptance criteria | Functional requirements have at least one criterion. | Critical |
| S5 | Priority | Has MoSCoW priority. | Warning |
| S6 | Rationale | `Strict` domain: explains why the requirement exists. Other levels: present only when it has content. | Warning |
| S7 | Dependencies | `Strict` domain: lists related IDs or `None`. Other levels: present only when it has content. | Warning |
| S8 | Verification method | Names Test, Analysis, Inspection, or Demonstration. | Warning |
| S9 | Parent | Names an upstream STR, F, US, or UC ID when a StRS or PRD exists, or states `None` with reason. | Warning |
| S10 | Unconsented assumption | Contains no `[ASSUMPTION]` that the Assumption Policy does not permit. | Critical |
| S11 | Rigor form | Uses the form required by its domain's rigor level: a row of the domain requirement table for `Light`, a block for `Standard` and `Strict` (`02-SRS Output Contract.md` Section 2.2.3). | Warning |

## 6. Failure Handling

For each failed check:

1. Add `[REVIEW]` when human attention is needed, and ask the user about it in the same turn when the fix depends on information the Agent does not have.
2. Rewrite critical failures before delivery.
3. Keep warnings visible in notes or validation reports.
4. Do not convert any item to `APPROVED`.

Example:

```markdown
> [REVIEW] Micro Validation: C4 Atomicity failed. This statement includes validation and notification; split into two requirements.
```

## 7. Cross-References

- Requirement writing rules: `Agent/03-SRS/03-Requirement Writing Rules.md`
- Output rules: `Agent/01-Core/05-Output Rules.md`
- Macro validation: `Agent/03-SRS/05-Macro Validation.md`
