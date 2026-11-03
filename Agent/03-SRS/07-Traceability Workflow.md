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
| Entity Attribute | `ATTR-DATA-001` |
| Data Validation Rule | `VAL-DATA-001` |
| Data Migration Item | `MIG-DATA-001` |

Rules:

1. Assign IDs when the item is created.
2. Never reuse or reassign IDs.
3. Sequence numbers increment within each type-domain pair.
4. Deprecated IDs leave the document body and remain in the document's Deprecated Items register (`Agent/01-Core/05-Output Rules.md` Section 6.1).
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
| ATTR | Required | Recommended | Recommended |
| VAL | Required | Optional | Recommended |
| MIG | Required | Optional | Recommended |

## 6. Requirements Traceability Matrix

Maintain an RTM in SRS Section 16 or `<OutputLocation>/Traceability-Matrix.md`.

The RTM is a derived view, not a second copy of the requirements. The Agent regenerates it from the `Source`, `Parent`, and verification fields of the active items whenever items are created, changed, or deprecated, and never edits rows by hand. Title, source location, and status are not repeated; they live in the items.

```markdown
| ID | Upstream (STR/F/US/BG) | Parent (F/UC) | Verification |
|---|---|---|---|
| FR-AUTH-001 | STR-AUTH-001 / BG-GEN-001 | F-AUTH-001, UC-AUTH-001 | Test; AC 1-2 |
| NFR-PERF-001 | STR-QUAL-001 / BG-GEN-002 | None | Test; measurement method in the item |
```

Data traceability uses the `Related Features` and `Related Requirements` columns of the entity table (SRS Section 9.2.1) and the `Related Rules` column of the attribute table (SRS Section 9.3). No separate data traceability matrix is kept.

## 7. RTM Maintenance Rules

- Regenerate the RTM whenever a requirement is created, changed, deprecated, or renumbered.
- The RTM lists active items only. Deprecated IDs are kept in the Deprecated Items register, not in the RTM.
- Record change request IDs in the changed item's `[CHANGE]` annotation, not in the RTM.
- During validation, compare the RTM against the actual SRS body.

## 8. Orphan Detection

| Orphan Type | Definition | Severity |
|---|---|---|
| No Source | Requirement lacks a backward source trace. | Critical |
| No Verification | Requirement lacks acceptance criteria or test evidence. | Warning |
| No Parent | Functional requirement lacks feature, goal, or use case trace. | Warning |
| No Upstream | When a StRS or PRD exists, an SRS requirement lacks an `STR`, `F`, or `US` trace and is not marked as derived. | Critical |
| No Business Goal | A stakeholder requirement lacks a `BG` trace without a recorded reason. | Warning |
| Dead Link | Referenced ID does not exist, or is deprecated (an active item must reference the replacement). | Critical |
| Unmapped Data | An entity or attribute lacks a source or a related requirement. | Warning |

## 9. Orphan Resolution

1. No Source: ask the user for a source. Use `[ASSUMPTION]` only as the Assumption Policy permits.
2. No Verification: write or request acceptance criteria.
3. No Parent: map to a feature, or ask the user which feature or goal it serves.
4. Dead Link: repair the reference, or point it to the replacement listed in the Deprecated Items register.
5. No Upstream: map to an `STR`, `F`, or `US`, ask whether the StRS or PRD is missing a need, or mark as derived with rationale (for example, a requirement derived from a constraint or a design decision).

## 10. Premise Sweep

Links between IDs do not show every item that depends on a decision. A use case precondition, an acceptance criterion's `Given` clause, or an error message can state an assumption in words without referencing the decision that created it. When that assumption changes, an ID-based impact analysis misses those items. The Premise Sweep finds them.

### 10.1 When To Run

Run a Premise Sweep whenever a decision changes something the documents already assume:

1. A change request is analyzed (`06-Change Request Workflow.md` Step 2).
2. A human decision or an answer to an Open Question changes existing content (`Agent/01-Core/06-Human Interaction Protocol.md` Section 6), including answers applied from `OQ-Answers.md`.
3. Macro Validation runs (`05-Macro Validation.md` CC10): every decision recorded since the previous validation must have been swept.

### 10.2 Procedure

1. **State the premises.** Write the old premise and the new premise as one sentence each. Example: old "Each user belongs to exactly one organization"; new "Each user has a personal workspace and may belong to several organizations".
2. **List the expressions of the old premise.** Note the terms, roles, conditions, and phrasings through which the old premise appears (for example "member of the organization", "the organization of the user", "MFA code", "OTP").
3. **Search every document in the Document Set** for those expressions, not only for linked IDs. Check in particular: use case preconditions, triggers, and postconditions; acceptance criteria (`Given` clauses); requirement statements; business rules; error messages and error catalogue entries; interface descriptions; glossary entries; actor and user class definitions; state models and diagrams.
4. **Classify each hit**: `Must change` (contradicts the new premise), `Check` (may be affected), or `Unaffected` (with a reason).
5. **Record the result** in the impact analysis, or in the decision record when no change request exists, as a "Premise-affected items" table:

```markdown
| Item | Location | Text Expressing The Old Premise | Classification | Action |
|---|---|---|---|---|
| UC-CTR-001 | SRS 6.2, Preconditions | "The user is a member of an organization" | Must change | Rewrite for personal and organization workspaces |
```

6. **Apply** the changes together with the decision. Items classified `Check` are confirmed with the user when the outcome is not clear from the sources.

## 11. Source Reference Format

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
| Open Question Answer Sheet | `OQ-Answers, YYYY-MM-DD, OQ-AUTH-001` |
| Agent Assumption | `[ASSUMPTION] Domain inference with reasoning; accepted by user YYYY-MM-DD` |

## 12. Cross-References

- Output rules: `Agent/01-Core/05-Output Rules.md`
- Source priority: `Agent/01-Core/04-Source Priority.md`
- Change request workflow: `Agent/03-SRS/06-Change Request Workflow.md`
- Macro validation: `Agent/03-SRS/05-Macro Validation.md`
- BRS and StRS rules: `Agent/02-Discovery/03-BRS-StRS Output Contract.md`
- BRD and PRD rules: `Agent/02-Discovery/04-BRD Output Contract.md`, `Agent/02-Discovery/05-PRD Output Contract.md`
- Delivery workflow: `Agent/04-Delivery/01-Delivery Workflow.md`
