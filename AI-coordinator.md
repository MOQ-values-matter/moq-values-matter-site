# AI-COORDINATOR.md — MOQ Values Matter (Project Operating Doctrine)

This file is the single source of truth for how AI assistants should work inside the **MOQ Values Matter** repository.
It describes structure, content rules, anchor/link conventions, and governance for Canon content.

---

## 1) Project Purpose (one sentence)

Build a stable, high-quality, internally coherent knowledge base grounded in **Pirsig’s Metaphysics of Quality (MOQ)**, with a strong emphasis on **Canon-grade stability** and revision discipline.

---

## 2) Site/Tech Stack

- Static site: **Astro + Starlight**
- Content: Markdown/MDX in `src/content/docs/`
- Versioning: Git (repo is source of truth)
- Content style: Text-first, with optional diagrams/visuals embedded in MDX

Key constraint:
- We use **.mdx** for pages where visuals/diagrams may be embedded.
- Avoid MDX parser traps (see anchors).

---

## 3) Repository Content Map (authoritative)

Content root:
- `src/content/docs/`

Primary sections:
- `fundamentals/` — foundational reference (laws, frameworks, definitions)
- `atlas/` — Canon value pattern entries (structured analysis)
- `essays/` — exploratory synthesis, commentary, narrative
- `methods/` — analytical methods, tools, templates (optional / later)
- `governance/` — rules for Canon, revision discipline, scope boundaries

Recommended law paths:
- `src/content/docs/fundamentals/laws/physical.mdx`
- `src/content/docs/fundamentals/laws/biological.mdx`
- `src/content/docs/fundamentals/laws/social.mdx`
- `src/content/docs/fundamentals/laws/intellectual.mdx`
- `src/content/docs/fundamentals/laws/index.mdx`

---

## 4) Content Types and Rules

### 4.1 Canon (Static Quality)
Canon content must be:
- stable
- coherent
- cross-linked
- revision-controlled
- minimally stylistic (no rhetorical inflation)

Canon content typically includes:
- `fundamentals/laws/*`
- `atlas/*` entries that have passed Canon promotion
- governance files and checklists

### 4.2 Essays (Exploratory, not Canon by default)
Essays may:
- explore, speculate, compare, propose modules
- introduce new perspectives and test ideas
But must not:
- silently change Canon
- redefine Dynamic Quality
- treat DQ as a method

### 4.3 Methods (Optional / later)
Methods are allowed to describe analytical procedures, templates, and tools.
They must not claim to define or operationalize Dynamic Quality.

---

## 5) Dynamic Quality Handling (non-negotiable)

- **Dynamic Quality (DQ) cannot be defined.**
- DQ may be referenced as the source of novelty/creativity/becoming.
- The project may invite dynamic perspectives, but never frames DQ as a repeatable method.

AI assistants must avoid:
- “DQ method”
- “DQ algorithm”
- “define DQ precisely”

---

## 6) Anchor and Link Standard (MDX-safe)

We use `.mdx` and therefore MUST NOT use `{#id}` syntax (it triggers MDX parsing errors).

### 6.1 Required anchor format
For any section that must be deep-linkable, use:

```mdx
<a id="law-p-01"></a>
## L-P-01: ...
