# Power — Relation Records

Relation records associated with the Power pattern entry (VA-POW-001), structured under the relation record schema. In the operational architecture each record would be its own artifact; collected here for reference.

Patterns referenced that do not yet have entries are marked `(placeholder)`.

---

## Substrate-dependence relations

```yaml
relation_id: REL-SUB-POW-PHI-001
relation_type: substrate_dependence
source: VA-POW-001        # Power
target: VA-PHI-001        # Physical infrastructure/territory/tools (placeholder)
character: strong
stratum_distance: 2       # social depends on physical (two strata down, cascaded)
conditions: >
  Power depends on physical substrate — territory, infrastructure, tools,
  weapons, logistics. These enable and constrain power without constituting it.
  The dependence is strong but the substrate is cross-stratum (social on
  physical), so the dependence is partly cascaded through biological and
  intervening social patterns.
status: Draft
version: 0.1
```

```yaml
relation_id: REL-SUB-POW-COO-001
relation_type: substrate_dependence
source: VA-POW-001        # Power
target: VA-COO-001        # Coordination capacity (placeholder — social/biological)
character: strong
stratum_distance: 0       # intra-stratum (social), with biological substrate beneath
conditions: >
  Power depends on the capacity to coordinate multiple agents. Coordinated
  groups outperform uncoordinated individuals; this coordination advantage is
  substrate for the accumulation of power. Without coordination capacity, power
  cannot accumulate or be sustained.
status: Draft
version: 0.1
```

---

## Composition relations (constituents of power)

```yaml
relation_id: REL-COM-POW-CST-001
relation_type: composition
source: VA-POW-001        # Power (composed pattern)
target: VA-CST-001        # Capacity over stakes (constituent, placeholder)
character: consonant
constituent_role: determining what is at stake
conditions: >
  Capacity over stakes — the ability to determine what value is contingent on
  what — is a constituent of power. Consonant with the other constituents;
  reinforced by accumulation.
status: Draft
version: 0.1
```

```yaml
relation_id: REL-COM-POW-CAC-001
relation_type: composition
source: VA-POW-001        # Power
target: VA-CAC-001        # Capacity over access (constituent, placeholder)
character: consonant
constituent_role: gating who reaches what
conditions: >
  Capacity over access — the ability to gate which bearers reach which value —
  is a constituent of power. Consonant with the others.
status: Draft
version: 0.1
```

```yaml
relation_id: REL-COM-POW-CCN-001
relation_type: composition
source: VA-POW-001        # Power
target: VA-CCN-001        # Capacity over consequences (constituent, placeholder)
character: consonant
constituent_role: determining what follows action
conditions: >
  Capacity over consequences — the ability to determine what value propagates
  downstream from action (reward, punishment, inclusion, exclusion) — is a
  constituent of power. Consonant with the others.
status: Draft
version: 0.1
```

```yaml
relation_id: REL-COM-POW-ACC-001
relation_type: composition
source: VA-POW-001        # Power
target: VA-ACC-001        # Accumulation (constituent, placeholder)
character: consonant
constituent_role: durability over time
conditions: >
  Accumulation — the durability by which capacity persists and compounds over
  time — is the constituent that makes power power rather than a momentary
  ability. It compounds the other three constituents. NOTE: accumulation is
  intrinsically a value-flow-over-time phenomenon; its full character awaits
  the dynamics half. Recorded here as a constituent because the durable
  capacity is part of what power statically IS, but the dynamics of how
  accumulation works are deferred.
status: Draft
version: 0.1
```

---

## Distinction-relations (patterns power is commonly confused with)

```yaml
relation_id: REL-OPP-POW-AUT-001
relation_type: opposition
source: VA-POW-001        # Power
target: VA-AUT-001        # Authority (placeholder — social pattern)
character: incompatibility
opposition_mode: incompatibility
conditions: >
  Power and authority are distinct and dissociable patterns. Authority is the
  socially recognised right to command; it may exist without effective power
  (recognised but unable to enforce) and power may exist without authority
  (effective but unrecognised). They co-occur often but neither is part of the
  other. Recorded as opposition/incompatibility in the specific sense that one
  can exist where the other is absent; this is a distinction-relation, not
  antagonism.
status: Draft
version: 0.1
```

```yaml
relation_id: REL-FCO-POW-LEG-001
relation_type: field_co_occurrence
source: VA-POW-001        # Power
target: VA-LEG-001        # Legitimacy (placeholder — social pattern)
character: conditionally_consonant
conditions: >
  Legitimacy — belief in the rightful holding/use of power — may accompany
  power or be absent. When present, legitimacy is a consonant binding that
  reduces power's enforcement cost (see binding-relations below). But
  legitimacy is not part of power and power is not part of legitimacy. They
  co-occur in shared fields with conditionally consonant character. Distinct
  from the binding-relation REL-BND-POW-LEG-001 below, which records the
  value-flow coupling when legitimacy is bound to power.
status: Draft
version: 0.1
```

