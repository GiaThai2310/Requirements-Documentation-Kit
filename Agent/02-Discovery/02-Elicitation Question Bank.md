# 02 - Elicitation Question Bank

## 1. Purpose

This file is the canonical **Requirements Gathering Questionnaire** of the kit. The Agent uses it in Discovery Mode (Stages S0 to S2), in Delivery Mode (Stage S6), and whenever a fatal input gap blocks SRS work. Ask only the question groups for documents in the project's Document Set.

Basis:

- IIBA BABOK v3 elicitation techniques: Interviews, Document Analysis, Brainstorming.
- ISO/IEC/IEEE 29148:2018 BRS and StRS content: each question maps to a section of `Context/BRS-Template.md` or `Context/StRS-Template.md`.
- IIBA BABOK v3 requirements classification and Business Case technique for BRD questions (`Context/BRD-Template.md`).
- Product management practice (SVPG, Aha!, Atlassian) for PRD questions (`Context/PRD-Template.md`).
- Scrum Guide 2020 and IIBA BABOK v3 Backlog Management for Delivery questions (`Context/Backlog-Template.md`, `Context/Release-Plan-Template.md`).
- ISO/IEC 29100 privacy principles for privacy questions.

## 2. Usage Rules

1. Ask **3 to 5 questions per turn**, most blocking first.
2. Skip questions already answered clearly by a source. Ask again only when the source answer is ambiguous.
3. Phrase questions in the project Output Language. Keep question IDs unchanged.
4. Offer options and a recommendation where useful, but always accept a free answer.
5. Adapt wording to the user. Avoid jargon such as "stakeholder" or "operational scenario" with non-technical users; the hints column gives plain-language wording.
6. Record every answer with the source reference `Discovery Interview, session YYYY-MM-DD, Q-<ID>`.
7. The question bank is a minimum, not a limit. Ask follow-up questions whenever an answer is ambiguous, incomplete, or contradicts another source.

## 3. Profile Applicability Legend

| Code | Meaning |
|---|---|
| `A` | Ask. Required for this profile. |
| `C` | Conditional. Ask when earlier answers make it relevant. |
| `-` | Skip unless the user raises the topic. |

## 4. Stage S0 - Intake Questions

| ID | Question | Plain-Language Hint | Target Field | PERSONAL | TEAM | SME |
|---|---|---|---|:-:|:-:|:-:|
| Q-INT-001 | What is the project name? | A working name is fine. | Project State: Project Name | A | A | A |
| Q-INT-002 | Describe the idea in two or three sentences: what it is, who it is for, and why it matters. | "Explain it like you would to a friend." | Project State: Idea Statement | A | A | A |
| Q-INT-003 | Who is building and deciding on this product: only you, a team, or a business or start-up? | Options: PERSONAL / TEAM / SME. | Project State: Project Profile | A | A | A |
| Q-INT-004 | Roughly how many types of users, main features, and external integrations do you expect? Are there legal or industry regulations? | Used to recommend Tier 1, 2, or 3. | Project State: Tier | A | A | A |
| Q-INT-005 | In which language should the documents be written? | IDs and statuses stay in English. | Project State: Output Language | A | A | A |
| Q-INT-006 | Who approves the documents, and who reviews them? | For PERSONAL, this is usually you. | Project State: Approver, Reviewers | A | A | A |
| Q-INT-007 | When information is missing, should I always ask you, or may I propose minor assumptions for you to confirm later? | Options: `ask` (default) / `allow-minor`. | Project State: Assumption Policy | A | A | A |
| Q-INT-008 | Do you have existing material such as notes, mockups, spreadsheets, competitor links, or earlier documents? | Add them to `Context/`. | Project State: Source Register | A | A | A |
| Q-INT-009 | Which documents do you need? (Business: BRS and/or BRD; Users and product: StRS and/or PRD; Software: SRS; optional: Backlog, Release Plan) | Explain each in one sentence and recommend a set for the profile. | Project State: Document Set | A | A | A |
| Q-INT-010 | Where should I save the documents? | If you have no preference, I will use `ProjectDocuments/<ProjectName>/`. | Project State: Output Location | A | A | A |
| Q-INT-011 | You chose two documents for the same layer. Which one should be the main source? | Example: BRD as the main document, BRS references it. | Project State: Primary Per Layer | C | C | C |
| Q-INT-012 | What should the PRD cover: the whole product, one release, or one feature? | Ask only when a PRD is in the Document Set. | Project State: PRD Scope | C | C | C |
| Q-INT-013 | Do you want user stories, a release plan, or a product backlog? | Any "yes" means a Standard PRD; "no" to all means a Lean PRD. A backlog or release plan is added as a separate document. | Project State: PRD Variant, Delivery Options | C | C | C |

