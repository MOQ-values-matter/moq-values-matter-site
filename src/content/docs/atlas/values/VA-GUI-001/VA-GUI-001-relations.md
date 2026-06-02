# Guilt — Relation Records (Draft v0.2)

Relation records implied by the Guilt pattern entry (VA-GUI-001), structured under the relation record schema. Per the folder convention introduced in schema v0.4 (§1.3), each record lives in the source pattern's folder; this file collects guilt's source-originating relations for review. In the production layout each YAML block below becomes its own `.yaml` file in `atlas/VA-GUI-001/relations/`.

Patterns referenced that do not yet have entries are marked `(placeholder)`.

**v0.2 (value-pattern terminology correction, 2026-05-26):** The substrate relation to "held norms" (REL-SUB-GUI-NRM-001 → VA-NRM-001) is replaced by a substrate relation to the active value patterns the agent is embedded in (REL-SUB-GUI-AVP-001 → VA-AVP-001). Conditions and descriptions throughout are reframed from norm-violation language to value-pattern-incompatibility language, aligning the analysis with the Metaphysics of Quality. Norms are retained only as a passing mention of one codified form value patterns can take. See the pattern entry v0.2 revision note for rationale.

**Note on the coercion-guilt relation.** The relation by which coercion uses guilt as a cost-source (REL-SUB-COE-GUI-001) is **not** recorded in this file because coercion is the source of that relation, not guilt. Per the folder convention, that record lives in coercion's folder (already present in the corrected coercion relations file v0.2). Graph tooling traversing both folders finds the relation; it appears exactly once.

---

## Substrate-dependence relations

```yaml
relation_id: REL-SUB-GUI-BST-001
relation_type: substrate_dependence
source: VA-GUI-001        # Guilt
target: VA-BST-001        # Biological stress / self-inhibition capacity (placeholder)
character: strong
stratum_distance: 1       # social depends on biological
conditions: >
  Guilt depends on biological substrate: the capacity to register
  self-administered pressure (cortisol response, autonomic arousal,
  behavioural inhibition). Without these biological capacities the pattern
  cannot be realised — recognition of violation alone, without the biological
  pressure response, would be a different pattern (perhaps regret or
  intellectual acknowledgement, but not guilt). The dependence is strong:
  guilt cannot operate in agents whose biological substrate for self-directed
  pressure is absent or severely impaired.
status: Draft
version: 0.1
```

```yaml
relation_id: REL-SUB-GUI-AVP-001
relation_type: substrate_dependence
source: VA-GUI-001        # Guilt
target: VA-AVP-001        # Active value patterns the agent is embedded in (placeholder — composite social substrate)
character: strong
stratum_distance: 0       # intra-stratum (both social)
conditions: >
  Guilt depends on the social substrate of the active value patterns the agent
  is embedded in: the agent must be embedded in value patterns (reciprocity,
  loyalty, care, role-bearing, integrity, honor, and so on) against which their
  own action can be recognised as incompatible. A creature embedded in no value
  patterns cannot have guilt no matter how much biological capacity for
  self-directed pressure it possesses. The dependence is strong and
  constitutive — without the social substrate of active value patterns the
  pattern is not realisable. This is the relation that locates guilt at the
  social stratum rather than the biological stratum. Note: in some contexts the
  value patterns have been codified into formal norms, but the codification is
  not the substrate; the underlying value patterns are. VA-AVP-001 is a
  composite placeholder — in practice guilt depends on whichever specific value
  patterns are active in the agent's relational field, which may resolve into
  multiple substrate relations to specific value-pattern entries (e.g.
  REL-SUB-GUI-REC for reciprocity, REL-SUB-GUI-LOY for loyalty) as those
  entries are created.
status: Draft
version: 0.2
```

```yaml
relation_id: REL-SUB-GUI-REL-001
relation_type: substrate_dependence
source: VA-GUI-001        # Guilt
target: VA-REL-001        # Relational structure / belonging (placeholder — social pattern)
character: conditional
stratum_distance: 0
conditions: >
  Guilt typically depends on the agent's belonging to a relational structure
  within which the active value patterns operate. Guilt about an action
  incompatible with a value pattern no one in the agent's field shares tends to
  be weak or absent; guilt within thick relational structures (family,
  profession, religion, close community) is intense. The dependence is
  conditional: the magnitude of the pattern's pressure scales with the depth of
  the bearer's embeddedness in the relational structure whose active value
  patterns the action was incompatible with.
status: Draft
version: 0.1
```

---

## Modulation relations (guilt modulating downward)

```yaml
relation_id: REL-MOD-GUI-BIO-001
relation_type: modulation
source: VA-GUI-001        # Guilt
target: VA-BIO-001        # Biological stress / inhibition patterns (placeholder)
character: conditional
modulation_kind: conditional
cascaded: false           # direct, adjacent stratum
conditions: >
  Guilt modulates biological substrate, but the character of the modulation
  depends on whether guilt operates natively or in degraded mode. Native
  guilt (realignment with available repair pathway) modulates biology
  supportively: pressure builds, motivates repair, repair restores alignment,
  pressure discharges, biology returns to baseline. Degraded guilt (chronic
  without repair, attached to low-quality value patterns, disproportionate
  pressure)
  modulates biology distortingly: sustained cortisol without resolution,
  cumulative stress damage, behavioural inhibition past structural function.
  Conditional modulation_kind per schema v0.3 — the character is set by
  whether guilt operates in its native or degraded mode.
status: Draft
version: 0.1
```