```yaml
relation_id: REL-SUB-POW-VIO-001
relation_type: substrate_dependence
source: VA-POW-001        # Power
target: VA-VIO-001        # Violence (placeholder — physical-stratum means)
character: weak
stratum_distance: 2
conditions: >
  Violence is one physical means power may draw on as substrate, not power
  itself and not a constituent. The dependence is weak: power can be realised
  without violence (through resource control, coordination, narrative
  influence) and violence can occur without being power. Recorded as a weak,
  optional substrate relation rather than a constituent — power is distinct
  from violence.
status: Draft
version: 0.1
```

```yaml
relation_id: REL-OPP-POW-INF-001
relation_type: opposition
source: VA-POW-001        # Power
target: VA-INF-001        # Influence (placeholder — social pattern)
character: incompatibility
opposition_mode: incompatibility
conditions: >
  Power and influence are distinct and dissociable patterns, despite being
  commonly conflated. Influence is the capacity to shape outcomes through
  indirect mechanisms (persuasion, signaling, reputation, framing) without
  controlling stakes, access, or consequences directly. The two co-occur often
  — power often uses influence as one of its modes of operation, and influence
  often accompanies power — but each can exist without the other: a
  power-holder can command without influencing (using direct control of
  stakes/access/consequences), and a respected advisor can influence without
  holding power (no capacity to determine stakes/access/consequences).
  Influence is not what power IS, but is one of several patterns power can
  use to operate. The mode-of-operation case — how influence is one of
  power's modes — is captured by the binding-relation REL-BND-POW-INF-001,
  which is distinct from this distinction-relation. The two records are not
  redundant: the distinction-relation captures that power and influence are
  dissociable; the binding-relation captures what happens structurally when
  power binds to influence as a mode of operation.
status: Draft
version: 0.3
```

---

## Modulation relations (power modulating downward — conditional by binding)

```yaml
relation_id: REL-MOD-POW-BIO-001
relation_type: modulation
source: VA-POW-001        # Power
target: VA-BIO-001        # Biological stress/security patterns (placeholder)
character: conditional
modulation_kind: conditional   # supportive OR distorting depending on binding
cascaded: false
conditions: >
  Power modulates biological substrate, but the character of the modulation is
  conditional on what power is bound to. Power bound to protective/reciprocal
  patterns modulates biology supportively (stability, security, reduced stress,
  increased resilience). Power bound to predatory patterns modulates biology
  distortingly (fear, stress loading, survival pressure). The modulation_kind
  cannot be fixed as supportive/distorting/corrective without resolving the
  binding; the `conditional` value captures this.
status: Draft
version: 0.1
```

```yaml
relation_id: REL-MOD-POW-INT-001
relation_type: modulation
source: VA-POW-001        # Power
target: VA-INT-001        # Intellectual patterns generally (placeholder)
character: conditional
modulation_kind: conditional
cascaded: false
conditions: >
  Power modulates intellectual patterns conditionally: it enables them to
  propagate, institutionalise, and scale when bound to support them, and
  suppresses them when misaligned. Power does not generate intellectual value
  (truth, coherence) — origination is forbidden — but determines whether
  intellectual patterns can spread and persist. Conditional modulation_kind as
  above.
status: Draft
version: 0.1
```

---

## Binding-relations

These are the value-flow couplings by which power attaches to the patterns it amplifies, with which it coordinates, or through which it operates. Each record uses the binding fields: directionality, quality, strength, durability, conditions.

```yaml
relation_id: REL-BND-POW-REC-001
relation_type: binding
source: VA-POW-001        # Power
target: VA-REC-001        # Reciprocity
directionality: bidirectional
quality: high
strength: tight_when_active
durability: standing_but_conditional
conditions: >
  Power bound to reciprocity is power deployed to protect, enforce, and sustain
  reciprocal arrangements. The binding is bidirectional: power feeds
  reciprocity's flow at scale (amplifying reciprocity beyond what unaided
  reciprocity could sustain), and reciprocity feeds power's flow (legitimacy
  and voluntary compliance reduce power's enforcement costs and replenish its
  reserves). The binding's quality is high — both patterns' coherent operation
  is supported. Strength is tight when active. Durability is standing-but-
  conditional: persists while reciprocity's voluntary compliance continues to
  replenish power's reserves and while power's enforcement continues to
  protect reciprocity from defection. Either side's collapse degrades the
  binding.
status: Draft
version: 0.3
```

