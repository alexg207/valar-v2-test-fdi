// ══════════════════════════════════════════════════════════════════════════
// Valar FDI Intelligence Map — data.js (v2-test, 30 companies)
// Generated 2026-05-05 via /generate-fdi-draft skill, Phase 7
// ══════════════════════════════════════════════════════════════════════════

/* ROW_SOURCES — citations per row */
const ROW_SOURCES = {
  // ── BigPanda ──
  "BigPanda|Company Profile|Industry": "BigPanda corporate site, AIOps positioning",
  "BigPanda|Company Profile|HQ": "BigPanda 2026, Mountain View CA + Tel Aviv R&D",
  "BigPanda|Company Profile|Valar Status": "Valar PVP V Memo 4/29/2026 — signed design partner",
  "BigPanda|Inference Footprint|Use Cases": "Valar memo + BigPanda product (event correlation, incident summarization)",
  "BigPanda|Inference Footprint|Pain Points": "Valar memo — sensitive customer event data cannot transit external inference clouds",

  // ── Varonis ──
  "Varonis|Company Profile|Industry": "Varonis 2025 10-K (NASDAQ: VRNS), data security platform",
  "Varonis|Company Profile|Revenue": "Varonis FY2024 results, ~$550M ARR",
  "Varonis|Company Profile|Valar Status": "Valar PVP V Memo 4/29/2026 — signed design partner",

  // ── Capital One ──
  "Capital One|Company Profile|Revenue": "Capital One FY2025 8-K, $53.4B revenue",
  "Capital One|Company Profile|HQ": "Capital One corporate, McLean VA",
  "Capital One|Inference Footprint|Use Cases": "VentureBeat 2025 — Capital One production multi-agent AI for car-buying",
  "Capital One|Inference Footprint|Pain Points": "PCI DSS + financial-services data residency obligations",

  // ── NatWest ──
  "NatWest|Company Profile|Revenue": "Macrotrends — NatWest Group $38.9B FY2025",
  "NatWest|Inference Footprint|Use Cases": "NatWest press 2025 — Cora chatbot 11M customer interactions, ~100 ML models on SageMaker",
  "NatWest|Inference Footprint|Current Stack": "NatWest + AWS + Accenture 5-year AI partnership announcement 2025",

  // ── Bank of America ──
  "Bank of America|Company Profile|Revenue": "BoA FY2025 SEC filing, $113.1B",
  "Bank of America|Inference Footprint|Use Cases": "BoA newsroom 2025 — Erica decade-of-AI, ~700 intents, hundreds of workflows",
  "Bank of America|Inference Footprint|Pain Points": "Business Insider 2026 — BoA NVIDIA AI Factory air-gap requirements",

  // ── HSBC ──
  "HSBC|Company Profile|Revenue": "HSBC FY2025 Annual Report, $68.3B",
  "HSBC|Inference Footprint|Use Cases": "HSBC + Google Cloud Dynamic Risk Assessment, 980M monthly transactions screened",
  "HSBC|Company Profile|Valar Status": "HSBC media release 2026 — David Rice appointed first Chief AI Officer",

  // ── Munich Re ──
  "Munich Re|Company Profile|Revenue": "Munich Re Group Annual Report 2025, $71.0B",
  "Munich Re|Inference Footprint|Use Cases": "Munich Re aiSure + underwriting STP +30-35% per company materials",
  "Munich Re|GTM Strategy|Hiring Signal": "Munich Re careers page 2026 — Senior ML Engineer Toronto, MLOps/AWS/Azure/GenAI",

  // ── Monzo ──
  "Monzo Bank|Company Profile|Revenue": "Monzo Annual Report 2025, $1.6B",
  "Monzo Bank|Inference Footprint|Use Cases": "InfoQ Nov 2025 + Monzo blog — real-time fraud-prevention platform on payment hotpath",
  "Monzo Bank|Inference Footprint|Pain Points": "Monzo policy: UK customer data hosted in UK only, no offshoring",

  // ── DKB ──
  "DKB | Deutsche Kreditbank AG|Company Profile|Revenue": "DKB 2024 Annual Report, ~$1.1B",
  "DKB | Deutsche Kreditbank AG|Inference Footprint|Use Cases": "Heise 2025 — DKB / OpenAI cooperation; SAS Viya fraud analytics on AWS, ~50ms decisions",

  // ── TSB ──
  "TSB Bank|Company Profile|Revenue": "TSB Banking Group ARA 2025, $1.6B",
  "TSB Bank|Inference Footprint|Use Cases": "Infosys CCI on AWS for TSB; Adobe AI Experience Platform partnership 2025",

  // ── ACA Group ──
  "ACA Group|Company Profile|Revenue": "ACA Group corporate ~$150M annual revenue",
  "ACA Group|Inference Footprint|Use Cases": "ACA Encore AI — core intelligence layer across ComplianceAlpha/ESG/Research Compliance",

  // ── Celonis ──
  "Celonis|Company Profile|Revenue": "Celonis ~$555M annual revenue, last private valuation $13B",
  "Celonis|Inference Footprint|Use Cases": "Celonis AI Annotation Builder, Process Copilot",
  "Celonis|GTM Strategy|Hiring Signal": "Celonis careers — Senior ML Engineer + ML Engineer (Process Copilot, EMS) Greenhouse 2026",

  // ── F5 ──
  "F5|Company Profile|Revenue": "F5 FY2025 Q4 press release, $3.1B",
  "F5|Inference Footprint|Use Cases": "F5 + CalypsoAI acquisition 2025 — AI guardrails for runtime traffic",

  // ── Ford ──
  "Ford|Company Profile|Revenue": "Ford FY2024 10-K, $185B",
  "Ford|Inference Footprint|Use Cases": "Ford Pro AI initiatives, Latitude AI subsidiary for ADAS",

  // ── Qualcomm ──
  "Qualcomm|Company Profile|Revenue": "Qualcomm FY2024 10-K, $39B",

  // ── Mobileye ──
  "Mobileye|Company Profile|Revenue": "Mobileye FY2024 10-K (NASDAQ: MBLY), $1.65B",

  // ── Walmart ──
  "Walmart|Company Profile|Revenue": "Walmart FY2025 10-K, $681B",
  "Walmart|Inference Footprint|Use Cases": "Walmart Sparky AI assistant 2025; Element platform announced 2024",

  // ── ServiceNow ──
  "ServiceNow|Company Profile|Revenue": "ServiceNow FY2024 10-K, $10.98B",
  "ServiceNow|Inference Footprint|Use Cases": "ServiceNow Now Assist + Now LLM (proprietary fine-tuned models), Yokohama release 2025",

  // ── UnitedHealth Group ──
  "UnitedHealth Group|Company Profile|Revenue": "UnitedHealth FY2024 10-K, $400B",
  "UnitedHealth Group|Inference Footprint|Use Cases": "UHG Director of Architecture interview, Valar context brief — RAG benefits queries on GCP Vertex + Azure",
  "UnitedHealth Group|Inference Footprint|Pain Points": "UHG Director quote — 'tried Fireworks, Together, Baseten, Modal — none reached production due to security'",

  // ── Mastercard ──
  "Mastercard|Company Profile|Revenue": "Mastercard FY2024 10-K, $28B",
  "Mastercard|Inference Footprint|Use Cases": "Mastercard Decision Intelligence Pro 2024 — generative AI for transaction-fraud scoring",

  // ── GM (Cruise) ──
  "General Motors (Cruise)|Company Profile|Revenue": "GM FY2024 10-K, $187B (Cruise consolidated 2024 wind-down to ADAS focus)",

  // ── PayPal ──
  "PayPal|Company Profile|Revenue": "PayPal FY2024 10-K, $31.8B",
  "PayPal|Inference Footprint|Use Cases": "PayPal Cosmos.AI internal LLM platform 2024; Smart Receipts and AI agents 2025",

  // ── Workday ──
  "Workday|Company Profile|Revenue": "Workday FY2025 10-K, $8.4B",
  "Workday|Inference Footprint|Use Cases": "Workday Illuminate + Agent System of Record 2025 announcements",

  // ── HubSpot ──
  "HubSpot|Company Profile|Revenue": "HubSpot FY2024 10-K, $2.6B",
  "HubSpot|Inference Footprint|Use Cases": "HubSpot Breeze AI agents launched 2024",

  // ── Rivian ──
  "Rivian|Company Profile|Revenue": "Rivian FY2024 10-K, $4.97B",
  "Rivian|Inference Footprint|Use Cases": "Rivian Manish Agarwal LinkedIn — 'Driving Agentic AI @ Rivian' 2025",
};