---

## Modulation relations (guilt modulating other social patterns)

```yaml
relation_id: REL-MOD-GUI-REC-001
relation_type: modulation
source: VA-GUI-001        # Guilt
target: VA-REC-001        # Reciprocity
character: supportive
modulation_kind: supportive
cascaded: false           # intra-stratum modulation
conditions: >
  Guilt modulates reciprocity supportively: the repair-and-restitution cycle
  by which guilt resolves itself restores the reciprocal relation that the
  violation strained. Guilt is one of the internal mechanisms by which
  reciprocity is sustained without external enforcement — bearers who feel
  guilt over reciprocal violations repair them, which strengthens reciprocity
  over time. This is intra-stratum modulation between two social patterns
  in the same field.
status: Draft
version: 0.1
```

```yaml
relation_id: REL-MOD-GUI-ACC-001
relation_type: modulation
source: VA-GUI-001        # Guilt
target: VA-ACC-001        # Accountability (placeholder — social pattern)
character: supportive
modulation_kind: supportive
cascaded: false
conditions: >
  Guilt modulates accountability supportively. Where guilt is well-developed
  in bearer populations, accountability mechanisms can be lighter and less
  formal because the internal pattern does correction work that would
  otherwise require external mechanisms. Accountability and guilt mutually
  support each other in well-functioning social fields.
status: Draft
version: 0.1
```

```yaml
relation_id: REL-MOD-GUI-TRU-001
relation_type: modulation
source: VA-GUI-001        # Guilt
target: VA-TRU-001        # Trust
character: supportive
modulation_kind: supportive
cascaded: false
conditions: >
  Guilt modulates trust supportively, specifically through trust-restoration
  after violation. When a bearer violates a trust-bearing relation and the
  guilt pattern leads to acknowledged repair, the trust can be restored —
  often, paradoxically, deepened, because the bearer has demonstrated both
  the capacity to violate and the capacity to recognise and repair. Trust
  without ever-tested guilt-and-repair cycles is shallower than trust that
  has survived them.
status: Draft
version: 0.1
```

---

## Distinction-relations (patterns guilt is commonly conflated with)

These relations would benefit from a dedicated `distinction` relation type (flagged provisional in schema v0.3 §5.2). Until that type is committed, they are recorded as `opposition` with `incompatibility` mode, which is the closest existing fit — each adjacent pattern can exist where guilt is absent and guilt can exist where each is absent.

```yaml
relation_id: REL-OPP-GUI-SHA-001
relation_type: opposition
source: VA-GUI-001        # Guilt
target: VA-SHA-001        # Shame (placeholder)
character: incompatibility
opposition_mode: incompatibility
conditions: >
  Guilt and shame are commonly conflated but are dissociable. Guilt targets
  action ("I did wrong") and orients toward repair; shame targets identity
  ("I am bad") and orients toward identity-protection or hiding. The
  constituents differ — shame includes identity-level devaluation; guilt
  includes orientation toward repair. They co-occur often in real experience
  but are structurally distinct. DISTINCTION relation; recorded as
  opposition/incompatibility provisionally until the distinction relation
  type is committed.
status: Draft
version: 0.1
```

```yaml
relation_id: REL-OPP-GUI-FEA-001
relation_type: opposition
source: VA-GUI-001        # Guilt
target: VA-FEA-001        # Fear (placeholder)
character: incompatibility
opposition_mode: incompatibility
conditions: >
  Guilt and fear share the biological substrate (stress, arousal, inhibition)
  but lack the same constituent structure. Fear responds to threat without
  value-evaluation; guilt responds to one's own action as incompatible with the
  value patterns one is embedded in. An
  agent can feel fear of consequences without feeling guilt about what
  produced them. DISTINCTION relation (provisional).
status: Draft
version: 0.1
```

```yaml
relation_id: REL-OPP-GUI-EMB-001
relation_type: opposition
source: VA-GUI-001        # Guilt
target: VA-EMB-001        # Embarrassment (placeholder)
character: incompatibility
opposition_mode: incompatibility
conditions: >
  Embarrassment shares guilt's recognition-and-pressure structure but
  operates at lower magnitude and on value patterns whose deviation does not
  register as moral. The constituent of "orientation toward repair,
  restitution, or restraint" is weak or absent in embarrassment. DISTINCTION
  relation (provisional).
status: Draft
version: 0.1
```

```yaml
relation_id: REL-OPP-GUI-PUN-001
relation_type: opposition
source: VA-GUI-001        # Guilt
target: VA-PUN-001        # Punishment (placeholder)
character: incompatibility
opposition_mode: incompatibility
conditions: >
  Punishment is externally imposed sanction; guilt is internally administered
  pressure. The two relate (punishment can induce guilt, guilt can invite
  punishment) but are not the same pattern. Punishment is a coercion-adjacent
  social pattern operating on the agent; guilt is the agent's own pattern.
  DISTINCTION relation (provisional).
status: Draft
version: 0.1
```

