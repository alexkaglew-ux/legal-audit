# AKESQ WEBSITE v2 — SITE SPEC

## 1. Audit summary

### What exists now
The current site is a React/Vite single-page application built around The Legal Audit. It already contains useful infrastructure: a sticky header, attorney/practice copy, Legal Audit media modules, an episode registry with search/filter, article cards, a headshot/about section, a Netlify email form, responsive CSS, and a Netlify deploy configuration.

### What is structurally wrong for v2
- Master identity is still too close to `The Legal Audit` rather than `Alex Kagianaris, Esq.`
- Hero and CTA emphasize The Lew Firm generally instead of Alex-direct inquiry.
- Sports + NIL is one item among many rather than the dominant authority lane.
- Practice areas are a flat list instead of a user-oriented information architecture.
- Current content is split across hard-coded article arrays and `episodes.js`.
- The page is largely static; interactivity is limited to archive search/filter.
- The Legal Audit occupies more conceptual space than the future book/course/Greece/insights ecosystem can support.
- No clear expansion model exists for book, NIL course, Substack, LinkedIn, or curated external insights.

### What should be preserved
- React + Vite.
- Netlify deploy model and SPA redirect configuration.
- Existing episode data unless superseded by a normalized content registry.
- Search/filter patterns where useful.
- Existing media links and accessible embeds.
- Netlify form pattern if retained for newsletter capture.
- Current assets until replaced with approved photography/design assets.

## 2. Positioning

Primary identity:

**Alex Kagianaris, Esq.**
**Sports + NIL · Entertainment · Business**
**Senior Attorney, The Lew Firm APC**

The site should communicate three things within the first screen:
1. Alex is an attorney practicing through The Lew Firm.
2. Sports + NIL is the dominant substantive focus.
3. Alex publishes useful analysis and has a living body of work beyond a static bio.

The site is not:
- a separate law firm;
- a Legal Audit landing page;
- a sports-media publication clone;
- a personal-brand influencer site.

## 3. Homepage architecture

### 3.1 Header
Primary navigation:
- Sports + NIL
- Entertainment
- Insights
- About
- Books + Education
- Contact

Secondary/utility link:
- The Lew Firm ↗

On desktop, keep restrained professional header behavior. On mobile, collapse cleanly; do not force the current full nav into a cramped horizontal row.

### 3.2 Hero
Purpose: attorney identity first.

Required content:
- `Alex Kagianaris, Esq.`
- `Sports + NIL · Entertainment · Business`
- `Senior Attorney, The Lew Firm APC`
- Short 1–2 sentence thesis.
- Primary CTA: `Contact Alex`
- Secondary CTA: `Explore Sports + NIL`

Primary contact action:
`mailto:ak@thelewfirm.com`

The Lew Firm remains visibly linked as institutional home.

### 3.3 What Alex Is Watching
A compact dynamic/editorial module with 3 current items. Initial milestone may use curated static data from a local registry.

Each item:
- topic
- short headline
- one-sentence significance
- optional link to Alex analysis
- status label such as `Watching`, `Explainer`, `Developing` only when editorially meaningful

No automated news scraping in Milestone 1.

### 3.4 Sports + NIL
Largest substantive homepage section.

User-facing groupings:
- NIL + College Athletics
- Athlete Agreements + Representation
- Sports Business + Commercial Deals
- League / Governance / Rights issues (editorial/analysis lane, not necessarily a representation claim)

This section should combine practice positioning with educational resources without implying representation of unnamed clients.

### 3.5 Signature Issue Explorer
Working title: **What are you trying to understand?**

Purpose: guided educational navigation that makes the site participatory without acting as a legal-advice chatbot.

Top-level paths for Milestone 1:
1. NIL + College Sports
2. Athlete Contracts
3. Sports Business
4. Film + Entertainment

Future path, architected but not promoted in initial nav:
5. U.S. ↔ Greece

#### Example flow: NIL + College Sports
Step 1 — Who are you?
- Athlete
- Parent / Family
- Agent / Advisor
- Brand / Business
- Other

Step 2 — What are you dealing with?
- NIL agreement
- Transfer / school change
- Revenue sharing / benefits
- Agent or advisor agreement
- Eligibility / rule question
- Something else

Result panel may show:
- `What usually matters` — 3–5 general issue categories
- `Start with these resources` — links to Alex's content
- `This may warrant individual legal advice` — direct Alex contact CTA

#### Example flow: Film + Entertainment
Step 1:
- Producer / Production company
- Talent / Creator
- Brand / Distributor
- Other

Step 2 examples:
- Production / financing agreement
- Rights / chain of title
- Talent agreement
- Licensing / distribution
- Business affairs issue

#### Greece future path
Architect data model now for:
- Greek athlete → U.S. college/NIL
- U.S. athlete → Greece
- U.S. producer → shoot/project in Greece
- Greek producer/business → U.S. counterpart

Do not present these as established specialty claims in Milestone 1.

### 3.6 Latest Analysis
Normalized feed capable of holding:
- video
- article
- LinkedIn
- Substack/newsletter
- Sports Legal Audit link

