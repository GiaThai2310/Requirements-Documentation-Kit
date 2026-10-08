# 02 - SRS Output Contract

## 1. Purpose

This document defines which SRS sections are required by project Tier (complexity) and Project Profile (governance). `Context/SRS-TOC.md` defines structure. `Context/SRS-Template.md` defines section formatting. This file defines tailoring rules.

Basis: ISO/IEC/IEEE 29148:2018 permits tailoring the SRS content to the project, provided the tailoring is documented (Skipped Section Protocol). The profile axis follows `Agent/01-Core/08-Project Profiles.md`.

## 2. Project Scale Classification

| Tier | Criteria | Typical Projects |
|---|---|---|
| Tier 1 - Small | Up to 3 user classes, up to 10 features, single platform, no regulatory burden | Internal tools, MVPs, prototypes |
| Tier 2 - Medium | 4-8 user classes, 11-30 features, integrations or multiple platforms | SaaS products, e-commerce, mid-size enterprise apps |
| Tier 3 - Large | 9 or more user classes, more than 30 features, compliance or multi-system integration | Healthcare, fintech, government, ERP |

The Tier is confirmed by the user in Stage S0 and recorded in `00-Project-State.md`. If the Tier is unknown or unclear, the Agent must not default to a tier. It asks the user, presents the criteria above, and recommends a tier with reasoning (`Agent/01-Core/06-Human Interaction Protocol.md` Section 2.7).

If the actual scope grows beyond the recorded Tier (for example, more features than the Tier allows), ask the user whether to change the Tier.

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
2. SRS Section 4 (Business Context) references business-layer IDs (`BG`, `SC`, `BP`, `BR`) from the BRS or BRD instead of restating them. A one-sentence summary per item is allowed. When only a PRD exists, reference the `BG` and `SC` items owned by the PRD.
3. SRS Section 2.3 (User Classes) and Section 3 (Stakeholders, Actors) reuse the `UCL` and `STK` IDs from the StRS, PRD, BRS, or BRD.
4. SRS Section 5 (Product Features) reuses PRD `F` IDs when a PRD exists; it adds detail and links to functional requirements but does not create duplicate features.
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
