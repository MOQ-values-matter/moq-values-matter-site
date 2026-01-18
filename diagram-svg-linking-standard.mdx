# Diagram & SVG Linking Standard

**Project:** MOQ Values Matter

**Status:** Governing Technical Instruction (Non-Canon)

**Scope:** All `.mdx` files (Atlas entries, clusters, essays)

**Purpose:** Ensure that diagrams (`.svg`) render correctly:

* in **Starlight/Astro** (local + deployed)
* when **reading `.mdx` files directly on GitHub**

This standard establishes a **single, repeatable practice** for adding diagrams without broken links, routing errors, or ambiguity about canonical sources.

---

## 1. Canonical Asset Policy

### 1.1 Source of Truth (Authoring)

All diagrams **must be authored and edited only** in:

```
src/content/docs/_assets/diagrams/
```

This directory is the **canonical source**.

Sub-structure:

```
_assets/diagrams/
  clusters/<cluster-slug>/
    <diagram-name>.svg
  values/<ATLAS_ID>/
    <diagram-name>.svg
```

Examples:

```
_assets/diagrams/clusters/aggression-coercion-force/aggression-coercion-force.svg
_assets/diagrams/values/VA-AGGR-01/aggression.svg
```

---

### 1.2 Public Mirror (Site Serving)

All diagrams must be **mirrored** into:

```
public/images/diagrams/
```

Mirrored structure **must match canonical structure exactly**:

```
public/images/diagrams/
  clusters/aggression-coercion-force/aggression-coercion-force.svg
  values/VA-AGGR-01/aggression.svg
```

> ⚠️ Never author or edit diagrams directly in `public/images/`.
> This directory is a **build artifact only**.

---

## 2. Why This Is Required

* Starlight/Astro **only serves files from `public/`**
* GitHub **only understands repo-relative paths**
* The site uses a **non-root base path** (e.g. `/moq-values-matter-site/`)

There is **no single path string** that works in all contexts.

This policy resolves that by:

* embedding from `public/` (site-safe)
* linking source from GitHub (repo-safe)

---

## 3. Required MDX Embed Pattern

### 3.1 Inline Diagram (Always Required)

Use this pattern **every time**:

```mdx
<img
  src={`${import.meta.env.BASE_URL}images/diagrams/<path>/<diagram>.svg`}
  alt="<descriptive alt text>"
/>
```

Key rules:

* ✅ Use `import.meta.env.BASE_URL`
* ❌ Never use `/images/...` directly
* ❌ Never reference `_assets` in an `<img>` `src`

---

### 3.2 Source SVG Link (Always Required)

Immediately below the image, add a **Source SVG** link pointing to GitHub:

```mdx
<a
  href="https://github.com/MOQ-values-matter/moq-values-matter-site/blob/main/src/content/docs/_assets/diagrams/<path>/<diagram>.svg"
  target="_blank"
  rel="noopener noreferrer"
>
  (Source SVG)
</a>
```

This ensures:

* canonical reference
* GitHub readability
* long-term traceability

---

## 4. Canonical Figure Block (Recommended)

Use `<figure>` + `<figcaption>` for consistency:

```mdx
<figure>
  <img
    src={`${import.meta.env.BASE_URL}images/diagrams/<path>/<diagram>.svg`}
    alt="<descriptive alt text>"
    width="720"
  />
  <figcaption>
    <short functional description> 
    <a
      href="https://github.com/MOQ-values-matter/moq-values-matter-site/blob/main/src/content/docs/_assets/diagrams/<path>/<diagram>.svg"
      target="_blank"
      rel="noopener noreferrer"
    >
      (Source SVG)
    </a>
  </figcaption>
</figure>
```

---

## 5. Verification Checklist (Mandatory)

Before committing:

1. **Local Starlight**

   * Image renders inline
   * No router warnings in console

2. **GitHub**

   * Open `.mdx` file in repo
   * Click `(Source SVG)` → SVG opens

If either fails, the diagram embed is **non-compliant**.

---

## 6. Explicit Prohibitions

The following are **not allowed**:

* Linking directly to `/assets/...`
* Linking directly to `_assets` from the site
* Using relative `../images/...` paths
* Duplicating diagrams in multiple canonical locations
* Embedding diagrams without a source link

---

## 7. Rationale Summary

This standard:

* eliminates base-path routing errors
* prevents broken GitHub previews
* preserves a single canonical source
* makes diagram usage predictable and automatable

> **Author once. Render everywhere. Verify always.**

---

## 8. Change Control

Changes to this standard:

* require explicit approval
* must be applied project-wide
* may not break existing embeds

This document governs *how* diagrams are linked, not *what* they depict.
