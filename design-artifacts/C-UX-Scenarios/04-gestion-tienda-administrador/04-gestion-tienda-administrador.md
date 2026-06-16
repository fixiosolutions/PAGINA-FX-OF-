---
design_intent: D
design_status: not-started
---
# 04: Cristian Gestiona la Tienda y el Foro en el Panel de Administrador

**Project:** FIXIO
**Created:** 2026-06-15
**Method:** Whiteport Design Studio (WDS)

---

## Transaction (Q1)

**What this scenario covers:**
Administrar el stock de productos prácticos, consultar la base de datos de clientes y sus intereses, controlar los pedidos pagados mediante la pasarela de pagos integrada, y moderar/responder a las participaciones del foro.

---

## Business Goal (Q2)

**Goal:** Operatividad del 100% de la tienda, control logístico y moderación comunitaria (BG01, BG02 y BG03).
**Objective:** BG01, BG02, BG03.

---

## User & Situation (Q3)

**Persona:** Cristian (Founder/Admin)
**Situation:** Cristian es el fundador de FIXIO en Bogotá. Tras el lanzamiento piloto, accede diariamente desde su computador de escritorio para asegurar el correcto funcionamiento del inventario del comedero IMIPAW, controlar que los pedidos pagados se despachen en menos de 48 horas y mantener el foro libre de spam y dudas sin resolver.

---

## Driving Forces (Q4)

**Hope:** Contar con un panel administrativo intuitivo, limpio y de carga rápida que le permita controlar la logística, verificar ingresos y moderar la comunidad con mínimos clics.

**Worry:** Que ocurran descalces de inventario en Bogotá, que haya pagos aprobados en MercadoPago que no aparezcan en el panel de pedidos, o que el foro de conectividad se sature de comentarios de spam sin control.

---

## Device & Starting Point (Q5 + Q6)

**Device:** Desktop
**Entry:** Ingresa en su navegador web a la ruta privada de administración (`/admin` o `/dashboard`) en su computador de escritorio, introduce su usuario y contraseña de administrador, e ingresa al panel principal.

---

## Best Outcome (Q7)

**User Success:**
Cristian actualiza el stock físico del comedero piloto, constata que los registros de clientes nuevos son correctos, confirma el pago exitoso del Pedido #001 de Maritza y aprueba el comentario de Camilo sobre puertos USB en el foro, respondiendo en tono cercano.

**Business Success:**
Control comercial absoluto de la plataforma en tiempo real, reducción de errores logísticos de despacho, y dinamización segura del foro corporativo.

---

## Shortest Path (Q8)

1. **Administración de Productos (Admin Productos)** — Revisa el catálogo, edita el stock del comedero inteligente IMIPAW y guarda los cambios de inventario.
2. **Administración de Clientes (Admin Clientes)** — Visualiza la lista de usuarios registrados con sus datos de contacto e intereses para marketing de fidelización.
3. **Administración de Pedidos (Admin Pedidos)** — Comprueba el estado del Pedido #001 de Maritza (Pagado por MercadoPago) y actualiza su estado logístico a "Despachado".
4. **Administración de Contenido (Admin Contenido/Foro)** — Revisa la cola de moderación, aprueba el comentario de Camilo y responde a su duda técnica en nombre de FIXIO. ✓

---

## Trigger Map Connections

**Persona:** Cristian (Founder/Admin)

**Driving Forces Addressed:**
- ✅ **Want:** Control administrativo unificado de productos, pedidos de MercadoPago y moderación del foro.
- ❌ **Fear:** Falta de trazabilidad en las órdenes de compra o descontrol de spam en la sección de comunidad.

**Business Goal:** BG01 (Ventas piloto controladas), BG02 (Moderación activa del foro) y BG03 (Garantía operativa y despachos locales < 48 horas).

---

## Scenario Steps

| Step | Folder | Purpose | Exit Action |
|------|--------|---------|-------------|
| 04.1 | `04.1-admin-productos/` | Gestionar catálogo de productos prácticos, modificar stock disponible y precio de venta del comedero IMIPAW | Clic en el enlace "Clientes" en el menú lateral. |
| 04.2 | `04.2-admin-clientes/` | Consultar la base de datos de usuarios registrados en Bogotá, sus datos y preferencias seleccionadas | Clic en el enlace "Pedidos" en el menú lateral. |
| 04.3 | `04.3-admin-pedidos/` | Revisar transacciones de compra, confirmar ID de MercadoPago y cambiar estado logístico a despachado | Clic en el enlace "Contenido / Foro" en el menú lateral. |
| 04.4 | `04.4-admin-contenido/` | Moderar comentarios del foro, aprobar la pregunta de Camilo y redactar la respuesta técnica oficial | Final — Éxito del escenario (Administración y moderación completas) ✓ |