---

## Field-relative-effect relations

```yaml
relation_id: REL-FRE-GUI-INT-001
relation_type: field_relative_effect
source: VA-GUI-001        # Guilt
target: internal          # field-position-type
character: mixed
effect_polarity: mixed
effect_description: >
  The bearer experiences guilt as internal pressure with directional
  orientation toward repair. In native operation, the effect is mixed in
  time: negative in the holding phase (pressure, discomfort, behavioural
  inhibition) but positive in resolution (pressure discharges, standing is
  restored, alignment with the value patterns is reaffirmed). In degraded mode
  (chronic, low-quality value patterns, disproportionate) the effect is more
  uniformly negative.
conditions: >
  Mixed-as-temporal-trajectory in native mode; mixed-as-conditional-on-mode
  overall. The static schema flattens the temporal shape (see Section 9's
  dynamics-half deferral).
status: Draft
version: 0.1
```

```yaml
relation_id: REL-FRE-GUI-ALL-001
relation_type: field_relative_effect
source: VA-GUI-001        # Guilt
target: allied            # field-position-type (wronged parties capable of accepting repair)
character: positive
effect_polarity: positive
effect_description: >
  Wronged parties experience restored trust when the bearer's guilt leads
  to acknowledged repair. They gain reassurance of the bearer's commitment
  to the value patterns and often a deeper relational footing than existed
  before
  the violation. The effect is positive in native operation; absent or
  negative when guilt is unfollowed by repair.
conditions: >
  Holds when guilt produces repair; degraded when guilt is chronic without
  repair (the wronged party watches the bearer suffer without resolution).
status: Draft
version: 0.1
```

```yaml
relation_id: REL-FRE-GUI-NEU-001
relation_type: field_relative_effect
source: VA-GUI-001        # Guilt
target: neutral           # field-position-type
character: positive
effect_polarity: positive
effect_description: >
  Neutral observers read accountability signals from a bearer's guilt-and-
  repair sequence. The bearer's group-membership is reaffirmed in the
  observer's perception; trust in the group's value-pattern maintenance
  increases. The effect is positive; the bearer's guilt is read as commitment
  to the value patterns rather than as weakness.
conditions: >
  Holds when guilt is followed by repair and the observer reads the
  sequence as such. Less positive or absent when the observer sees only
  the pressure-phase without resolution.
status: Draft
version: 0.1
```

```yaml
relation_id: REL-FRE-GUI-HOS-001
relation_type: field_relative_effect
source: VA-GUI-001        # Guilt
target: hostile           # field-position-type
character: mixed
effect_polarity: mixed
effect_description: >
  Adversaries may read guilt signals as exploitation opportunity: confession
  as weakness, expressed contrition as leverage point, the bearer's pressure
  as something to amplify or manipulate. This is the field position from
  which guilt is most commonly recruited by coercion as cost-source (see
  REL-SUB-COE-GUI-001 in coercion's folder). The hostile reading is not
  guaranteed — some adversaries respect the guilt-and-repair sequence — but
  it is structurally common enough to record. Effect is mixed because the
  bearer's vulnerability is real even when not exploited.
conditions: >
  Effect intensity depends on whether the adversary chooses to exploit
  the guilt signal. The vulnerability is structural; the exploitation is
  agential.
status: Draft
version: 0.1
```

---

## Note on the coercion–guilt cost-source relation

The coercion entry (VA-COE-001) records `REL-SUB-COE-GUI-001` — a cost-source relation in which coercion uses guilt as one of several possible cost-sources. Per the folder convention (schema v0.4 §1.3), that relation lives in coercion's folder, not in guilt's, because coercion is the source. From guilt's perspective, the relation is observable in the graph as an incoming edge but is not duplicated here.

The narrative articulation of guilt's entry (section "Guilt as a Cost-Source for Coercion") discusses what this leveraging looks like and why guilt-leveraged coercion is sometimes more reliable than power-leveraged coercion — but the structured relation itself is single-source, captured once, in coercion's folder.

---

## Vocabulary additions/flags from this migration

No new field-position-types were needed. The existing `internal`, `allied`, `neutral`, `hostile` set covered guilt's field positions; `subjected` (added v0.3) was not needed because guilt is intra-agent in operation.

Four distinction-relations were recorded (to shame, fear, embarrassment, punishment), all using the provisional `opposition`/`incompatibility` framing. This is the second migration after the power entry to surface multiple distinction-relations in one pattern, strengthening the case for committing the `distinction` relation type (currently flagged in schema v0.3 §5.2). Recommend reviewing whether to commit it.

No new cost-source relations were created from the guilt side, since the coercion-guilt cost-source relation belongs in coercion's folder. If other patterns later use guilt as a cost-source — for example, in some configurations of social control, religion, or institutional discipline — those would be additional cost-source relations originating from those patterns and living in their folders, not duplicated here.

---

*Guilt — Relation Records (Draft v0.1, migrated to four-artifact schema)*
