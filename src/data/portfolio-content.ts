export interface Venture {
  id: string;
  title: string;
  tagline: string;
  role: string;
  stage: "Active Initiative" | "Pre-Launch / Early Validation" | "Research & Concept" | "Under Development";
  category: "Community & Ecosystem" | "Marketplace & Social Impact" | "Business Model Innovation" | "Stealth / Teaser";
  scaleMetric?: { value: string; label: string };
  metrics?: { label: string; value: string }[];
  summary: string;
  context: string;
  problem: string;
  approach: string;
  keyContributions: string[];
  learnings: string[];
  confidential?: boolean;
}

export interface ProfessionalRole {
  id: string;
  title: string;
  organization: string;
  period: string;
  type: string;
  description: string;
  responsibilities: string[];
  keyOutcomes: string[];
}

export interface CompetitionAchievement {
  id: string;
  event: string;
  organizer: string;
  status: "Top 15 in India" | "Finalist" | "Team Selected" | "Round 2 Achieved" | "Active Institutional Engagement" | "Selected" | "Shortlisted";
  category: "Ambassador & Leadership" | "Case Competition" | "Entrepreneurship Challenge";
  highlight?: boolean;
  details: string;
}

export interface AcademicResearch {
  id: string;
  title: string;
  targetVenue: string;
  status: "Work in Progress" | "Empirical Study";
  abstract: string;
  coreInquiries: string[];
  theoreticalAnchors: string[];
  methodologicalApproach: string;
}

export interface InstitutionalRecognition {
  id: string;
  type: "Jury Invitation" | "Letter of Recommendation" | "Institutional Selection";
  title: string;
  authority: string;
  summary: string;
  statusNote: string;
}

export interface CapabilityGroup {
  name: string;
  description: string;
  capabilities: string[];
}

export interface PortfolioData {
  meta: {
    name: string;
    phone: string;
    academicInstitution: string;
    program: string;
    degree: string;
    positioning: string;
    coreThemes: { title: string; desc: string }[];
    editorialManifesto: string;
  };
  about: {
    heading: string;
    paragraphs: string[];
    quickFacts: { label: string; value: string }[];
    operatingMindset: { principle: string; detail: string }[];
    aiAndEmergingTech: string[];
  };
  ventures: Venture[];
  ecosystem: {
    avenor: {
      title: string;
      headline: string;
      roleTitle: string;
      scaleMetric: { value: string; label: string };
      summary: string;
      context: string;
      coreActivities: string[];
      guardrailNote: string;
    };
    mentorship: {
      headline: string;
      summary: string;
      supportProvided: { title: string; desc: string }[];
      supportReceived: { entity: string; domain: string; takeaway: string }[];
    };
  };
  professionalExperience: ProfessionalRole[];
  financeAndMarkets: {
    heading: string;
    subheading: string;
    summary: string;
    ledgerSocietyNote: string;
    pillars: { title: string; desc: string }[];
  };
  competitionsAndRecognition: CompetitionAchievement[];
  campusAmbassadorRoles: { institution: string; program: string; outcome: string }[];
  selectedOpportunities: {
    id: string;
    title: string;
    authority: string;
    nature: string;
    summary: string;
    statusNote: string;
  }[];
  invitationsAndRecommendations: InstitutionalRecognition[];
  research: {
    heading: string;
    subtitle: string;
    activePaper: AcademicResearch;
    intellectualInterests: string[];
  };
  capabilities: CapabilityGroup[];
  contact: {
    heading: string;
    intro: string;
    phone: string;
    academicEmail: string;
    personalEmail: string;
    location: string;
    institution: string;
    socialLinks: { name: string; url: string; handle: string }[];
  };
}

