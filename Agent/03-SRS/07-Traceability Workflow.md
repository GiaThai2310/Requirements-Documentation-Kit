# 07 - Traceability Workflow

## 1. Purpose

Traceability links each requirement backward to its source and forward to verification. It is the mechanism that prevents orphan requirements, uncontrolled scope growth, and unverifiable SRS content.

ISO/IEC/IEEE 29148 also expects traceability between requirement levels. The kit maintains this vertical chain across whichever documents are in the Document Set:

```text
BG (BRS or BRD) -> STR (StRS, or PRD when no StRS) -> F / US (PRD) -> F / UC / FR / NFR (SRS) -> AC / test evidence -> EP / US (Backlog) -> RLS (Release Plan)
```

Ownership rules for shared IDs are in `Agent/01-Core/09-Document Set And Output Location.md` Section 5.

## 2. ID Assignment Rules

Use the canonical pattern:

```text
<TYPE>-<DOMAIN>-<NNN>
```

Examples:

| Type | Example |
|---|---|
| Functional Requirement | `FR-AUTH-001` |
| Non-Functional Requirement | `NFR-PERF-001` |
| Business Rule | `BR-ORDER-001` |
| Use Case | `UC-PAY-001` |
| Constraint | `CON-SEC-001` |
| Feature | `F-AUTH-001` |
| Acceptance Criterion | `AC-AUTH-001` |
| Change Request | `CR-GEN-001` |
| Business Goal | `BG-GEN-001` |
| Stakeholder Requirement | `STR-BOOK-001` |
| User Class | `UCL-GEN-001` |
| Operational Scenario | `OPS-GEN-001` |
| Business Process | `BP-GEN-001` |
| Transition Requirement | `TRN-DATA-001` |
| User Story | `US-BOOK-001` |
| Epic | `EP-BOOK-001` |
| Release Criterion | `RC-GEN-001` |
| Release | `RLS-GEN-001` |
| Milestone | `MS-GEN-001` |
| Data Entity | `ENT-DATA-001` |
| Data Relationship | `REL-DATA-001` |
| Physical Table | `TBL-DATA-001` |
| Table Column | `COL-DATA-001` |
| Entity Attribute | `ATTR-DATA-001` |
| Data Item | `DATA-DATA-001` |
| Data Validation Rule | `VAL-DATA-001` |
| Data Migration Item | `MIG-DATA-001` |

Rules:

1. Assign IDs when the item is created.
2. Never reuse or reassign IDs.
3. Sequence numbers increment within each type-domain pair.
4. Deprecated IDs remain in the document.
5. Domain codes must remain stable.

## 3. Recommended Domain Codes

| Code | Domain |
|---|---|
| `AUTH` | Authentication |
| `USR` | User management |
| `PAY` | Payment |
| `NOTIF` | Notifications |
| `PROD` | Product or catalog |
| `ORDER` | Order lifecycle |
| `RPT` | Reporting |
| `ADMIN` | Administration |
| `INTG` | Integration |
| `SRCH` | Search |
| `DATA` | Data management |
| `SEC` | Security |
| `PERF` | Performance |
| `AUTHZ` | Authorization |
| `HW` | Hardware interface |
| `COM` | Communication interface |
| `BUS` | Business operation (BRS constraints) |
| `PRJ` | Project constraint (budget, schedule, team) |
| `QUAL` | Stakeholder quality expectation |
| `INT` | Intake question (question bank) |
| `BRS` | BRS question (question bank) |
| `STRS` | StRS question (question bank) |
| `BRD` | BRD question (question bank) |
| `PRD` | PRD question (question bank) |
| `DLV` | Delivery question (question bank) |
| `GEN` | General or document-level item |

NFR category codes from `Agent/03-SRS/03-Requirement Writing Rules.md` Section 10 (`PERF`, `SCAL`, `AVAIL`, `REL`, `BKP`, `SEC`, `PRIV`, `LOG`, `USAB`, `ACC`, `COMP`, `MAINT`, `PORT`, `SAFE`, `COMPL`) are also valid domain codes for `NFR` IDs.

If a new domain is needed, propose it to the user and ask for confirmation unless the user already specified it. Record confirmed domains in the glossary.

## 4. Traceability Link Types

| Link Type | Direction | From | To |
|---|---|---|---|
| Source Trace | Backward | Requirement | Source document or decision |
| Business Trace | Backward | Stakeholder requirement | Business goal (`BG`) |
| Stakeholder Trace | Backward | Feature or SRS requirement | Stakeholder requirement (`STR`) |
| Validation Trace | Forward | Stakeholder requirement | Validation criterion or stakeholder acceptance |
| Story Trace | Forward | PRD feature or user story | SRS functional requirements |
| Delivery Trace | Forward | Feature, user story, or FR | Backlog item (`EP`, `US`) and release (`RLS`) |
| Parent Trace | Backward | Requirement | Feature, goal, or use case |
| Derivation Trace | Forward | Feature or use case | Requirements |
| Verification Trace | Forward | Requirement | Acceptance criteria, test case, or evidence |
| Dependency Trace | Lateral | Requirement | Related requirement |

## 5. Minimum Traceability

