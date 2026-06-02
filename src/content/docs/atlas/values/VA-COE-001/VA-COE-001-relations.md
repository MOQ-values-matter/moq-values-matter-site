# Coercion — Relation Records

These are the relation records associated with the Coercion pattern entry (VA-COE-001), structured under the relation record schema. In the operational architecture each record would be its own artifact; they are collected here for reference.

Patterns referenced that do not yet have entries are marked with `(placeholder)`. Their relation records are drafted now and will resolve to proper atlas_ids when those entries are created.

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

---

## Cost-source bindings

These are the value-flow couplings by which coercion leverages other patterns as cost-sources to supply its contingent cost. Coercion's bindings have binding_kind: cost-source — the bound pattern's flow is recruited into coercion's mechanism rather than being amplified by coercion's coordinative structure. This is structurally distinct from amplification-recruitment bindings (where the source pattern enables the bound pattern to recruit additional field-flow): coercion binds to be fed by what it is bound to.

Coercion's cost-source-portfolio (the aggregate of cost-source bindings active at a given time) is structurally significant: coercion bound to multiple cost-sources simultaneously has broader reach than single-source coercion but also distorts more patterns simultaneously.

```yaml
relation_id: REL-BND-COE-PWR-001
relation_type: binding
binding_kind: cost-source
source: VA-COE-001        # Coercion
target: VA-POW-001        # Power
directionality: directional      # power supplies, coercion leverages
quality: low
strength: variable
durability: contingent_on_cost_source_capacity
companion_relation: REL-BND-POW-COE-001    # in power's folder
conditions: >
  Power is one possible cost-source for coercion: it can supply the credible
  contingent cost coercion leverages (threat of force, exclusion, deprivation,
  organisational consequence). Power's accumulated capacity is leveraged as
  substrate by coercion's mechanism. Quality is low: the binding distorts
  power's coherent operation (power tightly bound to coercion erodes its own
  substrate) and feeds coercion which is internally-consonant-externally-
  dissonant in the field. Strength is variable: coercion can be loosely bound
  to power (one cost-source among several being used in light measure) or
  tightly bound (power as primary cost-source for sustained coercive
  operation). Durability is contingent on power's continued capacity to supply
  the credible cost; when reserves are depleted by sustained coercive use, the
  binding weakens.
status: Draft
version: 0.3
```

```yaml
relation_id: REL-BND-COE-GUI-001
relation_type: binding
binding_kind: cost-source
source: VA-COE-001        # Coercion
target: VA-GUI-001        # Guilt
directionality: directional
quality: low
strength: variable
durability: contingent_on_guilt_availability
companion_relation: null    # no companion record in guilt's folder
conditions: >
  Guilt is a cost-source for coercion: the threatened withdrawal of moral
  standing, or the activation of guilt, can supply the credible contingent
  cost coercion leverages, with no power asymmetry required. A guilt-leveraged
  yielding is coercion as fully as a force-backed one. Quality is low: the
  binding distorts guilt's coherent operation. Guilt as constituted (intra-
  agent self-regulation through the agent's own value patterns) is not
  problematic; what is problematic is the cost-source binding that recruits
  guilt's regulatory flow into coercion's mechanism. The manipulation in
  "manipulative guilt induction" is not in guilt itself but in this binding.
  Strength is variable. Durability is contingent on guilt remaining accessible
  as a leverageable cost in the subjected party; when the subjected party
  recognises the manipulation or revaluates the underlying obligation, the
  binding weakens or dissolves.
status: Draft
version: 0.3
```

```yaml
relation_id: REL-BND-COE-SHA-001
relation_type: binding
binding_kind: cost-source
source: VA-COE-001        # Coercion
target: VA-SHA-001        # Shame
directionality: directional
quality: low
strength: variable
durability: contingent_on_field_shaming_capacity
companion_relation: null
conditions: >
  Shame is a cost-source for coercion: the threatened imposition of shame, or
  exposure to it, can supply the contingent cost. Differs from guilt's case
  because shame is multi-agent — it requires the field's participation in the
  signalling, not only the subjected party's self-regulation. Quality is low.
  Strength is variable. Durability is contingent on shame remaining available
  as a leverageable cost in the field. Shame's reintegration cycle, when
  functional, limits the durability of shame as cost-source: if reintegration
  is possible, the cost is bounded; coercion's leveraging of shame is then
  time-limited. When reintegration is permanently blocked (humiliation-
  culture, identity-marking stigma), shame's binding to coercion can be highly
  durable.
status: Draft
version: 0.3
```

```yaml
relation_id: REL-BND-COE-OBL-001
relation_type: binding
binding_kind: cost-source
source: VA-COE-001        # Coercion
target: VA-OBL-001        # Obligation (cost-source, placeholder)
directionality: directional
quality: low
strength: variable
durability: contingent_on_obligation_credibility
companion_relation: null
conditions: >
  Obligation is a cost-source for coercion: a manufactured or invoked
  obligation can supply the contingent cost (the cost of being seen to default
  on what is owed). Quality is low. Strength is variable. Durability is
  contingent on the obligation remaining credible. Manufactured obligations
  have lower durability than genuine ones; invoked obligations that the field
  eventually re-evaluates dissolve as cost-sources. Note that fear of loss is
  also a cost-source but operates more through the biological substrate
  already captured in REL-SUB-COE-FEA-001.
status: Draft
version: 0.3
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
  other constituents.
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

*Coercion — Relation Records (v0.3)*
