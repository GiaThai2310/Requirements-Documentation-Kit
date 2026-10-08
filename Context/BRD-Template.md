---
title: "<Project Name> - Business Requirements Document"
aliases:
  - "<Project Name> BRD"
document_type: brd
brd_schema_version: "1.0"
project: "<Project Name>"
project_profile: PERSONAL | TEAM | SME
depth: Lite | Standard | Full
output_language: en
role_in_layer: Primary | Secondary (references BRS)
version: "0.1"
status: DRAFT
authors:
  - "<Author>"
reviewers: []
approvers: []
created: YYYY-MM-DD
last_updated: YYYY-MM-DD
tags:
  - brd
  - requirements
---

# Business Requirements Document

This template is based on the IIBA BABOK v3 requirements classification (business, stakeholder, solution, transition) and common industry BRD practice. No ISO standard defines a BRD. Document control follows ISO/IEC/IEEE 15289 generic content. Tailor sections by depth and ownership using `Agent/02-Discovery/04-BRD Output Contract.md`.

## Table Of Contents

- [0. Document Control](#0-document-control)
- [1. Executive Summary](#1-executive-summary)
- [2. Business Context](#2-business-context)
  - [2.1 Background](#21-background)
  - [2.2 Problem Or Opportunity Statement](#22-problem-or-opportunity-statement)
  - [2.3 Business Objectives And Success Metrics](#23-business-objectives-and-success-metrics)
  - [2.4 Business Case](#24-business-case)
- [3. Scope](#3-scope)
  - [3.1 In Scope](#31-in-scope)
  - [3.2 Out Of Scope](#32-out-of-scope)
  - [3.3 Future Scope](#33-future-scope)
  - [3.4 Solution Scope Overview](#34-solution-scope-overview)
  - [3.5 Assumptions, Constraints And Dependencies](#35-assumptions-constraints-and-dependencies)
- [4. Stakeholders](#4-stakeholders)
  - [4.1 Stakeholder Register](#41-stakeholder-register)
  - [4.2 RACI](#42-raci)
- [5. Current And Future State](#5-current-and-future-state)
  - [5.1 Current State](#51-current-state)
  - [5.2 Future State](#52-future-state)
  - [5.3 Gap Summary](#53-gap-summary)
- [6. Requirements](#6-requirements)
  - [6.1 Business Requirements](#61-business-requirements)
  - [6.2 Stakeholder Requirements](#62-stakeholder-requirements)
  - [6.3 High-Level Solution Requirements](#63-high-level-solution-requirements)
  - [6.4 Transition Requirements](#64-transition-requirements)
- [7. Business Rules](#7-business-rules)
- [8. Data And Reporting Needs](#8-data-and-reporting-needs)
- [9. Privacy And Compliance Considerations](#9-privacy-and-compliance-considerations)
- [10. Risks, Open Questions And Decisions](#10-risks-open-questions-and-decisions)
- [11. Glossary](#11-glossary)
- [12. Approval](#12-approval)

## 0. Document Control

**Last Updated**: YYYY-MM-DD
**Status**: DRAFT
**Author**: Agent

| Field | Value |
|---|---|
| Project Name | `<Project Name>` |
| Document Name | Business Requirements Document |
| Document ID | `<Document ID>` |
| Version | `0.1` |
| Project Profile | PERSONAL / TEAM / SME |
| Depth | Lite / Standard / Full |
| Role In Business Layer | Primary / Secondary (references BRS `<version>`) |
| Sponsor | `<Sponsor or None>` |
| Status | `DRAFT` |
| Author | `<Author>` |
| Approver | `<Approver>` |

### Revision History

| Version | Date | Author | Changed Sections | Change Description | Status |
|---|---|---|---|---|---|
| 0.1 | `YYYY-MM-DD` | Agent | Initial document | Initial draft | DRAFT |

## 1. Executive Summary

**Last Updated**: YYYY-MM-DD
**Status**: DRAFT
**Author**: Agent

`<One or two paragraphs: the business need, the proposed change, the main objectives, the expected value, and the decision requested from the reader.>`

## 2. Business Context

**Last Updated**: YYYY-MM-DD
**Status**: DRAFT
**Author**: Agent

### 2.1 Background

`<The organization or person, the current situation, and what led to this initiative.>`

### 2.2 Problem Or Opportunity Statement

`<The problem or opportunity, who is affected, and its impact. Do not describe the solution.>`

### 2.3 Business Objectives And Success Metrics

| Business Goal ID | Objective | Owner | Expected Outcome | Priority | Source | Status |
|---|---|---|---|---|---|---|
| BG-GEN-001 | `<Objective>` | `<Owner>` | `<Outcome>` | Must / Should / Could / Won't | `<Source>` | DRAFT |

| Success Criterion ID | Related Goal | Metric | Target | Measurement Method | Evaluation Time | Owner |
|---|---|---|---|---|---|---|
| SC-GEN-001 | `<BG ID>` | `<Metric>` | `<Target>` | `<Method>` | `<Date or period>` | `<Owner>` |

When a primary BRS exists, replace these tables with references to BRS IDs.

### 2.4 Business Case

All figures come from the user or a cited source. Unknown figures are `[TBD]` with an Open Question.

| Option | Description | Benefits | Costs | Risks | Recommendation |
|---|---|---|---|---|---|
| Do Nothing | `<Current situation continues>` | `<Benefits>` | `<Costs>` | `<Risks>` | `<Yes / No>` |
| `<Option A>` | `<Description>` | `<Benefits>` | `<Costs>` | `<Risks>` | `<Yes / No>` |

| Item | Value | Source |
|---|---|---|
| Expected Benefits (quantified where possible) | `<Value or [TBD]>` | `<Source>` |
| Estimated Build Cost | `<Value or [TBD]>` | `<Source>` |
| Estimated Running Cost | `<Value or [TBD]>` | `<Source>` |
| Payback Or Evaluation Horizon | `<Value or [TBD]>` | `<Source>` |

## 3. Scope

**Last Updated**: YYYY-MM-DD
**Status**: DRAFT
**Author**: Agent

### 3.1 In Scope

- `<Business capability, process, or organizational unit included>`

### 3.2 Out Of Scope

- `<Explicitly excluded item>`

### 3.3 Future Scope

- `<Item considered for later, not committed>`

### 3.4 Solution Scope Overview

`<High-level description of the capabilities the solution will provide, without design detail. Reference PRD or SRS feature IDs when they exist.>`

### 3.5 Assumptions, Constraints And Dependencies

| ID | Type | Statement | Source | Impact If False Or Unavailable | Owner | Status |
|---|---|---|---|---|---|---|
| ASM-GEN-001 | Assumption | `<Assumption accepted by the user>` | `<Source>` | `<Impact>` | `<Owner>` | DRAFT |
| CON-PRJ-001 | Constraint | `<Budget, schedule, team, technology, regulation>` | `<Source>` | `<Impact>` | `<Owner>` | DRAFT |
| DEP-GEN-001 | Dependency | `<Dependency>` | `<Source>` | `<Impact>` | `<Owner>` | DRAFT |

## 4. Stakeholders

**Last Updated**: YYYY-MM-DD
**Status**: DRAFT
**Author**: Agent

### 4.1 Stakeholder Register

| Stakeholder ID | Stakeholder | Role | Interests | Influence | Decision Authority | Source |
|---|---|---|---|---|---|---|
| STK-GEN-001 | `<Stakeholder>` | `<Role>` | `<Interests>` | Low / Medium / High | Approver / Reviewer / Informed / None | `<Source>` |

### 4.2 RACI

| Activity Or Deliverable | Responsible | Accountable | Consulted | Informed |
|---|---|---|---|---|
| `<Approve BRD>` | `<STK ID>` | `<STK ID>` | `<STK IDs>` | `<STK IDs>` |

## 5. Current And Future State

**Last Updated**: YYYY-MM-DD
**Status**: DRAFT
**Author**: Agent

### 5.1 Current State

| Process ID | Step | Participant | Action | Tools Or Inputs | Output | Pain Point |
|---|---:|---|---|---|---|---|
| BP-GEN-001 | 1 | `<Participant>` | `<Action>` | `<Input>` | `<Output>` | `<Pain point>` |

### 5.2 Future State

| Process ID | Step | Participant | Action | Business Rule | Output | Improvement |
|---|---:|---|---|---|---|---|
| BP-GEN-002 | 1 | `<Participant>` | `<Action>` | `<BR ID>` | `<Output>` | `<Improvement>` |

### 5.3 Gap Summary

| Gap | Current State | Future State | Addressed By |
|---|---|---|---|
| `<Gap>` | `<Current>` | `<Future>` | `<BG, F, or TRN IDs>` |

## 6. Requirements

**Last Updated**: YYYY-MM-DD
**Status**: DRAFT
**Author**: Agent

The four categories follow the IIBA BABOK v3 requirements classification.

### 6.1 Business Requirements

Business requirements are the objectives and success metrics in Section 2.3.

| Business Goal ID | Summary | Success Criteria |
|---|---|---|
| `<BG ID>` | `<Summary>` | `<SC IDs>` |

### 6.2 Stakeholder Requirements

Reference StRS or PRD IDs when those documents exist. Otherwise define key needs here using `Agent/02-Discovery/03-BRS-StRS Output Contract.md` Section 7.

| Requirement ID | Statement | Stakeholder | Parent | Priority | Source | Status |
|---|---|---|---|---|---|---|
| STR-GEN-001 | The `<stakeholder>` shall be able to `<capability>`. | `<STK or UCL ID>` | `<BG ID>` | Must / Should / Could / Won't | `<Source>` | DRAFT |

### 6.3 High-Level Solution Requirements

Capabilities and qualities at business level. Detailed functional and non-functional requirements belong in the SRS.

| ID | Type | Capability Or Quality | Related Needs | Priority | Source | Status |
|---|---|---|---|---|---|---|
| F-GEN-001 | Capability | `<Capability name>: <what the solution enables>` | `<STR IDs>` | Must / Should / Could / Won't | `<Source>` | DRAFT |
| STR-QUAL-001 | Quality | `<Quality expectation>` | `<STR IDs>` | Must / Should / Could / Won't | `<Source>` | DRAFT |

### 6.4 Transition Requirements

#### TRN-GEN-001 Requirement Title

- **Statement**: Before `<transition event>`, `<responsible party or solution>` shall `<capability or condition>`.
- **Category**: Data Migration / Training / Organizational Change / Cutover / Parallel Operation / Business Continuity / Decommissioning
- **Affected Stakeholders**: `<STK or UCL IDs>`
- **Timing**: `<Transition event or date range confirmed by the user>`
- **Ends When**: `<Condition>`
- **Priority**: Must / Should / Could / Won't
- **Status**: DRAFT
- **Source**: `<Source>`
- **Verification Method**: Test / Analysis / Inspection / Demonstration
- **Notes**: None

## 7. Business Rules

**Last Updated**: YYYY-MM-DD
**Status**: DRAFT
**Author**: Agent

| Rule ID | Rule Name | Category | Rule Statement | Source | Priority | Status |
|---|---|---|---|---|---|---|
| BR-GEN-001 | `<Rule Name>` | Pricing / Eligibility / Approval / Timing / Limit / Policy / Compliance | `<Rule Statement>` | `<Source>` | Must / Should / Could / Won't | DRAFT |

## 8. Data And Reporting Needs

**Last Updated**: YYYY-MM-DD
**Status**: DRAFT
**Author**: Agent

| Need | Business Purpose | Data Involved | Consumers | Frequency | Source |
|---|---|---|---|---|---|
| `<Report, dashboard, export, or data need>` | `<Purpose>` | `<Data>` | `<STK IDs>` | `<Frequency>` | `<Source>` |

## 9. Privacy And Compliance Considerations

**Last Updated**: YYYY-MM-DD
**Status**: DRAFT
**Author**: Agent

Based on ISO/IEC 29100 privacy principles. The Agent records questions and facts; it does not decide which laws apply.

| Item | Answer | Source | Status |
|---|---|---|---|
| Personal Data Processed | `<Kinds of personal data, or None>` | `<Source>` | DRAFT |
| Data Subjects | `<Whose data>` | `<Source>` | DRAFT |
| Jurisdictions And User Locations | `<Countries or regions>` | `<Source>` | DRAFT |
| Regulated Sector | `<Finance / Health / Education / Government / None>` | `<Source>` | DRAFT |
| Candidate Obligations To Confirm | `<Laws or standards to confirm with an advisor> [REVIEW]` | `<Source>` | REVIEW |

## 10. Risks, Open Questions And Decisions

**Last Updated**: YYYY-MM-DD
**Status**: DRAFT
**Author**: Agent

### 10.1 Open Questions

| Question ID | Question | Context | Affected Sections | Owner | Due Date | Status | Resolution |
|---|---|---|---|---|---|---|---|
| OQ-GEN-001 | `<Question>` | `<Context>` | `<Sections or IDs>` | `<Owner>` | `YYYY-MM-DD` | REVIEW | |

### 10.2 Decisions

| Decision ID | Decision | Date | Decision Owner | Rationale | Affected Items | Status |
|---|---|---|---|---|---|---|
| DEC-GEN-001 | `<Decision>` | `YYYY-MM-DD` | `<Owner>` | `<Rationale>` | `<IDs>` | REVIEW |

### 10.3 Business Risks

| Risk ID | Risk | Cause | Impact | Probability | Severity | Mitigation | Owner | Status |
|---|---|---|---|---|---|---|---|---|
| RISK-GEN-001 | `<Risk>` | `<Cause>` | `<Impact>` | Low / Medium / High | Low / Medium / High | `<Mitigation>` | `<Owner>` | DRAFT |

## 11. Glossary

| Term | Type | Definition | Source Or Notes |
|---|---|---|---|
| `<Term>` | Term / Acronym / Abbreviation | `<Definition>` | `<Source>` |

## 12. Approval

**Last Updated**: YYYY-MM-DD
**Status**: REVIEW
**Author**: Human

| Role | Name | Decision | Date | Comments |
|---|---|---|---|---|
| Sponsor Or Approver | `<Name>` | APPROVED / Changes Requested / Rejected | `YYYY-MM-DD` | |

Only a human approver can authorize `APPROVED` status.
