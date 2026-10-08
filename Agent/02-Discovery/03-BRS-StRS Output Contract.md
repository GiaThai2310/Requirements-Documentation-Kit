# 03 - BRS And StRS Output Contract

## 1. Purpose

This document defines which BRS and StRS sections are required for each project profile, how stakeholder requirements are written, and which checks the Agent runs before a Discovery gate.

- `Context/BRS-Template.md` and `Context/StRS-Template.md` define structure and formatting.
- This file defines tailoring and quality rules.

Basis: ISO/IEC/IEEE 29148:2018 BRS and StRS content and its tailoring provisions. Tailoring decisions must be visible in the document (Skipped Section Protocol) so that reviewers know what was omitted on purpose.

## 2. Depth Levels

| Depth | Default Profile | Intent |
|---|---|---|
| Lite | PERSONAL | Capture just enough business and user intent to write a focused SRS. |
| Standard | TEAM | Shared understanding inside a team; explicit stakeholders, processes, and rules. |
| Full | SME | Business-grade documents suitable for founders, investors, customers, and contractors. |

The user may choose a different depth than the profile default. Record such a choice as a decision in `00-Project-State.md`.

Legend:

- `R` = Required.
- `C` = Conditional: required when earlier answers make it relevant, otherwise use the Skipped Section Protocol.
- `O` = Optional.
- `X` = Skip unless the user requests it.

## 3. BRS Section Requirements

| BRS Section | Lite | Standard | Full |
|---|:-:|:-:|:-:|
| 0. Document Control | O | R | R |
| 1.1 Business Purpose | R | R | R |
| 1.2 Business Scope | R | R | R |
| 1.3 Business Overview | O | C | R |
| 1.4 Definitions, Acronyms And Abbreviations | C | R | R |
| 1.5 Major Stakeholders | C | R | R |
| 2. References | O | C | R |
| 3.1 Business Environment | C | R | R |
| 3.2 Mission, Goals And Objectives (problem statement, business goals, success criteria) | R | R | R |
| 3.3 Business Model | X | C | R |
| 3.4 Information Environment | C | R | R |
| 4.1 Business Processes | C | R | R |
| 4.2 Business Operational Policies And Rules | C | R | R |
| 4.3 Business Operational Constraints | C | C | R |
| 4.4 Business Operational Modes | X | O | C |
| 4.5 Business Operational Quality | X | C | R |
| 4.6 Business Structure | X | C | R |
| 4.7 Privacy And Compliance Considerations | C | C | R |
| 5. Preliminary Operational Concept | C | R | R |
| 6. Preliminary Life-Cycle Concepts | X | C | R |
| 7. Project Constraints | R | R | R |
| 8. Open Questions, Decisions And Risks | R | R | R |
| 9. Approval | O | C | R |

Section 4.7 becomes `R` in every profile when the product processes personal data.

## 4. StRS Section Requirements

| StRS Section | Lite | Standard | Full |
|---|:-:|:-:|:-:|
| 0. Document Control | O | R | R |
| 1.1 Stakeholder Purpose | R | R | R |
| 1.2 Stakeholder Scope | R | R | R |
| 1.3 Overview | O | C | R |
| 1.4 Definitions, Acronyms And Abbreviations | C | R | R |
| 1.5 Stakeholders | C | R | R |
| 2. References | O | C | R |
| 3. Business Management Requirements (by reference to BRS) | C | R | R |
| 4. Business Operational Requirements (by reference to BRS) | C | R | R |
| 5.1 User Classes | R | R | R |
| 5.2 Stakeholder Requirements | R | R | R |
| 5.3 Stakeholder Quality Expectations | C | R | R |
| 6.1 Operational Concept | R | R | R |
| 6.2 Operational Scenarios | R | R | R |
| 6.3 Acquisition Concept | X | O | C |
| 6.4 Deployment Concept | C | R | R |
| 6.5 Support Concept | X | C | R |
| 6.6 Retirement Concept | X | C | R |
| 7. Project Constraints (by reference to BRS) | R | R | R |
| 8. Open Questions, Decisions And Risks | R | R | R |
| 9. Stakeholder Requirements Traceability | C | R | R |
| 10. Approval | O | C | R |

## 5. Skipped Section Protocol

Use the same protocol as `Agent/03-SRS/02-SRS Output Contract.md` Section 7: keep the heading, add the section metadata, and state `This section is omitted for the <Depth> depth of this project. Revisit if scope expands.`

## 6. No Duplication Rule