/* SEGMENTS — 30 companies across Pipeline / Mid-Market / Enterprise */
const SEGMENTS = [
  {
    id: 'pipeline',
    label: 'Active Pipeline',
    icon: '🎯',
    eyebrow: 'DESIGN PARTNERS + NAMED PIPELINE',
    title: 'Active Accounts',
    desc: 'Signed design partners and named pipeline accounts from the Valar PVP V memo. Reference-account development comes first; everything else feeds these.',
    icon_svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
    companies: [
      // 1. BigPanda — signed design partner
      {
        name: 'BigPanda',
        domain: 'bigpanda.io',
        subtitle: 'AIOps platform correlating customer event/log streams — sensitive third-party telemetry rules out multi-tenant inference clouds; signed design partner.',
        tier: 'high',
        tags: [
          { t: 'Design Partner', c: 'brand', tip: 'Signed design partner per Valar PVP V memo' },
          { t: 'AIOps', c: 'neutral' },
          { t: 'Customer Data Custody', c: 'stack', tip: 'Holds enterprise customer event streams under contractual data-handling commitments' }
        ],
        overview: 'BigPanda runs an AIOps platform that ingests its enterprise customers\' production telemetry — alerts, logs, change events — and correlates them into incidents. Their LLM-powered features (incident summarization, root-cause narratives) need to run inference on data that customers explicitly forbid leaving the contracted environment. That makes multi-tenant Fireworks/Together-style inference a non-starter and BYOC the only path. Signed Valar design partner per the PVP V memo.',
        sections: [
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'AIOps / IT operations management'],
              ['Founded', '2012'],
              ['Headquarters', 'Mountain View, CA + Tel Aviv R&D'],
              ['Revenue', 'Private, ~$100M ARR (needs verification)'],
              ['Cloud Provider', 'AWS-primary; multi-region'],
              ['Valar Status', 'Signed Design Partner']
            ]
          },
          {
            title: 'Inference Footprint',
            rows: [
              ['Use Cases', 'Incident summarization, alert correlation narratives, root-cause analysis from customer telemetry'],
              ['Current Stack', 'Mix of hosted LLM APIs + experimentation; Valar deploying inside BigPanda VPC'],
              ['Pain Points', 'Customer telemetry is contractually constrained — every external API hop is a data-processing-agreement question'],
              ['Estimated Spend', '$1–3M annual inference (needs verification)']
            ]
          },
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Already executed — focus is reference-development for AIOps + monitoring peers (Datadog-tier, New Relic-tier)'],
              ['Key Evidence', 'Signed design partner; Israeli engineering team (Granulate-adjacent network); customer data sensitivity pre-qualified'],
              ['Urgency Level', 'EXECUTE — convert design-partner trial into reference logo + co-authored case study'],
              ['Target Buyer', 'Buyer: VP R&D / Platform Engineering. Champion: Engineering Director, Applied AI.'],
              ['Messaging Angle', '"Run incident-summary inference inside your customer\'s data perimeter, not on top of it." Reliability first, cost second.']
            ]
          }
        ],
        contacts: [],
        signal_score: 5,
        signals: ['Signed design partner (Valar PVP V memo)', 'AIOps category — customer event data is contractually sensitive', 'Israeli engineering team overlaps with Tom/Ron Granulate network'],
        signal_types: ['positive', 'positive', 'positive'],
        opp_reason: 'Already a customer. Engineering and reference-development priority.',
        competitive_distress: 4,
        distress_reason: 'AIOps incident summarization needs LLMs but customer event data cannot transit external inference clouds. Hyperscaler endpoints work but cost and quota are unpredictable at incident-storm scale.',
        distress_signals: ['Multi-tenant inference clouds blocked by customer data-handling contracts', 'Incident-storm spikes blow through hyperscaler quota'],
        distress_signal_types: ['negative', 'negative'],
        data_residency: 5,
        residency_reason: 'BigPanda holds customer telemetry under contractual data-processing terms — every inference call has to stay inside the BigPanda environment. This is the canonical Valar fit.',
        residency_signals: ['Customer event/log data under contractual custody', 'Multi-region (US/EU) customer footprint'],
        residency_signal_types: ['negative', 'negative'],
        gtm_thesis: 'BigPanda is the canonical Stage-1 Valar account: an AIOps vendor whose product needs LLM inference on customer telemetry it does not own and cannot send anywhere. Tom\'s framing — <em>"companies that are in the mid market, have data sensitivity, are easier to convert with a better product right into paying customers"</em> — describes BigPanda exactly. The wedge is in-VPC install with no data leaving; expansion is per-token as more incident-summary and root-cause workloads route through Valar. <strong>Buyer:</strong> VP R&D / Platform Engineering. <strong>Champion:</strong> Engineering Director, Applied AI. <strong>NOT</strong> security/governance (per Tom).'
      },

      // 2. Varonis — signed design partner
      {
        name: 'Varonis',
        domain: 'varonis.com',
        subtitle: 'Public cybersecurity / data-security platform — sells trust as a product, can\'t route customer data through third-party inference; signed design partner.',
        tier: 'high',
        tags: [
          { t: 'Design Partner', c: 'brand', tip: 'Signed design partner per Valar PVP V memo' },
          { t: 'Cybersecurity', c: 'neutral' },
          { t: 'Trust as Product', c: 'stack', tip: 'Their entire value prop is "your sensitive data stays under your control" — they cannot violate that with their own AI features' }
        ],
        overview: 'Varonis sells a data-security platform whose category-defining promise is that customer files, emails, and database contents stay under customer control. Layering AI features on top means inference has to honor the same promise: nothing leaves the perimeter, nothing co-mingles with another tenant. Multi-tenant inference vendors are a structural conflict for them. Signed Valar design partner.',
        sections: [
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'Cybersecurity — data security platform (NASDAQ: VRNS)'],
              ['Revenue', '~$550M ARR, FY2024'],
              ['Headquarters', 'New York, NY'],
              ['Cloud Provider', 'Multi-cloud SaaS delivery'],
              ['AI Maturity', 'High — AI-driven threat detection and DSPM features in production'],
              ['Valar Status', 'Signed Design Partner']
            ]
          },
          {
            title: 'Inference Footprint',
            rows: [
              ['Use Cases', 'Anomaly detection narratives, classification of sensitive content at scale, AI-assisted investigation flows'],
              ['Current Stack', 'Mix of self-hosted models + experimentation; Valar deploying in-VPC'],
              ['Pain Points', 'Their entire brand is "data stays yours" — they cannot have AI features that send customer file metadata to a third-party endpoint'],
              ['Estimated Spend', '$2–4M annual inference (needs verification)']
            ]
          },
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Already executed — convert into the cybersecurity reference logo for Valar'],
              ['Key Evidence', 'Signed design partner; cybersecurity category-defining trust posture; public company with disclosed AI feature roadmap'],
              ['Urgency Level', 'EXECUTE — co-marketed reference is the unlock'],
              ['Target Buyer', 'Buyer: VP Engineering / Deputy CTO. Champion: Director of Engineering, Cybersecurity & AI.'],
              ['Messaging Angle', '"Your customers bought you because their data does not leave their perimeter. Your AI features should hold the same line."']
            ]
          }
        ],
        contacts: [],
        signal_score: 5,
        signals: ['Signed design partner', 'Cybersecurity category — trust posture incompatible with multi-tenant inference', 'Public company with documented AI roadmap'],
        signal_types: ['positive', 'positive', 'positive'],
        opp_reason: 'Signed design partner; the cybersecurity logo is uniquely valuable for category proof.',
        competitive_distress: 4,
        distress_reason: 'Cybersecurity vendors cannot ship AI features that route customer file metadata through external inference. Hyperscaler endpoints satisfy the legal bar but not the marketing promise — and quota / cost remain unpredictable.',
        distress_signals: ['"Trust as product" makes external inference structurally hard', 'Customer file metadata is the sensitive surface'],
        distress_signal_types: ['negative', 'negative'],
        data_residency: 5,
        residency_reason: 'Varonis\' product promise IS data residency. Any AI feature has to honor it. BYOC inference is the only route compatible with their brand.',
        residency_signals: ['Trust posture is the entire category positioning', 'Multi-region enterprise customer base'],
        residency_signal_types: ['negative', 'negative'],
        gtm_thesis: 'Varonis is the cybersecurity reference Valar needs: a public company whose entire promise is that sensitive data stays under customer control, building AI features that have to hold the same line. The wedge is in-cloud install where customer file metadata never leaves the Varonis VPC; expansion is every new AI-assisted investigation feature on the roadmap. The reference is asymmetrically valuable — every other security vendor needs the same answer. <strong>Buyer:</strong> VP Engineering / Deputy CTO. <strong>Champion:</strong> Director of Engineering, Cybersecurity & AI. <strong>NOT</strong> ML engineering (antagonist per Wiggin).'
      },

      // 3. ABInBev — named pipeline
      {
        name: 'ABInBev',
        domain: 'ab-inbev.com',
        subtitle: 'World\'s largest brewer ($59B revenue) — global supply-chain AI on proprietary distribution and consumer data; named pipeline.',
        tier: 'low',
        tags: [
          { t: 'In Pipeline', c: 'brand', tip: 'Named pipeline account per Valar PVP V memo' },
          { t: 'CPG', c: 'neutral' },
          { t: 'Multi-Region', c: 'stack', tip: 'Operations across EMEA / Americas / APAC each with local data laws' }
        ],
        overview: 'ABInBev runs global beverage distribution across 50+ countries, with AI workloads spanning demand forecasting, retail-execution image recognition (BEES platform), and supply-chain optimization. Each region brings its own data-residency rules; consumer purchase data, distributor pricing, and retail imagery are all proprietary. The named-pipeline status is real but specifics need verification.',
        sections: [
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'Consumer packaged goods — brewing'],
              ['Revenue', '~$59B FY2024 (needs verification)'],
              ['Headquarters', 'Leuven, Belgium'],
              ['Cloud Provider', 'Microsoft Azure (BEES platform partnership) + AWS'],
              ['AI Maturity', 'Med-High — BEES platform, image-recognition retail execution'],
              ['Valar Status', 'Named pipeline (memo)']
            ]
          },
          {
            title: 'Inference Footprint',
            rows: [
              ['Use Cases', 'Retail-execution image classification, demand forecasting, supply-chain anomaly detection (needs verification on inference share)'],
              ['Current Stack', 'Azure-primary; needs verification'],
              ['Pain Points', 'Multi-region GDPR + LATAM/APAC data laws; pricing/distributor data is competitive-sensitive'],
              ['Estimated Spend', 'Needs verification']
            ]
          },
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Active pipeline — pursue infrastructure / platform engineering owner'],
              ['Key Evidence', 'Named in Valar pipeline; multi-region presence forces residency thinking'],
              ['Urgency Level', 'HIGH — already in conversation'],
              ['Target Buyer', 'Buyer: VP Platform Engineering. Champion: Director, Data Platforms (needs identification).'],
              ['Messaging Angle', '"Run the same inference policy in São Paulo, Leuven, and Johannesburg without re-architecting per region."']
            ]
          }
        ],
        contacts: [],
        signal_score: 4,
        signals: ['Named in Valar pipeline (memo)', 'Multi-region operations force residency thinking', 'Public AI investment via BEES platform'],
        signal_types: ['positive', 'positive', 'positive'],
        opp_reason: 'Named pipeline account; multi-region structure makes the residency story land naturally.',
        competitive_distress: 3,
        distress_reason: 'CPG inference workloads are not yet at the cost-pain threshold of finance/healthcare, but global multi-region orchestration on hyperscaler endpoints is operationally painful.',
        distress_signals: ['Multi-region inference orchestration is brittle', 'Estimated spend needs verification'],
        distress_signal_types: ['negative', 'negative'],
        data_residency: 4,
        residency_reason: 'GDPR + LATAM/APAC data laws across 50+ countries. Distributor pricing and consumer purchase data are competitive secrets, not just regulated.',
        residency_signals: ['Multi-jurisdiction operations', 'Competitive-sensitive distributor data'],
        residency_signal_types: ['negative', 'negative'],
        gtm_thesis: 'ABInBev is a CPG validation: a global business whose AI roadmap (image-rec retail execution, demand forecasting) crosses every major data-residency regime on Earth. The wedge is one in-cloud install that obeys local rules without per-region re-architecture; expansion is the supply-chain workload graph behind it. <strong>Buyer:</strong> VP Platform Engineering. <strong>Champion:</strong> Director, Data Platforms (needs identification). <strong>NOT</strong> ML engineering teams.'
      },

      // 4. Qualcomm
      {
        name: 'Qualcomm',
        domain: 'qualcomm.com',
        subtitle: 'Mobile/auto/IoT semiconductor giant ($39B FY24) — chip-design IP and customer-design data are unshareable; named pipeline.',
        tier: 'med',
        tags: [
          { t: 'In Pipeline', c: 'brand', tip: 'Named pipeline account per memo' },
          { t: 'Semiconductors', c: 'neutral' },
          { t: 'IP Protection', c: 'stack', tip: 'Chip design data is the company crown jewel' }
        ],
        overview: 'Qualcomm runs internal AI for chip design (RTL assist, verification automation) and operates Qualcomm AI Research with significant inference investment. Chip-design IP and customer reference designs are the company\'s crown jewels — multi-tenant inference is structurally incompatible. Named in Valar pipeline; specific deal stage needs verification.',
        sections: [
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'Semiconductors — mobile/auto/IoT'],
              ['Revenue', '$39B FY2024 (10-K)'],
              ['Headquarters', 'San Diego, CA'],
              ['Cloud Provider', 'Multi-cloud (AWS-primary, on-prem GPU clusters for design)'],
              ['AI Maturity', 'High — Qualcomm AI Research, on-device AI portfolio'],
              ['Valar Status', 'Named pipeline (memo)']
            ]
          },
          {
            title: 'Inference Footprint',
            rows: [
              ['Use Cases', 'Internal: chip-design assistance, verification automation. Customer-facing: AI Research demos. Specific inference workloads need verification.'],
              ['Current Stack', 'Mixed; on-prem for sensitive design, hyperscaler for general (needs verification)'],
              ['Pain Points', 'Chip design IP cannot leave perimeter; export-control sensitivity for some customer designs'],
              ['Estimated Spend', 'Significant but needs verification']
            ]
          },
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Pursue platform engineering / infra side; navigate around AI Research (potential antagonist)'],
              ['Key Evidence', 'Named pipeline; chip IP sensitivity is structural'],
              ['Urgency Level', 'HIGH'],
              ['Target Buyer', 'Buyer: VP Platform/Infrastructure Engineering. Champion: VP Engineering, AI Research (cautious — could be antagonist).'],
              ['Messaging Angle', '"Run inference where the IP already lives — on-prem GPUs and Qualcomm-controlled cloud — under one SLO-aware control plane."']
            ]
          }
        ],
        contacts: [],
        signal_score: 4,
        signals: ['Named in Valar pipeline (memo)', 'Public Qualcomm AI Research investment', 'Chip-design IP is structurally sensitive'],
        signal_types: ['positive', 'positive', 'positive'],
        opp_reason: 'Named pipeline; chip-design data sensitivity is a permanent structural fit for BYOC.',
        competitive_distress: 3,
        distress_reason: 'Chip-design RTL/verification workloads are inference-intensive but cannot route to multi-tenant clouds. On-prem GPU farms have utilization ceilings; hyperscaler endpoints fail the IP test.',
        distress_signals: ['On-prem GPU utilization ceilings', 'Multi-tenant inference unavailable for design IP'],
        distress_signal_types: ['negative', 'negative'],
        data_residency: 4,
        residency_reason: 'Chip-design IP and customer reference designs are export-control-sensitive and competitively existential. Cannot be processed in multi-tenant inference.',
        residency_signals: ['Export-control-adjacent customer designs', 'Chip-design IP'],
        residency_signal_types: ['negative', 'negative'],
        gtm_thesis: 'Qualcomm is a semiconductor validation: a public company whose internal AI roadmap (design assistance, verification automation) runs on data the company will never let leave its perimeter. The wedge is in-cloud + on-prem hybrid scheduling under one SLO contract; expansion is every new design-automation workload that comes online. Watch the buyer call carefully — Qualcomm AI Research is a potential antagonist; the real entry is platform/infrastructure engineering. <strong>Buyer:</strong> VP Platform/Infrastructure Engineering. <strong>Champion:</strong> VP Engineering (Qualcomm AI Research) — handle with caution per Wiggin\'s ML-eng warning.'
      },

      // 5. Jefferies
      {
        name: 'Jefferies',
        domain: 'jefferies.com',
        subtitle: 'Mid-tier global investment bank — research/trading workflows on confidential client data, FINRA + GDPR overlap; named pipeline.',
        tier: 'med',
        tags: [
          { t: 'In Pipeline', c: 'brand', tip: 'Named pipeline per memo' },
          { t: 'Investment Banking', c: 'neutral' },
          { t: 'FINRA + GDPR', c: 'stack', tip: 'Layered US securities + EU privacy regulation' }
        ],
        overview: 'Jefferies operates global capital markets with research, trading, and wealth-management technology stacks. Inference applications include research summarization, document analysis for M&A, and personalization in wealth management — every one running over confidential client data. FINRA + GDPR + MAR layered. Named in Valar pipeline.',
        sections: [
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'Investment banking + capital markets'],
              ['Revenue', '~$7B FY2024 (needs verification)'],
              ['Headquarters', 'New York, NY'],
              ['Cloud Provider', 'Multi-cloud; AWS + Azure (needs verification)'],
              ['AI Maturity', 'Med — research and wealth-management copilot work'],
              ['Valar Status', 'Named pipeline (memo)']
            ]
          },
          {
            title: 'Inference Footprint',
            rows: [
              ['Use Cases', 'Research-doc summarization, M&A doc analysis, wealth-management personalization (needs verification on volume)'],
              ['Current Stack', 'Hyperscaler endpoints + experimentation (needs verification)'],
              ['Pain Points', 'FINRA recordkeeping, MAR market-abuse rules, GDPR for EU clients — every prompt is a regulatory event'],
              ['Estimated Spend', 'Needs verification']
            ]
          },
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Land via Wealth Management Tech CIO already in pipeline; expand to capital-markets infra'],
              ['Key Evidence', 'Named in Valar pipeline; Wealth Management CIO already a known contact'],
              ['Urgency Level', 'HIGH — pipeline + identified contact'],
              ['Target Buyer', 'Buyer: CIO Wealth Management Technology. Champion: VP Workspace Virtualization Engineering.'],
              ['Messaging Angle', '"Research and personalization inference inside your perimeter — every prompt stays auditable for FINRA, none cross GDPR boundaries."']
            ]
          }
        ],
        contacts: [],
        signal_score: 4,
        signals: ['Named pipeline (memo)', 'Identified WMT CIO contact', 'Layered FINRA + GDPR + MAR regime'],
        signal_types: ['positive', 'positive', 'positive'],
        opp_reason: 'Named pipeline + identified senior contact in Wealth Management Tech.',
        competitive_distress: 3,
        distress_reason: 'Investment banks have inference demand growing but not yet exploding. Pain is regulatory friction more than cost — every workload routed externally generates a compliance ticket.',
        distress_signals: ['Regulatory friction per inference call', 'Spend specifics need verification'],
        distress_signal_types: ['negative', 'negative'],
        data_residency: 4,
        residency_reason: 'FINRA recordkeeping + EU GDPR + MAR market-abuse regulation force every inference call to be auditable and territorially constrained. Multi-tenant inference fails all three.',
        residency_signals: ['FINRA Rule 17a-4 recordkeeping', 'GDPR for EU clients', 'MAR market-abuse rules'],
        residency_signal_types: ['negative', 'negative', 'negative'],
        gtm_thesis: 'Jefferies is the investment-bank wedge: a global firm with research, M&A, and wealth-management copilot ambitions, every workload sitting on top of FINRA + GDPR + MAR. The wedge is in-cloud install that satisfies all three without per-jurisdiction architecture; expansion is every capital-markets workflow as agentic deployment matures. <strong>Buyer:</strong> CIO Wealth Management Technology. <strong>Champion:</strong> VP Engineering, Workspace Virtualization. <strong>NOT</strong> security/governance teams (Tom: <em>"No"</em>).'
      },

      // 6. Mobileye
      {
        name: 'Mobileye',
        domain: 'mobileye.com',
        subtitle: 'Automotive ADAS / autonomy ($1.65B FY24, NASDAQ: MBLY) — perception model inference on customer-OEM driving data; named pipeline.',
        tier: 'med',
        tags: [
          { t: 'In Pipeline', c: 'brand', tip: 'Named pipeline per memo' },
          { t: 'Automotive AI', c: 'neutral' },
          { t: 'OEM Data', c: 'stack', tip: 'Customer OEMs share fleet driving data under tight data-handling contracts' }
        ],
        overview: 'Mobileye supplies ADAS and autonomous-driving perception stacks to global OEMs. Their inference footprint covers offline model evaluation against fleet driving data and increasingly online perception inference — both on data their OEM customers consider proprietary. Named in Valar pipeline; Israeli engineering presence overlaps with Tom/Ron network.',
        sections: [
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'Automotive — ADAS / autonomy (NASDAQ: MBLY, Intel sub)'],
              ['Revenue', '$1.65B FY2024'],
              ['Headquarters', 'Jerusalem, Israel'],
              ['Cloud Provider', 'AWS + on-prem GPU (needs verification)'],
              ['AI Maturity', 'High — perception models in production at fleet scale'],
              ['Valar Status', 'Named pipeline (memo)']
            ]
          },
          {
            title: 'Inference Footprint',
            rows: [
              ['Use Cases', 'Offline perception evaluation against fleet driving data; OEM-specific model fine-tuning workloads'],
              ['Current Stack', 'On-prem GPU + AWS hybrid (needs verification on split)'],
              ['Pain Points', 'OEM customers contractually restrict driving-data movement; model evaluation needs burst compute beyond on-prem ceiling'],
              ['Estimated Spend', 'Needs verification']
            ]
          },
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Network-warm via Israeli Granulate alumni connection; pursue VP IT and former CTO'],
              ['Key Evidence', 'Named pipeline; Israeli engineering = warm network'],
              ['Urgency Level', 'HIGH'],
              ['Target Buyer', 'Buyer: VP Information Technology. Champion: Technology Leader / former CTO (Cyber).'],
              ['Messaging Angle', '"Burst evaluation runs in cloud without OEM driving data leaving your contracted perimeter."']
            ]
          }
        ],
        contacts: [],
        signal_score: 4,
        signals: ['Named pipeline', 'Israeli engineering = warm Granulate-alumni network', 'Public AV / ADAS scale = real inference demand'],
        signal_types: ['positive', 'positive', 'positive'],
        opp_reason: 'Named pipeline + warm network angle.',
        competitive_distress: 3,
        distress_reason: 'On-prem GPU farms hit ceilings during model-eval campaigns; cloud burst options blocked by OEM data contracts. Cost is real but the binding constraint is contractual.',
        distress_signals: ['On-prem GPU ceilings during eval campaigns', 'OEM driving-data contractual restrictions'],
        distress_signal_types: ['negative', 'negative'],
        data_residency: 4,
        residency_reason: 'OEM customers (Ford, GM, BMW, etc.) contractually restrict where their fleet driving data can be processed. BYOC inside Mobileye-controlled cloud is the only burst path that honors those contracts.',
        residency_signals: ['OEM data-handling contracts', 'Cross-border driving-data restrictions'],
        residency_signal_types: ['negative', 'negative'],
        gtm_thesis: 'Mobileye is the AV/ADAS validation: a public company doing perception inference on OEM driving data that the OEM customers contractually own. The wedge is burst-eval compute that lands inside Mobileye\'s contracted environment, not a third-party cloud; expansion is per-OEM model fine-tuning and online perception. The Israeli engineering bench connects directly into Tom and Ron\'s Granulate network. <strong>Buyer:</strong> VP Information Technology. <strong>Champion:</strong> Technology Leader / former CTO (Cyber). <strong>NOT</strong> ML engineering (per Wiggin).'
      },

      // 7. Abbott
      {
        name: 'Abbott',
        domain: 'abbott.com',
        subtitle: 'Medical devices & diagnostics ($42B FY24) — PHI on imaging and diagnostic workflows under HIPAA + FDA SaMD; named pipeline, contacts needed.',
        tier: 'low',
        tags: [
          { t: 'In Pipeline', c: 'brand', tip: 'Named pipeline per memo' },
          { t: 'Healthcare', c: 'neutral' },
          { t: 'HIPAA + SaMD', c: 'stack', tip: 'PHI under HIPAA plus FDA Software-as-a-Medical-Device requirements' }
        ],
        overview: 'Abbott builds medical devices, diagnostics (Alinity), and continuous monitoring (FreeStyle Libre). AI workloads cover imaging interpretation, diagnostic-pattern recognition, and emerging device-side intelligence. Inference touches PHI under HIPAA and is regulated for SaMD applications under FDA. Named in Valar pipeline; specific contacts not yet identified.',
        sections: [
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'Medical devices + diagnostics'],
              ['Revenue', '~$42B FY2024 (needs verification)'],
              ['Headquarters', 'Abbott Park, IL'],
              ['Cloud Provider', 'Multi-cloud, regulated workloads on validated environments (needs verification)'],
              ['AI Maturity', 'Med-High — diagnostic AI and connected-device telemetry'],
              ['Valar Status', 'Named pipeline (memo); contacts needed']
            ]
          },
          {
            title: 'Inference Footprint',
            rows: [
              ['Use Cases', 'Imaging interpretation, diagnostic-pattern recognition, connected-device telemetry analysis'],
              ['Current Stack', 'Needs verification'],
              ['Pain Points', 'HIPAA PHI handling; FDA SaMD validation requires deterministic versioning of inference models'],
              ['Estimated Spend', 'Needs verification']
            ]
          },
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Identify infra/platform owner; HIPAA-validated environment requirement filters fast'],
              ['Key Evidence', 'Named pipeline'],
              ['Urgency Level', 'MED — pipeline status real but contacts gap'],
              ['Target Buyer', 'Buyer: VP Cloud Infrastructure / Platform Engineering (needs identification).'],
              ['Messaging Angle', '"Run model inference in a HIPAA-validated environment your QA team already governs — no new BAA, no new vendor data flow."']
            ]
          }
        ],
        contacts: [],
        signal_score: 3,
        signals: ['Named pipeline (memo)', 'Healthcare PHI = structural BYOC fit', 'Contacts gap'],
        signal_types: ['positive', 'positive', 'negative'],
        opp_reason: 'Named pipeline; healthcare data sensitivity is the canonical Stage-1 ICP; contacts gap is the constraint.',
        competitive_distress: 3,
        distress_reason: 'Healthcare AI inference is rate-limited by HIPAA + FDA SaMD validation, not by GPU cost. Hyperscalers offer BAAs but model-versioning under SaMD is operationally fragile.',
        distress_signals: ['SaMD validation overhead per model update', 'BAA scope limits across multi-tenant inference'],
        distress_signal_types: ['negative', 'negative'],
        data_residency: 5,
        residency_reason: 'PHI under HIPAA, SaMD under FDA — every inference call has to live inside an environment Abbott\'s QA team has validated. Multi-tenant inference is structurally out.',
        residency_signals: ['HIPAA PHI custody', 'FDA SaMD validation', 'Cross-border medical-data restrictions'],
        residency_signal_types: ['negative', 'negative', 'negative'],
        gtm_thesis: 'Abbott is the medical-device test of Stage-1 ICP discipline: a healthcare giant with PHI in motion across imaging and diagnostics, named in Valar pipeline but contacts not yet warm. Tom: <em>"healthcare startups at large"</em> — Abbott is the large end of that. The wedge is in-VPC install in a HIPAA-validated environment QA already owns; expansion is every new SaMD inference workload. <strong>Buyer:</strong> VP Cloud Infrastructure / Platform Engineering (needs identification). <strong>NOT</strong> ML engineering or governance teams.'
      },

      // 8. Ford
      {
        name: 'Ford',
        domain: 'ford.com',
        subtitle: 'Automotive OEM ($185B FY24) — connected-vehicle telemetry and Latitude AI ADAS workloads; named pipeline + warm CTO contact.',
        tier: 'high',
        tags: [
          { t: 'In Pipeline', c: 'brand', tip: 'Named pipeline per memo + warm CTO contact (Sucheta Walimbe)' },
          { t: 'Automotive', c: 'neutral' },
          { t: 'Connected Vehicle Data', c: 'stack', tip: 'Telematics + driver behavior under privacy regimes per region' }
        ],
        overview: 'Ford runs AI inference across connected-vehicle telemetry, Ford Pro fleet workloads, and Latitude AI (the in-house ADAS subsidiary inheriting Argo AI talent). Driver behavior data is privacy-regulated; ADAS data is contractually constrained. Named in Valar pipeline; the Sucheta Walimbe contact (CTO Enterprise Platform Engineering) is the killer warm in.',
        sections: [
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'Automotive — OEM'],
              ['Revenue', '$185B FY2024'],
              ['Headquarters', 'Dearborn, MI'],
              ['Cloud Provider', 'GCP + multi-cloud (Latitude AI on AWS, needs verification)'],
              ['AI Maturity', 'High — Latitude AI ADAS subsidiary; Ford Pro AI initiatives'],
              ['Valar Status', 'Named pipeline + warm CTO contact']
            ]
          },
          {
            title: 'Inference Footprint',
            rows: [
              ['Use Cases', 'ADAS perception (Latitude AI), connected-vehicle telematics analytics, Ford Pro fleet AI, manufacturing-quality vision'],
              ['Current Stack', 'GCP + multi-cloud + on-prem GPU for ADAS eval (needs verification)'],
              ['Pain Points', 'Driver behavior data privacy varies by region; ADAS eval campaigns blow through hyperscaler quota'],
              ['Estimated Spend', '$5–15M annual inference (needs verification)']
            ]
          },
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Land through Sucheta Walimbe (CTO Enterprise Platform Eng) — the platform-eng buyer, exactly Tom\'s ranked-1 persona'],
              ['Key Evidence', 'Named pipeline; warm CTO contact = ideal buyer title'],
              ['Urgency Level', 'HIGH — convert warm-intro to first call within 30 days'],
              ['Target Buyer', 'Buyer: CTO Enterprise Platform Engineering. Champion: Senior Engineering & Product Leader.'],
              ['Messaging Angle', '"Run ADAS evaluation, telematics, and Ford Pro AI on one SLO contract — connected-vehicle data stays under your privacy controls per region."']
            ]
          }
        ],
        contacts: [],
        signal_score: 5,
        signals: ['Named pipeline (memo)', 'Warm CTO Enterprise Platform Engineering contact', 'Latitude AI subsidiary = real ADAS inference scale'],
        signal_types: ['positive', 'positive', 'positive'],
        opp_reason: 'Named pipeline + the right title (CTO Platform Eng) already warm. This is the highest-leverage pipeline contact in the set.',
        competitive_distress: 4,
        distress_reason: 'ADAS evaluation campaigns and connected-vehicle analytics are inference-heavy. Hyperscaler endpoints fail on scale + cost predictability; on-prem alone hits utilization ceiling. The platform-eng team feels both pains.',
        distress_signals: ['ADAS eval blows through hyperscaler quota', 'Driver-behavior privacy varies by region'],
        distress_signal_types: ['negative', 'negative'],
        data_residency: 4,
        residency_reason: 'Connected-vehicle telematics is privacy-regulated per region (US state laws + EU GDPR); ADAS data is contractually constrained for OEM partners and suppliers. BYOC keeps the policy boundary controllable.',
        residency_signals: ['Connected-vehicle privacy laws (US states + GDPR)', 'ADAS data contractual constraints'],
        residency_signal_types: ['negative', 'negative'],
        gtm_thesis: 'Ford is the highest-leverage Stage-1 enterprise account: named in Valar pipeline AND with a warm, perfectly-titled buyer (Sucheta Walimbe, CTO Enterprise Platform Engineering — Tom\'s most-receptive persona by name). ADAS perception eval campaigns and connected-vehicle telematics generate the inference demand; multi-region privacy laws and OEM data contracts make hyperscaler endpoints structurally awkward. The wedge is in-cloud install across GCP + on-prem under one SLO contract; expansion is every Latitude AI and Ford Pro workload that comes online. <strong>Buyer:</strong> CTO Enterprise Platform Engineering (Sucheta Walimbe). <strong>Champion:</strong> Senior Engineering & Product Leader. <strong>NOT</strong> ML engineering teams (per Wiggin).'
      },

      // 9. Flatiron
      {
        name: 'Flatiron',
        domain: 'flatiron.com',
        subtitle: 'Oncology data / Roche subsidiary — anonymized PHI plus regulated clinical evidence workflows; named pipeline.',
        tier: 'med',
        tags: [
          { t: 'In Pipeline', c: 'brand', tip: 'Named pipeline per memo' },
          { t: 'Oncology Data', c: 'neutral' },
          { t: 'HIPAA + Clinical Evidence', c: 'stack', tip: 'Real-world oncology data under HIPAA, used in FDA submissions' }
        ],
        overview: 'Flatiron Health (Roche subsidiary) operates the largest real-world oncology data network in the US, used for both clinical decision support (OncoEMR) and regulatory submissions. AI workloads include unstructured-note abstraction at scale, clinical decision-support summarization, and increasingly LLM-based abstraction tooling. Every workload sits on PHI under HIPAA and is referenced in FDA submissions. Named in Valar pipeline.',
        sections: [
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'Healthcare — oncology data / EHR'],
              ['Revenue', 'Roche subsidiary, not separately disclosed'],
              ['Headquarters', 'New York, NY'],
              ['Cloud Provider', 'AWS-primary (needs verification)'],
              ['AI Maturity', 'High — large-scale clinical-note NLP, LLM-based abstraction in development'],
              ['Valar Status', 'Named pipeline (memo)']
            ]
          },
          {
            title: 'Inference Footprint',
            rows: [
              ['Use Cases', 'Clinical-note abstraction, oncology decision support, regulatory-submission summarization'],
              ['Current Stack', 'AWS + self-hosted models for PHI workloads (needs verification)'],
              ['Pain Points', 'PHI under HIPAA; clinical evidence used in FDA submissions requires deterministic model versioning'],
              ['Estimated Spend', '$2–5M annual inference (needs verification)']
            ]
          },
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Land via VP Product Management (Platform Engineering) — already identified as contact'],
              ['Key Evidence', 'Named pipeline; identified VPPE contact'],
              ['Urgency Level', 'HIGH'],
              ['Target Buyer', 'Buyer: VP Product Management, Platform Engineering. Champion: Engineering (clinical NLP).'],
              ['Messaging Angle', '"Note-abstraction inference inside your HIPAA-validated AWS environment — same BAA, no new vendor in the data plane."']
            ]
          }
        ],
        contacts: [],
        signal_score: 4,
        signals: ['Named pipeline (memo)', 'Identified VPPE contact', 'Clinical-evidence workflows = deterministic-versioning need'],
        signal_types: ['positive', 'positive', 'positive'],
        opp_reason: 'Named pipeline + identified contact at the right title.',
        competitive_distress: 3,
        distress_reason: 'Clinical-note abstraction at scale is inference-heavy. Hyperscaler BAAs cover the legal bar but model-deprecation invalidates clinical-evidence pipelines that took months to validate.',
        distress_signals: ['Hyperscaler model deprecations break clinical pipelines', 'BAA scope limits on multi-tenant inference'],
        distress_signal_types: ['negative', 'negative'],
        data_residency: 5,
        residency_reason: 'PHI under HIPAA + clinical evidence used in FDA submissions. Inference has to run in a Flatiron-validated environment with deterministic versioning. This is canonical BYOC.',
        residency_signals: ['HIPAA PHI custody', 'FDA-submission-grade clinical evidence', 'Roche group data-handling overlay'],
        residency_signal_types: ['negative', 'negative', 'negative'],
        gtm_thesis: 'Flatiron is the oncology-data validation: a Roche subsidiary running clinical-note abstraction on PHI used in FDA submissions, with a need for inference that survives model deprecations and stays inside a validated environment. The wedge is in-VPC install matching Flatiron\'s existing HIPAA controls; expansion is the LLM-based abstraction roadmap that requires deterministic versioning per workload. <strong>Buyer:</strong> VP Product Management, Platform Engineering. <strong>Champion:</strong> Engineering (clinical NLP). <strong>NOT</strong> security/governance teams (per Tom).'
      },

      // 10. American Airlines
      {
        name: 'American Airlines',
        domain: 'aa.com',
        subtitle: 'Major US carrier ($53B FY24) — operations forecasting, customer-service AI, crew/maintenance optimization; named pipeline, contacts needed.',
        tier: 'low',
        tags: [
          { t: 'In Pipeline', c: 'brand', tip: 'Named pipeline per memo' },
          { t: 'Aviation', c: 'neutral' },
          { t: 'Operational AI', c: 'stack', tip: 'Forecasting and ops-decision AI with regulator overlap (FAA)' }
        ],
        overview: 'American Airlines runs operational AI across crew scheduling, maintenance prediction, customer service, and demand forecasting. Most workloads are operational rather than highly regulated, but customer PII (passenger data, payment) sits in the inference path for service workloads. Named in Valar pipeline; contacts not yet identified.',
        sections: [
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'Aviation — major US carrier'],
              ['Revenue', '~$53B FY2024 (needs verification)'],
              ['Headquarters', 'Fort Worth, TX'],
              ['Cloud Provider', 'IBM Cloud + Azure historically; modernization underway (needs verification)'],
              ['AI Maturity', 'Med — operational AI, customer-service AI'],
              ['Valar Status', 'Named pipeline (memo); contacts needed']
            ]
          },
          {
            title: 'Inference Footprint',
            rows: [
              ['Use Cases', 'Crew/ops optimization, predictive maintenance, customer-service chatbot, demand forecasting'],
              ['Current Stack', 'Needs verification'],
              ['Pain Points', 'Customer PII + payment data in service workloads (PCI); ops AI decisions audited under FAA'],
              ['Estimated Spend', 'Needs verification']
            ]
          },
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Identify platform/infra owner; aviation industry slow but pipeline status real'],
              ['Key Evidence', 'Named pipeline'],
              ['Urgency Level', 'MED — pipeline real, contacts gap'],
              ['Target Buyer', 'Buyer: VP Cloud / Platform Engineering (needs identification).'],
              ['Messaging Angle', '"Operational AI inference inside your perimeter — passenger data stays under PCI, no new vendor in the audit trail."']
            ]
          }
        ],
        contacts: [],
        signal_score: 2,
        signals: ['Named pipeline (memo)', 'Contacts gap', 'Aviation cycle is slow'],
        signal_types: ['positive', 'negative', 'negative'],
        opp_reason: 'Named pipeline but contacts gap and slower industry cycle.',
        competitive_distress: 2,
        distress_reason: 'Aviation operational AI exists but the cost-pain inflection is further out than finance/healthcare. Distress is operational complexity more than acute hyperscaler failure.',
        distress_signals: ['Aviation modernization is multi-year', 'Spend specifics need verification'],
        distress_signal_types: ['negative', 'negative'],
        data_residency: 3,
        residency_reason: 'Passenger PII and payment data in service workloads (PCI DSS) plus FAA-audited operational decisions. Real but not at healthcare/finance level.',
        residency_signals: ['PCI DSS for payment workloads', 'FAA-audited ops decisions'],
        residency_signal_types: ['negative', 'negative'],
        gtm_thesis: 'American Airlines is the aviation pipeline placeholder: named in the Valar memo but contacts not yet identified, with a longer enterprise cycle than finance/healthcare. The fit is real — passenger PII under PCI plus FAA-audited operational AI — but conversion needs the contact gap closed first. The wedge is in-cloud install where passenger data and operational decisions stay under existing audit controls; expansion is operational AI maturity over the next 24 months. <strong>Buyer:</strong> VP Cloud / Platform Engineering (needs identification). <strong>NOT</strong> ML engineering teams.'
      }
    ]
  },

  /* SEGMENT — Mid-Market (Stage 1 ICP, near-term) */
  {
    id: 'midmarket',
    label: 'Mid-Market',
    icon: '🚀',
    eyebrow: 'STAGE 1 ICP — NEAR-TERM',
    title: 'Mid-Market Targets',
    desc: 'Data-sensitive mid-market companies aligned to Tom\'s Stage-1 ICP — design-partner-shaped accounts where Valar can win on a better product without enterprise-cycle drag.',
    icon_svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>',
    companies: [
      // 11. Monzo
      {
        name: 'Monzo Bank',
        domain: 'monzo.com',
        subtitle: 'UK challenger bank ($1.6B FY25, 11M customers) — UK-resident-only customer data, real-time fraud inference on payment hotpath; wow-shape signal.',
        tier: 'high',
        tags: [
          { t: 'Stage-1 ICP', c: 'brand', tip: 'Tom\'s Stage-1 ICP shape: data-sensitive, mid-market, growing inference spend' },
          { t: 'Digital Bank', c: 'neutral' },
          { t: 'GDPR + UK-only Hosting', c: 'stack', tip: 'Public policy: UK customer data hosted in UK only, no offshoring' },
          { t: 'Real-time Fraud Inference', c: 'hw', tip: 'Production fraud inference on the payment hotpath, low-latency' }
        ],
        overview: 'Monzo runs a real-time fraud-prevention platform on the payment hotpath, with low-latency inference decisions over millions of daily transactions. Public policy is that UK customer data is hosted only in the UK — multi-tenant US-resident inference is structurally out. Combined with GDPR, this is the canonical Stage-1 fit Tom describes when he names <em>"FinTech mid-market"</em> as design-partner shape.',
        sections: [
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'Commercial banking — digital-only challenger'],
              ['Revenue', '$1.6B FY2025'],
              ['Founded', '2015'],
              ['Headquarters', 'London, UK'],
              ['Cloud Provider', 'GCP-primary; UK-region only for customer data'],
              ['AI Maturity', 'High — production real-time fraud inference at payment scale'],
              ['Valar Status', 'Stage-1 ICP target']
            ]
          },
          {
            title: 'Inference Footprint',
            rows: [
              ['Use Cases', 'Real-time fraud scoring on payment hotpath; "Fincrime" detection workflows; reactive fraud-prevention platform (InfoQ Nov 2025)'],
              ['Current Stack', 'BigQuery + microservices for fraud platform; needs verification on inference engine'],
              ['Pain Points', 'UK-only data residency forecloses multi-tenant US inference; payment-hotpath SLO is tight'],
              ['Estimated Spend', '$1.5–4M annual inference (needs verification)']
            ]
          },
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Land via VP Engineering / Director of Engineering, Payment — both already identified'],
              ['Key Evidence', 'Public real-time fraud platform on InfoQ; UK-only hosting policy; identified eng leadership'],
              ['Urgency Level', 'HIGH — clear ICP fit + identified contacts'],
              ['Target Buyer', 'Buyer: VP Engineering. Champion: Director of Engineering, Payment.'],
              ['Messaging Angle', '"Run fraud inference inside your UK-region GCP — same SLO, same residency posture, lower cost predictability than per-call hyperscaler endpoints."']
            ]
          }
        ],
        contacts: [],
        signal_score: 5,
        signals: ['Public real-time fraud platform with documented architecture', 'UK-only customer data residency policy', 'Identified VPE + DoE Payment contacts', 'Stage-1 ICP fit per Tom\'s exact framing'],
        signal_types: ['positive', 'positive', 'positive', 'positive'],
        opp_reason: 'Mid-market FinTech, data-sensitive, identified contacts, public production-AI signal — exact Stage-1 design-partner shape.',
        competitive_distress: 4,
        distress_reason: 'Real-time fraud on payment hotpath = millisecond-budget inference, where hyperscaler cold-start and quota volatility hurt directly. Multi-tenant inference clouds blocked by UK data residency.',
        distress_signals: ['Payment-hotpath SLO is tight', 'Multi-tenant inference structurally unavailable for UK data', 'Growing transaction volume = inference scale concern'],
        distress_signal_types: ['negative', 'negative', 'negative'],
        data_residency: 5,
        residency_reason: 'Monzo public policy: UK customer data hosted in UK only, not in the US. GDPR + UK-GDPR layered. Cross-border AI calls are structurally out.',
        residency_signals: ['Public policy: UK-only customer data hosting', 'GDPR + UK-GDPR overlap', 'Payment-card data under PCI DSS'],
        residency_signal_types: ['negative', 'negative', 'negative'],
        gtm_thesis: 'Monzo is the canonical Stage-1 wow-shape: a UK challenger bank with 11M customers, public real-time fraud inference on the payment hotpath, and a stated policy that UK customer data does not leave the UK. Tom\'s Stage-1 ICP — <em>"companies that are in the mid market, have data sensitivity, are easier to convert with a better product"</em> — describes Monzo exactly. The wedge is in-VPC install in their UK-region GCP under one SLO contract; expansion is the fraud roadmap and Fincrime workflows already in production. <strong>Buyer:</strong> VP Engineering. <strong>Champion:</strong> Director of Engineering, Payment. <strong>NOT</strong> ML engineering (per Wiggin) or governance (per Tom).'
      },

      // 12. DKB
      {
        name: 'DKB | Deutsche Kreditbank AG',
        domain: 'dkb.de',
        subtitle: 'German digital bank ($1.1B revenue) — GDPR + EU residency, OpenAI partnership but production fraud on EU-resident SAS Viya; Stage-1 fit.',
        tier: 'high',
        tags: [
          { t: 'Stage-1 ICP', c: 'brand', tip: 'EU digital bank, data-sensitive, mid-market' },
          { t: 'Digital Bank', c: 'neutral' },
          { t: 'GDPR + Bundesbank', c: 'stack', tip: 'EU GDPR plus German federal banking supervision' }
        ],
        overview: 'DKB is a Berlin-based digital retail bank (1,100 employees, $1.1B revenue) running production AI for fraud prevention (SAS Viya on AWS, ~50ms decisioning) and intelligent document processing. They have an announced cooperation with OpenAI for generative experiences but the regulated workloads stay on EU-resident infra. Mid-market German bank with data sensitivity = Tom\'s exact ICP description.',
        sections: [
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'Commercial banking — digital retail'],
              ['Revenue', '$1.1B'],
              ['Founded', '1990'],
              ['Headquarters', 'Berlin, Germany'],
              ['Cloud Provider', 'AWS EU-region for fraud (SAS Viya); OpenAI partnership for generative'],
              ['AI Maturity', 'Med-High — real-time fraud + document processing in production; OpenAI partnership announced'],
              ['Valar Status', 'Stage-1 ICP target']
            ]
          },
          {
            title: 'Inference Footprint',
            rows: [
              ['Use Cases', 'Real-time fraud detection (~50ms decisions on SAS Viya/AWS); intelligent document processing for loan automation; OpenAI-powered customer experience'],
              ['Current Stack', 'SAS Viya on AWS EU; OpenAI integration via cooperation announced 2025'],
              ['Pain Points', 'GDPR + Bundesbank supervision restrict cross-border AI; OpenAI cooperation requires careful data-handling layering'],
              ['Estimated Spend', '$1–3M annual inference (needs verification)']
            ]
          },
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Land via Director of IT (Mathias Rohbeck); Vorstand (Arnulf Keese) for executive sponsorship'],
              ['Key Evidence', 'Public OpenAI cooperation; EU-resident SAS fraud stack; identified contacts'],
              ['Urgency Level', 'HIGH'],
              ['Target Buyer', 'Buyer: Director of IT. Champion: Vorstand (technology portfolio).'],
              ['Messaging Angle', '"Run inference inside your EU AWS region across both SAS and OpenAI workloads — one SLO contract, GDPR-clean by construction."']
            ]
          }
        ],
        contacts: [],
        signal_score: 4,
        signals: ['OpenAI cooperation announced 2025 (Heise)', 'Public SAS Viya fraud inference on AWS', 'Identified Director of IT + Vorstand'],
        signal_types: ['positive', 'positive', 'positive'],
        opp_reason: 'EU mid-market bank with documented production AI + identified contacts.',
        competitive_distress: 3,
        distress_reason: 'Fraud SLA is tight; OpenAI integration introduces data-flow complexity that GDPR makes expensive to architect. Cost not yet acute but cross-border AI is operationally fragile.',
        distress_signals: ['Cross-border AI flow management', 'OpenAI integration data-handling overhead'],
        distress_signal_types: ['negative', 'negative'],
        data_residency: 5,
        residency_reason: 'GDPR + Bundesbank/BaFin supervision. EU-resident customer data; cross-border AI calls require article-46 transfer mechanisms that multi-tenant inference doesn\'t cleanly support.',
        residency_signals: ['GDPR Article 46 transfer constraints', 'Bundesbank/BaFin supervision', 'EU-only customer data residency'],
        residency_signal_types: ['negative', 'negative', 'negative'],
        gtm_thesis: 'DKB is the German Stage-1 fit: a digital retail bank with announced OpenAI cooperation, production SAS-Viya fraud inference on EU-resident AWS, and the full GDPR + Bundesbank overlay. Gaby\'s Valar buyer description — <em>"someone who is less AI-native, likely someone in FinTech or healthcare or who has a concern around using their own cloud for data security, governance"</em> — fits DKB exactly. The wedge is in-cloud install across SAS + OpenAI workloads in a single EU-region environment under one SLO; expansion is every new GenAI customer-experience feature. <strong>Buyer:</strong> Director of IT. <strong>Champion:</strong> Vorstand technology portfolio. <strong>NOT</strong> security/governance teams.'
      },

      // 13. TSB Bank
      {
        name: 'TSB Bank',
        domain: 'tsb.co.uk',
        subtitle: 'UK retail bank ($1.6B FY25) — Infosys CCI on AWS, Adobe AI Experience platform; UK GDPR + PCI DSS, Stage-1 fit.',
        tier: 'med',
        tags: [
          { t: 'Stage-1 ICP', c: 'brand', tip: 'UK mid-market bank, data-sensitive' },
          { t: 'Retail Banking', c: 'neutral' },
          { t: 'UK GDPR + PCI', c: 'stack', tip: 'UK-GDPR for personal data, PCI DSS for cardholder data, PRA/FCA supervision' }
        ],
        overview: 'TSB Bank is a 200+-year-old UK retail bank, recently using AI through Infosys\' Contact Centre Intelligence on AWS and Adobe\'s AI Experience Platform for personalization. Inference workloads sit on UK customer data under UK GDPR + PCI DSS, with PRA/FCA supervision. Smaller AI footprint than Monzo but the same residency posture — Stage-1 ICP shape.',
        sections: [
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'Commercial banking — UK retail'],
              ['Revenue', '$1.6B FY2025'],
              ['Founded', '1812'],
              ['Headquarters', 'London, UK'],
              ['Cloud Provider', 'AWS (via Infosys CCI); Adobe AI Experience Platform'],
              ['AI Maturity', 'Med — contact-centre intelligence + personalization, growing'],
              ['Valar Status', 'Stage-1 ICP target']
            ]
          },
          {
            title: 'Inference Footprint',
            rows: [
              ['Use Cases', 'Contact-centre intelligence (Infosys CCI on AWS), personalized banking experiences (Adobe AI)'],
              ['Current Stack', 'AWS + Adobe Experience Platform partnership (2025)'],
              ['Pain Points', 'UK GDPR + PCI DSS overlap; PRA/FCA model-governance reporting; supplier-risk scrutiny on every new AI vendor'],
              ['Estimated Spend', '$0.5–1.5M annual inference (needs verification)']
            ]
          },
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Land via CIO (Cheryl McCuaig); CTO+Payments (Sailesh Panchal) for technical sponsorship'],
              ['Key Evidence', 'Identified CIO + CTO; public Infosys + Adobe partnerships'],
              ['Urgency Level', 'MED — fit clear, smaller scale than Monzo'],
              ['Target Buyer', 'Buyer: Chief Information Officer. Champion: CTO + Payments.'],
              ['Messaging Angle', '"Avoid adding a third vendor to your supplier-risk register — install Valar inside your existing AWS environment and your Adobe and Infosys workloads route to it."']
            ]
          }
        ],
        contacts: [],
        signal_score: 3,
        signals: ['Public Infosys CCI + Adobe AI partnerships', 'Identified CIO + CTO contacts', 'UK regulated banking environment'],
        signal_types: ['positive', 'positive', 'positive'],
        opp_reason: 'Stage-1 fit + identified contacts; smaller scale moderates urgency.',
        competitive_distress: 2,
        distress_reason: 'TSB\'s AI footprint is growing but not yet at the cost-pain inflection. Operational pain is supplier-risk approval per new AI vendor, not inference cost itself.',
        distress_signals: ['Supplier-risk overhead for each new AI vendor', 'Inference scale still growing'],
        distress_signal_types: ['negative', 'neutral'],
        data_residency: 4,
        residency_reason: 'UK GDPR + PCI DSS + PRA/FCA supervision. Customer data UK-resident; PCI for cards; model-governance reporting requirements.',
        residency_signals: ['UK GDPR personal data', 'PCI DSS cardholder data', 'PRA/FCA model-risk framework'],
        residency_signal_types: ['negative', 'negative', 'negative'],
        gtm_thesis: 'TSB is the UK regulated-retail-bank validation: a 200-year-old institution layering AI through Infosys and Adobe, every workload sitting on UK-GDPR + PCI DSS + PRA/FCA. The pain is less acute than Monzo\'s on cost but acute on supplier-risk scrutiny — adding another inference vendor means another quarter of paperwork. Valar\'s in-cloud install consolidates all AI workloads under one supplier line. <strong>Buyer:</strong> Chief Information Officer. <strong>Champion:</strong> CTO + Payments. <strong>NOT</strong> security/governance teams (per Tom\'s explicit guidance).'
      },

      // 14. Celonis
      {
        name: 'Celonis',
        domain: 'celonis.com',
        subtitle: 'Process-mining platform ($555M ARR, $13B last-private val) — runs AI on customer ERP/process data; FedRAMP-bound for public sector; hiring ML eng.',
        tier: 'high',
        tags: [
          { t: 'Stage-1 ICP', c: 'brand', tip: 'Mid-market enterprise software with sensitive customer data' },
          { t: 'Process Intelligence', c: 'neutral' },
          { t: 'Customer ERP Custody', c: 'stack', tip: 'Their AI runs on customer ERP/SAP/process data — most sensitive enterprise data in the world' },
          { t: 'Hiring: ML Platform', c: 'hiring', tip: 'Open Senior ML Engineer + ML Engineer (Process Copilot, EMS) on Greenhouse' }
        ],
        overview: 'Celonis runs process intelligence on customer ERP and operational data — arguably the most sensitive enterprise data in the world (every order, payment, exception, vendor relationship). Their AI Annotation Builder and Process Copilot ship inference on this data; FedRAMP authorization gates the US public-sector workloads. Multi-tenant inference is structurally incompatible with customer ERP custody. They\'re actively hiring ML platform engineers (open Greenhouse roles).',
        sections: [
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'Process intelligence / enterprise software'],
              ['Revenue', '~$555M ARR'],
              ['Founded', '2011'],
              ['Headquarters', 'Munich, Germany + New York, NY'],
              ['Cloud Provider', 'Multi-cloud (AWS, Azure, GCP); FedRAMP-authorized environment for public sector'],
              ['AI Maturity', 'High — Process Copilot, AI Annotation Builder in production'],
              ['Valar Status', 'Stage-1 ICP target']
            ]
          },
          {
            title: 'Inference Footprint',
            rows: [
              ['Use Cases', 'Process Copilot (Q&A over process maps), AI Annotation Builder (GenAI on structured + unstructured customer data), action recommendations'],
              ['Current Stack', 'Multi-cloud; FedRAMP-bounded for public sector; needs verification on inference engine'],
              ['Pain Points', 'Customer ERP custody contracts; FedRAMP authorization boundary; EU GDPR + DE BDSG; multi-cloud means multi-stack inference'],
              ['Estimated Spend', '$3–8M annual inference (needs verification)']
            ]
          },
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Land via VP Engineering Platform (Felipe Lora, Munich) — plus VP Product & Enterprise Security (Raviv Cohen)'],
              ['Key Evidence', 'Public Process Copilot + AI Annotation; FedRAMP authorization; open ML platform roles'],
              ['Urgency Level', 'HIGH'],
              ['Target Buyer', 'Buyer: VP Engineering, Platform. Champion: VP Product & Enterprise Security.'],
              ['Messaging Angle', '"Your customers gave you their ERP. Your AI features have to honor the same contract — Valar runs inference inside your FedRAMP boundary and inside your EU regions, on one SLO."']
            ]
          }
        ],
        contacts: [],
        signal_score: 5,
        signals: ['Public Process Copilot in production', 'FedRAMP authorization (Aug 2025)', 'Open Senior ML Engineer + ML Engineer Greenhouse roles', 'Identified VP Eng Platform + VP Security contacts'],
        signal_types: ['positive', 'positive', 'positive', 'positive'],
        opp_reason: 'Mid-market with sensitive customer data, public AI roadmap, FedRAMP overlay, hiring on the right team.',
        competitive_distress: 4,
        distress_reason: 'Process Copilot inference runs on customer ERP data, gated by FedRAMP boundaries and EU residency. Multi-cloud means three different inference stacks today; hyperscaler endpoints fail FedRAMP cleanly only in some regions.',
        distress_signals: ['FedRAMP boundary across multi-cloud', 'EU GDPR + DE BDSG layered', 'Three inference stacks (AWS/Azure/GCP) operationally heavy'],
        distress_signal_types: ['negative', 'negative', 'negative'],
        data_residency: 5,
        residency_reason: 'Customer ERP data is the most sensitive enterprise data class. FedRAMP authorization for US-public-sector workloads is the binding constraint; EU GDPR + DE BDSG layer on top.',
        residency_signals: ['FedRAMP-authorized customer data', 'Customer ERP custody contracts', 'EU GDPR + DE BDSG'],
        residency_signal_types: ['negative', 'negative', 'negative'],
        gtm_thesis: 'Celonis is the perfect Stage-1 ISV fit: their AI Annotation Builder and Process Copilot run inference on customer ERP data — there is no more sensitive enterprise data class — and they\'ve added FedRAMP authorization on top. Tom\'s ICP framing — <em>"companies that are regulated or have proprietary-data concerns"</em> — fits Celonis as an ISV whose product IS the proprietary-data concern. The wedge is in-cloud install per customer environment + FedRAMP region; expansion is every new Process Copilot capability they ship. The open ML platform roles signal they\'re building, not yet committed to a vendor. <strong>Buyer:</strong> VP Engineering, Platform (Felipe Lora). <strong>Champion:</strong> VP Product & Enterprise Security (Raviv Cohen). <strong>NOT</strong> ML engineering function (Wiggin antagonist warning applies).'
      },

      // 15. ACA Group
      {
        name: 'ACA Group',
        domain: 'acaglobal.com',
        subtitle: 'RegTech / financial-advisory ($150M revenue) — Encore AI engine across ComplianceAlpha, ESG, Research Compliance; client data not used for training.',
        tier: 'med',
        tags: [
          { t: 'Stage-1 ICP', c: 'brand', tip: 'RegTech mid-market with explicit data-handling promises' },
          { t: 'RegTech', c: 'neutral' },
          { t: 'Client Data Promise', c: 'stack', tip: 'Public commitment: client data not used to train external models' }
        ],
        overview: 'ACA Group serves the financial industry with governance, risk, and compliance advisory plus the ComplianceAlpha, ESG, and Research Compliance product lines. Their proprietary Encore AI engine sits across all three, with explicit commitments that client data is not used to train external models, access is controlled, and cross-border transfers honor GDPR. Mid-market RegTech is a clean Stage-1 fit.',
        sections: [
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'RegTech / financial-services advisory'],
              ['Revenue', '~$150M annual'],
              ['Headquarters', 'New York, NY'],
              ['Cloud Provider', 'Multi-cloud (needs verification)'],
              ['AI Maturity', 'High — proprietary Encore AI engine in production across product suite'],
              ['Valar Status', 'Stage-1 ICP target']
            ]
          },
          {
            title: 'Inference Footprint',
            rows: [
              ['Use Cases', 'Encore AI across ComplianceAlpha, ESG, Research Compliance — automated workflows + client-facing intelligence'],
              ['Current Stack', 'Proprietary engine; inference engine needs verification'],
              ['Pain Points', 'Public commitment that client data is not used for external training narrows hosted-LLM options; cross-border GDPR/UK-GDPR transfers'],
              ['Estimated Spend', '$1–2M annual inference (needs verification)']
            ]
          },
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Land via Tech Executive (AI Practice founder, Nikolay Kojuharov); Lead Product Engineer for technical depth'],
              ['Key Evidence', 'Public Encore AI roadmap; explicit data-handling commitments; identified contacts'],
              ['Urgency Level', 'MED'],
              ['Target Buyer', 'Buyer: Tech Executive (AI Practice). Champion: Lead Product Engineer.'],
              ['Messaging Angle', '"Your clients chose you because their data is not training someone else\'s model. Run Encore inference inside an environment that proves it."']
            ]
          }
        ],
        contacts: [],
        signal_score: 4,
        signals: ['Encore AI in production across product suite', 'Public client-data-handling commitments', 'Identified AI Practice contact'],
        signal_types: ['positive', 'positive', 'positive'],
        opp_reason: 'RegTech mid-market with explicit data promises and identified senior AI contact.',
        competitive_distress: 3,
        distress_reason: 'Compliance AI is inference-bounded by audit trail and data-handling commitments. Multi-tenant inference fails the marketing promise even when it satisfies the legal bar.',
        distress_signals: ['Multi-tenant inference fails the marketing promise', 'Cross-border GDPR/UK-GDPR transfer overhead'],
        distress_signal_types: ['negative', 'negative'],
        data_residency: 4,
        residency_reason: 'Public commitment that client data is not used to train external models; controlled access with audit; GDPR-bounded cross-border transfers.',
        residency_signals: ['Public client-data-handling commitment', 'GDPR/UK-GDPR transfers'],
        residency_signal_types: ['negative', 'negative'],
        gtm_thesis: 'ACA Group is the RegTech Stage-1 fit: a mid-market financial-services advisory with the Encore AI engine in production across compliance, ESG, and research workflows — with public commitments that client data does not train external models. Their entire value proposition is regulatory trust; multi-tenant inference fails that test even when it passes the legal one. The wedge is in-cloud install proving the data-handling promise architecturally. <strong>Buyer:</strong> Tech Executive, AI Practice (Nikolay Kojuharov). <strong>Champion:</strong> Lead Product Engineer. <strong>NOT</strong> security/governance teams (per Tom).'
      },

      // 16. F5
      {
        name: 'F5',
        domain: 'f5.com',
        subtitle: 'Network security / app delivery ($3.1B FY25) — CalypsoAI acquisition for AI guardrails; PCI DSS Level 1; compete-cloud-of-AI play.',
        tier: 'med',
        tags: [
          { t: 'Stage-1 ICP', c: 'brand', tip: 'Public infra/security vendor building AI guardrails for customer traffic' },
          { t: 'Network Security', c: 'neutral' },
          { t: 'PCI DSS Level 1', c: 'stack', tip: 'F5 Distributed Cloud Services certified PCI Level 1 Service Provider' },
          { t: 'AI Guardrails (CalypsoAI)', c: 'stack', tip: 'Acquired CalypsoAI 2025 for AI guardrails layer' }
        ],
        overview: 'F5 acquired CalypsoAI in 2025 to ship AI guardrails on top of its app-delivery and security mesh. Customer traffic — including PCI DSS Level 1 cardholder data — flows through F5\'s control plane; their AI features have to score and route inference without violating customer data-handling expectations. Multi-tenant inference is structurally incompatible with their product positioning.',
        sections: [
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'IT services / app delivery + security'],
              ['Revenue', '$3.1B FY2025'],
              ['Headquarters', 'Seattle, WA'],
              ['Cloud Provider', 'F5 Distributed Cloud Services + multi-cloud customer footprints'],
              ['AI Maturity', 'High (post-CalypsoAI) — AI guardrails being integrated 2025–2026'],
              ['Valar Status', 'Stage-1 ICP target']
            ]
          },
          {
            title: 'Inference Footprint',
            rows: [
              ['Use Cases', 'AI guardrails on customer LLM traffic (CalypsoAI); inference-aware traffic management; AI security telemetry'],
              ['Current Stack', 'F5 Distributed Cloud + CalypsoAI integration in progress'],
              ['Pain Points', 'PCI DSS Level 1 obligations on every traffic flow; customers will not accept AI features that route their data through F5\'s third-party inference vendor'],
              ['Estimated Spend', '$1–4M annual inference (needs verification)']
            ]
          },
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Land via CTO (Karl Triebes) and VP Engineering (Anand Kolukula); compete-with-AI-clouds angle resonates'],
              ['Key Evidence', 'Public CalypsoAI acquisition; PCI Level 1 certification; identified senior contacts'],
              ['Urgency Level', 'MED-HIGH'],
              ['Target Buyer', 'Buyer: CTO + SVP Product Development. Champion: VP Engineering.'],
              ['Messaging Angle', '"Your customers do not want their inference data going through Fireworks-shape vendors any more than they want their app traffic going through one. Build AI guardrails on infrastructure that holds the same line."']
            ]
          }
        ],
        contacts: [],
        signal_score: 4,
        signals: ['Public CalypsoAI acquisition 2025', 'PCI DSS Level 1 Service Provider certification', 'Identified CTO + VP Engineering'],
        signal_types: ['positive', 'positive', 'positive'],
        opp_reason: 'Public AI investment + identified senior contacts + structural fit with PCI obligations.',
        competitive_distress: 3,
        distress_reason: 'F5\'s AI guardrails roadmap requires inference behavior compatible with their customer trust posture. Multi-tenant inference fails immediately; hyperscaler endpoints work but limit the differentiation.',
        distress_signals: ['Multi-tenant inference incompatible with PCI Level 1 customer trust', 'Inference-aware traffic management is latency-bounded'],
        distress_signal_types: ['negative', 'negative'],
        data_residency: 4,
        residency_reason: 'PCI DSS Level 1 across customer footprints; multi-region customer hosting. AI features touching customer data have to honor PCI scope per region.',
        residency_signals: ['PCI DSS Level 1 across distributed cloud', 'Multi-region customer hosting'],
        residency_signal_types: ['negative', 'negative'],
        gtm_thesis: 'F5 is the network/security-vendor Stage-1 fit: a public infrastructure company that just bought CalypsoAI to ship AI guardrails, with PCI DSS Level 1 obligations on customer traffic and customers who will not accept their data routing through a third-party inference vendor. Tom\'s framing of <em>"reliability, capacity, quality of service"</em> as the top messaging angle lands directly here. The wedge is in-cloud install across F5\'s distributed footprint; expansion is every new AI guardrail and inference-aware-traffic feature. <strong>Buyer:</strong> CTO + SVP Product Development. <strong>Champion:</strong> VP Engineering. <strong>NOT</strong> ML engineering teams.'
      }
    ]
  },

  /* SEGMENT — Enterprise (Stage 2 ICP, stretch) */
  {
    id: 'enterprise',
    label: 'Enterprise',
    icon: '🏛️',
    eyebrow: 'STAGE 2 ICP — STRETCH',
    title: 'Enterprise Targets',
    desc: 'Tom\'s named "Valar pick" stretch list plus Webset standouts. Higher product maturity required, but the wow signal — tried-and-blocked inference clouds — lives here loudest.',
    icon_svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 22V11l9-7 9 7v11"/><path d="M3 22h18"/><path d="M9 22v-6h6v6"/></svg>',
    companies: [
      // 17. Walmart
      {
        name: 'Walmart',
        domain: 'walmart.com',
        subtitle: 'World\'s largest retailer ($681B FY25) — Sparky AI assistant, Element platform; supplier + customer data residency at hemisphere scale.',
        tier: 'med',
        tags: [
          { t: 'Tom\'s Pick', c: 'brand', tip: 'Tom\'s named "Valar pick" enterprise stretch target' },
          { t: 'Retail', c: 'neutral' },
          { t: 'Multi-Region Customer Data', c: 'stack', tip: 'Customer + supplier data across US, India, China, LATAM, Africa — every region with its own laws' }
        ],
        overview: 'Walmart runs Sparky (customer AI assistant) and the Element internal AI platform across the largest customer base in the world. Inference workloads cover personalization, supplier negotiation analytics, and merchant copilots. Multi-region customer data spans every major data-residency regime; supplier data is competitively sensitive. Tom\'s named pick.',
        sections: [
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'Retail — global'],
              ['Revenue', '$681B FY2025'],
              ['Headquarters', 'Bentonville, AR'],
              ['Cloud Provider', 'Walmart Cloud (private) + Azure + GCP partnership'],
              ['AI Maturity', 'High — Sparky (2025), Element platform (2024)'],
              ['Valar Status', 'Tom\'s Stage-2 pick']
            ]
          },
          {
            title: 'Inference Footprint',
            rows: [
              ['Use Cases', 'Sparky customer assistant, merchant copilots, supplier negotiation analytics, supply-chain forecasting'],
              ['Current Stack', 'Hybrid Walmart Cloud + Azure + GCP; needs verification on inference engine'],
              ['Pain Points', 'Multi-region customer data residency; supplier data competitive-sensitive; private-cloud capacity ceilings'],
              ['Estimated Spend', '$50M+ annual inference at scale (needs verification)']
            ]
          },
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Land via Group Director Software Engineering (Yesudason Paulraj, warm via Ross)'],
              ['Key Evidence', 'Public Sparky + Element launches; identified warm contact'],
              ['Urgency Level', 'WARM — execute warm intro within 30 days'],
              ['Target Buyer', 'Buyer: VP Platform Engineering / Group Director SE. Champion: Group Director SE.'],
              ['Messaging Angle', '"Run Element-platform inference inside your private cloud and your hyperscaler regions on one SLO contract — supplier data never crosses regions you can\'t prove."']
            ]
          }
        ],
        contacts: [],
        signal_score: 4,
        signals: ['Public Sparky + Element AI investments', 'Warm Group Director SE contact (via Ross)', 'Multi-region data residency = structural Valar fit'],
        signal_types: ['positive', 'positive', 'positive'],
        opp_reason: 'Tom\'s pick + warm contact in platform engineering.',
        competitive_distress: 3,
        distress_reason: 'Walmart\'s AI scale is large but their private-cloud control gives them options most enterprises lack. Pain is multi-region orchestration more than acute hyperscaler failure.',
        distress_signals: ['Private-cloud capacity ceilings during peak (Black Friday class)', 'Multi-region orchestration complexity'],
        distress_signal_types: ['negative', 'negative'],
        data_residency: 4,
        residency_reason: 'Customer + supplier data across US, India, China, LATAM, Africa. Each region has its own laws; supplier data is competitively existential.',
        residency_signals: ['Multi-jurisdiction customer data', 'Supplier data competitive sensitivity', 'India/China data laws'],
        residency_signal_types: ['negative', 'negative', 'negative'],
        gtm_thesis: 'Walmart is the retail-scale validation: a $681B retailer running Sparky and the Element internal AI platform across more data-residency regimes than any other private company. The wedge is in-cloud install across Walmart Cloud + Azure + GCP under one SLO contract, with supplier data and regional customer data staying inside the policy boundaries Walmart already operates. The warm Ross→Yesudason intro is the unlock. <strong>Buyer:</strong> Group Director Software Engineering. <strong>Champion:</strong> Group Director SE (warm via Ross). <strong>NOT</strong> ML engineering teams (per Wiggin).'
      },

      // 18. ServiceNow
      {
        name: 'ServiceNow',
        domain: 'servicenow.com',
        subtitle: 'Enterprise SaaS ($10.98B FY24) — Now Assist + proprietary Now LLM running on customer ITSM/HR data; multi-tenant inference structurally out.',
        tier: 'med',
        tags: [
          { t: 'Tom\'s Pick', c: 'brand', tip: 'Tom\'s named enterprise pick' },
          { t: 'Enterprise SaaS', c: 'neutral' },
          { t: 'Customer Data Custody', c: 'stack', tip: 'Holds customer ITSM, HR, security workflow data — among the most sensitive enterprise data classes' }
        ],
        overview: 'ServiceNow runs Now Assist on Now LLM (their proprietary fine-tuned models) directly on customer ITSM, HR, and security workflow data. Their entire platform contract is about customer-process data sovereignty; multi-tenant inference vendors are structurally incompatible. Tom\'s pick; warm Cassie + Tanmaye contacts identified.',
        sections: [
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'Enterprise SaaS — workflow automation'],
              ['Revenue', '$10.98B FY2024'],
              ['Headquarters', 'Santa Clara, CA'],
              ['Cloud Provider', 'ServiceNow private cloud + Azure regions; FedRAMP High'],
              ['AI Maturity', 'High — Now Assist + Now LLM in production, 2025 Yokohama release expanded'],
              ['Valar Status', 'Tom\'s Stage-2 pick']
            ]
          },
          {
            title: 'Inference Footprint',
            rows: [
              ['Use Cases', 'Now Assist for ITSM/HR/CSM/Security; agent-resolution workflows; case summarization at customer scale'],
              ['Current Stack', 'Proprietary Now LLM (fine-tuned), runs in ServiceNow private cloud per customer; partner integrations with NVIDIA'],
              ['Pain Points', 'FedRAMP High boundary for federal customers; private-cloud capacity ceilings during enterprise rollout; per-customer data isolation'],
              ['Estimated Spend', '$25–50M+ annual inference (needs verification)']
            ]
          },
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Land via Senior Staff PM AI (Cian Brassil, warm via Cassie); co-engage VP Enterprise AI (Luke Hagstrand)'],
              ['Key Evidence', 'Public Now LLM + Now Assist roadmap; FedRAMP High; warm contacts in AI Platform team'],
              ['Urgency Level', 'WARM — multiple warm intros via Cassie, Tanmaye'],
              ['Target Buyer', 'Buyer: VP Enterprise AI. Champion: Senior Staff PM AI / Principal PM AI Platform Security & Privacy.'],
              ['Messaging Angle', '"Now LLM customers are paying you for data sovereignty. Valar runs the inference in your private cloud and your customers\' FedRAMP boundaries — not on top of them."']
            ]
          }
        ],
        contacts: [],
        signal_score: 4,
        signals: ['Public Now Assist + Now LLM in production', 'FedRAMP High authorization', 'Three warm contacts in AI Platform team (Cassie, Tanmaye)'],
        signal_types: ['positive', 'positive', 'positive'],
        opp_reason: 'Tom\'s pick + multiple warm intros + FedRAMP overlay = structural fit.',
        competitive_distress: 4,
        distress_reason: 'Now LLM private-cloud rollout has capacity ceilings during major customer onboardings; per-customer data isolation across thousands of tenants is operationally expensive. Multi-tenant external inference is structurally out.',
        distress_signals: ['Private-cloud capacity ceilings', 'Per-customer data isolation overhead', 'FedRAMP boundary complexity'],
        distress_signal_types: ['negative', 'negative', 'negative'],
        data_residency: 5,
        residency_reason: 'Customer ITSM/HR/CSM data is the most sensitive enterprise data class. FedRAMP High for federal customers. Per-customer data isolation is the product contract.',
        residency_signals: ['Customer workflow data custody', 'FedRAMP High for federal', 'Per-tenant data isolation'],
        residency_signal_types: ['negative', 'negative', 'negative'],
        gtm_thesis: 'ServiceNow is the enterprise-SaaS reference Valar wants: Now Assist runs Now LLM on customer ITSM and HR data — a category where ServiceNow customers are paying explicitly for data sovereignty — and FedRAMP High caps the federal slice. Multi-tenant inference vendors fail every customer contract immediately. The wedge is in-cloud install per ServiceNow data center + customer FedRAMP boundary; expansion is every Now LLM workload that comes online with the Yokohama release and after. Three warm contacts (Cian, Lawrence, Luke) via Cassie and Tanmaye make this the highest-warmth enterprise account in the set. <strong>Buyer:</strong> VP Enterprise AI. <strong>Champion:</strong> Senior Staff PM AI. <strong>NOT</strong> ML engineering function.'
      },

      // 19. UnitedHealth Group — WOW EXEMPLAR
      {
        name: 'UnitedHealth Group',
        domain: 'unitedhealthgroup.com',
        subtitle: 'Largest US health insurer ($400B FY24) — Director of Architecture: <em>"tried Fireworks, Together, Baseten, Modal — none reached production due to security."</em>',
        tier: 'high',
        tags: [
          { t: 'Tom\'s Pick', c: 'brand', tip: 'Tom\'s named enterprise pick' },
          { t: 'Tried & Blocked', c: 'brand', tip: 'Documented: tried Fireworks/Together/Baseten/Modal, none reached production due to security — the canonical Valar wow signal' },
          { t: 'Healthcare', c: 'neutral' },
          { t: 'HIPAA + Multi-Region', c: 'stack', tip: 'PHI under HIPAA across US/EU/Asia subservices' }
        ],
        overview: 'UnitedHealth Group runs production AI inference on GCP Vertex AI + Azure for RAG-based benefits queries across Medicare, Medicaid, and commercial plans. Their Director of Architecture explicitly stated they tried Fireworks, Together, Baseten, and Modal — none reached production because of security blockers. They view BYOC + VPC peering as inevitable: <em>"data never leaves the firewall."</em> This is the canonical Valar wow signal in a single account.',
        sections: [
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'Health insurance — largest US plan operator'],
              ['Revenue', '$400B FY2024'],
              ['Headquarters', 'Minnetonka, MN'],
              ['Cloud Provider', 'GCP Vertex AI + Azure (multi-region US/EU/Asia)'],
              ['AI Maturity', 'High — production RAG on Medicare/Medicaid/commercial benefits'],
              ['Valar Status', 'Tom\'s Stage-2 pick + buyer-interview wow signal']
            ]
          },
          {
            title: 'Inference Footprint',
            rows: [
              ['Use Cases', 'RAG-based benefits queries (Medicare, Medicaid, commercial plans), clinical document summarization, claims-pipeline AI'],
              ['Current Stack', 'GCP Vertex AI + Azure; tried Fireworks/Together/Baseten/Modal — none reached production per UHG Director of Architecture'],
              ['Pain Points', 'Opaque hyperscaler pricing during seasonal spikes (open enrollment); model deprecations forcing clinical-pipeline re-validation under HIPAA; cold-start latency at peak; GCP vendor lock-in; multi-region compliance hard across every Vertex subservice'],
              ['Estimated Spend', '$30M+ annual inference at scale (needs verification)']
            ]
          },
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Land via Director of Engineering (Mike Kramer) or Tom\'s contact (Srikanth Nittala); pitch BYOC as the inevitable answer the Director of Architecture already named'],
              ['Key Evidence', 'Buyer interview on record: tried 4 inference clouds, none reached production; "data never leaves the firewall" quote'],
              ['Urgency Level', 'HIGH — buyer interview already validated the thesis verbatim'],
              ['Target Buyer', 'Buyer: Director of Architecture / Director of Engineering. Champion: Director of Engineering.'],
              ['Messaging Angle', '"You told us you tried Fireworks, Together, Baseten, Modal — none reached production. Here is the BYOC answer your architecture team already said is inevitable."']
            ]
          }
        ],
        contacts: [],
        signal_score: 5,
        signals: ['Documented buyer interview: tried Fireworks/Together/Baseten/Modal, none reached production', '"Data never leaves the firewall" — UHG Director of Architecture verbatim', 'Tom\'s Stage-2 pick', 'Identified contacts (Mike Kramer + Srikanth Nittala)'],
        signal_types: ['positive', 'positive', 'positive', 'positive'],
        opp_reason: 'The buyer already articulated the Valar thesis word-for-word. This is the highest-conviction account in the entire set.',
        competitive_distress: 5,
        distress_reason: 'Documented hyperscaler pain across five vectors: opaque pricing during open-enrollment spikes, model deprecations breaking HIPAA-validated pipelines, cold-start latency at peak, GCP vendor lock-in, multi-region compliance fragmentation. Every multi-tenant inference vendor they tried failed.',
        distress_signals: ['Opaque hyperscaler pricing during seasonal spikes', 'Model deprecations forcing clinical-pipeline re-validation under HIPAA', 'Cold-start latency at peak', 'GCP vendor lock-in', 'Multi-region compliance fragmentation across Vertex subservices', 'Tried 4 inference clouds, 0 reached production'],
        distress_signal_types: ['negative', 'negative', 'negative', 'negative', 'negative', 'negative'],
        data_residency: 5,
        residency_reason: 'PHI under HIPAA across US, EU, Asia. Per the UHG Director of Architecture: <em>"data never leaves the firewall."</em> Multi-tenant inference is structurally out — they tried four vendors and confirmed it.',
        residency_signals: ['HIPAA PHI custody', 'Multi-region (US/EU/Asia) compliance overlay', 'Tried Fireworks/Together/Baseten/Modal — all blocked by security', '"Data never leaves the firewall" — buyer verbatim'],
        residency_signal_types: ['negative', 'negative', 'negative', 'negative'],
        gtm_thesis: 'UnitedHealth Group is the canonical Valar account in a single buyer interview. UHG\'s Director of Architecture said it directly: <em>"Tried Fireworks, Together, Baseten, Modal — none reached production due to security"</em> and <em>"data never leaves the firewall."</em> Their pain is documented across five vectors — opaque hyperscaler pricing during open-enrollment spikes, model deprecations breaking HIPAA-validated clinical pipelines, cold-start latency at peak, GCP vendor lock-in, and multi-region compliance fragmentation. The wedge is in-VPC install behind the UHG firewall under one SLO contract; expansion is every benefits-query, claims, and clinical-document workload that already runs at $30M+ scale. Tom\'s framing — <em>"very, very large enterprises that are either regulated industries, right? Or have proprietary data"</em> — is UHG to the letter. <strong>Buyer:</strong> Director of Architecture / Director of Engineering. <strong>Champion:</strong> Director of Engineering. <strong>NOT</strong> security/governance teams (per Tom) and <strong>NOT</strong> ML engineering (per Wiggin).'
      },

      // 20. Mastercard
      {
        name: 'Mastercard',
        domain: 'mastercard.com',
        subtitle: 'Global payments network ($28B FY24) — Decision Intelligence Pro generative-AI fraud scoring; PCI DSS + global financial regulation; warm AI VP contact.',
        tier: 'med',
        tags: [
          { t: 'Tom\'s Pick', c: 'brand', tip: 'Tom\'s named enterprise pick + Gaby called out "Mastercard-tier"' },
          { t: 'Payments Network', c: 'neutral' },
          { t: 'PCI DSS Global', c: 'stack', tip: 'Cardholder data globally, PCI plus regional financial regulation' },
          { t: 'AI Center of Excellence', c: 'hiring', tip: 'AI Center of Excellence under Vishal Anand' }
        ],
        overview: 'Mastercard launched Decision Intelligence Pro in 2024 — a generative-AI transaction-fraud scoring system at the network level. Their AI Center of Excellence (under Vishal Anand, VP AI) operates as the central AI governance and platform function. PCI DSS plus global financial regulation make multi-tenant inference structurally incompatible.',
        sections: [
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'Payments — global network'],
              ['Revenue', '$28B FY2024'],
              ['Headquarters', 'Purchase, NY'],
              ['Cloud Provider', 'Multi-cloud (AWS-primary), regional residency overlays'],
              ['AI Maturity', 'High — Decision Intelligence Pro (2024), AI Center of Excellence in place'],
              ['Valar Status', 'Tom\'s Stage-2 pick']
            ]
          },
          {
            title: 'Inference Footprint',
            rows: [
              ['Use Cases', 'Decision Intelligence Pro (generative AI for transaction fraud), payment-routing optimization, merchant-side AI features'],
              ['Current Stack', 'Multi-cloud + on-prem; AI CoE governance overlay'],
              ['Pain Points', 'PCI DSS globally; regional financial regulation per market; transaction-fraud SLA is millisecond-bounded'],
              ['Estimated Spend', '$50M+ annual inference (needs verification)']
            ]
          },
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Land via VP AI / AI CoE (Vishal Anand) and Engineering Leader for AI Transformation (Jayesh Kulkarni)'],
              ['Key Evidence', 'Public Decision Intelligence Pro launch; identified AI CoE leadership'],
              ['Urgency Level', 'HIGH'],
              ['Target Buyer', 'Buyer: VP AI / AI CoE. Champion: Engineering Leader, AI Transformation in FinTech & Payments.'],
              ['Messaging Angle', '"Network-level fraud inference at PCI scope across every region — one SLO contract, no per-jurisdiction architecture rebuild."']
            ]
          }
        ],
        contacts: [],
        signal_score: 5,
        signals: ['Public Decision Intelligence Pro launch (2024)', 'AI CoE established under VP AI', 'Identified AI CoE + Engineering Leader contacts', 'Gaby explicitly called out "Mastercard-tier"'],
        signal_types: ['positive', 'positive', 'positive', 'positive'],
        opp_reason: 'Tom + Gaby both named explicitly; AI CoE with identified contacts.',
        competitive_distress: 4,
        distress_reason: 'Network-level fraud inference is millisecond-bounded across global PCI scope. Hyperscaler endpoints fail latency at the bottom of the budget; regional regulation forces per-jurisdiction architecture.',
        distress_signals: ['Millisecond-bounded fraud SLA', 'Per-jurisdiction architecture overhead', 'PCI scope globally'],
        distress_signal_types: ['negative', 'negative', 'negative'],
        data_residency: 5,
        residency_reason: 'PCI DSS on every cardholder transaction globally + regional financial regulation per market. Cross-border data flows require per-jurisdiction transfer mechanisms.',
        residency_signals: ['PCI DSS global scope', 'Regional financial regulation', 'Cross-border transfer mechanisms'],
        residency_signal_types: ['negative', 'negative', 'negative'],
        gtm_thesis: 'Mastercard is the payments-network reference: Decision Intelligence Pro (2024) puts generative AI directly in the transaction-fraud scoring path, where PCI DSS, global financial regulation, and millisecond SLAs all bind. The AI CoE under Vishal Anand is the central platform function — exactly the platform-engineering buyer Tom calls his most-receptive persona. The wedge is in-cloud install across regions under one SLO contract; expansion is every fraud, routing, and merchant AI feature on the roadmap. Gaby called out <em>"Mastercard-tier companies"</em> specifically as Stage-2 ICP. <strong>Buyer:</strong> VP AI / AI Center of Excellence (Vishal Anand). <strong>Champion:</strong> Engineering Leader, AI Transformation. <strong>NOT</strong> Technology Governance team (per Tom\'s explicit guidance).'
      },

      // 21. GM (Cruise)
      {
        name: 'General Motors (Cruise)',
        domain: 'gm.com',
        subtitle: 'GM ($187B FY24) post-Cruise-restructure — ADAS-focused, Super Cruise + manufacturing AI; warm VP Infra contact (Peter Kashou).',
        tier: 'med',
        tags: [
          { t: 'Tom\'s Pick', c: 'brand', tip: 'Tom\'s named enterprise pick' },
          { t: 'Automotive', c: 'neutral' },
          { t: 'OEM Data + ADAS', c: 'stack', tip: 'Driving data + ADAS perception, contractually constrained' }
        ],
        overview: 'After the 2024 Cruise robotaxi wind-down and ADAS-refocus, GM\'s AI footprint sits across Super Cruise / Ultra Cruise (driving assistance), manufacturing-quality vision, and Cruise-inherited perception talent. Driving data is privacy-regulated; ADAS evaluation is inference-heavy. Tom\'s pick; warm Peter Kashou (VP Infrastructure) contact identified.',
        sections: [
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'Automotive — OEM + ADAS'],
              ['Revenue', '$187B FY2024'],
              ['Headquarters', 'Detroit, MI'],
              ['Cloud Provider', 'Azure-strategic partnership + multi-cloud'],
              ['AI Maturity', 'Med-High — Super Cruise / Ultra Cruise; manufacturing AI; ex-Cruise perception team'],
              ['Valar Status', 'Tom\'s Stage-2 pick + warm VP Infra']
            ]
          },
          {
            title: 'Inference Footprint',
            rows: [
              ['Use Cases', 'ADAS perception eval, manufacturing-quality vision, Super Cruise telemetry, in-vehicle voice/AI assistant'],
              ['Current Stack', 'Azure + on-prem GPU clusters; needs verification'],
              ['Pain Points', 'Driving-data privacy per region; ADAS eval bursts blow through cloud quota; on-prem GPU ceilings'],
              ['Estimated Spend', '$10–25M annual inference (needs verification)']
            ]
          },
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Land via VP Infrastructure (Peter Kashou); navigate carefully around Staff ML Engineer / Head of AI Product Engineering (potential antagonists)'],
              ['Key Evidence', 'Tom\'s pick; identified VP Infra contact'],
              ['Urgency Level', 'WARM — execute outreach to Peter Kashou'],
              ['Target Buyer', 'Buyer: VP of Infrastructure. Champion: VP Infrastructure (Peter Kashou).'],
              ['Messaging Angle', '"Run ADAS eval bursts on cloud capacity that lands inside your contracted environment — driving data and OEM IP stay where your privacy controls already cover them."']
            ]
          }
        ],
        contacts: [],
        signal_score: 4,
        signals: ['Tom\'s named pick', 'Identified VP Infrastructure contact', 'ADAS-refocused with Cruise perception talent inherited'],
        signal_types: ['positive', 'positive', 'positive'],
        opp_reason: 'Tom\'s pick + identified VP Infra (Tom\'s most-receptive persona by title).',
        competitive_distress: 3,
        distress_reason: 'ADAS eval campaigns hit on-prem GPU ceilings and overshoot hyperscaler quota; driving data privacy varies per region.',
        distress_signals: ['On-prem GPU ceilings', 'Hyperscaler quota volatility during eval bursts'],
        distress_signal_types: ['negative', 'negative'],
        data_residency: 4,
        residency_reason: 'Connected-vehicle driving data privacy per region (US states + EU GDPR); ADAS data contractually constrained.',
        residency_signals: ['Connected-vehicle privacy laws', 'ADAS data contractual constraints'],
        residency_signal_types: ['negative', 'negative'],
        gtm_thesis: 'GM (Cruise) is the OEM-platform pick: post-Cruise-restructure, GM\'s ADAS investment (Super Cruise, Ultra Cruise, inherited perception talent) drives sustained inference demand against driving data the company privacy-regulates per region. The wedge is burst eval and online perception inside GM-controlled cloud + on-prem capacity under one SLO; expansion is every ADAS workload as the Super Cruise rollout widens. The warm Peter Kashou intro lands at exactly Tom\'s ranked-1 buyer persona. <strong>Buyer:</strong> VP of Infrastructure (Peter Kashou). <strong>Champion:</strong> VP Infrastructure. <strong>NOT</strong> ML engineering teams (Wiggin antagonist warning — handle Staff ML Engineer / Head of AI Product Engineering carefully).'
      },

      // 22. Capital One
      {
        name: 'Capital One',
        domain: 'capitalone.com',
        subtitle: 'Tech-forward US bank ($53.4B FY25) — production multi-agent AI for car-buying, deepest Primary network warmth (8 contacts) in the entire set.',
        tier: 'high',
        tags: [
          { t: 'Tom\'s Pick', c: 'brand', tip: 'Tom\'s named enterprise pick' },
          { t: 'Bank', c: 'neutral' },
          { t: 'Production Multi-Agent AI', c: 'stack', tip: 'Public production multi-agent AI workflow (VentureBeat 2025)' },
          { t: 'PCI DSS + Financial Reg', c: 'stack', tip: 'PCI DSS plus US financial regulation' }
        ],
        overview: 'Capital One ships production multi-agent AI for car-buying (VentureBeat 2025) and operates large-scale fraud-risk inference. They publicly position as a tech-forward bank with the largest in-house engineering org in US banking. Their AI/ML platform is led by EVP/Chief Scientist Prem Natarajan. The Primary network has 8 warm contacts here — deepest warmth in the entire dataset.',
        sections: [
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'Commercial banking — tech-forward'],
              ['Revenue', '$53.4B FY2025'],
              ['Headquarters', 'McLean, VA'],
              ['Cloud Provider', 'AWS-primary (Capital One was AWS\' largest enterprise customer when they exited the data center)'],
              ['AI Maturity', 'High — production multi-agent AI, dedicated EVP Chief Scientist for Enterprise AI'],
              ['Valar Status', 'Tom\'s Stage-2 pick + 8 warm Primary contacts']
            ]
          },
          {
            title: 'Inference Footprint',
            rows: [
              ['Use Cases', 'Production multi-agent AI for car-buying (auto-chat concierge), fraud/risk applications, customer-service AI'],
              ['Current Stack', 'In-house tooling + open-source serving; AWS-primary'],
              ['Pain Points', 'PCI DSS + financial-services data residency; AWS lock-in concerns; model-versioning at scale'],
              ['Estimated Spend', '$50–100M+ annual inference (needs verification)']
            ]
          },
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Sequence warm intros — 8 Primary network contacts across AI Eng, Platform, Product. Lead with Vivek Gupta (Distinguished Eng, warm via Alex)'],
              ['Key Evidence', 'Production multi-agent AI public reference; 8 Primary network warm contacts'],
              ['Urgency Level', 'EXECUTE — highest-warmth account in the set; sequence contacts within 2 weeks'],
              ['Target Buyer', 'Buyer: Managing VP, Head of Product, Enterprise AI/ML Platforms. Champion: Distinguished Engineer (Vivek Gupta, warm via Alex).'],
              ['Messaging Angle', '"You ship production multi-agent AI on AWS today. The next inflection — agentic + cross-region — needs heterogeneous-accelerator scheduling that stays inside your environment."']
            ]
          }
        ],
        contacts: [],
        signal_score: 5,
        signals: ['Public production multi-agent AI (VentureBeat 2025)', 'EVP Chief Scientist Enterprise AI in place', '8 Primary network warm contacts (Alex, Ben, Charles, Doug, Emily, Gaby, Hannah, Tanmaye)', 'Tom\'s named pick'],
        signal_types: ['positive', 'positive', 'positive', 'positive'],
        opp_reason: 'Highest-warmth account in the entire dataset. Tom\'s pick + 8 warm contacts + public production AI reference.',
        competitive_distress: 4,
        distress_reason: 'AWS-primary at billions of dollars of cloud spend; production multi-agent AI runs at scale where cost predictability and per-token economics matter. Heterogeneous-accelerator scheduling not yet solved.',
        distress_signals: ['AWS cost concentration', 'Multi-agent AI scale cost trajectory', 'Heterogeneous-accelerator scheduling unsolved'],
        distress_signal_types: ['negative', 'negative', 'negative'],
        data_residency: 4,
        residency_reason: 'PCI DSS + US financial regulation; data residency by region per regulator. Public commitment to keeping financial-services data under controlled environments.',
        residency_signals: ['PCI DSS scope', 'Financial-services data residency', 'AWS regional residency overlays'],
        residency_signal_types: ['negative', 'negative', 'negative'],
        gtm_thesis: 'Capital One is the highest-warmth Stage-2 account in the entire FDI: a tech-forward US bank with public production multi-agent AI (VentureBeat 2025), an EVP Chief Scientist running enterprise AI, and 8 Primary network warm contacts spanning AI Eng, Platform, and Product. Tom\'s pick — and Gaby\'s framing of <em>"players who have growing inference spend so think of Bank of America, Mastercard, fintechs, insurance companies"</em> sits squarely on Capital One. The wedge is heterogeneous-accelerator scheduling that lands inside their AWS environment under one SLO contract; expansion is every agentic workflow as their multi-agent AI roadmap matures. <strong>Buyer:</strong> Managing VP, Head of Product, Enterprise AI/ML Platforms (John Morgan). <strong>Champion:</strong> Distinguished Engineer (Vivek Gupta, warm via Alex). <strong>NOT</strong> ML engineering function broadly — sequence through platform and product first.'
      },

      // 23. PayPal
      {
        name: 'PayPal',
        domain: 'paypal.com',
        subtitle: 'Global payments ($31.8B FY24) — Cosmos.AI internal LLM platform, Smart Receipts; 4 Primary warm contacts including SVP Consumer Eng.',
        tier: 'high',
        tags: [
          { t: 'Tom\'s Pick', c: 'brand', tip: 'Tom\'s named enterprise pick' },
          { t: 'Payments', c: 'neutral' },
          { t: 'PCI DSS Global', c: 'stack', tip: 'PCI DSS on cardholder data globally' },
          { t: 'Cosmos.AI', c: 'stack', tip: 'PayPal\'s internal LLM platform (2024)' }
        ],
        overview: 'PayPal launched Cosmos.AI as its internal LLM platform in 2024, with Smart Receipts and AI agents shipping through 2025. Production fraud, payment-flow optimization, and customer-service AI run at network scale. PCI DSS globally + financial regulation. Four Primary network warm contacts including SVP Consumer Engineering (Martin Brodbeck via Tobias).',
        sections: [
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'Payments — global'],
              ['Revenue', '$31.8B FY2024'],
              ['Headquarters', 'San Jose, CA'],
              ['Cloud Provider', 'Multi-cloud + private (Cosmos.AI internal platform)'],
              ['AI Maturity', 'High — Cosmos.AI platform, Smart Receipts, AI agents'],
              ['Valar Status', 'Tom\'s Stage-2 pick + 4 warm contacts']
            ]
          },
          {
            title: 'Inference Footprint',
            rows: [
              ['Use Cases', 'Cosmos.AI internal LLM platform, Smart Receipts, AI agents, fraud detection, payment-flow optimization'],
              ['Current Stack', 'Multi-cloud + private; Cosmos.AI as internal platform'],
              ['Pain Points', 'PCI DSS global; private platform capacity ceilings; AI agent rollout cost trajectory'],
              ['Estimated Spend', '$25–60M annual inference (needs verification)']
            ]
          },
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Sequence warm Primary contacts: Warren Zhang (DoE, Alex-warm) → Martin Brodbeck (SVP Consumer Eng, Tobias-warm)'],
              ['Key Evidence', 'Public Cosmos.AI launch; 4 warm Primary contacts'],
              ['Urgency Level', 'EXECUTE — sequence warm intros'],
              ['Target Buyer', 'Buyer: SVP Consumer Engineering (Martin Brodbeck). Champion: Director of Engineering (Warren Zhang).'],
              ['Messaging Angle', '"Cosmos.AI is your control plane today. Valar makes it scheduler-aware across heterogeneous accelerators without giving up the data perimeter that lets you run it."']
            ]
          }
        ],
        contacts: [],
        signal_score: 5,
        signals: ['Public Cosmos.AI internal LLM platform (2024)', 'Smart Receipts + AI agents 2025', '4 Primary warm contacts (Alex, Gelman, Shuman, Tobias)', 'Tom\'s named pick'],
        signal_types: ['positive', 'positive', 'positive', 'positive'],
        opp_reason: 'Tom\'s pick + 4 warm contacts spanning Director of Eng to SVP.',
        competitive_distress: 4,
        distress_reason: 'Cosmos.AI internal platform faces capacity ceilings as agent workloads scale; PCI DSS global keeps multi-tenant inference structurally out; cost trajectory of agent rollout is steep.',
        distress_signals: ['Cosmos.AI private capacity ceiling', 'Agent rollout cost trajectory', 'PCI DSS global scope'],
        distress_signal_types: ['negative', 'negative', 'negative'],
        data_residency: 4,
        residency_reason: 'PCI DSS globally + payment regulator overlays per market. Multi-region payment data requires controlled environments.',
        residency_signals: ['PCI DSS global', 'Payment regulator overlays', 'Multi-region payment data'],
        residency_signal_types: ['negative', 'negative', 'negative'],
        gtm_thesis: 'PayPal is the payments-platform pick: a $31.8B network with Cosmos.AI as its internal LLM platform, Smart Receipts and AI agents in market, and four warm Primary contacts spanning Director of Engineering to SVP Consumer Engineering. Tom\'s pick. The wedge is heterogeneous-accelerator scheduling on top of the Cosmos.AI control plane PayPal already operates — keeping the data perimeter intact while solving the cost trajectory of agent rollout. Gaby\'s buyer framing — <em>"players who have growing inference spend"</em> — fits PayPal exactly. <strong>Buyer:</strong> SVP Consumer Engineering (Martin Brodbeck, warm via Tobias). <strong>Champion:</strong> Director of Engineering (Warren Zhang, warm via Alex). <strong>NOT</strong> security/governance teams (per Tom).'
      },

      // 24. Workday
      {
        name: 'Workday',
        domain: 'workday.com',
        subtitle: 'HR/Finance SaaS ($8.4B FY25) — Illuminate + Agent System of Record on customer HR/finance data; ex-Google CTO running agentic.',
        tier: 'med',
        tags: [
          { t: 'Tom\'s Pick', c: 'brand', tip: 'Tom\'s named enterprise pick' },
          { t: 'Enterprise SaaS', c: 'neutral' },
          { t: 'Customer HR/Finance Data', c: 'stack', tip: 'Holds customer payroll, HR records, financial data — data classes their customers consider crown jewels' }
        ],
        overview: 'Workday runs Illuminate (their AI platform) and announced the Agent System of Record in 2025. Workloads sit directly on customer HR records, payroll data, and financial data — among the most sensitive data classes any SaaS holds. SVP/CTO Ashok Banerjee (ex-Google) is driving the agentic AI architecture. Tom\'s pick.',
        sections: [
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'Enterprise SaaS — HR + finance'],
              ['Revenue', '$8.4B FY2025'],
              ['Headquarters', 'Pleasanton, CA'],
              ['Cloud Provider', 'Workday private cloud + AWS (recent shift)'],
              ['AI Maturity', 'High — Illuminate platform, Agent System of Record announced'],
              ['Valar Status', 'Tom\'s Stage-2 pick']
            ]
          },
          {
            title: 'Inference Footprint',
            rows: [
              ['Use Cases', 'Illuminate AI features, Agent System of Record (HR/finance agents), Workday Assistant'],
              ['Current Stack', 'Workday private cloud + AWS; needs verification on inference engine'],
              ['Pain Points', 'Customer HR/finance data custody; per-customer data isolation; private-cloud capacity ceilings during major customer rollouts'],
              ['Estimated Spend', '$15–30M annual inference (needs verification)']
            ]
          },
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Land via SVP/CTO (Ashok Banerjee) and VP Engineering & Product (Patrick O\'Connor)'],
              ['Key Evidence', 'Public Illuminate + Agent System of Record; identified senior contacts'],
              ['Urgency Level', 'WARM'],
              ['Target Buyer', 'Buyer: SVP/CTO. Champion: VP Engineering & Product.'],
              ['Messaging Angle', '"Agent System of Record customers are paying for HR data sovereignty. Run agent inference inside the perimeter they signed for, on heterogeneous accelerators they don\'t need to provision."']
            ]
          }
        ],
        contacts: [],
        signal_score: 4,
        signals: ['Public Illuminate + Agent System of Record', 'SVP/CTO ex-Google Ashok Banerjee driving agentic', 'Identified senior contacts'],
        signal_types: ['positive', 'positive', 'positive'],
        opp_reason: 'Tom\'s pick + senior CTO contact identified.',
        competitive_distress: 3,
        distress_reason: 'Workday\'s private cloud has capacity ceilings during enterprise rollouts; agent inference cost trajectory steep; per-customer isolation overhead.',
        distress_signals: ['Private-cloud capacity ceilings', 'Agent rollout cost trajectory'],
        distress_signal_types: ['negative', 'negative'],
        data_residency: 5,
        residency_reason: 'Customer HR records + payroll + financial data — among the most sensitive enterprise data classes. Per-customer data isolation is the contract.',
        residency_signals: ['Customer HR record custody', 'Payroll data sensitivity', 'Per-customer data isolation contract'],
        residency_signal_types: ['negative', 'negative', 'negative'],
        gtm_thesis: 'Workday is the HR/finance-SaaS pick: Illuminate + Agent System of Record running on customer HR records and payroll data — sovereign data classes their customers buy them for. Tom\'s pick. The wedge is in-cloud install per customer environment, agent inference scheduled across heterogeneous accelerators that Workday doesn\'t have to provision; expansion is every agent in the System of Record roadmap. <strong>Buyer:</strong> SVP/CTO (Ashok Banerjee, ex-Google). <strong>Champion:</strong> VP Engineering & Product. <strong>NOT</strong> ML engineering function (Wiggin antagonist warning).'
      },

      // 25. HubSpot
      {
        name: 'HubSpot',
        domain: 'hubspot.com',
        subtitle: 'CRM/SaaS ($2.6B FY24) — Breeze AI agents on customer CRM data; warm Tech Lead contact via Bridget.',
        tier: 'low',
        tags: [
          { t: 'Tom\'s Pick', c: 'brand', tip: 'Tom\'s named enterprise pick' },
          { t: 'CRM SaaS', c: 'neutral' },
          { t: 'Customer CRM Data', c: 'stack', tip: 'Holds customer CRM/marketing/sales data with privacy obligations' }
        ],
        overview: 'HubSpot launched Breeze AI agents in 2024 — content-generation, prospecting, and customer-service agents running directly on customer CRM data. Customer pipeline data is competitive-sensitive; multi-tenant inference requires careful data-handling. Tom\'s pick; warm Tech Lead contact (Asher Eastham via Bridget).',
        sections: [
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'CRM / marketing SaaS'],
              ['Revenue', '$2.6B FY2024'],
              ['Headquarters', 'Cambridge, MA'],
              ['Cloud Provider', 'AWS-primary'],
              ['AI Maturity', 'High — Breeze AI agents launched 2024'],
              ['Valar Status', 'Tom\'s Stage-2 pick + warm Tech Lead']
            ]
          },
          {
            title: 'Inference Footprint',
            rows: [
              ['Use Cases', 'Breeze AI agents (content, prospecting, service), AI-assisted CRM workflows'],
              ['Current Stack', 'AWS + hosted LLMs (needs verification on share)'],
              ['Pain Points', 'Customer CRM data is competitive-sensitive (HubSpot customer A doesn\'t want their pipeline informing customer B\'s model)'],
              ['Estimated Spend', '$5–15M annual inference (needs verification)']
            ]
          },
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Land via Technical Lead (Asher Eastham, warm via Bridget); expand to platform engineering'],
              ['Key Evidence', 'Breeze launch; warm Tech Lead'],
              ['Urgency Level', 'WARM'],
              ['Target Buyer', 'Buyer: VP Engineering / Platform. Champion: Technical Lead (Asher Eastham).'],
              ['Messaging Angle', '"Your customers don\'t want their pipeline data training someone else\'s agent. Run Breeze inference inside an environment that proves the isolation."']
            ]
          }
        ],
        contacts: [],
        signal_score: 3,
        signals: ['Public Breeze AI launch (2024)', 'Warm Tech Lead via Bridget', 'Tom\'s named pick'],
        signal_types: ['positive', 'positive', 'positive'],
        opp_reason: 'Tom\'s pick + warm Tech Lead = land path.',
        competitive_distress: 2,
        distress_reason: 'HubSpot\'s AI cost trajectory is real but they\'re earlier in the curve than payments/banks. Pain is data-handling story to customers more than acute inference cost.',
        distress_signals: ['Customer CRM data competitive sensitivity', 'Earlier on cost curve than financial-services peers'],
        distress_signal_types: ['negative', 'neutral'],
        data_residency: 3,
        residency_reason: 'Customer CRM data, GDPR for EU customers, per-customer data isolation expectations. Real but lighter regulatory regime than financial-services or healthcare.',
        residency_signals: ['Customer CRM data custody', 'GDPR for EU customers'],
        residency_signal_types: ['negative', 'negative'],
        gtm_thesis: 'HubSpot is the CRM-SaaS land: Breeze AI agents (2024) running on customer CRM and pipeline data, where the customer-isolation story matters more than the regulatory bar. Tom\'s pick. Tech Lead Asher Eastham warm via Bridget = the technical land path. The wedge is in-cloud install proving customer-data isolation architecturally; expansion is every Breeze agent capability that ships as the agent surface area grows. <strong>Buyer:</strong> VP Engineering / Platform. <strong>Champion:</strong> Technical Lead (Asher Eastham, warm via Bridget). <strong>NOT</strong> ML engineering function.'
      },

      // 26. Rivian
      {
        name: 'Rivian',
        domain: 'rivian.com',
        subtitle: 'EV / agentic-AI builder ($4.97B FY24) — Manish Agarwal "Driving Agentic AI @ Rivian" plus VW JV cash; net-new agentic platform decision.',
        tier: 'med',
        tags: [
          { t: 'Tom\'s Pick', c: 'brand', tip: 'Tom\'s named enterprise pick' },
          { t: 'EV / Automotive', c: 'neutral' },
          { t: 'Agentic Build-Out', c: 'hiring', tip: 'Manish Agarwal hired to drive Agentic AI; greenfield platform decision' }
        ],
        overview: 'Rivian is mid-build on its agentic AI strategy — Manish Agarwal (ex-Amazon, ex-Apple) is publicly "Driving Agentic AI @ Rivian" with Volkswagen JV capital ($5B+) underwriting the spend. Workloads cover ADAS, manufacturing, customer experience, and emerging in-vehicle agentic features. Greenfield platform decision = highest-leverage moment to land.',
        sections: [
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'EV / automotive'],
              ['Revenue', '$4.97B FY2024'],
              ['Headquarters', 'Irvine, CA'],
              ['Cloud Provider', 'AWS-primary (needs verification on agentic stack)'],
              ['AI Maturity', 'Building — agentic AI program led by Manish Agarwal'],
              ['Valar Status', 'Tom\'s Stage-2 pick — greenfield build moment']
            ]
          },
          {
            title: 'Inference Footprint',
            rows: [
              ['Use Cases', 'ADAS perception, manufacturing AI, customer experience, in-vehicle agentic features (in build)'],
              ['Current Stack', 'AWS + on-prem GPU; agentic stack TBD (greenfield)'],
              ['Pain Points', 'Greenfield decisions on inference platform; cost trajectory of agentic at scale; ADAS data residency'],
              ['Estimated Spend', '$3–8M annual inference today, growing fast (needs verification)']
            ]
          },
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Land via Manish Agarwal (Driving Agentic AI) — greenfield agentic-platform decision is the unlock'],
              ['Key Evidence', 'Public LinkedIn positioning; VW JV $5B+ capital; Tom\'s pick'],
              ['Urgency Level', 'HIGH — greenfield platform decision window'],
              ['Target Buyer', 'Buyer: Driving Agentic AI (Manish Agarwal). Champion: HW Platform Architecture (Autonomy) — Prasun Raha.'],
              ['Messaging Angle', '"You\'re building agentic from scratch. Build it on a control plane that does heterogeneous-accelerator scheduling on day one — not a hyperscaler endpoint you\'ll have to lift off in 18 months."']
            ]
          }
        ],
        contacts: [],
        signal_score: 4,
        signals: ['Public Manish Agarwal "Driving Agentic AI @ Rivian"', 'VW JV $5B+ capital underwriting AI spend', 'Greenfield platform decision window', 'Tom\'s named pick'],
        signal_types: ['positive', 'positive', 'positive', 'positive'],
        opp_reason: 'Greenfield agentic-platform decision = highest-leverage land moment in the dataset. Tom\'s pick.',
        competitive_distress: 3,
        distress_reason: 'Rivian is pre-pain on cost — they have JV capital — but they face the platform decision now, before the pain hits. Hyperscaler lock-in at the agentic layer creates predictable 18-month-out distress.',
        distress_signals: ['Greenfield = no current cost pain', 'Hyperscaler lock-in risk if platform chosen wrong'],
        distress_signal_types: ['neutral', 'negative'],
        data_residency: 3,
        residency_reason: 'ADAS data + connected-vehicle telematics privacy; manufacturing IP; lighter than financial-services or healthcare regulatory regime.',
        residency_signals: ['Connected-vehicle privacy laws', 'Manufacturing IP sensitivity'],
        residency_signal_types: ['negative', 'negative'],
        gtm_thesis: 'Rivian is the greenfield agentic land: Manish Agarwal is publicly Driving Agentic AI, VW JV capital underwrites the spend, and the platform decision is being made now. Tom\'s pick. The wedge is landing as the agentic control plane on day one — heterogeneous-accelerator scheduling, in-cloud install, no hyperscaler lock-in to lift off in 18 months. Tom\'s framing — <em>"reliability, capacity, quality of service"</em> as the top angle — fits perfectly: Rivian doesn\'t feel cost pain yet, they feel reliability/capacity pain as they scale. <strong>Buyer:</strong> Driving Agentic AI (Manish Agarwal). <strong>Champion:</strong> HW Platform Architecture (Prasun Raha). <strong>NOT</strong> ML engineering function broadly (Wiggin antagonist warning — sequence carefully).'
      },

      // 27. Bank of America
      {
        name: 'Bank of America',
        domain: 'bankofamerica.com',
        subtitle: '$113B revenue, Erica AI at decade-of-production scale, public NVIDIA AI Factory deal — air-gap requirements documented; "BoA-tier" per memo.',
        tier: 'high',
        tags: [
          { t: 'Memo Named', c: 'brand', tip: 'Gaby explicitly called out "Bank of America" as Stage-2 ICP' },
          { t: 'Bank', c: 'neutral' },
          { t: 'PCI DSS + Federal', c: 'stack', tip: 'PCI DSS plus US federal financial regulation' },
          { t: 'NVIDIA AI Factory + Air-Gap', c: 'hw', tip: 'Public NVIDIA AI Factory deal with documented security/air-gapping constraints (Business Insider 2026)' }
        ],
        overview: 'Bank of America\'s Erica AI assistant has been in production for a decade, with about 700 intents and hundreds of workflows. They publicly announced an NVIDIA AI Factory deal in 2026 with documented security/air-gapping constraints (per Business Insider internal-emails reporting). PCI DSS + federal financial regulation. Gaby explicitly called out BoA as canonical Stage-2 ICP shape.',
        sections: [
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'Commercial banking — global'],
              ['Revenue', '$113.1B FY2025'],
              ['Headquarters', 'Charlotte, NC'],
              ['Cloud Provider', 'Multi-cloud + private; NVIDIA AI Factory build-out'],
              ['AI Maturity', 'High — Erica decade-of-production, NVIDIA AI Factory announced'],
              ['Valar Status', 'Memo-named Stage-2 ICP target']
            ]
          },
          {
            title: 'Inference Footprint',
            rows: [
              ['Use Cases', 'Erica AI assistant (~700 intents, hundreds of workflows), customer service, fraud detection, emerging GenAI workloads on NVIDIA AI Factory'],
              ['Current Stack', 'Erica = NLP/ML grounded (not generative); NVIDIA AI Factory for new GenAI workloads with air-gap requirements'],
              ['Pain Points', 'PCI DSS for cardholder data; federal supervision; air-gap requirements on NVIDIA AI Factory deployment'],
              ['Estimated Spend', '$50M+ annual inference at scale (needs verification)']
            ]
          },
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Land via CTIO (Hari Gopalkrishnan) or VP Cloud Architecture (Lou Papagalis)'],
              ['Key Evidence', 'Public Erica decade reference; NVIDIA AI Factory announced; air-gap requirements documented'],
              ['Urgency Level', 'HIGH'],
              ['Target Buyer', 'Buyer: CTIO. Champion: VP Cloud Architecture and Engineering.'],
              ['Messaging Angle', '"Your NVIDIA AI Factory will be air-gapped by requirement. Run scheduling and SLO management on a control plane that lives inside the air-gap with you — no hyperscaler endpoints in the data path."']
            ]
          }
        ],
        contacts: [],
        signal_score: 5,
        signals: ['Public Erica decade-of-production reference', 'NVIDIA AI Factory announced 2026 with air-gap requirements', 'Identified CTIO + VP Cloud Architecture', 'Gaby explicitly named "Bank of America"'],
        signal_types: ['positive', 'positive', 'positive', 'positive'],
        opp_reason: 'Memo-named + identified CTIO + NVIDIA AI Factory air-gap is exactly the BYOC story.',
        competitive_distress: 4,
        distress_reason: 'NVIDIA AI Factory air-gap requirements force a control-plane decision. Hyperscaler endpoints fail air-gap immediately; multi-tenant inference fails federal supervision. The window for a BYOC control plane is now.',
        distress_signals: ['NVIDIA AI Factory air-gap requirements', 'Federal supervision constraints', 'Multi-tenant inference structurally out'],
        distress_signal_types: ['negative', 'negative', 'negative'],
        data_residency: 5,
        residency_reason: 'PCI DSS + US federal financial supervision + NVIDIA AI Factory air-gap. Multi-tenant inference fails on every dimension.',
        residency_signals: ['PCI DSS scope', 'Federal financial supervision', 'AI Factory air-gap requirements'],
        residency_signal_types: ['negative', 'negative', 'negative'],
        gtm_thesis: 'Bank of America is the documented air-gap signal: Erica\'s decade of production, the public NVIDIA AI Factory announcement, and Business Insider reporting on internal emails about security/air-gapping constraints together describe a bank that has already decided BYOC is the right shape — they just haven\'t named the control plane yet. Gaby\'s framing — <em>"think of Bank of America, Mastercard, fintechs, insurance companies"</em> — names BoA first. The wedge is the SLO-aware scheduler and heterogeneous-accelerator routing layer running inside the AI Factory air-gap; expansion is every GenAI workload that comes on after Erica. <strong>Buyer:</strong> CTIO (Hari Gopalkrishnan). <strong>Champion:</strong> VP Cloud Architecture and Engineering (Lou Papagalis). <strong>NOT</strong> security/governance teams (per Tom\'s explicit guidance).'
      },

      // 28. NatWest
      {
        name: 'NatWest',
        domain: 'natwest.com',
        subtitle: 'UK bank ($38.9B FY25) — strongest documented inference signal in the dataset: ~100 ML models on SageMaker, Cora chatbot 11M interactions, 5-year AWS+Accenture AI deal.',
        tier: 'med',
        tags: [
          { t: 'Webset Standout', c: 'brand', tip: 'Strongest documented inference signal in the entire Webset' },
          { t: 'UK Bank', c: 'neutral' },
          { t: 'UK GDPR + 10-year retention', c: 'stack', tip: 'UK GDPR personal data, retention up to 10 years post-account-closure' },
          { t: 'OpenAI Partnership', c: 'stack', tip: 'Public OpenAI banking collaboration announced March 2025' }
        ],
        overview: 'NatWest publicly documents nearly 100 production ML models on Amazon SageMaker, with a goal of thousands more inside 24 months. Cora (the customer chatbot) handled 11M interactions. Public 5-year AWS + Accenture AI partnership. UK GDPR + 10-year retention overlay. OpenAI banking-collaboration announcement March 2025. This is the strongest documented inference signal in the entire dataset.',
        sections: [
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'Commercial banking — UK'],
              ['Revenue', '$38.9B FY2025'],
              ['Headquarters', 'London, UK'],
              ['Cloud Provider', 'AWS-primary (5-year strategic AI partnership 2025)'],
              ['AI Maturity', 'High — ~100 production ML models, OpenAI collaboration'],
              ['Valar Status', 'Webset standout / Stage-2 ICP target']
            ]
          },
          {
            title: 'Inference Footprint',
            rows: [
              ['Use Cases', 'Cora customer chatbot (11M interactions), ~100 production ML models on SageMaker, OpenAI-backed banking experiences (March 2025 announcement)'],
              ['Current Stack', 'AWS SageMaker for ML inference; OpenAI for newer experiences'],
              ['Pain Points', 'UK GDPR + 10-year retention; AWS lock-in across 100+ models; OpenAI integration data-flow complexity; goal of thousands more models = capacity planning headache'],
              ['Estimated Spend', '$10–25M annual inference (needs verification, likely growing fast)']
            ]
          },
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Land via CIO (Scott Marcar) or Platform Lead / Multi-Cloud (David E)'],
              ['Key Evidence', 'Public ~100 ML models on SageMaker; 5-year AWS+Accenture deal; OpenAI banking collaboration; identified CIO + Multi-Cloud Lead'],
              ['Urgency Level', 'HIGH'],
              ['Target Buyer', 'Buyer: Chief Information Officer. Champion: Platform Lead / Global Multi-Cloud Lead.'],
              ['Messaging Angle', '"You\'re going from 100 models to thousands. Lock-in to one stack = capacity bottleneck. Run heterogeneous-accelerator scheduling inside your UK-region AWS — and across whatever you bring on next."']
            ]
          }
        ],
        contacts: [],
        signal_score: 5,
        signals: ['Public ~100 production ML models on SageMaker', 'Cora chatbot 11M interactions documented', '5-year AWS + Accenture AI partnership', 'OpenAI banking collaboration March 2025', 'Goal: thousands more models in 24 months'],
        signal_types: ['positive', 'positive', 'positive', 'positive', 'positive'],
        opp_reason: 'Strongest documented inference signal in the dataset.',
        competitive_distress: 4,
        distress_reason: 'Going from 100 to thousands of production models means capacity planning that single-vendor SageMaker can\'t cleanly scale; OpenAI integration adds cross-stack complexity; UK regulators watching every step.',
        distress_signals: ['100 → thousands of models = capacity planning crisis', 'AWS lock-in concentration', 'OpenAI cross-stack data flow'],
        distress_signal_types: ['negative', 'negative', 'negative'],
        data_residency: 4,
        residency_reason: 'UK GDPR + 10-year retention post-account-closure; PRA/FCA supervision; cross-border AI flows require article-46 mechanisms.',
        residency_signals: ['UK GDPR personal data', '10-year retention overlay', 'PRA/FCA supervision'],
        residency_signal_types: ['negative', 'negative', 'negative'],
        gtm_thesis: 'NatWest is the strongest single inference signal in the entire dataset: nearly 100 production ML models on SageMaker today, a stated goal of thousands more inside 24 months, a 5-year AWS+Accenture AI partnership, and a public OpenAI banking collaboration. The capacity-planning math doesn\'t work on a single hyperscaler stack — Tom\'s ranked-1 messaging angle <em>"reliability, capacity, quality of service"</em> lands directly here, with cost a strong second. The wedge is heterogeneous-accelerator scheduling inside the UK-region AWS environment; expansion is every model in the 10x roadmap and every cross-stack OpenAI workflow. <strong>Buyer:</strong> Chief Information Officer (Scott Marcar). <strong>Champion:</strong> Platform Lead / Global Multi-Cloud Lead (David E). <strong>NOT</strong> ML engineering function (Wiggin antagonist warning).'
      },

      // 29. HSBC
      {
        name: 'HSBC',
        domain: 'hsbc.com',
        subtitle: 'Global UK bank ($68.3B FY25) — Dynamic Risk Assessment with Google screening 980M monthly transactions; Chief AI Officer appointed April 2026.',
        tier: 'med',
        tags: [
          { t: 'Webset Standout', c: 'brand', tip: 'Public production AI + new Chief AI Officer org' },
          { t: 'Global Bank', c: 'neutral' },
          { t: 'UK GDPR + Cross-Border', c: 'stack', tip: 'UK-EEA cross-border data flows under safeguards' },
          { t: 'Hiring: AI Platform SRE', c: 'hiring', tip: 'Open AI Platform SRE role at scale (Xi\'an)' }
        ],
        overview: 'HSBC operates production AI through Dynamic Risk Assessment (developed with Google Cloud) screening ~980M monthly transactions for financial-crime detection. David Rice was appointed first Chief AI Officer effective April 2026 — fresh org, fresh budget. Group Head of AI Platforms (Jenny Jin) identified. UK GDPR + cross-border safeguards.',
        sections: [
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'Commercial banking — global'],
              ['Revenue', '$68.3B FY2025'],
              ['Headquarters', 'London, UK'],
              ['Cloud Provider', 'Multi-cloud, GCP for Dynamic Risk Assessment'],
              ['AI Maturity', 'High — Dynamic Risk Assessment in production at 980M tx/mo, new Chief AI Officer org'],
              ['Valar Status', 'Webset standout / Stage-2 ICP target']
            ]
          },
          {
            title: 'Inference Footprint',
            rows: [
              ['Use Cases', 'Dynamic Risk Assessment financial-crime detection (~980M monthly transactions screened), customer service AI'],
              ['Current Stack', 'GCP for DRA; multi-cloud broader; new CAIO org spinning up'],
              ['Pain Points', 'UK GDPR + cross-border (UK/EEA + APAC); GCP concentration risk; new CAIO needs to architect platform'],
              ['Estimated Spend', '$15–35M annual inference (needs verification)']
            ]
          },
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Land via Chief AI Officer (David Rice) or Group Head of AI Platforms (Jenny Jin) — fresh org = greenfield platform decisions'],
              ['Key Evidence', 'Public DRA partnership with Google; new CAIO role announced; identified senior contacts'],
              ['Urgency Level', 'HIGH — new CAIO + greenfield platform decision window'],
              ['Target Buyer', 'Buyer: Chief AI Officer (David Rice). Champion: Group Head of AI Platforms (Jenny Jin).'],
              ['Messaging Angle', '"You\'re building the AI platform fresh under a new CAIO. Make heterogeneous-accelerator scheduling and cross-region SLO part of the architecture, not a year-three migration."']
            ]
          }
        ],
        contacts: [],
        signal_score: 5,
        signals: ['Dynamic Risk Assessment screening 980M monthly transactions (Google partnership)', 'New Chief AI Officer (David Rice) effective April 2026', 'Group Head of AI Platforms identified', 'Open AI Platform SRE role'],
        signal_types: ['positive', 'positive', 'positive', 'positive'],
        opp_reason: 'New CAIO org = greenfield platform decision window.',
        competitive_distress: 4,
        distress_reason: 'New CAIO inheriting GCP-concentrated AI footprint at 980M monthly transactions; cross-border UK/EEA/APAC data flows; platform-architecture decision window open.',
        distress_signals: ['GCP concentration risk', 'Cross-border data flow complexity', 'Greenfield platform decision pressure'],
        distress_signal_types: ['negative', 'negative', 'negative'],
        data_residency: 5,
        residency_reason: 'UK GDPR + EU GDPR + APAC data laws (Hong Kong, Singapore, mainland China). Cross-border under safeguards. Multi-tenant inference fails on every dimension.',
        residency_signals: ['UK GDPR + EU GDPR overlap', 'APAC data laws (HK, SG, China)', 'Cross-border safeguards required'],
        residency_signal_types: ['negative', 'negative', 'negative'],
        gtm_thesis: 'HSBC is the new-CAIO greenfield: David Rice was appointed first Chief AI Officer effective April 2026, inheriting Dynamic Risk Assessment screening 980M monthly transactions on Google Cloud and an open AI Platform SRE role at scale. The architecture decision window is open now — and Tom\'s ranked-1 angle (<em>"reliability, capacity, quality of service"</em>) is precisely what a new CAIO needs to commit to in year one. The wedge is being part of the platform architecture from day zero — heterogeneous-accelerator scheduling, cross-region SLO, in-cloud install across UK + EEA + APAC; expansion is every workload as the new org scales. <strong>Buyer:</strong> Chief AI Officer (David Rice). <strong>Champion:</strong> Group Head of AI Platforms (Jenny Jin). <strong>NOT</strong> security/governance teams (per Tom).'
      },

      // 30. Munich Re
      {
        name: 'Munich Re',
        domain: 'munichre.com',
        subtitle: 'German global reinsurer ($71B FY25) — Insure AI / aiSure team, Chief Data and AI Officer Fabian Winter, underwriting STP +30-35%; restructuring 1000 jobs around AI.',
        tier: 'high',
        tags: [
          { t: 'Webset Standout', c: 'brand', tip: 'Webset standout: Chief Data and AI Officer + Insure AI product team identified' },
          { t: 'Reinsurance', c: 'neutral' },
          { t: 'GDPR + BDSG + TDDDG', c: 'stack', tip: 'GDPR + German Federal Data Protection Act + Telecom Digital Services Data Protection Act stacked' },
          { t: 'Hiring: ML / GenAI', c: 'hiring', tip: 'Open Senior ML Engineer (Toronto) + AI Intern roles' }
        ],
        overview: 'Munich Re is a $71B German global reinsurer with the Insure AI / aiSure product team selling AI risk solutions to other carriers, and Chief Data and AI Officer Fabian Winter running the central data/analytics division. Public reporting: ML in underwriting lifted straight-through processing 30-35% in some life/health portfolios; restructuring of 1,000 jobs around AI announced February 2026 (Bloomberg). GDPR + BDSG + TDDDG layered.',
        sections: [
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'Reinsurance + primary insurance'],
              ['Revenue', '$71.0B FY2025'],
              ['Headquarters', 'Munich, Bavaria, Germany'],
              ['Cloud Provider', 'Multi-cloud (AWS + Azure per careers postings)'],
              ['AI Maturity', 'High — Insure AI / aiSure product team, underwriting STP +30-35%, public restructuring around AI'],
              ['Valar Status', 'Webset standout / Stage-2 ICP target']
            ]
          },
          {
            title: 'Inference Footprint',
            rows: [
              ['Use Cases', 'Underwriting STP (+30-35%), aiSure AI risk-cover product, Tech Trend Radar AI applications, claims analytics'],
              ['Current Stack', 'AWS + Azure (per ML Engineer JD); GenAI in development'],
              ['Pain Points', 'GDPR + BDSG + TDDDG triple-layered; cross-border reinsurance data; restructuring increases AI dependency'],
              ['Estimated Spend', '$8–20M annual inference (needs verification)']
            ]
          },
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Land via Chief Data and AI Officer (Fabian Winter); Head of Product & Technology (Jay Godse) for product alignment'],
              ['Key Evidence', 'Public underwriting STP +30-35%; restructuring 1,000 jobs around AI; identified CDAIO contact'],
              ['Urgency Level', 'HIGH'],
              ['Target Buyer', 'Buyer: Chief Data and AI Officer. Champion: Head of Product & Technology.'],
              ['Messaging Angle', '"Underwriting STP gains depend on inference reliability. As you restructure 1,000 roles around AI, the platform has to be reliable across MVR + Toronto + Munich, GDPR-clean, and not single-vendor."']
            ]
          }
        ],
        contacts: [],
        signal_score: 5,
        signals: ['Public underwriting STP +30-35% per Munich Re materials', 'Bloomberg Feb 2026: 1,000 jobs restructured around AI', 'Chief Data and AI Officer (Fabian Winter) identified', 'Open Senior ML Engineer (Toronto) + AI Intern roles', 'aiSure / Insure AI product team active'],
        signal_types: ['positive', 'positive', 'positive', 'positive', 'positive'],
        opp_reason: 'Webset standout: CDAIO + product team + active hiring + public AI-driven restructuring.',
        competitive_distress: 4,
        distress_reason: 'Restructuring 1,000 jobs around AI = the AI platform has to be reliable. Triple-layered EU regulation. Multi-cloud reality already (AWS + Azure in JDs).',
        distress_signals: ['Restructuring depends on AI reliability', 'Triple-layered EU regulation', 'Multi-cloud reality vs single-vendor inference'],
        distress_signal_types: ['negative', 'negative', 'negative'],
        data_residency: 5,
        residency_reason: 'GDPR + German Federal Data Protection Act (BDSG) + German Telecom Digital Services Data Protection Act (TDDDG). Cross-border reinsurance data handling.',
        residency_signals: ['GDPR', 'BDSG (German Federal DP Act)', 'TDDDG', 'Cross-border reinsurance data'],
        residency_signal_types: ['negative', 'negative', 'negative', 'negative'],
        gtm_thesis: 'Munich Re is the German-reinsurer Stage-2 fit: a $71B carrier with public underwriting STP gains of 30-35% from ML, a Chief Data and AI Officer (Fabian Winter) running central data and analytics, an Insure AI product team selling AI risk solutions outward, and Bloomberg reporting 1,000 jobs restructured around AI. Tom\'s framing of <em>"top 10 insurance"</em> Stage-2 picks lands directly. Triple-layered GDPR + BDSG + TDDDG makes multi-tenant inference structurally out; multi-cloud reality (AWS + Azure in their hiring) means heterogeneous-accelerator scheduling is already a need. The wedge is in-cloud install across the regional footprint under one SLO; expansion is every workload that comes online as the AI restructuring lands. <strong>Buyer:</strong> Chief Data and AI Officer (Fabian Winter). <strong>Champion:</strong> Head of Product & Technology (Jay Godse). <strong>NOT</strong> security/governance teams (per Tom).'
      }
    ]
  }
];

