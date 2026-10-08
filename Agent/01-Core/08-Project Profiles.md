# 08 - Project Profiles

## 1. Purpose

This file defines the **Project Profile**, the governance axis of the kit. A profile describes *who* builds and approves the work (one person, a team, or a business). It controls approval roles, document control, change control formality, and the depth of the BRS and StRS.

The profile is independent from the **Tier** (Tier 1-3, defined in `Agent/03-SRS/02-SRS Output Contract.md`), which describes *technical complexity* and controls which SRS sections are required.

```text
Profile (governance)  x  Tier (complexity)  ->  tailored document set
```

Basis:

- ISO/IEC 29110 (Lifecycle profiles for Very Small Entities): defines graduated profiles (Entry, Basic, Intermediate, Advanced) so that small organizations and start-ups apply proportionate process rigor. The profiles below follow the same principle; they are not a certification claim against ISO/IEC 29110.
- ISO/IEC/IEEE 29148:2018: allows information items (BRS, StRS, SRS) to be tailored to the project, provided that tailoring decisions are documented.

## 2. Profile Definitions

| Profile | Code | Typical Situation | Comparable ISO/IEC 29110 Spirit |
|---|---|---|---|
| Personal | `PERSONAL` | One person builds the product for themself, for learning, a portfolio, or a small side project. | Entry |
| Team | `TEAM` | 2 or more people build together: a student group project, a hackathon team, an internal team tool, an open-source project. | Entry / Basic |
| SME-Startup | `SME` | A small or medium business or a start-up builds a product for customers, investors, or business operations. | Basic and above |

## 3. Determining The Profile

The Agent must **never infer the profile silently**. Follow `Agent/01-Core/06-Human Interaction Protocol.md` (Ask-When-Uncertain):

1. If `Context/Context.md` or `<OutputLocation>/00-Project-State.md` states a profile, use it.
2. Otherwise, ask the user during Stage S0 using a Clarification Question. The Agent may give a recommendation with reasoning, for example: "The brief mentions paying customers and a founder, so SME-Startup is recommended."
3. Ask for the Tier and the Output Language in the same question batch when they are also unknown.
4. Record the answers in `00-Project-State.md` and cite them as P1 sources.
5. If the user later describes facts that contradict the recorded profile (for example, a personal project gains paying customers), ask whether to change the profile. Do not change it silently.

## 4. Governance Matrix

| Aspect | PERSONAL | TEAM | SME |
|---|---|---|---|
| Approver | The user (self-approval by explicit instruction) | Named Product Owner or Team Lead | Named Business Owner or Founder; customer representative when contracted |
| Reviewer | Not required | At least one team member | Key stakeholders listed in the BRS |
| Recommended Document Set | See `09-Document Set And Output Location.md` Section 4 | See `09-Document Set And Output Location.md` Section 4 | See `09-Document Set And Output Location.md` Section 4 |
| BRS and BRD depth | Lite | Standard | Full |
| StRS depth | Lite | Standard | Full |
| PRD variant | Chosen by the user's answers (`05-PRD Output Contract.md` Section 2); Lean is typical | Chosen by the user's answers; Standard is typical | Chosen by the user's answers; Standard is typical |
| Backlog and Release Plan approver | The user | Product Owner or Team Lead | Business Owner or Product Owner named by the business |
| SRS Document Control (Section 0) | Optional | Required | Required |
| SRS Approval (Section 22) | Optional | Conditional | Required |
| Change control after `APPROVED` | Inline `[CHANGE]` annotation and revision history entry | Change Request file required | Change Request file required for every change after baseline |
| Privacy and compliance review | When personal data is processed | When personal data is processed | Always performed; see Section 6 |
| Stakeholder sign-off of BRS | Self-confirmation | Product Owner | Business Owner |

The BRS and StRS depth levels (Lite, Standard, Full) are defined in `Agent/02-Discovery/03-BRS-StRS Output Contract.md`; the BRD uses the same levels (`Agent/02-Discovery/04-BRD Output Contract.md`). The PRD variant is never derived from the profile alone; the profile only informs the recommendation.

## 5. Approval Rules By Profile

These rules refine `06-Human Interaction Protocol.md` Section 7. In every profile, the Agent never sets `APPROVED` on its own initiative.

| Profile | Who May Approve | Valid Approval Instruction |
|---|---|---|
| PERSONAL | The user | An explicit instruction such as "approve section 5" or "mark FR-AUTH-001 approved". |
| TEAM | The approver named in `00-Project-State.md` | An explicit instruction stating the approver name or role. If the person giving the instruction is not the named approver, ask for confirmation. |
| SME | The approver named in `00-Project-State.md` and the BRS stakeholder table | An explicit instruction stating the approver name and the decision date. Record it in SRS Section 22 or the relevant document approval table. |

## 6. Privacy And Compliance Review

When the product processes personal data, or always for the `SME` profile, the Agent must:

1. Ask which jurisdictions the product operates in and where its users are located.
2. Ask whether the business is subject to sector rules (finance, health, education, government).
3. Use ISO/IEC 29100 privacy principles (consent and choice, purpose limitation, data minimization, use and retention limitation, accuracy, openness, individual participation, accountability, security safeguards) as the review checklist.
4. List candidate legal obligations only as questions, for example "Does the product serve users covered by the GDPR or by Vietnam's personal data protection regulations?" The Agent must not conclude that a law applies or does not apply; mark such items `[REVIEW]` and record them as Open Questions.

## 7. Recording The Profile

`00-Project-State.md` must contain:

```markdown
| Field | Value |
|---|---|
| Project Profile | PERSONAL / TEAM / SME |
| Tier | 1 / 2 / 3 |
| Output Language | en / vi / other ISO 639-1 code |
| Assumption Policy | ask / allow-minor |
| Approver | <name or role> |
| Reviewers | <names or roles, or None> |
| Document Set | <documents chosen by the user> |
| Output Location | <confirmed path> |
```

## 8. Cross-References

- Human interaction and approval: `Agent/01-Core/06-Human Interaction Protocol.md`
- Discovery workflow: `Agent/02-Discovery/01-Discovery Workflow.md`
- BRS and StRS tailoring: `Agent/02-Discovery/03-BRS-StRS Output Contract.md`
- SRS tier tailoring: `Agent/03-SRS/02-SRS Output Contract.md`
- Document set and output location: `Agent/01-Core/09-Document Set And Output Location.md`
- Project state template: `Context/Project-State-Template.md`
