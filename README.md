# Madhava Rao Dummu  AI Engineering Portfolio

A React, Vite, TypeScript, and Tailwind CSS portfolio with an editorial olive-and-ivory visual direction.

## Development

- `npm install`  install dependencies
- `npm run dev`  local development
- `npm run build`  type-check and build
- `npm run preview`  preview the production build

## Content

Portfolio content is maintained in `src/data/`: profile, education, certifications, skills, work experience, and six projects. The downloadable résumé is `public/MadhavaRao_GenAIEngineer.pdf`.

Project visuals are conceptual illustrations. AeroMind and GeoDiscover include GitHub links and case studies based on their repository documentation and implementation. AeroMind highlights YOLO, Qwen3-VL VLMs and multimodal LLM reasoning through Ollama, condition assessment, human QC, and COLMAP/Three.js digital twins. GeoDiscover covers spatial imports, mapping, POI matching, review/QC, and gated exports. Their dates are omitted because contribution dates were not supplied. The infrastructure inspection project displays 2026 because the résumé gives conflicting end dates; the distance-estimation project has no supplied date.

## Contact form

Email and phone links work directly. To enable form delivery, set `VITE_FORM_ENDPOINT` to a Formspree-compatible endpoint using `.env.example`. Without it, the validated form opens a prefilled mailto draft for the visitor to review and send in their email application. Direct email, phone, LinkedIn, and copy-email actions are also available.

## Design

Oversized Manrope headings paired with editorial serif accents, DM Sans body text, an olive-and-ivory light theme, and a persisted dark-theme toggle. The studio styles live in `src/studio.css`. AeroMind and GeoDiscover use original SVG technical concept illustrations, followed by a compact project archive. Responsive layouts and Framer Motion transitions respect reduced-motion preferences.