/* CONTACT_MAP — keys exact-match SEGMENTS company names */
const CONTACT_MAP = {
  "BigPanda": [
    { name: "Russ Elsner", title: "VP of Product Management", type: "business", linkedin: "https://www.linkedin.com/in/russelsner", connections: [] },
    { name: "Leon Gendler", title: "EVP R&D, IL GM", type: "business", linkedin: "https://www.linkedin.com/in/leon-gendler", connections: [] },
    { name: "Alexander Page", title: "Engineering Director, Applied AI", type: "technical", linkedin: "https://www.linkedin.com/in/alexanderkpage", connections: [] }
  ],
  "Varonis": [
    { name: "Yoni Feldman", title: "Vice President of Engineering", type: "business", linkedin: "https://www.linkedin.com/in/yonifeldman", connections: [] },
    { name: "Roy Ben Shlomo", title: "VP Engineering", type: "business", linkedin: "https://www.linkedin.com/in/roybenshlomo", connections: [] },
    { name: "Lior Chen", title: "Deputy CTO", type: "business", linkedin: "https://www.linkedin.com/in/chenlior", connections: [] },
    { name: "Ori Katz", title: "Director of Engineering, Cybersecurity & AI", type: "technical", linkedin: "https://www.linkedin.com/in/katz-ori", connections: [] }
  ],
  "ABInBev": [],
  "Qualcomm": [
    { name: "Len Sheynblat", title: "VP Engineering", type: "business", linkedin: "https://www.linkedin.com/in/len-sheynblat-b177161", connections: [] },
    { name: "Michael Campbell", title: "Sr. VP Engineering", type: "business", linkedin: "https://www.linkedin.com/in/michaelcampbell2015", connections: [] },
    { name: "Leonard Lin", title: "VP of Engineering, Qualcomm AI Research", type: "business", linkedin: "https://www.linkedin.com/in/leonard-lin-6b3a5a37b", connections: [] },
    { name: "Dan Weil", title: "VP Engineering", type: "business", linkedin: "https://www.linkedin.com/in/weildan", connections: [] }
  ],
  "Jefferies": [
    { name: "Camilo Correia", title: "VP, Global Head of Workspace Virtualization Engineering", type: "technical", linkedin: "https://www.linkedin.com/in/camilocorreia", connections: [] },
    { name: "Lynne Davis", title: "CIO Wealth Management Technology", type: "business", linkedin: "https://www.linkedin.com/in/lmdavis", connections: [] }
  ],
  "Mobileye": [
    { name: "Sefi Darshan", title: "VP Information Technology", type: "business", linkedin: "https://www.linkedin.com/in/sefi-darshan-a6189b5", connections: [] },
    { name: "Beny Haddad", title: "Technology Leader / former CTO (Cyber)", type: "technical", linkedin: "https://www.linkedin.com/in/benyhaddad", connections: [] }
  ],
  "Abbott": [],
  "Ford": [
    { name: "Sucheta Walimbe", title: "CTO Enterprise Platform Engineering and Operations", type: "business", linkedin: "https://www.linkedin.com/in/suchetawalimbe", connections: [] },
    { name: "Tyler Underwood", title: "Senior Engineering & Product Leader", type: "technical", linkedin: "https://www.linkedin.com/in/tyler-underwood", connections: [] },
    { name: "Joe Beiser", title: "Product & Operations Executive | Engineering Leadership", type: "technical", linkedin: "https://www.linkedin.com/in/joe-beiser", connections: [] }
  ],
  "Flatiron": [
    { name: "Toni Ann Dearborn", title: "VP of Product Management (Platform Engineering)", type: "business", linkedin: "https://www.linkedin.com/in/tonianndearborn", connections: [] },
    { name: "Allison Candido", title: "Engineering", type: "technical", linkedin: "https://www.linkedin.com/in/allison-candido-09836064", connections: [] }
  ],
  "American Airlines": [],
  "Monzo Bank": [
    { name: "Thomas Leitch", title: "Vice President Of Engineering", type: "business", linkedin: "https://linkedin.com/in/tom-leitch", connections: [] },
    { name: "Xiayun Sun", title: "Director Of Engineering, Payment", type: "business", linkedin: "https://linkedin.com/in/xiayun-sun-36505513", connections: [] }
  ],
  "DKB | Deutsche Kreditbank AG": [
    { name: "Arnulf Keese", title: "Vorstand", type: "business", linkedin: "https://de.linkedin.com/in/arnulfkeese", connections: [] },
    { name: "Mathias Rohbeck", title: "Director Of IT", type: "technical", linkedin: "https://de.linkedin.com/in/mathias-rohbeck-48889920a", connections: [] }
  ],
  "TSB Bank": [
    { name: "Cheryl McCuaig", title: "Chief Information Officer", type: "business", linkedin: "https://uk.linkedin.com/in/cheryl-mccuaig-340ab615", connections: [] },
    { name: "Sailesh Panchal", title: "Chief Technology Officer + Payments", type: "business", linkedin: "https://uk.linkedin.com/in/saileshpanchal", connections: [] }
  ],
  "Celonis": [
    { name: "Felipe Lora", title: "VP of Engineering — Platform (Site Lead, Munich HQ)", type: "business", linkedin: "https://www.linkedin.com/in/felipelora", connections: [] },
    { name: "Ye Zhou", title: "VP of Engineering", type: "business", linkedin: "https://www.linkedin.com/in/ye-zhou-237566", connections: [] },
    { name: "Raviv Cohen", title: "VP, Product & Enterprise Security", type: "business", linkedin: "https://www.linkedin.com/in/ravivcohen", connections: [] },
    { name: "Simon Stelzl", title: "VP, Value Engineering", type: "business", linkedin: "https://www.linkedin.com/in/simon-stelzl", connections: [] }
  ],
  "ACA Group": [
    { name: "Nikolay Kojuharov", title: "Tech Executive — Founded AI Practice (FinTech RegTech)", type: "business", linkedin: "https://www.linkedin.com/in/nkojuharov", connections: [] },
    { name: "Nilesh Shroff", title: "Managing Director — Enterprise Software", type: "business", linkedin: "https://www.linkedin.com/in/nilesh-shroff-910939", connections: [] },
    { name: "Daniel Gabriel", title: "Lead Product Engineer", type: "technical", linkedin: "https://www.linkedin.com/in/daniel-gabriel-ba669011", connections: [] }
  ],
  "F5": [
    { name: "Karl Triebes", title: "CTO, Senior Vice President Product Development", type: "business", linkedin: "https://www.linkedin.com/in/karl-triebes-9a63745", connections: [] },
    { name: "Anand Kolukula", title: "Vice President Of Engineering", type: "business", linkedin: "https://www.linkedin.com/in/kolukula", connections: [] }
  ],
  "Walmart": [
    { name: "Yesudason Paulraj", title: "Group Director of Software Engineering", type: "technical", linkedin: "https://linkedin.com/in/ypaulraj", connections: [{ person: "Ross", strength: "warm" }] }
  ],
  "ServiceNow": [
    { name: "Cian Brassil", title: "Senior Staff Product Manager, AI", type: "business", linkedin: "https://linkedin.com/in/brassil", connections: [{ person: "Cassie", strength: "warm" }] },
    { name: "Lawrence Osai", title: "Principal Product Manager, AI Platform Security & Privacy", type: "business", linkedin: "https://linkedin.com/in/lawrence-osai-85ba8b71", connections: [{ person: "Tanmaye", strength: "warm" }] },
    { name: "Luke Hagstrand", title: "VP, Enterprise AI", type: "business", linkedin: "https://linkedin.com/in/luke-hagstrand", connections: [{ person: "Tanmaye", strength: "warm" }] }
  ],
  "UnitedHealth Group": [
    { name: "Srikanth Nittala", title: "Director (per Tom's outbound CSV)", type: "business", linkedin: "https://linkedin.com/in/srikanthnittala/", connections: [] },
    { name: "Mike Kramer", title: "Director of Engineering", type: "technical", linkedin: "https://linkedin.com/in/michael-kramer-01259a23/", connections: [] }
  ],
  "Mastercard": [
    { name: "Vishal Anand", title: "VP AI (AI Center of Excellence)", type: "business", linkedin: "https://www.linkedin.com/in/vianand", connections: [] },
    { name: "Jayesh Kulkarni", title: "Engineering Leader, AI Transformation in FinTech & Payments", type: "technical", linkedin: "https://www.linkedin.com/in/jayeshkulkarni", connections: [] },
    { name: "Nilesh Upadhye", title: "VP (Product Development and Product Solutioning)", type: "business", linkedin: "https://www.linkedin.com/in/nilesh-upadhye-79719123", connections: [] },
    { name: "Kiran Jayant", title: "Vice President, Technology Governance", type: "business", linkedin: "https://www.linkedin.com/in/kiran-jayant-830a3042", connections: [] }
  ],
  "General Motors (Cruise)": [
    { name: "Peter Kashou", title: "Vice President of Infrastructure", type: "business", linkedin: "https://linkedin.com/in/peterkashou", connections: [] },
    { name: "Nariman Madani", title: "Staff Machine Learning Engineer", type: "technical", linkedin: "https://linkedin.com/in/nariman-madani", connections: [{ person: "Ross", strength: "warm" }] },
    { name: "Naghmana Majed", title: "Head of AI Product Engineering", type: "business", linkedin: "https://linkedin.com/in/naghmana", connections: [{ person: "Shuman", strength: "warm" }] },
    { name: "Niel Teng Hu", title: "Senior Machine Learning Engineer II", type: "technical", linkedin: "https://linkedin.com/in/tenghu", connections: [{ person: "Tanmaye", strength: "warm" }] }
  ],
  "Capital One": [
    { name: "Prem Natarajan, PhD", title: "EVP and Chief Scientist, Head of Enterprise AI, Data, and Staff Technologies", type: "business", linkedin: "https://www.linkedin.com/in/natarajan", connections: [] },
    { name: "John Morgan", title: "Managing VP, Head of Product, Enterprise AI & ML Platforms", type: "business", linkedin: "https://www.linkedin.com/in/john-morgan-51458a8", connections: [] },
    { name: "Vivek Gupta", title: "Director, Distinguished Engineer", type: "technical", linkedin: "https://linkedin.com/in/vivek-gupta-7b188018", connections: [{ person: "Alex", strength: "warm" }] },
    { name: "John Hinnegan", title: "Senior Engineering Leader", type: "technical", linkedin: "https://linkedin.com/in/johnhinnegan", connections: [{ person: "Ben", strength: "warm" }, { person: "Gelman", strength: "warm" }] },
    { name: "Jason Burks", title: "Senior Director of Software Engineering", type: "business", linkedin: "https://linkedin.com/in/jason-burks", connections: [{ person: "Charles", strength: "warm" }] },
    { name: "Ryan McCaffrey", title: "Lead AI Engineer", type: "technical", linkedin: "https://linkedin.com/in/ryanpmccaffrey", connections: [{ person: "Doug", strength: "warm" }] },
    { name: "Radford Tam", title: "Senior Engineering Manager, Platform Enablement", type: "technical", linkedin: "https://linkedin.com/in/radfordtam", connections: [{ person: "Emily", strength: "warm" }] },
    { name: "James P. Kennedy", title: "Head of TPM, Bank Modernization Lead", type: "business", linkedin: "https://linkedin.com/in/jamespkennedynyc", connections: [{ person: "Gaby", strength: "warm" }] },
    { name: "Jeff Chou", title: "VP of AI / Head of Product", type: "business", linkedin: "https://linkedin.com/in/jeffchoumit", connections: [{ person: "Hannah", strength: "warm" }] },
    { name: "Trina Leung", title: "AI/ML Platform Product Manager", type: "technical", linkedin: "https://linkedin.com/in/trina-leung", connections: [{ person: "Tanmaye", strength: "warm" }] }
  ],
  "PayPal": [
    { name: "Warren Zhang", title: "Director of Engineering", type: "technical", linkedin: "https://linkedin.com/in/warren-zhang-95a79610", connections: [{ person: "Alex", strength: "warm" }] },
    { name: "Bhuvaneswari Shanmugam", title: "Sr Software Engineering Manager", type: "technical", linkedin: "https://linkedin.com/in/bhuvaneswari-shanmugam-2b3b9275", connections: [{ person: "Gelman", strength: "warm" }] },
    { name: "Gurinder Singh", title: "Staff Software Engineer", type: "technical", linkedin: "https://linkedin.com/in/gurinder-singh-a30a1a48", connections: [{ person: "Shuman", strength: "warm" }] },
    { name: "Martin Brodbeck", title: "SVP, Head of Consumer Engineering", type: "business", linkedin: "https://linkedin.com/in/martinbrodbeck", connections: [{ person: "Tobias", strength: "warm" }] }
  ],
  "Workday": [
    { name: "Patrick O Connor", title: "VP of Engineering & Product", type: "business", linkedin: "https://www.linkedin.com/in/patrick-o-connor-8b046914", connections: [] },
    { name: "Ashok Banerjee", title: "SVP / CTO (ex-Google) — Agentic AI, Data Platforms", type: "business", linkedin: "https://www.linkedin.com/in/ashokbanerjee1", connections: [] },
    { name: "Sanjeev Sastry", title: "Vice President, Workday", type: "business", linkedin: "https://www.linkedin.com/in/sanjeev-sastry", connections: [] }
  ],
  "HubSpot": [
    { name: "Asher Eastham", title: "Technical Lead", type: "technical", linkedin: "https://linkedin.com/in/ashereastham", connections: [{ person: "Bridget", strength: "warm" }] }
  ],
  "Rivian": [
    { name: "Manish Agarwal", title: "Driving Agentic AI @ Rivian (ex-Amazon, Apple)", type: "business", linkedin: "https://www.linkedin.com/in/manish-agarwal01", connections: [] },
    { name: "Brian Gase", title: "VP, Engineering Quality", type: "business", linkedin: "https://www.linkedin.com/in/brian-gase-396285b", connections: [] },
    { name: "Krishna Bandaru", title: "Vice President, Manufacturing Engineering", type: "business", linkedin: "https://www.linkedin.com/in/krishna-bandaru-802b4ab", connections: [] },
    { name: "Prasun Raha", title: "HW Platform Architecture (Autonomy)", type: "technical", linkedin: "https://www.linkedin.com/in/prasunraha", connections: [] }
  ],
  "Bank of America": [
    { name: "Hari Gopalkrishnan", title: "Chief Technology and Information Officer", type: "business", linkedin: "https://www.linkedin.com/in/hari-gopalkrishnan-b1469b1", connections: [] },
    { name: "Lou Papagalis", title: "VP Cloud Architecture and Engineering", type: "technical", linkedin: "https://www.linkedin.com/in/lou-papagalis-473a952a", connections: [] }
  ],
  "NatWest": [
    { name: "Scott Marcar", title: "Chief Information Officer, NatWest Group", type: "business", linkedin: "https://linkedin.com/in/scott-marcar-1940a33", connections: [] },
    { name: "David E", title: "Platform Lead / Global Multi-Cloud Lead", type: "technical", linkedin: "https://linkedin.com/in/david-e-4833b160", connections: [] }
  ],
  "HSBC": [
    { name: "David Rice", title: "Chief AI Officer", type: "business", linkedin: "https://uk.linkedin.com/in/david-rice-845931145", connections: [] },
    { name: "Jenny Jin", title: "Group Head Of AI Platforms", type: "business", linkedin: "https://cn.linkedin.com/in/jenny-jin-51329b372/zh-cn", connections: [] }
  ],
  "Munich Re": [
    { name: "Fabian Winter", title: "Chief Data and AI Officer (Head of Central Division Data and Analytics)", type: "business", linkedin: "https://www.linkedin.com/in/fabian-winter-13bb1688", connections: [] },
    { name: "Jay Godse", title: "Head of Product & Technology", type: "business", linkedin: "https://www.linkedin.com/in/jayengodse", connections: [] },
    { name: "Karen Avellaneda", title: "AI EA Manager", type: "business", linkedin: "https://www.linkedin.com/in/karen-avellaneda-mba-bbcc-454b0828", connections: [] }
  ]
};

