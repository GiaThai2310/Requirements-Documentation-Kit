# 09 - Document Set And Output Location

## 1. Purpose

This file defines:

1. **Document Set**: which requirements documents a project produces, chosen per project by the user.
2. **No-duplication rules**: how documents that cover the same layer share content without restating it.
3. **File naming**: fixed file names per document type.
4. **Output Location**: where the documents are saved, chosen by the user, with a default.

## 2. Supported Documents

| Layer | Document | Basis | Kit Rules | Template |
|---|---|---|---|---|
| Business | BRS - Business Requirements Specification | ISO/IEC/IEEE 29148:2018 | `Agent/02-Discovery/03-BRS-StRS Output Contract.md` | `Context/BRS-Template.md` |
| Business | BRD - Business Requirements Document | IIBA BABOK v3 requirements classification and techniques; industry practice. No ISO standard defines a BRD. | `Agent/02-Discovery/04-BRD Output Contract.md` | `Context/BRD-Template.md` |
| Stakeholder / Product | StRS - Stakeholder Requirements Specification | ISO/IEC/IEEE 29148:2018 | `Agent/02-Discovery/03-BRS-StRS Output Contract.md` | `Context/StRS-Template.md` |
| Stakeholder / Product | PRD - Product Requirements Document (Lean or Standard) | Product management practice (SVPG, Aha!, Atlassian), ISO/IEC/IEEE 15289 generic specification content, ISO/IEC 25010, ISO 9241-210. No ISO or IEEE standard defines a PRD. | `Agent/02-Discovery/05-PRD Output Contract.md` | `Context/PRD-Template.md` |
| Software | SRS - Software Requirements Specification | ISO/IEC/IEEE 29148:2018 | `Agent/03-SRS/` | `Context/SRS-Template.md` |
| Delivery (optional) | Product Backlog | Scrum Guide 2020; IIBA BABOK v3 Backlog Management and User Stories techniques | `Agent/04-Delivery/01-Delivery Workflow.md` | `Context/Backlog-Template.md` |
| Delivery (optional) | Release Plan | ISO/IEC/IEEE 15289 generic plan content; ISO/IEC 29110 project planning concepts; MoSCoW timeboxing | `Agent/04-Delivery/01-Delivery Workflow.md` | `Context/Release-Plan-Template.md` |

## 3. Choosing The Document Set

The Document Set is decided by the user in Stage S0. The Agent must never choose it silently.

1. Explain the layers in one or two sentences each, in plain language.
2. Recommend a set for the profile (Section 4) with reasoning, and ask the user to confirm or change it.
3. If a layer has two documents selected, ask which one is **primary** (Section 5).
4. If the set has no PRD or StRS but includes an SRS, or has no SRS at all, explain the consequence and ask the user to confirm.
5. For a PRD, follow the variant selection flow in `05-PRD Output Contract.md` Section 2 (scope first, then user stories, backlog, and release plan).
6. Record the set, the primary document per layer, the PRD variant, and the Delivery options in `00-Project-State.md`.
7. If the user later wants to add or remove a document, ask whether existing content should be referenced or migrated, and record the decision.

## 4. Recommended Sets By Profile

Recommendations only. The user decides.

| Profile | Recommended Set | Reasoning To Present |
|---|---|---|
| PERSONAL | Lean PRD + SRS | Shortest path that still produces testable requirements. |
| TEAM | PRD + SRS, or BRS + StRS + SRS | PRD suits product teams; BRS and StRS suit academic or ISO-aligned projects. Ask which applies. |
| SME | BRD + PRD + SRS; add BRS and StRS when a contract or customer requires ISO/IEC/IEEE 29148 documents | BRD and PRD are the formats founders, investors, and product teams usually expect. |

Delivery documents (Backlog, Release Plan) are never recommended by default. They are added only when the user asks for them or answers yes to the PRD questions.

## 5. No-Duplication Rules

Each piece of content has exactly one owner document. Other documents reference it by ID.

### 5.1 Ownership When Only One Document Exists In A Layer

