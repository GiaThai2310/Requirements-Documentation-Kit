# 01 - Delivery Workflow

## 1. Purpose

This document defines Stage S6 (Delivery), which is **optional**. It produces a **Product Backlog** and/or a **Release Plan** from the PRD and SRS, only when the user asks for them.

| Document | File | Template |
|---|---|---|
| Product Backlog | `<OutputLocation>/04-Backlog.md` | `Context/Backlog-Template.md` |
| Release Plan | `<OutputLocation>/04-Release-Plan.md` | `Context/Release-Plan-Template.md` |

### 1.1 Basis

- Scrum Guide 2020: the Product Backlog is an emergent, ordered list of what is needed to improve the product; the Product Goal is the target to plan against; refinement adds description, order, and size; the Definition of Done is the formal description of the quality required for an increment.
- IIBA BABOK v3: Backlog Management and User Stories techniques.
- MoSCoW prioritisation and timeboxing (DSDM / Agile Business Consortium).
- ISO/IEC/IEEE 15289 generic content for a plan (identification, scope, schedule, resources, risks, change history, approval).
- ISO/IEC 29110 project planning concepts: milestones, delivery instructions, and risks.
- No ISO standard defines a backlog or a release plan format. The Agent must not claim conformance.

### 1.2 Boundaries

- The kit specifies **what** will be delivered and in which order. It does not manage sprints, task assignment, or execution progress.
- Item `Status` uses the kit status model (`DRAFT`, `REVIEW`, `APPROVED`, `DEPRECATED`) and describes the approval state of the item definition, not whether work is done.
- **The Agent never invents dates, estimates, team capacity, velocity, or release cadence.** It may propose options, but it records them only after the user provides or confirms them. Unknown values stay `[TBD]` with an Open Question.

## 2. Entry Conditions

Enter Stage S6 only when all are true:

1. The user asked for a backlog or a release plan (in Stage S0, in the PRD variant questions, or later).
2. A Standard PRD exists, or an SRS exists with features and functional requirements in `REVIEW` or `APPROVED`.
3. `00-Project-State.md` lists the Delivery documents in the Document Register.

If the user asks for a backlog or release plan but only a Lean PRD exists, explain that user stories and release criteria are needed, and ask whether to upgrade the PRD to Standard or to derive stories from the SRS.

## 3. Required Questions

Ask with the Clarification Question format (`Agent/01-Core/06-Human Interaction Protocol.md` Section 5), using `Q-DLV` questions from `Agent/02-Discovery/02-Elicitation Question Bank.md`:

| Topic | Needed For |
|---|---|
| Product Goal | Backlog |
| Estimation unit (story points, ideal days, T-shirt sizes, or no estimates) | Backlog |
| Who provides estimates | Backlog |
| Definition of Done | Backlog |
| Ordering criteria (value, risk, dependencies, deadlines) | Backlog |
| Number of releases or release cadence | Release Plan |
| Target dates and fixed deadlines | Release Plan |
| Team capacity, if the user wants capacity checks | Release Plan |
| Which features must be in the first release | Release Plan |

## 4. Building The Backlog

1. **Epics**: create one `EP` per PRD or SRS feature (`F`) that is in scope. Reference the feature; do not restate it.
2. **Items**:
   - If the PRD has user stories, the backlog **references** those `US` IDs.
   - If no stories exist, propose stories derived from SRS `FR` items, using the story rules in `Agent/02-Discovery/05-PRD Output Contract.md` Section 5.3, and ask the user to confirm them before recording. The backlog then owns these `US` IDs.
3. **Order**: propose an order based on MoSCoW priority, dependencies, and the ordering criteria the user gave. Show the proposal and ask the user to confirm or adjust it. Order values must be unique.
4. **Estimates**: record only estimates the user provides or confirms, in the unit the user chose. Otherwise leave the field empty.
5. **Definition of Done**: record the user's Definition of Done. If the user has none, offer a starting checklist built from the SRS verification methods and ask for confirmation.
6. Trace every item to its `F` and, when available, to `FR` and `STR`.

## 5. Building The Release Plan

1. Create one `RLS` per release the user wants.
2. Propose which features and stories go in each release, starting with `Must` items in the first release. Ask the user to confirm.
3. Reference release criteria (`RC`) from the PRD, or define them here when the PRD has none.
4. Record milestones (`MS`) with dates only from the user.
5. List dependencies (internal and external) and release risks.
6. When the user gave capacity and estimates, compare the planned scope to the capacity and report any overload as a question. Do not move items between releases without confirmation.

## 6. Delivery Checks (Before The S6 Gate)

| ID | Check | Severity |
|---|---|---|
| DV1 | Every backlog item traces to a feature (`F`), and to `FR` or `STR` when those documents exist. | Critical |
| DV2 | Every `Must` story is assigned to a release, or the gap is recorded as an Open Question. | Critical |
| DV3 | Backlog order values are unique. | Critical |
| DV4 | No date, estimate, capacity, or cadence exists that the user has not provided or confirmed. | Critical |
| DV5 | Every release has a goal and measurable release criteria. | Warning |
| DV6 | Release scope references existing, non-deprecated `F` and `US` IDs. | Critical |
| DV7 | The Definition of Done is recorded, or its absence is recorded as an Open Question. | Warning |
| DV8 | Stories referenced from the PRD are not restated in the backlog. | Warning |

Report the results, then ask the approver for the S6 gate decision.

## 7. Change Handling

When a PRD feature, story, or SRS requirement changes, analyze the impact on the backlog and release plan as part of the change request (`Agent/03-SRS/06-Change Request Workflow.md`). Never silently move, remove, or reorder approved items.

## 8. Cross-References

- Document set and ownership: `Agent/01-Core/09-Document Set And Output Location.md`
- PRD rules: `Agent/02-Discovery/05-PRD Output Contract.md`
- Question bank: `Agent/02-Discovery/02-Elicitation Question Bank.md`
- Traceability: `Agent/03-SRS/07-Traceability Workflow.md`
- Templates: `Context/Backlog-Template.md`, `Context/Release-Plan-Template.md`