/* COMPANY_SOURCES — third-party references per company */
const COMPANY_SOURCES = {
  "BigPanda": [
    { name: "BigPanda corporate site — AIOps platform overview", url: "https://www.bigpanda.io/" },
    { name: "TechCrunch — BigPanda funding coverage", url: "https://techcrunch.com/?s=bigpanda" },
    { name: "Gartner — AIOps Platforms market context", url: "https://www.gartner.com/en/information-technology/insights/aiops-platforms" }
  ],
  "Varonis": [
    { name: "Varonis SEC filings — investor.varonis.com", url: "https://investor.varonis.com/financials" },
    { name: "Reuters — Varonis coverage", url: "https://www.reuters.com/companies/VRNS.OQ" },
    { name: "DBIR / Verizon — data security context", url: "https://www.verizon.com/business/resources/reports/dbir/" }
  ],
  "ABInBev": [
    { name: "AB InBev SEC filings", url: "https://www.ab-inbev.com/investors/" },
    { name: "Reuters — AB InBev BEES platform coverage", url: "https://www.reuters.com/companies/ABI.BR" }
  ],
  "Qualcomm": [
    { name: "Qualcomm 10-K — SEC EDGAR", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000804328" },
    { name: "Reuters — Qualcomm AI Research coverage", url: "https://www.reuters.com/companies/QCOM.OQ" }
  ],
  "Jefferies": [
    { name: "Jefferies SEC filings", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001084580" },
    { name: "Reuters — Jefferies coverage", url: "https://www.reuters.com/companies/JEF.N" }
  ],
  "Mobileye": [
    { name: "Mobileye 10-K — SEC EDGAR", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001892994" },
    { name: "Reuters — Mobileye coverage", url: "https://www.reuters.com/companies/MBLY.OQ" }
  ],
  "Abbott": [
    { name: "Abbott 10-K — SEC EDGAR", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000001800" },
    { name: "Reuters — Abbott AI in diagnostics", url: "https://www.reuters.com/companies/ABT.N" }
  ],
  "Ford": [
    { name: "Ford 10-K — SEC EDGAR", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000037996" },
    { name: "Reuters — Latitude AI coverage", url: "https://www.reuters.com/business/autos-transportation/ford-launches-self-driving-subsidiary-latitude-ai-2023-03-02/" }
  ],
  "Flatiron": [
    { name: "Flatiron Health corporate / Roche subsidiary", url: "https://flatiron.com/" },
    { name: "Reuters — Roche / Flatiron coverage", url: "https://www.reuters.com/business/healthcare-pharmaceuticals/" }
  ],
  "American Airlines": [
    { name: "American Airlines 10-K — SEC EDGAR", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000006201" },
    { name: "Reuters — American Airlines AI/operations coverage", url: "https://www.reuters.com/companies/AAL.OQ" }
  ],
  "Monzo Bank": [
    { name: "Monzo Annual Report 2025", url: "https://monzo.com/annual-report" },
    { name: "InfoQ — Monzo Real-Time Fraud Detection (Nov 2025)", url: "https://www.infoq.com/news/2025/11/monzo-real-time-fraud-detection" },
    { name: "Monzo Engineering Blog — Reactive Fraud Prevention", url: "https://monzo.com/blog/build-a-reactive-fraud-prevention-platform" }
  ],
  "DKB | Deutsche Kreditbank AG": [
    { name: "Heise — DKB cooperates with OpenAI", url: "https://www.heise.de/en/news/AI-banking-DKB-cooperates-with-OpenAI-10373088.html" },
    { name: "DKB corporate", url: "https://www.dkb.de" },
    { name: "Visa Issuer Processing Service — DPS Germany / DKB", url: "https://www.visa.com/" }
  ],
  "TSB Bank": [
    { name: "TSB Banking Group ARA 2025", url: "https://www.tsb.co.uk/content/dam/tsb-public/documents/investors/financial-results-and-reports/2025/TSB-Banking-Group-ARA-2025.pdf" },
    { name: "Infosys CCI on AWS — TSB", url: "https://www.infosys.com/services/data-analytics/insights/analytics-ai.html" },
    { name: "Adobe + TSB AI Experience Platform partnership 2025", url: "https://www.adobe.com/" }
  ],
  "Celonis": [
    { name: "Celonis Earns FedRAMP — BusinessWire 2025", url: "https://www.businesswire.com/news/home/20250819336167/en/Celonis-Earns-FedRAMP" },
    { name: "TechCrunch — Celonis AI copilot", url: "https://techcrunch.com/2023/11/14/celonis-adds-an-ai-copilot-to-ask-questions-about-a-process-map" },
    { name: "Celonis Greenhouse — ML Engineer roles", url: "https://job-boards.greenhouse.io/celonis/jobs/6653606003" }
  ],
  "ACA Group": [
    { name: "ACA Group Encore AI overview", url: "https://acaglobal.com/insights/" },
    { name: "ACA Group corporate", url: "https://acaglobal.com" }
  ],
  "F5": [
    { name: "F5 FY2025 Q4 earnings", url: "https://www.f5.com/company/news/press-releases/earnings-fy25-q4" },
    { name: "F5 — CalypsoAI acquisition press release", url: "https://www.f5.com/company/news/press-releases/f5-to-acquire-calypsoai-to-bring-advanced-ai-guardrails-to-large-scale-ai-deployments" },
    { name: "Reuters — F5 / CalypsoAI", url: "https://www.reuters.com/" }
  ],
  "Walmart": [
    { name: "Walmart 10-K — SEC EDGAR", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000104169" },
    { name: "Reuters — Walmart Sparky AI coverage", url: "https://www.reuters.com/companies/WMT.N" }
  ],
  "ServiceNow": [
    { name: "ServiceNow 10-K — SEC EDGAR", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001373715" },
    { name: "Reuters — ServiceNow Now LLM / Yokohama", url: "https://www.reuters.com/companies/NOW.N" }
  ],
  "UnitedHealth Group": [
    { name: "UnitedHealth Group 10-K — SEC EDGAR", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000731766" },
    { name: "Valar PVP V Memo — UHG Director of Architecture interview (4/29/2026)", url: "https://www.unitedhealthgroup.com/" },
    { name: "Reuters — UnitedHealth coverage", url: "https://www.reuters.com/companies/UNH.N" }
  ],
  "Mastercard": [
    { name: "Mastercard 10-K — SEC EDGAR", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001141391" },
    { name: "Mastercard — Decision Intelligence Pro launch", url: "https://www.mastercard.com/news/press/2024/february/mastercard-launches-generative-ai-fraud-defense/" },
    { name: "Reuters — Mastercard AI coverage", url: "https://www.reuters.com/companies/MA.N" }
  ],
  "General Motors (Cruise)": [
    { name: "GM 10-K — SEC EDGAR", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001467858" },
    { name: "Reuters — GM Cruise restructuring", url: "https://www.reuters.com/business/autos-transportation/gm-cruise-robotaxi-business-2024-12-10/" }
  ],
  "Capital One": [
    { name: "Capital One FY2025 8-K — Fortune", url: "https://fortune.com/company-assets/1767/quartr/earnings-release-8-k-3abc0-2026-01-22-09-11-12.pdf" },
    { name: "VentureBeat — Capital One Production Multi-Agent AI", url: "https://venturebeat.com/ai/how-capital-one-built-production-multi-agent-ai-workflows-to-power-enterprise-use-cases" },
    { name: "Capital One 10-K — SEC EDGAR", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000927628" }
  ],
  "PayPal": [
    { name: "PayPal 10-K — SEC EDGAR", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001633917" },
    { name: "Reuters — PayPal Cosmos.AI / Smart Receipts", url: "https://www.reuters.com/companies/PYPL.OQ" }
  ],
  "Workday": [
    { name: "Workday 10-K — SEC EDGAR", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001327811" },
    { name: "Reuters — Workday Illuminate / Agent System of Record", url: "https://www.reuters.com/companies/WDAY.OQ" }
  ],
  "HubSpot": [
    { name: "HubSpot 10-K — SEC EDGAR", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001404655" },
    { name: "TechCrunch — HubSpot Breeze AI", url: "https://techcrunch.com/?s=hubspot+breeze" }
  ],
  "Rivian": [
    { name: "Rivian 10-K — SEC EDGAR", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001874178" },
    { name: "Reuters — Rivian / VW JV coverage", url: "https://www.reuters.com/business/autos-transportation/" }
  ],
  "Bank of America": [
    { name: "BoA FY2025 SEC filing", url: "https://investor.bankofamerica.com/regulatory-and-other-filings/select-sec-filings/content/0000070858-26-000020/bac-12312025ex993.htm" },
    { name: "Business Insider — BoA NVIDIA AI Factory / air-gap (2026)", url: "https://www.businessinsider.com/bank-of-america-nvidia-ai-internal-emails-2026-1" },
    { name: "BoA newsroom — Erica decade of AI (2025)", url: "https://newsroom.bankofamerica.com/content/newsroom/press-releases/2025/08/a-decade-of-erica.html" }
  ],
  "NatWest": [
    { name: "Reuters — NatWest / OpenAI banking collaboration (March 2025)", url: "https://www.reuters.com/technology/natwest-seals-milestone-uk-banking-collaboration-with-openai-2025-03-20" },
    { name: "Macrotrends — NatWest Group revenue", url: "https://www.macrotrends.net/stocks/charts/RBSPF/natwest-group/revenue" },
    { name: "NatWest Group press — AWS+Accenture 5-year AI partnership", url: "https://www.natwestgroup.com/news-and-insights/news-room/press-releases/ai-and" }
  ],
  "HSBC": [
    { name: "HSBC FY2025 Annual Report", url: "https://www.hsbc.com/-/files/hsbc/investors/hsbc-results/2025/annual/pdfs/hsbc-holdings-plc/260225-annual-report-and-accounts-2025.pdf" },
    { name: "HSBC media release — David Rice appointed Chief AI Officer (2026)", url: "https://www.hsbc.com/news-and-views/news/media-releases/2026/david-rice-announced-as-chief-ai-officer" },
    { name: "HSBC careers — AI Platform SRE", url: "https://apply.careers.hsbc.com/" }
  ],
  "Munich Re": [
    { name: "Munich Re Group Annual Report 2025", url: "https://www.munichre.com/content/dam/munichre/mrwebsiteslaunches/2025-annual-report/MunichRe-Group-Annual-Report-2025-en.pdf" },
    { name: "Bloomberg — Munich Re unit cuts 1,000 positions as AI takes over jobs (Feb 2026)", url: "https://www.bloomberg.com/news/articles/2026-02-17/munich-re-unit-to-cut-1-000-positions-as-ai-takes-over-jobs" },
    { name: "Munich Re — aiSure / Insure AI", url: "https://www.munichre.com/en/solutions/for-industry-clients/insure-ai.html" },
    { name: "Munich Re careers — Senior ML Engineer (Toronto)", url: "https://careers.munichre.com/en/job/toronto/senior-ml-engineer/3342/36833131840" }
  ]
};

/* JOB_LISTINGS — active AI/ML postings per company */
const JOB_LISTINGS = {
  "BigPanda": [],
  "Varonis": [],
  "ABInBev": [],
  "Qualcomm": [],
  "Jefferies": [],
  "Mobileye": [],
  "Abbott": [],
  "Ford": [],
  "Flatiron": [],
  "American Airlines": [],
  "Monzo Bank": [],
  "DKB | Deutsche Kreditbank AG": [],
  "TSB Bank": [],
  "Celonis": [
    { title: "Senior Software Engineer — Machine Learning", techs: "AI/ML, EMS, APIs, scalable infra", url: "https://job-boards.greenhouse.io/celonis/jobs/6653606003", date: "Active 2026" },
    { title: "Machine Learning Engineer (Process Copilot, EMS)", techs: "AI/ML, Process Copilot, EMS", url: "https://job-boards.greenhouse.io/celonis/", date: "Active 2026" }
  ],
  "ACA Group": [],
  "F5": [],
  "Walmart": [],
  "ServiceNow": [],
  "UnitedHealth Group": [],
  "Mastercard": [],
  "General Motors (Cruise)": [],
  "Capital One": [],
  "PayPal": [],
  "Workday": [],
  "HubSpot": [],
  "Rivian": [],
  "Bank of America": [],
  "NatWest": [],
  "HSBC": [
    { title: "Consultant Specialist (AI Platform SRE)", techs: "AI Platform SRE, Site Reliability Engineer, Kubernetes", url: "https://apply.careers.hsbc.com/job/Xi'an-Consultant-Specialist-(AI-Platform-SRE)-SN/1352652457", date: "Active 2026" }
  ],
  "Munich Re": [
    { title: "Senior ML Engineer", techs: "ML engineering, MLOps, AWS/Azure, GenAI", url: "https://careers.munichre.com/en/job/toronto/senior-ml-engineer/3342/36833131840", date: "Active 2026" },
    { title: "Intern Artificial Intelligence (m/f/d)", techs: "AI internship", url: "https://careers.munichre.com/", date: "Active 2026" }
  ]
};

/* RESIDENCY_MAP — axis-2 score + reason per company */
const RESIDENCY_MAP = {
  "BigPanda": { score: 5, reason: "Customer event/log telemetry held under contractual data-handling commitments. Multi-tenant inference structurally out." },
  "Varonis": { score: 5, reason: "Cybersecurity vendor whose entire product promise IS data residency. Cannot violate it with their own AI features." },
  "ABInBev": { score: 4, reason: "GDPR + LATAM/APAC data laws across 50+ countries; distributor pricing competitively sensitive." },
  "Qualcomm": { score: 4, reason: "Chip-design IP and customer reference designs are export-control-adjacent and competitively existential." },
  "Jefferies": { score: 4, reason: "FINRA recordkeeping + GDPR for EU clients + MAR market-abuse rules layered." },
  "Mobileye": { score: 4, reason: "OEM customers contractually restrict where fleet driving data can be processed." },
  "Abbott": { score: 5, reason: "PHI under HIPAA + FDA SaMD validation + cross-border medical-data restrictions." },
  "Ford": { score: 4, reason: "Connected-vehicle telematics privacy per region; ADAS data contractually constrained." },
  "Flatiron": { score: 5, reason: "PHI under HIPAA + clinical evidence used in FDA submissions + Roche group data-handling overlay." },
  "American Airlines": { score: 3, reason: "Passenger PII and payment data under PCI; FAA-audited operational decisions. Real but lighter than finance/healthcare." },
  "Monzo Bank": { score: 5, reason: "Public policy: UK customer data hosted in UK only. GDPR + UK-GDPR + PCI DSS layered." },
  "DKB | Deutsche Kreditbank AG": { score: 5, reason: "GDPR + Bundesbank/BaFin supervision; EU-only customer data residency." },
  "TSB Bank": { score: 4, reason: "UK GDPR + PCI DSS + PRA/FCA model-risk framework." },
  "Celonis": { score: 5, reason: "Customer ERP data is the most sensitive enterprise data class; FedRAMP authorization gates US public sector; EU GDPR + DE BDSG layer." },
  "ACA Group": { score: 4, reason: "Public client-data-handling commitment (no external training); GDPR/UK-GDPR cross-border transfers." },
  "F5": { score: 4, reason: "PCI DSS Level 1 across distributed cloud customer footprints; multi-region customer hosting." },
  "Walmart": { score: 4, reason: "Customer + supplier data across US, India, China, LATAM, Africa — each region with its own laws." },
  "ServiceNow": { score: 5, reason: "Customer ITSM/HR/CSM workflow data + FedRAMP High for federal + per-customer data isolation contract." },
  "UnitedHealth Group": { score: 5, reason: "PHI under HIPAA across US/EU/Asia. Director of Architecture verbatim: 'data never leaves the firewall.' Tried Fireworks/Together/Baseten/Modal — all blocked by security." },
  "Mastercard": { score: 5, reason: "PCI DSS on every cardholder transaction globally + regional financial regulation per market + cross-border transfer mechanisms." },
  "General Motors (Cruise)": { score: 4, reason: "Connected-vehicle privacy laws + ADAS data contractual constraints." },
  "Capital One": { score: 4, reason: "PCI DSS + US financial regulation + AWS regional residency overlays." },
  "PayPal": { score: 4, reason: "PCI DSS globally + payment regulator overlays per market + multi-region payment data." },
  "Workday": { score: 5, reason: "Customer HR records + payroll + financial data are sovereign data classes; per-customer data isolation contract." },
  "HubSpot": { score: 3, reason: "Customer CRM data custody + GDPR for EU customers. Real but lighter regulatory regime than financial-services or healthcare." },
  "Rivian": { score: 3, reason: "Connected-vehicle privacy + manufacturing IP; lighter regulatory regime than finance/healthcare." },
  "Bank of America": { score: 5, reason: "PCI DSS + US federal financial supervision + NVIDIA AI Factory air-gap requirements documented." },
  "NatWest": { score: 4, reason: "UK GDPR personal data + 10-year retention + PRA/FCA supervision + cross-border AI flow safeguards." },
  "HSBC": { score: 5, reason: "UK GDPR + EU GDPR + APAC data laws (HK, SG, China) + cross-border safeguards required." },
  "Munich Re": { score: 5, reason: "GDPR + German Federal Data Protection Act (BDSG) + German TDDDG + cross-border reinsurance data." }
};

/* PRIMARY_TEAM — warm-intro attribution list */
const PRIMARY_TEAM = ['Alex Giles', 'Charles Holley', 'Gaby Lorenzi', 'Jason Gelman', 'Brian Schechter', 'Tobias', 'Ross', 'Cassie', 'Tanmaye', 'Ben', 'Hannah', 'Doug', 'Emily', 'Bridget', 'Shuman'];

/* Exports */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ROW_SOURCES, SEGMENTS, CONTACT_MAP, COMPANY_SOURCES, RESIDENCY_MAP, JOB_LISTINGS, PRIMARY_TEAM };
}