| Layer Document | Owns |
|---|---|
| BRS or BRD | `BG`, `SC`, `BP`, `BR`, `STK`, `CON` (business and project constraints) |
| StRS | `UCL`, `STR`, `OPS` |
| PRD (without StRS) | `UCL` (personas), `STR` (key needs), `OPS` (key scenarios), plus its own `F`, `US`, release criteria |
| PRD (with StRS) | `F`, `US`, release criteria, milestones; references `UCL`, `STR`, `OPS` from the StRS |
| SRS | `UC`, `FR`, `NFR`, `AC`, data, interface, state, and error items; references upstream IDs. When a PRD exists, the SRS reuses the PRD `F` IDs in Section 5 instead of creating new ones. |
| Backlog | `EP`, backlog order, estimates, Definition of Done; references `US` from the PRD, or owns `US` when the PRD has none |
| Release Plan | `RLS`, `MS`; references `F` and `US` |

### 5.2 Two Documents In One Layer

When both BRS and BRD, or both StRS and PRD, are selected:

1. Ask the user which document is **primary**. The primary document is written first and owns the shared IDs from Section 5.1.
2. The secondary document references the primary document's IDs and adds only its own content:
   - BRD secondary to BRS: business case, transition requirements (`TRN`), RACI, executive summary.
   - BRS secondary to BRD: the ISO/IEC/IEEE 29148 sections not covered by the BRD (business operational modes, preliminary life-cycle concepts), plus references.
   - PRD secondary to StRS: features, user stories, release criteria, milestones.
   - StRS secondary to PRD: the ISO/IEC/IEEE 29148 sections not covered by the PRD (detailed life-cycle concepts, full operational scenarios), plus references.
3. The secondary document must not introduce a new requirement that contradicts or duplicates the primary one. A new need discovered while writing it is added to the primary document first, after asking the user.

### 5.3 Upstream Trace

The SRS and Delivery documents trace to whichever upstream documents exist:

```text
BG -> (STR and/or F/US) -> FR/NFR -> AC -> (EP/US in Backlog -> RLS in Release Plan)
```

## 6. File Naming

Files use fixed names. The numeric prefix shows the layer, so two documents in the same layer share a prefix.

| Document | File Name |
|---|---|
| Project State | `00-Project-State.md` |
| BRS | `01-BRS.md` |
| BRD | `01-BRD.md` |
| StRS | `02-StRS.md` |
| PRD | `02-PRD.md` |
| SRS | `03-SRS.md` |
| Backlog | `04-Backlog.md` |
| Release Plan | `04-Release-Plan.md` |
| Reports | `Reports/<Report-Name>-YYYY-MM-DD.md` |
| Change Requests | `Change-Requests/CR-<DOMAIN>-<NNN>.md` |

## 7. Output Location

### 7.1 Asking For The Location

In Stage S0, the Agent asks where the documents should be saved (question `Q-INT-010`).

1. If the user gives a path, restate the resolved path and ask for confirmation before creating anything.
2. If the user does not give a path, says they do not mind, or asks for the default, use the default:

```text
ProjectDocuments/<ProjectName>/
```

   relative to the working directory, and tell the user the resolved path.
3. If the project name is unknown, ask for it before creating the folder.
4. Record the confirmed path as `Output Location` in `00-Project-State.md`.

In all kit files, `<OutputLocation>` means this confirmed path.

### 7.2 Write Boundary

- The Agent may create and modify files only inside `<OutputLocation>`.
- The Agent must not accept an Output Location inside `Agent/`, `Context/`, or `Human/`. Ask for another path.
- If the chosen folder already contains files, list them and ask before writing into the folder. Never overwrite an existing file without explicit confirmation.
- If the chosen folder is inside a git repository and is not ignored by `.gitignore`, mention once that the documents may be committed and shared, and ask whether to continue.
- Absolute paths outside the working directory are allowed only when the user gives them explicitly.

### 7.3 Resuming A Project

1. Look for `ProjectDocuments/*/00-Project-State.md` in the working directory.
2. If exactly one project matches the user's request, use it. If several match or none is found, ask the user for the project name or path.
3. Legacy projects in `Project/<ProjectName>/` (kit versions before this file existed): treat that folder as the Output Location and ask whether to keep it or move it to `ProjectDocuments/<ProjectName>/`.
4. Do not create index files outside the Output Location to remember custom paths.

## 8. Cross-References

- Discovery workflow: `Agent/02-Discovery/01-Discovery Workflow.md`
- Project profiles: `Agent/01-Core/08-Project Profiles.md`
- Output rules: `Agent/01-Core/05-Output Rules.md`
- Human interaction: `Agent/01-Core/06-Human Interaction Protocol.md`
- Delivery workflow: `Agent/04-Delivery/01-Delivery Workflow.md`
