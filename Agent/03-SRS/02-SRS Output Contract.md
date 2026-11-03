# 02 - SRS Output Contract

## 1. Purpose

This document defines how the SRS is tailored on three axes:

| Axis | Decides | Set For | Defined In |
|---|---|---|---|
| Project Profile | Governance: approval, document control, change control formality | The whole project | `Agent/01-Core/08-Project Profiles.md` |
| Tier | Scale (breadth): which SRS sections are present | The whole project | Section 2.1 |
| Domain Rigor | Complexity (depth): how deeply each domain is specified | Each requirement domain (`AUTH`, `PAY`, ...) | Section 2.2 |

`Context/SRS-TOC.md` defines structure. `Context/SRS-Template.md` defines section formatting. This file defines tailoring rules.

Basis: ISO/IEC/IEEE 29148:2018 permits tailoring the SRS content to the project, provided the tailoring is documented (Skipped Section Protocol). The profile axis follows `Agent/01-Core/08-Project Profiles.md`.

Depth is never limited by document length, page count, team size, or schedule. It follows the scale of the product and the complexity of each domain. Team and schedule constraints are used only for the feasibility check (`05-Macro Validation.md` RS3).

## 2. Scale And Complexity

### 2.1 Tier (Scale)

| Tier | Criteria | Typical Projects |
|---|---|---|
| Tier 1 - Small | Up to 3 user classes, up to 10 features, single platform, no regulatory burden | Internal tools, MVPs, prototypes |
| Tier 2 - Medium | 4-8 user classes, 11-30 features, integrations or multiple platforms | SaaS products, e-commerce, mid-size enterprise apps |
| Tier 3 - Large | 9 or more user classes, more than 30 features, compliance or multi-system integration | Healthcare, fintech, government, ERP |

The Tier decides which sections exist (Section 3). It does not decide how deeply a domain is written; Domain Rigor does. A Tier 2 product can have `Light` domains, and a Tier 1 product can have a `Strict` domain.

The Tier is confirmed by the user in Stage S0 and recorded in `00-Project-State.md`. If the Tier is unknown or unclear, the Agent must not default to a tier. It asks the user, presents the criteria above, and recommends a tier with reasoning (`Agent/01-Core/06-Human Interaction Protocol.md` Section 2.7).

If the actual scope grows beyond the recorded Tier (for example, more features than the Tier allows), ask the user whether to change the Tier.

### 2.2 Domain Rigor (Complexity)

Each requirement domain (the `<DOMAIN>` code of its IDs, for example `AUTH`, `RISK`, `PAY`) receives one rigor level: `Light`, `Standard`, or `Strict`. The level comes from the complexity drivers the domain actually has, not from its size.

#### 2.2.1 Complexity Drivers

| Driver | Present When The Domain Has | Example |
|---|---|---|
| D1 Rule Logic | Calculations, formulas, scoring, pricing, or eligibility conditions that decide outcomes | Risk score, discount, loan eligibility |
| D2 State | An entity with a lifecycle of three or more states, or transitions guarded by conditions | Order lifecycle, approval workflow |
| D3 Access | More than one permission scope, role inheritance, delegation, or data isolation between tenants or workspaces | Organization owner versus contract member |
| D4 Data | Personal, financial, confidential, or regulated data, or obligations to retain, export, or delete data | Contracts with personal data, payment records |
| D5 Regulatory | Legal, regulatory, or contractual obligations that the behavior must satisfy | Tax invoices, medical records, audit duties |
| D6 Consequence | Errors that cause financial, legal, or safety harm, or actions that cannot be reversed | Permanent deletion, payment capture |
| D7 Uncertainty | Behavior that depends on external parties or produces probabilistic output | AI/ML results, third-party services, OCR |
| D8 Variability | Many input combinations, configurations, or cases that change the outcome | Multi-currency, file formats, locale rules |

The Agent marks each driver present or absent with evidence from a source (ID or source reference). A driver without evidence is not marked; ask instead.

#### 2.2.2 Recommended Level

| Drivers Present | Recommended Level |
|---|---|
| None | `Light` |
| One or two, excluding D5 | `Standard` |
| Three or more, or D5 | `Strict` |

D5 alone raises a domain to `Strict` because an unmet legal or regulatory obligation cannot be corrected after the fact. D6 counts like any other driver: a single irreversible action (for example, permanent deletion with confirmation) does not by itself make the whole domain `Strict`. When the consequence of an error in the domain is severe, the Agent states this in its reasoning and may recommend a higher level; the user decides.

The recommendation is not a decision. The Agent proposes the Domain Rigor Register in Stage S3 (Draft / Outline Mode) with the drivers, the recommended level, and the reasoning, and the user confirms or changes each level. The confirmed register is recorded in `00-Project-State.md` Section 1.2 and in SRS Section 19. If a new driver appears later (for example, a new calculation rule), ask whether to raise the level of that domain.

Domains that hold only document-level items (`GEN`) and NFR category codes do not receive a rigor level. NFRs follow the rules of Section 2.2.3 for their measurement content regardless of level.

#### 2.2.3 Required Depth By Level

