# 04 - BRD Output Contract

## 1. Purpose

This document defines how the Agent writes a **Business Requirements Document (BRD)**: tailoring by depth, ownership rules when a BRS also exists, how to write transition requirements, and the checks before the business-layer gate.

`Context/BRD-Template.md` defines structure and formatting. This file defines tailoring and quality rules.

### 1.1 Basis

- **No ISO or IEEE standard defines a BRD.** "BRD" is an industry term. The kit grounds it in:
  - IIBA BABOK v3 requirements classification: business requirements, stakeholder requirements, solution requirements (functional and non-functional), and transition requirements.
  - IIBA BABOK v3 techniques used by the template: Business Case, Scope Modelling, Process Modelling, Stakeholder List, Map or Personas, Business Rules Analysis, and Data Modelling.
  - PMI *Business Analysis for Practitioners: A Practice Guide* for transition requirements (data conversion, training, operational change).
  - ISO/IEC/IEEE 29148:2018 BRS content for the overlapping business sections, and the requirement quality characteristics.
  - ISO/IEC/IEEE 15289 generic document control content (identification, version, change history, approval).
- The Agent must not claim that a BRD conforms to an ISO standard.

### 1.2 BRD Versus BRS

| Aspect | BRS (ISO/IEC/IEEE 29148) | BRD (BABOK and industry practice) |
|---|---|---|
| Typical reader | Systems and requirements engineers, contracting parties | Sponsors, founders, managers, business stakeholders |
| Scope | Business management and operational requirements, preliminary life-cycle concepts | Business need, business case, scope, current and future state, requirements in all four BABOK categories at a high level |
| Unique content | Business operational modes, preliminary life-cycle concepts | Executive summary, business case, RACI, transition requirements, gap summary |

## 2. Depth Levels

The BRD uses the same depth levels as the BRS (`03-BRS-StRS Output Contract.md` Section 2): Lite (PERSONAL default), Standard (TEAM default), Full (SME default). The user may choose another depth; record the decision.

Legend: `R` required, `C` conditional, `O` optional, `X` skip unless requested.

## 3. BRD Section Requirements

| BRD Section | Lite | Standard | Full |
|---|:-:|:-:|:-:|
| 0. Document Control | O | R | R |
| 1. Executive Summary | O | R | R |
| 2.1 Background | R | R | R |
| 2.2 Problem Or Opportunity Statement | R | R | R |
| 2.3 Business Objectives And Success Metrics | R | R | R |
| 2.4 Business Case | X | C | R |
| 3.1-3.3 In, Out, And Future Scope | R | R | R |
| 3.4 Solution Scope Overview | C | R | R |
| 3.5 Assumptions, Constraints And Dependencies | R | R | R |
| 4.1 Stakeholder Register | C | R | R |
| 4.2 RACI | X | C | R |
| 5.1 Current State | C | R | R |
| 5.2 Future State | C | R | R |
| 5.3 Gap Summary | X | C | R |
| 6.1 Business Requirements | R | R | R |
| 6.2 Stakeholder Requirements | C | R | R |
| 6.3 High-Level Solution Requirements | C | R | R |
| 6.4 Transition Requirements | C | C | R |
| 7. Business Rules | C | R | R |
| 8. Data And Reporting Needs | X | C | R |
| 9. Privacy And Compliance Considerations | C | C | R |
| 10. Risks, Open Questions And Decisions | R | R | R |
| 11. Glossary | C | R | R |
| 12. Approval | O | C | R |

Section 6.4 becomes `R` in every depth when the product replaces or changes an existing process, system, or data set. Section 9 becomes `R` when personal data is processed.

Omitted sections use the Skipped Section Protocol (`Agent/03-SRS/02-SRS Output Contract.md` Section 7).

## 4. Ownership Rules

Follow `Agent/01-Core/09-Document Set And Output Location.md` Section 5.

| Situation | BRD Behavior |
|---|---|
| BRD is the only business-layer document | The BRD owns `BG`, `SC`, `BP`, `BR`, `STK`, `CON`, and `TRN`. |
| BRD is primary and a BRS also exists | The BRD owns those IDs; the BRS references them and adds only ISO-specific sections. |
| BRS is primary and a BRD also exists | The BRD references BRS IDs in Sections 2.3, 3, 4.1, 5, 6.1, and 7, and adds only: executive summary, business case, RACI, gap summary, transition requirements. |
| A StRS or PRD exists | Section 6.2 and Section 6.3 summarize and reference `STR`, `UCL`, and `F` IDs from those documents instead of defining them. |
| No StRS or PRD exists | Section 6.2 defines key `STR` items and Section 6.3 defines high-level `F` items. Downstream documents reuse these IDs. |

