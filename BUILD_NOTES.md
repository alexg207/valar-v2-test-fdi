# Valar FDI v2-test — Build Notes

**Build run:** 2026-05-05 via `/generate-fdi-draft` skill (Claude Code)
**Repo:** https://github.com/alexg207/valar-v2-test-fdi
**Purpose:** end-to-end test of the productized FDI motion. Goal was to match V1 (`alexg207/valar-fdi`) quality from inputs alone, no copying from the V1 repo.

---

## Signal axes (Phase 5)

Replicated V1 4-axis pattern explicitly per user direction.

1. **Hiring Score** (mandatory) — active job postings indicating in-house inference / ML platform investment. Regex: `/inference|llm |triton|tensorrt|sglang|vllm|model serving|ml platform|gen[ ]?ai platform|kernel/`. Already vertical-aligned in template — no change needed.
2. **Opportunity Score / Buying Trigger** (mandatory) — recent public financial + strategic signals: 10-K commentary, earnings call quotes, leadership changes, M&A in AI/data, partnership announcements.
3. **Inference Pain** (Valar-specific) — production AI inference scale + stack pain. Sources: engineering blogs, conference talks, third-party press. Rubric 0=none → 5=>$5M annualized inference spend with documented pain.
4. **Data Residency** (Valar-specific, THE WOW AXIS) — regulatory / contractual constraints that block multi-tenant inference clouds. Rubric ties to HIPAA/PCI/GDPR/FedRAMP posture AND documented evidence of trying inference clouds and being blocked.

## Segments

Replicated V1 default 3-segment pattern: **Pipeline / Mid-Market / Enterprise.**

- **Pipeline (10):** signed design partners (BigPanda, Varonis) + named pipeline accounts from memo (ABInBev, Qualcomm, Jefferies, Mobileye, Abbott, Ford, Flatiron, American Airlines).
- **Mid-Market (6):** Stage 1 ICP — data-sensitive mid-market companies surfaced by Webset (Monzo, DKB, TSB, Celonis, ACA Group, F5).
- **Enterprise (14):** Tom's 10 named "Valar pick" CSV companies (Walmart, ServiceNow, UHG, Mastercard, GM/Cruise, Capital One, PayPal, Workday, HubSpot, Rivian) + 4 Webset standouts (Bank of America, NatWest, HSBC, Munich Re).

## Sections per company

V1 default 3-section pattern: **Company Profile / Inference Footprint / GTM Strategy.**

- **Company Profile** — 6 rows. Industry, revenue, HQ, cloud provider, AI maturity, Valar status.
- **Inference Footprint** — 4 rows. Use cases, current stack, pain points, estimated spend (range).
- **GTM Strategy** — 5 rows. Approach, key evidence, urgency level (uppercase verbs: EXECUTE / HIGH / WARM / MED / COLD / DEFER), target buyer (Buyer + Champion split), messaging angle (with quoted opening line).

## Features kept / dropped

- **Network view:** kept — heavy warm-intro mapping in `lovelace-contacts.json` (80 contacts, 27/30 companies covered, including 8 warm Primary network introductions at Capital One alone).
- **Hiring sub-score:** kept — works for the inference vertical, regex matches.
- **Tier filter:** kept — distribution 11 high / 15 med / 4 low across 30 companies.

## Notable copy decisions