- The BRS owns business goals (`BG`), success criteria (`SC`), business processes (`BP`), business rules and policies (`BR`), stakeholders (`STK`), and project constraints (`CON`).
- The StRS references those IDs instead of restating them.
- The SRS references BRS and StRS IDs in Section 4 (Business Context) and in traceability fields instead of redefining them.

## 7. Stakeholder Requirement Writing Rules

Stakeholder requirements (`STR`) express what a stakeholder or user class needs to be able to do, or needs to be true. They do not describe the software solution.

### 7.1 Statement Form

```text
The <stakeholder or user class> shall be able to <capability> [<condition, quality, or constraint>].
```

Examples:

- Correct: `The Customer shall be able to book an appointment outside the shop's opening hours.`
- Incorrect: `The system shall provide a React booking widget with a calendar dropdown.` (solution, not need)

For a non-English Output Language, apply the language rule in `Agent/01-Core/05-Output Rules.md` Section 12.

### 7.2 Required Attributes

```markdown
#### STR-DOMAIN-NNN Requirement Title

- **Statement**: The <stakeholder> shall be able to <capability>.
- **Stakeholder**: [STK or UCL ID]
- **Priority**: Must / Should / Could / Won't
- **Status**: DRAFT | REVIEW | APPROVED | DEPRECATED
- **Source**: [Source reference]
- **Rationale**: [Why the stakeholder needs this]
- **Parent**: [BG ID(s), or "None" with reason]
- **Validation Criterion**: [How the stakeholder will confirm the need is met, for example demo, pilot, acceptance review]
- **Notes**: [Markers, assumptions, conflicts, or None]
```

### 7.3 Quality Characteristics

Each `STR` must satisfy the ISO/IEC/IEEE 29148 characteristics of individual requirements: necessary, appropriate, unambiguous, complete, singular, feasible, verifiable (here: able to be validated by the stakeholder), correct, and conforming. Apply the relevant checks from `Agent/03-SRS/04-Micro Validation.md`, except that `STR` statements use the stakeholder as the subject instead of the system.

### 7.4 Operational Scenarios

Write each operational scenario (`OPS`) as a numbered sequence of stakeholder actions and expected outcomes, with the trigger, the actors, the related `STR` IDs, and at least one exception path for `Standard` and `Full` depth.

## 8. BRS Checks (Before The S1 Gate)

| ID | Check | Severity |
|---|---|---|
| BC1 | The problem statement describes the problem and its impact without prescribing a solution. | Critical |
| BC2 | Every business goal (`BG`) has at least one success criterion (`SC`) with a measurable target and a date or evaluation time. | Critical |
| BC3 | In-scope and out-of-scope items for the first release are stated. | Critical |
| BC4 | Every required section for the depth exists or uses the Skipped Section Protocol. | Critical |
| BC5 | Every business rule (`BR`) and constraint (`CON`) has a source. | Critical |
| BC6 | Stakeholders with decision authority are identified (Standard and Full). | Warning |
| BC7 | The privacy and compliance review was performed when personal data is processed. | Critical |
| BC8 | Every `[TBD]` has a matching Open Question; no `[ASSUMPTION]` exists without user consent per the Assumption Policy. | Critical |

## 9. StRS Checks (Before The S2 Gate)

| ID | Check | Severity |
|---|---|---|
| SH1 | Every user class has at least one stakeholder requirement. | Critical |
| SH2 | Every `Must` stakeholder requirement traces to at least one business goal. | Critical |
| SH3 | Every business goal is addressed by at least one stakeholder requirement, or the gap is recorded as an Open Question. | Warning |
| SH4 | Stakeholder requirements are solution-free and singular. | Critical |
| SH5 | Every stakeholder requirement has a validation criterion. | Warning |
| SH6 | Every `Must` stakeholder requirement appears in at least one operational scenario. | Warning |
| SH7 | Terminology matches the glossary. | Warning |
| SH8 | Every `[TBD]` has a matching Open Question; no unconsented `[ASSUMPTION]` exists. | Critical |

Report results to the user before asking for the gate decision. For Standard and Full depth, write the results to `<OutputLocation>/Reports/Discovery-Check-YYYY-MM-DD.md`.

## 10. Cross-References

- Discovery workflow: `Agent/02-Discovery/01-Discovery Workflow.md`
- Question bank: `Agent/02-Discovery/02-Elicitation Question Bank.md`
- Project profiles: `Agent/01-Core/08-Project Profiles.md`
- Output rules: `Agent/01-Core/05-Output Rules.md`
- Templates: `Context/BRS-Template.md`, `Context/StRS-Template.md`