```yaml
relation_id: REL-BND-POW-LEG-001
relation_type: binding
source: VA-POW-001        # Power
target: VA-LEG-001        # Legitimacy
directionality: bidirectional
quality: conditional_on_field_supportive
strength: variable
durability: standing_but_conditional
conditions: >
  Power bound to legitimacy is power whose exercise is structured by the
  field's belief in its rightfulness. The binding amplifies in both
  directions: power bound to legitimacy is amplified by it (reduced
  enforcement cost, voluntary alignment); legitimacy bound to power is
  amplified by it (effective legitimate authority can act in ways
  recognised-but-impotent legitimacy cannot). Quality is high when both
  patterns are field-supportive — the binding then supports both patterns'
  coherent operation in fields where legitimacy is grounded in actual
  field-supportive function. Strength is variable: some bindings are tight
  (the legitimately-recognised state); others are loose (legitimacy formally
  recognised but practically constrained). Durability is standing-but-
  conditional: persists while power's exercise remains aligned with what
  legitimacy claims to authorise. Misalignment erodes legitimacy and degrades
  the binding. Note that the distinct REL-FCO-POW-LEG-001 field_co_occurrence
  relation captures that power and legitimacy may co-occur in shared fields
  independently of binding; this binding-relation captures the value-flow
  coupling when legitimacy is bound to power.
status: Draft
version: 0.3
```

```yaml
relation_id: REL-BND-POW-VIO-001
relation_type: binding
source: VA-POW-001        # Power
target: VA-VIO-001        # Violence (placeholder — physical-stratum means)
directionality: directional      # power channels through violence
quality: conditional
strength: variable
durability: contingent_and_degrading
binding_kind: amplification-recruitment
conditions: >
  Power bound to violence as its mode of operation, distinct from
  REL-SUB-POW-VIO-001 substrate-dependence (which records violence as one
  possible means available to power). The binding amplifies violence's reach
  across the field at scales unaided violence could never coordinate; neither
  pattern is structurally distorted by the coupling — violence operates as
  violence, amplified in reach, and power operates as power, channelling
  through violence as a mode. The binding is high-amplification in its
  structural character. Its effective quality is conditional on the
  configuration the binding participates in, because the binding's operation
  consumes substrate (biological reserves of subject populations, physical
  infrastructure, accumulated trust and legitimacy in the field) faster than
  violence-based exercise can replenish. Three configurations recur
  historically. When the binding is paired with expansionist substrate-
  acquisition (the Mongol pattern under Temujin, Alexander's conquest of
  the Persian Empire, early-stage imperial expansion), the configuration
  sustains for a generation or so because acquired substrate replenishes
  what depletion consumes. When the binding is paired with substrate-
  replenishing reciprocity-bindings (the Roman model — violence-binding
  combined with citizenship-incentive and legal incorporation of conquered
  populations), the configuration is more durable; Rome ran the violence-
  binding for centuries with reciprocity-binding replenishing in parallel.
  When the binding operates on fixed substrate without expansion or
  reciprocity-replenishment, depletion accelerates and the configuration
  collapses rapidly — often within a generation, as with Alexander's empire
  on his death and the Mongol khanates after the initial conquest phase.
  Strength is variable: some power is bound only weakly to violence
  (legitimate state holding violence as backstop) — this is the substrate-
  dependence case, not the binding case; the binding-relation is recorded
  when power's mode of operation IS violence. Durability is contingent and
  degrading at the configuration level: the binding consumes power's
  reserves faster than violence-based exercise can replenish them; sustained
  tight-binding-to-violence without substrate-acquisition or reciprocity-
  replenishment collapses within a generation.
status: Draft
version: 0.3
```

```yaml
relation_id: REL-BND-POW-AUT-001
relation_type: binding
source: VA-POW-001        # Power
target: VA-AUT-001        # Authority (placeholder — social pattern)
directionality: bidirectional
quality: high_when_field_supportive
strength: tight_when_present
durability: standing
conditions: >
  Power bound to authority is the configuration of "effective authority" —
  recognised right plus effective capacity to enforce. Authority bound to
  power is the configuration of "legitimately exercised power" — capacity
  grounded in recognised right. The binding amplifies in both directions:
  authority without power is hollow recognition; power without authority is
  unrestrained capacity. Together, each pattern operates in domains the
  other could not operate alone. Quality is high when both patterns are
  field-supportive. Strength is typically tight when present; durability is
  standing — the binding is one of the more stable configurations in the
  power cluster. Conditions: holds when authority's recognition aligns with
  power's capacity, and when power's exercise remains within what authority
  authorises. Distinct from but complementary to REL-OPP-POW-AUT-001
  (distinction-relation) — the patterns are dissociable AND when present
  together they typically couple through this binding.
status: Draft
version: 0.3
```