- **The wow signal (UHG director's "data never leaves the firewall" quote)** appears prominently in:
  - `gtm_thesis` for UnitedHealth Group (verbatim)
  - `residency_reason` for UHG, Capital One, Bank of America, NatWest, HSBC, Mastercard
  - `signals[]` bullets across regulated-vertical accounts
- **Tom's verbatim ICP framing** — *"very, very large enterprises that are either regulated industries… Or have proprietary data"* — spliced into Enterprise gtm_thesis paragraphs.
- **Tom's antagonist warnings** preserved across CONTACT_MAP and gtm_thesis: every Enterprise gtm_thesis ends with `**NOT** ML engineering teams (per Wiggin antagonist warning)` and where applicable `**NOT** security/governance teams (per Tom)`.
- **Andrew Wiggin's framing** — *"Performance claims aren't durable differentiation"* — used in Mid-Market opp_reason fields where the buyer profile is platform-engineering-led.
- **No marketing language**, no hedges. "Needs verification" used aggressively where data isn't externally documented (see flags below).

## Companies featured & rationale

| Tier | Count | Includes |
|---|---|---|
| **high** | 11 | BigPanda + Varonis (signed); Capital One (8 warm Primary contacts); PayPal (4 warm); UHG (wow exemplar); Ford (warm CTO + named pipeline); Monzo + DKB (strong Webset GDPR signal); Celonis (process mining + sensitive customer data); BoA (NVIDIA AI Factory air-gap); Munich Re (Insure AI team named) |
| **med** | 15 | Tom's enterprise picks with general-knowledge fill; Webset banks with thinner residency signal |
| **low** | 4 | ABInBev, Abbott, HubSpot, American Airlines — all weaker signal AND/OR no contacts (gap or unmapped) |

## Webset details (reproducibility)

- **Webset ID:** `webset_01kqwqs4hpa3a05ats2zzsm9rs`
- **Dashboard:** https://websets.exa.ai/websets/webset_01kqwqs4hpa3a05ats2zzsm9rs
- **Search query:** see `webset-spec.json` (200-word buyer profile paragraph with EXCLUDE clause naming all 26 competitors)
- **Search criteria (4):** see `webset-spec.json` — softened from iteration 1 (which had 3.3% pass rates on $1.5M threshold + tried-and-failed sub-clause)
- **Search count:** 30 (all returned)
- **Enrichments (10):** Industry, Revenue, HQ, AI Job Postings, AI Strategy Signals, Inference Evidence, AI Deployment Constraints, Inference Blocker Evidence (THE WOW), Champion Personas, Source URLs. (Account cap is 10 enrichments; original plan was 11 — collapsed redundant inference-spend enrichment into Inference Evidence.)
- **Iteration history:**
  - Iteration 1: `webset_01kqwqf5sd0ecj38d2jh39qcvr` — original criteria (with "$1.5M" threshold + "tried-and-failed" sub-clause). Cancelled at 8% complete after 3.3% pass rates on criteria 3 + 4 indicated joint match rate would yield ~5–10 companies, not 30.
  - Iteration 2 (used): `webset_01kqwqs4hpa3a05ats2zzsm9rs` — criteria 3 softened to "publicly documented production AI/ML inference"; criteria 4 softened to "regulatory/contractual data-handling obligations." Pass rates jumped to 44–66%. 30/30 returned. Strict qualifiers preserved in searchQuery + enrichment descriptions.
- **Vendor false-positives dropped:** AKASA, SymphonyAI, C3 AI, Tempus AI, RegPass.ai, Inferenz, Quantara AI, Translucent AI (8 AI-vendor companies that slipped past criteria — flagged for skill template improvement).
- **Geographic skew note:** Webset surfaced heavy EU banking representation (NatWest, HSBC, Commerzbank, Crédit Agricole, Société Générale, Intesa Sanpaolo, Barclays, Monzo, DKB, TSB) likely driven by GDPR's strength as a residency signal. US-only ICP balance came from force-adding Tom's 10 picks.

## Reproducibility

The build's input/output state lives in the repo. To rerun the same Webset:
```
cat webset-spec.json | jq .  # exact spec used
```

To re-run Phase 7 (data.js) without re-firing Webset:
```
# webset-response.json + lovelace-contacts.json + CONTEXT.md are sufficient
# Re-run subagent with same prompt
```

To refresh data 90 days from now (dashboard staleness):
```
# Same webset-spec.json, fire fresh — companies + financial signals will refresh
# Webset auto-monitors are also possible but not configured in this build
```

## Data quality notes

**Strong signals:**
- UHG buyer interview (memo appendix) — fully populates UHG entry; serves as canonical wow exemplar across the dashboard
- NatWest — Webset returned the strongest single inference signal (~100 ML models on SageMaker, 5-yr Accenture+AWS deal, OpenAI partnership)
- BoA, Mastercard, Capital One — Champion personas from Webset are top-tier (e.g., Vishal Anand "VP AI / AI Center of Excellence" at Mastercard)
- Primary network mapping at Capital One (8 warm contacts including Vivek Gupta, Jason Burks, Ryan McCaffrey)

**Thin signals (flagged "needs verification"):**
- Inference spend numbers across the board are estimates, not source-cited. None of the 30 companies have published their annualized inference spend explicitly.
- ABInBev, Abbott, American Airlines — Webset returned 0 valid champion personas at the right company (name conflicts or no public engineering presence). Lovelace title-search also returned 0 real hits. CONTACT_MAP entries are empty.
- BigPanda + Varonis specifics — memo confirms they're signed design partners with sensitive customer data, but doesn't disclose ACV, deployed model count, or specific inference workload. All sections marked "needs verification" or "per memo."
- Tom's enterprise picks (Walmart, ServiceNow, UHG, Mastercard, GM/Cruise, PayPal, Workday, HubSpot, Rivian) — most NOT in Webset response. Sections written from CONTEXT.md mentions + general public knowledge. AI maturity / current stack / pain points are best-effort and may be 6–12 months stale.

**JOB_LISTINGS coverage:**
- Populated for Celonis, HSBC, Munich Re (those that returned non-NULL Webset enrichment)
- Empty arrays for the other 27 — all tagged "needs verification" so the Hiring sub-score defaults to 1 (not zero, which would dilute total)

## Open questions for the user

1. **Inference spend numbers** — every entry has a "$Xm-$Ym" range marked "needs verification" because no public source cites these directly. Want me to do a separate research pass via `web_search_exa` on the top 5 enterprise accounts to firm up estimates? (~10 min, ~$2)
2. **BigPanda + Varonis specifics** — best filled by Tom directly (signed design partners; he has the ACV, deployed workload, pain). Worth a 5-min Slack ping to him before delivery.
3. **Pipeline tier-2 accounts (ABInBev/Qualcomm/Jefferies/Mobileye/Abbott/Ford/Flatiron/American Airlines)** — only "named in pipeline" per memo. If Tom can share which are signed vs. early-stage convo, tier assignment can be sharpened.
4. **Tom's named picks for Enterprise (Walmart/ServiceNow/UHG/Mastercard/GM/Cruise/PayPal/Workday/HubSpot/Rivian)** — almost all have Primary warm intros (CONTACT_MAP populated from CONTEXT.md). Confirm Tom wants outreach in this prioritization, or different.

## Recommended next steps before demo

1. **Open `index.html` locally in a browser** (no server needed). Walk through 1 entry per segment.
2. **Spot-check 3 random `gtm_thesis` paragraphs** for "Valar with names changed" failure mode. The skill's guard rail: strip company name from gtm_thesis, see if it could fit any other company. UHG/Ford/NatWest spot-checked clean by the Phase 7 subagent.
3. **Verify CONTACT_MAP keys match SEGMENTS names** character-for-character (subagent confirmed; trust but verify with a `node` check).
4. **Pick 5 companies to lead with in the demo** — recommend BigPanda (signed reference), UHG (wow exemplar), NatWest (strongest documented signal), Capital One (8 warm intros), Munich Re (insurance + Chief Data and AI Officer).
5. **Push to GitHub** — `git push` (already authenticated). Connect to Vercel for live preview if desired.

## Skill performance assessment (this is a v2-TEST)

What worked:
- The 11-phase structure caught two real issues early: (a) iteration-1 Webset criteria over-specification (3.3% pass rates → cancel + re-fire saved 14 min and ~$5), (b) Lovelace keyword search noise → pivoted to `title` filter approach (and Webset's own Champion Personas enrichment) for much cleaner contact data.
- Webset enrichment quality on ICP-fit companies (NatWest, Commerzbank, Bank of America) was high — better than Lovelace fuzzy matching.
- Subagent for Phase 7 was the right delegation — kept 1.5MB of webset-response.json out of main context window.
- Per-phase commits make `git diff` between phases legible for audit.

What flagged for skill iteration:
- **Vendor false-positives in Webset** — 8 of 30 returns were AI-vendor companies (AKASA, C3 AI, Inferenz, etc.) despite explicit named exclusions in searchQuery. Either Webset isn't honoring the EXCLUDE clause as strongly as expected, or the exclusion list needs another iteration. Worth testing with even more aggressive exclusions on next build.
- **Lovelace `keywords` parameter is fuzzy** — first batch returned mostly off-company results. The `title` parameter is much cleaner. Skill should default to `title` filter for senior-role discovery, not free-text `keywords`.
- **Founder-specific data gaps for Tom's named picks** — most of Tom's 10 enterprise picks didn't surface in Webset (the Webset is finding *new* ICP matches; founder-named accounts need different fetching strategy). Skill should explicitly note "force-add Tom's named accounts; Webset is for discovery, not validation of his existing list."
- **Inference spend isn't externally derivable** — across 30 companies, none have published annualized inference spend. The skill's enrichment description that asks for "estimated annualized inference spend if mentioned" returns "needs verification" almost universally. Either drop that ask, or accept that this field will always need human-curated estimates.

## Summary

Build complete in `~/fdi/valar-v2-test/`. 30 companies × 4 axes × 3 sections × 80 contacts. Per-phase Git history. Open `index.html` locally to preview.