export const PORTFOLIO_DATA: PortfolioData = {
  meta: {
    name: "Jayveer Trivedi",
    phone: "+91 96876 73504",
    academicInstitution: "IIM Bangalore",
    program: "Pursuing Digital Business & Entrepreneurship",
    degree: "BBA, Digital Business & Entrepreneurship",
    positioning: "An entrepreneurial builder connecting ventures, people and opportunities.",
    coreThemes: [
      {
        title: "Building & Exploring",
        desc: "Developing initiatives from first principles, testing market viability, and structuring sustainable business models.",
      },
      {
        title: "Connecting & Convening",
        desc: "Bringing founders, investors, mentors, and student communities into high-trust conversational spaces.",
      },
      {
        title: "Execution & Real Exposure",
        desc: "Learning through frontline commercial development, grassroots market observation, and active case resolution.",
      },
    ],
    editorialManifesto:
      "I start from a problem, talk to the people closest to it, test an early version and learn from the result. My work bridges grassroots market observation, founder ecosystem orchestration, AI-enabled product exploration, and rigorous academic inquiry at IIM Bangalore.",
  },

  about: {
    heading: "The Person Behind the Work",
    paragraphs: [
      "I'm Jayveer Trivedi, an early-stage builder pursuing BBA in Digital Business & Entrepreneurship at IIM Bangalore. My focus centers on exploring how ideas transform into operating businesses, how authentic human relationships unlock commercial opportunities, and how disciplined founder communities catalyze collective growth.",
      "Rather than treating business as a purely abstract classroom exercise, my journey has been grounded in real-world execution: building a working AI-enabled financial learning MVP (MarketVerse), validating a local-services marketplace in Mehsana through primary household and provider interviews (SevaSetu), scaling a 500+ member community of students and builders (Growth Network), co-building a founder discussion platform (Aarambh Network), and operating within a 700+ founder network at Avenor.",
      "At IIM Bangalore, I complement this execution bias with analytical rigor — currently investigating consumer market efficiency and information asymmetry for CURE 2027, exploring decentralized P2P infrastructure architectures, and applying technology to problems that don't yet have an owner.",
    ],
    quickFacts: [
      { label: "Academic Institution", value: "Indian Institute of Management Bangalore (IIM-B)" },
      { label: "Degree Program", value: "BBA, Digital Business & Entrepreneurship" },
      { label: "Current Residence", value: "Mehsana, Gujarat, India" },
      { label: "Working Principle", value: "Build before being asked; learn by talking to the people closest to the problem" },
    ],
    operatingMindset: [
      {
        principle: "Build before being asked",
        detail: "Learn by talking directly to the people closest to the problem rather than relying on abstract assumptions.",
      },
      {
        principle: "Turn ambiguity into action",
        detail: "Formulate the next actionable step rather than waiting for perfect, complete information.",
      },
      {
        principle: "Technology with human judgment",
        detail: "Use AI and modern technology to amplify research and execution speed while keeping judgment and context central.",
      },
      {
        principle: "Substance over activity",
        detail: "Prioritize tangible progress and useful relationships over superficial vanity metrics or performative hype.",
      },
    ],
    aiAndEmergingTech: [
      "AI-enabled products for financial learning and decision-making (demonstrated through MarketVerse MVP).",
      "Emerging technology in clean mobility and distributed energy (modeled via P2P EV Charging architecture).",
      "Exploring practical applications of AI safety and governance where new organizational models can help.",
    ],
  },

  ventures: [
    {
      id: "aarambh-network",
      title: "Aarambh Network",
      tagline: "Bringing founders, ideas and opportunities closer.",
      role: "Co-builder & Community Initiator",
      stage: "Active Initiative",
      category: "Community & Ecosystem",
      scaleMetric: { value: "300+", label: "Founders Convened" },
      metrics: [
        { label: "Active Community", value: "300+ Founders" },
        { label: "Mentors & Speakers", value: "50+ Leaders Engaged" },
        { label: "Primary Format", value: "Founders' Roundtables" },
        { label: "Core Focus", value: "Peer Learning & Connectivity" },
      ],
      summary:
        "An entrepreneurial ecosystem initiative co-built around structured roundtables, practical founder insights, moderated discussions, and high-trust ecosystem connectivity.",
      context:
        "Early-stage entrepreneurs frequently operate in isolation. While networking groups and social media channels exist in abundance, they often devolve into superficial promotion rather than candid problem-solving. Aarambh was conceived to provide a substantive peer-to-peer environment where founders share hard-won operational realities.",
      problem:
        "The fragmentation of the early-stage founder journey, where founders lack trusted sounding boards for operational roadblocks, mentor access, and candid peer feedback.",
      approach:
        "Designed structured Founders' Roundtables, intimate discussion salons, and targeted mentor dialogues. Focused on quality of interaction rather than vanity metrics.",
      keyContributions: [
        "Curated and co-built a cohesive community of 300+ early-stage founders and builders.",
        "Facilitated and hosted Founders' Roundtables focusing on unit economics, hiring, and early traction.",
        "Engaged 50+ speakers, veteran operators, and mentors to conduct hands-on interactive sessions.",
        "Led outreach, session design, questioning, coordination, and community engagement.",
        "Maintained high engagement without algorithmic gimmicks or vanity promotional hype.",
      ],
      learnings: [
        "Founders value vulnerability and candid post-mortems vastly more than rehearsed success speeches.",
        "Community density and trust are built through small, well-moderated cohorts rather than broadcast announcements.",
      ],
    },
    {
      id: "marketverse",
      title: "MarketVerse",
      tagline: "AI-enabled financial learning product for next-generation investors.",
      role: "Founder & Product Builder",
      stage: "Active Initiative",
      category: "Business Model Innovation",
      scaleMetric: { value: "Live MVP", label: "Product Stage" },
      metrics: [
        { label: "Product State", value: "Working Live MVP" },
        { label: "Target Audience", value: "Students & New Investors" },
        { label: "Innovation Focus", value: "AI-Assisted Financial Literacy" },
        { label: "Core Dimension", value: "Risk Awareness & Decision Making" },
      ],
      summary:
        "A working AI-enabled financial learning product designed to make complex market concepts accessible, actionable, and practice-oriented for first-time investors.",
      context:
        "Financial markets present an intimidating barrier to entry for students and beginning investors. Existing tools are either dry textbooks or high-frequency trading terminals filled with confusing jargon and speculative incentives.",
      problem:
        "First-time investors often make avoidable, high-risk financial mistakes due to information asymmetry, overwhelming jargon, and lack of guided decision-making frameworks.",
      approach:
        "Built a working MVP incorporating plain-language market explanations, beginner-friendly screening tools, and simulated decision-making exercises to build genuine risk awareness.",
      keyContributions: [
        "Designed and shipped a functional MVP for first-time investors and student learners.",
        "Integrated AI workflows to translate complex balance sheets and market filings into intuitive plain-language breakdowns.",
        "Implemented interactive screening and risk-awareness modules to prevent premature speculative trading.",
        "Progressed the product through rigorous iterative development and competitive case challenges.",
      ],
      learnings: [
        "Financial literacy requires interactive decision-making feedback loops rather than passive content reading.",
        "AI is most effective when framing risks and edge cases rather than generating speculative stock picks.",
      ],
    },
    {
      id: "sevasetu",
      title: "SevaSetu",
      tagline: "Bridging the gap between local needs and local services.",
      role: "Founder",
      stage: "Pre-Launch / Early Validation",
      category: "Marketplace & Social Impact",
      scaleMetric: { value: "Tier 2/3", label: "Market Context (Mehsana)" },
      metrics: [
        { label: "Market Archetype", value: "Mehsana, Gujarat" },
        { label: "Service Categories", value: "Electricians, Plumbers, Trades" },
        { label: "Validation Stage", value: "Household & Provider Interviews" },
        { label: "Target Problem", value: "Reliability & Discovery Deficit" },
      ],
      summary:
        "A social-impact-oriented local services marketplace concept validated through primary interviews with households and service providers in Mehsana, Gujarat.",
      context:
        "Born out of direct observation and fieldwork in Mehsana, Gujarat. While metropolitan centers have organized service aggregators, residents in Tier-2 and Tier-3 towns still rely heavily on fragmented word-of-mouth directories where skilled technicians struggle for steady discoverability and households struggle with unpredictable reliability.",
      problem:
        "Informal market friction where dependable electricians, plumbers, cleaners, and carpenters remain invisibly siloed, leading to volatile earnings for tradespeople and frustrating service delays for households.",
      approach:
        "Held structured discovery interviews with residential households and local service professionals, translating grassroots findings into an early value proposition, business model, and go-to-market direction.",
      keyContributions: [
        "Conducted on-the-ground exploratory interviews with local tradespeople and residential customers in Mehsana.",
        "Studied both sides of the marketplace, examining onboarding friction, cash vs. UPI preferences, and pricing dynamics.",
        "Modeled lightweight marketplace discovery mechanisms optimized for localized neighborhood clusters.",
        "Formulated unit-economic hypotheses addressing seasonal demand fluctuations and quality-guarantee incentives.",
      ],
      learnings: [
        "In smaller cities, marketplace liquidity is hyper-local; trust cannot be solved by digital ratings alone without neighborhood validation.",
        "Service professionals prioritize predictable weekly volume over peak commission windfalls.",
      ],
    },
    {
      id: "growth-network",
      title: "Growth Network",
      tagline: "A growing network built around people, ideas and connections.",
      role: "Founder & Community Builder",
      stage: "Active Initiative",
      category: "Community & Ecosystem",
      scaleMetric: { value: "500+", label: "Community Members" },
      metrics: [
        { label: "Community Scale", value: "500+ Members" },
        { label: "Member Profile", value: "Students, Founders, Professionals" },
        { label: "Focus", value: "Collaborative Growth & Opportunities" },
        { label: "Status", value: "Distinct Peer Network" },
      ],
      summary:
        "A 500+ member entrepreneurship community uniting students, founders, and working professionals around peer learning, curated opportunities, and network-driven growth.",
      context:
        "Maintained as an independent community vehicle alongside Aarambh Network, specifically tailored to broader entrepreneurial enthusiasts, students, and ambitious young operators seeking peer accountability and mutual growth.",
      problem:
        "Young builders often lack direct bridges to peers outside their immediate college or geographic bubble, limiting cross-pollination of skills.",
      approach:
        "Designed recurring thematic discussions, curated opportunities, and peer-learning interactions, learning how community value compounds through consistency and useful connections.",
      keyContributions: [
        "Built and scaled an active network of 500+ ambitious members from scratch.",
        "Curated discussions around emerging technology trends, market entry tactics, and career acceleration.",
        "Connected individual members to relevant freelance, project, and co-founder opportunities.",
      ],
      learnings: [
        "Sustained network momentum requires clear communication guardrails and proactive spotlighting of member milestones.",
      ],
    },
    {
      id: "p2p-charging",
      title: "P2P EV Charging Model",
      tagline: "Rethinking access through a peer-to-peer infrastructure model.",
      role: "Concept & Market Researcher",
      stage: "Research & Concept",
      category: "Business Model Innovation",
      scaleMetric: { value: "Concept", label: "Exploratory Architecture" },
      metrics: [
        { label: "Sector", value: "Clean Mobility & Distributed Energy" },
        { label: "Focus", value: "Supply-Demand Matchmaking" },
        { label: "Key Dimension", value: "Feasibility & Settlement Friction" },
        { label: "Maturity", value: "Conceptual System Model" },
      ],
      summary:
        "A researched peer-to-peer EV charging marketplace model connecting charging-point owners with nearby EV commuters at the intersection of mobility, clean energy, and distributed infrastructure.",
      context:
        "Public charging station installation requires high capital expenditure and encounters real-estate bottlenecks. Concurrently, thousands of private home and office chargers sit idle for 18+ hours per day.",
      problem:
        "Urban EV adoption is bottlenecked by range anxiety and sparse fast-charging points, while existing private charging infrastructure remains severely underutilized.",
      approach:
        "Mapped the end-to-end multi-sided stakeholder architecture: residential hosts (power supply & parking space), EV drivers (demand & booking), utility grid operators (load balancing), and platform governance (verification & billing).",
      keyContributions: [
        "Structured the bilateral incentive framework for residential hosts versus transient EV drivers.",
        "Analyzed operational obstacles including domestic electricity tariff regulations and parking security access.",
        "Formulated unit-level settlement mechanics accounting for energy metering and slot reservation deposits.",
        "Identified regulatory and compliance constraints within the Indian state electricity distribution framework.",
      ],
      learnings: [
        "The primary challenge in P2P charging is not hardware compatibility; it is regulatory tariff classification and residential association (RWA) permissions.",
      ],
    },
    {
      id: "eye-plus",
      title: "Eye+",
      tagline: "Next-generation accessibility technology.",
      role: "Initiator",
      stage: "Under Development",
      category: "Stealth / Teaser",
      summary:
        "An early-stage initiative currently under private conceptual development exploring assistive technologies.",
      context: "Details remain restricted to protect proprietary design concepts and ongoing research inquiries.",
      problem: "Confidential.",
      approach: "Early-stage prototyping and accessibility validation.",
      keyContributions: ["Conceptual architecture and preliminary accessibility scoping."],
      learnings: ["Proprietary."],
      confidential: true,
    },
  ],

  ecosystem: {
    avenor: {
      title: "Avenor",
      headline: "Connecting founders, investors and opportunities across the startup ecosystem.",
      roleTitle: "Business Development & Partnerships",
      scaleMetric: { value: "700+", label: "Founder Network Ecosystem" },
      summary:
        "Direct practical exposure to large-scale startup networking, founder outreach, relationship development, and investor ecosystem connectivity across a network of 700+ founders.",
      context:
        "Avenor operates an expansive network of 700+ founders. My role centered on active ecosystem engagement: conducting targeted founder outreach, executing onboarding conversations, and supporting the partnership lifecycle from initial outreach and pitch conversations through follow-up and onboarding.",
      coreActivities: [
        "Founder & Investor Engagement: Engaged founders, investors, and startup teams across a network of 700+ founders.",
        "Partnership Lifecycle: Supported the partnership lifecycle from first outreach and pitch conversations through follow-up and onboarding.",
        "High-Velocity Navigation: Operated within a dynamic startup ecosystem navigating incomplete information and multiple stakeholder priorities.",
        "Relationship Management: Nurtured ongoing rapport with startup teams, ensuring timely follow-ups and high responsiveness.",
      ],
      guardrailNote:
        "Associated with the reported 700+ founder network of Avenor. Focuses strictly on relational facilitation, outreach, and operational support; does not claim personal network ownership or direct venture capital management.",
    },
    mentorship: {
      headline: "Supporting founders beyond my own ventures.",
      summary:
        "A two-way philosophy of continuous ecosystem participation: offering practical, hands-on support to early-stage peers while actively learning from seasoned operators, founders, and subject-matter professionals.",
      supportProvided: [
        {
          title: "Early-Stage Business Thinking",
          desc: "Helping nascent founders articulate their core value proposition, refine customer discovery questions, and avoid premature scaling traps.",
        },
        {
          title: "Business Development & Outreach",
          desc: "Sharing tactical frameworks for cold outreach, lead conversations, partnership framing, and structured follow-up cadences.",
        },
        {
          title: "Ecosystem Introductions",
          desc: "Connecting founders with relevant peers, community circles, and practical operational resources to unblock progress.",
        },
      ],
      supportReceived: [
        {
          entity: "Vittape Founder",
          domain: "Fintech & IIT Madras Ecosystem",
          takeaway: "Deep insights into regulatory navigation, financial product architecture, and rigorous technical diligence.",
        },
        {
          entity: "Marketing Professionals & Agencies",
          domain: "Brand Narrative & Growth Channels",
          takeaway: "Sharpening positioning strategy, organic distribution mechanisms, and message clarity.",
        },
        {
          entity: "Chartered Accountancy Network",
          domain: "Corporate Governance & Compliance",
          takeaway: "Foundational understanding of statutory compliance, capitalization tables, and fiscal discipline.",
        },
      ],
    },
  },

  professionalExperience: [
    {
      id: "kalnet-bde",
      title: "Business Development Executive",
      organization: "Kalnet",
      period: "Verified Professional Experience",
      type: "Commercial Execution",
      description:
        "Contributed to business development and sales execution through professional outreach, coordination, and follow-through in a team environment.",
      responsibilities: [
        "Executed professional outbound communication and prospecting across identified business targets.",
        "Communicated with prospects and stakeholders to clarify concrete business requirements.",
        "Moved client tasks systematically from initial discussion to commercial execution.",
        "Managed systematic follow-up cadences, maintaining high pipeline hygiene and responsiveness.",
        "Collaborated on refining sales messaging and objection-handling narratives based on real prospect feedback.",
      ],
      keyOutcomes: [
        "Developed strong intuition for B2B buyer psychology, value articulation, and sales negotiation dynamics.",
        "Grounded theoretical marketing concepts in everyday commercial execution.",
      ],
    },
    {
      id: "edu-startup-outreach",
      title: "Marketing & Outreach Contributor",
      organization: "Education & Skill-Development Startup",
      period: "Startup Experience",
      type: "Community Growth",
      description:
        "Supported marketing and outreach for an early-stage education startup, expanding visibility and engagement across student communities.",
      responsibilities: [
        "Conducted student outreach and campaign mobilization across college networks.",
        "Drafted messaging tailored to student career aspirations and skill acquisition.",
        "Coordinated with student ambassadors to drive attendance for educational workshops.",
      ],
      keyOutcomes: [
        "Expanded program visibility across student circles with measurable enrollment upticks.",
      ],
    },
  ],

  financeAndMarkets: {
    heading: "Finance, Markets & Investment Thinking",
    subheading: "Examining how capital allocation, market mechanisms, and corporate strategy intersect.",
    summary:
      "A disciplined, analytical engagement with equity markets, macroeconomic trends, and corporate financial health. Grounded in both practical product exploration (MarketVerse) and peer learning communities.",
    ledgerSocietyNote:
      "Also founded The Ledger Society — a peer-learning community around investing, business, and entrepreneurship, focused on practical knowledge-sharing and understanding how students learn market fundamentals.",
    pillars: [
      {
        title: "Market Mechanics & Capital Flows",
        desc: "Studying market liquidity, macroeconomic indicators, monetary policy shifts, and how capital cycles affect venture valuations.",
      },
      {
        title: "Financial Statement Analysis",
        desc: "Dissecting cash flows, working capital cycles, debt covenants, and unit economics to assess underlying business quality.",
      },
      {
        title: "AI in Financial Learning (MarketVerse)",
        desc: "Exploring how AI can demystify complex financial filings and empower first-time investors with risk awareness.",
      },
    ],
  },

  competitionsAndRecognition: [
    {
      id: "tvs-credit-epic",
      event: "TVS Credit E.P.I.C. 8.0",
      organizer: "TVS Credit",
      status: "Top 15 in India",
      category: "Ambassador & Leadership",
      highlight: true,
      details:
        "Recognized among the Top 15 Campus Ambassadors across India for standout campus engagement, campaign execution, and student mobilization.",
    },
    {
      id: "marketverse-progression",
      event: "MarketVerse Innovation Development",
      organizer: "Competitive Innovation & FinTech Challenge",
      status: "Round 2 Achieved",
      category: "Case Competition",
      highlight: true,
      details:
        "Progressed an AI-enabled financial learning product through competitive innovation work and multi-round evaluations.",
    },
    {
      id: "iit-madras-comp",
      event: "National Business Case Challenge",
      organizer: "IIT Madras",
      status: "Finalist",
      category: "Case Competition",
      highlight: true,
      details:
        "Advanced to the national finalist stage following rigorous multi-round case evaluations focusing on market strategy and business feasibility.",
    },
    {
      id: "iit-dhanbad-comp",
      event: "Entrepreneurship & Strategy Summit",
      organizer: "IIT (ISM) Dhanbad",
      status: "Finalist",
      category: "Case Competition",
      details:
        "Reached the finalist stage, presenting structured business models and operational implementation roadmaps to an evaluation panel.",
    },
    {
      id: "nsut-fintechstico",
      event: "Fintechstico",
      organizer: "Netaji Subhas University of Technology (NSUT)",
      status: "Team Selected",
      category: "Case Competition",
      details:
        "Team selected for competitive case rounds, developing analytical solutions for contemporary financial technology challenges.",
    },
    {
      id: "iit-bombay-nec",
      event: "National Entrepreneurship Challenge (NEC)",
      organizer: "IIT Bombay",
      status: "Active Institutional Engagement",
      category: "Entrepreneurship Challenge",
      details:
        "Active team participation in India's premier year-long entrepreneurship challenge, organizing campus initiatives and executing structured entrepreneurship-cell benchmarking tasks.",
    },
  ],

  campusAmbassadorRoles: [
    { institution: "TVS Credit", program: "E.P.I.C. 8.0 Campus Ambassador", outcome: "Top 15 in India Selection" },
    { institution: "Unstop", program: "Campus Ambassador Programme", outcome: "Appointed Ambassador" },
    { institution: "IIM Calcutta", program: "Institutional Outreach Initiative", outcome: "Selected Campus Representative" },
    { institution: "IIT Roorkee", program: "National Flagship Summit", outcome: "Selected Campus Partner" },
    { institution: "Builder Hub", program: "Ecosystem Builder Programme", outcome: "Selected Network Contributor" },
  ],

  selectedOpportunities: [
    {
      id: "nif-iapp",
      title: "National Innovation Foundation (NIF) — IAPP",
      authority: "Department of Science and Technology, Govt. of India",
      nature: "Selection & Interview Journey",
      summary:
        "Progressed through competitive evaluation and interview rounds for the Innovation Associates & Professional Programme (IAPP), engaging with grassroots technological innovation evaluation.",
      statusNote: "Interview and selection journey reached; documented as institutional selection progression.",
    },
  ],

  invitationsAndRecommendations: [
    {
      id: "evaluathon-jury",
      type: "Jury Invitation",
      title: "Invited Jury Member — Faculty Startup Evaluathon 2026",
      authority: "Faculty Startup Evaluathon Committee",
      summary:
        "Formally invited to serve as an evaluation jury member to assess early-stage startup concepts, venture viability, and business model presentations.",
      statusNote: "Formal invitation received; designated for upcoming evaluative sessions.",
    },
    {
      id: "lor-kunal-kumar",
      type: "Letter of Recommendation",
      title: "Letter of Recommendation",
      authority: "Kunal Kumar — President, UNIVENTA MUN",
      summary:
        "Attesting to demonstrated leadership, institutional coordination, diplomatic problem-solving, and dedication to youth initiative development.",
      statusNote: "Verified formal letter of recommendation on record.",
    },
    {
      id: "lor-louise-arbour",
      type: "Letter of Recommendation",
      title: "Letter of Recommendation",
      authority: "Her Excellency the Right Honourable Louise Arbour",
      summary:
        "Recognizing international commitment, intellectual curiosity, and exemplary participation in global institutional engagement.",
      statusNote: "Verified archival letter of recommendation on record.",
    },
  ],

  research: {
    heading: "Research & Intellectual Inquiries",
    subtitle: "Investigating business problems through academic discipline and empirical inquiry.",
    activePaper: {
      id: "cure-2027-paper",
      title: "Information Asymmetry and Market Efficiency: An Empirical Study of Consumer Markets",
      targetVenue: "CURE 2027 (Research Paper in Development)",
      status: "Work in Progress",
      abstract:
        "This empirical research investigates how structural information disparities between buyers and sellers distort consumer decision-making and impair market clearing efficiency in modern fragmented markets. Grounded in microeconomic information theory, the study models the role of pricing transparency, digital intermediary discovery, and signaling mechanisms in restoring consumer trust.",
      coreInquiries: [
        "How do localized information voids affect consumer price elasticity and supplier markups in non-standardized service trades?",
        "To what degree do digital aggregation platforms reduce search friction without creating new principal-agent distortions?",
        "What verification mechanisms most effectively substitute for institutional certification in low-trust transaction environments?",
      ],
      theoreticalAnchors: [
        "Akerlof's Information Asymmetry & Quality Uncertainty",
        "Stigler's Economics of Information & Search Costs",
        "Microeconomic Price Dispersion in Segmented Markets",
      ],
      methodologicalApproach:
        "Combining localized consumer survey data across Tier-2/3 retail clusters with comparative transaction-friction modeling.",
    },
    intellectualInterests: [
      "Information Economics & Market Efficiency",
      "AI-Enabled Learning & Decision-Making Products",
      "Venture Capital & Capital Allocation Mechanics",
      "Clean Mobility & Distributed Infrastructure (P2P Charging)",
      "Grassroots Entrepreneurship & Social Mobility",
      "AI Safety & Governance in Emerging Technology",
    ],
  },

  capabilities: [
    {
      name: "Market Discovery & Primary Research",
      description: "From grassroots interviews to early customer and provider validation.",
      capabilities: [
        "Customer & Provider Discovery Interviews",
        "Problem Framing & Need Synthesis",
        "Informal Market Friction Analysis",
        "Early Value Proposition Formulation",
        "Go-to-Market Hypothesis Testing",
      ],
    },
    {
      name: "Product & Venture Building",
      description: "Prototyping MVPs and exploring multi-sided business models.",
      capabilities: [
        "AI-Enabled Learning MVP Architecture (MarketVerse)",
        "Beginner-Friendly Feature Design",
        "Risk-Aware Decision Modeling",
        "Multi-Sided Marketplace Dynamics (SevaSetu)",
        "P2P Distributed Infrastructure Modeling",
      ],
    },
    {
      name: "Business Development & Partnerships",
      description: "Frontline commercial execution and relationship building.",
      capabilities: [
        "Professional Outbound Prospecting (Kalnet)",
        "Requirements Clarification & Follow-through",
        "700+ Founder Network Engagement (Avenor)",
        "Partnership Lifecycle & Pitch Conversations",
        "Stakeholder Coordination & Onboarding",
      ],
    },
    {
      name: "Community Building & Leadership",
      description: "Convening communities around shared goals and high trust.",
      capabilities: [
        "500+ Member Community Scaling (Growth Network)",
        "Founders' Roundtable Coordination (Aarambh Network)",
        "Peer-Learning Environment Design (The Ledger Society)",
        "National Campus Representation (TVS Credit Top 15)",
        "Session Design & Questioning Moderation",
      ],
    },
    {
      name: "Finance & Market Analysis",
      description: "Financial curiosity grounded in enterprise valuation and capital mechanics.",
      capabilities: [
        "Financial Statement Interpretation",
        "Market Dynamics & Capital Flow Tracking",
        "Unit Economics & Margin Modeling",
        "Macroeconomic Policy Analysis",
        "Thematic Investment Exploration",
      ],
    },
    {
      name: "Research & Academic Strategy",
      description: "Rigorous academic inquiry and strategic problem solving.",
      capabilities: [
        "Empirical Research Formulation (CURE 2027)",
        "Information Asymmetry & Market Efficiency Modeling",
        "Case Competition Strategic Analysis",
        "Competitive Landscape Mapping",
        "Tools: Excel, PowerPoint, Canva, Notion, Claude, Gemini",
      ],
    },
  ],

  contact: {
    heading: "Let's Start a Conversation",
    intro:
      "Whether you are exploring an early-stage venture, interested in founder roundtable collaborations, discussing AI-enabled learning models, or seeking an energetic builder with an execution mindset — I welcome thoughtful dialogue.",
    phone: "+91 96876 73504",
    academicEmail: "jayveer.trivedi26@iimb.ac.in",
    personalEmail: "jayveer886699@gmail.com",
    location: "Mehsana, Gujarat, India",
    institution: "IIM Bangalore (Indian Institute of Management Bangalore)",
    socialLinks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jayveer-trivedi-7a46423b8?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        handle: "jayveer-trivedi-7a46423b8",
      },
      { name: "Academic Profile", url: "#", handle: "IIM Bangalore DBE" },
    ],
  },
};
