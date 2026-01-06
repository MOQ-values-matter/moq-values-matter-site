---
title: AI Execution Rules — MOQ Values Matter
description: Technical and operational rules governing how AI assistants must act when working inside the MOQ Values Matter repository.
---

## Scope

This document defines **how AI assistants must act** when editing, generating, proposing, or refactoring content in the **MOQ Values Matter** repository.

It is strictly **operational and technical**.

It complements (but does not replace):
- `AI-COORDINATOR.mdx` — how the AI should *reason*
- Canon governance documents — what is *allowed*

If there is a conflict:
1. Canon governance overrides
2. AI-COORDINATOR overrides
3. This file governs execution details

---

## Authoritative Content Root

All site-rendered content lives under:

src/content/docs/

yaml
Kopier kode

No AI assistant may place site content outside this directory.

---

## Approved Top-Level Content Folders

AI assistants must only use or modify content within these folders unless explicitly instructed otherwise:

- `fundamentals/` — foundational reference material (laws, frameworks)
- `atlas/` — value pattern entries (Canon or candidate)
- `essays/` — exploratory or interpretive writing
- `methods/` — analytical tools, templates, procedures
- `governance/` — rules, checklists, scope, AI instructions

Do **not** invent new top-level folders without explicit approval.

---

## File Type Rules

### Default File Type
- **`.mdx` is the standard**

Reason:
- supports diagrams and visuals
- supports future composability
- compatible with Starlight

### Avoid
- `.md` unless explicitly requested

Even Canon content remains `.mdx`.

---

## MDX Anchor Rules (MANDATORY)

### ❌ Forbidden (will break MDX)
```md
## Heading {#some-id}
This syntax causes MDX parsing errors and must never be used.

✅ Required Anchor Pattern
Every deep-linkable section must use an explicit HTML anchor:

mdx
Kopier kode
<a id="some-id"></a>
## Section Title
This pattern is:

MDX-safe

stable

compatible with future components

Law ID Conventions (DO NOT CHANGE)
Law IDs are referential infrastructure and must never be renumbered or altered casually.

Physical Laws
law-p-01 → law-p-06

Biological Laws
law-b-01 → law-b-05

Social Laws
law-s-01 → law-s-07
(law-s-07 = Myth / Shared Narrative)

Intellectual Laws
law-i-01 → law-i-08

IDs must remain stable across:

edits

rewrites

expansions

visual refactors

Linking Rules
Preferred Link Style
Use absolute site paths with anchors:

swift
Kopier kode
/fundamentals/laws/physical/#law-p-04
Avoid
relative paths that break if files move

raw URLs inside Canon content

duplicated anchor definitions

Links are part of Canon stability.

Canon Editing Rules
When an AI assistant edits Canon content, it must:

Preserve section order

Preserve headings

Preserve anchor IDs

Preserve tables unless explicitly revising them

Make changes explicit

Explain why the change is needed

Forbidden Actions
AI assistants must never:

silently rewrite Canon meaning

“clean up language” in a way that changes substance

remove or rename laws

introduce new laws without full scrutiny

collapse distinctions between MOQ levels

Canon is static quality by design.

Dynamic Quality Guardrail (ABSOLUTE)
AI assistants must never:

define Dynamic Quality

operationalize Dynamic Quality

present Dynamic Quality as a method, algorithm, or procedure

Dynamic Quality may only be:

referenced

respected

described as pre-conceptual novelty

Any attempt to formalize DQ is a violation of MOQ.

Social Level Guardrail
When working with social-level content, AI assistants must avoid:

moralizing social power structures

sanitizing coercion

importing intellectual ideals (truth, freedom) into social laws

Social laws describe:

coordination

enforcement

loyalty

meaning-binding

They do not describe justice or truth.

Visuals and Diagrams
AI assistants may:

embed SVGs

include diagrams

reference visual schemas

But must:

avoid changing meaning through visuals

treat visuals as explanatory, not authoritative

keep Canon text primary

“If Unsure” Defaults
If unsure where content belongs:

place it in essays/

mark it as exploratory

do not modify Canon

If unsure about a change:

propose the change

do not commit silently

preserve existing structure

If unsure about a law:

reference existing laws

do not invent new ones

Known Current Decisions (Snapshot)
Site stack: Astro + Starlight

Standard file type: .mdx

Anchor syntax: <a id="..."></a>

Social laws include Myth as L-S-07

Fundamental laws are Canon-grade

Canon changes require explicit scrutiny

Relationship to Other Governance Files
This document must remain consistent with:

AI-COORDINATOR.mdx

canon-governance.mdx

canon-promotion-checklist.mdx

scope-boundaries.mdx

Conflicts must be resolved explicitly and documented.

Final Execution Rule
When acting as an AI assistant in this repository:

Preserve stability first.
Invite Dynamic Quality second.
Never collapse the hierarchy.