```yaml
relation_id: REL-BND-POW-INF-001
relation_type: binding
source: VA-POW-001        # Power
target: VA-INF-001        # Influence (placeholder — social pattern)
directionality: directional      # power uses influence as mode of operation
quality: variable
strength: variable
durability: standing_but_shifting
conditions: >
  Power bound to influence is power operating through indirect mechanisms
  (persuasion, signaling, reputation, framing) rather than through direct
  control of stakes/access/consequences. The binding amplifies influence's
  reach beyond what unaided influence could achieve, while extending power's
  operation into domains where direct exercise would be costly or
  counterproductive. Quality is variable: the binding can be high-quality
  (influence used to coordinate voluntary alignment around field-supportive
  patterns) or low-quality (influence used to manipulate the field's
  recognition of what power is doing). Strength is variable: power can be
  bound tightly to influence (soft-power-dominant configurations) or weakly
  (influence as one tool among several). Durability is standing-but-shifting:
  power's binding to influence shifts as effectiveness changes; high-quality
  influence-binding has greater durability than low-quality manipulative-
  influence-binding. The distinction-relation REL-OPP-POW-INF-001 is preserved
  alongside this binding-relation: power and influence are dissociable
  patterns AND when both are present they typically couple through this
  binding.
status: Draft
version: 0.3
```

```yaml
relation_id: REL-BND-POW-COE-001
relation_type: binding
source: VA-POW-001        # Power
target: VA-COE-001        # Coercion
directionality: directional      # power's capacity is substrate coercion draws on
quality: conditional
strength: variable
durability: contingent_and_degrading
binding_kind: amplification-recruitment
conditions: >
  Power bound to coercion as its mode of operation. Power's accumulated
  capacity is the substrate coercion draws on; coercion's operation is one
  channel through which power exercises. The binding amplifies coercion's
  reach at scales unaided coercion could not coordinate; neither pattern is
  structurally distorted by the coupling — coercion operates as coercion,
  amplified in reach, and power operates as power, channelling through
  coercion as a mode. The binding is high-amplification in its structural
  character. Its effective quality is conditional on the configuration the
  binding participates in: coercion's internally-consonant-externally-
  dissonant character means the binding's operation degrades the field over
  time (counter-pattern formation reduces voluntary compliance, depleting
  the legitimacy and trust reserves power requires for sustained operation).
  When the binding is paired with substrate-replenishing bindings
  (reciprocity, legitimacy, authority running in parallel), the configuration
  can be sustained for extended periods. When the binding operates without
  such replenishment, power's reserves deplete faster than they replenish
  and the configuration collapses. Strength is variable: power can be
  loosely bound to coercion (coercion as one tool used sparingly) or tightly
  bound (coercion as primary mode of operation, "coercive power"). Durability
  at the configuration level is contingent and degrading: power tightly
  bound to coercion erodes its own substrate over time; the configuration is
  durable only as long as power's reserves can supply the contingent costs
  coercion requires. Emerges when reciprocity-based binding fails or is
  rejected.
companion_relation: REL-BND-COE-PWR-001    # in coercion's folder
status: Draft
version: 0.3
```

```yaml
relation_id: REL-BND-POW-SLF-001
relation_type: binding
source: VA-POW-001        # Power
target: VA-POW-001        # Power (self-referential)
directionality: self_referential
quality: conditional
strength: variable
durability: signature_internally_consonant_externally_dissonant
binding_kind: amplification-recruitment    # self-referential variant
conditions: >
  The structural articulation of power's self-justification when other
  bindings collapse. Power whose bindings to reciprocity, legitimacy,
  authority, and other field-supportive patterns have collapsed or been
  severed becomes bound only to its own perpetuation. The binding amplifies
  power's persistence by feeding power back into itself: power's coordinative
  structure recruits substrate for its own continued operation. Power's
  structural constituents (capacity over stakes, access, consequences,
  accumulation) remain intact under this binding; the binding does not
  distort power's pattern. The binding is high-amplification in its
  structural character — it amplifies power's persistence effectively, as
  demonstrated by patterns of late-stage autocracies, captured institutions,
  and organisations sustained for their own perpetuation that persist for
  decades or generations. The binding's effective quality is conditional on
  the configuration: when other bindings are present alongside (reciprocity,
  legitimacy, authority), self-perpetuation is a minor sub-binding in a
  field-supportive portfolio; when other bindings have collapsed and self-
  perpetuation is the entire portfolio, the configuration produces no
  external coupling-value (no field-supportive amplification) and produces
  the internally-consonant-externally-dissonant signature in the field
  through counter-pattern formation, legitimacy erosion, and substrate
  exhaustion. The signature is a property of the configuration (self-
  perpetuation as sole binding) rather than of the binding's structural
  character per se. Strength is variable: some power can self-perpetuate
  weakly while still maintaining other bindings; some power is bound
  primarily to its own perpetuation with other bindings degraded. Durability
  has a specific character — the binding persists internally (power continues
  to operate as power, sustaining itself) while producing field-degradation
  through the configuration's substrate consumption. The configuration is
  durable for years to decades, occasionally longer where the substrate
  reservoir is large enough.
status: Draft
version: 0.3
```

