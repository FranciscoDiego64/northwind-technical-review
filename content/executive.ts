export const executiveReadout = {
    title: "CTO Executive Readout",
    subtitle: "First 30 Days",
  
    executivePosition: {
      title: "Executive position",
      text: `Northwind has four near term commitments: keep infrastructure spend flat through holiday traffic growth, pass the Q1 security review, improve product discovery, and launch the mobile client.
  
  The immediate focus is to protect these commitments by addressing the highest-impact technical risks first, rather than optimizing the platform broadly.`,
    },
  
    whatWeKnow: {
      title: "What we know",
  
      items: [
        {
          area: "Infrastructure cost",
          currentSignal:
            "June spend: $4,970, +38% MoM. Fast Data Transfer and Functions are the largest billing increases.",
          businessImplication:
            "Risk of exceeding the spend target as holiday traffic grows",
        },
        {
          area: "Compute",
          currentSignal:
            "/api/recommendations: 950K invocations, +138%, with 12% CPU throttling.",
          businessImplication:
            "Scalability and cost require validation before further traffic growth",
        },
        {
          area: "Search",
          currentSignal:
            "Search abandonment is the largest identified lost-cart driver; search data transfer is +63% MoM.",
          businessImplication: "Direct conversion risk",
        },
        {
          area: "Security",
          currentSignal: "Q1 review is a prerequisite for the wholesale channel",
          businessImplication: "Potential channel launch dependency",
        },
        {
          area: "Mobile",
          currentSignal: "No mobile work has started",
          businessImplication:
            "Architectural decisions need to happen before implementation scales",
        },
      ],
    },
  
    priorities: {
      title: "30-day priorities",
  
      items: [
        {
          number: 1,
          title: "Protect spend through peak traffic",
          text: "Validate the main cost and resource drivers, starting with high-growth routes and /api/recommendations. Agree the holiday traffic assumptions and spend budget.",
        },
        {
          number: 2,
          title: "Improve product discovery",
          text: "Baseline the search → results → product → cart journey and identify the primary causes of abandonment before selecting remediation.",
        },
        {
          number: 3,
          title: "Secure the wholesale-channel path",
          text: "Map the Q1 review requirements to current controls, identify gaps, and assign remediation owners and deadlines.",
        },
        {
          number: 4,
          title: "De-risk mobile",
          text: "Assess catalog APIs, authentication, caching and web dependencies, and agree the architecture required for mobile reuse.",
        },
      ],
    },
  
    decisions: {
      title: "Decisions / alignment needed",
  
      items: [
        "Spend: Agree what “flat” infrastructure spend means and the expected holiday traffic profile.",
        "Security: Confirm review scope and date.",
        "Ownership: Confirm product and engineering owners for search and mobile readiness.",
      ],
    },
  
    success: {
      title: "What success looks like after 30 days",
  
      items: [
        "Major cost drivers validated and remediation underway where required.",
        "Search funnel baseline established with measurable improvement actions.",
        "Security gaps mapped to owners, deadlines and required evidence.",
        "Mobile architecture and dependencies agreed.",
        "One clear owner and next action for each material risk.",
      ],
    },
  
    executiveFocus: {
      title: "Executive focus",
      text: "Protect the four business commitments, validate the highest-impact technical risks, and turn findings into owned actions.",
    },
  };