| Item | Light | Standard | Strict |
|---|---|---|---|
| Functional requirements (Section 8.2) | Domain requirement table: ID, name, statement, priority, parent, acceptance criteria | Requirement block; empty optional fields are omitted | Full requirement block with every field |
| Use cases (Section 6.2) | Only when the flow has a branch or an exception the user can see | Main flow and exception flows | Main, alternative, and exception flows |
| Business rule details (Section 7.2) | Catalogue row only | Detail for `Calculation`, `Authorization`, and `State` rules | Detail for every rule, with the minimum content for its category (`03-Requirement Writing Rules.md` Section 11) |
| State model (Section 13) | Not required | Required when D2 is present | Required when D2 is present, with guards for every transition |
| Error and edge cases (Section 14) | Main user-visible error | Errors for each exception flow | Errors and edge cases for every boundary and invalid combination |
| Acceptance criteria | Main success path and the main failure | Success path and each failure path | Success path, each failure path, boundary values, and negative cases |
| Measurement method | Required for any metric-based requirement (`04-Micro Validation.md` C10) | Same | Same |

Rigor never removes a mandatory quality characteristic. Every requirement at every level remains atomic, unambiguous, verifiable, and traceable.

## 3. Section Requirements By Tier

Legend:

- `R` = Required.
- `C` = Conditional or recommended.
- `O` = Optional.
- `X` = Skip unless the human requests it.

| Section | Tier 1 | Tier 2 | Tier 3 |
|---|:-:|:-:|:-:|
| 0. Document Control | O | R | R |
| 1. Introduction | R | R | R |
| 2. Overall Description | R | R | R |
| 3. Stakeholders, Actors and External Systems | C | R | R |
| 4. Business Context | C | R | R |
| 5. Product Features | R | R | R |
| 6. Use Case Specifications | O | R | R |
| 7. Business Rules | O | R | R |
| 8. Functional Requirements | R | R | R |
| 9. Data Requirements And Data Model | O | R | R |
| 10. External Interface Requirements | C | R | R |
| 11. Non-functional Requirements | C | R | R |
| 12. Access Control Requirements | O | R | R |
| 13. State Models | X | C | R |
| 14. Error Handling and Edge Cases | O | R | R |
| 15. Acceptance Criteria and Verification | C | R | R |
| 16. Requirements Traceability | X | R | R |
| 17. Open Questions, Decisions and Risks | R | R | R |
| 18. Appendices | O | R | R |
| 19. Requirement Identification Convention | R | R | R |
| 20. Requirement Status Convention | R | R | R |
| 21. SRS Review Checklist | X | C | R |
| 22. Approval | X | C | R |

Domain Rigor adjusts the table within each present section:

- Section 6: `R` means use cases are required for `Standard` and `Strict` domains. `Light` domains add a use case only when Section 2.2.3 requires it.
- Section 7: the catalogue (7.1) follows the table; the details (7.2) follow Section 2.2.3.
- Section 13: becomes `R` at every Tier when any domain has driver D2.
- Section 9: becomes `R` at every Tier when any domain has driver D4 or when the system stores business data (Section 6, item 10).

## 4. Profile Overrides

Apply the Tier table first, then these overrides. An override can only make a section stricter.

| Section | PERSONAL | TEAM | SME |
|---|:-:|:-:|:-:|
| 0. Document Control | No override | R | R |
| 11.8 Privacy and 11.15 Compliance | R when personal data is processed | R when personal data is processed | R |
| 17. Open Questions, Decisions and Risks | R | R | R |
| 21. SRS Review Checklist | No override | C | R |
| 22. Approval | No override | C | R |

## 5. Upstream Documents

When upstream documents (BRS, BRD, StRS, PRD) exist for the project:

1. They are P2 sources once `APPROVED`, and P3 sources while in `REVIEW`.
2. SRS Section 4 (Business Context) references business-layer IDs (`BG`, `SC`, `BP`, `BR`) from the BRS or BRD instead of restating them. A one-sentence summary per item is allowed. When only a PRD exists, reference the `BG` and `SC` items owned by the PRD. Goal and success criterion tables are not copied into the SRS.
3. SRS Section 2.3 (User Classes) and Section 3 (Stakeholders, Actors) reuse the `UCL` and `STK` IDs from the StRS, PRD, BRS, or BRD.
4. SRS Section 5 (Product Features) reuses PRD `F` IDs when a PRD exists. It becomes a mapping table (feature to use cases and functional requirements) and does not restate the feature description, priority, personas, or goals already owned by the PRD. It never creates duplicate features.
5. Every SRS feature and functional requirement records its upstream `STR`, `F`, or `US` in the `Parent` field or in the RTM.
6. Stakeholder quality expectations (StRS Section 5.3 or PRD Section 9) become measurable NFRs in SRS Section 11.
7. When a Standard PRD exists, every `Must` user story (`US`) traces to at least one `FR`.

## 6. Universal Mandatory Sections

All SRS outputs must include:

1. Purpose.
2. Scope.
3. Definitions, acronyms, and abbreviations.
4. Product functions.
5. User classes.
6. Assumptions and dependencies.
7. Problem statement.
8. Product features.
9. Functional requirements.
10. Data requirements and data model when the system stores, processes, exchanges, reports on, migrates, or retains business data.
11. Open questions and risks.
12. Requirement identification convention.
13. Requirement status convention.

## 7. Skipped Section Protocol

When a section is skipped by tier:

1. Do not silently omit it if the section number is part of the selected output structure.
2. Add a short placeholder:

```markdown
## [Section Number] Section Title

**Last Updated**: YYYY-MM-DD
**Status**: REVIEW
**Author**: Agent

This section is omitted for this project tier. Revisit if scope expands.
```

3. Log the omission in Section 17 if it could affect stakeholder expectations.

## 8. Status And Approval

The Agent may draft, submit for review, or deprecate after approved change control. The Agent must not independently approve content.
