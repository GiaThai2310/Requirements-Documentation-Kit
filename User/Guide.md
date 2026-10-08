---
title: Requirements Documentation Kit Guide
aliases:
  - Guide
tags:
  - srs
  - requirements-engineering
  - software-documentation
status: completed
template: "Context/SRS-Template.md"
overview: "Human/About.md"
---

# Requirements Documentation Kit Guide

This guide explains how to use the kit to go from an idea to a reviewed set of requirements documents (BRS, BRD, StRS, PRD, SRS) and, optionally, a product backlog and release plan. It is written for humans. The Agent's executable operating rules live in `Agent/`.

## 1. Reference Basis

The kit is based on widely used standards and practices:

| Reference | Used For |
|---|---|
| ISO/IEC/IEEE 29148:2018 | BRS, StRS, and SRS content; requirement attributes and quality characteristics; traceability between requirement levels; tailoring. |
| ISO/IEC 29110 (Very Small Entities) | The idea of graduated profiles for individuals, small teams, and start-ups (Project Profiles). |
| ISO/IEC 25010:2023 | Product quality characteristics used to classify non-functional requirements. |
| ISO/IEC 29100 | Privacy principles used in the privacy and compliance review. |
| IIBA BABOK v3 | Elicitation techniques (interviews, document analysis, brainstorming) used in Discovery Mode. |
| EARS | Clear "shall" statements. |
| MoSCoW (DSDM) | Priority labels. |
| Product management practice (SVPG, Aha!, Atlassian) | PRD structure: goals, non-goals, personas, features, user stories, release criteria. |
| Scrum Guide 2020 | Product Backlog, Product Goal, Definition of Done. |
| ISO/IEC/IEEE 15289 | Generic content of specifications and plans (identification, change history, approval). |
| ISO 9241-210 | Users, tasks, and context of use for personas and scenarios. |

The kit is not a verbatim copy of any standard and is not a certification claim. It is a practical workflow derived from those references.

**Important:** BRS, StRS, and SRS are defined by ISO/IEC/IEEE 29148. **BRD, PRD, product backlogs, and release plans are not defined by any ISO or IEEE standard.** The kit grounds them in IIBA BABOK v3, the Scrum Guide, and widely published product management practice, and never claims ISO conformance for them.

## 2. The Pipeline

```text
S0 Intake -> S1 Business -> S2 Stakeholder & Product -> S3 SRS Outline -> S4 SRS Incremental -> S5 Validation & Baseline -> S6 Delivery (optional)
```

| Stage | What Happens | Documents |
|---|---|---|
| S0 Intake | You describe the idea; the Agent asks for the project profile, tier, language, approver, which documents you need, and where to save them. | `00-Project-State.md` |
| S1 Business | The Agent interviews you about the problem, goals, success criteria, scope, business rules, and constraints (plus business case and transition for a BRD). | `01-BRS.md` and/or `01-BRD.md` |
| S2 Stakeholder & Product | The Agent interviews you about users, their needs, and the product's features (plus user stories and release criteria for a Standard PRD). | `02-StRS.md` and/or `02-PRD.md` |
| S3 SRS Outline | The Agent proposes the SRS structure for your profile and tier. | `03-SRS.md` |
| S4 SRS Incremental | The Agent writes the SRS section by section. | `03-SRS.md` |
| S5 Validation & Baseline | The Agent audits the SRS; you fix findings and baseline it. | `Reports/` |
| S6 Delivery (optional) | The Agent builds an ordered backlog and/or a release plan, using only dates and estimates you provide. | `04-Backlog.md`, `04-Release-Plan.md` |

Every stage ends with a **gate**: the Agent summarizes what was produced and asks you (or the approver) to continue. Stages for documents you did not choose are skipped. If you already have enough material for an SRS, you can ask to skip S1 and S2; the Agent records that decision.

## 3. Choosing Your Documents

In Stage S0 the Agent asks which documents you need and recommends a set. You decide.

| Layer | ISO Option | Industry Option | Main Difference |
|---|---|---|---|
| Business | **BRS** (ISO/IEC/IEEE 29148) | **BRD** (IIBA BABOK v3) | The BRD adds an executive summary, business case, RACI, and transition requirements (data migration, training, cutover). |
| Users / Product | **StRS** (ISO/IEC/IEEE 29148) | **PRD** (product management practice) | The PRD adds non-goals, a feature list, user stories, release criteria, and milestones. |
| Software | **SRS** (ISO/IEC/IEEE 29148) | - | Detailed, testable software requirements. |
| Delivery (optional) | - | **Backlog**, **Release Plan** | Ordered work items and release scope. |

Recommended sets (suggestions only):

| Profile | Recommendation |
|---|---|
| PERSONAL | Lean PRD + SRS |
| TEAM | PRD + SRS, or BRS + StRS + SRS for academic or ISO-aligned projects |
| SME | BRD + PRD + SRS; add BRS and StRS when a customer or contract requires ISO documents |

If you pick both documents of a layer (for example BRS and BRD), the Agent asks which one is the **main source**. The other one only references its IDs and adds its own parts, so nothing is written twice.

