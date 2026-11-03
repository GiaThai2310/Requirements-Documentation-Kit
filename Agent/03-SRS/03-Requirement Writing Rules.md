# 03 - Requirement Writing Rules

## 1. Purpose

This document defines how to write individual requirements. Every requirement must be atomic, unambiguous, necessary, feasible, verifiable, and traceable.

The primary syntax is EARS: Easy Approach to Requirements Syntax.

## 2. EARS Patterns

| Pattern | Template | Use |
|---|---|---|
| Ubiquitous | The `<system>` shall `<action>`. | Always-active behavior. |
| Event-driven | When `<trigger>`, the `<system>` shall `<action>`. | Behavior triggered by an event. |
| State-driven | While `<state>`, the `<system>` shall `<action>`. | Behavior active only in a state. |
| Unwanted behavior | If `<condition>`, then the `<system>` shall `<action>`. | Error handling or exception behavior. |
| Optional feature | Where `<feature is enabled>`, the `<system>` shall `<action>`. | Configurable or optional behavior. |

Compound EARS patterns are allowed only when they remain readable and testable. If a statement contains more than three clauses or more than one obligation, split it.

## 3. Mandatory Keyword

Use `shall` for mandatory requirements.

Do not use these words as requirement keywords:

- `should`
- `will`
- `must`
- `can`
- `may`

Use MoSCoW priority separately in the `Priority` field, not inside the requirement statement.

For a non-English Output Language, use the single mandatory keyword recorded in `00-Project-State.md` (Vietnamese: `phải`) and avoid weaker verbs in that language (Vietnamese: `sẽ`, `nên`, `có thể`). See `Agent/01-Core/05-Output Rules.md` Section 12.

## 4. Forbidden Vague Terms

Avoid untestable language in requirement statements:

| Avoid | Replace With |
|---|---|
| user-friendly | Specific usability criterion |
| fast, quickly | Time threshold |
| efficient | Resource threshold |
| appropriate, suitable | Explicit criteria |
| easy, simple | Measurable task outcome |
| etc., and so on | Complete list or catalog reference |
| minimize, maximize | Specific target |
| support | Specific capability |
| handle | Specific response |
| real-time | Latency threshold |
| seamless | Observable integration behavior |
| robust | Fault-tolerance or availability metric |

## 5. Atomicity

Each requirement must express one main obligation. Split compound requirements.

Incorrect:

```text
The system shall validate the email address and send a verification code.
```

Correct:

```text
FR-AUTH-001: The system shall validate the email address against the configured email format rule.
FR-AUTH-002: When email validation succeeds, the system shall send a verification code to the provided email address.
```

### 5.1 Requirement With A Rule Table

Atomicity means one obligation, not one condition. When several checks share the same trigger and the same kind of response, write one requirement that references a rule table (a business rule in SRS Section 7 or a validation table in Section 9.4). Each rule in the table becomes one acceptance criterion.

Incorrect (one requirement per check):

```text
FR-UPL-001: The system shall detect the file type from the file content.
FR-UPL-002: If the file type is not PDF, DOCX, JPG, or PNG, then the system shall reject the file and show the reason.
FR-UPL-003: If the file type differs from the file extension, then the system shall reject the file and show the reason.
FR-UPL-004: If the file is larger than 20 MB, then the system shall reject the file and show the reason.
```

Correct (one obligation, rules in a table):

```text
BR-UPL-001 (Validation): An uploaded file is accepted only when every rule holds:
  R1 the file type detected from its content is PDF, DOCX, JPG, or PNG;
  R2 the detected type matches the file extension;
  R3 the file size is at most 20 MB.

FR-UPL-001: If an uploaded file violates a rule of BR-UPL-001, then the system shall reject the file and show the reason of the first violated rule.
  Acceptance criteria: one Given/When/Then per rule (R1, R2, R3).
```

Use separate requirements when the responses differ (for example, one rule rejects the file and another only warns), when the rules have different priorities, or when they belong to different domains.

