# Key Decisions Log

**Project:** FIXIO
**Format:** Append-only decision log

---

## Decision 1: Modelo de Negocio e Inicio Comercial de FIXIO

**Date:** 2026-06-15
**Step:** Step 1a: Client Profile / Project Setup
**Session:** 1

**Context:**
El cliente, Cristian, quiere lanzar una página web para vender productos prácticos bajo la marca FIXIO, enfocados en mejorar la calidad de vida y que transmitan frescura y confianza. Se requiere integrar MercadoPago y que el diseño sea premium y personalizado para diferenciarse de plantillas de IA genéricas.

**What was decided:**
1. Comenzar las operaciones con un único producto piloto: el **Comedero Inteligente para Mascotas IMIPAW** de 3L con Wi-Fi y app.
2. Definir un precio de venta al público competitivo de **$250.000 COP**.
3. Centrar la logística de entrega y marketing inicial en **Bogotá**, dirigiéndose a hogares de clase media de **estratos 3 y 4**.
4. Utilizar **MercadoPago** como la pasarela principal de pagos electrónicos.
5. Desarrollar la web en una arquitectura moderna e interactiva pero limpia, utilizando HTML, CSS y Javascript Vanilla sin plantillas genéricas.

**Why:**
- Enfocarse en un producto estrella (IMIPAW) simplifica la cadena de suministro, logística y validación de mercado inicial.
- Un precio de $250.000 COP es competitivo frente a Mercado Libre ($282.115 COP) y rentable comparado con los costos de adquisición y nacionalización de Temu/proveedor.
- Bogotá concentra una alta población con mascotas (43% de hogares tienen al menos un gato), especialmente en estratos medios que buscan practicidad y tecnología.
- MercadoPago brinda la mayor seguridad y adaptabilidad en Colombia para tarjetas de crédito, débito y PSE.

**Impact:**
- La estructura del sitio se diseñará en torno al comedero IMIPAW y sus beneficios (comodidad, felicidad de la mascota, tranquilidad del dueño).
- Las integraciones de backend/frontend se enfocarán en la API/Checkout de MercadoPago.
- El diseño visual de FIXIO (verde menta, azul suave, naranja cálido, blanco, gris claro) se aplicará a este layout piloto.

**Alternatives considered:**
- Vender un catálogo amplio de productos prácticos desde el inicio — Descartado para evitar altos costes iniciales de inventario y complejidad logística.
- Usar plataformas cerradas como Shopify con plantillas preconstruidas — Descartado porque el cliente quiere un diseño personalizado y diferente que no parezca hecho con IA genérica.

**Documented in:** `dialog/client-profile.md`

---

## Decision 2: Modelo de Negocio B2C Exclusivo

**Date:** 2026-06-15
**Step:** Step 5: Determine Business Model
**Session:** 1

**Context:**
Se analizó si FIXIO debía incorporar canales B2B (ventas a distribuidores o mayoristas) debido a menciones previas en documentos internos de planeación, o enfocarse únicamente en B2C.

**What was decided:**
FIXIO operará bajo un modelo comercial B2C exclusivo (Business-to-Consumer) en su primera fase, vendiendo directamente a los consumidores finales.

**Why:**
Enfocarse únicamente en B2C simplifica las operaciones de lanzamiento, la gestión de inventario piloto (comenzando con el alimentador inteligente IMIPAW) y permite construir una relación de marca directa y cercana con los usuarios finales en Bogotá a través de la comunidad (foro) y el soporte local.

**Impact:**
- La experiencia web estará optimizada para transacciones individuales rápidas y sencillas.
- No se implementarán flujos complejos de cotizaciones, precios por volumen o perfiles corporativos mayoristas en esta fase.
- La estrategia de comunicación y el foro se centrarán en la experiencia de uso cotidiano en el hogar.

**Alternatives considered:**
- Modelo mixto (B2C + B2B mayorista): Descartado para esta fase inicial para evitar complejidades en la pasarela de pagos (crédito, facturación electrónica corporativa) y control de stock.

**Documented in:** `dialog/progress-tracker.md`

---

## Decision 3: Criterios de Éxito y Métricas del Piloto

**Date:** 2026-06-15
**Step:** Step 8: Define Success Criteria
**Session:** 1

