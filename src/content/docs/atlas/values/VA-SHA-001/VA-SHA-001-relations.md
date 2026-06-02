# Shame — Relation Records (Draft v0.2)

Relation records implied by the Shame pattern entry (VA-SHA-001), structured under the relation record schema. Per the folder convention introduced in schema v0.4 (§1.3), each record lives in the source pattern's folder; this file collects shame's source-originating relations for review. In the production layout each YAML block below becomes its own `.yaml` file in `atlas/VA-SHA-001/relations/`.

**v0.2 (framing correction to multi-agent regulatory pattern, 2026-05-26):** The v0.1 relations file treated shame as intra-agent (agent_only) pattern with biological capacity for stress/withdrawal as strong constitutive substrate. The framing was wrong — shame is the multi-agent regulatory pattern, and biological substrate is where the target's costs land (cascaded effect) rather than constitutive substrate. The substrate relations have been restructured accordingly. The distinction-relations have been sharpened (the contrast with guilt is now between multi-agent field-regulation and intra-agent self-regulation, not between identity-attack and action-attack). Field-relative effects now include the `subjected` position occupied by the shamed target. See the pattern entry v0.2 revision note for the substantive rationale.

Patterns referenced that do not yet have entries are marked `(placeholder)`.

**Notes on relations NOT recorded in this file (per folder convention):**

- **REL-SUB-COE-SHA-001** (coercion using shame as cost-source) lives in coercion's folder. Coercion is the source; shame is the target.
- **REL-OPP-GUI-SHA-001** (the guilt-shame distinction) lives in guilt's folder per the alphabetically-earlier convention (GUI < SHA).

---

## Substrate-dependence relations

```yaml
relation_id: REL-SUB-SHA-AVP-001
relation_type: substrate_dependence
source: VA-SHA-001        # Shame
target: VA-AVP-001        # Active value patterns the agent is embedded in (placeholder — composite social substrate)
character: strong
stratum_distance: 0       # intra-stratum (both social)
conditions: >
  Shame depends on the social substrate of the active value patterns the
  relational structure is embedded in: the field's agents must be embedded in
  shared value patterns (honor, reciprocity, role-bearing, identity-defining
  patterns) against which the target's state-of-being can be recognised as
  deficient. A field with no shared value patterns has no basis for shaming.
  The dependence is strong and constitutive — without the social substrate
  of active value patterns the pattern is not realisable. This is the
  relation that locates shame at the social stratum. As with guilt, the
  value patterns may be codified into formal norms (honor codes, purity
  codes, identity-policing norms) but the codification is not the substrate;
  the underlying value patterns are.
status: Draft
version: 0.2
```

```yaml
relation_id: REL-SUB-SHA-REL-001
relation_type: substrate_dependence
source: VA-SHA-001        # Shame
target: VA-REL-001        # Relational structure with distributed evaluation (placeholder — social pattern)
character: strong
stratum_distance: 0
conditions: >
  Shame depends on the relational structure within which distributed evaluation
  and signaling operate. The structure must have sufficient density of mutual
  evaluation that the field can register and propagate the recognition of a
  target's deficiency; it must have the channels (reputation, gossip, public
  occasions, institutional records, digital infrastructure) through which
  signaling propagates; and it must have the coordination structure through
  which cost-imposition (status reduction, coordination/access restriction,
  exclusion) operates. The dependence is strong: shame in radically anonymous
  contexts is weak because the field cannot register or propagate signals; in
  fields with thick mutual evaluation it is intense. This is also why
  observation infrastructure (institutional records, digital platforms) scales
  shame's reach beyond face-to-face structures.
status: Draft
version: 0.2
```

---

## Modulation relations (shame modulating downward)

```yaml
relation_id: REL-MOD-SHA-BIO-001
relation_type: modulation
source: VA-SHA-001        # Shame
target: VA-BIO-001        # Target biological substrate (placeholder)
character: conditional
modulation_kind: conditional
cascaded: true            # cascades through social to biological
conditions: >
  Shame modulates the target's biological substrate by cascade: shame
  imposes social costs (status reduction, coordination/access restriction,
  exclusion), and these social changes cascade to biology (isolation stress,
  reduced support availability, sustained cortisol response to ostracism,
  reduced resource access). The biological effect is downstream of the
  social cost-imposition, not a direct modulation. This is per the framework
  v2.1 distinction between direct and cascaded modulation: an intellectual or
  social pattern affecting biology generally does so through cascade, not
  directly. The character is conditional because shame's social
  cost-imposition itself is conditional: bound well, the social costs
  motivate reintegration and the biological cascade resolves; bound badly,
  the social costs become chronic and the biological cascade compounds
  into durable damage.
status: Draft
version: 0.2
```

