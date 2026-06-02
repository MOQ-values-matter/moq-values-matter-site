# Coercion — Relation Records (Draft v0.2)

These are the relation records implied by the Coercion pattern entry (VA-COE-001), extracted from the original entry's prose and structured under the relation record schema (Section 3 of the schema specification). In the operational architecture each record would be its own artifact; they are collected here for review of the migration.

Patterns referenced that do not yet have entries are marked with `(placeholder)`. Their relation records are drafted now and will resolve to proper atlas_ids when those entries are created.

**v0.2 (power-correction rewrite, 2026-05-25):** Power asymmetry removed as a constituent of coercion and as a required substrate. The single power-asymmetry substrate relation (REL-SUB-COE-PWA-001) is replaced by four parallel conditional *cost-source* relations (power, guilt, shame, obligation — REL-SUB-COE-PWR/GUI/SHA/OBL-001), reflecting that any of these can supply the credible contingent cost coercion leverages. The four old composition relations (power asymmetry, credible threat, behavioural compliance, enforcement substitution) are replaced by three corrected constituents (credible contingent cost, perceived intolerability, cost-avoidance substitution — REL-COM-COE-CCC/PIT/CAS-001). The redundant "power modulates coercion" relation (REL-MOD-POW-COE-001) is removed and folded into the cost-source relation. These changes implement the correction established in discussion and recorded as pending in migration reports 01 and 02.

---

## Substrate-dependence relations

```yaml
relation_id: REL-SUB-COE-FEA-001
relation_type: substrate_dependence
source: VA-COE-001        # Coercion
target: VA-FEA-001        # Fear (placeholder — biological pattern)
character: strong
stratum_distance: 1       # social depends on biological (one stratum down)
conditions: >
  Coercion depends on biological fear and stress-response capacity as
  substrate. Without agents capable of registering threat and modifying
  behaviour to avoid loss, coercion has no purchase. The dependence is strong:
  coercion cannot be realised against agents with no fear-response substrate.
status: Draft
version: 0.1
```

```yaml
relation_id: REL-SUB-COE-PWR-001
relation_type: substrate_dependence
source: VA-COE-001        # Coercion
target: VA-POW-001        # Power (cost-source)
character: conditional
stratum_distance: 0       # intra-stratum (both social)
conditions: >
  Power is ONE possible cost-source for coercion: it can supply the credible
  contingent cost coercion leverages (threat of force, exclusion, deprivation).
  This is the corrected relation, replacing the pre-framework entry's treatment
  of power asymmetry as a constituent. Power is NOT a constituent of coercion;
  it is one pattern among several that can supply the leverageable cost. The
  dependence is conditional: coercion can be realised without power when another
  cost-source (guilt, shame, obligation) supplies the cost. Recorded as
  substrate_dependence with character=conditional because the cost-source
  relation is closest to substrate (coercion draws on the cost-source as a
  condition of realisation) but no cost-source is individually required.
status: Draft
version: 0.2
note: >
  COST-SOURCE RELATION. Power, guilt, shame, and obligation each stand in this
  same relation to coercion — each can supply the contingent cost. They are
  recorded as four parallel conditional substrate relations (this one plus the
  three below). If the framework later commits a dedicated `cost_source`
  relation type, these would migrate to it. For now they are flagged
  cost-source relations recorded as conditional substrate dependence.
```

```yaml
relation_id: REL-SUB-COE-GUI-001
relation_type: substrate_dependence
source: VA-COE-001        # Coercion
target: VA-GUI-001        # Guilt (cost-source, placeholder)
character: conditional
stratum_distance: 0
conditions: >
  Guilt is a cost-source for coercion: the threatened withdrawal of moral
  standing, or the activation of guilt, can supply the credible contingent cost
  coercion leverages, with no power asymmetry required. A guilt-leveraged
  yielding is coercion as fully as a force-backed one. Conditional: one
  cost-source among several. COST-SOURCE RELATION (see REL-SUB-COE-PWR-001 note).
status: Draft
version: 0.2
```

```yaml
relation_id: REL-SUB-COE-SHA-001
relation_type: substrate_dependence
source: VA-COE-001        # Coercion
target: VA-SHA-001        # Shame (cost-source, placeholder)
character: conditional
stratum_distance: 0
conditions: >
  Shame is a cost-source for coercion: the threatened imposition of shame, or
  exposure to it, can supply the contingent cost. Conditional cost-source
  relation (see REL-SUB-COE-PWR-001 note).
status: Draft
version: 0.2
```

