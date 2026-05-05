# Valar FDI — Context Brief

**Generated:** 2026-05-05 (v2-test build via /generate-fdi-draft skill)
**Sources used:**
- `inputs/memo.md` — Valar PVP V Memo (Brian Schechter + Gaby Lorenzi, 4/29/2026)
- `inputs/granola-2026-04-24-valar-primary-gtm.md` — Valar / Primary GTM call (Alex demo)
- `inputs/context-dump.md` — pre-built research synthesis (memo + Slack + spreadsheets)
- `inputs/slack-mpim-charles-gaby-kickoff.md` — origin coordination DM (4/24)
- `inputs/slack-channel-valar-fdi.md` — internal coordination channel (4/27 onward)
- `inputs/slack-dm-charles-holley.md` — Charles 1:1
- `inputs/slack-dm-gaby-lorenzi.md` — Gaby 1:1
- `inputs/valar-outbound-gaby.csv` — Tom's 10 "Valar pick" target companies

---

## What Valar Does

**One line:** Bring-your-own-cloud (BYOC) inference optimization platform — installs in customer's own cloud, dynamically routes AI inference workloads across heterogeneous accelerators (NVIDIA, AMD, Trainium, TPU) with kernel-level optimizations and an SLO-aware scheduler.

Valar aims to be the **"Databricks of inference."** Their software lands as an orchestration + optimization layer above open-source serving engines (vLLM, SGLang, TRT-LLM), routing each workload to the cheapest available compute that meets the customer's SLO. Claims **50–80% lower inference cost** without data leaving the customer's environment. Expansion path: cost/reliability wedge → batch/agentic workload scheduling → workflow orchestration → multi-pipeline governance → centralized cost dashboards. Goal = full enterprise AI control plane.

**Stealth.** No public web presence, no Crunchbase, no press coverage. Founder email is `amsterdam.tom@gmail.com` (no company domain).

## Round + Investment

- **$20M round** at **$70M post-money valuation**
- Primary investing **$10M for 14% ownership**
- 5 term sheets active
- PVP point: **Brian Schechter**

## Team

- **Tom Amsterdam** (CEO, NYC) — Israeli PMO strategic ops → CPO/COO at Granulate (sold to Intel for $650M) → CEO of MethodIQ ($0 → $50M ARR sales-led enterprise motion). Previously sold a cybersecurity startup to Huawei. NYC-based since post-Intel.
- **Ron Gruner** (CTO, Israel) — built Granulate runtime optimization engine from scratch as VP R&D, carried through Intel acquisition. Comes from **Unit 8200's Aram program** (Israeli military elite low-level systems R&D track). Owns the differentiated tech: QoS engine, SLO-aware scheduler, workload profiler, runtime optimizer, capacity orchestrator.
- **6 ex-Granulate engineers** committed to join post-raise.
- **Granulate playbook is the model:** runtime optimization wedge → infrastructure control plane → co-sell with cloud providers.

## The Bet (ICP Qualifier)

Enterprises running **>$1.5M in annual inference spend** will pay **$150K–$800K+ ACV** to run inference inside their own cloud with lower cost, faster speed, SLO met.

- **Mid-market land:** $150K ACV
- **Enterprise expand:** $800K+ ACV
- **Expansion logic:** per-token pricing as more workloads run through the platform

## Real Pipeline (per memo, NOT speculative)

**Design partners (signed):**
- BigPanda
- Varonis

**Named pipeline:**
- ABInBev, Qualcomm, Jefferies, Mobileye, Abbott, Ford, Flatiron, American Airlines

**Upcoming Primary FDI calls:** Databook, New York Times, Shutterstock

**40 potential customers chatted with to date.**

## Market Context

