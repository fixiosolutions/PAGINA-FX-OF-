---
design_intent: D
design_status: not-started
---
# 01: La Compra Segura del Comedero IMIPAW por Maritza

**Project:** FIXIO
**Created:** 2026-06-15
**Method:** Whiteport Design Studio (WDS)

---

## Transaction (Q1)

**What this scenario covers:**
Comprar de forma segura y automática el comedero inteligente de mascotas IMIPAW para programar la alimentación fresca de su gato.

---

## Business Goal (Q2)

**Goal:** Meta Comercial (Venta de 5 comederos/mes) y Meta Operativa (100% de transacciones seguras por pasarela local).
**Objective:** BG01 y BG03.

---

## User & Situation (Q3)

**Persona:** Maritza la Madrugadora (Primary B2C)
**Situation:** Maritza es una profesional de Bogotá que pasa 12 horas fuera de casa por trabajo y transporte. Teme que su gato "Michi" pase hambre o que la comida pierda frescura al aire.

---

## Driving Forces (Q4)

**Hope:** Encontrar un alimentador práctico y confiable que mantenga la comida fresca, comprarlo fácilmente con MercadoPago y tener la tranquilidad de soporte local directo en Bogotá.

**Worry:** Que el sitio web sea inseguro, que las croquetas se bloqueen dejando a su gato con hambre, o que no haya un soporte técnico real a quién recurrir localmente.

---

## Device & Starting Point (Q5 + Q6)

**Device:** Mobile
**Entry:** Busca en Google "comedero inteligente Bogotá entrega inmediata" desde el TransMilenio en su trayecto matutino y hace clic en el enlace orgánico de FIXIO.

---

## Best Outcome (Q7)

**User Success:**
Compra el comedero IMIPAW con MercadoPago, recibe su número de tracking de envío inmediato en Bogotá (<48h) y crea su perfil seguro.

**Business Success:**
Venta registrada en el panel de control, datos del cliente capturados de forma limpia y pasarela integrada sin fallos técnicos.

---

## Shortest Path (Q8)

1. **Portada (Home)** — Ve el catálogo tradicional de productos prácticos por categoría y hace clic en "Ver detalles" del comedero IMIPAW.
2. **Ficha de Producto** — Ve el video de 10 segundos del producto en acción, lee los beneficios de dosificación/frescura y hace clic en "Comprar ahora".
3. **Registro / Inicio de Sesión** — Rellena el formulario de registro obligatorio para proceder con la transacción de forma segura.
4. **Carrito de Compras** — Revisa el resumen de la compra, cantidades y costo de envío a Bogotá, y hace clic en "Proceder al pago".
5. **Checkout** — Ingresa su dirección exacta en Bogotá y completa el pago seguro en la pasarela integrada de MercadoPago/PSE.
6. **Compra Exitosa (Éxito)** — Ve su número de pedido, detalles de despacho en menos de 48 horas y la invitación a participar en el foro una vez reciba el producto. ✓

---

## Trigger Map Connections

**Persona:** Maritza la Madrugadora (Primary B2C)

**Driving Forces Addressed:**
- ✅ **Want:** Alimentación automática programada e historial de control remoto en celular.
- ❌ **Fear:** Inseguridad transaccional y falta de garantía o soporte posventa local directo en Bogotá.

**Business Goal:** BG01 (Vender 5 comederos/mes) y BG03 (100% de transacciones seguras con entregas < 48 horas).

---

## Scenario Steps

| Step | Folder | Purpose | Exit Action |
|------|--------|---------|-------------|
| 01.1 | `01.1-portada/` | Ver el catálogo tradicional y encontrar el comedero IMIPAW | Clic en "Ver detalles" en la tarjeta del producto. |
| 01.2 | `01.2-ficha-producto/` | Conocer los beneficios (dosificación, frescura), ver el video explicativo y decidir comprar | Clic en el botón "Comprar ahora". |
| 01.3 | `01.3-registro-login/` | Registrarse de forma obligatoria antes de confirmar la compra por seguridad | Clic en "Crear mi cuenta segura" tras rellenar el formulario. |
| 01.4 | `01.4-carrito-compras/` | Revisar el resumen del pedido, cantidades y costo de envío | Clic en el botón "Proceder al pago". |
| 01.5 | `01.5-checkout/` | Ingresar dirección de envío de Bogotá y realizar el pago seguro con MercadoPago/PSE/Wompi | Confirmar la transacción exitosa en la pasarela y retornar a FIXIO. |
| 01.6 | `01.6-exito/` | Confirmar el éxito de la compra, recibir número de tracking y ver la invitación al foro | Final — Éxito del escenario (Compra y Registro completos) ✓ |
