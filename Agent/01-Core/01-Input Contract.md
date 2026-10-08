# 01 - Input Contract

## 1. Purpose

This file defines the contract between the human user, source documents, and the Agent. It specifies the minimum information required at each pipeline stage and the required behavior when information is missing, ambiguous, or incomplete.

The rules are based on common requirements engineering practice and on ISO/IEC/IEEE 29148 concepts: requirements must be based on stakeholder needs, have clear attributes, and remain traceable through the life cycle.

## 2. Mandatory Inputs By Stage

Mandatory inputs are defined per **layer**. Any document of the layer that is in the Document Set can satisfy them (`09-Document Set And Output Location.md`).

| Stage | Mandatory Input | Where It Comes From |
|---|---|---|
| S0 Intake | An idea statement: what the product is, who it is for, why it matters (one or two sentences are enough). | `Context/Context.md` Section 1, or the current user prompt |
| S1 Business (BRS/BRD) | Profile, Tier, Output Language, Approver, Document Set, and Output Location confirmed by the user. | Stage S0 answers recorded in `00-Project-State.md` |
| S2 Stakeholder & Product (StRS/PRD) | Problem statement, at least one business goal with a success criterion, and first-release scope. For a PRD, also the PRD scope and variant. | BRS or BRD in `REVIEW` or `APPROVED`; if the set has no business-layer document, the S0 answers plus Discovery answers |
| S3-S5 SRS | 1. **Problem Statement or Business Objective**. 2. **Target Audience or User Classes**. 3. **Core Feature List or Epic List**. | StRS or PRD in `REVIEW` or `APPROVED`, or source documents when the user chose to skip Discovery |
| S6 Delivery (optional) | User request for a backlog or release plan; features and user stories, or SRS functional requirements. | Standard PRD or SRS in `REVIEW` or `APPROVED` |

## 3. Valuable Optional Inputs

When available, the Agent should use these inputs to improve precision:

- Technical constraints such as platform, runtime, hosting, technology stack, security policies, or compliance obligations.
- Current workflow or manual process.
- Target workflow or future-state process.
- External systems, APIs, data sources, or hardware dependencies.
- Competitor systems, reference products, or inspiration systems.
- Known non-functional targets such as performance, availability, usability, security, privacy, accessibility, or maintainability.
- Budget, schedule, team size, and skills.

`Context/Context.md.example` is the structured intake form for these inputs.

## 4. Missing Data Protocol

### Rule 4.1 - Only An Idea Exists

If only an idea exists, or the SRS mandatory inputs are missing, the Agent must not generate SRS content. It must enter **Discovery Mode** (`Agent/01-Core/02-Run Modes.md`, Mode 0) and gather the missing information step by step using `Agent/02-Discovery/02-Elicitation Question Bank.md`.

If the user declines Discovery Mode, the Agent produces the Fatal Gap Questionnaire (`02-Elicitation Question Bank.md` Section 10) and halts until the answers are provided.

### Rule 4.2 - Partial Gap

If a detail is missing but the surrounding content is clear, the Agent may continue writing the clear parts. It must:

1. Mark the missing item at the exact location with `[TBD: description]`.
2. Create a matching Open Question (`OQ-<DOMAIN>-<NNN>`).
3. Ask the user that question at the end of the same turn, using the Clarification Question format in `06-Human Interaction Protocol.md`.

`[ASSUMPTION]` may be used only as permitted by the Assumption Policy (`04-Source Priority.md` Rule 3.3).

### Rule 4.3 - No Domain Guessing

The Agent must not assume standard industry features unless the user confirms them. When a feature seems logically implied, ask instead of adding it. For example:

- Correct: "An e-commerce checkout usually needs a cart or order review step. Should I include one?"
- Incorrect: silently adding a cart, or adding a blockchain ledger without source evidence.

### Rule 4.4 - Ambiguous Input

If an input can reasonably be read in more than one way, the Agent must ask which reading is intended before writing requirements based on it.

## 5. Entry Checklist

Before writing, the Agent must answer:

| Check | Required Result |
|---|---|
| Current stage is known (from `00-Project-State.md` or the user) | Yes |
| Project Profile and Tier are confirmed by the user | Yes |
| Mandatory inputs for the current stage exist | Yes |
| Source priority can be determined | Yes |
| Document Set is confirmed by the user | Yes |
| Output Location is confirmed by the user (or the default was accepted) | Yes |

If any check fails, ask the user following `06-Human Interaction Protocol.md`.
