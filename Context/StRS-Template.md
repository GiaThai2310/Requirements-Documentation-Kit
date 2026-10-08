---
title: "<Project Name> - Stakeholder Requirements Specification"
aliases:
  - "<Project Name> StRS"
document_type: strs
strs_schema_version: "1.0"
project: "<Project Name>"
project_profile: PERSONAL | TEAM | SME
depth: Lite | Standard | Full
output_language: en
upstream:
  - "01-BRS.md"
version: "0.1"
status: DRAFT
authors:
  - "<Author>"
reviewers: []
approvers: []
created: YYYY-MM-DD
last_updated: YYYY-MM-DD
tags:
  - strs
  - requirements
---

# Stakeholder Requirements Specification

This template follows the Stakeholder Requirements Specification (StRS) content described in ISO/IEC/IEEE 29148:2018. Business content is referenced from the BRS by ID instead of being restated. Section 9 (traceability) is a kit addition. Tailor sections by depth using `Agent/02-Discovery/03-BRS-StRS Output Contract.md`.

## Table Of Contents

- [0. Document Control](#0-document-control)
- [1. Introduction](#1-introduction)
  - [1.1 Stakeholder Purpose](#11-stakeholder-purpose)
  - [1.2 Stakeholder Scope](#12-stakeholder-scope)
  - [1.3 Overview](#13-overview)
  - [1.4 Definitions, Acronyms And Abbreviations](#14-definitions-acronyms-and-abbreviations)
  - [1.5 Stakeholders](#15-stakeholders)
- [2. References](#2-references)
- [3. Business Management Requirements](#3-business-management-requirements)
- [4. Business Operational Requirements](#4-business-operational-requirements)
- [5. User Requirements](#5-user-requirements)
  - [5.1 User Classes](#51-user-classes)
  - [5.2 Stakeholder Requirements](#52-stakeholder-requirements)
  - [5.3 Stakeholder Quality Expectations](#53-stakeholder-quality-expectations)
- [6. Detailed Life-Cycle Concepts](#6-detailed-life-cycle-concepts)
  - [6.1 Operational Concept](#61-operational-concept)
  - [6.2 Operational Scenarios](#62-operational-scenarios)
  - [6.3 Acquisition Concept](#63-acquisition-concept)
  - [6.4 Deployment Concept](#64-deployment-concept)
  - [6.5 Support Concept](#65-support-concept)
  - [6.6 Retirement Concept](#66-retirement-concept)
- [7. Project Constraints](#7-project-constraints)
- [8. Open Questions, Decisions And Risks](#8-open-questions-decisions-and-risks)
- [9. Stakeholder Requirements Traceability](#9-stakeholder-requirements-traceability)
- [10. Approval](#10-approval)

## 0. Document Control

**Last Updated**: YYYY-MM-DD
**Status**: DRAFT
**Author**: Agent

| Field | Value |
|---|---|
| Project Name | `<Project Name>` |
| Document Name | Stakeholder Requirements Specification |
| Document ID | `<Document ID>` |
| Version | `0.1` |
| Upstream Document | BRS `<version>` |
| Project Profile | PERSONAL / TEAM / SME |
| Depth | Lite / Standard / Full |
| Status | `DRAFT` |
| Author | `<Author>` |
| Approver | `<Approver>` |

### Revision History

| Version | Date | Author | Changed Sections | Change Description | Status |
|---|---|---|---|---|---|
| 0.1 | `YYYY-MM-DD` | Agent | Initial document | Initial draft | DRAFT |

## 1. Introduction

**Last Updated**: YYYY-MM-DD
**Status**: DRAFT
**Author**: Agent

### 1.1 Stakeholder Purpose

`<What the stakeholders expect the product to achieve for them. Reference BRS business goals by ID.>`

### 1.2 Stakeholder Scope

`<Which stakeholders, user classes, and usage contexts this StRS covers, and which it excludes.>`

### 1.3 Overview

`<Summary of the structure and main contents of this StRS.>`

### 1.4 Definitions, Acronyms And Abbreviations

| Term | Type | Definition | Source Or Notes |
|---|---|---|---|
| `<Term>` | Term / Acronym / Abbreviation | `<Definition>` | `<Source>` |

### 1.5 Stakeholders

Reference BRS Section 1.5. Add only stakeholders discovered after the BRS.

| Stakeholder ID | Stakeholder | Role | Needs Summary | Decision Authority | Source |
|---|---|---|---|---|---|
| STK-GEN-001 | `<Stakeholder>` | `<Role>` | `<Needs>` | Approver / Reviewer / Informed / None | `BRS <version>, STK-GEN-001` |

## 2. References

| Reference ID | Document Or Source | Version/Date | Owner | Location | Relevant Content |
|---|---|---|---|---|---|
| REF-GEN-001 | Business Requirements Specification | `<Version>` | `<Owner>` | `01-BRS.md` | Business goals, rules, constraints |

## 3. Business Management Requirements

**Last Updated**: YYYY-MM-DD
**Status**: DRAFT
**Author**: Agent

By reference to the BRS. List the business goals that this StRS addresses.

| Business Goal ID | Goal Summary | Addressed By |
|---|---|---|
| `<BG ID>` | `<Summary>` | `<STR IDs>` |

## 4. Business Operational Requirements

**Last Updated**: YYYY-MM-DD
**Status**: DRAFT
**Author**: Agent

By reference to the BRS. List the business processes and rules that constrain stakeholder needs.

| BRS Item ID | Type | Summary | Relevant STR IDs |
|---|---|---|---|
| `<BP / BR / CON ID>` | Process / Rule / Constraint | `<Summary>` | `<STR IDs>` |

## 5. User Requirements

**Last Updated**: YYYY-MM-DD
**Status**: DRAFT
**Author**: Agent

### 5.1 User Classes

| User Class ID | User Class | Description | Goals | Technical Experience | Usage Frequency | Usage Context | Related Stakeholder |
|---|---|---|---|---|---|---|---|
| UCL-GEN-001 | `<User Class>` | `<Description>` | `<Goals>` | Low / Medium / High | `<Frequency>` | `<Device, place, conditions>` | `<STK ID>` |

### 5.2 Stakeholder Requirements

#### 5.2.1 Stakeholder Requirement Catalogue

| Requirement ID | Statement | Stakeholder | Parent | Priority | Validation Criterion | Status |
|---|---|---|---|---|---|---|
| STR-GEN-001 | The `<stakeholder>` shall be able to `<capability>`. | `<STK or UCL ID>` | `<BG ID>` | Must / Should / Could / Won't | `<Criterion>` | DRAFT |

#### 5.2.2 Stakeholder Requirement Details

#### STR-GEN-001 Requirement Title

- **Statement**: The `<stakeholder>` shall be able to `<capability>`.
- **Stakeholder**: `<STK or UCL ID>`
- **Priority**: Must / Should / Could / Won't
- **Status**: DRAFT
- **Source**: `<Source reference>`
- **Rationale**: `<Why the stakeholder needs this>`
- **Parent**: `<BG ID(s), or None with reason>`
- **Validation Criterion**: `<How the stakeholder confirms the need is met>`
- **Notes**: None

### 5.3 Stakeholder Quality Expectations

Expectations stated by stakeholders. They become measurable non-functional requirements in the SRS.

| Expectation ID | Quality Area | Stakeholder Expectation | Target If Known | Stakeholder | Source |
|---|---|---|---|---|---|
| STR-QUAL-001 | Performance Efficiency / Reliability / Security / Interaction Capability / Compatibility / Maintainability / Flexibility / Safety | `<Expectation in the stakeholder's words>` | `<Target or [TBD]>` | `<STK or UCL ID>` | `<Source>` |

The quality areas follow the ISO/IEC 25010:2023 product quality characteristics.

## 6. Detailed Life-Cycle Concepts

**Last Updated**: YYYY-MM-DD
**Status**: DRAFT
**Author**: Agent

### 6.1 Operational Concept

`<How, where, and on which devices stakeholders will use the product; external services involved; connectivity conditions.>`

| Aspect | Description | Source |
|---|---|---|
| Platforms And Devices | `<Web, mobile, desktop, kiosk>` | `<Source>` |
| Usage Environment | `<Office, field, home, offline>` | `<Source>` |
| External Services | `<Payments, email, maps, identity provider>` | `<Source>` |

### 6.2 Operational Scenarios

#### OPS-GEN-001 Scenario Name

| Attribute | Value |
|---|---|
| Actors | `<UCL or STK IDs>` |
| Trigger | `<Trigger>` |
| Preconditions | `<Preconditions>` |
| Related Stakeholder Requirements | `<STR IDs>` |

##### Main Sequence

1. `<Stakeholder action>`
2. `<Expected outcome>`

##### Exception Sequences

- **At Step `<Number>`**: `<What goes wrong>` -> `<What the stakeholder expects to happen>`

### 6.3 Acquisition Concept

`<Build, buy, outsource, or combine; stakeholder expectations about the acquisition.>`

### 6.4 Deployment Concept

`<How users obtain and start using the product: app store, website, internal rollout, data import.>`

### 6.5 Support Concept

`<Onboarding, help channels, support hours, maintenance responsibilities.>`

### 6.6 Retirement Concept

`<Data retention expectations, account closure, data export, product end of life.>`

## 7. Project Constraints

By reference to BRS Section 7. Add only constraints discovered during stakeholder elicitation.

| Constraint ID | Category | Constraint | Source | Status |
|---|---|---|---|---|
| CON-PRJ-001 | `<Category>` | `<Constraint>` | `BRS <version>, CON-PRJ-001` | DRAFT |

## 8. Open Questions, Decisions And Risks

### 8.1 Open Questions

| Question ID | Question | Context | Affected Sections | Owner | Due Date | Status | Resolution |
|---|---|---|---|---|---|---|---|
| OQ-GEN-001 | `<Question>` | `<Context>` | `<Sections or IDs>` | `<Owner>` | `YYYY-MM-DD` | REVIEW | |

### 8.2 Decisions

| Decision ID | Decision | Date | Decision Owner | Rationale | Affected Items | Status |
|---|---|---|---|---|---|---|
| DEC-GEN-001 | `<Decision>` | `YYYY-MM-DD` | `<Owner>` | `<Rationale>` | `<IDs>` | REVIEW |

### 8.3 Stakeholder Risks

| Risk ID | Risk | Cause | Impact | Probability | Severity | Mitigation | Owner | Status |
|---|---|---|---|---|---|---|---|---|
| RISK-GEN-001 | `<Risk>` | `<Cause>` | `<Impact>` | Low / Medium / High | Low / Medium / High | `<Mitigation>` | `<Owner>` | DRAFT |

## 9. Stakeholder Requirements Traceability

| STR ID | Parent BG | Stakeholder | Operational Scenarios | Downstream SRS Items | Status |
|---|---|---|---|---|---|
| STR-GEN-001 | `<BG ID>` | `<STK or UCL ID>` | `<OPS IDs>` | `<F / FR / NFR IDs, filled during SRS work>` | DRAFT |

## 10. Approval

**Last Updated**: YYYY-MM-DD
**Status**: REVIEW
**Author**: Human

| Role | Name | Decision | Date | Comments |
|---|---|---|---|---|
| Approver | `<Name>` | APPROVED / Changes Requested / Rejected | `YYYY-MM-DD` | |

Only a human approver can authorize `APPROVED` status.