**Context:**
Se determinaron las metas comerciales, de comunidad y operativas para el lanzamiento de la primera versión de la web de FIXIO, centrada en el comedero inteligente IMIPAW.

**What was decided:**
1. Establecer una meta comercial de venta de **5 comederos IMIPAW mensuales** en los primeros 3 meses.
2. Definir una tasa de conversión de opiniones del **6.7%** (1 de cada 15 compradores) para acumular valoraciones reales y generar confianza.
3. Asegurar una operatividad del **100%** en la pasarela de pagos (MercadoPago/PSE/Wompi) y entregas inmediatas en Bogotá en menos de 48 horas.

**Why:**
Estas metas permiten validar la marca y el flujo técnico (inicio de sesión obligatorio, foro, checkout) con un volumen controlado, reduciendo riesgos operativos y garantizando que el soporte y garantía local en Bogotá funcionen de forma impecable antes de escalar.

**Impact:**
- La interfaz del carrito y el checkout deben probarse exhaustivamente para asegurar cero fallos técnicos.
- Se diseñará un incentivo o recordatorio post-venta (ej. un correo sencillo tras recibir el producto) para motivar la reseña en la web (ratio 1:15).

**Alternatives considered:**
- Proyectar ventas masivas desde el inicio: Descartado para priorizar la calidad del servicio, soporte en Bogotá y control de inventario inicial.

**Documented in:** `dialog/progress-tracker.md`

---

## Decision 4: Ventaja Competitiva y Análisis de Competidores

**Date:** 2026-06-15
**Step:** Step 9: Analyze Competitive Landscape
**Session:** 1

**Context:**
Se analizó cómo FIXIO se diferenciará de los gigantes del comercio electrónico como Amazon, Mercado Libre y Temu, considerando también la alternativa de "no hacer nada" del cliente.

**What was decided:**
1. Definir la ventaja competitiva de FIXIO en torno a dos pilares no logísticos: **Curaduría de Confianza** (selección estricta de un solo producto de alta calidad por categoría para evitar la fatiga de elección del cliente) y **Respaldo Posventa Local en Bogotá** (garantía directa y soporte humano accesible frente a la automatización fría de las grandes plataformas).
2. Enfocar la comunicación de la alternativa de "no hacer nada" en las consecuencias observables de la mascota: el desperdicio del alimento al perder frescura expuesto al aire y el ayuno prolongado/hambre por consumir todo de golpe.

**Why:**
Competir en precios o infraestructura con marketplaces globales es inviable. Una boutique de soluciones prácticas de confianza, respaldada con soporte directo en Bogotá y explicaciones en video sencillas en español, es una ventaja sostenible que genera alta lealtad y conversión local.

**Impact:**
- La interfaz y el contenido de la web destacarán el sello de calidad de FIXIO ("probado y garantizado localmente").
- La sección del foro y las fichas técnicas deben mostrar cercanía y asistencia directa ("estamos en Bogotá para ayudarte").

**Alternatives considered:**
- Competir en precios de importación directa: Descartado por falta de escala.
- Ofrecer un catálogo ilimitado de comederos e iniciadores: Descartado para mantener el enfoque de curaduría de confianza.

**Documented in:** `dialog/progress-tracker.md`

---

## Decision 5: Parámetros de Diseño y Flexibilidad del Proyecto

**Date:** 2026-06-15
**Step:** Step 10: Capture Constraints
**Session:** 1

**Context:**
Se determinaron las restricciones técnicas, legales, visuales y de tiempo que actúan como parámetros para diseñar la web de FIXIO.

**What was decided:**
1. Los parámetros fijos del proyecto son de carácter técnico y regulatorio (inicio de sesión obligatorio, pasarelas locales colombianas como MercadoPago/Wompi/PSE, y enlaces legales del footer a la SIC, CCB y Escudo de Colombia).
2. No existen restricciones adicionales de marca o de sistemas externos en esta fase.
3. Se acordó **flexibilidad total en el cronograma y presupuesto** para priorizar la calidad estética del diseño (premium, fresco, no-IA) y la robustez técnica del piloto.

**Why:**
La flexibilidad permite un desarrollo iterativo ásis y minucioso, garantizando que el diseño de la portada estilo catálogo tradicional y las fichas de producto con videos cumplan con los altos estándares de Cristian sin la presión de un deadline apresurado.