---

## Structural-type-analogy relations

```yaml
relation_id: REL-STA-POW-NUL-000
relation_type: structural_type_analogy
source: VA-POW-001
target: null
character: null
signature_name: null
conditions: >
  Power's conditional compositional character means it does not share the
  internally-consonant-externally-dissonant signature of coercion/captured-
  reciprocity/cancer. Self-justifying power is a binding configuration
  (REL-BND-POW-SLF-001 — the self-perpetuation binding), not a degradation
  of power's own structure: power's constituents (capacity over stakes,
  access, consequences, plus accumulation) remain intact under self-
  perpetuation binding; what has changed is the binding portfolio. The
  internally-consonant-externally-dissonant signature is a property of that
  binding configuration, not of power as such. The structural-type-analogy
  is therefore correctly recorded as null at the pattern level: power has no
  structural-type analogy because its own structure does not produce the
  signature, but a specific binding configuration of power does produce it
  when other bindings have collapsed.
status: Draft
version: 0.3
```

---

## Field-relative-effect relations

```yaml
relation_id: REL-FRE-POW-ALL-001
relation_type: field_relative_effect
source: VA-POW-001        # Power
target: allied            # field-position-type
character: positive
effect_polarity: positive
effect_description: >
  Those aligned with power benefit from protection, access, stability, and
  amplified agency. Their capacity to act increases, along with responsibility
  for downstream consequences. The effect is positive but carries the
  amplified responsibility as a real cost.
conditions: >
  Holds across power's operation; intensity scales with the degree of alignment
  and the magnitude of the power.
status: Draft
version: 0.1
```

```yaml
relation_id: REL-FRE-POW-NEU-001
relation_type: field_relative_effect
source: VA-POW-001        # Power
target: neutral           # field-position-type
character: neutral
effect_polarity: neutral
effect_description: >
  Peripheral participants experience power as structure — rules, incentives,
  constraints, expectations shaping behaviour indirectly. The effect is
  largely neutral: power is experienced as the shape of the field rather than
  as direct benefit or harm. This is a NEUTRAL-as-no-significant-effect score,
  not neutral-as-ambivalence.
conditions: >
  Holds while neutrals remain peripheral; shifts if they align or oppose.
status: Draft
version: 0.1
```

```yaml
relation_id: REL-FRE-POW-HOS-001
relation_type: field_relative_effect
source: VA-POW-001        # Power
target: hostile           # field-position-type (adversaries)
character: mixed
effect_polarity: mixed
effect_description: >
  Those opposed to power experience exclusion, pressure, enforcement, or
  coercion. The outcome depends on the alignment between power and the
  governing value hierarchy, ranging from integration through containment to
  destruction. The effect is recorded as mixed precisely because it is highly
  variable by the binding of the power and the nature of the opposition — this
  is mixed-as-conditional-on-binding, articulated in prose.
conditions: >
  The character of the hostile-position effect depends strongly on what the
  power is bound to: power bound to reciprocity may integrate adversaries;
  power bound to predation destroys them.
status: Draft
version: 0.1
```

```yaml
relation_id: REL-FRE-POW-INT-001
relation_type: field_relative_effect
source: VA-POW-001        # Power
target: internal          # field-position-type
character: mixed
effect_polarity: mixed
effect_description: >
  Within a power-holding group, power shapes incentive structures, role
  allocation, legitimacy narratives, tolerance for dissent, and thresholds for
  enforcement. It organises who may act, how, and at what cost. The internal
  effect is mixed and structural — power organises the internal field rather
  than simply benefiting or harming it.
conditions: >
  Character depends on how power is distributed and bound within the group.
status: Draft
version: 0.1
```

---

*Power — Relation Records (v0.3)*