- Inference market: **$100B (2026) → $255B (2030)**
- **40% of data center workloads will be inference by 2030** (vs. 20% today)
- Three generations of inference complexity in <3 years: prompt/response → reasoning models (10–50× token consumption per query) → mixture-of-experts (3–5× cost variance based on infra fit)
- Agentic workloads = orders of magnitude more compute per task; shifting toward async, batched, latency-insensitive profile (Valar's sweet spot)
- Open-weight models maturing → BYOC inference is now production-viable for the first time

## Competitive Landscape

| Category | Players | Why they fail |
|----------|---------|---------------|
| **Hyperscalers** | AWS Bedrock, GCP Vertex, Azure AI Foundry | No SLO, opaque cost, quota limits, no cross-cloud, regional model gaps. Win regulated by default, not on merit |
| **Inference clouds** | Fireworks ($315M ARR, $4B val), Together ($300M ARR, $3.3B val, has VPC), Baseten, Modal, Groq, Cerebras | Multi-tenant data co-mingling, can't clear regulated compliance. NVIDIA supply constraints passed through. Only Together has VPC option |
| **GPU clouds** | Crusoe, Coreweave, Nebius | Own hardware + sell compute; different model — they're suppliers/peers, not direct rivals |
| **DIY** | vLLM/SGLang on own K8s | Needs 4–8 MLOps engineers, fragmented capacity, no SLO, every traffic spike = fire drill. **Inferact** (vLLM productized) is direct competitor — Omer says Tom's approach stronger |

**Startups to monitor:** Contextual, Poetiq, Impala, BentoML (sold to Modular Feb 2026), TrueFoundry (Series A from Intel Capital 2025), Doubleword (founded 2021, $12M Series A 2025).

## Key Risks

1. **Customer not ready** — inference demand hasn't exploded for them yet; hyperscalers are "good enough" until cost/scale forces reckoning
2. **Middleware risk** — sitting on top of the hyperscalers; they could theoretically build BYOC themselves (memo argues they won't because it cannibalizes managed compute revenue)
3. **Inference clouds pivot to BYOC** — Together already has VPC deployment; Fireworks could follow

## Buyer Insights

### From UnitedHealth Group, Director of Architecture
- **Currently on:** GCP Vertex AI + Azure for production inference. RAG-based benefits queries (Medicare, Medicaid, commercial plans).
- **Tried:** Fireworks, Together, Baseten, Modal — **none reached production** because of security blockers.
- **Hyperscaler pain:** opaque pricing (node fees, endpoint fees, compute premiums) that spirals during seasonal spikes like open enrollment; model deprecations forcing clinical-pipeline re-validation under HIPAA; cold-start latency at peak; GCP vendor lock-in; multi-region compliance (US/EU/Asia) hard across every Vertex subservice.
- **Sees BYOC + VPC peering as inevitable** — *"data never leaves the firewall."* UHG isn't there yet but views it as inevitable at the next cost/scale inflection point.

### From Andrew Wiggin (founding AE, Fireworks.ai)
- **AI-native customers** = fast cycles, low-quality revenue. **Digital natives + enterprise** = long cycles, strategic.
- ⚠️ **CRITICAL: ML engineering teams are antagonists** — they see external inference vendors as a threat to their role.
- **Real buyer = platform engineering OR security/compliance function.** NOT ML eng.
- GPU shortages pushing enterprises toward inference providers as GPU aggregators (hyperscalers stocked out).
- *"Performance claims aren't durable differentiation — you need a problem statement where 90% of target buyers immediately say yes."*

### From Het Trivedi (ex-FDE, Baseten — bearish)
- **Data gravity** keeps workloads on the hyperscaler — enterprises rarely outsource inference even when specialized providers offer a better experience.
- **Real competition = AWS/GCP/Azure**, not other inference startups.
- Only reason enterprises switch = **cost**. Switching cost is high.
- *"Databricks for inference"* positioning is overused; space is underdifferentiated.

### From Anupreet Walia (VP Eng, Baseten)
- **Hard problems** in agentic infra: inference routing, data locality across calls, state management across heterogeneous hardware.
- These need forward-deployed engineering, not just a platform.
- **First 2–3 customers define PMF** — Valar's design partners (BigPanda, Varonis) are the test.

### From Joey Adarkwah (ex-Head of Core Platforms, NYT)
- *"If they can sell through the hyperscalers' marketplace, that's a huge cost advantage. Engineering leaders can buy quicker through the marketplace. Valar is positioned for this."*
- NYT is concerned about scaling inference; cost is top of mind. Cross-cloud optionality is key.
- Joey will introduce Valar to the actual buyer at NYT.

## Investment Thesis

1. Tom + Ron's Granulate experience = right team for this product (technical + commercial)
2. **BYOC is largely unmet** by existing players — hyperscalers won't (cannibalization), inference clouds can't (multi-tenant), DIY is too expensive
3. Time is now — enterprise inference scaling rapidly while constraints (data residency, compliance, cost predictability, agentic shift) push them toward in-cloud deployment

## Gotta Believes

1. **NOW** is the moment enterprises need BYOC/multi-cloud inference (driven by data residency, compliance, cost predictability, agentic/batch workloads)
2. Hyperscalers + GPU clouds **will not** build a BYOC cross-accelerator inference control plane — it cannibalizes their own managed compute revenue
3. Valar can deliver jaw-dropping CX with minimal friction-to-value, drives cost down, creates lock-in

## How Valar Came to Primary

- Gaby was doing diligence with **Omer (CTO of Atero)** about a different inference business (Lucas Liebenwein / Zhijian Liu's company)
- Omer redirected: *"No, no, no — don't look at Lucas's business. Look at Valar."*
- Charles had built an inference market map for Lucas/Zhijian (`inference-market-map.vercel.app`) — that V1 was repurposed for Valar's GTM intro call on 4/24
- Valar founder Tom met Gaby and Alex on 4/24 (impromptu, ~15 min); pitch was on 4/29; Primary ultimately passed but offering rated "really powerful" by Brian
- This v2-test is a **fresh ground-up rebuild via `/generate-fdi-draft` skill** — testing whether the productized motion can match the manual V1 quality

## Market Segmentation

- **Neo clouds / inference providers** (Fireworks, Together, Baseten, Modal, Groq, Cerebras) = **competitors** — they sell inference-as-a-service
- **GPU clouds** (Crusoe, Coreweave, Nebius) = **suppliers/peers** — Valar may even procure capacity from them for customers who don't have hardware
- **AI-natives** (Perplexity, Decagon, etc.) = **stretch/long-term customers** — they prefer multi-tenant clouds for speed, less data sensitivity
- **Non-AI-native enterprises** = **primary ICP** (near-term) — data sensitivity + growing inference spend + want easy in-cloud install

## ICP (Two Stages)

### Stage 1 — Mid-Market (NOW, design partnerships)

Data-sensitive, easier to convert. From Tom directly:
> *"First stage… those are like the design partnerships… companies that are in the mid market, have data sensitivity, are easier to convert with a better product right into paying customers."*

Specific verticals:
- **Cybersecurity** companies (BigPanda, Varonis are signed)
- **Infrastructure / AIOps** (logs, monitoring, production management)
- **Healthcare startups** at large
- **Fintech** — including mid-market like CARTA
- **HR companies** doing batch/agentic inference (don't want to share candidate data)
- **Companies that are regulated or have proprietary-data concerns**
- **Not AI-native** — growing inference spend but not cloud-native AI companies

### Stage 2 — Large Enterprise (LATER, needs product maturity)

From Tom:
> *"We have our target market that we want to nail. But we understand those are the second stage with higher maturity product."*

- Top 10 insurance, top 10 finance
- Document processing, embeddings, summarization, lead enrichment use cases
- Bank of America, Mastercard-tier companies
- Tom's 10 named "Valar pick" companies (see Lookalike Anchors below)

## Buyer Personas & Messaging

**Best targets (ranked):**
1. **Infrastructure teams** (MOST receptive — Tom confirmed in granola)
2. **AI teams** (less cost-sensitive than infra)
3. **Data teams** ("had a lot of fingerprints, data, data teams")
4. **NOT security/governance teams** — Tom: *"No"* (when Gaby asked)

**Antagonist — DO NOT target:**
- **ML engineering teams** — Andrew Wiggin (Fireworks AE): they see external inference vendors as a threat to their role. This is a *deal-killer* if you walk into ML eng instead of platform eng.

**Messaging angles (ranked, per Tom):**
1. **Reliability, capacity, quality of service** (MOST effective — *"angle was reliability, capacity, quality of service"*)
2. **Cost efficiency / cost reduction**
3. **Scalability** to support growth

> *AI teams care less about cost, but more about reliability/scale. The same messages besides cost work for them.* — Tom

## Key People

| Person | Role | Notes |
|--------|------|-------|
| Tom Amsterdam | Valar founder/CEO | NYC; ex-Granulate CPO/COO; ex-MethodIQ CEO; `amsterdam.tom@gmail.com` |
| Ron Gruner | Valar CTO | Israel; built Granulate runtime engine; Unit 8200 Aram |
| Omer | CTO, Atero | Referred Valar to Primary; talking with Inferact, prefers Tom's approach |
| Brian Schechter | Primary VC | PVP point on Valar |
| Gaby Lorenzi | Primary VC | Lead on Valar deal; in #valar-fdi |
| Charles Holley | Primary VC (GTM eng) | Built V1 inference market map; productizing FDI |
| Alex Giles | Primary VC (GTM eng) | Demoed V1 to Tom 4/24; building this v2-test |
| Jason Gelman | Primary VC | In #valar-fdi |

## Founder Voice — Verbatim Quotes

### On ICP
1. *"We see our ICP as a two step approach. We have our target market that we want to nail. But we understand those are the second stage with higher maturity product."* — Tom (granola)
2. *"First stage… those are like the design partnerships… companies that are in the mid market, have data sensitivity, are easier to convert with a better product right into paying customers."* — Tom (granola)
3. *"It's very, very large enterprises that are either regulated industries, right? Or have proprietary data because they're not going to share and run a lot of data intelligence operations."* — Tom on Stage 2 (granola)
4. *"They do a lot of inference, even in the mid market. CARTA, for example, we've been talked with."* — Tom (granola)
5. *"HR companies that have, like, they don't want to share the candidate information to do, but do a lot of batch inference or agenic infants [agentic inference]."* — Tom (granola)

### On buyer personas
6. *"Most receptive were infrastructure teams… infrastructure more than everybody."* — Tom (granola)
7. *"Best angle was reliability, capacity, quality of service, second angle was cost efficiency, just extremely cost reduction. And third is scalability being able to support scale growth."* — Tom (granola)
8. *"AI teams usually care less about the costs, but they don't necessarily only depending on the company itself."* — Tom (granola)
9. *"No, but we did, we did have a lot of fingerprints, data, data teams."* — Tom on whether they sell to data teams (granola)
10. *"Are you ever selling to a security or like a date, like a governance team? No."* — Tom (granola)

### On the buyer's pain (from Gaby's framing in kickoff DM)
11. *"Someone who is less AI-native, likely someone in FinTech or healthcare or who has a concern around using their own cloud for data security, governance, et cetera, versus wanting to go to someone like a Together."* — Gaby characterizing Valar's buyer
12. *"Players who have growing inference spend so think of Bank of America, Mastercard, fintechs, insurance companies, et cetera, who are not maybe as AI-native as someone like a Decagon."* — Gaby
13. *"And also these people want a really easy setup to optimize their inference so installing something in your own cloud is actually optimal."* — Gaby

### On the wow signal (from buyer interviews)
14. *"Data never leaves the firewall."* — UHG Director of Architecture, on why BYOC + VPC peering is inevitable
15. *"Tried Fireworks, Together, Baseten, Modal — none reached production due to security."* — UHG Director of Architecture
16. *"Performance claims aren't durable differentiation — need a problem statement where 90% of buyers immediately say yes."* — Andrew Wiggin, founding AE Fireworks
17. *"ML engineering teams are antagonists — they see inference vendors as threat to their role. Real buyer = platform engineering or security/compliance function."* — Andrew Wiggin
18. *"Data gravity keeps workloads on hyperscaler. Real competition = AWS/GCP/Azure."* — Het Trivedi, ex-FDE Baseten

### Origin / framing
19. *"Don't look at Lucas's business. You should look at this new business called Valar."* — Omer (CTO Atero) to Gaby
20. *"This is software they are selling to their customers as an inference optimization layer. That software is installed into their own cloud."* — Gaby explaining Valar's model

## Lookalike Anchors

Three tiers of named companies, all named explicitly by the founder or Primary team:

### Tier 1 — Signed design partners (Pipeline segment)
1. **BigPanda** — AIOps, sensitive customer data, looking for alternative to hyperscalers
2. **Varonis** — cybersecurity, data security platform

### Tier 2 — Named pipeline accounts (Pipeline segment)
3. **ABInBev** (CPG)
4. **Qualcomm** (semiconductors)
5. **Jefferies** (investment bank)
6. **Mobileye** (automotive AI/ADAS)
7. **Abbott** (medical devices/healthcare)
8. **Ford** (automotive)
9. **Flatiron** (oncology data)
10. **American Airlines** (aviation)

### Tier 3 — Tom's "Valar pick" stretch list (Enterprise segment)
11. **Walmart** (retail)
12. **ServiceNow** (enterprise SaaS)
13. **UnitedHealth Group** (health insurer; contact: Srikanth Nittala)
14. **Mastercard** (payments)
15. **General Motors / Cruise** (automotive AV)
16. **Capital One** (bank)
17. **PayPal** (payments)
18. **Workday** (HR/finance SaaS)
19. **HubSpot** (CRM/SaaS)
20. **Rivian** (EV/automotive)

### Tier 4 — Reference / upcoming
- **CARTA** (Tom mentioned in pipeline as Stage 1 example, fintech mid-market)
- **Databook, New York Times, Shutterstock** (upcoming Primary FDI calls)

## Exclusions

Companies that should **NEVER** appear in the Webset or dashboard. Naming explicitly per skill guidance — generic exclusions leak, named exclusions hold.

### Inference cloud / IaaS competitors
- **Fireworks** ($315M ARR, $4B val)
- **Together** ($300M ARR, $3.3B val, has VPC)
- **Baseten**
- **Modal**
- **Groq**
- **Cerebras**
- **Substrate AI** (sovereign AI cloud — explicitly flagged in skill as a known false-positive)
- **Inferact** (vLLM productized — direct competitor)

### GPU clouds (suppliers/peers, not buyers)
- **Crusoe**
- **Coreweave**
- **Nebius**
- **Voltage Park**

### AI-native consumers (out of Stage-1 scope; will not buy now)
- **Perplexity**
- **Decagon**
- **OpenAI, Anthropic, Google DeepMind** (model labs)
- **Scale AI** (training data)

### Other categories to exclude
- AI training data companies
- ML platform companies (e.g., Weights & Biases, Comet)
- Sovereign AI cloud providers (Substrate AI–shape companies)
- Foundation model labs

## The "Wow" Signal

> Companies that have **explicitly tried inference clouds (Fireworks, Together, Baseten, Modal, etc.) and been blocked from production by data security or residency requirements**.

This is the insight that makes Tom lean forward, because it's the precise gap his product fills. The UHG Director of Architecture quote is the canonical version: *"Tried Fireworks, Together, Baseten, Modal — none reached production due to security."*

The dashboard should foreground this signal everywhere it can:
- `gtm_thesis` paragraph (highest visibility)
- `signals[]` bullets (axis 3 supporting evidence)
- `residency_reason` (axis 2 tooltip — this IS the axis 2 thesis)
- `overview` paragraph
- A dedicated tag if the company has documented evidence ("Tried & Blocked" or "Residency-Blocked")

## Deliverable / Timeline

- **Build context:** v2-test of the `/generate-fdi-draft` skill — pure ground-up rebuild, no copy-paste from V1 `valar-fdi` repo
- **Audience:** Internal — testing whether the productized FDI motion can match V1 quality from inputs alone
- **Format:** Local `index.html` preview + GitHub repo at `github.com/alexg207/valar-v2-test-fdi`
- **Success metric:** Output matches V1 in tone, density, specificity. If it generalizes badly or feels like "Valar with names changed," the skill needs another iteration.

## Key Documents & Links

| Resource | URL |
|----------|-----|
| V1 Valar dashboard (gold standard, do NOT copy from) | https://valar-fdi.vercel.app/ |
| V1 inference market map (predecessor for Lucas) | https://inference-market-map.vercel.app/ |
| V1 GitHub repo (gold standard) | https://github.com/alexg207/valar-fdi |
| This v2-test repo | https://github.com/alexg207/valar-v2-test-fdi |
| Valar Outbound spreadsheet (Tom's 10 picks) | https://docs.google.com/spreadsheets/d/1mWyMzJhr3GGQanvxNz7CJwP81y-L5ZYoYmSpl-fZjq4/ |
| Granola transcript (4/24 GTM call) | https://notes.granola.ai/t/c407ef50-eca3-44d2-909e-1a38b0800e42-009c2hma |
| Slack channel (#valar-fdi) | C0B05EQV7SS |

## Spreadsheet Data: Outbound Prospects (from context-dump)

30 named contacts at potential Valar buyer accounts, scraped from `inputs/context-dump.md` § "Outbound Prospects." Highlights for CONTACT_MAP population:

- **JPMorgan** — Ram Rai (VP Platform Engineering); Ted Lifset (Sr Director Engineering)
- **Morgan Stanley** — Peter Smulovics (ED); Matthew Gardner (ED)
- **Visa** — Courtney Malone (Sr Director, Architecture)
- **Capital One** — multiple Primary network connections (Vivek Gupta, John Hinnegan, Jason Burks, Ryan McCaffrey, Radford Tam, James P. Kennedy, Jeff Chou, Trina Leung)
- **PayPal** — Warren Zhang (Director Eng), Bhuvaneswari Shanmugam, Gurinder Singh, Martin Brodbeck
- **ServiceNow** — Cian Brassil, Lawrence Osai, Luke Hagstrand
- **Cruise / GM** — Peter Kashou (VP Infra), Nariman Madani, Naghmana Majed, Niel Teng Hu
- **HubSpot** — Asher Eastham (Technical Lead, via Bridget)
- **Walmart** — Yesudason Paulraj (Group Director SE, via Ross)
- **UnitedHealth Group** — Mike Kramer (Director Eng); Srikanth Nittala (named in CSV)
- **NYT** — Joey Adarkwah (Head of Core Platforms; warm-intro candidate)
- **Shutterstock** — Courtney Totten (CTO)

Full list in `inputs/context-dump.md` § "Outbound Prospects (30 contacts)." Cross-reference with `PRIMARY_TEAM` in `data.js` for warm-intro attribution during Phase 7.

## Slack Timeline (key events)

| Date | Event |
|------|-------|
| 4/24 ~1:00 PM | Charles creates kickoff group DM with Alex + Gaby; shares V1 inference-market-map |
| 4/24 ~1:08 PM | Gaby explains Valar — Omer/Atero referral, software layer, ICP |
| 4/24 ~4:21 PM | Gaby clarifies: inference providers = competitors, AI natives = customers |
| 4/24 4:30 PM | Meeting with Tom (Valar / Primary GTM) — 15 min, Alex demos V1 |
| 4/24 ~5:00 PM | Gaby shares Valar Outbound spreadsheet with 10 target companies |
| 4/27 ~7:11 PM | Gaby creates #valar-fdi channel |
| 4/27 ~7:14 PM | Gaby scopes deliverable: 20–30 companies, dashboard for ~10, due Wed EOD |
| 4/28 18:15 | Alex ships V1 demo on Vercel; channel feedback |
| 4/29 14:41 | Gaby plan: email Tom + Loom ahead of his pitch; 50/50 deal odds |
| 4/29 16:49 | Gaby: pitch wrapped, team passing on Valar |
| 4/30 09:09 | Brian: *"we ended up passing… i think this offering is really powerful"* |
| 5/1 | Charles + Alex agree to productize FDI as a skill (Exa Websets MCP path) |
| 5/5 | This v2-test build kicks off (current session) |

## Additional Context

- This v2-test is part of the **FDI productization push** — Charles is running the broader effort; Alex is building the skill (`/generate-fdi-draft`) end-to-end
- The skill operates in Claude Code only (Websets MCP requires Bearer auth, blocking claude.ai web)
- **Reference example:** `github.com/alexg207/valar-fdi` — the gold-standard finished V1. Per user instruction: do NOT copy output from this repo. Use it only as a structural pattern reference (4 axes, 3 segments, 3 sections per company).
- **Pre-existing Webset:** `webset_01kqv527msb1b01b4yk35cbcfn` (5 results from earlier today) — superseded by the fresh fire in Phase 6
- **Antagonist personas (CRITICAL):** ML engineering teams (per Wiggin) AND security/governance teams (per Tom directly). Real buyer = platform engineering / infrastructure team. Reflect this in CONTACT_MAP persona discipline during Phase 7.
