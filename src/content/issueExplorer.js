/**
 * ISSUE EXPLORER — DATA MODEL
 *
 * Educational navigation only. Nothing here is legal advice, and no result
 * predicts an outcome or forms an attorney-client relationship. See
 * OPERATING_RULES.md #10.
 *
 * `promoted: false` paths are architected but intentionally not surfaced in
 * the default path picker (see docs/SITE_V2_SPEC.md 3.5 — Greece lane).
 */

const CONTACT_NOTE =
  "This may warrant individual legal advice. Nothing here is legal advice or forms an attorney-client relationship — reach out to Alex directly to discuss your specific situation.";

export const ISSUE_EXPLORER_PATHS = [
  {
    id: "nil-college-sports",
    label: "NIL + College Sports",
    kicker: "NIL / COLLEGE ATHLETICS",
    description:
      "Name, image and likeness deals, transfers, and revenue-sharing questions for college athletes and their families.",
    promoted: true,
    personaStep: {
      question: "Who are you?",
      options: [
        { id: "athlete", label: "Athlete" },
        { id: "parent", label: "Parent / Family" },
        { id: "agent", label: "Agent / Advisor" },
        { id: "brand", label: "Brand / Business" },
        { id: "other", label: "Other" },
      ],
    },
    issueStep: {
      question: "What are you dealing with?",
      options: [
        {
          id: "nil-agreement",
          label: "NIL agreement",
          whatMatters: [
            "Whether the agreement is exclusive and how long it locks you in",
            "How deliverables, usage rights, and territory are defined",
            "Termination, morals, and non-disparagement clauses",
            "How the deal interacts with school, conference, and NIL-collective rules",
          ],
        },
        {
          id: "transfer",
          label: "Transfer / school change",
          whatMatters: [
            "How existing NIL and housing commitments transfer (or don't)",
            "Eligibility and transfer-portal timing rules that affect a deal",
            "Whether current agreements have relocation or school-specific clauses",
          ],
        },
        {
          id: "revenue-sharing",
          label: "Revenue sharing / benefits",
          whatMatters: [
            "How school revenue-share offers relate to outside NIL deals",
            "Cap and disclosure obligations that may apply",
            "How benefits are characterized for eligibility purposes",
          ],
        },
        {
          id: "agent-agreement",
          label: "Agent or advisor agreement",
          whatMatters: [
            "State agent-registration and disclosure requirements",
            "Fee structure, term, and exclusivity",
            "Conflicts of interest between advisor, school, and brand relationships",
          ],
        },
        {
          id: "eligibility",
          label: "Eligibility / rule question",
          whatMatters: [
            "Which governing body's rules apply (school, conference, association)",
            "Documentation an athlete or family should keep",
            "Timing — many eligibility questions are time-sensitive",
          ],
        },
        { id: "something-else", label: "Something else", whatMatters: [] },
      ],
    },
    resources: [
      { label: "The Legal Audit — NIL episodes", url: "/blog/" },
    ],
  },
  {
    id: "athlete-contracts",
    label: "Athlete Contracts",
    kicker: "ATHLETE AGREEMENTS + REPRESENTATION",
    description:
      "Professional and collegiate athlete contracts, endorsements, and representation agreements.",
    promoted: true,
    personaStep: {
      question: "Who are you?",
      options: [
        { id: "athlete", label: "Athlete" },
        { id: "parent", label: "Parent / Family" },
        { id: "agent", label: "Agent / Advisor" },
        { id: "team-brand", label: "Team / Brand / Business" },
        { id: "other", label: "Other" },
      ],
    },
    issueStep: {
      question: "What are you dealing with?",
      options: [
        {
          id: "playing-contract",
          label: "Playing contract",
          whatMatters: [
            "Guaranteed vs. non-guaranteed compensation",
            "Performance incentives and how they're measured",
            "Trade, injury, and morals-clause terms",
          ],
        },
        {
          id: "endorsement",
          label: "Endorsement / sponsorship deal",
          whatMatters: [
            "Exclusivity by category and territory",
            "Usage rights — how long and where the brand can use your name/image",
            "Termination triggers and payment timing",
          ],
        },
        {
          id: "representation",
          label: "Agent or representation agreement",
          whatMatters: [
            "Fee percentage and what it applies to",
            "Term length and how to exit the relationship",
            "State and league-specific agent-certification rules",
          ],
        },
        {
          id: "dispute",
          label: "Contract dispute or termination",
          whatMatters: [
            "Notice and cure provisions before any termination",
            "Dispute-resolution clause (arbitration vs. litigation)",
            "Preserving records and communications early",
          ],
        },
        { id: "something-else", label: "Something else", whatMatters: [] },
      ],
    },
    resources: [{ label: "The Legal Audit — Contracts episodes", url: "/blog/" }],
  },
  {
    id: "sports-business",
    label: "Sports Business",
    kicker: "SPORTS BUSINESS + COMMERCIAL DEALS",
    description:
      "Commercial, governance, and rights issues facing teams, leagues, brands, and sports businesses.",
    promoted: true,
    personaStep: {
      question: "Who are you?",
      options: [
        { id: "founder", label: "Founder / Business owner" },
        { id: "brand", label: "Brand / Sponsor" },
        { id: "team-league", label: "Team / League-affiliated" },
        { id: "investor", label: "Investor" },
        { id: "other", label: "Other" },
      ],
    },
    issueStep: {
      question: "What are you dealing with?",
      options: [
        {
          id: "commercial-agreement",
          label: "Commercial / sponsorship agreement",
          whatMatters: [
            "Rights granted vs. rights retained",
            "Term, renewal, and exclusivity scope",
            "Payment structure and audit rights",
          ],
        },
        {
          id: "governance",
          label: "League / governance / rights issue",
          whatMatters: [
            "Which governing rules or bylaws apply",
            "Process and appeal rights, if any",
            "This is an editorial/analysis lane, not a claim of representation",
          ],
        },
        {
          id: "vendor-partnership",
          label: "Vendor or partnership contract",
          whatMatters: [
            "Scope of work and deliverables definition",
            "Indemnification and liability allocation",
            "Exit and termination mechanics",
          ],
        },
        {
          id: "investment-deal",
          label: "Investment / ownership question",
          whatMatters: [
            "Deal structure and governance rights",
            "Regulatory or league approval requirements",
            "Diligence scope",
          ],
        },
        { id: "something-else", label: "Something else", whatMatters: [] },
      ],
    },
    resources: [{ label: "The Legal Audit — Business episodes", url: "/blog/" }],
  },
  {
    id: "film-entertainment",
    label: "Film + Entertainment",
    kicker: "FILM / ENTERTAINMENT",
    description:
      "Production, talent, rights, and licensing issues for film, television, and entertainment projects.",
    promoted: true,
    personaStep: {
      question: "Who are you?",
      options: [
        { id: "producer", label: "Producer / Production company" },
        { id: "talent", label: "Talent / Creator" },
        { id: "brand-distributor", label: "Brand / Distributor" },
        { id: "other", label: "Other" },
      ],
    },
    issueStep: {
      question: "What are you dealing with?",
      options: [
        {
          id: "production-financing",
          label: "Production / financing agreement",
          whatMatters: [
            "Financing structure and recoupment order",
            "Delivery requirements and deadlines",
            "Credit and approval rights",
          ],
        },
        {
          id: "chain-of-title",
          label: "Rights / chain of title",
          whatMatters: [
            "Clean chain of title from underlying rights to finished work",
            "Music, footage, and third-party clearance",
            "Documentation needed before financing or distribution",
          ],
        },
        {
          id: "talent-agreement",
          label: "Talent agreement",
          whatMatters: [
            "Scope of services and exclusivity",
            "Compensation structure, including backend",
            "Credit, approval, and morals provisions",
          ],
        },
        {
          id: "licensing-distribution",
          label: "Licensing / distribution",
          whatMatters: [
            "Territory, term, and platform scope of the license",
            "Minimum guarantees vs. revenue share",
            "Reversion rights",
          ],
        },
        {
          id: "business-affairs",
          label: "Business affairs issue",
          whatMatters: [
            "Which agreements govern the specific issue",
            "Notice requirements before acting",
            "Records and communications to preserve",
          ],
        },
        { id: "something-else", label: "Something else", whatMatters: [] },
      ],
    },
    resources: [{ label: "The Legal Audit — Entertainment episodes", url: "/blog/" }],
  },
  {
    id: "us-greece",
    label: "U.S. ↔ Greece",
    kicker: "CROSS-BORDER — EMERGING FOCUS",
    description:
      "Cross-border sports, business, and entertainment questions between the U.S. and Greece. An emerging focus area — see note below.",
    promoted: false,
    personaStep: {
      question: "Which describes your situation?",
      options: [
        { id: "greek-athlete-us", label: "Greek athlete → U.S. college / NIL" },
        { id: "us-athlete-greece", label: "U.S. athlete → Greece" },
        { id: "us-producer-greece", label: "U.S. producer → project in Greece" },
        { id: "greek-business-us", label: "Greek producer/business → U.S. counterpart" },
      ],
    },
    issueStep: {
      question: "What are you dealing with?",
      options: [
        {
          id: "cross-border-general",
          label: "General cross-border question",
          whatMatters: [
            "Which country's rules govern the specific agreement or issue",
            "Visa, eligibility, or work-authorization questions, where relevant",
            "This is an emerging focus area, not an established practice claim",
          ],
        },
        { id: "something-else", label: "Something else", whatMatters: [] },
      ],
    },
    resources: [],
  },
];

export const ISSUE_EXPLORER_CONTACT_NOTE = CONTACT_NOTE;
