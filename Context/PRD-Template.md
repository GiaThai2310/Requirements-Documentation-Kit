---
title: "<Project Name> - Product Requirements Document"
aliases:
  - "<Project Name> PRD"
document_type: prd
prd_schema_version: "1.0"
project: "<Project Name>"
project_profile: PERSONAL | TEAM | SME
prd_variant: Lean | Standard
prd_scope: Whole Product | Release <name> | Feature <name>
output_language: en
role_in_layer: Primary | Secondary (references StRS)
upstream: []
version: "0.1"
status: DRAFT
authors:
  - "<Author>"
reviewers: []
approvers: []
created: YYYY-MM-DD
last_updated: YYYY-MM-DD
tags:
  - prd
  - requirements
---

# Product Requirements Document

This template follows widely published product management practice (SVPG, Aha!, Atlassian), ISO/IEC/IEEE 15289 generic specification content, and ISO/IEC 25010:2023 for quality requirements. No ISO or IEEE standard defines a PRD. Each section is marked with the variants that use it; tailor with `Agent/02-Discovery/05-PRD Output Contract.md`.

## Table Of Contents

- [0. Document Control And Change History](#0-document-control-and-change-history)
- [1. Overview](#1-overview)
- [2. Problem Statement](#2-problem-statement)
- [3. Goals And Success Metrics](#3-goals-and-success-metrics)
- [4. Non-Goals And Out Of Scope](#4-non-goals-and-out-of-scope)
- [5. Target Users And Personas](#5-target-users-and-personas)
- [6. Key Scenarios](#6-key-scenarios)
- [7. Features](#7-features)
  - [7.1 Feature List](#71-feature-list)
  - [7.2 Feature Details](#72-feature-details)
- [8. User Stories](#8-user-stories)
- [9. Product Quality Requirements](#9-product-quality-requirements)
- [10. UX And Design References](#10-ux-and-design-references)
- [11. Assumptions, Constraints And Dependencies](#11-assumptions-constraints-and-dependencies)
- [12. Release Criteria](#12-release-criteria)
- [13. Milestones](#13-milestones)
- [14. Risks, Open Questions And Decisions](#14-risks-open-questions-and-decisions)
- [15. Approval](#15-approval)

## 0. Document Control And Change History

Variants: Lean (optional), Standard (required).

| Field | Value |
|---|---|
| Product Name | `<Product Name>` |
| Document Name | Product Requirements Document |
| Document ID | `<Document ID>` |
| Version | `0.1` |
| Variant | Lean / Standard |
| PRD Scope | Whole Product / Release `<name>` / Feature `<name>` |
| Role In Layer | Primary / Secondary (references StRS `<version>`) |
| Product Owner | `<Name or role>` |
| Status | `DRAFT` |
| Approver | `<Approver>` |

| Version | Date | Author | Changed Sections | Change Description | Status |
|---|---|---|---|---|---|
| 0.1 | `YYYY-MM-DD` | Agent | Initial document | Initial draft | DRAFT |

## 1. Overview

**Last Updated**: YYYY-MM-DD
**Status**: DRAFT
**Author**: Agent

Variants: Lean, Standard.

`<What the product or feature is, who it is for, the current status, the team, and the target release if known.>`

## 2. Problem Statement

**Last Updated**: YYYY-MM-DD
**Status**: DRAFT
**Author**: Agent

Variants: Lean, Standard.

`<The user or business problem, who has it, how it is handled today, and why it matters. Reference BRS or BRD IDs when they exist. Do not describe the solution.>`

## 3. Goals And Success Metrics

**Last Updated**: YYYY-MM-DD
**Status**: DRAFT
**Author**: Agent

Variants: Lean, Standard. Reference `BG` and `SC` IDs from the BRS or BRD when they exist.

| Goal ID | Goal | Metric | Target | Evaluation Time | Source | Status |
|---|---|---|---|---|---|---|
| BG-GEN-001 | `<Goal>` | `<SC ID or metric>` | `<Target>` | `<Date or period>` | `<Source>` | DRAFT |

## 4. Non-Goals And Out Of Scope

**Last Updated**: YYYY-MM-DD
**Status**: DRAFT
**Author**: Agent

Variants: Lean, Standard.

- `<What this product or release will explicitly not do, and why>`

## 5. Target Users And Personas

**Last Updated**: YYYY-MM-DD
**Status**: DRAFT
**Author**: Agent

Variants: Lean, Standard. Reference StRS `UCL` IDs when a primary StRS exists.

| Persona ID | Persona | Description | Goals | Pain Points | Context Of Use | Technical Experience | Source |
|---|---|---|---|---|---|---|---|
| UCL-GEN-001 | `<Persona name>` | `<Description>` | `<Goals>` | `<Pain points>` | `<Device, place, conditions>` | Low / Medium / High | `<Source>` |

Key needs (when no StRS exists):

| Need ID | Statement | Persona | Parent | Priority | Source | Status |
|---|---|---|---|---|---|---|
| STR-GEN-001 | The `<persona>` shall be able to `<capability>`. | `<UCL ID>` | `<BG ID>` | Must / Should / Could / Won't | `<Source>` | DRAFT |

## 6. Key Scenarios

**Last Updated**: YYYY-MM-DD
**Status**: DRAFT
**Author**: Agent

Variants: Lean, Standard. Reference StRS `OPS` IDs when a primary StRS exists.

| Scenario ID | Scenario | Persona | Trigger | Steps Summary | Outcome | Related Needs |
|---|---|---|---|---|---|---|
| OPS-GEN-001 | `<Scenario>` | `<UCL ID>` | `<Trigger>` | `<Short sequence>` | `<Outcome>` | `<STR IDs>` |

## 7. Features

**Last Updated**: YYYY-MM-DD
**Status**: DRAFT
**Author**: Agent

### 7.1 Feature List

Variants: Lean, Standard.

| Feature ID | Feature | Description | Personas | Goals | Needs (STR) | Priority | Target Release | Status |
|---|---|---|---|---|---|---|---|---|
| F-GEN-001 | `<Feature>` | `<What the product enables>` | `<UCL IDs>` | `<BG IDs>` | `<STR IDs>` | Must / Should / Could / Won't | `<RLS ID or [TBD]>` | DRAFT |

### 7.2 Feature Details

Variants: Lean (optional), Standard (required).

#### F-GEN-001 Feature Name

| Attribute | Value |
|---|---|
| Description | `<Description>` |
| Personas | `<UCL IDs>` |
| Goals | `<BG IDs>` |
| Needs | `<STR IDs>` |
| User Stories | `<US IDs>` |
| Business Rules | `<BR IDs or None>` |
| Priority | Must / Should / Could / Won't |
| Status | DRAFT |

## 8. User Stories

**Last Updated**: YYYY-MM-DD
**Status**: DRAFT
**Author**: Agent

Variants: Standard only.

#### US-GEN-001 Story Title

- **Story**: As a `<persona>`, I want `<capability>`, so that `<benefit>`.
- **Persona**: `<UCL ID>`
- **Feature**: `<F ID>`
- **Need**: `<STR ID or None>`
- **Priority**: Must / Should / Could / Won't
- **Status**: DRAFT
- **Source**: `<Source>`
- **Acceptance Criteria**:
  1. Given `<context>`, when `<action>`, then `<observable result>`.
- **Notes**: None

## 9. Product Quality Requirements

**Last Updated**: YYYY-MM-DD
**Status**: DRAFT
**Author**: Agent

Variants: Lean (conditional), Standard (required). Classified by ISO/IEC 25010:2023 characteristic.

| ID | ISO/IEC 25010 Characteristic | Expectation | Target | Persona Or Stakeholder | Source | Status |
|---|---|---|---|---|---|---|
| STR-QUAL-001 | Performance Efficiency / Reliability / Security / Interaction Capability / Compatibility / Maintainability / Flexibility / Safety | `<Expectation>` | `<Target or [TBD]>` | `<UCL or STK ID>` | `<Source>` | DRAFT |

## 10. UX And Design References

**Last Updated**: YYYY-MM-DD
**Status**: DRAFT
**Author**: Agent

Variants: Lean (optional), Standard (conditional).

| Reference | Type | Related Features | Location |
|---|---|---|---|
| `<Wireframe, mockup, prototype, design system>` | Wireframe / Mockup / Prototype / Other | `<F IDs>` | `<Link or path>` |

## 11. Assumptions, Constraints And Dependencies

**Last Updated**: YYYY-MM-DD
**Status**: DRAFT
**Author**: Agent

Variants: Lean, Standard.

| ID | Type | Statement | Source | Impact If False Or Unavailable | Status |
|---|---|---|---|---|---|
| ASM-GEN-001 | Assumption | `<Assumption accepted by the user>` | `<Source>` | `<Impact>` | DRAFT |
| CON-PRJ-001 | Constraint | `<Constraint>` | `<Source>` | `<Impact>` | DRAFT |
| DEP-GEN-001 | Dependency | `<Dependency>` | `<Source>` | `<Impact>` | DRAFT |

## 12. Release Criteria

**Last Updated**: YYYY-MM-DD
**Status**: DRAFT
**Author**: Agent

Variants: Standard only.

| Criterion ID | Criterion | Measure | Category | Source | Status |
|---|---|---|---|---|---|
| RC-GEN-001 | `<Criterion>` | `<Measurable condition>` | Functionality / Quality / Operations / Support / Compliance | `<Source>` | DRAFT |

## 13. Milestones

**Last Updated**: YYYY-MM-DD
**Status**: DRAFT
**Author**: Agent

Variants: Standard (conditional). Dates come only from the user.

| Milestone ID | Milestone | Date | Deliverable | Source | Status |
|---|---|---|---|---|---|
| MS-GEN-001 | `<Milestone>` | `<Date from user or [TBD]>` | `<Deliverable>` | `<Source>` | DRAFT |

## 14. Risks, Open Questions And Decisions

**Last Updated**: YYYY-MM-DD
**Status**: DRAFT
**Author**: Agent

Variants: Lean, Standard.

### 14.1 Open Questions

| Question ID | Question | Context | Affected Sections | Owner | Due Date | Status | Resolution |
|---|---|---|---|---|---|---|---|
| OQ-GEN-001 | `<Question>` | `<Context>` | `<Sections or IDs>` | `<Owner>` | `YYYY-MM-DD` | REVIEW | |

### 14.2 Decisions

| Decision ID | Decision | Date | Decision Owner | Rationale | Affected Items | Status |
|---|---|---|---|---|---|---|
| DEC-GEN-001 | `<Decision>` | `YYYY-MM-DD` | `<Owner>` | `<Rationale>` | `<IDs>` | REVIEW |

### 14.3 Product Risks

| Risk ID | Risk | Cause | Impact | Probability | Severity | Mitigation | Owner | Status |
|---|---|---|---|---|---|---|---|---|
| RISK-GEN-001 | `<Risk>` | `<Cause>` | `<Impact>` | Low / Medium / High | Low / Medium / High | `<Mitigation>` | `<Owner>` | DRAFT |

## 15. Approval

**Last Updated**: YYYY-MM-DD
**Status**: REVIEW
**Author**: Human

Variants: Lean (optional; required for SME), Standard (conditional; required for SME).

| Role | Name | Decision | Date | Comments |
|---|---|---|---|---|
| Product Owner Or Approver | `<Name>` | APPROVED / Changes Requested / Rejected | `YYYY-MM-DD` | |

Only a human approver can authorize `APPROVED` status.
