---
title: "<Project Name> - Release Plan"
document_type: release_plan
release_plan_schema_version: "1.0"
project: "<Project Name>"
output_language: en
upstream: []
version: "0.1"
status: DRAFT
created: YYYY-MM-DD
last_updated: YYYY-MM-DD
tags:
  - release-plan
---

# Release Plan

Optional delivery document. Structure based on ISO/IEC/IEEE 15289 generic plan content (scope, schedule, resources, risks, change history, approval), ISO/IEC 29110 project planning concepts (milestones, delivery), and MoSCoW timeboxing. No ISO standard defines a release plan format. Rules: `Agent/04-Delivery/01-Delivery Workflow.md`.

**All dates, cadence, and capacity values come from the user.** Unknown values stay `[TBD]` with an Open Question.

## Table Of Contents

- [0. Document Control](#0-document-control)
- [1. Planning Basis](#1-planning-basis)
- [2. Release Overview](#2-release-overview)
- [3. Release Details](#3-release-details)
- [4. Milestones](#4-milestones)
- [5. Dependencies](#5-dependencies)
- [6. Release Risks](#6-release-risks)
- [7. Open Questions And Decisions](#7-open-questions-and-decisions)
- [8. Approval](#8-approval)

## 0. Document Control

| Field | Value |
|---|---|
| Project Name | `<Project Name>` |
| Document Name | Release Plan |
| Version | `0.1` |
| Upstream Documents | `<PRD version, SRS version, Backlog version>` |
| Owner | `<Product Owner or approver>` |
| Status | `DRAFT` |

| Version | Date | Author | Change Description | Status |
|---|---|---|---|---|
| 0.1 | `YYYY-MM-DD` | Agent | Initial plan | DRAFT |

## 1. Planning Basis

**Last Updated**: YYYY-MM-DD
**Status**: DRAFT
**Author**: Agent

| Item | Value | Source |
|---|---|---|
| Number Of Releases Or Cadence | `<Value from user or [TBD]>` | `<Source>` |
| Fixed Deadlines | `<Dates from user or None>` | `<Source>` |
| Team Capacity | `<Value from user, or Not Used>` | `<Source>` |
| Estimation Unit | `<From backlog, or No Estimates>` | `<Source>` |

## 2. Release Overview

**Last Updated**: YYYY-MM-DD
**Status**: DRAFT
**Author**: Agent

| Release ID | Release Name | Goal | Target Date | Scope (Features) | Status |
|---|---|---|---|---|---|
| RLS-GEN-001 | `<MVP or Release 1>` | `<Release goal>` | `<Date from user or [TBD]>` | `<F IDs>` | DRAFT |

## 3. Release Details

**Last Updated**: YYYY-MM-DD
**Status**: DRAFT
**Author**: Agent

#### RLS-GEN-001 Release Name

| Attribute | Value |
|---|---|
| Goal | `<Release goal linked to BG IDs>` |
| Target Date | `<Date from user or [TBD]>` |
| Features | `<F IDs>` |
| Stories | `<US IDs>` |
| Release Criteria | `<RC IDs from the PRD, or defined below>` |
| Planned Size Versus Capacity | `<Only when the user provided estimates and capacity>` |
| Status | DRAFT |

| Criterion ID | Criterion | Measure | Category | Source | Status |
|---|---|---|---|---|---|
| RC-GEN-001 | `<Criterion, when the PRD has none>` | `<Measurable condition>` | Functionality / Quality / Operations / Support / Compliance | `<Source>` | DRAFT |

## 4. Milestones

**Last Updated**: YYYY-MM-DD
**Status**: DRAFT
**Author**: Agent

| Milestone ID | Milestone | Release | Date | Deliverable | Source | Status |
|---|---|---|---|---|---|---|
| MS-GEN-001 | `<Milestone>` | `<RLS ID>` | `<Date from user or [TBD]>` | `<Deliverable>` | `<Source>` | DRAFT |

## 5. Dependencies

| Dependency ID | Dependency | Type | Affects | Owner | Status |
|---|---|---|---|---|---|
| DEP-GEN-001 | `<Dependency>` | Internal / External | `<RLS, F, or US IDs>` | `<Owner>` | DRAFT |

## 6. Release Risks

| Risk ID | Risk | Affects | Probability | Severity | Mitigation | Owner | Status |
|---|---|---|---|---|---|---|---|
| RISK-GEN-001 | `<Risk>` | `<RLS IDs>` | Low / Medium / High | Low / Medium / High | `<Mitigation>` | `<Owner>` | DRAFT |

## 7. Open Questions And Decisions

| ID | Type | Description | Owner | Status | Resolution |
|---|---|---|---|---|---|
| OQ-GEN-001 | Open Question | `<Question>` | `<Owner>` | REVIEW | |
| DEC-GEN-001 | Decision | `<Decision>` | `<Owner>` | REVIEW | |

## 8. Approval

**Last Updated**: YYYY-MM-DD
**Status**: REVIEW
**Author**: Human

| Role | Name | Decision | Date | Comments |
|---|---|---|---|---|
| Approver | `<Name>` | APPROVED / Changes Requested / Rejected | `YYYY-MM-DD` | |

Only a human approver can authorize `APPROVED` status.
