# Jayveer Trivedi — Personal Portfolio & Venture Archive

> **An exceptional, timeless, editorial-style personal portfolio for an entrepreneurial builder connecting ventures, people, and opportunities.**
> Pursuing Digital Business & Entrepreneurship at **Indian Institute of Management Bangalore (IIM-B)**.

---

## 1. Creative Direction & Philosophy

This portfolio is crafted to meet the standards of a premium independent editorial publication rather than a templated startup or student resume. It balances **academic rigor for IIM Bangalore submissions** with **commercial resonance for founders, venture investors, and institutional leaders**.

### Aesthetic Foundation
- **Design Archetype**: Classic Editorial & Minimalist Brand.
- **Palette**: Warm ivory paper (`#FBF9F5` / `#F4EFE6`), deep ink charcoal typography (`#1B1A18`), forest evergreen accents (`#1E3A2F`), subtle muted brass (`#A8792C`), and fine hairline borders (`#E6DFD3`).
- **Midnight Editorial Theme**: Dark mode (`#0F1110` / `#141715`) maintains warmth and literary restraint.
- **Typography**: Display serif typography paired with crisp humanistic sans-serif (`Plus Jakarta Sans`) and monospace index tags (`JetBrains Mono`).
- **No AI Slop Guarantee**: Custom asymmetric layout grids, bespoke systems diagrams, realistic metrics, zero synthetic percentages, and verifiable achievements.

---

## 2. Core Information Architecture

| Section | Identifier | Description |
|---|---|---|
| **Overview (Hero)** | `#overview` | Thematic manifesto: *Building ventures. Connecting people. Moving ideas forward.* Three structural pillars. |
| **About** | `#about` | The Person Behind the Work: synthesis of IIM Bangalore DBE program and frontline entrepreneurial execution. |
| **Ventures & Initiatives** | `#ventures` | **Aarambh Network** (300+ founders, 50+ mentors, roundtables), **SevaSetu** (Mehsana local-services marketplace validation), **Growth Network** (500+ member community), **P2P EV Charging Model** (systems model), and **Eye+** (discreet teaser). |
| **Founder Ecosystem & BD** | `#ecosystem` | **Avenor** (700+ founder network associated, outreach & onboarding), and two-way **Startup Mentorship & Advisory Ecosystem**. |
| **Commercial Execution & Finance** | `#experience` | **Kalnet** (Business Development Executive), and **Finance, Markets & Investment Thinking** (macro capital flows and fundamental analysis). |
| **Competitions & Recognition** | `#recognition` | **TVS Credit E.P.I.C. 8.0** (Top 15 in India Campus Ambassador), Campus Ambassador appointments (IIM Calcutta, Unstop, etc.), and Case Competitions (IIT Madras, IIT Dhanbad, NSUT). |
| **Academic Research** | `#research` | **CURE 2027**: *Information Asymmetry and Market Efficiency: An Empirical Study of Consumer Markets* (working paper with theoretical anchors & methodology). |
| **Selected Opportunities & Credentials** | `#recognition` | **NIF IAPP** (interview journey), **Faculty Startup Evaluathon 2026** (invited jury member), and verified **Letters of Recommendation** (Kunal Kumar & Louise Arbour). |
| **Demonstrated Capabilities** | — | 6 functional working clusters (Venture Building, BD, Ecosystem, Finance, Research, Community). |
| **Contact** | `#contact` | Academic email (`@iimb.ac.in`), personal email, and institutional presence. |

---

## 3. Signature Interactive Capabilities

1. **Interactive P2P EV Charging Systems Flow**:
   - An explanatory multi-sided architecture diagram demonstrating the bilateral dynamics between Residential Charger Hosts, EV Commuters, Platform Matchmaking, and Distributed Utility Discoms.
2. **Deep-Dive Venture Case Study Modal**:
   - In-depth modal dialogs providing detailed genesis context, problem definition, grassroots methodology, and operational takeaways for featured ventures.
3. **Quick Command Palette (`⌘K` / `Ctrl+K`)**:
   - Instant keyboard-driven search and navigation allowing IIM-B faculty, recruiters, or investors to jump directly to any initiative or paper.
4. **Official Academic Dossier (`Print / PDF Ready`)**:
   - A dedicated academic portfolio dossier format optimized for `window.print()` and PDF generation, ideal for IIM Bangalore academic evaluations.

---

## 4. Single Source of Truth (`portfolio-content.ts`)

All content, metrics, case studies, and institutional affiliations are centrally managed and strictly typed in:

```
src/data/portfolio-content.ts
```

To update any community scale, research inquiry, or contact detail, edit this file directly.

---

## 5. Development & Testing Commands

```bash
# Navigate to directory
cd D:\Veenoe\jayveer-trivedi

# Install dependencies
npm install

# Run development server
npm run dev

# Run contract and accuracy verification tests
npm test

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 6. Production Deployment

### Option A: Vercel
```bash
npx vercel
```

### Option B: Netlify
```bash
npx netlify deploy --prod --dir=dist
```

### Option C: GitHub Pages / Cloudflare Pages
1. Build the production bundle: `npm run build`.
2. Connect your repository to Cloudflare Pages or deploy the contents of the `dist/` directory.

---

*Authored with first-principles design discipline, production-grade React & TypeScript, and timeless editorial craftsmanship.*
