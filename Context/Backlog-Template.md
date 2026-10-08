---
title: "<Project Name> - Product Backlog"
document_type: backlog
backlog_schema_version: "1.0"
project: "<Project Name>"
output_language: en
upstream: []
version: "0.1"
status: DRAFT
created: YYYY-MM-DD
last_updated: YYYY-MM-DD
tags:
  - backlog
---

# Product Backlog

Optional delivery document. Based on the Scrum Guide 2020 (Product Backlog, Product Goal, refinement, Definition of Done) and the IIBA BABOK v3 Backlog Management and User Stories techniques. No ISO standard defines a backlog format. Rules: `Agent/04-Delivery/01-Delivery Workflow.md`.

This backlog defines **what** will be delivered and in which order. It does not track sprints or work progress. `Status` is the approval state of the item definition. Estimates and dates appear only when the user provided or confirmed them.

## Table Of Contents

- [0. Document Control](#0-document-control)
- [1. Product Goal](#1-product-goal)
- [2. Backlog Conventions](#2-backlog-conventions)
- [3. Definition Of Done](#3-definition-of-done)
- [4. Epics](#4-epics)
- [5. Ordered Backlog](#5-ordered-backlog)
- [6. Story Details](#6-story-details)
- [7. Open Questions And Decisions](#7-open-questions-and-decisions)

## 0. Document Control

| Field | Value |
|---|---|
| Project Name | `<Project Name>` |
| Document Name | Product Backlog |
| Version | `0.1` |
| Upstream Documents | `<PRD version, SRS version>` |
| Owner | `<Product Owner or approver>` |
| Status | `DRAFT` |

| Version | Date | Author | Change Description | Status |
|---|---|---|---|---|
| 0.1 | `YYYY-MM-DD` | Agent | Initial backlog | DRAFT |

## 1. Product Goal

**Last Updated**: YYYY-MM-DD
**Status**: DRAFT
**Author**: Agent

`<The future state of the product that the backlog works toward, confirmed by the user. Reference BG IDs.>`

## 2. Backlog Conventions

| Convention | Value | Source |
|---|---|---|
| Estimation Unit | Story Points / Ideal Days / T-Shirt Sizes / No Estimates | `<Source>` |
| Estimates Provided By | `<Name or role>` | `<Source>` |
| Ordering Criteria | `<Value, risk, dependencies, deadlines>` | `<Source>` |

## 3. Definition Of Done

**Last Updated**: YYYY-MM-DD
**Status**: DRAFT
**Author**: Agent

- [ ] `<Quality condition confirmed by the user, for example: all acceptance criteria pass>`

## 4. Epics

**Last Updated**: YYYY-MM-DD
**Status**: DRAFT
**Author**: Agent

| Epic ID | Epic | Feature | Goal | Priority | Status |
|---|---|---|---|---|---|
| EP-GEN-001 | `<Epic name>` | `<F ID>` | `<BG ID>` | Must / Should / Could / Won't | DRAFT |

## 5. Ordered Backlog

**Last Updated**: YYYY-MM-DD
**Status**: DRAFT
**Author**: Agent

| Order | Item ID | Title | Epic | Feature | Requirements (FR) | Needs (STR) | Priority | Estimate | Target Release | Status |
|---:|---|---|---|---|---|---|---|---|---|---|
| 1 | US-GEN-001 | `<Story title>` | `<EP ID>` | `<F ID>` | `<FR IDs or None>` | `<STR IDs or None>` | Must / Should / Could / Won't | `<Value from user or empty>` | `<RLS ID or [TBD]>` | DRAFT |

Items owned by the PRD are referenced here by ID and not restated.

## 6. Story Details

**Last Updated**: YYYY-MM-DD
**Status**: DRAFT
**Author**: Agent

Only for stories owned by this backlog (when the PRD has no user stories).

#### US-GEN-001 Story Title

- **Story**: As a `<persona>`, I want `<capability>`, so that `<benefit>`.
- **Persona**: `<UCL ID>`
- **Feature**: `<F ID>`
- **Requirements**: `<FR IDs>`
- **Priority**: Must / Should / Could / Won't
- **Status**: DRAFT
- **Source**: `<Source>`
- **Acceptance Criteria**:
  1. Given `<context>`, when `<action>`, then `<observable result>`.
- **Notes**: None

## 7. Open Questions And Decisions

| ID | Type | Description | Owner | Status | Resolution |
|---|---|---|---|---|---|
| OQ-GEN-001 | Open Question | `<Question>` | `<Owner>` | REVIEW | |
| DEC-GEN-001 | Decision | `<Decision>` | `<Owner>` | REVIEW | |
