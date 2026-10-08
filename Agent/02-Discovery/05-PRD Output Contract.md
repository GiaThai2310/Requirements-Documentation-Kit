# 05 - PRD Output Contract

## 1. Purpose

This document defines how the Agent writes a **Product Requirements Document (PRD)**: how to choose between the Lean and Standard variants, which sections each variant requires, how to write features and user stories, ownership rules when a StRS also exists, and the checks before the product-layer gate.

`Context/PRD-Template.md` defines structure and formatting. This file defines variant selection, tailoring, and quality rules.

### 1.1 Basis

- **No ISO or IEEE standard defines a PRD.** The PRD is a product management practice. The kit grounds it in:
  - Widely published product management guidance: SVPG (Marty Cagan): purpose, features, release criteria, rough timing, and a focus on *what* rather than *how*; Aha!: overview, objective, context, assumptions, scope, requirements, performance metrics, open questions; Atlassian: goals, assumptions, user stories, user interaction and design, questions, what is not being done.
  - ISO/IEC/IEEE 15289 generic content for a specification (identification, scope, references, change history, approval).
  - ISO/IEC/IEEE 29148:2018 requirement quality characteristics for features and stories.
  - ISO/IEC 25010:2023 product quality characteristics for product-level quality requirements.
  - ISO 9241-210 human-centred design concepts (users, tasks, context of use) for personas and scenarios.
  - IIBA BABOK v3 User Stories technique; the "As a / I want / so that" story format; Given/When/Then acceptance criteria; the INVEST checklist (Independent, Negotiable, Valuable, Estimable, Small, Testable) as industry practice.
- The Agent must not claim that a PRD conforms to an ISO standard.

### 1.2 PRD Versus StRS

| Aspect | StRS (ISO/IEC/IEEE 29148) | PRD (product management practice) |
|---|---|---|
| Focus | Stakeholder needs and operational concepts | The product to build: goals, non-goals, features, stories, release criteria |
| Unique content | Detailed life-cycle concepts (acquisition, deployment, support, retirement), full operational scenarios | Non-goals, feature list, user stories, release criteria, milestones |

## 2. Variant Selection

Ask in this order. Do not skip a step and do not decide for the user.

1. **Scope**: ask what the PRD covers: the whole product, one release, or one feature or epic. Record the answer in PRD Section 1 and in `00-Project-State.md` (`PRD Scope`).
2. **Detail and delivery needs**: ask whether the user wants any of:
   - user stories with acceptance criteria;
   - a release plan;
   - a product backlog.
3. **Decide the variant from the answers**:
   - If the user wants **any** of the three → **Standard PRD**.
   - If the user wants **none** of them → **Lean PRD**.
   - If the user is unsure, explain the difference in two sentences and ask again. Do not choose.
4. **Delivery documents**: if the user wants a backlog or a release plan, add `04-Backlog.md` or `04-Release-Plan.md` to the Document Register (Stage S6, `Agent/04-Delivery/01-Delivery Workflow.md`).
5. Record `PRD Variant` (Lean or Standard) and `Delivery Options` (Backlog yes/no, Release Plan yes/no) in `00-Project-State.md`.

The user may change the variant later. Switching from Lean to Standard adds sections; switching from Standard to Lean requires confirmation before content is deprecated.

## 3. PRD Section Requirements

Legend: `R` required, `C` conditional, `O` optional, `X` skip unless requested.

| PRD Section | Lean | Standard |
|---|:-:|:-:|
| 0. Document Control And Change History | O | R |
| 1. Overview | R | R |
| 2. Problem Statement | R | R |
| 3. Goals And Success Metrics | R | R |
| 4. Non-Goals And Out Of Scope | R | R |
| 5. Target Users And Personas | R | R |
| 6. Key Scenarios | R | R |
| 7.1 Feature List | R | R |
| 7.2 Feature Details | O | R |
| 8. User Stories | X | R |
| 9. Product Quality Requirements | C | R |
| 10. UX And Design References | O | C |
| 11. Assumptions, Constraints And Dependencies | R | R |
| 12. Release Criteria | X | R |
| 13. Milestones | X | C |
| 14. Risks, Open Questions And Decisions | R | R |
| 15. Approval | O | C |

- Section 9 is `R` for Lean when users stated explicit quality expectations.
- Section 13 is `R` for Standard when the user wants a release plan; milestone dates come only from the user.
- For the `SME` profile, Section 15 is `R` in both variants.

Omitted sections use the Skipped Section Protocol (`Agent/03-SRS/02-SRS Output Contract.md` Section 7).

## 4. Ownership Rules

Follow `Agent/01-Core/09-Document Set And Output Location.md` Section 5.

| Situation | PRD Behavior |
|---|---|
| No business-layer document | The PRD owns `BG` and `SC` in Section 3. |
| BRS or BRD exists | Section 2 and Section 3 summarize and reference `BG` and `SC` IDs; they are not redefined. |
| No StRS | The PRD owns `UCL` (personas) in Section 5, key `STR` needs, and `OPS` scenarios in Section 6. |
| StRS exists and is primary | Sections 5 and 6 reference `UCL`, `STR`, and `OPS` IDs; the PRD adds features, stories, release criteria, and milestones. |
| PRD is primary and a StRS also exists | The PRD owns `UCL`, `STR`, `OPS`; the StRS references them and adds only ISO-specific life-cycle sections. |
| SRS exists or will exist | The SRS reuses PRD `F` IDs and refines PRD quality requirements into measurable `NFR` items. |

