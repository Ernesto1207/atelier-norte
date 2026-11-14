# Design System Master — ATELIER NORTE

> Generado siguiendo el flujo de `ui-ux-pro-max` (Style: Minimalism & Swiss Style + Editorial Gallery; Variance: 8, Motion: 5, Density: 2).

## 1. Paleta de Colores (Gallery / Editorial Alto Contraste)

| Token | Valor | Uso | Contraste |
|---|---|---|---|
| `--color-bg` | `#FAFAF9` | Fondo principal (papel piedra cálido) | — |
| `--color-surface` | `#FFFFFF` | Superficie de tarjetas/modal | — |
| `--color-muted` | `#F0EFEA` | Fondos secundarios / estados hover suaves | — |
| `--color-fg` | `#0C0A09` | Texto principal / titulares | 19.3:1 sobre `#FAFAF9` |
| `--color-primary` | `#1C1917` | Botones primarios / acentos estructurales | 17.1:1 con `#FFFFFF` |
| `--color-secondary` | `#44403C` | Texto secundario / subtítulos | 9.7:1 sobre `#FAFAF9` |
| `--color-muted-fg` | `#57534E` | Metadatos / etiquetas técnicas | 7.3:1 sobre `#FAFAF9` (WCAG AAA) |
| `--color-accent` | `#A16207` | Bronce cepillado (detalles mínimos, indicadores activos) | 4.8:1 sobre `#FAFAF9` (WCAG AA) |
| `--color-border` | `#D6D3D1` | Líneas divisorias arquitectónicas (1px) | — |
| `--color-destructive` | `#DC2626` | Errores de validación | 4.8:1 sobre `#FFFFFF` |
| `--color-success` | `#15803D` | Confirmación de envío | 5.1:1 sobre `#FFFFFF` |

## 2. Tipografía

- **Titulares Editoriales (Serif):** `Cormorant Garamond` (weights: 400, 500, 600, italic) — carácter arquitectónico, proporción clásica y alto contraste de trazos.
- **Cuerpo y Datos Técnicos (Sans-serif Geométrica):** `DM Sans` (weights: 400, 500, 700) — lectura limpia, cifras tabulares (`font-variant-numeric: tabular-nums`) para áreas en `m²`, años y métricas.
- **Escala:**
  - Base: `16px` (`line-height: 1.6`)
  - Hero H1: `clamp(2.75rem, 6vw, 5.5rem)` (`line-height: 1.02`, `letter-spacing: -0.02em`)
  - Sección H2: `clamp(2rem, 4vw, 3.25rem)` (`line-height: 1.1`)
  - Etiquetas técnicas / Micro-copy: `0.75rem` (`12px`), `letter-spacing: 0.14em`, `text-transform: uppercase`

## 3. Espaciado y Geometría (Spacious Gallery Scale)

- `--space-xs`: `0.5rem` (8px)
- `--space-sm`: `1rem` (16px)
- `--space-md`: `2rem` (32px)
- `--space-lg`: `4rem` (64px)
- `--space-xl`: `6rem` (96px)
- `--space-2xl`: `8rem` (128px)
- `--radius`: `0px` (geometría ortogonal estricta; bordes `1px solid var(--color-border)`)

## 4. Reglas UX y Accesibilidad

1. Contraste mínimo WCAG AA (≥ 4.5:1) en todos los textos y controles.
2. Navegación por teclado completa (`:focus-visible` con contorno visible de `2px`).
3. Modal con `role="dialog"`, `aria-modal="true"`, trampa de foco, cierre con `Escape` y restauración de foco.
4. Acordeón de servicios con `aria-expanded` y `aria-controls`.
5. Áreas interactivas ≥ `44×44px`.
6. Soporte obligatorio de `@media (prefers-reduced-motion: reduce)`.
7. Validación de formulario con `<label>` visibles y mensajes de error asociados por `aria-describedby`.

## 5. Anti-Patrones a Evitar

- **Prohibido:** Gradientes neón, brillos, *glassmorphism* decorativo o fondos oscuros saturados.
- **Prohibido:** Tarjetas genéricas con `box-shadow` pesados o esquinas redondeadas excesivas (`rounded-2xl`/`pill` en bloques de contenido).
- **Prohibido:** Layouts recargados, exceso de iconos/emojis o animaciones continuas (`bounce`/`pulse`).
- **Prohibido:** Inputs sin `<label>` visible o errores mostrados únicamente en un banner superior.