```yaml
relation_id: REL-SUB-COE-OBL-001
relation_type: substrate_dependence
source: VA-COE-001        # Coercion
target: VA-OBL-001        # Obligation (cost-source, placeholder)
character: conditional
stratum_distance: 0
conditions: >
  Obligation is a cost-source for coercion: a manufactured or invoked
  obligation can supply the contingent cost (the cost of being seen to default
  on what is owed). Conditional cost-source relation (see REL-SUB-COE-PWR-001
  note). Note that fear of loss is also a cost-source but operates more through
  the biological substrate already captured in REL-SUB-COE-FEA-001.
status: Draft
version: 0.2
```

---

## Modulation relations (coercion modulating downward)

```yaml
relation_id: REL-MOD-COE-FEA-001
relation_type: modulation
source: VA-COE-001        # Coercion
target: VA-FEA-001        # Fear / biological stress response (placeholder)
character: distorting
modulation_kind: distorting
cascaded: false           # direct, one stratum down
conditions: >
  Coercion modulates biological stress and fear responses distortingly: it
  conscripts these responses as its enforcement mechanism rather than in
  service of the biological agent's own flourishing. The biological pattern
  continues to operate (agents still experience fear and stress) but its
  realisation is redirected to serve the social coercion pattern. The
  modulation is distorting because the biological cost is the mechanism, not
  a byproduct.
status: Draft
version: 0.1
```

---

## Modulation relations (intellectual patterns modulating coercion)

```yaml
relation_id: REL-MOD-LAW-COE-001
relation_type: modulation
source: VA-LAW-001        # Law / legal formalisation (placeholder — intellectual)
target: VA-COE-001        # Coercion
character: supportive
modulation_kind: supportive
cascaded: false
conditions: >
  Intellectual formalisation (law, doctrine, policy) can modulate coercion
  supportively by stabilising it into recognised, bounded, predictable form.
  This supportive modulation does not originate coercion; coercion operates
  before it is formalised. Formalisation operates on what is already there.
status: Draft
version: 0.1
```

```yaml
relation_id: REL-MOD-RIG-COE-001
relation_type: modulation
source: VA-RIG-001        # Rights theory / ethical critique (placeholder — intellectual)
target: VA-COE-001        # Coercion
character: corrective
modulation_kind: corrective
cascaded: false
conditions: >
  Intellectual contestation (rights theory, ethics, dissent) modulates
  coercion correctively: it surfaces where coercion's operation diverges from
  the legitimacy it claims or the coordination it purports to serve. Corrective
  modulation operates by making visible the gap between coercion's claimed and
  actual structural function, without directly reshaping coercion's realisation.
status: Draft
version: 0.1
```

---

## Power's relation to coercion (corrected — see cost-source relations)

The pre-framework relations file recorded a `REL-MOD-POW-COE-001` asserting that "power modulates coercion by providing the enforcement capacity coercion requires." That record has been **removed** in the power-correction rewrite. It rested on the mistaken framing that coercion requires enforcement capacity supplied by power.

Power's actual relation to coercion is the **cost-source relation** `REL-SUB-COE-PWR-001` (in the substrate section above): power is one of several patterns that can supply the credible contingent cost coercion leverages. Where the cost-source is power, the magnitude and credibility of the available power affect the magnitude and credibility of the cost — but this is a property of the cost-source relation, not a separate modulation relation, and it holds equally for the other cost-sources (a large available reservoir of guilt or obligation amplifies coercion the same way abundant power does). Folding the old "power modulates coercion's intensity" claim into the cost-source relation removes the redundancy and the power-anchoring in one move.

This is itself a record of the correction: the pre-framework entry saw power as so central to coercion that power's relation to coercion was recorded twice (as constituent and as modulator). With power correctly understood as one cost-source among several, both records collapse into a single conditional cost-source relation.

---

## Composition relations (constituents of coercion)

```yaml
relation_id: REL-COM-COE-CCC-001
relation_type: composition
source: VA-COE-001        # Coercion (composed pattern)
target: VA-CCC-001        # Credible contingent cost (constituent, placeholder)
character: consonant
constituent_role: the cost made contingent on non-compliance
conditions: >
  A credible contingent cost — a cost made contingent on non-compliance and
  credible to the subjected party — is a constituent of coercion. Consonant
  with the other constituents: the cost is perceived as intolerable, which
  secures the cost-avoidance substitution. NOTE: the cost is constitutive; its
  SOURCE (power, guilt, shame, obligation) is not — cost-sources stand in
  separate cost-source relations to coercion (see substrate section).
status: Draft
version: 0.2
```

