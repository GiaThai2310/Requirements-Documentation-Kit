# 05 - Output Rules

## 1. Purpose

This document defines where the Agent writes output, which format it must use, which markers it must embed, and which status labels it must apply. These rules make SRS output consistent, machine-readable, auditable, and easier to validate.

## 2. Output Targets

`<OutputLocation>` is the folder the user chose in Stage S0, or the default `ProjectDocuments/<ProjectName>/` when the user gave none. Rules for choosing and protecting it are in `09-Document Set And Output Location.md` Section 7. Only documents in the project's Document Set are created.

| Output Type | Target Location | Rule |
|---|---|---|
| Project state | `<OutputLocation>/00-Project-State.md` | Created in Stage S0; updated at the end of every turn. |
| BRS / BRD | `<OutputLocation>/01-BRS.md`, `<OutputLocation>/01-BRD.md` | Stage S1, when in the Document Set. |
| StRS / PRD | `<OutputLocation>/02-StRS.md`, `<OutputLocation>/02-PRD.md` | Stage S2, when in the Document Set. |
| SRS document content | `<OutputLocation>/03-SRS.md` | Stages S3-S5. |
| Backlog / Release Plan | `<OutputLocation>/04-Backlog.md`, `<OutputLocation>/04-Release-Plan.md` | Stage S6, optional. |
| Validation and check reports | `<OutputLocation>/Reports/` | Use names such as `Validation-Report-YYYY-MM-DD.md` or `Discovery-Check-YYYY-MM-DD.md`. |
| Traceability matrices | `<OutputLocation>/03-SRS.md` Section 16 or `<OutputLocation>/Traceability-Matrix.md` | |
| Change request artifacts | `<OutputLocation>/Change-Requests/` | One file per CR, for example `CR-GEN-001.md`. |
| Open question answer sheet | `<OutputLocation>/OQ-Answers.md` | Created from `Context/OQ-Answers-Template.md` when the first open question exists; lists the open questions of every document so the user can answer them in one place (`06-Human Interaction Protocol.md` Section 5.1). |

The Agent may create or modify files only in `<OutputLocation>`. During normal requirements work, the Agent must not modify `Agent/`, `Context/`, or `User/`.

If the project name or the Output Location is unknown, ask the user before creating the folder. Never overwrite an existing file without explicit confirmation.

## 3. Requirement Statement Format

Every individual SRS requirement in a `Standard` or `Strict` domain follows this structure. The attributes follow the requirement attributes recommended by ISO/IEC/IEEE 29148 (identification, priority, status, source, rationale, trace, verification method). Stakeholder requirements in the StRS use the structure in `Agent/02-Discovery/03-BRS-StRS Output Contract.md` Section 7.2.

```markdown
#### [REQ-ID] Requirement Title

- **Statement**: [The requirement sentence, written in EARS]
- **Priority**: [Must / Should / Could / Won't] (MoSCoW)
- **Status**: [DRAFT | REVIEW | APPROVED]
- **Source**: [Source document name and section/page, or "Direct Prompt"]
- **Parent**: [Upstream STR, F, US, or UC ID(s), or "None" with reason]
- **Verification Method**: [Test | Analysis | Inspection | Demonstration]
- **Acceptance Criteria**:
  1. [Testable criterion 1]
  2. [Testable criterion 2]
- **Rationale**: [Why this requirement exists]
- **Dependencies**: [Related requirement IDs, or "None"]
- **Notes**: [Markers, assumptions, conflicts, or review notes]
```

Fields by domain rigor (`Agent/03-SRS/02-SRS Output Contract.md` Section 2.2):

| Field | Light | Standard | Strict |
|---|---|---|---|
| ID, title, Statement, Priority, Status, Source, Parent, Verification Method, Acceptance Criteria | Required, as columns of the domain requirement table | Required | Required |
| Rationale, Dependencies, Notes | Omitted; put a needed note in the Statement or the Open Questions | Only when they have content | Always present; `None` when empty |

Each item is written once. Catalogues and indexes list IDs, names, priorities, and statuses; they do not repeat statements or acceptance criteria. The RTM is regenerated from the items (`Agent/03-SRS/07-Traceability Workflow.md` Section 6).

## 4. Canonical ID Convention

All IDs use this canonical pattern:

```text
<TYPE>-<DOMAIN>-<NNN>
```