**Impact:**
- El desarrollo avanzará de forma incremental, validando prototipos interactivos en el navegador antes de la integración final de MercadoPago.
- Se dedicará el tiempo necesario a diseñar tokens visuales limpios en CSS (verde menta, azul suave, naranja cálido) y micro-animaciones premium.

**Alternatives considered:**
- Establecer un lanzamiento rígido a corto plazo: Descartado para no comprometer el objetivo de un diseño diferenciador y robusto.

**Documented in:** `dialog/progress-tracker.md`

---

## Decision 6: Estrategia de Plataforma y Dispositivos

**Date:** 2026-06-15
**Step:** Step 10a: Define Platform & Device Strategy
**Session:** 1

**Context:**
Se determinó la arquitectura de dispositivos y el enfoque de interacción para la web de FIXIO.

**What was decided:**
1. Desarrollar la plataforma como una **Aplicación Web Responsiva estándar** utilizando HTML5, CSS3 y JavaScript Vanilla.
2. Priorizar el diseño bajo el enfoque **Mobile-First** (celulares primero, seguido de tablets y computadores de escritorio).
3. Optimizar la interfaz para interacciones táctiles y de ratón/teclado.

**Why:**
Una web responsiva estándar evita el coste y la fricción de publicar aplicaciones en tiendas de Apple/Google, permitiendo que un usuario acceda de forma inmediata. El enfoque Mobile-First responde a que la mayoría de los consumidores en Colombia compran y usan redes sociales o foros desde dispositivos móviles, asegurando que el flujo de compra y lectura sea impecable en pantallas pequeñas.

**Impact:**
- La interfaz de usuario (incluidos botones, menús de categorías de la portada tradicional y el reproductor de videos demostrativos) se diseñará para pantallas táctiles de celular como prioridad absoluta.
- Las pruebas de usabilidad se realizarán en simuladores móviles y dispositivos reales antes de la validación en computadores de escritorio.

**Alternatives considered:**
- Desarrollar una App Nativa (iOS/Android): Descartado por la complejidad del desarrollo inicial y la fricción que genera al comprador descargar una app para una compra rápida.
- Progressive Web App (PWA) completa con modo offline: Descartado por ahora, dado que el catálogo y el foro requieren conectividad constante a internet para actualizar stock, precios e interacciones en vivo.

**Documented in:** `dialog/progress-tracker.md`

---

## Decision 7: Tono de Voz y Personalidad de Marca

**Date:** 2026-06-15
**Step:** Step 11: Define Tone of Voice
**Session:** 1

**Context:**
Se definió la personalidad de comunicación y el estilo de los microtextos (microcopy) para la interfaz web de FIXIO.

**What was decided:**
1. Establecer tres atributos de tono de voz principales: **Cercano y Empático**, **Claro y Directo**, y **Confiable y Seguro**.
2. Aplicar este tono en todas las etiquetas, botones, mensajes de éxito, estados vacíos y mensajes de error del sistema, diferenciándose de la frialdad corporativa tradicional.

**Why:**
Dado que FIXIO se enfoca en "soluciones que arreglan tu día" e interactúa con dueños de mascotas y conductores en Bogotá que buscan tranquilidad y soporte humano local, los textos de la interfaz deben actuar como un guía amable y de confianza, eliminando la fricción del registro obligatorio y el pago en línea.

**Impact:**
- La interfaz evitará términos excesivamente técnicos o alertas de error confusas.
- Las llamadas a la acción (CTA) utilizarán verbos activos y seguros (ej. "Crear mi cuenta segura", "Ir a pagar seguro").

**Alternatives considered:**
- Tono formal corporativo: Descartado por ser demasiado distante y frío para una marca comunitaria y de nicho como FIXIO.
- Tono humorístico o demasiado informal: Descartado para no restarle seriedad y seguridad al proceso de registro obligatorio y pasarela de pago.

**Documented in:** `dialog/progress-tracker.md`

---

### Product Brief Synthesis (Step 12)

**Final narrative presented:** Yes, with adjustments made to clarify the curated catalog structure (several products per category instead of only one).

**Adjustments during synthesis:**
- Clarified that FIXIO does not restrict each category to a single product, but instead offers a select range of curated practical solutions per category, maintaining the quality check concept.

**User confirmation:** Refined and confirmed.

**Brief generated:** `c:\Users\gonza\OneDrive\Escritorio\FX PAGINA\design-artifacts\A-Product-Brief\project-brief.md`

