---
document_type: project_state
state_schema_version: "1.1"
project: "<Project Name>"
last_updated: YYYY-MM-DD
---

# Project State - <Project Name>

The Agent reads this file first in every session and updates it at the end of every turn. It is the single place that shows where the project is in the kit pipeline and what happens next.

## 1. Project Settings

| Field | Value | Source |
|---|---|---|
| Project Name | `<Project Name>` | `<Source>` |
| Idea Statement | `<Two or three sentences confirmed by the user>` | `<Source>` |
| Project Profile | PERSONAL / TEAM / SME | `<Source>` |
| Tier | 1 / 2 / 3 | `<Source>` |
| Output Language | `en` / `vi` / other ISO 639-1 code | `<Source>` |
| Mandatory Keyword | `shall` (en) / `phải` (vi) / other | `<Source>` |
| Assumption Policy | `ask` / `allow-minor` | `<Source>` |
| Approver | `<Name or role>` | `<Source>` |
| Reviewers | `<Names or roles, or None>` | `<Source>` |
| Output Location | `<Confirmed path, default ProjectDocuments/<ProjectName>/>` | `<Source>` |
| Document Set | `<For example: BRD, PRD, SRS, Backlog>` | `<Source>` |
| Primary Per Layer | `<Business: BRS or BRD or n/a; Stakeholder/Product: StRS or PRD or n/a>` | `<Source>` |
| PRD Scope | `<Whole Product / Release <name> / Feature <name> / n/a>` | `<Source>` |
| PRD Variant | Lean / Standard / n/a | `<Source>` |
| Delivery Options | Backlog: yes / no; Release Plan: yes / no | `<Source>` |

Every setting must come from the user or a cited source. The Agent must not fill a setting by inference; ask instead.

## 2. Document Register

Each row is one document in the pipeline. Keep only the rows for documents in the Document Set; mark a removed or skipped document `Skipped (not in Document Set)`. New document types can be added as rows without changing the structure.

| Order | Doc Type | File | Role | Depth, Variant, Or Tier | Version | Status | Gate | Gate Decision |
|---:|---|---|---|---|---|---|---|---|
| 0 | Project State | `00-Project-State.md` | - | - | - | - | S0 Intake | `<Pending / Passed YYYY-MM-DD by <name>>` |
| 1 | BRS | `01-BRS.md` | Primary / Secondary | Lite / Standard / Full | `0.1` | DRAFT | S1 Business | `<Pending / Passed / Skipped>` |
| 1 | BRD | `01-BRD.md` | Primary / Secondary | Lite / Standard / Full | `0.1` | DRAFT | S1 Business | `<Pending / Passed / Skipped>` |
| 2 | StRS | `02-StRS.md` | Primary / Secondary | Lite / Standard / Full | `0.1` | DRAFT | S2 Stakeholder & Product | `<Pending / Passed / Skipped>` |
| 2 | PRD | `02-PRD.md` | Primary / Secondary | Lean / Standard | `0.1` | DRAFT | S2 Stakeholder & Product | `<Pending / Passed / Skipped>` |
| 3 | SRS | `03-SRS.md` | - | Tier 1 / 2 / 3 | `0.1` | DRAFT | S3 Outline, S4 Incremental | `<Pending / Passed / Skipped>` |
| 3 | Validation Report | `Reports/Validation-Report-YYYY-MM-DD.md` | - | - | - | - | S5 Baseline | `<Pending / Passed>` |
| 4 | Backlog | `04-Backlog.md` | - | - | `0.1` | DRAFT | S6 Delivery | `<Pending / Passed / Skipped>` |
| 4 | Release Plan | `04-Release-Plan.md` | - | - | `0.1` | DRAFT | S6 Delivery | `<Pending / Passed / Skipped>` |

## 3. Current Position

| Field | Value |
|---|---|
| Current Stage | S0 / S1 / S2 / S3 / S4 / S5 / S6 |
| Current Run Mode | Discovery / Draft-Outline / Incremental / Audit-Validation / Change Request / Full Generation / Delivery |
| Current Focus | `<Section, feature, or question batch>` |
| Next Step | `<One concrete next action>` |
| Blocked By | `<OQ IDs or None>` |

## 4. Interview Progress

| Stage | Answered Questions | Pending Questions | Skipped (Not Applicable To Profile) |
|---|---|---|---|
| S0 | `<Q IDs>` | `<Q IDs>` | `<Q IDs>` |
| S1 | `<Q IDs>` | `<Q IDs>` | `<Q IDs>` |
| S2 | `<Q IDs>` | `<Q IDs>` | `<Q IDs>` |
| S6 | `<Q IDs>` | `<Q IDs>` | `<Q IDs>` |

## 5. Open Questions Summary

| Question ID | Question | Document | Blocking Stage | Status |
|---|---|---|---|---|
| OQ-GEN-001 | `<Question>` | BRS / BRD / StRS / PRD / SRS / Backlog / Release Plan | S1 / S2 / S3 / S4 / S5 / S6 | REVIEW |

## 6. Decisions Log

| Decision ID | Decision | Date | Decided By | Affected Items |
|---|---|---|---|---|
| DEC-GEN-001 | `<Decision, for example profile chosen, document set chosen, PRD variant chosen, output location confirmed, stage skipped>` | `YYYY-MM-DD` | `<Name>` | `<IDs or documents>` |

## 7. Session Log

| Date | Stage | Summary Of Work | Next Step |
|---|---|---|---|
| YYYY-MM-DD | S0 | `<Summary>` | `<Next step>` |