```yaml
relation_id: REL-COM-COE-PIT-001
relation_type: composition
source: VA-COE-001        # Coercion
target: VA-PIT-001        # Perceived intolerability (constituent, placeholder)
character: consonant
constituent_role: the subjected party's perception of the cost as intolerable
conditions: >
  Perceived intolerability — the subjected party's perception of the contingent
  cost as intolerable — is a constituent of coercion. This is where credibility
  lives: the cost coerces because it is perceived as intolerable, whether or
  not it is real or power-backed. A credible bluff coerces through perceived
  intolerability as surely as actual capacity. Consonant with the others.
status: Draft
version: 0.2
```

```yaml
relation_id: REL-COM-COE-CAS-001
relation_type: composition
source: VA-COE-001        # Coercion
target: VA-CAS-001        # Cost-avoidance substituting for voluntary alignment (placeholder)
character: consonant
constituent_role: the defining substitution
conditions: >
  Cost-avoidance-substituting-for-voluntary-alignment is the defining
  constituent of coercion — the structural move that distinguishes coercion
  from voluntary coordination. The subjected party yields its own valuation to
  avoid the cost, rather than aligning through agreement. Consonant with the
  other constituents. This replaces the pre-framework "enforcement substituting
  for voluntary coordination," generalising "enforcement" (power-flavoured) to
  "cost-avoidance" (source-neutral).
status: Draft
version: 0.2
```

---

## Displacement / opposition relations

```yaml
relation_id: REL-OPP-COE-TRU-001
relation_type: opposition
source: VA-COE-001        # Coercion
target: VA-TRU-001        # Trust (placeholder — social pattern)
character: displacement
opposition_mode: displacement
conditions: >
  Coercion displaces trust in shared fields. Where coercion operates as the
  coordination mechanism, trust does not develop or decays: the two patterns
  occupy structurally incompatible positions in their shared social field.
  Coercion secures coordination without trust, and its operation degrades the
  conditions under which trust would form.
status: Draft
version: 0.1
```

```yaml
relation_id: REL-OPP-COE-VOL-001
relation_type: opposition
source: VA-COE-001        # Coercion
target: VA-VOL-001        # Voluntary coordination (placeholder — social pattern)
character: displacement
opposition_mode: displacement
conditions: >
  Coercion is the substitution of enforcement for voluntary coordination;
  it displaces voluntary coordination by definition. Where coercion secures
  behaviour, voluntary coordination is not the operative mechanism.
status: Draft
version: 0.1
```

```yaml
relation_id: REL-SUB-COE-LEG-001
relation_type: substitution
source: VA-COE-001        # Coercion
target: VA-LEG-001        # Legitimacy (placeholder — social pattern)
character: conditional
substitution_conditions: >
  Coercion substitutes for legitimacy when legitimacy is insufficient to
  secure coordination. The substitution is conditional and directional:
  coercion fills the coordination gap legitimacy would otherwise fill. When
  legitimacy is restored, it displaces coercion in turn (the reverse
  substitution), which is recorded as a separate relation or as the conditions
  of this one reversing.
status: Draft
version: 0.1
```

---

## Structural-type-analogy relations

```yaml
relation_id: REL-STA-COE-REC-001
relation_type: structural_type_analogy
source: VA-COE-001        # Coercion
target: VA-REC-001        # Reciprocity (in its captured value-flow configuration)
character: strong
signature_name: internally_consonant_externally_dissonant
signature_dimensions:
  - internal_compositional_coherence
  - modulation_responsibility
  - field_compatibility
  - persistence_character
conditions: >
  Coercion and captured reciprocity share the internally-consonant-externally-
  dissonant signature: internally coherent constituents producing systematic
  external degradation of the field, persisting on borrowed substrate until
  counter-pattern formation. They differ in social form (coercion openly relies
  on threat; captured reciprocity maintains a reciprocal premise) but share the
  profile-coherence signature. Symmetric relation; source/target ordering
  conventional.
status: Draft
version: 0.1
```

```yaml
relation_id: REL-STA-COE-CAN-001
relation_type: structural_type_analogy
source: VA-COE-001        # Coercion (social stratum)
target: VA-CAN-001        # Cancer (placeholder — biological stratum)
character: strong
signature_name: internally_consonant_externally_dissonant
signature_dimensions:
  - internal_compositional_coherence
  - modulation_responsibility
  - persistence_character
conditions: >
  Coercion (social) and cancer (biological) share the signature across strata:
  internally coherent constituents whose realisation degrades the larger field
  or organism they depend on, persisting on borrowed substrate until the
  substrate is exhausted or counter-pattern forms. This cross-stratum analogy
  is one of the framework's distinctive structural-type recognitions. Symmetric
  relation; source/target ordering conventional.
status: Draft
version: 0.1
```

