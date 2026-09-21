export const accountPlan = {
    title: "Technical Account Plan",
    subtitle: "First 30 Days",
  
    accountObjectives: {
      title: "Account objectives",
  
      intro: `Northwind has four business commitments for the year:`,
  
      objectives: [
        "Keep infrastructure spend flat through the holiday season while traffic grows.",
        "Pass the Q1 customer-data security review to enable the new enterprise wholesale channel.",
        "Improve product discovery and reduce search-related cart abandonment.",
        "Launch a mobile client against the existing product catalog by mid-year.",
      ],
  
      closing:
        "The first 30 days will focus on validating the highest impact technical risks, establishing ownership and turning confirmed findings into measurable actions.",
    },
  
    priorities: {
      title: "1. Priorities and sequencing",
  
      items: [
        {
          priority: 1,
          businessGoal: "Infrastructure spend",
          work: "Investigate the main drivers of the recent cost increase, focusing on Fast Data Transfer, Functions, high-growth routes and /api/recommendations.",
          dependencies:
            "Engineering, traffic forecast, agreed spend target",
          impactIfUnmet:
            "Higher infrastructure costs as traffic grows and increased peak-season risk",
          expectedReturn:
            "Clear understanding of consumption drivers and an actionable path to control avoidable spend",
        },
        {
          priority: 2,
          businessGoal: "Product discovery",
          work: "Establish the search-to-cart funnel and identify the main contributors to search abandonment.",
          dependencies: "Product/search owner, analytics, engineering",
          impactIfUnmet: "Continued lost-cart opportunities",
          expectedReturn:
            "Reduced search abandonment and improved search-to-cart conversion",
        },
        {
          priority: 3,
          businessGoal: "Security review",
          work: "Map Q1 review requirements to the current architecture, controls and evidence.",
          dependencies:
            "Security, engineering, review criteria and deadline",
          impactIfUnmet: "Risk of delaying the wholesale channel launch",
          expectedReturn: "Clear remediation plan and review readiness",
        },
        {
          priority: 4,
          businessGoal: "Mobile readiness",
          work: "Assess the existing catalog architecture, APIs and dependencies for reuse by the mobile client.",
          dependencies: "Mobile, product and engineering",
          impactIfUnmet: "Late architectural discovery and launch risk",
          expectedReturn:
            "Agreed architecture, dependencies and implementation path",
        },
      ],
  
      sequencing:
        "Cost and search begin immediately. Security readiness runs in parallel because of its external deadline. Mobile starts with architecture discovery while the other workstreams progress.",
    },
  
    workstreams: [
      {
        number: 2,
        title: "Infrastructure Spend & Scalability",
  
        currentStateTitle: "Current signal",
  
        currentState: `June infrastructure spend was $4,970, up 38% month over month, with Fast Data Transfer and Functions representing the largest billing increases. Several high-volume routes also experienced substantial growth.
  
  The clearest resource pressure signal is /api/recommendations, with 950K invocations, up 138%, peak memory at approximately 96% of provisioned memory, and 12% CPU throttling. It currently has no timeouts and a p95 latency of 260ms.`,
  
        actions: [
          "Establish the relationship between traffic growth, function execution, data transfer and cost.",
          "Prioritize /, product pages and /api/recommendations.",
          "Validate whether caching, data-fetching patterns, payload size or recommendation processing are contributing to avoidable consumption.",
          "Review middleware scope and revalidation activity as secondary efficiency checks.",
          "Agree the expected holiday traffic profile and infrastructure spend budget.",
        ],
  
        dependencies:
          "Engineering owners, traffic forecast, expected workload growth and an agreed definition of the required spend target.",
  
        successMeasures: [
          "Major consumption drivers are understood and documented.",
          "Confirmed inefficiencies have an owner and remediation plan.",
          "The holiday spend target is agreed.",
          "Critical workloads have been assessed against expected traffic growth.",
        ],
      },
  
      {
        number: 3,
        title: "Product Discovery & Search",
      
        currentStateTitle: "Current signal",
      
        currentState:
          "Search abandonment is currently Northwind's largest identified contributor to lost carts. Search related Fast Data Transfer also increased 63% month over month, providing a technical signal to investigate alongside the business funnel.",
      
        actionsTitle: "Actions",
      
        actionsIntro: "Establish the end-to-end journey:",
      
        actionsLead: "Search → Results → Product → Cart",
      
        baseline: [
          "search abandonment",
          "zero-result searches",
          "search latency and errors",
          "result interaction",
          "search-to-cart conversion",
        ],
      
        actionsClosing:
          "Use these findings to determine if the primary issue is relevance, technical performance, rendering or another part of the customer journey before selecting a corrective action.",
      
        dependencies:
          "Product/search ownership, analytics data and engineering support.",
      
        impactIfUnmet:
          "Continued search abandonment represents a direct risk to product discovery and conversion.",
      
        successMeasures: [
          "Search funnel baseline established.",
          "Main contributors to abandonment identified.",
          "Improvement actions agreed with clear ownership.",
          "Progress measured through abandonment and search-to-cart conversion.",
        ],
      },
  
      {
        number: 4,
        title: "Security Readiness",
  
        currentStateTitle: "Current state",
  
        currentState:
          "The available usage data does not establish readiness for the Q1 security review. Readiness therefore needs to be assessed directly against the review requirements, architecture and existing controls.",
        
        actionsTitle: "Actions",

        actionsIntro: "Create a security readiness tracker:",
  
        actionsLead:
          "Requirement → Current state → Gap → Owner → Remediation → Evidence → Deadline",
  
        actionsClosing:
          "Prioritize requirements that could block the wholesale channel launch and involve the appropriate technical specialists where deeper assessment is required.",
  
        dependencies:
          "Northwind security and engineering teams, confirmed review criteria and review date.",
  
        impactIfUnmet:
          "Failure to close a material security requirement could delay the wholesale channel launch and its associated business opportunity.",
  
        successMeasures: [
          "All material requirements have an owner and deadline.",
          "Critical gaps are actively being remediated.",
          "Required evidence is identified and prepared ahead of the review.",
        ],
      },
  
      {
        number: 5,
        title: "Mobile Readiness",
  
        currentStateTitle: "Current state",
  
        currentState:
          "No mobile work has started. The immediate priority is therefore architectural readiness rather than implementation.",

       

        actionsIntro:
          "Assess the existing catalog architecture with particular attention to:",
  
        baseline: [
          "API contracts and ownership",
          "authentication",
          "caching and data-fetching patterns",
          "dependencies on the existing web application",
          "performance requirements",
          "versioning and future extensibility",
        ],
  
        actionsClosing:
          "Document the architectural gaps and decisions that need to be resolved before implementation begins.",
  
        dependencies: "Mobile, product and engineering teams.",
  
        impactIfUnmet:
          "Late architectural discovery could increase implementation effort and put the mid-year launch at risk.",
  
        successMeasures: [
          "Mobile architecture agreed.",
          "Dependencies and gaps documented.",
          "Owners identified.",
          "Implementation sequence established.",
        ],
      },
    ],
  
    first30Days: {
      title: "6. First 30 Days",
  
      weeks: [
        {
          title: "Week 1 — Align & Baseline",
  
          items: [
            "Confirm business targets, deadlines and owners.",
            "Establish the holiday traffic forecast and spend target.",
            "Baseline the search funnel.",
            "Confirm security review requirements and date.",
            "Map mobile stakeholders and existing catalog dependencies.",
          ],
        },
  
        {
          title: "Week 2 — Validate",
  
          items: [
            "Investigate the major cost and resource signals.",
            "Trace the highest growth routes and /api/recommendations.",
            "Analyse the search funnel.",
            "Validate security gaps against the review requirements.",
            "Complete the initial mobile architecture assessment.",
          ],
        },
  
        {
          title: "Weeks 3–4 — Action",
  
          items: [
            "Drive remediation for confirmed cost and performance issues.",
            "Agree and begin the first search improvements.",
            "Launch the security remediation plan.",
            "Finalize mobile architecture decisions.",
            "Engage Vercel specialists where deeper technical execution or assessment is required.",
          ],
        },
      ],
    },
  
    operatingModel: {
      title: "7. Account Operating Model",
  
      intro:
        "The account will be managed around business outcomes rather than individual technical requests.",
  
      cadence: [
        {
          title: "Weekly",
          items: [
            "Technical risks and actions",
            "Dependencies and blockers",
            "Incident or escalation follow-up",
          ],
        },
  
        {
          title: "Monthly",
          items: [
            "Progress against the four business commitments",
            "Usage and cost trends",
            "Adoption, performance and emerging risks",
          ],
        },
  
        {
          title: "Escalation",
          text: "Material issues will be flagged early with clear customer impact, ownership, next action and communication plan.",
        },
      ],
    },
  
    thirtyDayOutcome: {
      title: "8. 30-Day Outcome",
  
      intro: "At the end of the first month, Northwind should have:",
  
      items: [
        "A validated cost-control plan for the holiday period.",
        "Clear ownership of the highest impact technical risks.",
        "A measurable search baseline and agreed improvement actions.",
        "A security readiness plan tied to the Q1 review requirements.",
        "An agreed architectural path for mobile with dependencies and owners.",
      ],
  
      closing:
        "The objective is not to optimize every available metric. It is to focus engineering and specialist attention on the technical issues most directly connected to Northwind's four business commitments, validate those issues with the right data and turn them into owned actions.",
    },
  };