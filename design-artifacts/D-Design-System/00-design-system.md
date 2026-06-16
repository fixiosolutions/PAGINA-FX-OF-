# Sistema de Diseño de FIXIO (Tokens Visuales y Componentes)

> Especificación y escala de tokens de diseño para la plataforma de FIXIO SOLUTIONS SAS.

---

## Paleta de Colores

| Token | Color (HEX) | Uso en Interfaz |
|-------|-------------|-----------------|
| `color-primary-mint` | `#10B981` (Mint/Esmeralda) | Acentos principales, insignias positivas, botones de éxito. |
| `color-secondary-blue` | `#0284C7` (Soft Blue/Cielo) | Enlaces, elementos interactivos secundarios, badges informativos. |
| `color-accent-orange` | `#F97316` (Warm Orange) | Llamados a la acción de alta conversión (CTA principal, "Comprar"). |
| `color-bg-canvas` | `#F8FAFC` (Slate 50) | Fondo general de la aplicación (light mode limpio). |
| `color-bg-card` | `#FFFFFF` | Fondo de tarjetas de producto, bloques de foro y modales. |
| `color-text-primary` | `#0F172A` (Slate 900) | Títulos principales y cuerpo de texto con alta legibilidad. |
| `color-text-secondary` | `#475569` (Slate 600) | Textos de ayuda, leyendas secundarias y descripciones cortas. |
| `color-border-light` | `#E2E8F0` (Slate 200) | Líneas divisorias, bordes de tarjetas y inputs de formulario. |

---

## Escala de Espaciado (Spacing Scale)

El espaciado vertical y horizontal del sitio debe ceñirse estrictamente a los siguientes tokens:

| Token | Valor (px) | Aplicación Típica |
|-------|------------|-------------------|
| `space-none` | 0px | Elementos continuos pegados. |
| `space-xs` | 4px | Margen interno mínimo, espaciado de iconos. |
| `space-sm` | 8px | Margen interno entre textos del mismo grupo. |
| `space-md` | 16px | Margen general entre componentes e inputs. |
| `space-lg` | 24px | Margen interno de tarjetas y espaciado de secciones móviles. |
| `space-xl` | 32px | Espaciado entre secciones de la portada móvil. |
| `space-2xl` | 48px | Espaciado entre secciones principales de escritorio. |
| `space-3xl` | 64px | Separador visual para pies de página e inicios. |
| `space-flex` | Dinámico | Espaciado auto-calculado o alineación flexible (flex/grid). |

---

## Escala Tipográfica (Type Scale)

El sitio utiliza las fuentes de Google Fonts: **Outfit** (para títulos/headings) e **Inter** (para textos de cuerpo y formularios).

| Token | Tamaño (Rem/px) | Line-height | Peso | Familia | Aplicación |
|-------|-----------------|-------------|------|---------|------------|
| `text-2xs` | `0.625rem` (10px) | 14px | Regular | Inter | Micro-etiquetas, fechas |
| `text-xs` | `0.75rem` (12px) | 16px | Regular | Inter | Ayudas de formularios, legal |
| `text-sm` | `0.875rem` (14px) | 20px | Regular | Inter | Texto secundario, descripciones |
| `text-md` | `1rem` (16px) | 24px | Regular | Inter | Cuerpo de texto principal |
| `text-lg` | `1.125rem` (18px) | 28px | Medium | Inter | Subtítulos grandes |
| `text-xl` | `1.25rem` (20px) | 30px | SemiBold | Outfit | Títulos de tarjetas y bloques |
| `text-2xl` | `1.5rem` (24px) | 32px | Bold | Outfit | Títulos de sección (H2) |
| `text-3xl` | `1.875rem` (30px) | 38px | Bold | Outfit | H1 de páginas estándar |
| `text-4xl` | `2.25rem` (36px) | 44px | Bold | Outfit | H1 de páginas especiales / Hero |
| `text-5xl` | `3rem` (48px) | 56px | Black | Outfit | H1 Hero Desktop (Pilotos) |

---

## Componentes Compartidos (Shared Components)

### 1. Botones (Buttons)

#### Botón de Acción Rápida (CTA Principal)
- **Clase CSS:** `.btn-primary`
- **Color de fondo:** `color-accent-orange` (`#F97316`)
- **Texto:** Blanco (`#FFFFFF`), `text-md`, Bold.
- **Micro-interacciones:** Transición suave al pasar el cursor (hover) oscureciendo el fondo 10% y escalado leve de `1.02` en hover.

#### Botón Secundario (Secondary)
- **Clase CSS:** `.btn-secondary`
- **Color de fondo:** Transparente con borde de `1.5px` en `color-secondary-blue` (`#0284C7`).
- **Texto:** `color-secondary-blue`, `text-md`, Medium.
- **Hover:** Fondo sutil del color azul con opacidad del 10%.

#### Botón de Éxito / Guardado
- **Clase CSS:** `.btn-success`
- **Color de fondo:** `color-primary-mint` (`#10B981`)
- **Texto:** Blanco (`#FFFFFF`), `text-md`, Bold.

---

### 2. Entradas de Formulario (Inputs)

#### Campo de Texto
- **Clase CSS:** `.form-input`
- **Estilo:** Borde `1px` sólido Slate 200, fondo Blanco, bordes redondeados `6px`, relleno interno `space-md` horizontal y `space-sm` vertical.
- **Enfoque (Focus):** Borde cambia a `color-secondary-blue` y sombra difuminada de `3px` azul suave.

---

### 3. Tarjetas de Catálogo (Product Cards)

- **Clase CSS:** `.product-card`
- **Estilo:** Caja blanca, bordes redondeados `12px`, borde Slate 200, sombra suave.
- **Hover:** Eleve vertical de `4px` y aumento del contraste de sombra para micro-animación premium.
