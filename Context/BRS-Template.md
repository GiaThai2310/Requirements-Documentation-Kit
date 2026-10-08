---
title: "<Project Name> - Business Requirements Specification"
aliases:
  - "<Project Name> BRS"
document_type: brs
brs_schema_version: "1.0"
project: "<Project Name>"
project_profile: PERSONAL | TEAM | SME
depth: Lite | Standard | Full
output_language: en
version: "0.1"
status: DRAFT
authors:
  - "<Author>"
reviewers: []
approvers: []
created: YYYY-MM-DD
last_updated: YYYY-MM-DD
tags:
  - brs
  - requirements
---

# Business Requirements Specification

This template follows the Business Requirements Specification (BRS) content described in ISO/IEC/IEEE 29148:2018. Section 4.7 (Privacy And Compliance Considerations) and Sections 8-9 are kit additions. Tailor sections by depth using `Agent/02-Discovery/03-BRS-StRS Output Contract.md`.

## Table Of Contents

- [0. Document Control](#0-document-control)
- [1. Introduction](#1-introduction)
  - [1.1 Business Purpose](#11-business-purpose)
  - [1.2 Business Scope](#12-business-scope)
  - [1.3 Business Overview](#13-business-overview)
  - [1.4 Definitions, Acronyms And Abbreviations](#14-definitions-acronyms-and-abbreviations)
  - [1.5 Major Stakeholders](#15-major-stakeholders)
- [2. References](#2-references)
- [3. Business Management Requirements](#3-business-management-requirements)
  - [3.1 Business Environment](#31-business-environment)
  - [3.2 Mission, Goals And Objectives](#32-mission-goals-and-objectives)
  - [3.3 Business Model](#33-business-model)
  - [3.4 Information Environment](#34-information-environment)
- [4. Business Operational Requirements](#4-business-operational-requirements)
  - [4.1 Business Processes](#41-business-processes)
  - [4.2 Business Operational Policies And Rules](#42-business-operational-policies-and-rules)
  - [4.3 Business Operational Constraints](#43-business-operational-constraints)
  - [4.4 Business Operational Modes](#44-business-operational-modes)
  - [4.5 Business Operational Quality](#45-business-operational-quality)
  - [4.6 Business Structure](#46-business-structure)
  - [4.7 Privacy And Compliance Considerations](#47-privacy-and-compliance-considerations)
- [5. Preliminary Operational Concept](#5-preliminary-operational-concept)
  - [5.1 Preliminary Operational Concept](#51-preliminary-operational-concept)
  - [5.2 Preliminary Operational Scenarios](#52-preliminary-operational-scenarios)
- [6. Preliminary Life-Cycle Concepts](#6-preliminary-life-cycle-concepts)
- [7. Project Constraints](#7-project-constraints)
- [8. Open Questions, Decisions And Risks](#8-open-questions-decisions-and-risks)
- [9. Approval](#9-approval)

## 0. Document Control

**Last Updated**: YYYY-MM-DD
**Status**: DRAFT
**Author**: Agent

| Field | Value |
|---|---|
| Project Name | `<Project Name>` |
| Document Name | Business Requirements Specification |
| Document ID | `<Document ID>` |
| Version | `0.1` |
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

### 1.1 Business Purpose

`<Why the business or person needs this product now, and the cost of not building it.>`

### 1.2 Business Scope

#### 1.2.1 In Scope

- `<Business capability or process included in the first release>`

#### 1.2.2 Out Of Scope

- `<Business capability or process explicitly excluded>`

#### 1.2.3 Future Scope

- `<Capability considered for later releases, not committed>`

### 1.3 Business Overview

`<Short description of the organization or person, its activity, and how the product fits into it.>`

### 1.4 Definitions, Acronyms And Abbreviations

| Term | Type | Definition | Source Or Notes |
|---|---|---|---|
| `<Term>` | Term / Acronym / Abbreviation | `<Definition>` | `<Source>` |

### 1.5 Major Stakeholders

| Stakeholder ID | Stakeholder | Role | Interests | Decision Authority | Source | Status |
|---|---|---|---|---|---|---|
| STK-GEN-001 | `<Stakeholder>` | `<Role>` | `<Interests>` | Approver / Reviewer / Informed / None | `<Source>` | DRAFT |

## 2. References

| Reference ID | Document Or Source | Version/Date | Owner | Location | Relevant Content |
|---|---|---|---|---|---|
| REF-GEN-001 | `<Reference Name>` | `<Version or Date>` | `<Owner>` | `<Link or Path>` | `<Relevant sections>` |

## 3. Business Management Requirements

**Last Updated**: YYYY-MM-DD
**Status**: DRAFT
**Author**: Agent

### 3.1 Business Environment

`<Market, customer segment, competitors and alternatives (including manual work), external factors such as trends, partners, or regulation.>`

| Alternative Or Competitor | Description | Strengths | Weaknesses | Differentiation Of This Product | Source |
|---|---|---|---|---|---|
| `<Name>` | `<Description>` | `<Strengths>` | `<Weaknesses>` | `<Differentiation>` | `<Source>` |

### 3.2 Mission, Goals And Objectives

#### 3.2.1 Problem Statement

`<The current problem, who is affected, how it is handled today, and its impact. Do not describe the solution.>`

#### 3.2.2 Business Goals

| Business Goal ID | Goal | Owner | Expected Outcome | Priority | Source | Status |
|---|---|---|---|---|---|---|
| BG-GEN-001 | `<Business Goal>` | `<Owner>` | `<Outcome>` | Must / Should / Could / Won't | `<Source>` | DRAFT |

#### 3.2.3 Success Criteria

| Success Criterion ID | Related Goal | Metric | Target | Measurement Method | Evaluation Time | Owner |
|---|---|---|---|---|---|---|
| SC-GEN-001 | `<BG ID>` | `<Metric>` | `<Target>` | `<Method>` | `<Date or period>` | `<Owner>` |

### 3.3 Business Model

`<How the product creates, delivers, and captures value: customer segments, value proposition, channels, revenue streams or cost savings, key cost drivers.>`

| Element | Description | Source |
|---|---|---|
| Customer Segments | `<Segments>` | `<Source>` |
| Value Proposition | `<Value>` | `<Source>` |
| Channels | `<Channels>` | `<Source>` |
| Revenue Streams Or Savings | `<Revenue or savings>` | `<Source>` |
| Key Costs | `<Costs>` | `<Source>` |

### 3.4 Information Environment

| System Or Data Source | Owner | Current Use | Relationship To Product | Source |
|---|---|---|---|---|
| `<Tool, system, spreadsheet, or data source>` | `<Owner>` | `<Use>` | Replace / Integrate / Coexist / Retire | `<Source>` |

## 4. Business Operational Requirements

**Last Updated**: YYYY-MM-DD
**Status**: DRAFT
**Author**: Agent

### 4.1 Business Processes

#### 4.1.1 Current Process

| Process ID | Step | Participant | Action | Tools Or Inputs | Output | Issue Or Limitation |
|---|---:|---|---|---|---|---|
| BP-GEN-001 | 1 | `<Participant>` | `<Action>` | `<Input>` | `<Output>` | `<Issue>` |

#### 4.1.2 Target Process

| Process ID | Step | Participant | Action | Business Rule | Output | Improvement |
|---|---:|---|---|---|---|---|
| BP-GEN-002 | 1 | `<Participant>` | `<Action>` | `<BR ID>` | `<Output>` | `<Improvement>` |

### 4.2 Business Operational Policies And Rules

| Rule ID | Rule Name | Category | Rule Statement | Source | Priority | Status |
|---|---|---|---|---|---|---|
| BR-GEN-001 | `<Rule Name>` | Pricing / Eligibility / Approval / Timing / Limit / Policy / Compliance | `<Rule Statement>` | `<Source>` | Must / Should / Could / Won't | DRAFT |

### 4.3 Business Operational Constraints

| Constraint ID | Constraint | Source | Rationale | Status |
|---|---|---|---|---|
| CON-BUS-001 | `<Operating hours, regions, currencies, languages, seasonal peaks>` | `<Source>` | `<Reason>` | DRAFT |

### 4.4 Business Operational Modes

| Mode | Description | Trigger | Business Behavior |
|---|---|---|---|
| `<Normal / Peak / Maintenance / Emergency>` | `<Description>` | `<Trigger>` | `<Expected business behavior>` |

### 4.5 Business Operational Quality

| Quality Expectation | Business Need | Target | Source |
|---|---|---|---|
| `<Availability during business hours, data accuracy, response to customers>` | `<Need>` | `<Target or [TBD]>` | `<Source>` |

### 4.6 Business Structure

| Unit Or Role | Responsibility In The Process | Interaction With Product |
|---|---|---|
| `<Department, role, or partner>` | `<Responsibility>` | `<Interaction>` |

### 4.7 Privacy And Compliance Considerations

Kit addition based on ISO/IEC 29100 privacy principles. The Agent records questions and facts; it does not decide which laws apply.

| Item | Answer | Source | Status |
|---|---|---|---|
| Personal Data Processed | `<Kinds of personal data, or None>` | `<Source>` | DRAFT |
| Data Subjects | `<Whose data>` | `<Source>` | DRAFT |
| Jurisdictions And User Locations | `<Countries or regions>` | `<Source>` | DRAFT |
| Regulated Sector | `<Finance / Health / Education / Government / None>` | `<Source>` | DRAFT |
| Candidate Obligations To Confirm | `<Laws or standards to confirm with an advisor> [REVIEW]` | `<Source>` | REVIEW |

## 5. Preliminary Operational Concept

**Last Updated**: YYYY-MM-DD
**Status**: DRAFT
**Author**: Agent

### 5.1 Preliminary Operational Concept

`<A short narrative of how the product will be used in the business once it exists.>`

### 5.2 Preliminary Operational Scenarios

| Scenario ID | Scenario | Actors | Trigger | Outcome | Related Goals |
|---|---|---|---|---|---|
| OPS-GEN-001 | `<Scenario name>` | `<Stakeholder IDs>` | `<Trigger>` | `<Outcome>` | `<BG IDs>` |

## 6. Preliminary Life-Cycle Concepts

| Concept | Description | Owner | Source |
|---|---|---|---|
| Acquisition | `<Build in-house, outsource, buy, or combine>` | `<Owner>` | `<Source>` |
| Deployment | `<How the product reaches users>` | `<Owner>` | `<Source>` |
| Support | `<Who operates, supports, and maintains the product>` | `<Owner>` | `<Source>` |
| Retirement | `<Planned end of life, data hand-over, or None>` | `<Owner>` | `<Source>` |

## 7. Project Constraints

| Constraint ID | Category | Constraint | Source | Status |
|---|---|---|---|---|
| CON-PRJ-001 | Budget / Schedule / Team / Skills / Technology / Other | `<Constraint>` | `<Source>` | DRAFT |

## 8. Open Questions, Decisions And Risks

### 8.1 Open Questions

| Question ID | Question | Context | Affected Sections | Owner | Due Date | Status | Resolution |
|---|---|---|---|---|---|---|---|
| OQ-GEN-001 | `<Question>` | `<Context>` | `<Sections or IDs>` | `<Owner>` | `YYYY-MM-DD` | REVIEW | |

### 8.2 Decisions

| Decision ID | Decision | Date | Decision Owner | Rationale | Affected Items | Status |
|---|---|---|---|---|---|---|
| DEC-GEN-001 | `<Decision>` | `YYYY-MM-DD` | `<Owner>` | `<Rationale>` | `<IDs>` | REVIEW |

### 8.3 Business Risks

| Risk ID | Risk | Cause | Impact | Probability | Severity | Mitigation | Owner | Status |
|---|---|---|---|---|---|---|---|---|
| RISK-GEN-001 | `<Risk>` | `<Cause>` | `<Impact>` | Low / Medium / High | Low / Medium / High | `<Mitigation>` | `<Owner>` | DRAFT |

## 9. Approval

**Last Updated**: YYYY-MM-DD
**Status**: REVIEW
**Author**: Human

| Role | Name | Decision | Date | Comments |
|---|---|---|---|---|
| Approver | `<Name>` | APPROVED / Changes Requested / Rejected | `YYYY-MM-DD` | |

Only a human approver can authorize `APPROVED` status.
