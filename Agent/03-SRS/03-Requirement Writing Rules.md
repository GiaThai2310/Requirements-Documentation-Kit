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

## 6. Required Requirement Structure

Use the format from `Agent/01-Core/05-Output Rules.md`:

```markdown
#### FR-AUTH-001 Email Format Validation

- **Priority**: Must
- **Status**: DRAFT
- **Source**: Direct Prompt (session YYYY-MM-DD)
- **Rationale**: Invalid email addresses prevent account verification.
- **Parent**: STR-AUTH-001
- **Verification Method**: Test
- **Acceptance Criteria**:
  1. Given a user enters an invalid email address, when the user submits the registration form, then the system shall display a validation message.
- **Dependencies**: None
- **Notes**: None
```

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

## 9. Level Of Detail

A requirement should describe required behavior, not implementation design, unless a design or technology constraint is explicitly provided by a source.

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

## 11. Cross-References

- Output format and language: `Agent/01-Core/05-Output Rules.md`
- Micro validation: `Agent/03-SRS/04-Micro Validation.md`
- Traceability: `Agent/03-SRS/07-Traceability Workflow.md`
- Stakeholder requirement rules: `Agent/02-Discovery/03-BRS-StRS Output Contract.md`