Milestone 1 may use local seed data. Avoid duplicating full content; cards may link out.

Recommended content object:
```js
{
  id,
  title,
  date,
  topic,
  format,
  source,
  url,
  image,
  summary,
  featured,
  status
}
```

### 3.7 The Legal Audit
Keep as a distinct supporting module:
- one featured episode/video
- short descriptor
- `View all` link
- archive link if retained

Do not allow this module to visually dominate the attorney positioning.

### 3.8 About
Shorter homepage version; deeper About page/section can carry full biography after verification.

Must show:
- Senior Attorney, The Lew Firm APC
- California attorney status/admissions only after verification
- relevant sports/entertainment background
- Legal Audit/media role
- selected prior business/entertainment background only insofar as it improves attorney positioning

### 3.9 Books + Education
Two expansion cards:
- Sports law book — `Forthcoming`
- NIL course — `Coming soon`

No launch claims until true.

### 3.10 Contact / representation
Direct Alex-first CTA:
- `ak@thelewfirm.com`

Copy must state legal services are through The Lew Firm APC. Provide firm link as institutional context, not as the primary inquiry sink.

### 3.11 Footer
Include:
- Alex identity
- The Lew Firm affiliation/link
- direct email
- social links
- commentary/not-legal-advice language
- any required firm/address/advertising information after legal review

## 4. Visual system

### Desired relationship to The Lew Firm
Target: recognizable family resemblance, not duplication.

Borrow:
- professional restraint
- spacing discipline
- institutional confidence
- complementary type hierarchy
- restrained button/link language
- selected palette cues after direct visual audit

Differentiate Alex with:
- larger editorial typography
- stronger Sports + NIL hierarchy
- content-led modules
- subtle motion
- rich hover/focus/tap states
- video/analysis cards
- issue explorer

Avoid:
- ESPN/sports-broadcast look
- high-saturation creator aesthetics
- generic law-firm stock imagery
- excessive gold/black Legal Audit styling as site-wide identity

### Starting palette direction
Not frozen. Explore:
- warm white / parchment
- near-black / deep navy
- slate / steel neutral
- one restrained accent inherited or harmonized with Lew Firm

## 5. Interaction rules

Use motion to signal state, hierarchy, and freshness — not decoration.

Allowed examples:
- animated selection state in Issue Explorer
- smooth content panel transitions
- subtle card lift/reveal
- sticky subnavigation where useful
- muted video preview only if performance/accessibility are sound

Required:
- keyboard support
- visible focus
- reduced-motion support
- mobile tap parity
- no essential hover-only content

## 6. Content + automation architecture

### Milestone 1
Local registries only. Prove hierarchy and UX first.

### Milestone 2
Connect feeds selectively:
- YouTube: ingest new Legal Audit metadata
- Substack/newsletter: ingest headline/dek/link/date if endpoint supports it
- LinkedIn: nomination/curation preferred over blind autopublish
- Sports Legal Audit: selected cross-links only

Automation principle:
**Automate intake and updating, not Alex's legal analysis.**

## 7. Technical approach

Keep current React/Vite stack unless Milestone 1 exposes a real limitation.

Recommended component split:
- `SiteHeader`
- `Hero`
- `WatchingRail`
- `SportsNilSection`
- `IssueExplorer`
- `InsightsFeed`
- `LegalAuditModule`
- `AboutPreview`
- `BooksEducation`
- `ContactSection`
- `SiteFooter`

Recommended data modules:
- `src/content/insights.js`
- `src/content/issueExplorer.js`
- existing `episodes.js` retained or adapted

Do not add a database/CMS in Milestone 1.

## 8. Milestone 1 acceptance criteria

1. Build occurs on `akesq-v2`; production main untouched.
2. Homepage clearly presents Alex, not The Legal Audit, as the master identity.
3. `Sports + NIL` is the strongest substantive visual/content lane.
4. The Lew Firm affiliation is clear and continuous.
5. Primary legal contact goes to `ak@thelewfirm.com`.
6. Issue Explorer is functional with four initial top-level paths.
7. Greece data architecture exists but public positioning remains modest.
8. Legal Audit survives as a supporting module.
9. Book + NIL course placeholders exist and are visibly forthcoming/not launched.
10. Desktop and mobile pass visual/responsive QA.
11. Existing useful content is not silently lost.
12. No new backend/CMS or AI chatbot.
13. Build passes `npm run build`.
14. Any invented biography/practice copy is flagged before release.

## 9. Deferred from Milestone 1

- live content ingestion
- LinkedIn automation
- Substack automation
- CMS/database
- AI Q&A
- client intake workflow beyond direct email
- Greece-specific public landing page
- final book/course commerce or gated product delivery

## 10. Release gate

Before merge to `main`:
- Alex approves visual direction and primary copy.
- Biography/credentials/practice claims are verified.
- Contact routing is tested.
- Legal/professional-responsibility footer/disclaimer language is reviewed.
- Netlify preview passes mobile + desktop QA.
- No production merge without explicit approval.