---

## Modulation relations (shame modulating other social patterns)

```yaml
relation_id: REL-MOD-SHA-AVP-001
relation_type: modulation
source: VA-SHA-001        # Shame
target: VA-AVP-001        # Active value patterns the agent is embedded in
character: conditional
modulation_kind: conditional
cascaded: false           # intra-stratum modulation
conditions: >
  Shame modulates the active value patterns the field is embedded in, with
  the character of the modulation conditional on what shame is bound to and
  whether reintegration pathways exist. Bound to high-quality value patterns
  with reintegration: shame modulates supportively, sustaining the patterns
  through decentralised reputation-based regulation that would otherwise
  require formal enforcement. Bound to low-quality value patterns or without
  reintegration: shame modulates distortingly, enforcing degrading patterns
  and producing humiliation-culture dynamics. This conditional modulation
  parallels power's relation to whatever it is bound to: like power, shame
  amplifies what it is bound to without orienting the binding itself. The
  conditionality is the analytically critical feature — it explains how
  shaming can be either decentralised quality-maintenance or totalising
  humiliation depending on bindings.
status: Draft
version: 0.2
```

```yaml
relation_id: REL-MOD-SHA-REP-001
relation_type: modulation
source: VA-SHA-001        # Shame
target: VA-REP-001        # Reputation patterns (placeholder — social pattern)
character: supportive
modulation_kind: supportive
cascaded: false
conditions: >
  Shame modulates reputation patterns supportively across bindings. Where
  shame operates in a field, reputation tracking is amplified — agents
  attend to who has been shamed, the information density of the field
  increases, and the reputation-based information structure becomes denser.
  This holds regardless of whether the underlying value-pattern bindings
  are high-quality or low-quality; the modulation of reputation as such
  is consistent. (Whether the denser reputation infrastructure produces
  field-compatible or field-incompatible outcomes depends on the
  bindings, captured in REL-MOD-SHA-AVP-001.) Shame and reputation
  co-stabilise structurally — shame requires reputation tracking to
  operate, and shame intensifies reputation tracking in turn.
status: Draft
version: 0.2
```

---

## Distinction-relations (patterns shame is commonly conflated with)

Per the schema v0.3 §5.2 note, the `distinction` relation type is flagged provisional; these are recorded as `opposition` with `incompatibility` mode as the closest existing fit. The guilt-shame distinction is in guilt's folder (REL-OPP-GUI-SHA-001) per the alphabetically-earlier convention.

```yaml
relation_id: REL-OPP-SHA-COE-001
relation_type: opposition
source: VA-SHA-001        # Shame
target: VA-COE-001        # Coercion
character: incompatibility
opposition_mode: incompatibility
conditions: >
  Shame and coercion are both regulatory cost-imposition patterns operating
  at the social stratum, but are structurally distinct in their machinery.
  Coercion is centralised and goal-directed: a specific enforcing party
  imposes a credible contingent cost on a target with a specific compliance
  demand, requiring the target's perception of intolerability. Shame is
  decentralised and field-directed: the relational field's agents
  distribute the cost-imposition without requiring a centralised enforcer
  or a specific compliance demand, and operates regardless of target
  perception. Coercion can recruit shame's infrastructure (see
  REL-SUB-COE-SHA-001 in coercion's folder), but the patterns themselves
  are distinct. DISTINCTION relation (provisional). Placement note: COE <
  SHA alphabetically, so this record may be relocated to coercion's folder
  when the convention is applied uniformly.
status: Draft
version: 0.2
```

