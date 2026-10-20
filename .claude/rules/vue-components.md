---
paths:
  - "app/components/**/*.vue"
  - "app/pages/**/*.vue"
  - "app/layouts/**/*.vue"
  - "app/app.vue"
  - "app/error.vue"
---

# Vue components, pages, layouts

- `<script setup lang="ts">`, block order: script → template → (style only if Tailwind can't express it).
- Props: type-based `defineProps<{...}>()` with types imported from `shared/types`; defaults via destructuring. Emits: typed `defineEmits<{ select: [id: string] }>()`. Use `defineModel` for two-way bindings.
- Presentational components (`app/components/**`) never import Pinia stores or call `useFetch`; pages wire stores to components.
- Templates stay declarative: no inline computations beyond simple conditions — move derived values to `computed` (or ask the owner to add them to a store getter).
- Prefer Nuxt UI components (`UButton`, `UInput`, `UTable`, `UBadge`, `UCard`, `UModal`, `UDropdownMenu`, `UDashboard*`) over hand-rolled ones; check their API via the `nuxt-ui` MCP. Customize through the `ui` prop / `app.config.ts`, not by overriding internal classes.
- Icons: `i-lucide-*` names via `UIcon` / `icon` props.
- Styling: Tailwind utilities with semantic tokens (`text-muted`, `bg-elevated`, `border-default`, `text-primary`) — no hardcoded hex colors in templates.
- Components auto-import by folder path: `components/devices/StatusBadge.vue` → `<DevicesStatusBadge>`. Don't import components manually.
- `v-for` always with a stable `:key` (entity id, never index). Never combine `v-if` and `v-for` on one element.
- Client-only things (ECharts, `window`, time-based values) go inside `<ClientOnly>` or `onMounted` to avoid hydration mismatches.
- Accessibility: real `<button>`/`<a>`/`NuxtLink` for interactions, `aria-label` on icon-only buttons, visible focus, status conveyed by text not only color, sufficient contrast on the dark theme.
- Loading, empty, and error states are part of every data view.