| Type | Meaning | Example |
|---|---|---|
| `FR` | Functional Requirement | `FR-AUTH-001` |
| `NFR` | Non-Functional Requirement | `NFR-PERF-001` |
| `BR` | Business Rule | `BR-ORDER-001` |
| `UC` | Use Case | `UC-PAY-001` |
| `US` | User Story | `US-BOOK-001` |
| `EP` | Epic | `EP-BOOK-001` |
| `TRN` | Transition Requirement | `TRN-DATA-001` |
| `RC` | Release Criterion | `RC-GEN-001` |
| `RLS` | Release | `RLS-GEN-001` |
| `MS` | Milestone | `MS-GEN-001` |
| `AF` | Use Case Alternative Flow | `AF-PAY-001` |
| `EF` | Use Case Exception Flow | `EF-PAY-001` |
| `CON` | Constraint | `CON-SEC-001` |
| `F` | Feature | `F-AUTH-001` |
| `AC` | Acceptance Criterion | `AC-AUTH-001` |
| `PF` | Product Function Group | `PF-GEN-001` |
| `STK` | Stakeholder | `STK-GEN-001` |
| `UCL` | User Class | `UCL-GEN-001` |
| `STR` | Stakeholder Requirement | `STR-BOOK-001` |
| `OPS` | Operational Scenario | `OPS-GEN-001` |
| `BP` | Business Process | `BP-GEN-001` |
| `ACT` | Actor | `ACT-GEN-001` |
| `EXT` | External System | `EXT-INTG-001` |
| `BG` | Business Goal | `BG-GEN-001` |
| `SC` | Success Criterion | `SC-GEN-001` |
| `ENT` | Data Entity | `ENT-DATA-001` |
| `REL` | Data Relationship | `REL-DATA-001` |
| `ATTR` | Entity Attribute | `ATTR-DATA-001` |
| `VAL` | Data Validation Rule | `VAL-DATA-001` |
| `MIG` | Data Migration Item | `MIG-DATA-001` |
| `UI` | User Interface Requirement | `UI-GEN-001` |
| `IF` | Interface | `IF-INTG-001` |
| `SEC` | Security Or Access Control Requirement | `SEC-AUTH-001` |
| `STATE` | State | `STATE-GEN-001` |
| `TR` | State Transition | `TR-GEN-001` |
| `ERR` | Error | `ERR-GEN-001` |
| `EDGE` | Edge Case | `EDGE-GEN-001` |
| `DIA` | Diagram | `DIA-GEN-001` |
| `REF` | Reference | `REF-GEN-001` |
| `ASM` | Assumption | `ASM-GEN-001` |
| `DEP` | Dependency | `DEP-GEN-001` |
| `OQ` | Open Question | `OQ-GEN-001` |
| `DEC` | Decision | `DEC-GEN-001` |
| `RISK` | Risk | `RISK-GEN-001` |
| `TBD` | Tracked TBD Item | `TBD-GEN-001` |
| `CR` | Change Request | `CR-GEN-001` |
| `Q` | Elicitation Question (kit question bank) | `Q-BRS-001` |

Rules:

- `<TYPE>` is a short uppercase item type.
- `<DOMAIN>` is a stable uppercase domain or category code such as `AUTH`, `PAY`, `ORDER`, `PERF`, `SEC`, or `GEN`.
- `<NNN>` is a three-digit zero-padded sequence.
- IDs must be unique across the project (all documents in the Document Set together). An item defined in the BRS keeps its ID when referenced from the StRS or SRS.
- IDs are permanent. Do not reuse an ID after deprecation.
- Use `GEN` for general document items without a natural domain.

## 5. Section Metadata

Each major SRS section must begin with:

```markdown
## [Section Number] Section Title

**Last Updated**: YYYY-MM-DD
**Status**: [DRAFT | REVIEW | APPROVED | DEPRECATED]
**Author**: [Agent | Human | Collaborative]
```

## 6. Canonical Status Labels

| Status | Meaning | Setter |
|---|---|---|
| `DRAFT` | Initial or revised content not yet submitted for review. | Agent |
| `REVIEW` | Submitted for human review or awaiting decision. | Agent |
| `APPROVED` | Explicitly accepted by a human approver. | Human only |
| `DEPRECATED` | Replaced or retired. The item leaves the document body and is recorded in the document's Deprecated Items register (Section 6.1). | Agent after human instruction or approved CR |

The Agent must never set a requirement, section, or change request result to `APPROVED` unless the human explicitly instructs it to record an approval decision.

Open questions use their own two statuses: `OPEN` (waiting for an answer) and `CLOSED` (answered and applied, with a resolution recorded). These apply only to `OQ` items.

### 6.1 Deprecated Items Register

When an item becomes `DEPRECATED` (after human instruction or an approved change request):