---

## Field-relative-effect relations

```yaml
relation_id: REL-FRE-COE-ALL-001
relation_type: field_relative_effect
source: VA-COE-001        # Coercion
target: allied            # field-position-type (enforcing circles)
character: mixed
effect_polarity: mixed
effect_description: >
  At allied/enforcing field-positions, coercion produces increased immediate
  compliance and reduced need for consensus-building (positive effects) while
  imposing rising enforcement and monitoring costs over time (negative effect).
  The net effect is mixed and shifts negative as enforcement costs accumulate.
conditions: >
  Positive effects dominate early; negative effects (enforcement cost) dominate
  as the pattern is sustained.
status: Draft
version: 0.1
```

```yaml
relation_id: REL-FRE-COE-NEU-001
relation_type: field_relative_effect
source: VA-COE-001        # Coercion
target: neutral           # field-position-type
character: negative
effect_polarity: negative
effect_description: >
  At neutral field-positions, coercion is interpreted as an instability signal.
  Neutral observers delay alignment or commitment and hedge against future
  enforcement exposure. The effect is mildly negative — coercion repels rather
  than attracts neutral parties.
conditions: >
  Holds under visible coercive operation; intensifies as coercion appears less
  bounded or predictable.
status: Draft
version: 0.1
```

```yaml
relation_id: REL-FRE-COE-HOS-001
relation_type: field_relative_effect
source: VA-COE-001        # Coercion
target: subjected         # field-position-type (NEW — see vocabulary note)
character: strong_negative
effect_polarity: negative
effect_description: >
  At subjected field-positions, coercion produces stress accumulation, loss of
  agency and value alignment, strategic compliance without loyalty, and
  eventual resistance, exit, or sabotage. Coercion produces obedience, not
  allegiance. This is the position that bears coercion's accumulated cost and
  from which counter-pattern formation originates.
conditions: >
  Intensity increases with duration of subjection and absence of legitimacy
  restoration.
status: Draft
version: 0.1
```

```yaml
relation_id: REL-FRE-COE-INT-001
relation_type: field_relative_effect
source: VA-COE-001        # Coercion
target: internal          # field-position-type
character: negative
effect_polarity: negative
effect_description: >
  Within coercive systems (internal field-positions), trust decays, surveillance
  increases, signalling replaces meaning, and innovation and initiative decline.
  The internal field experiences progressive degradation of the conditions for
  voluntary coordination, which is what makes coercive systems brittle from
  within.
conditions: >
  Accumulates the longer coercion dominates internal coordination.
status: Draft
version: 0.1
```

---

## Vocabulary additions forced by this migration

The migration of Coercion forced one addition to the field-position-type controlled vocabulary:

**`subjected`** — Those upon whom a pattern is applied as target, whose value experience is shaped by being the object of the pattern's operation. Distinct from `hostile` (whose interests run counter to the bearer regardless of whether the pattern is applied to them) because the subjected position is specifically the application-target. For coercion, the subjected position is where the pattern's cost is borne and from which counter-pattern formation originates.

This addition is motivated by structural reality (coercion and other target-directed patterns have a position that the internal/allied/neutral/hostile vocabulary does not cleanly capture) rather than case-specific convenience. It was confirmed in schema v0.3 (pending formal governance). It is likely that other target-directed patterns (predation, sanction-as-punishment, deception) will also need this position, which supports its addition as a general vocabulary term rather than a coercion-specific one.

## Relation-type candidate surfaced by the power-correction rewrite

**`cost_source` (candidate, not committed)** — The power-correction rewrite surfaced a relation that does not fit the existing types cleanly: the relation between coercion and the patterns that can supply its leverageable cost (power, guilt, shame, obligation). This is not quite substrate-dependence (no single cost-source is required; they are alternatives), not modulation (the cost-source does not shape coercion's realisation so much as supply a constituent's content), and not composition (the cost-source is not itself a constituent — the *cost* is, the *source* is not). The rewrite recorded these as conditional substrate-dependence relations with cost-source notes, as the closest available fit. A dedicated `cost_source` relation type may be warranted; it is recorded here as a candidate, not committed, alongside the `distinction` and `binding` candidates surfaced by the power migration. Like those, it awaits a decision in the relation-layer governance.

---

*Coercion — Relation Records (Draft v0.2, power-correction rewrite)*
