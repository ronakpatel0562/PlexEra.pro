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

### Session: 2026-09-10 (Documentation & Memory Architecture Setup)
- **Agent/Dev**: Antigravity AI Agent
- **Key Actions**:
  - Established project documentation taxonomy to prevent information overlap.
  - Created [`MEMORY.md`](file:///f:/Learning/Projects/Micro/PlexEra.pro/MEMORY.md) for session tracking and memory persistence.
  - Updated [`AGENTS.md`](file:///f:/Learning/Projects/Micro/PlexEra.pro/AGENTS.md) with explicit rules for automatic `.md` maintenance.
  - Updated [`README.md`](file:///f:/Learning/Projects/Micro/PlexEra.pro/README.md) to replace generic template with PlexEra project guide.
- **Architectural Decisions**:
  - Adopted strict single-responsibility boundaries for documentation files.
  - Standardized local file linking using GitHub markdown `file:///` format for easy navigation.

---

## 🎯 Active Backlog & Next Actionable Steps

1. **Frontend Foundation**:
   - Build global CSS layout following Geist Design Tokens from [`DESIGN.md`](file:///f:/Learning/Projects/Micro/PlexEra.pro/DESIGN.md).
   - Construct reusable Astro header, navigation, and footer components.
2. **Page Development**:
   - Landing Page (`/`): Hero with mesh gradient option, value propositions, service highlights, call to actions.
   - Services Page (`/services`): Staffing, architectural consulting, DevOps automation.
   - Contact / Consultation Form (`/contact`).
3. **Content Integration**:
   - Utilize copy ideas and market signals from [`referencecontent.md`](file:///f:/Learning/Projects/Micro/PlexEra.pro/referencecontent.md).

---

## 🤝 Handover Notes for Incoming Agents
- Always inspect [`MEMORY.md`](file:///f:/Learning/Projects/Micro/PlexEra.pro/MEMORY.md) first to understand recent progress and open tasks.
- Run Astro dev server in background using `astro dev --background` as specified in [`AGENTS.md`](file:///f:/Learning/Projects/Micro/PlexEra.pro/AGENTS.md).
- Keep [`MEMORY.md`](file:///f:/Learning/Projects/Micro/PlexEra.pro/MEMORY.md) updated before concluding tasks.