### 3.1 PRD: Lean Or Standard

The Agent first asks what the PRD covers (whole product, one release, or one feature). Then it asks whether you want **user stories**, a **release plan**, or a **backlog**:

- Any "yes" → **Standard PRD** (adds feature details, user stories with acceptance criteria, release criteria, and milestones).
- All "no" → **Lean PRD** (problem, goals, non-goals, personas, scenarios, features, assumptions, risks).

A backlog or release plan you ask for becomes its own document in Stage S6.

### 3.2 Where Your Documents Are Saved

The Agent asks where to save the documents. If you have no preference, it uses:

```text
ProjectDocuments/<ProjectName>/
```

It confirms the path before creating anything, never writes into the kit's `Agent/`, `Context/`, or `Human/` folders, asks before writing into a folder that already has files, and warns you if the folder could be committed to a git repository.

## 4. Project Profile And Tier

The kit tailors the documents on two independent axes.

**Profile** (who builds and approves the product):

| Profile | When To Use | Effect |
|---|---|---|
| PERSONAL | You build it alone. | Lite BRS and StRS; you approve your own work; light change control. |
| TEAM | A group builds it together (student project, hackathon, internal tool). | Standard documents; a named Product Owner or Team Lead approves; change requests for approved content. |
| SME | A business or start-up builds it for customers or operations. | Full documents including business model and compliance review; the business owner approves; formal change control after baseline. |

**Tier** (how complex the product is):

| Tier | Description |
|---|---|
| Tier 1 - Small | Up to 3 user classes, up to 10 features, single platform, no regulatory burden. |
| Tier 2 - Medium | 4-8 user classes, 11-30 features, integrations or multiple platforms. |
| Tier 3 - Large | 9 or more user classes, more than 30 features, compliance or multi-system integration. |

A personal project can still be Tier 2, and a start-up MVP can be Tier 1. If you are unsure, say so: the Agent will explain the options and recommend one. It will not choose for you.

## 5. Ask-When-Uncertain

The Agent asks instead of guessing. Expect questions when:

- Your input can be read in more than one way.
- The profile, tier, language, document set, PRD variant, or save location is not stated.
- A date, estimate, price, or team capacity would be needed (the Agent never invents these).
- A term is undefined or used inconsistently.
- A quality target has no numbers ("fast", "easy").
- Something seems implied but you did not say it.
- The Agent is not sure what to do next.

Questions come in batches of 3 to 5, with options and a recommendation. You can always answer "I don't know"; the Agent will then offer to leave a `[TBD]`, propose an assumption for you to confirm, or skip the item if it is optional for your profile.

You control assumptions with the **Assumption Policy**:

- `ask` (default): the Agent asks before recording any assumption.
- `allow-minor`: the Agent may record minor assumptions and lists them for your confirmation in the same turn. Anything affecting scope, cost, security, privacy, or legal obligations is still asked first.

## 6. Getting Started

1. Copy `Context/Context.md.example` to `Context/Context.md`. Fill in Section 1 (the idea) and anything else you know.
2. Ask the Agent to start. Example prompts:

| Situation | Prompt |
|---|---|
| Personal project | "Start a new PERSONAL project from Context/Context.md. Write documents in Vietnamese." |
| Team project | "Start Discovery for our TEAM project 'LibraryHub'. The approver is our team lead, An." |
| SME or start-up | "Start Discovery for an SME project from Context/Context.md and run the full compliance review." |
| Continue later | "Continue project LibraryHub." |
| Startup with BRD and PRD | "Start an SME project. I need a BRD, a PRD with user stories, an SRS, and a release plan. Save to docs/requirements/." |
| Add a backlog later | "Create a product backlog for project LibraryHub from the PRD." |
| Skip Discovery | "I already have a full brief in Context/. Skip BRS and StRS and run SRS Draft Mode for project X." |
| Write a section | "Write SRS Section 8 for the booking feature in project X." |
| Audit | "Validate project X and create a validation report." |

3. Answer the Agent's questions. Review each document at its gate.
4. Approve explicitly when you are ready, for example "Approve BRS v0.3" or "Mark section 5 approved". "Looks good" is treated as feedback, not formal approval.

## 7. Writing Requirements

Use EARS-style statements:

| Pattern | Example |
|---|---|
| Ubiquitous | The system shall retain audit logs for 365 days. |
| Event-driven | When the user submits valid credentials, the system shall create an authenticated session. |
| State-driven | While an account is locked, the system shall reject password login attempts. |
| Unwanted behavior | If payment authorization fails, then the system shall display the payment failure reason. |
| Optional feature | Where multi-factor authentication is enabled, the system shall require a verification code. |

Keep each requirement atomic. If a sentence contains two obligations, split it.

Stakeholder requirements in the StRS describe needs, not solutions: "The Customer shall be able to book an appointment outside opening hours."

### 7.1 Output Language

Documents can be written in any language. IDs, statuses, markers, and priority labels stay in English. For Vietnamese, the mandatory keyword is **"phải"** (not "sẽ", which means "will"):

