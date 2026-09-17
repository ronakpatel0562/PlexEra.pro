# Project Memory & Session State (`MEMORY.md`)

> **Notice for AI Agents & Developers**: Update this file at short intervals (end of session, major feature completions, or architectural shifts) to preserve project state and ensure seamless collaboration.

---

## 📌 Current Project State
- **Project Name**: PlexEra (`growing-giant`)
- **Domain**: IT Staffing, Technical Talent Acquisition, Architectural IT Consulting, DevOps & Career Services.
- **Framework**: Astro v7.3.2 (SSR/SSG ready, Node `>=22.12.0`)
- **Design System**: Vercel Geist aesthetic (`#171717` ink, high contrast, clean typography, Geist Sans / Geist Mono styling defined in [`DESIGN.md`](file:///f:/Learning/Projects/Micro/PlexEra.pro/DESIGN.md)).
- **Current Development Phase**: Project Initialization & Documentation Architecture setup.

---

## 🗺️ Documentation Taxonomy & File Map
To avoid mixed/duplicated information across markdown files, maintain strict separation of concerns:

| File | Primary Purpose | Maintenance Trigger |
| :--- | :--- | :--- |
| [`README.md`](file:///f:/Learning/Projects/Micro/PlexEra.pro/README.md) | Human & Developer entry point, project vision, setup instructions, commands, repo map | Updated on structural changes, new dev commands, or feature additions |
| [`AGENTS.md`](file:///f:/Learning/Projects/Micro/PlexEra.pro/AGENTS.md) | Rules, guidelines, CLI commands, and auto-update protocols for AI agents | Updated when agent workflows, prompt guidelines, or dev server commands change |
| [`MEMORY.md`](file:///f:/Learning/Projects/Micro/PlexEra.pro/MEMORY.md) | Short-interval state tracking, session logs, architectural decisions, and active task lists | Updated at short intervals (task completions, session ends, major decisions) |
| [`DESIGN.md`](file:///f:/Learning/Projects/Micro/PlexEra.pro/DESIGN.md) | Design tokens, color palette, typography hierarchy, and UI guidelines | Updated when changing visual theme, component styles, or brand guidelines |
| [`referencecontent.md`](file:///f:/Learning/Projects/Micro/PlexEra.pro/referencecontent.md) | Competitor research, market synthesis, and target audience reference data | Read-only reference for content generation and UX copy |

---

## 🪵 Session & Progress Log

### Session: 2026-09-17 (Form Submissions Routing to contact@plexera.pro)
- **Agent/Dev**: Antigravity AI Agent
- **Key Actions**:
  - Wired all form submissions across the portal (`BookingModal.astro` candidate & employer forms, and `src/pages/contact.astro` embedded advisory forms) to deliver directly to `contact@plexera.pro`.
  - Built `src/utils/formMailer.ts` providing standardized form delivery utilities.
  - Implemented FormSubmit AJAX integration (`https://formsubmit.co/ajax/contact@plexera.pro`) enabling serverless static-site dispatch with zero backend complexity.
  - Added full `name` attributes, file attachment support for candidate resumes (`.pdf`, `.docx`), live loading state spinners, success banners, and graceful mailto fallbacks.
  - Upgraded `/contact` page with an embedded interactive direct consultation form (Candidate / Employer tabs) alongside the modal launcher.
  - Verified static compilation with `npm run build` (all 48 static routes compiled cleanly).
- **Architectural Decisions**:
  - Used FormSubmit's AJAX endpoint with `_template: table`, `_replyto` dynamic sender mapping, `_captcha: false`, and metadata (`Audience_Type`, `Source_URL`, `Submission_Time`).
  - Upon the first submission, FormSubmit requires a 1-time activation confirmation link clicked by the inbox owner at `contact@plexera.pro` to activate immediate forwarding.

---

## 🎯 Active Backlog & Next Actionable Steps

1. **Email Routing Verification**:
   - Submit first test consultation form from the portal and click the one-time activation link sent to `contact@plexera.pro`.
2. **Page Development & Polish**:
   - Continue responsive fine-tuning across mobile viewport widths.
   - Expand SEO metadata and structured JSON-LD schemas.

---

## 🤝 Handover Notes for Incoming Agents
- Always inspect [`MEMORY.md`](file:///f:/Learning/Projects/Micro/PlexEra.pro/MEMORY.md) first to understand recent progress and open tasks.
- Run Astro dev server in background using `astro dev --background` as specified in [`AGENTS.md`](file:///f:/Learning/Projects/Micro/PlexEra.pro/AGENTS.md).
- Keep [`MEMORY.md`](file:///f:/Learning/Projects/Micro/PlexEra.pro/MEMORY.md) updated before concluding tasks.

