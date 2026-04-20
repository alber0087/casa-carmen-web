# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Website for **Nuestra Casa Carmen**, a Spanish non-profit association that supports people at risk of social exclusion. The site is a single-page, Spanish-language web presence built with Nuxt 4 and SSR enabled.

## Commands

```bash
npm run dev        # Start development server
npm run build      # Build for production (SSR)
npm run generate   # Generate static site
npm run preview    # Preview production build locally
```

No linting or test scripts are configured.

## Architecture

**Framework**: Nuxt 4 with SSR, Vue 3, TypeScript minimal config.

**App structure** (`/app/` directory — Nuxt 4 convention):
- `app.vue` — root component, renders `<NuxtPage />`
- `pages/index.vue` — entire site content as a single page with 8 sections
- `assets/css/main.css` — all styles, custom CSS only (no Tailwind or UI framework)

**Public assets** (`/public/`): Images go here. Current images are Gemini-generated PNGs. Target naming convention and location is `/public/images/` with semantic names (see `GUIA_GENERACION_IMAGENES.md`). Use `rename_images.js` to batch-rename Gemini output files.

## Styling

- Custom CSS only — no utility framework
- Primary color: `#4a7c6f` (green), background: `#faf9f7`, text: `#3a3a3a`
- Responsive breakpoints: 600px, 768px, 900px
- Layout: CSS Grid for service cards, Flexbox elsewhere

## Content Sections (index.vue)

1. Hero — title, subtitle, quote + background image
2. Quiénes somos — about with image
3. Nuestra misión
4. Nuestros valores — Compromiso, Integración, Felicidad
5. Nuestros servicios — 3 service cards (moving, donations, painting)
6. De dónde nace — history with reverse layout
7. Cómo puedes ayudar — CTA with phone number
8. Dónde estamos — address and contact

## Image Guide

`GUIA_GENERACION_IMAGENES.md` contains detailed AI image generation prompts for each section, visual style specs (warm, earthtones, Canarian architecture), and recommended dimensions (hero: 1920×1080, sections: 800×600). Target format: `.webp`.