```yaml
relation_id: REL-OPP-SHA-PUN-001
relation_type: opposition
source: VA-SHA-001        # Shame
target: VA-PUN-001        # Punishment (placeholder)
character: incompatibility
opposition_mode: incompatibility
conditions: >
  Shame and punishment are both cost-imposition patterns but differ in
  centralisation. Punishment is centrally administered by a recognised
  authority (formal or informal) with explicit sanctioning structure; shame
  is decentralised, distributed across the field, requiring no recognised
  authority. The two relate (formal punishment can be accompanied by
  shaming; shaming can intensify into formal punishment when institutional
  structures take it up) but their machinery is distinct. DISTINCTION
  relation (provisional).
status: Draft
version: 0.2
```

```yaml
relation_id: REL-OPP-SHA-FEA-001
relation_type: opposition
source: VA-SHA-001        # Shame
target: VA-FEA-001        # Fear (placeholder)
character: incompatibility
opposition_mode: incompatibility
conditions: >
  Shame and fear are structurally distinct kinds of patterns. Fear is a
  biological response to threat without value-evaluation structure; shame
  is a multi-agent social regulatory pattern operating on the field's
  recognition of deficiency relative to value patterns. The two can occur
  in the same situation (a target may experience fear of shaming) but
  fear-of-shaming is fear taking shame as its threat-object, not shame
  itself. DISTINCTION relation (provisional). Placement note as
  REL-OPP-SHA-COE-001.
status: Draft
version: 0.2
```

```yaml
relation_id: REL-OPP-SHA-EMB-001
relation_type: opposition
source: VA-SHA-001        # Shame
target: VA-EMB-001        # Embarrassment (placeholder)
character: incompatibility
opposition_mode: incompatibility
conditions: >
  Shame and embarrassment both involve field-recognition of deviation but
  operate at fundamentally different magnitudes and on different consequences.
  Embarrassment registers minor field-recognition of a small deviation with
  brief and bounded effect; shame registers field-recognition of a deficiency
  with status-and-belonging consequences and durable cost-imposition.
  Embarrassment recovers within an interaction; shame extends across
  interactions through the field's continued evaluation. The two share
  surface features (the field's attention to the target's deviation) but
  the structural consequences and durability differ. DISTINCTION relation
  (provisional). Placement note as REL-OPP-SHA-COE-001.
status: Draft
version: 0.2
```

---

## Field-relative-effect relations

```yaml
relation_id: REL-FRE-SHA-INT-001
relation_type: field_relative_effect
source: VA-SHA-001        # Shame
target: internal          # field-position-type (shaming agents themselves)
character: mixed
effect_polarity: mixed
effect_description: >
  Agents in the relational field who are doing the shaming experience
  field-stability and confirmation of the value patterns when shame
  operates with proportion and reintegration available. They participate
  in the field's regulation and reinforce their own embeddedness in its
  value patterns. When shame operates without proportion or reintegration,
  the same agents become participants in humiliation-culture dynamics
  with diffuse responsibility — no single agent's signaling produces the
  damage, but collectively the pattern compounds beyond any individual's
  intent. The effect is therefore mixed and conditional on the same
  factors that condition shame's external character generally.
conditions: >
  Positive when shame operates with proportion and reintegration; mixed
  to negative when shame compounds beyond either.
status: Draft
version: 0.2
```

```yaml
relation_id: REL-FRE-SHA-ALL-001
relation_type: field_relative_effect
source: VA-SHA-001        # Shame
target: allied            # field-position-type (those supporting the shaming agents)
character: mixed
effect_polarity: mixed
effect_description: >
  Allied agents — those committed to the bearers of the shaming or to the
  value patterns being enforced — experience reassurance that the field's
  patterns are being maintained. They read the shaming sequence as
  regulatory confirmation. The effect is positive when shame operates
  with proportion and reintegration, and becomes ambivalent or negative
  when allied agents observe shame compounding beyond function (witnessing
  the damage their commitment supports).
conditions: >
  Tracks the conditionality of shame's external character.
status: Draft
version: 0.2
```

```yaml
relation_id: REL-FRE-SHA-NEU-001
relation_type: field_relative_effect
source: VA-SHA-001        # Shame
target: neutral           # field-position-type (less-embedded observers)
character: mixed
effect_polarity: mixed
effect_description: >
  Less-embedded observers read shaming as a signal about the field's value
  patterns and how they are being maintained. When proportionate and bounded,
  the signal is read as decentralised regulation — observers learn the
  field's commitments. When unbounded, the same signal reads as humiliation
  culture or social dysfunction, with negative judgement of the field
  itself. The effect tracks the same conditionality as shame's external
  character generally.
conditions: >
  Positive-as-signal when proportionate; negative when unbounded.
status: Draft
version: 0.2
```