**Completion:** 2026-06-15T17:55:00-05:00

---

## Decision 8: Generación del Trigger Map (Fase 2)

**Date:** 2026-06-15
**Step:** Step 9e: Update Design Log (Trigger Mapping completion)
**Session:** 1

**Context:**
Se completó el diseño autónomo del Trigger Map (Dream Mode) basado en la psicología de los usuarios y las características del catálogo de FIXIO.

**What was decided:**
1. Crear tres personas detalladas (*Maritza la Madrugadora*, *Camilo el Conductor* y *Valeria la Viajera*) para modelar los nichos de Mascotas, Automóvil y Viajes.
2. Identificar y priorizar las fuerzas impulsoras (motivadores y frenos) para guiar el diseño del catálogo y las fichas técnicas interactivas.
3. Vincular los frenos clave del cliente (fallos del equipo, desconexión Wi-Fi de 2.4GHz, autodescarga de baterías) con el soporte local en Bogotá y videos de acción real.

**Why:**
Esto permite que el equipo de diseño y desarrollo tenga una referencia psicológica clara. Evita diseñar pantallas con textos fríos o especificaciones confusas y asegura que el diseño responsivo mobile-first destaque soluciones directas a los dolores cotidianos.

**Impact:**
- La página de detalle del comedero IMIPAW tendrá secciones destacadas sobre el respaldo de batería offline y la facilidad de emparejamiento.
- La página del iniciador de batería y calibrador destacará su portabilidad USB-C y el video demostrativo de uso rápido en carretera.
- El foro se estructurará para permitir hilos técnicos resueltos de forma didáctica.

**Documented in:** `design-artifacts/B-Trigger-Map/trigger-map.md`

## Decision 9: Estructuración y Aprobación de los Escenarios UX (Fase 3)

**Date:** 2026-06-15
**Step:** Phase 3: UX Scenarios
**Session:** 1

**Context:**
Se determinó la estructura del recorrido del usuario a través de escenarios para las tres personas B2C (Maritza, Camilo y Valeria) y el rol de administración (Cristian), mapeando la totalidad de las 16 páginas e interacciones críticas del piloto de FIXIO.

**What was decided:**
1. Definir cuatro escenarios de recorrido de usuario lineales:
   - **Escenario 01 (Maritza):** Compra segura del Comedero IMIPAW con MercadoPago (6 pasos).
   - **Escenario 02 (Camilo):** Consulta de dudas técnicas en el foro de conectividad (5 pasos).
   - **Escenario 03 (Valeria):** Actualización de datos de perfil y seguimiento de entrega en Chapinero (1 paso).
   - **Escenario 04 (Cristian - Admin):** Gestión comercial y moderación del foro en el dashboard de escritorio (4 pasos).
2. Establecer el modo de diseño principal en **[D] Dream Mode (Dream Up)** para los cuatro escenarios, permitiendo a la IA proponer los layouts de pantalla responsivos mobile-first de forma autónoma para su posterior revisión y validación por parte del fundador.
3. Asegurar una cobertura total de 16 vistas/pasos lineales estructurados que conecten directamente con las metas del negocio y los disparadores psicológicos.

**Why:**
- Definir escenarios lineales ("sunshine paths") permite enfocar el diseño inicial en la experiencia más feliz y fluida de conversión y participación, evitando perderse en flujos secundarios o de manejo de excepciones.
- El modo Dream Mode maximiza la velocidad de producción visual manteniendo los altos estándares de curaduría estética y de micro-interacciones sin requerir bocetos manuales previos del cliente.

**Impact:**
- Todas las páginas cuentan con un propósito claro, contexto de entrada, acción de salida e interacciones on-page.
- Se ha generado la matriz de cobertura en `design-artifacts/C-UX-Scenarios/00-ux-scenarios.md` sirviendo como guía de referencia estricta para la Fase 4 de Diseño UX.

**Alternatives considered:**
- Diseñar flujos con ramificaciones o árboles de decisión complejos: Descartado para cumplir con las directrices de simplicidad y linealidad del framework WDS en la etapa de maquetación inicial.

**Documented in:** `design-artifacts/C-UX-Scenarios/00-ux-scenarios.md`

---

_Continue appending decisions as they're made throughout the Product Brief process._