| Pattern | Vietnamese Form |
|---|---|
| Ubiquitous | Hệ thống phải lưu nhật ký kiểm toán trong 365 ngày. |
| Event-driven | Khi người dùng gửi thông tin đăng nhập hợp lệ, hệ thống phải tạo một phiên đã xác thực. |
| State-driven | Trong khi tài khoản bị khóa, hệ thống phải từ chối các lần đăng nhập bằng mật khẩu. |
| Unwanted behavior | Nếu xác thực thanh toán thất bại, thì hệ thống phải hiển thị lý do thất bại. |
| Optional feature | Ở nơi xác thực đa yếu tố được bật, hệ thống phải yêu cầu mã xác minh. |

## 8. Priority

Use MoSCoW priorities:

| Priority | Meaning |
|---|---|
| Must | Required for the release or baseline. |
| Should | Important but not mandatory for the release. |
| Could | Desirable if capacity allows. |
| Won't | Explicitly excluded from the current scope. |

Priority is recorded in the requirement metadata, not by replacing `shall` with weaker verbs.

## 9. Status

Use only these statuses:

| Status | Meaning |
|---|---|
| DRAFT | Agent-created or revised, not yet submitted. |
| REVIEW | Ready for human review or awaiting decision. |
| APPROVED | Explicitly approved by the approver for the profile. |
| DEPRECATED | Retained for history but no longer active. |

## 10. ID Convention

Use `<TYPE>-<DOMAIN>-<NNN>`, for example `BG-GEN-001`, `STR-BOOK-001`, `US-BOOK-001`, `TRN-DATA-001`, `FR-AUTH-001`, `NFR-PERF-001`, `RLS-GEN-001`, `CR-GEN-001`. The domain should be stable. If a requirement starts as `FR-AUTH-001`, do not later rename it to `FR-LOGIN-001` unless a change decision explicitly changes the convention. IDs are unique across all documents of one project.

## 11. Traceability

Every requirement should answer:

- Where did it come from?
- Which business goal, stakeholder need, feature, or user story does it serve? (`BG -> STR or F/US -> FR/NFR`)
- Which feature or use case does it belong to?
- How will it be verified?
- What other requirements depend on it?

Use SRS Section 16, StRS Section 9, and the PRD feature and story tables to maintain these links. Backlog items and releases trace to features and stories.

## 12. Handling Gaps And Conflicts

| Marker | Meaning |
|---|---|
| `[TBD]` | Required information is missing; a matching Open Question is asked. |
| `[ASSUMPTION]` | An inference you accepted, or a minor one awaiting your confirmation. |
| `[CONFLICT]` | Sources disagree. |
| `[REVIEW]` | Human attention is required. |

Do not hide uncertainty. Visible uncertainty is safer than invented certainty.

## 13. Change Requests

For changes after drafting, the formality depends on the profile:

| Profile | Changes To Approved Content |
|---|---|
| PERSONAL | Confirm the impact summary; the Agent annotates the change inline and updates the revision history. |
| TEAM | Full change request file with impact analysis and approver decision. |
| SME | Full change request file for every change after baseline. |

Authorization to patch is not the same as final requirement approval.

## 14. Review Checklist

Before baselining an SRS, check that:

- Required sections are present for the profile and tier.
- Requirement IDs are unique and stable.
- Status labels use the canonical four-status model.
- Requirements are atomic and verifiable.
- Acceptance criteria exist for functional requirements.
- NFRs are measurable and classified by ISO/IEC 25010 characteristic.
- Terms match the glossary.
- All `[TBD]`, `[ASSUMPTION]`, and `[CONFLICT]` markers are tracked and every TBD has an Open Question.
- Traceability links are complete, including upstream links to the StRS and BRS.
- The revision history is updated.

## 15. Where To Put Output

All generated documents, reports, traceability matrices, and change requests are written to the save location you confirmed in Stage S0 (default `ProjectDocuments/<ProjectName>/`). The `Agent/`, `Context/`, and `Human/` directories are operating material. They should be changed only when maintaining the kit itself.

Projects created with an earlier kit version may live in `Project/<ProjectName>/`. The Agent asks whether to keep or move them.

## 16. Standards Status Of Each Document

| Document | Defined By A Standard? | Basis Used By The Kit |
|---|---|---|
| BRS, StRS, SRS | Yes: ISO/IEC/IEEE 29148:2018 | ISO/IEC/IEEE 29148 content and quality characteristics |
| BRD | No | IIBA BABOK v3 requirements classification and techniques; PMI business analysis practice |
| PRD | No | Product management practice (SVPG, Aha!, Atlassian); ISO/IEC/IEEE 15289; ISO/IEC 25010; ISO 9241-210 |
| Product Backlog | No (Scrum Guide is a de facto reference) | Scrum Guide 2020; IIBA BABOK v3 |
| Release Plan | No | ISO/IEC/IEEE 15289 plan content; ISO/IEC 29110 planning concepts; MoSCoW |
