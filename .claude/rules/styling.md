---
paths:
  - "app/assets/css/**"
  - "app/app.config.ts"
  - "nuxt.config.ts"
---

# Theme and design tokens

- Tailwind CSS 4 is configured in CSS (`@import "tailwindcss"; @import "@nuxt/ui";` + `@theme`), there is no `tailwind.config.js`.
- Brand palette and fonts go in `@theme` in `app/assets/css/main.css`; Nuxt UI semantic colors (`primary`, `neutral`, `success`, `warning`, `error`) are mapped in `app.config.ts` → `ui.colors`.
- Override Nuxt UI CSS variables (`--ui-bg`, `--ui-bg-elevated`, `--ui-border`, `--ui-radius`, ...) under `.dark` to match the design rather than restyling each component.
- Status color mapping is fixed project-wide: online → success, warning → warning, error → error, offline → neutral.
- The app is dark-first (design reference: dark navy dashboard). Keep light mode working, but tune for dark.
