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

| Factor | Tier 0 - MVP | Tier 1 - Small | Tier 2 - Medium | Tier 3 - Large |
|---|---|---|---|---|
| User classes | Up to 2 | Up to 3 | 4-8 | 9 or more |
| Features | Up to 5 | Up to 10 | 11-30 | More than 30 |
| Feature complexity | Simple: no domain is expected to need `Strict` | Any | Any | Any |
| External dependencies | None: no cloud service to set up, no email or SMS delivery, no third-party service | A few services | Integrations with other systems | Multi-system integration |
| Platforms | One | One | One or several | Several |
| Regulation | None | None | Some obligations | Compliance is a main concern |
| Typical projects | Prototypes, proofs of concept, MVPs that test an idea | Internal tools, small products | SaaS products, e-commerce, mid-size enterprise apps | Healthcare, fintech, government, ERP |

Judge all factors together. Recommend the lowest Tier that fits every factor, so a single factor above a Tier's limit moves the recommendation up. For example, four simple features that need email delivery and a payment service are not Tier 0. The user decides.

The Tier decides which sections exist (Section 3). It does not decide how deeply a domain is written; Domain Rigor does. A Tier 2 product can have `Light` domains, and a Tier 1 product can have a `Strict` domain.

The Tier is confirmed by the user in Stage S0 and recorded in `00-Project-State.md`. If the Tier is unknown or unclear, the Agent must not default to a tier. It asks the user, presents the criteria above, and recommends a tier with reasoning (`Agent/01-Core/06-Human Interaction Protocol.md` Section 2.7).

If the actual project grows beyond the recorded Tier (for example, more features than the Tier allows, or a Tier 0 product gains a `Strict` domain or an external service), ask the user whether to change the Tier. If the user keeps the Tier, Domain Rigor still applies in full.

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
- `C` = Include only when the project has content for the section.
- `O` = Omit by default. Include it only when the user asks, or when the Agent recommends it with a reason specific to this project and the user agrees.
- `X` = Skip unless the human requests it.

| Section | Tier 0 | Tier 1 | Tier 2 | Tier 3 |
|---|:-:|:-:|:-:|:-:|
| 0. Document Control | X | O | R | R |
| 1. Introduction | R | R | R | R |
| 2. Overall Description | R | R | R | R |
| 3. Stakeholders, Actors and External Systems | X | C | R | R |
| 4. Business Context | C | C | R | R |
| 5. Product Features | R | R | R | R |
| 6. Use Case Specifications | X | O | R | R |
| 7. Business Rules | C | O | R | R |
| 8. Functional Requirements | R | R | R | R |
| 9. Data Requirements And Data Model | C | O | R | R |
| 10. External Interface Requirements | C | C | R | R |
| 11. Non-functional Requirements | C | C | R | R |
| 12. Access Control Requirements | X | O | R | R |
| 13. State Models | X | X | C | R |
| 14. Error Handling and Edge Cases | X | O | R | R |
| 15. Acceptance Criteria and Verification | X | C | R | R |
| 16. Requirements Traceability | X | X | R | R |
| 17. Open Questions, Decisions and Risks | R | R | R | R |
| 18. Appendices | X | O | R | R |
| 19. Requirement Identification Convention | R | R | R | R |
| 20. Requirement Status Convention | R | R | R | R |
| 21. SRS Review Checklist | X | X | C | R |
| 22. Approval | X | X | C | R |

Domain Rigor and the content of the project adjust the table:

- Section 4: at Tier 0, contains only 4.1 Problem Statement.
- Section 6: `R` means use cases are required for `Standard` and `Strict` domains. `Light` domains add a use case only when Section 2.2.3 requires it. At Tier 0 and Tier 1, the Agent may recommend use cases only for a `Strict` domain, naming the flow that its requirements cannot show.
- Section 7: becomes `R` at every Tier when any domain has driver D1 or is `Strict`. The catalogue (7.1) follows the table; the details (7.2) follow Section 2.2.3.
- Section 9: becomes `R` at every Tier when any domain has driver D4 or when the system stores business data (Section 6, item 10).
- Section 11: at Tier 0 and Tier 1, write the catalogue (11.1) and, when needed, the details (11.2). Do not write the category subsections 11.3 to 11.16.
- Section 13: becomes `R` at every Tier when any domain has driver D2.
- Section 14: when omitted, errors and boundary cases live in the acceptance criteria at the depth Section 2.2.3 requires.
- Section 18: at Tier 0, 18.4 Deprecated Items is added when an item is deprecated.

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

When sections are skipped by tier, depth, or variant:

1. Keep the numbers of the remaining sections unchanged, so that references stay valid if the document grows later.
2. Do not write a heading or a placeholder for a skipped section, and leave it out of the table of contents.
3. List all skipped sections once, on one line directly after the table of contents:

```markdown
**Omitted Sections**: 3, 6, 12, 21, 22 (Tier 1). Revisit if scope expands.
```

4. Log the omission in the document's open questions, decisions, and risks section if it could affect stakeholder expectations.

## 8. Status And Approval

The Agent may draft, submit for review, or deprecate after approved change control. The Agent must not independently approve content.
