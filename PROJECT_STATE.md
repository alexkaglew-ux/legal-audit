# AKESQ WEBSITE v2 — PROJECT STATE

## Thesis
alexkagianaris.com is Alex Kagianaris's professional home on the internet: an attorney-first platform that connects legal practice, sports/NIL authority, entertainment work, published analysis, and future educational products without collapsing them into one brand.

## User
Primary audiences: athletes, parents/families, agents/advisors, brands, sports businesses, entertainment/film participants, media/industry peers, and prospective legal clients.

## Current state
- Production domain: alexkagianaris.com
- Hosting/deploy: Netlify
- Source repo: alexkaglew-ux/legal-audit
- Production branch: main
- Working branch for v2: akesq-v2
- Current implementation: React + Vite, largely single-page, with Legal Audit-led content architecture.
- Existing content registry: src/content/episodes.js
- Existing Netlify form/newsletter implementation.

## Frozen decisions
1. alexkagianaris.com is the target domain.
2. The site is Alex's professional platform, not a standalone law firm website.
3. Legal representation is through The Lew Firm APC.
4. Primary direct legal inquiry CTA routes to Alex at ak@thelewfirm.com, not general firm administration.
5. Core public emphasis: Sports + NIL first; Entertainment second; Business selectively.
6. Greece/U.S. cross-border work is architected now but not over-promoted until there is stronger evidence and body of work.
7. Visual direction: continuity with The Lew Firm, but more editorial, modern, dynamic, and media-forward.
8. Signature interaction: guided issue explorer, not a free-form legal-advice chatbot.
9. Book and NIL course receive expansion slots now even if not yet launched.
10. Production main stays untouched until preview acceptance.

## Working decisions
- Homepage should act as attorney profile + live authority hub, not a Legal Audit landing page.
- Legal Audit becomes evidence of expertise, not the master brand.
- Insights should aggregate selected video, article, LinkedIn/Substack, and future Sports Legal Audit material through a normalized content registry.
- Interactive modules should educate and route users to relevant resources; they must not deliver personalized legal conclusions.

## Built / active work
- Existing React/Vite site on main.
- Netlify deploy pipeline.
- Existing episode archive/search/filter UI.
- YouTube playlist embed, Instagram/YouTube links, article cards, About, practice list, contact section, and Netlify newsletter form.

## Next milestone
Milestone 1: Homepage + design system + Issue Explorer prototype on akesq-v2.

Acceptance criteria:
- Clear attorney-first hero and Lew Firm affiliation.
- Sports + NIL is visibly dominant.
- Direct CTA to ak@thelewfirm.com.
- Issue Explorer works end-to-end with at least four top-level paths and resource/result panels.
- Legal Audit is demoted to a supporting media/insights module.
- Responsive desktop/mobile layouts.
- No change to production main.
- Existing episode content remains available unless deliberately superseded.
- Placeholders/invented content are clearly noted.

## Open decisions
- Exact visual overlap with The Lew Firm after visual comparison.
- Final typography and palette.
- Whether Substack becomes the canonical newsletter source or remains external.
- How LinkedIn content is ingested: curated approval vs automated nomination.
- Final Sports Legal Audit cross-linking policy.
- Book title/launch details and NIL course launch details.
- Greece lane naming and promotion threshold.

## Gaps
- Need full visual/design audit of thelewfirm.com for reusable design DNA.
- Need authoritative current biography and admissions/credentials check before final copy freeze.
- Need preferred headshot/portrait selection.
- Need Substack/newsletter endpoint.
- Need automation architecture only after homepage/design approval.

## Temporary inventions
- Any prototype issue-explorer answers are informational placeholders until reviewed for legal/editorial accuracy.
- Any Greece copy before evidence pack is provisional and must be labeled as an emerging focus rather than established market leadership.

## Build ownership
- Architecture/copy/integration: ChatGPT.
- Primary builder: Claude Code.
- Cursor: only for local inspection/debugging/visual iteration if faster than builder loop.
- Independent review: ChatGPT at material milestone; one technical reviewer only if needed before release candidate.

## Team boundary
Do not import state from Sports Legal Audit, HITL, TOKEN/CONTROL-CORE, TRUEFIELD, NIL Course, or the Sports Law Book except deliberately approved assets/patterns.

## Last verified
2026-09-14