```yaml
relation_id: REL-FRE-SHA-HOS-001
relation_type: field_relative_effect
source: VA-SHA-001        # Shame
target: hostile           # field-position-type (those opposing the value patterns or the bearers)
character: mixed
effect_polarity: mixed
effect_description: >
  Those whose interests run counter to the field's value patterns or to the
  bearers of the shaming may read shaming as exploitation opportunity — the
  shamed target's loss of standing as advantage, the field's commitment as
  a leverage point, the shaming infrastructure as machinery to recruit or
  to amplify against. This is the field position from which shaming is
  most commonly recruited by coercion as cost-source (REL-SUB-COE-SHA-001
  in coercion's folder, capturing the deliberate weaponisation of shaming).
  The hostile reading is not guaranteed — some adversaries respect
  proportionate shame — but it is structurally common enough to record.
conditions: >
  Effect depends on whether the hostile party chooses to exploit shaming;
  the vulnerability is structural, the exploitation is agential and
  captured in cost-source relations on the leveraging pattern's side.
status: Draft
version: 0.2
```

```yaml
relation_id: REL-FRE-SHA-SUB-001
relation_type: field_relative_effect
source: VA-SHA-001        # Shame
target: subjected         # field-position-type (the shamed target)
character: negative
effect_polarity: negative
effect_description: >
  The shamed target experiences lower quality across the strata as a real
  value-fact of being shamed: reduced physical access, biological stress
  from social isolation, reduced social standing, reduced intellectual
  capacity for participation. These effects operate regardless of whether
  the target psychologically internalises the shaming — a target who
  is numb to being shamed still loses status, still gets excluded, still
  faces reduced coordination access. The effect is uniformly negative
  in operation, though its trajectory depends on whether reintegration
  pathways are available (recoverable through reintegration when shame
  operates with proportion; accumulating into durable damage when shame
  compounds without reintegration). The subjected position is structurally
  what being shamed is, distinguishing it from other field positions
  through which agents merely observe or contribute to the shaming.
conditions: >
  Negative throughout operation; trajectory (recoverable vs durable)
  depends on reintegration availability.
status: Draft
version: 0.2
```

---

## Vocabulary additions/flags from this migration

The `subjected` field-position-type (added in schema v0.3 via the coercion migration) is now used in shame's field-relative-effects (REL-FRE-SHA-SUB-001). This is the second pattern to use the subjected position — its applicability to multiple target-directed regulatory patterns (coercion, shame, and likely predation, sanction-as-punishment when migrated) confirms the addition was structurally motivated rather than coercion-specific.

The conditional `modulation_kind` is used for REL-MOD-SHA-BIO-001 and REL-MOD-SHA-AVP-001. This continues to confirm the value of the conditional modulation type for patterns whose modulation character is set by bindings.

Four distinction-relations recorded (to coercion, punishment, fear, embarrassment) plus the guilt-shame distinction in guilt's folder makes five distinction-relations in shame's cluster. The case for committing the `distinction` relation type continues to strengthen across migrations.

The cascaded modulation flag (cascaded: true on REL-MOD-SHA-BIO-001) is the first use of this distinction in the migrations. It reflects the framework v2.1 addition of the direct/cascaded distinction and demonstrates the case the framework anticipated: a social-stratum pattern's effect on biology runs through social cost-imposition, not directly.

---

## Note on the coercion–shame cost-source relation

The coercion entry (VA-COE-001) records `REL-SUB-COE-SHA-001` — a cost-source relation in which coercion recruits shame's regulatory infrastructure to supply the contingent cost. With the framing correction to shame as multi-agent regulatory pattern (v0.2), the analytical content of this cost-source relation sharpens: coercion-using-shame is the deliberate deployment of shaming infrastructure by a specific party for a specific compliance demand, distinct from shame's own regulatory operation (which has no specific compliance demand and operates as ongoing distributed regulation). The relation lives in coercion's folder; this note records its analytical relationship to the corrected shame entry.

---

*Shame — Relation Records (Draft v0.2, framing correction to multi-agent regulatory pattern)*