## 5. Stage S1 - BRS Questions

| ID | Question | Plain-Language Hint | BRS Section | PERSONAL | TEAM | SME |
|---|---|---|---|:-:|:-:|:-:|
| Q-BRS-001 | What problem does this solve, for whom, and how do people deal with it today? | "What is annoying or costly right now?" | 3.2.1 Problem Statement | A | A | A |
| Q-BRS-002 | Why build it now, and what happens if it is never built? | Urgency and cost of doing nothing. | 1.1 Business Purpose | C | A | A |
| Q-BRS-003 | What should be true in 6 to 12 months if the project succeeds? | These become business goals. | 3.2.2 Business Goals | A | A | A |
| Q-BRS-004 | How will you measure success? Give a number and a date where possible. | Example: "50 weekly active users by March". | 3.2.3 Success Criteria | A | A | A |
| Q-BRS-005 | What is included in the first release, and what is explicitly not included? | Keep the first release small. | 1.2 Business Scope | A | A | A |
| Q-BRS-006 | Who cares about this product: who uses it, pays for it, decides on it, or is affected by it? | These become stakeholders. | 1.5 Major Stakeholders | C | A | A |
| Q-BRS-007 | What alternatives or competitors exist, and how will this product be different? | Includes "doing it by hand" or spreadsheets. | 3.1 Business Environment | C | A | A |
| Q-BRS-008 | Which customer segment or market do you target, and roughly how large is it? | Who will buy or use it first. | 3.1 Business Environment | - | C | A |
| Q-BRS-009 | How does the product create value and, if applicable, earn revenue or reduce cost? | Pricing, subscriptions, ads, internal savings. | 3.3 Business Model | - | C | A |
| Q-BRS-010 | Walk me through how the work is done today, step by step. | Who does what, with which tools. | 4.1 Business Processes (Current) | C | A | A |
| Q-BRS-011 | How should the work be done once the product exists? | The future way of working. | 4.1 Business Processes (Target) | C | A | A |
| Q-BRS-012 | Which rules or policies must the product follow, such as pricing, eligibility, approvals, deadlines, or limits? | These become business rules. | 4.2 Business Operational Policies And Rules | C | A | A |
| Q-BRS-013 | Are there operating constraints such as business hours, regions, languages, currencies, or seasonal peaks? | | 4.3 Business Operational Constraints | C | C | A |
| Q-BRS-014 | Which existing tools, systems, or data sources must the product work with or replace? | Spreadsheets, CRM, payment, email. | 3.4 Information Environment | C | A | A |
| Q-BRS-015 | Are there different operating modes, such as normal, peak season, maintenance, or emergency? | | 4.4 Business Operational Modes | - | C | C |
| Q-BRS-016 | From a business view, what quality level is expected, such as uptime during business hours or acceptable downtime? | Business-level expectations, not technical design. | 4.5 Business Operational Quality | - | C | A |
| Q-BRS-017 | Which departments, roles, or partners take part in the business process? | | 4.6 Business Structure | - | C | A |
| Q-BRS-018 | Will the product collect or process personal data? Which kinds? | Names, emails, phone numbers, locations, health or payment data. | 4.7 Privacy And Compliance | A | A | A |
| Q-BRS-019 | In which countries will the product operate and where are its users? Is the business in a regulated sector such as finance, health, or education? | Used only to raise compliance questions. | 4.7 Privacy And Compliance | C | C | A |
| Q-BRS-020 | What is the budget or cost limit for building and running the product? | A range is fine. | 7 Project Constraints | C | C | A |
| Q-BRS-021 | What is the target date or main milestones? | | 7 Project Constraints | A | A | A |
| Q-BRS-022 | Who will build it, with which skills? Is any technology required or forbidden? | | 7 Project Constraints | A | A | A |
| Q-BRS-023 | After launch, who will operate, support, and maintain the product? Is there a planned end of life? | | 6 Preliminary Life-Cycle Concepts | - | C | A |
| Q-BRS-024 | What are the biggest risks or unknowns you see? | | 8 Open Questions, Decisions And Risks | C | A | A |

## 6. Stage S2 - StRS Questions

