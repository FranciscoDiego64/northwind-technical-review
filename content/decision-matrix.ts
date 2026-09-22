export const decisionMatrix = {
    title: "Inbound Decision Matrix",
  
    introduction:
      "Prioritization is based on customer impact, urgency and alignment with Northwind's business commitments. Routing reflects the team best positioned to execute, while the TAM retains ownership of the customer experience and overall coordination.",
  
    items: [
      {
        order: 1,
        request: "P2 — Checkout latency sharply up since yesterday",
        priority: "Immediate",
        tamAction:
          "Establish customer impact, scope, timeline and current mitigation. Coordinate the technical response and keep Northwind informed until everything is stable.",
        routing: "CSE / Engineering as required",
        why: "Checkout is critical to revenue, so an active performance issue needs immediate attention and clear ownership.",
      },
  
      {
        order: 2,
        request: "Cost anomaly in usage dashboard that nobody flagged",
        priority: "Immediate",
        tamAction:
          "Validate the anomaly, quantify its impact and connect it to the existing cost investigation. Establish an owner and next action.",
        routing: "Engineering / relevant Vercel specialists",
        why: "Directly relates to Northwind's commitment to keep infrastructure spend flat.",
      },
  
      {
        order: 3,
        request: "Failed deploy support ticket sent directly to TAM",
        priority: "Immediate",
        tamAction:
          "Acknowledge the request, determine if it's blocking a critical workload, then move it into the appropriate support process. Stay involved if the issue has a wider impact on the account.",
        routing: "CSE",
        why: "The issue needs prompt ownership, but support tickets and SLAs belong with CSE rather than the TAM.",
      },
  
      {
        order: 4,
        request: "“When is feature X shipping?” for a board deck",
        priority: "High visibility",
        tamAction:
          "Confirm what the customer needs, check the roadmap with Product and communicate only what is confirmed.",
        routing: "Product; AE for commercial questions",
        why: "Board visibility makes the request important, but roadmap commitments belong with Product.",
      },
  
      {
        order: 5,
        request: "Training for newly hired frontend team",
        priority: "Planned",
        tamAction:
          "Understand the team's capability gap and desired outcome, then arrange the appropriate training.",
        routing: "DSE",
        why: "Important for adoption and team capability, but it is not an immediate operational risk.",
      },
  
      {
        order: 6,
        request: "Join Tue/Thu standups and pair on migration",
        priority: "Reshape request",
        tamAction:
          "Clarify the migration outcome and blockers. Join key technical discussions where the TAM adds value, but avoid becoming part of the day-to-day migration work.",
        routing: "FDE / PS if hands-on work is required",
        why: "The underlying need may be valid, but recurring pairing and production work are outside the TAM operating model.",
      },
  
      {
        order: 7,
        request: "Question from another BU outside the covered workload",
        priority: "Route / clarify",
        tamAction:
          "Confirm the workload and scope, then connect the customer with the right technical owner.",
        routing: "SA",
        why: "Maintains account continuity while respecting workload ownership.",
      },
    ],
  
    operatingPrinciple: {
      title: "Operating principle",
      text: "The TAM owns the customer outcome, not every piece of execution. Requests are acknowledged and given a clear path forward, while Support, Engineering, Product, DSE, FDE, PS and SA retain responsibility for the work that belongs to them.",
    },
  };