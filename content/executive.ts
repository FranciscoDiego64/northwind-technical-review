export const executiveReadout = {
    title: "CTO Executive Readout",
    subtitle: "First 30 Days",
  
    executivePosition: {
      title: "Executive position",
      text: `Northwind has four near term commitments: keep infrastructure spend flat through holiday traffic growth, pass the Q1 security review, improve product discovery and launch the mobile client.
  
  The immediate focus is to protect these commitments by addressing the highest impact technical risks first, instead of optimizing the platform broadly.`,
    },
  
    whatWeKnow: {
      title: "What we know",
  
      items: [
        {
          area: "Infrastructure cost",
          currentSignal:
            "June spend: $4,970, +38% MoM. Fast Data Transfer and Functions are the largest billing increases.",
          businessImplication:
            "Risk of exceeding the spend target as the holiday traffic grows",
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
            "Search abandonment is the largest identified lost cart driver, search data transfer is +63% MoM.",
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
            "Architectural decisions need to happen before the implementation scales",
        },
      ],
    },
  
    priorities: {
      title: "30-day priorities",
  
      items: [
        {
          number: 1,
          title: "Protect spend through peak traffic",
          text: "Validate the main cost and resource drivers, starting with high-growth routes and /api/recommendations. Establish the holiday expected traffic and spend budget.",
        },
        {
          number: 2,
          title: "Improve product discovery",
          text: "Establish the search → results → product → cart journey and identify the main causes of abandonment before setting the remediation plan.",
        },
        {
          number: 3,
          title: "Secure the wholesale channel path",
          text: "Confirm the Q1 security requirements, identify gaps and assign owners and deadlines to close them.",
        },
        {
          number: 4,
          title: "Prepare for mobile",
          text: "Assess catalog APIs, authentication, caching and web dependencies and agree the architecture required for mobile reuse.",
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
        "Major cost drivers understood, with clear actions underway where needed.",
        "Search funnel understood, with clear improvement actions and measures agreed.",
        "Security gaps mapped to owners, deadlines and required evidence.",
        "Mobile architecture and dependencies agreed.",
        "One clear owner and next action for each key risk.",
      ],
    },
  
    executiveFocus: {
      title: "Executive focus",
      text: "Protect the four business commitments, validate the highest impact technical risks and turn findings into owned actions.",
    },
  };