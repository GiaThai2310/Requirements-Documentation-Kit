---
title: About The Kit And Its Documents
aliases:
  - Requirements Documents Overview
tags:
  - srs
  - requirements-engineering
  - software-documentation
status: completed
---

# About The Kit And Its Documents

This page explains what a Software Requirements Specification (SRS) is, how it relates to the BRS, BRD, StRS, and PRD, and how this kit uses them.

Detailed writing guidance is in `Human/Guide.md`.
The operational template is in `Context/SRS-Template.md`.

## 1. What Is An SRS?

A Software Requirements Specification is a structured document that describes what a software system shall do and the conditions it shall satisfy. It should make stakeholder needs clear enough for analysis, design, implementation, verification, validation, and change control.

An SRS answers questions such as:

- Why is this software being built?
- What is in scope and out of scope?
- Who uses, operates, or integrates with the system?
- What features and behaviors are required?
- What business rules and constraints apply?
- What data is created, processed, stored, exchanged, retained, or deleted?
- What quality attributes must be met?
- How will each requirement be verified?

An SRS should focus on required behavior and measurable constraints. It should avoid design or implementation detail unless that detail is itself a required constraint.

## 2. The Requirements Documents

ISO/IEC/IEEE 29148:2018 describes three related requirements documents (BRS, StRS, SRS). Industry practice adds two widely used alternatives (BRD, PRD) that are **not** defined by an ISO standard. The user chooses which documents a project needs:

| Document | Question It Answers | Typical Content |
|---|---|---|
| BRS - Business Requirements Specification | Why does the business or person need this? | Problem, business goals, success criteria, business model, processes, rules, constraints |
| StRS - Stakeholder Requirements Specification | What do users and other stakeholders need? | User classes, stakeholder requirements, operational scenarios, life-cycle concepts |
| BRD - Business Requirements Document (BABOK, industry) | Same as BRS, written for business readers | Executive summary, business case, scope, current and future state, requirements in the four BABOK categories, transition requirements |
| PRD - Product Requirements Document (product management practice) | What product will be built for which users? | Goals, non-goals, personas, scenarios, features, and (Standard variant) user stories, release criteria, milestones |
| SRS - Software Requirements Specification | What shall the software do, and how well? | Features, functional and non-functional requirements, data, interfaces, verification |
| Product Backlog, Release Plan (optional) | In which order and in which release will it be delivered? | Epics, ordered stories, Definition of Done, releases, milestones |

Each level traces to the one above it: business goals (`BG`) -> stakeholder requirements (`STR`) or PRD features and stories (`F`, `US`) -> software requirements (`FR`, `NFR`) -> backlog items and releases. This makes it possible to explain why every software requirement exists and to see what is affected when a goal changes.

The depth of each document depends on the Project Profile (PERSONAL, TEAM, SME) and Tier (1-3). See `Human/Guide.md`.

## 3. Why Use An SRS?

### 3.1 Shared Understanding

An SRS gives stakeholders, analysts, designers, developers, testers, and approvers a shared baseline for scope and behavior.

### 3.2 Scope Control

An SRS separates:

- In-scope work.
- Out-of-scope work.
- Future-scope work.
- Open questions.
- Assumptions.
- Dependencies.

### 3.3 Development Input

An SRS gives technical teams a reliable basis for design and implementation. It does not replace design documentation; it defines what the design must satisfy.

### 3.4 Verification Input

Requirements should be testable by test, analysis, inspection, or demonstration. Acceptance criteria and traceability links help testers derive evidence from requirements.

### 3.5 Change Control

When requirements change, an SRS helps determine impact. Traceability shows affected features, use cases, business rules, data, interfaces, tests, and risks.

## 4. What Good Requirements Look Like

Good requirements are:

- Necessary.
- Unambiguous.
- Complete enough to implement and test.
- Atomic.
- Verifiable.
- Feasible.
- Traceable.
- Consistent with source material.

This kit uses EARS-style requirement statements and a canonical ID/status model to make those qualities easier to check.

## 5. Kit Conventions

### 5.1 ID Format

All SRS item IDs use:

```text
<TYPE>-<DOMAIN>-<NNN>
```

Examples:

- `FR-AUTH-001`
- `NFR-PERF-001`
- `BR-ORDER-001`
- `UC-PAY-001`
- `OQ-GEN-001`

Business and stakeholder items use the same pattern, for example `BG-GEN-001` (business goal) and `STR-BOOK-001` (stakeholder requirement).

### 5.2 Status Format

The canonical statuses are:

| Status | Meaning |
|---|---|
| `DRAFT` | Created or revised but not yet submitted for review. |
| `REVIEW` | Ready for human review or awaiting decision. |
| `APPROVED` | Explicitly accepted by a human approver. |
| `DEPRECATED` | Retained for history but no longer active. |

The Agent may not independently approve content.

### 5.3 Markers

| Marker | Meaning |
|---|---|
| `[TBD]` | Required information is missing. |
| `[ASSUMPTION]` | The Agent made a documented inference. |
| `[CONFLICT]` | Sources contradict each other. |
| `[REVIEW]` | Human attention is needed. |
| `[DEPRECATED]` | Item is no longer active but retained for audit. |
| `[CHANGE]` | Item was changed by a change request. |

## 6. Reference Basis

This kit is informed by:

- ISO/IEC/IEEE 29148:2018 for BRS, StRS, and SRS content, requirement attributes, quality characteristics, and traceability.
- ISO/IEC 29110 for the idea of graduated profiles for very small entities (individuals, small teams, start-ups).
- ISO/IEC 25010:2023 for product quality characteristics used to classify non-functional requirements.
- ISO/IEC 29100 for privacy principles.
- IIBA BABOK v3 for elicitation techniques, the requirements classification used by the BRD, and backlog management.
- Product management practice (SVPG, Aha!, Atlassian) for the PRD.
- Scrum Guide 2020 for the Product Backlog.
- ISO/IEC/IEEE 15289 for generic content of specifications and plans.
- EARS for constrained natural-language requirement syntax.
- MoSCoW prioritisation for Must / Should / Could / Won't priority labels.

See `Human/Guide.md` Section 1 for how each reference is used.
