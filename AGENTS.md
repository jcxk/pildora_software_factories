# pildora_dd_microserv

Teaching package for a 45-minute Spanish session on Docker Compose and microservices:
**«Tenemos que ir más profundo»** (Inception-themed: Nivel 1 → Nivel 2 → Nivel 3 → Limbo).

Deliverables (slides, demo app, práctica cards, README) are in Spanish; agent-facing files
(this one, `docs/agents/*`) stay in English.

## Layout

- `docs/` — reveal.js deck (`index.html`), will be the GitHub Pages root when published, plus the PPTX export
- `demo/` — four-service Compose app «niveles de sueño»: `web` (nginx) → `api` (FastAPI) → `cache` (Redis) + `db` (MySQL)
- `practica/` — in-class hands-on step cards (P0–P4), one file per paso
- `tools/` — PPTX export pipeline (Playwright screenshots → pptxgenjs)

## Agent skills

### Issue tracker

Issues live in GitHub Issues (remote `jcxk/pildora_dd_microsrv` — not yet connected; all work is local until the user says otherwise). See `docs/agents/issue-tracker.md`.

### Domain docs

Single-context: root `GLOSSARY.md` + `docs/adr/`, created lazily by `/domain-modeling`. See `docs/agents/domain.md`.
