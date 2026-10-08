# 05 - Macro Validation

## 1. Purpose

Macro Validation checks the SRS as a whole for completeness, consistency, structure, and traceability. It is normally run in Audit / Validation Mode and produces a report without directly modifying the SRS.

## 2. When To Run

Run Macro Validation when:

- A complete draft exists.
- A major section cluster is completed.
- The human requests an audit.
- A change request has been applied.
- Conflict or TBD thresholds indicate elevated risk.

## 3. Completeness Checks

| ID | Check | Question | Severity |
|---|---|---|---|
| MC1 | Section coverage | Are required sections present for the project Tier and Profile overrides? | Critical |
| MC2 | Feature coverage | Does every feature have at least one related functional requirement? | Critical |
| MC3 | Actor coverage | Does every actor appear in a use case or requirement? | Warning |
| MC4 | Use case coverage | Does every use case have related requirements? | Critical |
| MC5 | NFR coverage | Are relevant quality categories represented? | Warning |
| MC6 | Error coverage | Do major flows include error or edge-case requirements? | Warning |
| MC7 | TBD tracking | Are all `[TBD]` markers tracked and below threshold? | Critical |
| MC8 | Acceptance criteria | Does every FR have acceptance criteria? | Critical |
| MC9 | Data model coverage | When the system stores or exchanges business data, are entities, attributes, relationships, constraints, ownership, lifecycle, retention, migration, and data traceability represented? | Critical |
| MC10 | Upstream coverage | When a StRS or PRD exists, is every `Must` stakeholder requirement, PRD feature, and PRD user story realized by at least one feature or requirement in the SRS? | Critical |
| MC11 | Quality expectation coverage | Is every StRS or PRD quality expectation turned into a measurable NFR or recorded as an Open Question? | Warning |

## 4. Consistency Checks

| ID | Check | Question | Severity |
|---|---|---|---|
| CC1 | Terminology | Does usage match the glossary? | Critical |
| CC2 | ID uniqueness | Are IDs unique and correctly formatted? | Critical |
| CC3 | Cross-references | Do references point to existing IDs? | Critical |
| CC4 | Priority consistency | Are dependencies compatible with priorities? | Warning |
| CC5 | Status consistency | Are statuses limited to `DRAFT`, `REVIEW`, `APPROVED`, `DEPRECATED`? | Warning |
| CC6 | Conflict detection | Do requirements contradict each other? | Critical |
| CC7 | Diagram-text alignment | Do diagrams and text agree? | Warning |
| CC8 | Scope alignment | Are requirements within stated scope? | Critical |
| CC9 | Data model consistency | Do entity, table, column, relationship, validation, retention, and migration IDs reference each other consistently? | Critical |

## 5. Traceability Checks

| ID | Check | Question | Severity |
|---|---|---|---|
| TC1 | Backward traceability | Does every requirement trace to a source? | Critical |
| TC2 | Forward traceability | Does every requirement link to acceptance criteria or tests? | Warning |
| TC3 | Orphan requirements | Are there requirements with no source? | Critical |
| TC4 | Orphan features | Are there features without requirements? | Critical |
| TC5 | RTM completeness | Does the traceability matrix match actual requirements? | Critical |
| TC6 | Dependency integrity | Do dependency links target valid active IDs? | Warning |
| TC7 | Data traceability | Do data items trace to source, entity/table, features, requirements, validation rules, retention rules, and migration rules where applicable? | Warning |
| TC8 | Vertical traceability | When upstream documents exist, does every FR and NFR trace up to an `STR`, PRD `F`, or `US` (or is marked as a derived requirement with rationale), and every `STR` and PRD `F` up to a `BG` (`BG -> STR or F/US -> FR/NFR -> AC`)? | Critical |
| TC9 | Open question linkage | Does every `[TBD]` have a matching Open Question, and has every Open Question been asked to the user? | Critical |

## 6. Requirement Set Checks

ISO/IEC/IEEE 29148 defines characteristics for a *set* of requirements, in addition to individual requirements. Check the SRS as a whole:

| ID | Characteristic | Question | Severity |
|---|---|---|---|
| RS1 | Complete | Does the set cover all stakeholder needs in scope, with no unresolved TBDs above threshold? | Critical |
| RS2 | Consistent | Is the set free of conflicts, duplicates, and terminology clashes? | Critical |
| RS3 | Feasible | Can the set be realized within the project constraints (budget, schedule, team, technology) recorded in the BRS, BRD, or PRD? | Warning |
| RS4 | Comprehensible | Can the intended readers for the profile understand what is expected? | Warning |
| RS5 | Able to be validated | Can stakeholders confirm that satisfying the set will meet their needs and the business goals? | Warning |

## 7. Structural Checks

| ID | Check | Question | Severity |
|---|---|---|---|
| SC1 | Heading hierarchy | Are heading levels sequential? | Warning |
| SC2 | TOC alignment | Does structure match `Context/SRS-TOC.md`? | Critical |
| SC3 | Section metadata | Do major sections include date, status, author? | Warning |
| SC4 | Formatting | Does markdown follow `05-Output Rules.md`? | Warning |
| SC5 | Appendix completeness | Are glossary, TBD, and supporting items present when needed? | Warning |

## 8. Validation Report Format

Write reports to `<OutputLocation>/Reports/` using this format:

```markdown
# SRS Macro Validation Report

**Date**: YYYY-MM-DD
**SRS Version**: [Version]
**Validator**: Agent (Audit Mode)
**Project Profile / Tier**: [PERSONAL / TEAM / SME] / [1 / 2 / 3]

## Summary

| Category | Total Checks | Passed | Failed Critical | Failed Warning |
|---|---:|---:|---:|---:|
| Completeness | N | N | N | N |
| Consistency | N | N | N | N |
| Traceability | N | N | N | N |
| Requirement Set | N | N | N | N |
| Structural | N | N | N | N |

## Failed Checks

### [Check ID] - [Check Name]

- **Severity**: Critical / Warning
- **Location**: [Section or ID]
- **Finding**: [What was found]
- **Recommended Action**: [How to fix]
```

## 9. Approval Constraint

Macro Validation may recommend approval readiness, but it must not approve content. Approval remains a human decision by the approver defined for the profile. After the report, ask the approver whether to fix findings, accept them as known issues, or baseline the SRS (Stage S5 gate).

## 10. Cross-References

- Micro validation: `Agent/03-SRS/04-Micro Validation.md`
- Output contract: `Agent/03-SRS/02-SRS Output Contract.md`
- Traceability: `Agent/03-SRS/07-Traceability Workflow.md`
