---
design_intent: D
design_status: not-started
---
# 03: Valeria Actualiza su Perfil y Revisa su Historial de Pedidos

**Project:** FIXIO
**Created:** 2026-06-15
**Method:** Whiteport Design Studio (WDS)

---

## Transaction (Q1)

**What this scenario covers:**
Actualizar los datos personales de contacto, gestionar las direcciones de despacho guardadas para Bogotá y verificar el estado logístico de un pedido anterior descargando el comprobante de pago.

---

## Business Goal (Q2)

**Goal:** Meta de Fidelización y Soporte (BG03 - Reducción de costos de soporte y prevención de fallos de despacho en Bogotá).
**Objective:** BG03.

---

## User & Situation (Q3)

**Persona:** Valeria la Viajera (Tertiary B2C)
**Situation:** Valeria acaba de mudarse a un nuevo apartamento de estrato 4 en Chapinero, Bogotá. Necesita actualizar su dirección de envío predeterminada en FIXIO para evitar errores en sus próximos pedidos y confirmar si el Comedero Inteligente IMIPAW que compró ya fue despachado.

---

## Driving Forces (Q4)

**Hope:** Actualizar su dirección de Chapinero de forma instantánea y fluida desde su celular, y comprobar de forma visual si su comedero ya está en camino.

**Worry:** Que el sistema no aplique los cambios a tiempo, que su pedido piloto se envíe a su dirección anterior de Bogotá o que la interfaz no sea clara sobre el estado del envío.

---

## Device & Starting Point (Q5 + Q6)

**Device:** Mobile
**Entry:** Inicia sesión con su cuenta en la web de FIXIO desde su celular en la sala de espera del terminal de transportes de Bogotá, y hace clic en el enlace "Mi Cuenta" en el menú de navegación.

---

## Best Outcome (Q7)

**User Success:**
Modifica su dirección de despacho a su nuevo domicilio en Chapinero con éxito, ve la confirmación visual de los datos actualizados y verifica que su pedido de comedero IMIPAW está despachado con su respectiva guía.

**Business Success:**
Datos de entrega actualizados automáticamente sin requerir llamadas o chats de soporte, reduciendo riesgos de fallos logísticos y aumentando la confianza del cliente.

---

## Shortest Path (Q8)

1. **Mi Cuenta (Perfil)** — Accede a su panel de control del cliente, edita su dirección de entrega en Bogotá a su nuevo apartamento de Chapinero y revisa el historial con el estado logístico de su última compra. ✓

---

## Trigger Map Connections

**Persona:** Valeria la Viajera (Tertiary B2C)

**Driving Forces Addressed:**
- ✅ **Want:** Panel de perfil ágil donde ver historial y verificar despachos desde cualquier lugar.
- ❌ **Fear:** Logística confusa o falta de visualización sobre el estado real de su pedido en Bogotá.

**Business Goal:** BG03 (Fidelización del cliente mediante un autoservicio eficiente y reducción de incidencias en entrega).

---

## Scenario Steps

| Step | Folder | Purpose | Exit Action |
|------|--------|---------|-------------|
| 03.1 | `03.1-mi-cuenta/` | Administrar información personal, cambiar dirección en Bogotá, revisar historial y tracking del pedido IMIPAW | Final — Éxito del escenario (Perfil actualizado y estado de despacho confirmado) ✓ |