| ID | Question | Plain-Language Hint | StRS Section | PERSONAL | TEAM | SME |
|---|---|---|---|:-:|:-:|:-:|
| Q-STRS-001 | Which types of users will use the product? For each, how often and how comfortable are they with technology? | These become user classes. | 5.1 User Classes | A | A | A |
| Q-STRS-002 | For each user type, what are the top three things they need to accomplish? | These become stakeholder requirements. | 5.2 Stakeholder Requirements | A | A | A |
| Q-STRS-003 | For each user type, what frustrates them today, and what would make them adopt the product? | | 5.2 Stakeholder Requirements | C | A | A |
| Q-STRS-004 | Who administers or operates the product, such as managing users, content, settings, or data? | | 5.1 User Classes | C | A | A |
| Q-STRS-005 | Describe the most important user journey from start to finish. | "Tell me the story of a typical use." | 6.2 Operational Scenarios | A | A | A |
| Q-STRS-006 | What can go wrong during that journey, and what should happen then? | | 6.2 Operational Scenarios | C | A | A |
| Q-STRS-007 | On which devices and environments will users use the product: web, mobile, desktop, offline, poor connectivity? | | 6.1 Operational Concept | A | A | A |
| Q-STRS-008 | Do users have accessibility or language needs? | Screen readers, large text, multiple languages. | 5.3 Stakeholder Quality Expectations | C | C | A |
| Q-STRS-009 | From a user view, what does "fast enough", "available enough", and "easy enough" mean? | Ask for numbers where possible. | 5.3 Stakeholder Quality Expectations | C | A | A |
| Q-STRS-010 | Which outside services are needed, such as payments, email, SMS, maps, or social login? | | 6.1 Operational Concept | C | A | A |
| Q-STRS-011 | What information do users create or see, and who must not see it? | Basis for data and access needs. | 5.2 Stakeholder Requirements | C | A | A |
| Q-STRS-012 | Which notifications or messages should users receive, and through which channels? | | 5.2 Stakeholder Requirements | C | C | A |
| Q-STRS-013 | Which reports, dashboards, or exports does anyone need? | | 5.2 Stakeholder Requirements | - | C | A |
| Q-STRS-014 | How will users obtain or access the product: app store, website, internal link, installation? | | 6.4 Deployment Concept | C | A | A |
| Q-STRS-015 | How will users be onboarded and supported when they have problems? | | 6.5 Support Concept | - | C | A |
| Q-STRS-016 | How long should user data be kept, and what should happen when a user leaves or the product is retired? | | 6.6 Retirement Concept | C | C | A |
| Q-STRS-017 | Which of these needs are Must for the first release, and which can wait? | MoSCoW: Must / Should / Could / Won't. | 5.2 Stakeholder Requirements | A | A | A |
| Q-STRS-018 | How will you and the stakeholders confirm that the product meets the needs: demo, pilot users, acceptance test? | Basis for validation criteria. | 5.2 Stakeholder Requirements | C | A | A |

## 7. Stage S1 - BRD Questions

Ask in addition to the S1 BRS questions when a BRD is in the Document Set. When both BRS and BRD exist, ask each question once and record the answer in the primary document.

| ID | Question | Plain-Language Hint | BRD Section | PERSONAL | TEAM | SME |
|---|---|---|---|:-:|:-:|:-:|
| Q-BRD-001 | Who sponsors or funds this initiative, and who makes the final decision? | | 0 Document Control, 4.1 Stakeholder Register | C | A | A |
| Q-BRD-002 | Which options did you consider, including doing nothing? | | 2.4 Business Case | - | C | A |
| Q-BRD-003 | Which benefits do you expect? Give numbers if you can, such as revenue, hours saved, or costs avoided. | I will not invent numbers. | 2.4 Business Case | - | C | A |
| Q-BRD-004 | What will it cost to build and to run? A range is fine. Who pays? | | 2.4 Business Case | - | C | A |
| Q-BRD-005 | Over which period should the investment pay off or be evaluated? | | 2.4 Business Case | - | - | A |
| Q-BRD-006 | For key decisions and deliverables, who is responsible, accountable, consulted, and informed? | RACI. | 4.2 RACI | - | C | A |
| Q-BRD-007 | Which existing data must be moved into the new solution, and how reliable is it? | | 6.4 Transition Requirements | C | C | A |
| Q-BRD-008 | Who needs training or a new way of working? | | 6.4 Transition Requirements | - | C | A |
| Q-BRD-009 | How should the switch from old to new happen: all at once, in phases, or running both in parallel? Is there a downtime limit? | | 6.4 Transition Requirements | - | C | A |
| Q-BRD-010 | Which old tools or processes will be retired, and when? | | 6.4 Transition Requirements | - | C | C |
| Q-BRD-011 | Which reports or data do managers or owners need from the solution? | | 8 Data And Reporting Needs | - | C | A |
| Q-BRD-012 | Which differences between today and the future state worry you most? | | 5.3 Gap Summary | - | C | A |

## 8. Stage S2 - PRD Questions

Ask when a PRD is in the Document Set, after Q-INT-012 and Q-INT-013. When a StRS also exists, skip questions already answered there and reference its IDs. The `Variant` column shows which PRD variant uses the answer.