### 5.2 Granularity By Rigor

The domain's rigor level (`02-SRS Output Contract.md` Section 2.2) decides how much detail each requirement carries, not how many requirements exist. Do not split a requirement only to create more IDs, and do not merge obligations only to create fewer.

## 6. Required Requirement Structure

Use the format from `Agent/01-Core/05-Output Rules.md`:

```markdown
#### FR-AUTH-001 Email Format Validation

- **Statement**: The system shall validate the email address against the email format rule BR-AUTH-001.
- **Priority**: Must
- **Status**: DRAFT
- **Source**: Direct Prompt (session YYYY-MM-DD)
- **Parent**: STR-AUTH-001
- **Verification Method**: Test
- **Acceptance Criteria**:
  1. Given a user enters an invalid email address, when the user submits the registration form, then the system shall display a validation message.
- **Rationale**: Invalid email addresses prevent account verification.
- **Dependencies**: None
- **Notes**: None
```

The fields required for each rigor level are in `Agent/01-Core/05-Output Rules.md` Section 3. A `Light` domain writes its requirements as rows of one table instead of blocks.

## 7. Acceptance Criteria

Every functional requirement must have at least one acceptance criterion. Acceptance criteria must be:

- Testable.
- Specific.
- Independent where possible.
- Written as Given/When/Then or a direct measurable assertion.

Preferred form:

```markdown
1. Given [initial condition], when [event], then [observable result].
```

## 8. Non-Functional Requirements

Non-functional requirements must include measurable conditions.

Incorrect:

```text
The system shall be fast.
```

Correct:

```text
The system shall respond to search requests within 2 seconds at the 95th percentile under 500 concurrent users.
```

### 8.1 Measurement Method For Metric-Based Requirements

A requirement, success criterion, or acceptance criterion that uses a metric (a percentage, rate, ratio, percentile, score, accuracy, precision, recall, F1, or any other statistic) is verifiable only when its measurement method is stated. State, in the requirement or its acceptance criteria:

| Element | Question It Answers | Example |
|---|---|---|
| Population | What is measured, and under which conditions? | 20 labeled contracts; text-layer documents of 20 pages; 500 concurrent users |
| Ground truth | What counts as the correct answer? | Labels produced by two reviewers, disagreements resolved by a third |
| Matching rule | When does an output count as correct, missed, or extra? | A finding is correct when it points to the labeled clause and has the labeled primary category |
| Computation | How is the number calculated? | Recall = correct High and Critical findings / labeled High and Critical findings |

This is one or two sentences of requirement content, not a test plan or a procedure. If an element is unknown, mark it `[TBD]` and create an Open Question (`04-Micro Validation.md` C10).

## 9. Requirements Versus Design Boundary

A requirement describes required behavior and observable qualities, not the design that delivers them. The kit stops at requirements analysis.

| Belongs To Requirements (Write In The SRS) | Belongs To Design (Do Not Write In The SRS) |
|---|---|
| Business entities, their attributes, relationships, constraints, ownership, lifecycle, retention | Tables, columns, keys, indexes, naming conventions, database types, storage engines |
| What crosses the system boundary and what the user or partner observes | Endpoints, payloads, message formats, protocols, timeout and retry values |
| Measurable quality targets and how they are measured | Architecture, frameworks, libraries, deployment topology |
| Verifiable UI behavior and accessibility needs | Layout, visual style, components, wireframes |
| Business rules, including formulas and decision tables | Algorithms, prompts, model choice, code structure |

Exceptions:

1. When a source mandates a design or technology decision (for example, "must run on the customer's PostgreSQL" or "must use the partner's SOAP API"), record it as a constraint (`CON`) in SRS Section 2.5 and reference it from the affected items.
2. When a requirement leaves a design question open, list it in SRS Section 17.4 (Deferred To Design) with the requirements the design must respect, instead of writing "to be decided by design" inside requirement fields.
3. Design documents that exist (UI/UX design, system design) are referenced in SRS Section 18.3, not copied.