## 5. Writing Rules

### 5.1 Goals And Non-Goals

- Every goal has a measurable success metric with a target and an evaluation time, or an Open Question asking for them.
- Non-goals state explicitly what the product or release will not do. They prevent scope creep and are as important as goals.

### 5.2 Features

```markdown
| Feature ID | Feature | Description | Personas | Goals | Needs (STR) | Priority | Target Release | Status |
|---|---|---|---|---|---|---|---|---|
| F-BOOK-001 | Online booking | Customers book an appointment without calling | UCL-GEN-001 | BG-GEN-001 | STR-BOOK-001 | Must | [RLS ID or TBD] | DRAFT |
```

- A feature describes *what* the product enables, not *how* it is implemented.
- Priority uses MoSCoW. Target Release is left `[TBD]` unless the user states it.

### 5.3 User Stories (Standard Only)

Statement form:

```text
As a <persona>, I want <capability>, so that <benefit>.
```

Required attributes:

```markdown
#### US-DOMAIN-NNN Story Title

- **Story**: As a <persona>, I want <capability>, so that <benefit>.
- **Persona**: [UCL ID]
- **Feature**: [F ID]
- **Need**: [STR ID or None]
- **Priority**: Must / Should / Could / Won't
- **Status**: DRAFT | REVIEW | APPROVED | DEPRECATED
- **Source**: [Source reference]
- **Acceptance Criteria**:
  1. Given [context], when [action], then [observable result].
- **Notes**: [Markers or None]
```

Rules:

1. Each story has at least one acceptance criterion in Given/When/Then form.
2. Check every story against INVEST. A story that is not Small or not Testable is split or marked `[REVIEW]` with a question to the user.
3. Estimates do not belong in the PRD. They belong in the Backlog, and only when the user provides or confirms them.
4. A story is not a substitute for SRS requirements. When an SRS exists, each `Must` story traces to at least one `FR`.

For a non-English Output Language, translate the story template once, record it in the glossary, and use it consistently (Vietnamese: `Là <persona>, tôi muốn <khả năng>, để <lợi ích>.`). Keep the Given/When/Then keywords consistent as defined in the glossary.

### 5.4 Product Quality Requirements (Section 9)

- Express quality expectations at product level and classify them by ISO/IEC 25010:2023 characteristic.
- Use measurable targets when the user can provide them; otherwise write the stakeholder's words and add a `[TBD]` with an Open Question.
- When no StRS exists, record them as `STR-QUAL-NNN`. When an SRS exists, the SRS refines them into `NFR` items.

### 5.5 Release Criteria (Standard Only)

Release criteria (`RC`) are measurable conditions that must be true before a release ships, for example: all `Must` features accepted; quality targets met; known critical defects resolved; support and onboarding ready.

```markdown
| Criterion ID | Criterion | Measure | Category | Source | Status |
|---|---|---|---|---|---|
| RC-GEN-001 | All Must features pass acceptance | 100 percent of Must stories accepted | Functionality | [Source] | DRAFT |
```

### 5.6 Milestones

Milestones (`MS`) list a name, a date, and the deliverable. **The Agent must not invent dates.** Ask the user. If the user does not know yet, keep `[TBD]` with an Open Question.

## 6. PRD Checks (Before The Product-Layer Gate)

| ID | Check | Severity |
|---|---|---|
| PD1 | The problem statement describes the user or business problem without prescribing a solution. | Critical |
| PD2 | Every goal has a measurable success metric, or an Open Question asking for one. | Critical |
| PD3 | Non-goals or out-of-scope items are stated. | Critical |
| PD4 | Every `Must` feature traces to at least one goal and one persona. | Critical |
| PD5 | Standard: every `Must` feature has at least one user story; every story follows the story form, passes INVEST review, and has Given/When/Then acceptance criteria. | Critical |
| PD6 | Standard: release criteria are measurable. | Warning |
| PD7 | No date, estimate, price, or capacity exists that the user has not provided or confirmed. | Critical |
| PD8 | When a StRS or BRS/BRD also exists, no ID is defined twice and every reference resolves. | Critical |
| PD9 | Every required section for the variant exists or uses the Skipped Section Protocol. | Critical |
| PD10 | Every `[TBD]` has a matching Open Question; no `[ASSUMPTION]` exists without user consent per the Assumption Policy. | Critical |

Report the results to the user before asking for the gate decision. For the Standard variant, write them to `<OutputLocation>/Reports/Discovery-Check-YYYY-MM-DD.md`.

## 7. Cross-References

- Document set and ownership: `Agent/01-Core/09-Document Set And Output Location.md`
- Discovery workflow: `Agent/02-Discovery/01-Discovery Workflow.md`
- Question bank: `Agent/02-Discovery/02-Elicitation Question Bank.md`
- Delivery workflow: `Agent/04-Delivery/01-Delivery Workflow.md`
- Stakeholder requirement rules: `Agent/02-Discovery/03-BRS-StRS Output Contract.md`
- Template: `Context/PRD-Template.md`