1. Remove its block or row from the body of the document.
2. Add one row to the document's Deprecated Items register (SRS Section 18.4, or the equivalent appendix in the BRS, BRD, StRS, PRD, Backlog, or Release Plan): ID, title, deprecated date, reason (`DEC` or `CR` ID), replaced by.
3. Keep the full previous text in the change request file (Impact Analysis, `Current State`) or in the version history of the documents. Under the `PERSONAL` profile without a CR file, quote the previous statement in the register's reason column.
4. Update every active reference to the deprecated ID so that it points to the replacement, or remove the reference when there is no replacement.
5. Never reuse the deprecated ID.

## 7. Markers

Markers are inline tags used to flag gaps, conflicts, and assumptions.

| Marker | Usage | Required Behavior |
|---|---|---|
| `[TBD]` | A required detail is missing. | Place at the exact location and add to the TBD list. |
| `[TBD: description]` | A specific missing detail. | Prefer this over bare `[TBD]`. |
| `[ASSUMPTION]` | A defensible inference by the Agent, permitted by the Assumption Policy. | Include reasoning immediately after the marker; follow `04-Source Priority.md` Rule 3.3. |
| `[CONFLICT]` | Sources contradict each other. | Cite source priority handling and halt for same-priority conflicts. |
| `[REVIEW]` | Low confidence or human attention needed. | Explain what needs review. |
| `[DEPRECATED]` | Used only inside the Deprecated Items register and in change request files. | Do not leave deprecated blocks in the document body (Section 6.1). |

## 8. TBD Tracking List

The Agent must maintain a TBD list when any `[TBD]` markers exist. Every TBD must also have a matching Open Question that has been asked to the user (see `06-Human Interaction Protocol.md`):

```markdown
| TBD-ID | Location | Description | Open Question | Assigned To | Target Date | Status |
|---|---|---|---|---|---|---|
| TBD-GEN-001 | FR-AUTH-003 | Maximum password length | OQ-AUTH-001 | Human | TBD | OPEN |
```

## 9. Formatting Standards

- Use ATX-style headings (`#`, `##`, `###`).
- Do not skip heading levels.
- Use numbered lists for ordered steps.
- Use bullets for unordered lists.
- Use fenced code blocks for schemas, APIs, data models, and examples.
- Use markdown tables for structured data.
- Use descriptive markdown links instead of bare URLs.
- Write project output in the Output Language recorded in `00-Project-State.md` (see Section 12).

## 10. Prohibited Formatting

| Prohibited | Reason |
|---|---|
| HTML tags inside markdown | Reduces portability across markdown renderers. |
| Bare URLs | Reduces readability and audit quality. |
| Emoji in IDs or statuses | Breaks predictable parsing. |
| Mixed status vocabularies | Breaks lifecycle validation. |
| Mixed ID patterns | Breaks traceability and impact analysis. |

## 11. Cross-References

- Conflict resolution: `04-Source Priority.md`
- Human escalation: `06-Human Interaction Protocol.md`
- Project profiles: `08-Project Profiles.md`
- BRS and StRS rules: `Agent/02-Discovery/03-BRS-StRS Output Contract.md`
- Micro validation: `Agent/03-SRS/04-Micro Validation.md`
- Macro validation: `Agent/03-SRS/05-Macro Validation.md`
- Traceability: `Agent/03-SRS/07-Traceability Workflow.md`

## 12. Output Language

1. The Output Language is recorded in `00-Project-State.md` and in each document's front matter (`output_language`). The default is English (`en`). If it is not recorded, ask the user.
2. Narrative text, requirement statements, rationales, and acceptance criteria are written in the Output Language.
3. These elements always remain in English so that documents stay machine-readable and validation rules apply unchanged: IDs, status labels, markers (`[TBD]`, `[ASSUMPTION]`, `[CONFLICT]`, `[REVIEW]`, `[DEPRECATED]`, `[CHANGE]`), MoSCoW labels, verification method labels, field names in bold metadata lines, and front matter keys.
4. **Mandatory keyword**: English requirements use `shall`. For any other language, the Agent uses one fixed mandatory verb, records it in `00-Project-State.md` (Mandatory Keyword) and in the glossary, and never mixes it with weaker verbs. For Vietnamese, the mandatory keyword is `phải` (not `sẽ`, which means "will").
5. **EARS keywords in Vietnamese**: Ubiquitous `<Hệ thống> phải ...`; Event-driven `Khi <sự kiện>, <hệ thống> phải ...`; State-driven `Trong khi <trạng thái>, <hệ thống> phải ...`; Unwanted behavior `Nếu <điều kiện>, thì <hệ thống> phải ...`; Optional feature `Ở nơi <tính năng được bật>, <hệ thống> phải ...`. For other languages, define equivalent keywords in the glossary before writing requirements and ask the user to confirm them.
6. Non-ASCII characters required by the Output Language are allowed. IDs remain ASCII.