## 10. Non-Functional Requirement Categories (ISO/IEC 25010:2023)

Classify every NFR by an ISO/IEC 25010:2023 product quality characteristic in the `ISO/IEC 25010 Characteristic` column of SRS Section 11.1. The SRS subsections map as follows:

| ISO/IEC 25010:2023 Characteristic | Typical Sub-Characteristics | SRS Section | Category Code |
|---|---|---|---|
| Performance Efficiency | Time behaviour, resource utilization, capacity | 11.3 Performance, 11.6 Scalability | `PERF`, `SCAL` |
| Reliability | Faultlessness, availability, fault tolerance, recoverability | 11.4 Availability, 11.5 Reliability, 11.14 Backup And Recovery | `AVAIL`, `REL`, `BKP` |
| Security | Confidentiality, integrity, non-repudiation, accountability, authenticity, resistance | 11.7 Security, 11.8 Privacy, 11.13 Logging And Auditing | `SEC`, `PRIV`, `LOG` |
| Interaction Capability | Appropriateness recognizability, learnability, operability, user error protection, user engagement, inclusivity, user assistance, self-descriptiveness | 11.9 Usability, 11.12 Accessibility | `USAB`, `ACC` |
| Compatibility | Co-existence, interoperability | 11.11 Compatibility And Portability | `COMP` |
| Maintainability | Modularity, reusability, analysability, modifiability, testability | 11.10 Maintainability | `MAINT` |
| Flexibility | Adaptability, scalability, installability, replaceability | 11.6 Scalability, 11.11 Compatibility And Portability | `SCAL`, `PORT` |
| Safety | Operational constraint, risk identification, fail safe, hazard warning, safe integration | 11.16 Safety | `SAFE` |
| Not a product quality characteristic | Legal, regulatory, contractual obligations | 11.15 Compliance | `COMPL` |

Functional suitability (the ninth characteristic) is covered by functional requirements in Section 8 and acceptance criteria in Section 15.

Privacy requirements should also be checked against the ISO/IEC 29100 privacy principles when personal data is processed.

## 11. Business Rule Content By Category

A business rule must contain enough content to decide every case it governs. The minimum content depends on the rule category in SRS Section 7.1. It is required for every rule in a `Strict` domain, and for `Calculation`, `Authorization`, and `State` rules in a `Standard` domain (`02-SRS Output Contract.md` Section 2.2.3). The content goes in the `Rule Content` field of SRS Section 7.2.

| Category | Minimum Content |
|---|---|
| Calculation | The formula; every input and its source; units and rounding; boundary behavior (minimum, maximum, ties, missing inputs). |
| Eligibility, Validation | A condition table: each condition, the outcome when it holds, and the outcome when it fails. |
| Authorization | A permission matrix: roles or scopes against actions, including inherited and denied cases. |
| State | The states, the allowed transitions, the trigger and guard of each transition, and who or what performs it. Reference SRS Section 13 when the full model is there. |
| Timing | The time window, the reference clock or event the window starts from, and the outcome when the window ends. |
| Data, Policy, Compliance, Exception | The exact condition and the exact required outcome, and the source of the obligation for Compliance rules. |

A rule may defer part of its content only by stating explicitly: what is deferred, who decides it, by when or at which stage, and how the decision will be verified (for example, "weights calibrated by evaluation on the labeled set before release, decided by the approver"). A deferral without these four elements fails Micro Validation C3 (Complete).

## 12. Cross-References

- Output format and language: `Agent/01-Core/05-Output Rules.md`
- Micro validation: `Agent/03-SRS/04-Micro Validation.md`
- Traceability: `Agent/03-SRS/07-Traceability Workflow.md`
- Stakeholder requirement rules: `Agent/02-Discovery/03-BRS-StRS Output Contract.md`