| ID | Question | Plain-Language Hint | PRD Section | Variant | PERSONAL | TEAM | SME |
|---|---|---|---|---|:-:|:-:|:-:|
| Q-PRD-001 | Which goals should this product or release achieve, and how will you measure each one? | Number plus date where possible. | 3 Goals And Success Metrics | Both | A | A | A |
| Q-PRD-002 | What will this product or release explicitly not do? | Non-goals prevent scope creep. | 4 Non-Goals And Out Of Scope | Both | A | A | A |
| Q-PRD-003 | Describe your main types of users: who they are, what they want, what frustrates them, and where they use the product. | These become personas. | 5 Target Users And Personas | Both | A | A | A |
| Q-PRD-004 | What are the two or three most important things users do with the product, from start to finish? | | 6 Key Scenarios | Both | A | A | A |
| Q-PRD-005 | Which features do you have in mind, and which are essential for the first release? | MoSCoW: Must / Should / Could / Won't. | 7.1 Feature List | Both | A | A | A |
| Q-PRD-006 | For each essential feature, what must a user be able to do, and how would you check it works? | Basis for user stories and acceptance criteria. | 8 User Stories | Standard | C | A | A |
| Q-PRD-007 | What do users expect about speed, availability, security, accessibility, and devices? | Ask for numbers where possible. | 9 Product Quality Requirements | Both | C | A | A |
| Q-PRD-008 | Do you have wireframes, mockups, or design references? | | 10 UX And Design References | Both | C | C | C |
| Q-PRD-009 | Which assumptions are you making, and what depends on other people, teams, or services? | | 11 Assumptions, Constraints And Dependencies | Both | A | A | A |
| Q-PRD-010 | Which conditions must be true before you release? | Example: all essential features accepted, no critical bugs. | 12 Release Criteria | Standard | C | A | A |
| Q-PRD-011 | Do you already know key dates or milestones? | Only dates you provide are recorded. | 13 Milestones | Standard | C | C | A |
| Q-PRD-012 | What are the biggest product risks or unknowns? | | 14 Risks, Open Questions And Decisions | Both | C | A | A |

## 9. Stage S6 - Delivery Questions

Ask only for Delivery documents in the Document Set. The Agent never fills these answers by inference.

| ID | Question | Plain-Language Hint | Target | Ask When |
|---|---|---|---|---|
| Q-DLV-001 | What future state of the product should the backlog work toward? | The Product Goal. | Backlog 1 Product Goal | Backlog |
| Q-DLV-002 | How do you want to estimate: story points, ideal days, T-shirt sizes, or no estimates? Who gives the estimates? | | Backlog 2 Backlog Conventions | Backlog |
| Q-DLV-003 | When is an item "done"? | Definition of Done; I can offer a starting checklist for you to confirm. | Backlog 3 Definition Of Done | Backlog |
| Q-DLV-004 | How should items be ordered: by value, risk, dependencies, or deadlines? | | Backlog 2 Backlog Conventions | Backlog |
| Q-DLV-005 | How many releases do you plan, or how often do you want to release? | | Release Plan 1 Planning Basis | Release Plan |
| Q-DLV-006 | Are there fixed deadlines or target dates? | Only dates you provide are recorded. | Release Plan 1 Planning Basis, 4 Milestones | Release Plan |
| Q-DLV-007 | Do you want me to compare the plan with team capacity? If yes, what is the capacity per period? | Optional. | Release Plan 1 Planning Basis | Release Plan |
| Q-DLV-008 | Which features must be in the first release? | | Release Plan 2 Release Overview | Release Plan |
| Q-DLV-009 | Do other teams, vendors, or events affect release timing? | | Release Plan 5 Dependencies | Release Plan |

## 10. Fatal Gap Questionnaire

When SRS work is requested but `Agent/01-Core/01-Input Contract.md` mandatory inputs are missing and the user declines Discovery Mode, ask at minimum:

| Missing Input | Questions |
|---|---|
| Problem statement or business objective | Q-BRS-001, Q-BRS-003 |
| Target audience or user classes | Q-STRS-001, Q-STRS-002 |
| Core feature list | Q-BRS-005, Q-STRS-002, Q-STRS-017 |

## 11. Cross-References

- Discovery workflow: `Agent/02-Discovery/01-Discovery Workflow.md`
- BRS and StRS tailoring: `Agent/02-Discovery/03-BRS-StRS Output Contract.md`
- BRD rules: `Agent/02-Discovery/04-BRD Output Contract.md`
- PRD rules: `Agent/02-Discovery/05-PRD Output Contract.md`
- Delivery workflow: `Agent/04-Delivery/01-Delivery Workflow.md`
- Document set and output location: `Agent/01-Core/09-Document Set And Output Location.md`
- Clarification Question format: `Agent/01-Core/06-Human Interaction Protocol.md`