| Item Type | Source Trace | Parent Trace | Verification Trace |
|---|:-:|:-:|:-:|
| BG | Required | Optional | Required (via SC) |
| STR | Required | Required (BG) | Required (validation criterion) |
| F (PRD) | Required | Required (BG) | Recommended (US or FR) |
| US | Required | Required (F) | Required (acceptance criteria) |
| TRN | Required | Recommended (BG) | Recommended |
| EP, RLS | Required | Required (F) | Optional |
| FR | Required | Required when a StRS or PRD exists, otherwise Recommended | Required |
| NFR | Required | Optional | Required |
| BR | Required | Optional | Recommended |
| UC | Required | Recommended | Required |
| CON | Required | Optional | Recommended |
| ENT | Required | Recommended | Recommended |
| REL | Required | Recommended | Recommended |
| TBL | Required | Recommended | Recommended |
| COL | Required | Recommended | Recommended |
| ATTR | Required | Recommended | Recommended |
| DATA | Required | Recommended | Recommended |
| VAL | Required | Optional | Recommended |
| MIG | Required | Optional | Recommended |

## 6. Requirements Traceability Matrix

Maintain an RTM in SRS Section 16 or `<OutputLocation>/Traceability-Matrix.md`.

```markdown
| ID | Title | Source | Source Location | Upstream (STR/BG) | Parent | Related Feature/UC | Verification | Status |
|---|---|---|---|---|---|---|---|---|
| FR-AUTH-001 | Email format validation | Client Brief v2.1 | Section 3.1 | STR-AUTH-001 / BG-GEN-001 | F-AUTH-001 | UC-AUTH-001 | AC-AUTH-001 | DRAFT |
| NFR-PERF-001 | Search response time | Direct Prompt | Session YYYY-MM-DD | STR-QUAL-001 / BG-GEN-002 | None | F-SRCH-001 | AC-PERF-001 | DRAFT |
```

Maintain data traceability in SRS Section 9.11 when data artifacts are present.

```markdown
| Data Item | Source | Entity/Table | Used By Feature | Used By Requirement | Validation Rule | Retention Rule | Migration Rule |
|---|---|---|---|---|---|---|---|
| DATA-DATA-001 | Client Brief v2.1 | ENT-DATA-001 / TBL-DATA-001 | F-DATA-001 | FR-DATA-001 | VAL-DATA-001 | Retain 7 years | MIG-DATA-001 |
```

## 7. RTM Maintenance Rules

- Update the RTM whenever a requirement is created, changed, deprecated, or renumbered.
- Do not remove deprecated IDs from the RTM.
- Record change request IDs when a CR modifies a requirement.
- During validation, compare the RTM against the actual SRS body.

## 8. Orphan Detection

| Orphan Type | Definition | Severity |
|---|---|---|
| No Source | Requirement lacks a backward source trace. | Critical |
| No Verification | Requirement lacks acceptance criteria or test evidence. | Warning |
| No Parent | Functional requirement lacks feature, goal, or use case trace. | Warning |
| No Upstream | When a StRS or PRD exists, an SRS requirement lacks an `STR`, `F`, or `US` trace and is not marked as derived. | Critical |
| No Business Goal | A stakeholder requirement lacks a `BG` trace without a recorded reason. | Warning |
| Dead Link | Referenced ID does not exist or is deprecated without replacement. | Critical |
| Unmapped Data | Data item lacks entity/table, source, or related requirement trace. | Warning |

## 9. Orphan Resolution

1. No Source: ask the user for a source. Use `[ASSUMPTION]` only as the Assumption Policy permits.
2. No Verification: write or request acceptance criteria.
3. No Parent: map to a feature, or ask the user which feature or goal it serves.
4. Dead Link: repair the reference or document deprecation replacement.
5. No Upstream: map to an `STR`, `F`, or `US`, ask whether the StRS or PRD is missing a need, or mark as derived with rationale (for example, a requirement derived from a constraint or a design decision).

## 10. Source Reference Format

Use this format:

```markdown
- **Source**: [Document Name], [Section/Page/Item Number]
```

Examples:

| Source Type | Format |
|---|---|
| Client Brief | `Client Brief v2.1, Section 3.1` |
| Meeting Notes | `Meeting Notes 2026-06-26, Item 4` |
| Direct Prompt | `Direct Prompt, session YYYY-MM-DD` |
| Discovery Interview | `Discovery Interview, session YYYY-MM-DD, Q-BRS-001` |
| Upstream Document Item | `BRS v0.2, BG-GEN-001`, `BRD v0.2, TRN-DATA-001`, `StRS v0.3, STR-BOOK-002`, or `PRD v0.4, US-BOOK-003` |
| Approved Document | `Approved BRD v1.0, Section 5.2` |
| Agent Assumption | `[ASSUMPTION] Domain inference with reasoning; accepted by user YYYY-MM-DD` |

## 11. Cross-References

- Output rules: `Agent/01-Core/05-Output Rules.md`
- Source priority: `Agent/01-Core/04-Source Priority.md`
- Change request workflow: `Agent/03-SRS/06-Change Request Workflow.md`
- Macro validation: `Agent/03-SRS/05-Macro Validation.md`
- BRS and StRS rules: `Agent/02-Discovery/03-BRS-StRS Output Contract.md`
- BRD and PRD rules: `Agent/02-Discovery/04-BRD Output Contract.md`, `Agent/02-Discovery/05-PRD Output Contract.md`
- Delivery workflow: `Agent/04-Delivery/01-Delivery Workflow.md`
