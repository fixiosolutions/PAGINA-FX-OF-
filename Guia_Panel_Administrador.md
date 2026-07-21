# ⚙️ Guía y Manual del Panel de Administración - FIXIO Solutions

Este documento detalla todas las herramientas, accesos y procedimientos para administrar la plataforma e-commerce de **FIXIO Solutions S.A.S.**

---

## 🔑 1. Acceso al Panel de Administración

* **Ruta de Acceso:** En la barra de navegación superior, haz clic en el ícono de usuario 👤 o en **"Iniciar Sesión"**.
* **Credenciales de Administrador (Pre-configuradas):**
  * **Correo:** `admin@fixio.com`
  * **Contraseña:** `admin123`
* **Activación del Modo Admin:** Una vez iniciada la sesión, aparecerá la etiqueta **ADMIN** junto a tu nombre en la cabecera. Haz clic en tu nombre y presiona **"⚙️ Panel Administrador"**.

---

## 📦 2. Pestaña "Productos" (Gestión de Catálogo e Inventario / Stock)

En esta sección controlas todo el catálogo visible en la tienda.

### A. Control de Inventario (Stock)
* Cada producto cuenta con un contador de **Stock Disponible** en tiempo real.
* **Descuento Automático:** Cada vez que un cliente realiza un pago exitoso, el sistema descuenta automáticamente la cantidad comprada de dicho producto.
* **Estado AGOTADO:** Si el stock llega a `0`:
  - En la tienda, la tarjeta del producto mostrará un distintivo en blanco y negro: `🚫 AGOTADO`.
  - El botón de compra se deshabilitará automáticamente impidiendo ventas sin inventario.

### B. Reabastecer o Editar un Producto
1. Ubica el producto en la tabla y haz clic en ✏️ **Editar**.
2. Aparecerá el formulario de edición. Modifica el campo **Stock Disponible (Unidades)** para agregar nuevas existencias.
3. Puedes ajustar también el **Precio Venta**, **Precio Anterior (para calcular descuento %)**, **Categoría**, **Etiqueta/Badge** (ej: *Más Vendido*) y **Descripción**.
4. Haz clic en **💾 Guardar Cambios**. La tienda se actualizará al instante.

### C. Crear un Nuevo Producto
1. Haz clic en el botón superior **+ Crear Producto**.
2. Completa el Nombre, Categoría, Stock Inicial, Precio Venta y Descripción.
3. Haz clic en **Guardar e Insertar en Tienda**.

---

## 🚚 3. Pestaña "Pedidos" (Códigos Únicos de Entrega y Logística)

Aquí administras todas las compras recibidas de tus clientes.

### 🔑 Código Único de Entrega de 6 Dígitos
* **¿Qué es?** Es una clave alfanumérica única (ej: `A7X9P2`) generada automáticamente al confirmar cada pedido.
* **Seguridad:**
  - El cliente recibe este código en la pantalla de confirmación, por WhatsApp y en su correo electrónico.
  - El mensajero debe solicitar este código al cliente al momento de entregar el paquete para confirmar la identidad del receptor.
* **Ubicación en el Admin:** En la tabla de pedidos, la columna **Código Entrega (🔑)** muestra en amarillo la clave de cada pedido.

### Cambiar Estado del Pedido
En la columna **Estado**, usa el menú desplegable para actualizar la orden a medida que avance la logística:
* ⏳ **Pendiente:** Pago registrado o en espera.
* 📦 **En Preparación:** El paquete está en empaque.
* 🚚 **Despachado:** El pedido fue entregado a la empresa de mensajería.
* ✅ **Entregado:** El cliente recibió el producto y suministró su código único de entrega.

---

## 📝 4. Pestaña "Blog & Consejos" (Edición y Publicación de Contenido)

Esta sección permite alimentar la comunidad FIXIO con artículos educativos y tips.

### A. Crear un Artículo
1. Haz clic en **+ Publicar Artículo**.
2. Asigna un Título, Categoría (ej: `MASCOTAS`, `HOGAR`), Emoji representativo (`🐶`, `💡`, `🏠`) e Introducción.
3. En **Contenido Completo**, redacta el artículo. Cada salto de línea creará un párrafo formateado automáticamente.
4. Haz clic en **🚀 Publicar Artículo**.

### B. Editar un Artículo Existente
* En la tabla del panel admin, presiona el botón ✏️ **Editar** junto al artículo deseado.
* O bien, mientras navegas como administrador en la sección pública del blog, abre cualquier artículo y verás la barra superior con el botón ✏️ **Editar Artículo**.
* Modifica el título, categoría o texto completo y guarda los cambios.

### C. Eliminar un Artículo
* Presiona 🗑️ **Eliminar** en la tabla del admin o dentro de la vista del artículo para removerlo permanentemente.

---

## 👥 5. Pestaña "Clientes & Suscriptores"
* Consulta la lista de usuarios registrados en la plataforma y compradores frecuentes.
* Revisa los correos suscritos al boletín promocional para campañas de mailing.

---

## 📢 6. Notificaciones Automáticas Configuradas

Cada venta dispara 3 notificaciones automáticas simultáneas:
1. **Correo al Administrador (`fixiosolutions@gmail.com`):** Alerta detallada con datos del cliente, productos y el código único de entrega.
2. **Correo de Comprobante al Cliente:** EmailJS envía la factura/resumen de compra al cliente.
3. **Alerta de WhatsApp Empresarial (`+57 300 000 0000`):** Generación de enlace directo con el mensaje listo para soporte.