## 5. Writing Rules

### 5.1 Business Requirements (Section 6.1)

Business requirements are the goals, objectives, and outcomes that explain why the change is being made and how success is measured. In the kit they are the `BG` and `SC` items in Section 2.3. Section 6.1 summarizes them by ID; it does not restate them.

### 5.2 Stakeholder And Solution Requirements (Sections 6.2 And 6.3)

- Stakeholder requirements follow `03-BRS-StRS Output Contract.md` Section 7.
- High-level solution requirements describe capabilities and qualities, not designs. Use the feature form: `<Capability name>: <what the solution enables>`. Detailed functional and non-functional requirements belong in the SRS.

### 5.3 Transition Requirements (Section 6.4)

Transition requirements describe temporary capabilities and conditions needed to move from the current state to the future state. They are no longer needed once the transition is complete.

Statement form:

```text
[Before | During | After] <transition event>, <the responsible party or the solution> shall <capability or condition>.
```

Example: `Before go-live, the existing customer list shall be imported into the new system with no loss of active customer records.`

Categories: Data Migration, Training, Organizational Change, Cutover, Parallel Operation, Business Continuity, Decommissioning.

Required attributes:

```markdown
#### TRN-DOMAIN-NNN Requirement Title

- **Statement**: [Statement in the form above]
- **Category**: Data Migration / Training / Organizational Change / Cutover / Parallel Operation / Business Continuity / Decommissioning
- **Affected Stakeholders**: [STK or UCL IDs]
- **Timing**: [Transition event or date range confirmed by the user]
- **Ends When**: [Condition after which the requirement no longer applies]
- **Priority**: Must / Should / Could / Won't
- **Status**: DRAFT | REVIEW | APPROVED | DEPRECATED
- **Source**: [Source reference]
- **Verification Method**: Test / Analysis / Inspection / Demonstration
- **Notes**: [Markers or None]
```

### 5.4 Business Case (Section 2.4)

- Present options considered (including "do nothing"), expected benefits, costs, risks, and the recommended option.
- **The Agent must not invent financial figures, market sizes, prices, or dates.** Ask the user for them. Unknown figures are `[TBD]` with an Open Question. Figures supplied by the user are cited as P1 sources.

## 6. BRD Checks (Before The Business-Layer Gate)

| ID | Check | Severity |
|---|---|---|
| BD1 | The problem or opportunity statement describes the business situation without prescribing a solution. | Critical |
| BD2 | Every business objective (`BG`) has at least one success metric (`SC`) with a measurable target and evaluation time. | Critical |
| BD3 | In-scope and out-of-scope items are stated. | Critical |
| BD4 | Every required section for the depth exists or uses the Skipped Section Protocol. | Critical |
| BD5 | Every business rule (`BR`) and constraint (`CON`) has a source. | Critical |
| BD6 | For Full depth, the business case lists options, benefits, costs, and risks; all figures come from the user or a cited source. | Critical |
| BD7 | Transition requirements exist, or the BRD states that no transition is needed, when the product replaces or changes an existing process, system, or data set. | Warning |
| BD8 | The privacy and compliance review was performed when personal data is processed. | Critical |
| BD9 | When a BRS also exists, no ID is defined in both documents and every reference resolves. | Critical |
| BD10 | Every `[TBD]` has a matching Open Question; no `[ASSUMPTION]` exists without user consent per the Assumption Policy. | Critical |

Report the results to the user before asking for the gate decision. For Standard and Full depth, write them to `<OutputLocation>/Reports/Discovery-Check-YYYY-MM-DD.md`.

## 7. Cross-References

- Document set and ownership: `Agent/01-Core/09-Document Set And Output Location.md`
- BRS and StRS rules: `Agent/02-Discovery/03-BRS-StRS Output Contract.md`
- Discovery workflow: `Agent/02-Discovery/01-Discovery Workflow.md`
- Question bank: `Agent/02-Discovery/02-Elicitation Question Bank.md`
- Template: `Context/BRD-Template.md`
