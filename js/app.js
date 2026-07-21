/* ==========================================================================
   FIXIO SOLUTIONS - INTERACTIVE APPLICATION LOGIC
   ========================================================================== */

// Catalog Dataset derived from FIXIO MATERIAL
const DEFAULT_PRODUCTS = [
  {
    id: "FX-001",
    name: "Alimentador Inteligente IMIPAW para Mascotas 3L",
    category: "mascotas",
    categoryName: "Mascotas",
    price: 250000,
    oldPrice: 320000,
    rating: 4.9,
    reviews: 48,
    badge: "Más Vendido",
    stock: 15,
    desc: "Dispensador automático con conectividad Wi-Fi, control por App móvil, porciones programables y doble fuente de energía (USB/Batería). Capacidad para 3 Litros.",
    benefits: ["Control remoto por App móvil", "Doble alimentación USB/Batería", "Programación de horarios de comida"],
    reviewsList: [
      { author: 'Maritza Rodríguez', rating: 5, date: '15/07/2026', comment: 'Excelente alimentador. Mi gato Milo come exactamente a las 7am y 7pm sin falta. La App es facilísima de usar.' },
      { author: 'Juan Pablo G.', rating: 5, date: '10/07/2026', comment: 'Muy práctico. Se me fue la luz un día y las baterías de respaldo mantuvieron la comida a tiempo.' }
    ],
    imgUrl: 'MATERIAL/img-fx001.png',
    svgIcon: `<svg viewBox="0 0 200 200" width="120" height="120"><rect x="50" y="40" width="100" height="130" rx="20" fill="#0D9488"/><rect x="60" y="50" width="80" height="60" rx="10" fill="#2DD4BF"/><circle cx="100" cy="135" r="18" fill="#FFF"/><circle cx="100" cy="135" r="10" fill="#0F172A"/><path d="M70 160 Q100 175 130 160" stroke="#F97316" stroke-width="6" fill="none" stroke-linecap="round"/></svg>`
  },
  {
    id: "FX-002",
    name: "Dispensador de Agua Automático con Filtro Triple",
    category: "mascotas",
    categoryName: "Mascotas",
    price: 95000,
    oldPrice: 130000,
    rating: 4.8,
    reviews: 32,
    badge: "Práctico",
    stock: 20,
    desc: "Fuente de agua ultrasilenciosa de 2.5L con sistema de filtrado continuo de carbono activado para mantener agua fresca 24/7.",
    benefits: ["Filtrado de alta pureza", "Motor ultrasilencioso <20dB", "Bajo consumo eléctrico"],
    reviewsList: [
      { author: 'Carolina M.', rating: 5, date: '12/07/2026', comment: 'Silencioso y super limpio. Mis dos gatos ahora toman mucha más agua.' }
    ],
    imgUrl: 'MATERIAL/img-fx002.png',
    svgIcon: `<svg viewBox="0 0 200 200" width="120" height="120"><circle cx="100" cy="100" r="75" fill="#3B82F6"/><circle cx="100" cy="100" r="55" fill="#60A5FA"/><path d="M100 45 C80 80 70 100 100 135 C130 100 120 80 100 45 Z" fill="#FFF"/></svg>`
  },
  {
    id: "FX-003",
    name: "Soporte Ergonómico Plegable para Laptop y Celular",
    category: "oficina",
    categoryName: "Oficina",
    price: 65000,
    oldPrice: 89000,
    rating: 4.7,
    reviews: 24,
    badge: "Popular",
    stock: 25,
    desc: "Estructura de aluminio reforzada con 7 niveles de inclinación ergonómica. Reduce la fatiga de cuello y mejora la ventilación.",
    benefits: ["7 niveles de inclinación", "Ultra ligero y plegable", "Mejora la postura de trabajo"],
    reviewsList: [
      { author: 'Camilo Restrepo', rating: 5, date: '14/07/2026', comment: 'Me alivió el dolor de cuello en el teletrabajo. Muy resistente de aluminio.' }
    ],
    imgUrl: 'MATERIAL/img-fx003.png',
    svgIcon: `<svg viewBox="0 0 200 200" width="120" height="120"><path d="M40 140 L160 140 L140 70 L60 70 Z" fill="#64748B"/><rect x="50" y="140" width="100" height="12" rx="4" fill="#0F172A"/><rect x="85" y="110" width="30" height="30" rx="4" fill="#2DD4BF"/></svg>`
  },
  {
    id: "FX-004",
    name: "Lámpara LED con Sensor de Movimiento Recargable USB",
    category: "hogar",
    categoryName: "Hogar",
    price: 45000,
    oldPrice: 65000,
    rating: 4.9,
    reviews: 56,
    badge: "Útil",
    stock: 12,
    desc: "Tira de luz LED magnética para armarios, cocinas y pasillos. Se enciende automáticamente al detectar presencia en la oscuridad.",
    benefits: ["Fácil instalación magnética", "Batería de larga duración recargable", "Sensor PIR inteligente"],
    reviewsList: [
      { author: 'Sonia P.', rating: 5, date: '11/07/2026', comment: 'Puse dos en el clóset y otra en la cocina. El sensor funciona perfecto.' }
    ],
    imgUrl: 'MATERIAL/img-fx004.png',
    svgIcon: `<svg viewBox="0 0 200 200" width="120" height="120"><rect x="30" y="85" width="140" height="30" rx="15" fill="#F97316"/><circle cx="100" cy="100" r="25" fill="#FFF"/><circle cx="100" cy="100" r="12" fill="#FDE047"/></svg>`
  },
  {
    id: "FX-005",
    name: "Kit de Limpieza Multiuso 7-en-1 para Tecnología",
    category: "tecnologia",
    categoryName: "Tecnología",
    price: 38000,
    oldPrice: 55000,
    rating: 4.8,
    reviews: 19,
    badge: "Esencial",
    stock: 30,
    desc: "Herramienta portátil compacta con cepillos, extractor de teclas y gel limpiador para auriculares, teclados y teléfonos.",
    benefits: ["7 herramientas en 1 solo dispositivo", "Protege dispositivos delicados", "Diseño compacto para viaje"],
    reviewsList: [
      { author: 'Andrés V.', rating: 5, date: '09/07/2026', comment: 'Muy completo para limpiar audífonos e AirPods. Práctico para cargar en la maleta.' }
    ],
    imgUrl: 'MATERIAL/img-fx005.png',
    svgIcon: `<svg viewBox="0 0 200 200" width="120" height="120"><rect x="60" y="40" width="80" height="120" rx="16" fill="#0F172A"/><rect x="75" y="60" width="50" height="20" rx="6" fill="#2DD4BF"/><circle cx="100" cy="120" r="15" fill="#F97316"/></svg>`
  },
  {
    id: "FX-006",
    name: "Aspiradora Portátil de Alta Potencia Inalámbrica",
    category: "auto",
    categoryName: "Auto",
    price: 115000,
    oldPrice: 160000,
    rating: 4.9,
    reviews: 37,
    badge: "Potente",
    stock: 5,
    desc: "Aspiradora de mano con succión ciclónica de 9000Pa y filtro HEPA lavable. Perfecta para el auto y rincones del hogar.",
    benefits: ["Batería recargable Li-Ion", "Filtro HEPA lavable e intercambiable", "Boquillas intercambiables"],
    reviewsList: [
      { author: 'Mateo K.', rating: 5, date: '16/07/2026', comment: 'Tiene bastante fuerza de succión para las migas en el carro. Filtro fácil de lavar.' }
    ],
    imgUrl: 'MATERIAL/img-fx006.png',
    svgIcon: `<svg viewBox="0 0 200 200" width="120" height="120"><path d="M40 100 Q100 60 160 100 L140 130 Q100 110 60 130 Z" fill="#0F766E"/><rect x="150" y="90" width="30" height="20" rx="5" fill="#F97316"/></svg>`
  }
];

// Persistent state with localStorage
let PRODUCTS = JSON.parse(localStorage.getItem('fixio_products') || 'null');
if (!PRODUCTS) {
  PRODUCTS = DEFAULT_PRODUCTS;
  localStorage.setItem('fixio_products', JSON.stringify(PRODUCTS));
} else {
  let updated = false;
  PRODUCTS.forEach(p => {
    if (p.stock === undefined) {
      const match = DEFAULT_PRODUCTS.find(dp => dp.id === p.id);
      p.stock = match ? match.stock : 10;
      updated = true;
    }
  });
  if (updated) {
    localStorage.setItem('fixio_products', JSON.stringify(PRODUCTS));
  }
}

function saveProducts() {
  localStorage.setItem('fixio_products', JSON.stringify(PRODUCTS));
}

// Cart & Orders & Auth State Management
let cart = JSON.parse(localStorage.getItem('fixio_cart') || '[]');
let orders = JSON.parse(localStorage.getItem('fixio_orders') || '[]');
let subscribers = JSON.parse(localStorage.getItem('fixio_subscribers') || '[]');
let currentUser = JSON.parse(localStorage.getItem('fixio_user') || 'null');

// Registered Users — with admin pre-seeded
let registeredUsers = JSON.parse(localStorage.getItem('fixio_users') || '[]');
if (!registeredUsers.find(u => u.email === 'admin@fixio.com')) {
  registeredUsers.unshift({
    name: 'Administrador FIXIO',
    email: 'admin@fixio.com',
    pass: 'admin123',
    role: 'admin',
    address: 'Cra 18 #78-74 Of 602, Bogotá',
    phone: '+57 311 6860336'
  });
  localStorage.setItem('fixio_users', JSON.stringify(registeredUsers));
}

// Blog Posts State
let blogPosts = JSON.parse(localStorage.getItem('fixio_blog') || '[]');
if (blogPosts.length === 0) {
  blogPosts = [
    {
      id: "BLOG-001",
      title: "Cómo Automatizar las Comidas de tu Gato sin Estresarlo",
      category: "MASCOTAS",
      icon: "🐱",
      bgGradient: "linear-gradient(135deg, #CCFBF1 0%, #99F6E4 100%)",
      desc: "Aprende a configurar porciones exactas con alimentadores inteligentes para evitar sobrepeso y mantener la rutina aunque no estés en casa."
    },
    {
      id: "BLOG-002",
      title: "5 Soluciones de Iluminación Inteligente Para Espacios Pequeños",
      category: "HOGAR EFICIENTE",
      icon: "💡",
      bgGradient: "linear-gradient(135deg, #FFEDD5 0%, #FED7AA 100%)",
      desc: "Descubre cómo las lámparas sensoras recargables te ahorran electricidad y eliminan los tropiezos nocturnos."
    },
    {
      id: "BLOG-003",
      title: "Postura Ergonómica en Teletrabajo: Guía Para Evitar Dolores",
      category: "OFICINA PRÁCTICA",
      icon: "💻",
      bgGradient: "linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%)",
      desc: "Consejos sencillos para ajustar la altura de tu pantalla y soporte para laptop reduciendo la fatiga de cuello y espalda."
    }
  ];
  localStorage.setItem('fixio_blog', JSON.stringify(blogPosts));
}

// DOM Elements Initialization
document.addEventListener('DOMContentLoaded', () => {
  renderProducts(PRODUCTS);
  renderBlogPosts();
  updateCartCount();
  renderHeaderAuth();
  setupEventListeners();
  initScrollReveal();
});

// ─── Scroll Reveal with IntersectionObserver ───────────────────────────────
function initScrollReveal() {
  const revealEls = document.querySelectorAll('.reveal-on-scroll');
  if (!revealEls.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // only trigger once
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealEls.forEach(el => observer.observe(el));
}

// ─── Newsletter Subscription ──────────────────────────────────────────────
function handleNewsletterSubscription(event) {
  event.preventDefault();
  const email = document.getElementById('newsletterEmail')?.value.trim();
  if (!email) return;

  // Save to subscribers list
  const sub = { email, date: new Date().toLocaleDateString('es-CO'), source: 'Newsletter Banner' };
  subscribers = JSON.parse(localStorage.getItem('fixio_subscribers') || '[]');
  const alreadyExists = subscribers.find(s => s.email === email);
  if (!alreadyExists) {
    subscribers.push(sub);
    localStorage.setItem('fixio_subscribers', JSON.stringify(subscribers));
  }

  // Show success state
  const form = document.getElementById('newsletterForm');
  const success = document.getElementById('newsletterSuccess');
  if (form) form.style.display = 'none';
  if (success) success.style.display = 'flex';
  showToast('🎉 ¡Suscripción confirmada! Gracias por unirte a FIXIO.');
}

// ─── Contact Form Handler ─────────────────────────────────────────────────
function handleContactForm(event) {
  event.preventDefault();
  const name = document.getElementById('ctName')?.value.trim();
  const email = document.getElementById('ctEmail')?.value.trim();
  const subject = document.getElementById('ctSubject')?.value;
  const message = document.getElementById('ctMessage')?.value.trim();

  if (!name || !email || !message) return;

  // Simulate sending (store locally for admin reference)
  const messages = JSON.parse(localStorage.getItem('fixio_messages') || '[]');
  messages.unshift({
    id: 'MSG-' + Date.now(),
    date: new Date().toLocaleDateString('es-CO'),
    name, email, subject, message
  });
  localStorage.setItem('fixio_messages', JSON.stringify(messages));

  // Show success
  const form = document.getElementById('contactForm');
  const success = document.getElementById('contactSuccess');
  if (form) form.style.display = 'none';
  if (success) success.style.display = 'block';
  showToast('📨 ¡Mensaje enviado! Te responderemos pronto.');
}


// Render Products Grid
function renderProducts(items) {
  const container = document.getElementById('productsContainer');
  if (!container) return;

  if (items.length === 0) {
    container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
      <h3>No encontramos productos en esta categoría</h3>
      <p>Prueba buscando otro término o seleccionando 'Todas'</p>
    </div>`;
    return;
  }

  container.innerHTML = items.map(product => {
    const discount = product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : 0;
    const isSoldOut = (product.stock !== undefined && product.stock <= 0);
    const thumbContent = product.imgUrl
      ? `<img src="${product.imgUrl}" alt="${product.name}" style="width:100%; height:100%; object-fit:cover; border-radius:12px; ${isSoldOut ? 'filter:grayscale(80%); opacity:0.7;' : ''}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" /><div style="display:none; align-items:center; justify-content:center; width:100%; height:100%;">${product.svgIcon}</div>`
      : product.svgIcon;

    return `
    <div class="product-card ${isSoldOut ? 'sold-out' : ''}">
      <div class="product-thumb" style="position:relative; overflow:hidden;">
        <span class="badge-category">${product.categoryName}</span>
        ${isSoldOut ? `<span style="position:absolute; top:10px; left:10px; background:#1E293B; color:#FFF; font-size:0.7rem; font-weight:800; padding:4px 9px; border-radius:20px; z-index:3; letter-spacing:0.05em;">🚫 AGOTADO</span>` : ''}
        ${discount >= 10 && !isSoldOut ? `<span style="position:absolute; top:10px; right:10px; background:#EF4444; color:#fff; font-size:0.7rem; font-weight:800; padding:3px 7px; border-radius:20px; z-index:2;">-${discount}%</span>` : ''}
        ${thumbContent}
      </div>
      <div class="product-body">
        <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:5px;">
          <div style="display:flex; align-items:center; gap:6px;">
            <div style="display:flex; gap:2px;">${'★'.repeat(Math.round(product.rating))}<span style="color:#e2e8f0;">${'★'.repeat(5 - Math.round(product.rating))}</span></div>
            <span style="font-size:0.78rem; color:var(--text-muted);">(${product.reviews})</span>
          </div>
          ${!isSoldOut && product.stock !== undefined ? `<span style="font-size:0.75rem; color:${product.stock <= 5 ? '#D97706' : 'var(--success)'}; font-weight:600;">Stock: ${product.stock} disp.</span>` : ''}
        </div>
        <h3 class="product-title">${product.name}</h3>
        <p class="product-desc">${product.desc}</p>
        <div class="product-footer">
          <div>
            <div class="product-price">$${formatNumber(product.price)} <span style="font-size:0.7rem; font-weight:500;">COP</span></div>
            ${product.oldPrice ? `<div style="font-size:0.8rem; color:var(--text-light); text-decoration:line-through;">$${formatNumber(product.oldPrice)}</div>` : ''}
          </div>
          <div style="display:flex; gap:6px;">
            <button class="btn btn-outline" onclick="openProductDetail('${product.id}')" style="padding: 8px 12px; font-size: 0.8rem; display:flex; align-items:center; gap:5px;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              Detalle
            </button>
            ${isSoldOut ? `
              <button class="btn btn-outline" disabled style="padding: 8px 12px; font-size: 0.8rem; opacity:0.55; cursor:not-allowed; border-color:var(--border);">
                Agotado
              </button>
            ` : `
              <button class="btn btn-primary" onclick="addToCart('${product.id}')" style="padding: 8px 12px; font-size: 0.8rem; display:flex; align-items:center; gap:5px;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                Agregar
              </button>
            `}
          </div>
        </div>
      </div>
    </div>
  `}).join('');
}

// ─── Sort Products ─────────────────────────────────────────────────────────
function sortProducts(criteria) {
  const pillActive = document.querySelector('.pill-btn.active');
  const activeCategory = pillActive ? pillActive.dataset.category : 'all';
  let items = activeCategory === 'all' ? [...PRODUCTS] : PRODUCTS.filter(p => p.category === activeCategory);
  
  if (criteria === 'price-asc') items.sort((a, b) => a.price - b.price);
  else if (criteria === 'price-desc') items.sort((a, b) => b.price - a.price);
  else if (criteria === 'rating') items.sort((a, b) => b.rating - a.rating);
  else if (criteria === 'reviews') items.sort((a, b) => b.reviews - a.reviews);
  
  renderProducts(items);
}

// Event Listeners Setup
function setupEventListeners() {
  // Category Pills
  const pills = document.querySelectorAll('.pill-btn');
  pills.forEach(pill => {
    pill.addEventListener('click', (e) => {
      pills.forEach(p => p.classList.remove('active'));
      e.target.classList.add('active');
      const cat = e.target.dataset.category;
      // reset sort
      const sortSelect = document.getElementById('sortSelect');
      if (sortSelect) sortSelect.value = 'default';
      filterCategory(cat);
    });
  });

  // Sort select
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => sortProducts(e.target.value));
  }

  // FAQ Search
  const faqSearch = document.getElementById('faqSearchInput');
  if (faqSearch) {
    faqSearch.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase().trim();
      const items = document.querySelectorAll('.faq-item');
      let anyVisible = false;
      items.forEach(item => {
        const text = item.textContent.toLowerCase();
        const match = !term || text.includes(term);
        item.style.display = match ? '' : 'none';
        if (match) anyVisible = true;
      });
      const noResult = document.getElementById('faqNoResult');
      if (noResult) noResult.style.display = anyVisible ? 'none' : 'block';
    });
  }

  // Search filter
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase().trim();
      if (!term) {
        renderProducts(PRODUCTS);
        return;
      }
      const filtered = PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(term) ||
        p.desc.toLowerCase().includes(term) ||
        p.categoryName.toLowerCase().includes(term)
      );
      renderProducts(filtered);
    });
  }
}

// Filter By Category
function filterCategory(category) {
  if (category === 'all') {
    renderProducts(PRODUCTS);
  } else {
    const filtered = PRODUCTS.filter(p => p.category === category);
    renderProducts(filtered);
  }
}

// Add to Cart
function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  if (product.stock !== undefined && product.stock <= 0) {
    showToast(`⛔ El producto "${product.name}" se encuentra AGOTADO.`);
    return;
  }

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  saveCart();
  updateCartCount();
  showToast(`¡${product.name} agregado al carrito!`);
  openCartDrawer();
}

function updateCartCount() {
  const badge = document.getElementById('cartBadge');
  if (badge) {
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    badge.textContent = totalQty;
  }
}

function saveCart() {
  localStorage.setItem('fixio_cart', JSON.stringify(cart));
}

function openCartDrawer() {
  renderCartDrawer();
  document.getElementById('cartOverlay')?.classList.add('active');
  document.getElementById('cartDrawer')?.classList.add('active');
}

function closeCartDrawer() {
  document.getElementById('cartOverlay')?.classList.remove('active');
  document.getElementById('cartDrawer')?.classList.remove('active');
}

// Coupon & Shipping State
let appliedCoupon = JSON.parse(localStorage.getItem('fixio_coupon') || 'null');

const COUPONS = {
  'FIXIO10': { type: 'percent', value: 10, label: '10% Dcto FIXIO' },
  'ENVIOGRATIS': { type: 'free_shipping', value: 0, label: 'Envío Gratis' },
  'PRIMERACOMPRA': { type: 'fixed', value: 15000, label: '$15.000 Dcto Bienvenida' }
};

function renderCartDrawer() {
  const container = document.getElementById('cartItemsList');
  const footerElem = document.querySelector('.cart-footer');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px 20px; color: var(--text-muted);">
        <p style="font-size: 2.5rem; margin-bottom: 10px;">🛒</p>
        <p style="font-weight: 600;">Tu carrito está vacío</p>
        <p style="font-size: 0.85rem;">Descubre nuestros productos prácticos para agregar.</p>
      </div>`;
    if (footerElem) {
      footerElem.innerHTML = `
        <div class="cart-subtotal"><span>Subtotal:</span><span>$0 COP</span></div>
        <button class="btn btn-accent" style="width:100%;" disabled style="opacity:0.5;">Proceder al Pago 🔒</button>
      `;
    }
    return;
  }

  let subtotal = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
  
  // Shipping Progress Calculation ($150.000 COP threshold)
  const freeShippingGoal = 150000;
  const progressPercent = Math.min(100, Math.round((subtotal / freeShippingGoal) * 100));
  const remainingForFree = Math.max(0, freeShippingGoal - subtotal);

  let discountAmount = 0;
  let isFreeShippingCoupon = false;

  if (appliedCoupon && COUPONS[appliedCoupon]) {
    const c = COUPONS[appliedCoupon];
    if (c.type === 'percent') {
      discountAmount = Math.round(subtotal * (c.value / 100));
    } else if (c.type === 'fixed') {
      discountAmount = Math.min(subtotal, c.value);
    } else if (c.type === 'free_shipping') {
      isFreeShippingCoupon = true;
    }
  }

  // Calculate default shipping fee
  let defaultShipping = 8000;
  if (subtotal >= freeShippingGoal || isFreeShippingCoupon) {
    defaultShipping = 0;
  }

  const finalTotal = Math.max(0, subtotal - discountAmount + defaultShipping);

  container.innerHTML = `
    <!-- Shipping Progress Bar -->
    <div class="shipping-progress">
      <div style="display:flex; justify-content:space-between;">
        <span>🚚 Envío Gratis en Bogotá:</span>
        <strong>${remainingForFree === 0 ? '¡CONSEGUIDO! 🎉' : `Faltan $${formatNumber(remainingForFree)} COP`}</strong>
      </div>
      <div class="progress-bar-track">
        <div class="progress-bar-fill" style="width: ${progressPercent}%;"></div>
      </div>
    </div>

    ${cart.map(item => `
      <div class="cart-item">
        <div class="cart-item-img">${item.svgIcon}</div>
        <div class="cart-item-info">
          <div class="cart-item-title">${item.name}</div>
          <div class="cart-item-price">$${formatNumber(item.price)} COP</div>
          <div style="display: flex; align-items: center; gap: 8px; margin-top: 6px;">
            <button onclick="changeQty('${item.id}', -1)" style="border:1px solid #CBD5E1; background:#FFF; width:26px; height:26px; border-radius:4px; cursor:pointer;">-</button>
            <span style="font-weight:600; font-size:0.9rem;">${item.qty}</span>
            <button onclick="changeQty('${item.id}', 1)" style="border:1px solid #CBD5E1; background:#FFF; width:26px; height:26px; border-radius:4px; cursor:pointer;">+</button>
            <button onclick="removeItem('${item.id}')" style="margin-left:auto; border:none; background:transparent; color:var(--danger); cursor:pointer; font-size:0.8rem;">Eliminar</button>
          </div>
        </div>
      </div>
    `).join('')}
  `;

  if (footerElem) {
    footerElem.innerHTML = `
      <!-- Coupon Box -->
      <div class="coupon-box">
        <input type="text" id="couponInput" placeholder="Código de cupón (ej: FIXIO10)" class="form-control" style="font-size:0.85rem; text-transform:uppercase;" value="${appliedCoupon || ''}">
        <button onclick="applyCoupon()" class="btn btn-outline" style="padding:8px 12px; font-size:0.8rem; white-space:nowrap;">Aplicar</button>
      </div>

      ${appliedCoupon && COUPONS[appliedCoupon] ? `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
          <span class="discount-tag">🏷️ ${COUPONS[appliedCoupon].label}</span>
          <button onclick="removeCoupon()" style="background:none; border:none; color:var(--danger); cursor:pointer; font-size:0.78rem;">Quitar</button>
        </div>
      ` : ''}

      <div style="font-size:0.85rem; color:var(--text-muted); display:flex; justify-content:space-between; margin-bottom:4px;">
        <span>Subtotal:</span>
        <span>$${formatNumber(subtotal)} COP</span>
      </div>
      
      ${discountAmount > 0 ? `
        <div style="font-size:0.85rem; color:var(--success); display:flex; justify-content:space-between; margin-bottom:4px; font-weight:600;">
          <span>Descuento aplicado:</span>
          <span>-$${formatNumber(discountAmount)} COP</span>
        </div>
      ` : ''}

      <div style="font-size:0.85rem; color:var(--text-muted); display:flex; justify-content:space-between; margin-bottom:12px;">
        <span>Envío estimado (Bogotá):</span>
        <span>${defaultShipping === 0 ? '<strong style="color:var(--success);">GRATIS</strong>' : `$${formatNumber(defaultShipping)} COP`}</span>
      </div>

      <div class="cart-subtotal" style="border-top:1px solid var(--border); padding-top:10px;">
        <span>Total a pagar:</span>
        <span id="cartSubtotal">$${formatNumber(finalTotal)} COP</span>
      </div>

      <button class="btn btn-accent" style="width:100%; margin-top:10px;" onclick="openCheckoutModal()">
        Proceder al Pago 🔒
      </button>
    `;
  }
}

function applyCoupon() {
  const code = document.getElementById('couponInput')?.value.trim().toUpperCase();
  if (!code) return;

  if (COUPONS[code]) {
    appliedCoupon = code;
    localStorage.setItem('fixio_coupon', JSON.stringify(appliedCoupon));
    renderCartDrawer();
    showToast(`🎉 ¡Cupón ${code} aplicado exitosamente!`);
  } else {
    showToast('❌ Cupón no válido. Prueba con FIXIO10, ENVIOGRATIS o PRIMERACOMPRA');
  }
}

function removeCoupon() {
  appliedCoupon = null;
  localStorage.removeItem('fixio_coupon');
  renderCartDrawer();
  showToast('Cupón removido');
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== id);
  }
  saveCart();
  updateCartCount();
  renderCartDrawer();
}

function removeItem(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  updateCartCount();
  renderCartDrawer();
  showToast('Producto eliminado del carrito');
}

// Checkout Modal Flow (REQUIRES LOGIN)
function openCheckoutModal() {
  if (!currentUser) {
    closeCartDrawer();
    openAuthModal('checkout_required');
    showToast('⚠️ Por favor inicia sesión o regístrate para proceder al pago.');
    return;
  }

  if (cart.length === 0) {
    showToast('Agrega al menos un producto antes de ir al pago');
    return;
  }
  closeCartDrawer();

  // Prefill user details if logged in
  if (currentUser) {
    const custNameInput = document.getElementById('custName');
    const custAddrInput = document.getElementById('custAddress');
    const custPhoneInput = document.getElementById('custPhone');
    if (custNameInput && !custNameInput.value) custNameInput.value = currentUser.name || '';
    if (custAddrInput && !custAddrInput.value) custAddrInput.value = currentUser.address || '';
    if (custPhoneInput && !custPhoneInput.value) custPhoneInput.value = currentUser.phone || '';
  }

  updateCheckoutTotals();

  document.getElementById('checkoutOverlay')?.classList.add('active');
  document.getElementById('checkoutModal')?.classList.add('active');
}

function updateCheckoutTotals() {
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const freeShippingGoal = 150000;
  
  let discountAmount = 0;
  let isFreeShippingCoupon = false;

  if (appliedCoupon && COUPONS[appliedCoupon]) {
    const c = COUPONS[appliedCoupon];
    if (c.type === 'percent') {
      discountAmount = Math.round(subtotal * (c.value / 100));
    } else if (c.type === 'fixed') {
      discountAmount = Math.min(subtotal, c.value);
    } else if (c.type === 'free_shipping') {
      isFreeShippingCoupon = true;
    }
  }

  const zoneSelect = document.getElementById('shippingZoneSelect');
  let zoneRate = 8000;
  if (zoneSelect) {
    zoneRate = parseInt(zoneSelect.value, 10);
  }

  let finalShipping = zoneRate;
  if (subtotal >= freeShippingGoal || isFreeShippingCoupon) {
    finalShipping = 0;
  }

  const finalTotal = Math.max(0, subtotal - discountAmount + finalShipping);

  const totalElem = document.getElementById('checkoutTotal');
  if (totalElem) {
    totalElem.innerHTML = `
      <div style="font-size:0.85rem; font-weight:400; color:var(--text-muted);">Subtotal: $${formatNumber(subtotal)} COP</div>
      ${discountAmount > 0 ? `<div style="font-size:0.85rem; font-weight:600; color:var(--success);">Descuento: -$${formatNumber(discountAmount)} COP</div>` : ''}
      <div style="font-size:0.85rem; font-weight:400; color:var(--text-muted);">Envío: ${finalShipping === 0 ? '<strong style="color:var(--success);">GRATIS</strong>' : `$${formatNumber(finalShipping)} COP`}</div>
      <div style="font-size:1.4rem; font-weight:800; color:var(--dark); margin-top:4px;">Total: $${formatNumber(finalTotal)} COP</div>
    `;
  }
}

function closeCheckoutModal() {
  document.getElementById('checkoutOverlay')?.classList.remove('active');
  document.getElementById('checkoutModal')?.classList.remove('active');
}

// CONFIGURACIÓN DE NOTIFICACIONES Y PASARELA WOMPI
const WOMPI_CONFIG = {
  publicKey: 'pub_test_Q5y152W2BdAFRtxBEO3d80w1u26LqA8a', // Reemplazar con la llave pública de Wompi producción (pub_prod_...)
  currency: 'COP'
};

const NOTIFICATION_CONFIG = {
  companyEmail: 'fixiosolutions@gmail.com', // Correo empresarial designado para nuevos pedidos
  companyPhone: '573116860336', // WhatsApp empresarial para alertas y soporte (+57 311 6860336)
  emailjsServiceId: 'service_fixio',
  emailjsAdminTemplateId: 'template_admin_order',
  emailjsClientTemplateId: 'template_client_receipt'
};

function sendOrderNotifications(order) {
  const itemsText = order.items.map(i => `• ${i.name} (x${i.qty}) - $${formatNumber(i.price * i.qty)} COP`).join('\n');
  
  // 1. EmailJS — Enviar Notificación al Correo Designado de la Empresa (Admin)
  if (typeof emailjs !== 'undefined') {
    try {
      emailjs.send(NOTIFICATION_CONFIG.emailjsServiceId, NOTIFICATION_CONFIG.emailjsAdminTemplateId, {
        to_email: NOTIFICATION_CONFIG.companyEmail,
        order_id: order.id,
        delivery_code: order.deliveryCode,
        date: order.date,
        customer_name: order.customer,
        customer_email: order.email,
        customer_phone: order.phone,
        customer_address: order.address,
        payment_method: order.payment,
        items_list: itemsText,
        total_amount: formatNumber(order.total)
      }).then(res => {
        console.log('✅ Email enviado al Administrador de FIXIO:', res);
      }).catch(err => {
        console.log('ℹ️ Log EmailJS Admin:', err);
      });

      // 2. EmailJS — Enviar Comprobante Oficial al Correo del Cliente
      emailjs.send(NOTIFICATION_CONFIG.emailjsServiceId, NOTIFICATION_CONFIG.emailjsClientTemplateId, {
        to_email: order.email,
        customer_name: order.customer,
        order_id: order.id,
        delivery_code: order.deliveryCode,
        date: order.date,
        items_list: itemsText,
        total_amount: formatNumber(order.total),
        shipping_address: order.address
      }).then(res => {
        console.log('✅ Comprobante enviado al correo del cliente:', res);
        showToast(`📩 Comprobante de compra enviado a ${order.email}`);
      }).catch(err => {
        console.log('ℹ️ Log EmailJS Cliente:', err);
      });
    } catch(e) {
      console.warn('EmailJS SDK Notice:', e);
    }
  }

  // 3. Notificación a WhatsApp de la Empresa (Alerta de Pedido)
  const companyWaMessage = encodeURIComponent(
    `🚨 *NUEVO PEDIDO RECIBIDO EN FIXIO*\n\n` +
    `📌 *Orden:* ${order.id}\n` +
    `🔑 *Código de Entrega:* ${order.deliveryCode}\n` +
    `👤 *Cliente:* ${order.customer}\n` +
    `📧 *Email:* ${order.email}\n` +
    `📱 *Teléfono:* ${order.phone}\n` +
    `📍 *Dirección:* ${order.address}\n` +
    `💳 *Método de Pago:* ${order.payment}\n\n` +
    `📦 *Productos:*\n${itemsText}\n\n` +
    `💰 *TOTAL:* $${formatNumber(order.total)} COP`
  );
  
  console.log('📱 WhatsApp Empresa Link:', `https://wa.me/${NOTIFICATION_CONFIG.companyPhone}?text=${companyWaMessage}`);
  showToast(`✨ Pedido #${order.id} registrado. Notificaciones enviadas.`);
}

// Helper: Show Wompi notice when selected in local/dev
function toggleWompiNotice(value) {
  const notice = document.getElementById('wompiDevNotice');
  if (notice) notice.style.display = value.includes('Wompi') ? 'block' : 'none';
}

function processCheckout(event) {
  event.preventDefault();
  const name = document.getElementById('custName').value.trim();
  const email = document.getElementById('custEmail')?.value.trim() || (currentUser?.email || 'cliente@fixio.com');
  const address = document.getElementById('custAddress').value.trim();
  const phone = document.getElementById('custPhone').value.trim();
  const payment = document.getElementById('paymentMethod').value;

  // Calculate final totals
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  let discountAmount = 0;
  let isFreeShippingCoupon = false;

  if (appliedCoupon && COUPONS[appliedCoupon]) {
    const c = COUPONS[appliedCoupon];
    if (c.type === 'percent') {
      discountAmount = Math.round(subtotal * (c.value / 100));
    } else if (c.type === 'fixed') {
      discountAmount = Math.min(subtotal, c.value);
    } else if (c.type === 'free_shipping') {
      isFreeShippingCoupon = true;
    }
  }

  const zoneSelect = document.getElementById('shippingZoneSelect');
  let zoneRate = 8000;
  if (zoneSelect) zoneRate = parseInt(zoneSelect.value, 10);
  const finalShipping = (subtotal >= 150000 || isFreeShippingCoupon) ? 0 : zoneRate;
  const finalTotal = Math.max(0, subtotal - discountAmount + finalShipping);

  const year = new Date().getFullYear();
  const orderNum = `#FX-${year}-${Math.floor(10000 + Math.random() * 90000)}`;
  const dateStr = new Date().toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' });
  const timeStr = new Date().toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' });
  const deliveryCode = generateDeliveryCode();

  const newOrder = {
    id: orderNum,
    deliveryCode: deliveryCode,
    date: dateStr + ' ' + timeStr,
    customer: name,
    email: email,
    address: address,
    phone: phone,
    payment: payment,
    items: [...cart],
    total: finalTotal,
    status: 'Pendiente'
  };

  // ── Wompi Gateway (sólo activo en producción con pub_prod_...) ──────────────
  if (payment.includes('Wompi') && typeof WidgetCheckout !== 'undefined') {
    try {
      const checkout = new WidgetCheckout({
        currency: 'COP',
        amountInCents: finalTotal * 100,
        reference: orderNum,
        publicKey: WOMPI_CONFIG.publicKey,
        customerData: {
          email: email,
          fullName: name,
          phoneNumber: phone,
          phoneNumberPrefix: '+57'
        }
      });
      checkout.open(function (result) {
        completeOrderRegistration(newOrder, discountAmount, finalShipping, finalTotal);
      });
      return; // Wait for Wompi callback
    } catch(err) {
      console.warn('⚠️ Wompi no disponible en entorno local. Registrando pedido directamente:', err);
      // Falls through to complete order below
    }
  }

  // ── Para todos los demás métodos (o si Wompi falla localmente) ───────────
  completeOrderRegistration(newOrder, discountAmount, finalShipping, finalTotal);
}

function generateDeliveryCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

function completeOrderRegistration(newOrder, discountAmount, finalShipping, finalTotal) {
  // Deduct purchased quantities from stock
  newOrder.items.forEach(item => {
    const prod = PRODUCTS.find(p => p.id === item.id);
    if (prod && prod.stock !== undefined) {
      prod.stock = Math.max(0, prod.stock - item.qty);
    }
  });
  saveProducts();
  renderProducts(PRODUCTS);

  orders.unshift(newOrder);
  localStorage.setItem('fixio_orders', JSON.stringify(orders));

  // Build rich order summary
  const orderSummary = document.getElementById('orderSummaryDetails');
  if (orderSummary) {
    orderSummary.innerHTML = `
      <!-- Order Number Badge -->
      <div style="background:linear-gradient(135deg, #1E6BB8, #0C355A); border-radius:var(--radius-md); padding:14px 18px; margin-bottom:12px; display:flex; justify-content:space-between; align-items:center;">
        <div>
          <div style="font-size:0.75rem; color:rgba(255,255,255,0.7); font-weight:600; text-transform:uppercase; letter-spacing:0.08em;">Número de Pedido</div>
          <div style="font-size:1.3rem; font-weight:800; color:#fff; letter-spacing:0.04em;">${newOrder.id}</div>
        </div>
        <div style="text-align:right;">
          <div style="font-size:0.75rem; color:rgba(255,255,255,0.7);">${newOrder.date}</div>
        </div>
      </div>

      <!-- 🔑 UNIQUE DELIVERY CODE HIGHLIGHT -->
      <div style="background:linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%); border:2px dashed #F59E0B; border-radius:var(--radius-md); padding:14px 18px; margin-bottom:14px; text-align:center;">
        <div style="font-size:0.75rem; color:#92400E; font-weight:800; text-transform:uppercase; letter-spacing:0.08em; margin-bottom:4px;">🔑 CÓDIGO ÚNICO DE ENTREGA (CONFIRMACIÓN)</div>
        <div style="font-size:2.2rem; font-weight:900; color:#B45309; letter-spacing:0.25em; font-family:monospace; margin:4px 0;">${newOrder.deliveryCode}</div>
        <div style="font-size:0.8rem; color:#78350F;">Dicta o muestra este código al mensajero para verificar la entrega de tu paquete.</div>
      </div>

      <!-- Customer & Payment Info -->
      <div style="background:var(--light-bg); border-radius:var(--radius-md); padding:14px 16px; margin-bottom:14px; border:1px solid var(--border);">
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; font-size:0.87rem;">
          <div>
            <div style="color:var(--text-muted); font-size:0.75rem; text-transform:uppercase; letter-spacing:0.06em; margin-bottom:2px;">Cliente</div>
            <div style="font-weight:700;">${newOrder.customer}</div>
          </div>
          <div>
            <div style="color:var(--text-muted); font-size:0.75rem; text-transform:uppercase; letter-spacing:0.06em; margin-bottom:2px;">Correo de Comprobante</div>
            <div style="font-weight:700; color:var(--primary-dark);">📧 ${newOrder.email}</div>
          </div>
          <div>
            <div style="color:var(--text-muted); font-size:0.75rem; text-transform:uppercase; letter-spacing:0.06em; margin-bottom:2px;">Teléfono / WhatsApp</div>
            <div style="font-weight:700;">📱 ${newOrder.phone}</div>
          </div>
          <div>
            <div style="color:var(--text-muted); font-size:0.75rem; text-transform:uppercase; letter-spacing:0.06em; margin-bottom:2px;">Método de Pago</div>
            <div style="font-weight:700;">💳 ${newOrder.payment}</div>
          </div>
          <div style="grid-column:1/-1;">
            <div style="color:var(--text-muted); font-size:0.75rem; text-transform:uppercase; letter-spacing:0.06em; margin-bottom:2px;">Dirección de Entrega</div>
            <div style="font-weight:700;">📍 ${newOrder.address}</div>
          </div>
        </div>
      </div>

      <!-- Items List -->
      <div style="background:var(--light-bg); border-radius:var(--radius-md); padding:14px 16px; margin-bottom:14px; border:1px solid var(--border);">
        <div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; letter-spacing:0.06em; margin-bottom:10px;">Productos Comprados</div>
        ${newOrder.items.map(i => `
          <div style="display:flex; justify-content:space-between; align-items:center; padding:6px 0; border-bottom:1px solid var(--border); font-size:0.87rem;">
            <span style="font-weight:600;">${i.name} <span style="color:var(--text-muted);">×${i.qty}</span></span>
            <span style="font-weight:700; color:var(--primary-dark);">$${formatNumber(i.price * i.qty)} COP</span>
          </div>
        `).join('')}
        ${discountAmount > 0 ? `<div style="display:flex; justify-content:space-between; padding:6px 0; font-size:0.87rem; color:var(--success); font-weight:600;"><span>Descuento aplicado</span><span>−$${formatNumber(discountAmount)} COP</span></div>` : ''}
        <div style="display:flex; justify-content:space-between; padding:6px 0; font-size:0.87rem; color:var(--text-muted);"><span>Costo de envío</span><span>${finalShipping === 0 ? '<strong style="color:var(--success);">GRATIS</strong>' : `$${formatNumber(finalShipping)} COP`}</span></div>
        <div style="display:flex; justify-content:space-between; padding:8px 0 0; font-size:1rem; font-weight:800; color:var(--dark); border-top:2px solid var(--border); margin-top:4px;">
          <span>TOTAL PAGADO</span>
          <span style="color:var(--primary-dark);">$${formatNumber(finalTotal)} COP</span>
        </div>
      </div>
    `;
  }

  // Update WhatsApp tracking link dynamically
  const waBtn = document.getElementById('waTrackingBtn');
  if (waBtn) {
    const itemsSummaryText = newOrder.items.map(i => `${i.name} (x${i.qty})`).join(', ');
    const waMsg = encodeURIComponent(
      `Hola FIXIO Solutions 👋 Acabo de realizar el pedido *${newOrder.id}*.\n` +
      `🔑 Código de Entrega: *${newOrder.deliveryCode}*\n` +
      `👤 Nombre: ${newOrder.customer}\n` +
      `📦 Productos: ${itemsSummaryText}\n` +
      `💰 Total: $${formatNumber(newOrder.total)} COP\n\n` +
      `Quisiera confirmar el comprobante y el tiempo estimado de entrega. ¡Gracias!`
    );
    waBtn.href = `https://wa.me/${NOTIFICATION_CONFIG.companyPhone}?text=${waMsg}`;
  }

  // Send Notifications (Email to Admin & Client, WhatsApp alert)
  sendOrderNotifications(newOrder);

  // Reset Cart & Coupon
  cart = [];
  appliedCoupon = null;
  saveCart();
  localStorage.removeItem('fixio_coupon');
  updateCartCount();
  closeCheckoutModal();

  // Show success modal
  document.getElementById('successOverlay')?.classList.add('active');
  document.getElementById('successModal')?.classList.add('active');

  // Launch confetti
  launchConfetti();
}

function launchConfetti() {
  const container = document.getElementById('confettiContainer');
  if (!container) return;
  container.innerHTML = '';

  const COLORS = ['#0D9488', '#F97316', '#3B82F6', '#F59E0B', '#EC4899', '#2DD4BF', '#FACC15'];
  const count = 40;

  for (let i = 0; i < count; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    const left = Math.random() * 100;
    const delay = Math.random() * 0.8;
    const duration = 1.5 + Math.random() * 1.5;
    const size = 6 + Math.random() * 8;
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];
    const isCircle = Math.random() > 0.5;

    piece.style.cssText = `
      left: ${left}%;
      width: ${size}px;
      height: ${size}px;
      background: ${color};
      animation-delay: ${delay}s;
      animation-duration: ${duration}s;
      border-radius: ${isCircle ? '50%' : '2px'};
    `;
    container.appendChild(piece);
  }

  // Clean up after animation completes
  setTimeout(() => { if (container) container.innerHTML = ''; }, 4000);
}

function closeSuccessModal() {
  document.getElementById('successOverlay')?.classList.remove('active');
  document.getElementById('successModal')?.classList.remove('active');
  const container = document.getElementById('confettiContainer');
  if (container) container.innerHTML = '';
}

// FAQ Toggle
function toggleFaq(button) {
  const item = button.parentElement;
  item.classList.toggle('active');
}

// Toast Notifications
function showToast(message) {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>✅</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Format Numbers to COP currency style
function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// Product Detail Modal Controller
let selectedReviewRating = 5;

function setReviewRating(stars) {
  selectedReviewRating = stars;
  const starElements = document.querySelectorAll('.star-rating-input .star');
  starElements.forEach((el, index) => {
    if (index < stars) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
}

function openProductDetail(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('productDetailModal');
  const overlay = document.getElementById('productDetailOverlay');
  const container = document.getElementById('productDetailContent');

  if (!modal || !container) return;

  selectedReviewRating = 5; // default 5 stars

  container.innerHTML = `
    <div class="product-detail-grid">
      <div class="detail-gallery">
        <div class="gallery-main-view" id="mainGalleryView">
          ${product.svgIcon}
        </div>
        <div class="gallery-thumbs">
          <div class="thumb-item active" onclick="switchDetailThumb(this, '${product.id}', 'front')">
            ${product.svgIcon}
          </div>
          <div class="thumb-item" onclick="switchDetailThumb(this, '${product.id}', 'app')">
            <svg viewBox="0 0 100 100" width="40"><rect width="60" height="90" rx="8" x="20" y="5" fill="#3B82F6"/><circle cx="50" cy="80" r="4" fill="#FFF"/></svg>
          </div>
          <div class="thumb-item" onclick="switchDetailThumb(this, '${product.id}', 'usb')">
            <svg viewBox="0 0 100 100" width="40"><rect width="40" height="60" rx="6" x="30" y="20" fill="#F97316"/><rect width="20" height="15" x="40" y="5" fill="#CBD5E1"/></svg>
          </div>
        </div>
      </div>

      <div>
        <span class="badge-category" style="position:static; display:inline-block; margin-bottom:8px;">${product.categoryName}</span>
        <h2 style="font-size:1.5rem; font-weight:800; margin-bottom:8px;">${product.name}</h2>
        <p style="font-size:0.85rem; color:var(--primary-dark); font-weight:700; margin-bottom:12px;">
          ★ ${product.rating} / 5.0 (${product.reviewsList ? product.reviewsList.length : product.reviews} opiniones)
        </p>

        <div style="font-size:1.8rem; font-weight:800; color:var(--dark); font-family:var(--font-heading); margin-bottom:14px;">
          $${formatNumber(product.price)} COP
          ${product.oldPrice ? `<span style="font-size:1rem; color:var(--text-light); text-decoration:line-through; font-weight:400;">$${formatNumber(product.oldPrice)}</span>` : ''}
        </div>

        <p style="font-size:0.9rem; color:var(--text-muted); line-height:1.5; margin-bottom:16px;">
          ${product.desc}
        </p>

        <!-- Spec breakdown -->
        <div class="specs-list">
          <div class="specs-row"><span>Referencia:</span> <strong>${product.id}</strong></div>
          <div class="specs-row"><span>Garantía:</span> <strong>12 Meses con FIXIO S.A.S.</strong></div>
          <div class="specs-row"><span>Alimentación:</span> <strong>Doble (USB 5V + Baterías)</strong></div>
          <div class="specs-row"><span>Disponibilidad:</span> <strong style="color:var(--success);">En Stock (Bogotá)</strong></div>
        </div>

        <!-- Download PDF Manual Card -->
        <div class="pdf-download-card">
          <div class="info">
            <span class="icon-pdf">📄</span>
            <div>
              <h4>Manual Oficial de Usuario (PDF)</h4>
              <p>Guía paso a paso en español con configuración Wi-Fi y limpieza</p>
            </div>
          </div>
          <button class="btn btn-outline" onclick="downloadManualPdf('${product.name}')" style="padding: 6px 12px; font-size: 0.8rem; background:#FFF;">
            ⬇️ Descargar
          </button>
        </div>

        <div style="display:flex; gap:12px; margin-top:20px;">
          <button class="btn btn-accent" onclick="addToCart('${product.id}'); closeProductDetail();" style="flex:1;">
            🛒 Agregar al Carrito — $${formatNumber(product.price)}
          </button>
        </div>
      </div>
    </div>

    <!-- REVIEWS SECTION -->
    <div class="reviews-container">
      <h3 style="font-size:1.2rem; margin-bottom:16px;">⭐ Opiniones de Clientes (${product.reviewsList ? product.reviewsList.length : 0})</h3>

      <!-- Write Review Form -->
      <div style="background:var(--surface-alt); padding:16px; border-radius:var(--radius-md); border:1px solid var(--border); margin-bottom:20px;">
        <h4 style="font-size:0.95rem; margin-bottom:8px;">Dejar una Valoración de este Producto</h4>
        <form onsubmit="addCustomerReview(event, '${product.id}')">
          <div style="display:flex; align-items:center; gap:12px; margin-bottom:10px;">
            <span style="font-size:0.85rem; font-weight:600;">Tu Calificación:</span>
            <div class="star-rating-input">
              <span class="star active" onclick="setReviewRating(1)">★</span>
              <span class="star active" onclick="setReviewRating(2)">★</span>
              <span class="star active" onclick="setReviewRating(3)">★</span>
              <span class="star active" onclick="setReviewRating(4)">★</span>
              <span class="star active" onclick="setReviewRating(5)">★</span>
            </div>
          </div>
          <textarea id="reviewCommentInput" class="form-control" placeholder="¿Cómo te ha parecido este producto? Cuéntanos tu experiencia de uso real..." required style="min-height:70px; margin-bottom:10px;"></textarea>
          <button type="submit" class="btn btn-primary" style="padding:8px 16px; font-size:0.85rem;">
            Publicar Reseña ✨
          </button>
        </form>
      </div>

      <!-- List of Reviews -->
      ${product.reviewsList && product.reviewsList.length > 0 ? product.reviewsList.map(r => `
        <div class="review-card">
          <div class="review-header">
            <div class="review-author">
              👤 ${r.author}
              <span class="verified-badge">✓ Comprador Verificado</span>
            </div>
            <div style="color:#F59E0B; font-size:0.9rem;">
              ${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}
            </div>
          </div>
          <p style="font-size:0.875rem; color:var(--dark-muted);">${r.comment}</p>
          <div style="font-size:0.75rem; color:var(--text-light); margin-top:4px;">${r.date}</div>
        </div>
      `).join('') : '<p style="color:var(--text-muted); font-size:0.875rem;">Sé el primero en dejar una opinión para este producto.</p>'}
    </div>
  `;

  overlay?.classList.add('active');
  modal?.classList.add('active');
}

function addCustomerReview(event, productId) {
  event.preventDefault();
  const comment = document.getElementById('reviewCommentInput')?.value.trim();
  if (!comment) return;

  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  if (!product.reviewsList) product.reviewsList = [];

  const authorName = currentUser ? currentUser.name : 'Cliente Verificado';

  const newReview = {
    author: authorName,
    rating: selectedReviewRating,
    date: new Date().toLocaleDateString('es-CO'),
    comment: comment
  };

  product.reviewsList.unshift(newReview);
  
  // Recalculate average rating & count
  const totalRatingSum = product.reviewsList.reduce((sum, r) => sum + r.rating, 0);
  product.rating = parseFloat((totalRatingSum / product.reviewsList.length).toFixed(1));
  product.reviews = product.reviewsList.length;

  renderProducts(PRODUCTS);
  openProductDetail(productId);
  showToast('🎉 ¡Gracias! Tu reseña ha sido publicada con éxito.');
}

function closeProductDetail() {
  document.getElementById('productDetailOverlay')?.classList.remove('active');
  document.getElementById('productDetailModal')?.classList.remove('active');
}

function switchDetailThumb(thumbElem, productId, viewType) {
  document.querySelectorAll('.thumb-item').forEach(t => t.classList.remove('active'));
  thumbElem.classList.add('active');
}

function downloadManualPdf(productName) {
  showToast(`Iniciando descarga del manual PDF para ${productName}...`);
  // Mock download link trigger
  const link = document.createElement('a');
  link.href = '#';
  link.onclick = (e) => {
    e.preventDefault();
    alert(`📄 [Manual PDF FIXIO] Descarga completada:\n"Manual Oficial de Instrucciones - ${productName} (ESPAÑOL).pdf"`);
  };
  link.click();
}

// ADMIN DASHBOARD CONTROLLER (RESTRICTED TO ADMIN ROLE ONLY)
function openAdminModal() {
  if (!currentUser || currentUser.role !== 'admin') {
    openAuthModal('admin_required');
    showToast('🔐 Acceso restringido. Debes iniciar sesión como Administrador.');
    return;
  }

  const overlay = document.getElementById('adminOverlay');
  const modal = document.getElementById('adminModal');
  if (!overlay || !modal) return;

  overlay.classList.add('active');
  modal.classList.add('active');
  switchAdminTab('products');
}

function closeAdminModal() {
  document.getElementById('adminOverlay')?.classList.remove('active');
  document.getElementById('adminModal')?.classList.remove('active');
}

function renderBlogPosts() {
  const container = document.getElementById('blogGridContainer');
  if (!container) return;

  if (blogPosts.length === 0) {
    container.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:60px 20px; color:var(--text-muted);">
      <p style="font-size:2.5rem; margin-bottom:12px;">📝</p>
      <h3>Aún no hay artículos publicados</h3>
      <p>El admin publicará consejos y guías pronto. ¡Vuelve pronto!</p>
    </div>`;
    return;
  }

  container.innerHTML = blogPosts.map(post => {
    const commentsCount = (post.comments || []).length;
    const tipsCount = (post.tips || []).length;
    return `
    <div class="blog-card" onclick="openBlogPost('${post.id}')">
      <div class="blog-card-cover" style="background:${post.bgGradient || 'linear-gradient(135deg,#CCFBF1,#99F6E4)'}">
        <span class="blog-card-emoji">${post.icon}</span>
        <span class="blog-card-category">${post.category}</span>
      </div>
      <div class="blog-card-body">
        <h3 class="blog-card-title">${post.title}</h3>
        <p class="blog-card-desc">${post.desc}</p>
        <div class="blog-card-footer">
          <div class="blog-card-meta">
            <span>💬 ${commentsCount} comentario${commentsCount !== 1 ? 's' : ''}</span>
            <span>💡 ${tipsCount} tip${tipsCount !== 1 ? 's' : ''}</span>
          </div>
          <button class="btn btn-outline blog-read-btn">
            Leer Artículo →
          </button>
        </div>
      </div>
    </div>
  `}).join('');
}

// ─── Blog Post Modal ────────────────────────────────────────────────────────
function openBlogPost(postId) {
  const post = blogPosts.find(p => p.id === postId);
  if (!post) return;

  const overlay = document.getElementById('blogPostOverlay');
  const modal = document.getElementById('blogPostModal');
  const content = document.getElementById('blogPostContent');
  if (!overlay || !modal || !content) return;

  if (!post.comments) post.comments = [];
  if (!post.tips) post.tips = [];

  const isAdmin = currentUser && currentUser.role === 'admin';
  const isLoggedIn = !!currentUser;

  content.innerHTML = `
    <!-- Article Header -->
    <div class="blog-post-header" style="background:${post.bgGradient || 'linear-gradient(135deg,#CCFBF1,#99F6E4)'}">
      <span class="blog-post-emoji">${post.icon}</span>
      <div class="blog-post-category-tag">${post.category}</div>
    </div>

    <div class="blog-post-body">
      <h1 class="blog-post-title">${post.title}</h1>
      <div class="blog-post-meta">
        <span>📅 ${post.date || new Date().toLocaleDateString('es-CO', {year:'numeric', month:'long', day:'numeric'})}</span>
        <span>✍️ ${post.author || 'FIXIO Solutions'}</span>
        <span>💬 ${post.comments.length} comentarios</span>
        <span>💡 ${post.tips.length} tips</span>
      </div>

      <!-- Full Content -->
      <div class="blog-post-content">
        ${post.content
          ? post.content.split('\n').filter(p => p.trim()).map(p => `<p>${p}</p>`).join('')
          : `<p>${post.desc}</p><p style="color:var(--text-light); font-style:italic;">El contenido completo de este artículo será publicado pronto por el equipo FIXIO.</p>`
        }
      </div>

      <!-- Admin: Edit / Delete -->
      ${isAdmin ? `
        <div class="blog-admin-bar">
          <span style="font-size:0.8rem; color:var(--text-muted);">⚙️ Modo Admin</span>
          <button class="btn btn-outline" onclick="adminDeleteBlogPost('${post.id}')" style="padding:6px 12px; font-size:0.8rem; border-color:var(--danger); color:var(--danger);">
            🗑️ Eliminar Artículo
          </button>
        </div>
      ` : ''}
    </div>

    <!-- ═══ COMMUNITY SECTION ═══ -->
    <div class="blog-community">
      <div class="community-header">
        <h2 class="community-title">🤝 Comunidad FIXIO</h2>
        <p class="community-subtitle">Comparte tus opiniones, experiencias y tips útiles con otros usuarios.</p>
      </div>

      <!-- TABS -->
      <div class="community-tabs">
        <button class="community-tab-btn active" onclick="switchCommunityTab(this, 'comments', '${post.id}')">💬 Comentarios (${post.comments.length})</button>
        <button class="community-tab-btn" onclick="switchCommunityTab(this, 'tips', '${post.id}')">💡 Tips de la Comunidad (${post.tips.length})</button>
      </div>

      <!-- COMMENTS TAB -->
      <div id="communityComments" class="community-tab-content active">
        ${isLoggedIn ? `
          <form class="community-form" onsubmit="submitBlogComment(event, '${post.id}')">
            <div class="community-form-header">
              <div class="community-avatar">${currentUser.name.charAt(0).toUpperCase()}</div>
              <span style="font-weight:600; font-size:0.9rem;">${currentUser.name}</span>
            </div>
            <textarea id="commentInput_${post.id}" class="form-control community-textarea"
              placeholder="¿Qué opinas sobre este tema? Comparte tu experiencia..." required></textarea>
            <div style="display:flex; justify-content:flex-end; margin-top:10px;">
              <button type="submit" class="btn btn-primary" style="padding:8px 18px; font-size:0.85rem;">Publicar Comentario 💬</button>
            </div>
          </form>
        ` : `
          <div class="community-login-prompt">
            <p>💬 <strong>Inicia sesión</strong> para dejar un comentario en esta publicación.</p>
            <button class="btn btn-outline" onclick="closeBlogPost(); openAuthModal();" style="padding:8px 16px; font-size:0.85rem; margin-top:8px;">Iniciar Sesión</button>
          </div>
        `}

        <div id="commentsList_${post.id}" class="community-list">
          ${post.comments.length === 0
            ? `<p class="community-empty">Aún no hay comentarios. ¡Sé el primero!</p>`
            : post.comments.map(c => `
              <div class="community-item">
                <div class="community-item-header">
                  <div class="community-avatar community-avatar--sm">${c.author.charAt(0).toUpperCase()}</div>
                  <div>
                    <div class="community-item-author">${c.author}</div>
                    <div class="community-item-date">${c.date}</div>
                  </div>
                </div>
                <p class="community-item-text">${c.text}</p>
              </div>
            `).join('')
          }
        </div>
      </div>

      <!-- TIPS TAB -->
      <div id="communityTips" class="community-tab-content" style="display:none;">
        ${isLoggedIn ? `
          <form class="community-form" onsubmit="submitBlogTip(event, '${post.id}')">
            <div class="community-form-header">
              <div class="community-avatar community-avatar--tip">💡</div>
              <span style="font-weight:600; font-size:0.9rem;">${currentUser.name} — Comparte un Tip</span>
            </div>
            <input type="text" id="tipTitle_${post.id}" class="form-control" placeholder="Título del tip (ej: &quot;Configura el horario en 3 pasos&quot;)" required style="margin-bottom:8px;">
            <textarea id="tipInput_${post.id}" class="form-control community-textarea"
              placeholder="Describe tu tip o consejo útil aquí..." required></textarea>
            <div style="display:flex; justify-content:flex-end; margin-top:10px;">
              <button type="submit" class="btn btn-accent" style="padding:8px 18px; font-size:0.85rem;">Compartir Tip 💡</button>
            </div>
          </form>
        ` : `
          <div class="community-login-prompt">
            <p>💡 <strong>Inicia sesión</strong> para compartir un tip con la comunidad.</p>
            <button class="btn btn-outline" onclick="closeBlogPost(); openAuthModal();" style="padding:8px 16px; font-size:0.85rem; margin-top:8px;">Iniciar Sesión</button>
          </div>
        `}

        <div id="tipsList_${post.id}" class="community-list">
          ${post.tips.length === 0
            ? `<p class="community-empty">¡La comunidad aún no ha compartido tips! Sé el primero 💡</p>`
            : post.tips.map(t => `
              <div class="community-item community-item--tip">
                <div class="community-item-header">
                  <div class="community-avatar community-avatar--tip community-avatar--sm">💡</div>
                  <div>
                    <div class="community-item-author">${t.author}</div>
                    <div class="community-item-date">${t.date}</div>
                  </div>
                  ${t.likes !== undefined ? `<div class="tip-likes" onclick="likeTip('${post.id}', '${t.id}')">👍 ${t.likes}</div>` : ''}
                </div>
                <h4 class="tip-title">${t.title}</h4>
                <p class="community-item-text">${t.text}</p>
              </div>
            `).join('')
          }
        </div>
      </div>

    </div>
  `;

  overlay.classList.add('active');
  modal.classList.add('active');
}

function closeBlogPost() {
  document.getElementById('blogPostOverlay')?.classList.remove('active');
  document.getElementById('blogPostModal')?.classList.remove('active');
}

function switchCommunityTab(btn, tab, postId) {
  document.querySelectorAll('.community-tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('communityComments').style.display = tab === 'comments' ? 'block' : 'none';
  document.getElementById('communityTips').style.display = tab === 'tips' ? 'block' : 'none';
}

function submitBlogComment(event, postId) {
  event.preventDefault();
  if (!currentUser) { openAuthModal(); return; }

  const inputEl = document.getElementById(`commentInput_${postId}`);
  const text = inputEl?.value.trim();
  if (!text) return;

  const post = blogPosts.find(p => p.id === postId);
  if (!post) return;
  if (!post.comments) post.comments = [];

  const comment = {
    id: 'CMT-' + Date.now(),
    author: currentUser.name,
    text: text,
    date: new Date().toLocaleDateString('es-CO', {day:'2-digit', month:'short', year:'numeric'})
  };

  post.comments.unshift(comment);
  localStorage.setItem('fixio_blog', JSON.stringify(blogPosts));

  showToast('💬 ¡Comentario publicado! Gracias por participar.');
  openBlogPost(postId);
}

function submitBlogTip(event, postId) {
  event.preventDefault();
  if (!currentUser) { openAuthModal(); return; }

  const titleEl = document.getElementById(`tipTitle_${postId}`);
  const inputEl = document.getElementById(`tipInput_${postId}`);
  const title = titleEl?.value.trim();
  const text = inputEl?.value.trim();
  if (!title || !text) return;

  const post = blogPosts.find(p => p.id === postId);
  if (!post) return;
  if (!post.tips) post.tips = [];

  const tip = {
    id: 'TIP-' + Date.now(),
    author: currentUser.name,
    title: title,
    text: text,
    likes: 0,
    date: new Date().toLocaleDateString('es-CO', {day:'2-digit', month:'short', year:'numeric'})
  };

  post.tips.unshift(tip);
  localStorage.setItem('fixio_blog', JSON.stringify(blogPosts));

  showToast('💡 ¡Tip compartido con la comunidad FIXIO!');
  openBlogPost(postId);
}

function likeTip(postId, tipId) {
  const post = blogPosts.find(p => p.id === postId);
  if (!post) return;
  const tip = (post.tips || []).find(t => t.id === tipId);
  if (!tip) return;
  tip.likes = (tip.likes || 0) + 1;
  localStorage.setItem('fixio_blog', JSON.stringify(blogPosts));
  openBlogPost(postId);
}

function adminDeleteBlogPost(postId) {
  if (!confirm('¿Confirmas eliminar este artículo del blog?')) return;
  blogPosts = blogPosts.filter(p => p.id !== postId);
  localStorage.setItem('fixio_blog', JSON.stringify(blogPosts));
  closeBlogPost();
  renderBlogPosts();
  showToast('Artículo eliminado del blog.');
}


function switchAdminTab(tabName) {
  document.querySelectorAll('.admin-tab-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.querySelector(`.admin-tab-btn[data-tab="${tabName}"]`);
  if (activeBtn) activeBtn.classList.add('active');

  const container = document.getElementById('adminTabContent');
  if (!container) return;

  if (tabName === 'products') {
    container.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
        <h4>📦 Productos en Catálogo (${PRODUCTS.length})</h4>
        <button class="btn btn-primary" onclick="showCreateProductForm()" style="padding:8px 14px; font-size:0.85rem;">+ Crear Producto</button>
      </div>

      <!-- EDIT PRODUCT FORM CONTAINER -->
      <div id="editProductFormContainer" style="display:none; background:var(--light-bg); padding:20px; border-radius:var(--radius-md); border:1.5px solid var(--primary-light); margin-bottom:20px;">
        <h5 style="margin-bottom:14px; font-size:1rem; color:var(--primary-dark);">✏️ Editar Producto <span id="editProdIdBadge" style="font-weight:700;"></span></h5>
        <form onsubmit="adminSaveEditProduct(event)">
          <input type="hidden" id="editProdId">
          <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:12px; margin-bottom:10px;">
            <div>
              <label style="font-size:0.8rem; font-weight:600;">Nombre del Producto</label>
              <input type="text" id="editProdName" class="form-control" required>
            </div>
            <div>
              <label style="font-size:0.8rem; font-weight:600;">Categoría</label>
              <select id="editProdCategory" class="form-control" required>
                <option value="mascotas">Mascotas</option>
                <option value="hogar">Hogar</option>
                <option value="oficina">Oficina</option>
                <option value="tecnologia">Tecnología</option>
                <option value="auto">Auto</option>
              </select>
            </div>
            <div>
              <label style="font-size:0.8rem; font-weight:600;">Stock Disponible (Unidades)</label>
              <input type="number" id="editProdStock" class="form-control" min="0" required>
            </div>
            <div>
              <label style="font-size:0.8rem; font-weight:600;">Precio Venta ($ COP)</label>
              <input type="number" id="editProdPrice" class="form-control" required>
            </div>
            <div>
              <label style="font-size:0.8rem; font-weight:600;">Precio Anterior ($ COP)</label>
              <input type="number" id="editProdOldPrice" class="form-control">
            </div>
            <div>
              <label style="font-size:0.8rem; font-weight:600;">Etiqueta / Badge</label>
              <input type="text" id="editProdBadge" class="form-control" placeholder="ej: Más Vendido, Popular">
            </div>
            <div style="grid-column:1/-1;">
              <label style="font-size:0.8rem; font-weight:600;">Ruta de Imagen</label>
              <input type="text" id="editProdImgUrl" class="form-control" placeholder="MATERIAL/img-fx001.png">
            </div>
          </div>
          <div>
            <label style="font-size:0.8rem; font-weight:600;">Descripción Corta / Beneficios</label>
            <textarea id="editProdDesc" class="form-control" rows="3" required></textarea>
          </div>
          <div style="display:flex; gap:10px; margin-top:14px;">
            <button type="submit" class="btn btn-primary" style="padding:8px 18px; font-size:0.85rem;">💾 Guardar Cambios</button>
            <button type="button" class="btn btn-outline" onclick="document.getElementById('editProductFormContainer').style.display='none'" style="padding:8px 16px; font-size:0.85rem;">Cancelar</button>
          </div>
        </form>
      </div>

      <!-- CREATE PRODUCT FORM CONTAINER -->
      <div id="createProductFormContainer" style="display:none; background:var(--light-bg); padding:16px; border-radius:var(--radius-md); border:1px solid var(--border); margin-bottom:20px;">
        <h5 style="margin-bottom:12px; font-size:1rem;">Nuevo Producto FIXIO</h5>
        <form onsubmit="adminCreateProduct(event)">
          <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:12px;">
            <input type="text" id="newProdName" placeholder="Nombre de Producto" class="form-control" required>
            <select id="newProdCategory" class="form-control" required>
              <option value="mascotas">Mascotas</option>
              <option value="hogar">Hogar</option>
              <option value="oficina">Oficina</option>
              <option value="tecnologia">Tecnología</option>
              <option value="auto">Auto</option>
            </select>
            <input type="number" id="newProdStock" placeholder="Stock Inicial (ej. 15)" class="form-control" min="0" value="15" required>
            <input type="number" id="newProdPrice" placeholder="Precio ($ COP)" class="form-control" required>
            <input type="text" id="newProdBadge" placeholder="Etiqueta (ej: Nuevo, Novedad)" class="form-control">
          </div>
          <textarea id="newProdDesc" placeholder="Descripción corta del producto y beneficios" class="form-control" style="margin-top:10px;" required></textarea>
          <div style="display:flex; gap:10px; margin-top:12px;">
            <button type="submit" class="btn btn-accent" style="padding:8px 16px; font-size:0.85rem;">Guardar e Insertar en Tienda</button>
            <button type="button" class="btn btn-outline" onclick="document.getElementById('createProductFormContainer').style.display='none'" style="padding:8px 16px; font-size:0.85rem;">Cancelar</button>
          </div>
        </form>
      </div>

      <table class="admin-table">
        <thead>
          <tr>
            <th>Ref</th>
            <th>Imagen</th>
            <th>Producto</th>
            <th>Categoría</th>
            <th>Stock</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          ${PRODUCTS.map(p => `
            <tr>
              <td><strong>${p.id}</strong></td>
              <td>${p.imgUrl ? `<img src="${p.imgUrl}" width="36" height="36" style="object-fit:cover; border-radius:6px;" onerror="this.src='https://via.placeholder.com/36';" />` : '🖼️'}</td>
              <td><strong>${p.name}</strong></td>
              <td><span class="badge-category" style="position:static;">${p.categoryName}</span></td>
              <td><strong>${p.stock !== undefined ? (p.stock > 0 ? `<span style="color:var(--success); font-weight:700;">${p.stock} disp.</span>` : `<span style="color:var(--danger); font-weight:800; background:#FEE2E2; padding:2px 6px; border-radius:4px;">AGOTADO (0)</span>`) : '10 disp.'}</strong></td>
              <td><strong>$${formatNumber(p.price)} COP</strong></td>
              <td>
                <button class="btn btn-outline" onclick="showEditProductForm('${p.id}')" style="padding:5px 12px; font-size:0.78rem; border-color:var(--primary); color:var(--primary-dark); font-weight:600;">✏️ Editar</button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
  } else if (tabName === 'orders') {
    container.innerHTML = `
      <h4>🚚 Gestión de Pedidos de Clientes (${orders.length})</h4>
      ${orders.length === 0 ? `
        <p style="color:var(--text-muted); margin-top:20px; text-align:center; padding:30px;">No hay pedidos registrados aún. ¡Realiza una compra en la tienda para verla aquí!</p>
      ` : `
        <table class="admin-table">
          <thead>
            <tr>
              <th>ID Pedido</th>
              <th>Fecha</th>
              <th>Código Entrega (🔑)</th>
              <th>Cliente</th>
              <th>Dirección / Tel</th>
              <th>Total</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            ${orders.map(o => `
              <tr>
                <td><strong>${o.id}</strong></td>
                <td style="font-size:0.8rem;">${o.date}</td>
                <td><span style="font-weight:800; font-family:monospace; background:#FEF3C7; color:#B45309; padding:3px 8px; border-radius:4px; border:1px solid #F59E0B; font-size:0.85rem;">🔑 ${o.deliveryCode || 'N/A'}</span></td>
                <td>${o.customer}</td>
                <td style="font-size:0.8rem;">${o.address}<br>📱 ${o.phone}</td>
                <td><strong>$${formatNumber(o.total)} COP</strong></td>
                <td>
                  <select onchange="adminUpdateOrderStatus('${o.id}', this.value)" class="form-control" style="padding:4px 8px; font-size:0.8rem; width:auto;">
                    <option value="Pendiente" ${o.status==='Pendiente'?'selected':''}>⏳ Pendiente</option>
                    <option value="En Preparación" ${o.status==='En Preparación'?'selected':''}>📦 En Preparación</option>
                    <option value="Despachado" ${o.status==='Despachado'?'selected':''}>🚚 Despachado</option>
                    <option value="Entregado" ${o.status==='Entregado'?'selected':''}>✅ Entregado</option>
                  </select>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `}
    `;
  } else if (tabName === 'customers') {
    container.innerHTML = `
      <h4>👥 Registro de Clientes & Suscriptores</h4>
      <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:14px;">Bitácora de usuarios y compradores de FIXIO SOLUTIONS SAS.</p>
      <table class="admin-table">
        <thead>
          <tr>
            <th>Nombre / Email</th>
            <th>Tipo</th>
            <th>Fecha Registro</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Maritza Rodríguez</strong><br><span style="font-size:0.8rem; color:var(--text-muted);">maritza.rodriguez@gmail.com</span></td>
            <td><span class="status-badge shipped">Cliente Comprador</span></td>
            <td>18/07/2026</td>
          </tr>
          <tr>
            <td><strong>Camilo Restrepo</strong><br><span style="font-size:0.8rem; color:var(--text-muted);">camilo.restrepo@outlook.com</span></td>
            <td><span class="status-badge processing">Suscriptor Newsletter</span></td>
            <td>18/07/2026</td>
          </tr>
        </tbody>
      </table>
    `;
  } else if (tabName === 'blog') {
    container.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
        <h4>📝 Publicaciones del Blog &amp; Consejos (${blogPosts.length})</h4>
        <button class="btn btn-primary" onclick="showCreateBlogForm()" style="padding:8px 14px; font-size:0.85rem;">+ Publicar Artículo</button>
      </div>

      <!-- EDIT BLOG FORM CONTAINER -->
      <div id="editBlogFormContainer" style="display:none; background:var(--light-bg); padding:20px; border-radius:var(--radius-md); border:1.5px solid var(--primary-light); margin-bottom:20px;">
        <h5 style="margin-bottom:14px; font-size:1rem; color:var(--primary-dark);">✏️ Editar Artículo del Blog <span id="editBlogIdBadge" style="font-weight:700;"></span></h5>
        <form onsubmit="adminSaveEditBlogPost(event)">
          <input type="hidden" id="editBlogId">
          <div style="display:grid; grid-template-columns:1fr 1fr 100px; gap:12px; margin-bottom:12px;">
            <div>
              <label style="font-size:0.8rem; font-weight:600;">Título</label>
              <input type="text" id="editBlogTitle" class="form-control" required>
            </div>
            <div>
              <label style="font-size:0.8rem; font-weight:600;">Categoría</label>
              <input type="text" id="editBlogCategory" class="form-control" required>
            </div>
            <div>
              <label style="font-size:0.8rem; font-weight:600;">Emoji</label>
              <input type="text" id="editBlogIcon" class="form-control" required>
            </div>
          </div>
          <div style="margin-bottom:10px;">
            <label style="font-size:0.8rem; font-weight:600;">Descripción Corta / Intro</label>
            <textarea id="editBlogDesc" class="form-control" rows="2" required></textarea>
          </div>
          <div style="margin-bottom:12px;">
            <label style="font-size:0.8rem; font-weight:600;">Contenido Completo (Párrafos)</label>
            <textarea id="editBlogContent" class="form-control" rows="8" required></textarea>
          </div>
          <div style="display:flex; gap:10px;">
            <button type="submit" class="btn btn-primary" style="padding:8px 18px; font-size:0.85rem;">💾 Guardar Cambios</button>
            <button type="button" class="btn btn-outline" onclick="document.getElementById('editBlogFormContainer').style.display='none'" style="padding:8px 16px; font-size:0.85rem;">Cancelar</button>
          </div>
        </form>
      </div>

      <!-- CREATE BLOG FORM CONTAINER -->
      <div id="createBlogFormContainer" style="display:none; background:var(--light-bg); padding:20px; border-radius:var(--radius-md); border:1px solid var(--border); margin-bottom:20px;">
        <h5 style="margin-bottom:14px; font-size:1rem;">✏️ Nuevo Artículo para el Blog</h5>
        <form onsubmit="adminCreateBlogPost(event)">
          <div style="display:grid; grid-template-columns:1fr 1fr 100px; gap:12px; margin-bottom:12px;">
            <input type="text" id="newBlogTitle" placeholder="Título del artículo" class="form-control" required>
            <input type="text" id="newBlogCategory" placeholder="Categoría (ej: MASCOTAS, HOGAR)" class="form-control" required>
            <input type="text" id="newBlogIcon" placeholder="Emoji" class="form-control" required>
          </div>
          <textarea id="newBlogDesc" placeholder="Descripción corta / intro (aparece en la tarjeta)" class="form-control" rows="2" required style="margin-bottom:10px;"></textarea>
          <textarea id="newBlogContent" placeholder="Contenido completo del artículo. Escribe párrafo por párrafo. Cada línea será un párrafo en la vista del artículo..." class="form-control" rows="8" style="margin-bottom:12px;"></textarea>
          <div style="display:flex; gap:10px;">
            <button type="submit" class="btn btn-accent" style="padding:8px 16px; font-size:0.85rem;">🚀 Publicar Artículo</button>
            <button type="button" class="btn btn-outline" onclick="document.getElementById('createBlogFormContainer').style.display='none'" style="padding:8px 16px; font-size:0.85rem;">Cancelar</button>
          </div>
        </form>
      </div>

      <table class="admin-table">
        <thead>
          <tr>
            <th>Emoji</th>
            <th>Título del Artículo</th>
            <th>Categoría</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          ${blogPosts.map(b => `
            <tr>
              <td style="font-size:1.5rem;">${b.icon}</td>
              <td><strong>${b.title}</strong><br><span style="font-size:0.8rem; color:var(--text-muted);">${b.desc}</span></td>
              <td><span class="badge-category" style="position:static;">${b.category}</span></td>
              <td>
                <div style="display:flex; gap:6px;">
                  <button class="btn btn-outline" onclick="showEditBlogPostForm('${b.id}')" style="padding:5px 12px; font-size:0.78rem; border-color:var(--primary); color:var(--primary-dark); font-weight:600;">✏️ Editar</button>
                  <button class="btn btn-outline" onclick="adminDeleteBlogPost('${b.id}')" style="padding:5px 12px; font-size:0.78rem; border-color:var(--danger); color:var(--danger); font-weight:600;">🗑️ Eliminar</button>
                </div>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
  }
}

function showCreateBlogForm() {
  const container = document.getElementById('createBlogFormContainer');
  if (container) container.style.display = 'block';
}

function showEditBlogPostForm(postId) {
  const post = blogPosts.find(p => p.id === postId);
  if (!post) return;

  closeBlogPost();
  openAdminModal();
  switchAdminTab('blog');

  setTimeout(() => {
    const container = document.getElementById('editBlogFormContainer');
    if (!container) return;

    document.getElementById('editBlogIdBadge').textContent = `(${post.id})`;
    document.getElementById('editBlogId').value = post.id;
    document.getElementById('editBlogTitle').value = post.title;
    document.getElementById('editBlogCategory').value = post.category;
    document.getElementById('editBlogIcon').value = post.icon;
    document.getElementById('editBlogDesc').value = post.desc;
    document.getElementById('editBlogContent').value = post.content || '';

    container.style.display = 'block';
    container.scrollIntoView({ behavior: 'smooth' });
  }, 100);
}

function adminSaveEditBlogPost(event) {
  event.preventDefault();
  const postId = document.getElementById('editBlogId').value;
  const post = blogPosts.find(p => p.id === postId);
  if (!post) return;

  post.title = document.getElementById('editBlogTitle').value.trim();
  post.category = document.getElementById('editBlogCategory').value.trim().toUpperCase();
  post.icon = document.getElementById('editBlogIcon').value.trim() || '💡';
  post.desc = document.getElementById('editBlogDesc').value.trim();
  post.content = document.getElementById('editBlogContent').value.trim();

  localStorage.setItem('fixio_blog', JSON.stringify(blogPosts));
  renderBlogPosts();
  switchAdminTab('blog');
  showToast(`🎉 Artículo "${post.title}" actualizado exitosamente.`);
}

function adminCreateBlogPost(event) {
  event.preventDefault();
  const title = document.getElementById('newBlogTitle').value.trim();
  const category = document.getElementById('newBlogCategory').value.trim().toUpperCase();
  const icon = document.getElementById('newBlogIcon').value.trim() || '💡';
  const desc = document.getElementById('newBlogDesc').value.trim();
  const content = document.getElementById('newBlogContent').value.trim();

  const gradients = [
    'linear-gradient(135deg, #CCFBF1 0%, #99F6E4 100%)',
    'linear-gradient(135deg, #FFEDD5 0%, #FED7AA 100%)',
    'linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%)',
    'linear-gradient(135deg, #F3E8FF 0%, #E9D5FF 100%)',
    'linear-gradient(135deg, #FEF9C3 0%, #FDE047 50%)',
  ];
  const bgGradient = gradients[blogPosts.length % gradients.length];

  const newPost = {
    id: 'BLOG-' + Date.now(),
    title: title,
    category: category,
    icon: icon,
    bgGradient: bgGradient,
    desc: desc,
    content: content,
    author: currentUser?.name || 'FIXIO Solutions',
    date: new Date().toLocaleDateString('es-CO', {day:'2-digit', month:'long', year:'numeric'}),
    comments: [],
    tips: []
  };

  blogPosts.unshift(newPost);
  localStorage.setItem('fixio_blog', JSON.stringify(blogPosts));
  renderBlogPosts();
  switchAdminTab('blog');
  showToast(`¡Artículo "${title}" publicado en el Blog!`);
}

function showCreateProductForm() {
  const container = document.getElementById('createProductFormContainer');
  if (container) container.style.display = 'block';
}

function showEditProductForm(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const container = document.getElementById('editProductFormContainer');
  if (!container) return;

  document.getElementById('editProdIdBadge').textContent = `(${product.id})`;
  document.getElementById('editProdId').value = product.id;
  document.getElementById('editProdName').value = product.name;
  document.getElementById('editProdCategory').value = product.category;
  document.getElementById('editProdStock').value = product.stock !== undefined ? product.stock : 10;
  document.getElementById('editProdPrice').value = product.price;
  document.getElementById('editProdOldPrice').value = product.oldPrice || '';
  document.getElementById('editProdBadge').value = product.badge || '';
  document.getElementById('editProdImgUrl').value = product.imgUrl || '';
  document.getElementById('editProdDesc').value = product.desc;

  container.style.display = 'block';
  container.scrollIntoView({ behavior: 'smooth' });
}

function adminSaveEditProduct(event) {
  event.preventDefault();
  const productId = document.getElementById('editProdId').value;
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const categoryNames = {
    mascotas: 'Mascotas',
    hogar: 'Hogar',
    oficina: 'Oficina',
    tecnologia: 'Tecnología',
    auto: 'Auto'
  };

  const newCat = document.getElementById('editProdCategory').value;
  product.name = document.getElementById('editProdName').value.trim();
  product.category = newCat;
  product.categoryName = categoryNames[newCat] || 'General';
  product.stock = parseInt(document.getElementById('editProdStock').value || '0', 10);
  product.price = parseInt(document.getElementById('editProdPrice').value, 10);
  const oldPriceVal = document.getElementById('editProdOldPrice').value;
  product.oldPrice = oldPriceVal ? parseInt(oldPriceVal, 10) : Math.round(product.price * 1.25);
  product.badge = document.getElementById('editProdBadge').value.trim();
  product.imgUrl = document.getElementById('editProdImgUrl').value.trim();
  product.desc = document.getElementById('editProdDesc').value.trim();

  saveProducts();
  renderProducts(PRODUCTS);
  switchAdminTab('products');
  showToast(`🎉 Producto "${product.name}" actualizado exitosamente. Stock: ${product.stock} unidades.`);
}

function adminCreateProduct(event) {
  event.preventDefault();
  const name = document.getElementById('newProdName').value;
  const category = document.getElementById('newProdCategory').value;
  const stock = parseInt(document.getElementById('newProdStock').value || '10', 10);
  const price = parseInt(document.getElementById('newProdPrice').value, 10);
  const badge = document.getElementById('newProdBadge').value || 'Nuevo';
  const desc = document.getElementById('newProdDesc').value;

  const categoryNames = {
    mascotas: 'Mascotas',
    hogar: 'Hogar',
    oficina: 'Oficina',
    tecnologia: 'Tecnología',
    auto: 'Auto'
  };

  const newProd = {
    id: 'FX-' + String(PRODUCTS.length + 1).padStart(3, '0'),
    name: name,
    category: category,
    categoryName: categoryNames[category] || 'General',
    stock: stock,
    price: price,
    oldPrice: Math.round(price * 1.25),
    rating: 5.0,
    reviews: 1,
    badge: badge,
    desc: desc,
    svgIcon: `<svg viewBox="0 0 200 200" width="120" height="120"><circle cx="100" cy="100" r="70" fill="#0D9488"/><circle cx="100" cy="100" r="30" fill="#F97316"/></svg>`
  };

  PRODUCTS.unshift(newProd);
  saveProducts();
  renderProducts(PRODUCTS);
  switchAdminTab('products');
  showToast(`¡Producto ${name} creado con ${stock} unidades!`);
}

function adminUpdateOrderStatus(orderId, newStatus) {
  const order = orders.find(o => o.id === orderId);
  if (order) {
    order.status = newStatus;
    localStorage.setItem('fixio_orders', JSON.stringify(orders));
    showToast(`Pedido ${orderId} actualizado a estado: ${newStatus}`);
  }
}

// ─── MY ORDERS — Customer Order History & Tracking ───────────────────────
function openMyOrdersModal() {
  if (!currentUser) { openAuthModal('login'); return; }
  // Always read fresh data from localStorage so the admin's latest status updates are visible
  orders = JSON.parse(localStorage.getItem('fixio_orders') || '[]');
  renderMyOrders();
  document.getElementById('myOrdersOverlay')?.classList.add('active');
  document.getElementById('myOrdersModal')?.classList.add('active');
}

function closeMyOrdersModal() {
  document.getElementById('myOrdersOverlay')?.classList.remove('active');
  document.getElementById('myOrdersModal')?.classList.remove('active');
}

function renderMyOrders() {
  const container = document.getElementById('myOrdersContent');
  if (!container || !currentUser) return;

  // Filter orders that belong to the logged-in customer (match by email)
  const myOrders = orders.filter(o =>
    o.email && currentUser.email &&
    o.email.toLowerCase() === currentUser.email.toLowerCase()
  );

  // Status configuration
  const STATUS_STEPS = [
    { key: 'Pendiente',      emoji: '⏳', label: 'Pendiente' },
    { key: 'En Preparación', emoji: '📦', label: 'En Preparación' },
    { key: 'Despachado',     emoji: '🚚', label: 'Despachado' },
    { key: 'Entregado',      emoji: '✅', label: 'Entregado' }
  ];

  const STATUS_BADGE_CLASS = {
    'Pendiente':      'pendiente',
    'En Preparación': 'preparacion',
    'Despachado':     'despachado',
    'Entregado':      'entregado'
  };

  if (myOrders.length === 0) {
    container.innerHTML = `
      <div class="my-orders-empty">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="opacity:0.25; margin-bottom:16px;"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
        <h4>Aún no tienes compras registradas</h4>
        <p style="font-size:0.88rem; margin-bottom:20px;">Explora nuestro catálogo y realiza tu primera compra.</p>
        <button class="btn btn-accent" onclick="closeMyOrdersModal(); document.getElementById('productos').scrollIntoView({behavior:'smooth'});" style="padding:10px 22px;">
          🛒 Ver Productos
        </button>
      </div>`;
    return;
  }

  const ordersHTML = myOrders.map(order => {
    const currentStatusIdx = STATUS_STEPS.findIndex(s => s.key === order.status);
    const badgeClass = STATUS_BADGE_CLASS[order.status] || 'pendiente';

    const stepsHTML = STATUS_STEPS.map((step, idx) => {
      let cls = '';
      if (idx < currentStatusIdx) cls = 'completed';
      else if (idx === currentStatusIdx) cls = 'active';
      return `
        <div class="order-step ${cls}">
          <div class="order-step-dot">${step.emoji}</div>
          <div class="order-step-label">${step.label}</div>
        </div>`;
    }).join('');

    const itemsHTML = (order.items || []).map(item =>
      `<span class="my-order-item-chip">${item.name} ×${item.qty}</span>`
    ).join('');

    return `
      <div class="my-order-card">
        <div class="my-order-card-header">
          <div>
            <div class="my-order-id">📋 ${order.id}</div>
            <div class="my-order-date">📅 ${order.date}</div>
          </div>
          <div style="display:flex; flex-direction:column; align-items:flex-end; gap:6px;">
            ${order.deliveryCode ? `<span class="my-order-delivery-code">🔑 ${order.deliveryCode}</span>` : ''}
            <span class="order-status-badge ${badgeClass}">${STATUS_STEPS.find(s=>s.key===order.status)?.emoji || '⏳'} ${order.status || 'Pendiente'}</span>
          </div>
        </div>

        <div class="order-status-tracker">
          <div class="order-status-tracker-label">Estado del Pedido</div>
          <div class="order-status-steps">${stepsHTML}</div>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; font-size:0.85rem; color:var(--text-muted);">
          <span>💰 Total pagado: <strong style="color:var(--dark); font-size:0.9rem;">$${formatNumber(order.total)} COP</strong></span>
          <span>🏠 ${order.address}</span>
        </div>
        ${itemsHTML ? `<div class="my-order-items">${itemsHTML}</div>` : ''}
      </div>`;
  }).join('');

  container.innerHTML = `
    <div class="my-orders-refresh-hint">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.85"/></svg>
      El estado se actualiza en tiempo real. Cierra y vuelve a abrir para ver los últimos cambios.
    </div>
    ${ordersHTML}
  `;
}

// AUTHENTICATION & HEADER UI CONTROLLER
function renderHeaderAuth() {
  const userContainer = document.getElementById('headerUserAuth');
  if (!userContainer) return;

  if (currentUser) {
    const isAdmin = currentUser.role === 'admin';
    const avatarSvg = isAdmin
      ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></svg>`
      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;

    userContainer.innerHTML = `
      <div class="user-badge">
        <span class="avatar">${avatarSvg}</span>
        <span>${currentUser.name}</span>
        ${isAdmin ? '<span style="background:var(--accent); color:#FFF; font-size:0.65rem; padding:1px 6px; border-radius:10px;">ADMIN</span>' : ''}
      </div>
      ${isAdmin ? `
        <button class="icon-btn" onclick="openAdminModal()" title="Panel de Administración FIXIO" style="display:flex;align-items:center;justify-content:center;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></svg>
        </button>
      ` : `
        <button class="my-orders-btn" onclick="openMyOrdersModal()" title="Ver mis pedidos y estado de envío">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          Mis Pedidos
        </button>
      `}
      <button class="btn btn-outline" onclick="logoutUser()" style="padding: 6px 12px; font-size: 0.8rem; display:flex; align-items:center; gap:6px;" title="Cerrar Sesión">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
        Salir
      </button>
    `;
  } else {
    userContainer.innerHTML = `
      <button class="btn btn-outline" onclick="openAuthModal('login')" style="padding: 8px 14px; font-size: 0.85rem; display:flex; align-items:center; gap:8px;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        Iniciar Sesión
      </button>
    `;
  }
}

let authIntent = 'login'; // 'login', 'checkout_required', 'admin_required'

function openAuthModal(intent = 'login') {
  authIntent = intent;
  const overlay = document.getElementById('authOverlay');
  const modal = document.getElementById('authModal');
  const noticeElem = document.getElementById('authModalNotice');

  if (!overlay || !modal) return;

  if (intent === 'checkout_required') {
    if (noticeElem) noticeElem.innerHTML = `
      <div style="background:#FEF3C7; color:#92400E; padding:10px 14px; border-radius:var(--radius-sm); font-size:0.85rem; margin-bottom:14px; border:1px solid #FDE68A; display:flex; align-items:flex-start; gap:8px;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#92400E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0; margin-top:1px;"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
        <span><strong>Sesión requerida:</strong> Ingresa a tu cuenta para completar tu compra.</span>
      </div>
    `;
    switchAuthTab('login');
  } else if (intent === 'admin_required') {
    if (noticeElem) noticeElem.innerHTML = `
      <div style="background:#FEE2E2; color:#991B1B; padding:10px 14px; border-radius:var(--radius-sm); font-size:0.85rem; margin-bottom:14px; border:1px solid #FCA5A5; display:flex; align-items:flex-start; gap:8px;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#991B1B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0; margin-top:1px;"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
        <span><strong>Acceso Admin:</strong> Usa <code>admin@fixio.com</code> / <code>admin123</code></span>
      </div>
    `;
    switchAuthTab('login');
  } else {
    if (noticeElem) noticeElem.innerHTML = '';
    switchAuthTab('login');
  }

  overlay.classList.add('active');
  modal.classList.add('active');
}

function closeAuthModal() {
  document.getElementById('authOverlay')?.classList.remove('active');
  document.getElementById('authModal')?.classList.remove('active');
}

function switchAuthTab(tabName) {
  document.querySelectorAll('.auth-tab-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.querySelector(`.auth-tab-btn[data-tab="${tabName}"]`);
  if (activeBtn) activeBtn.classList.add('active');

  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');

  if (tabName === 'login') {
    if (loginForm) loginForm.style.display = 'block';
    if (registerForm) registerForm.style.display = 'none';
  } else {
    if (loginForm) loginForm.style.display = 'none';
    if (registerForm) registerForm.style.display = 'block';
  }
}

function handleLoginSubmit(event) {
  event.preventDefault();
  const email = document.getElementById('loginEmail').value.trim().toLowerCase();
  const pass = document.getElementById('loginPass').value.trim();

  const user = registeredUsers.find(u => u.email.toLowerCase() === email && u.pass === pass);

  if (user) {
    currentUser = user;
    localStorage.setItem('fixio_user', JSON.stringify(currentUser));
    renderHeaderAuth();
    closeAuthModal();
    showToast(`¡Bienvenido de nuevo, ${currentUser.name}!`);

    if (authIntent === 'checkout_required') {
      openCheckoutModal();
    } else if (authIntent === 'admin_required' && currentUser.role === 'admin') {
      openAdminModal();
    }
  } else {
    showToast('Correo o contraseña incorrectos. Revisa tus datos e intenta de nuevo.');
  }
}

function handleRegisterSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('regName').value.trim();
  const email = document.getElementById('regEmail').value.trim().toLowerCase();
  const pass = document.getElementById('regPass').value.trim();
  const address = document.getElementById('regAddress').value.trim();
  const phone = document.getElementById('regPhone').value.trim();

  const existing = registeredUsers.find(u => u.email.toLowerCase() === email);
  if (existing) {
    showToast('⚠️ Este correo electrónico ya está registrado. Inicia sesión.');
    switchAuthTab('login');
    return;
  }

  const newUser = {
    name: name,
    email: email,
    pass: pass,
    role: 'customer',
    address: address,
    phone: phone
  };

  registeredUsers.push(newUser);
  localStorage.setItem('fixio_users', JSON.stringify(registeredUsers));

  currentUser = newUser;
  localStorage.setItem('fixio_user', JSON.stringify(currentUser));

  renderHeaderAuth();
  closeAuthModal();
  showToast(`¡Registro exitoso! Bienvenido a FIXIO Solutions, ${name}.`);

  if (authIntent === 'checkout_required') {
    openCheckoutModal();
  }
}

function logoutUser() {
  currentUser = null;
  localStorage.removeItem('fixio_user');
  renderHeaderAuth();
  showToast('Sesión cerrada correctamente. ¡Hasta pronto!');
}

// ─── Social Login Handler ─────────────────────────────────────────────────
const SOCIAL_PROVIDERS = {
  google: {
    name: 'Google',
    icon: '🌐',
    loginUrl: 'https://accounts.google.com/ServiceLogin',
    defaultEmail: 'usuario@gmail.com'
  },
  microsoft: {
    name: 'Microsoft / Outlook',
    icon: '🔷',
    loginUrl: 'https://login.live.com/',
    defaultEmail: 'usuario@outlook.com'
  },
  facebook: {
    name: 'Facebook',
    icon: '🔵',
    loginUrl: 'https://www.facebook.com/login/',
    defaultEmail: 'usuario@facebook.com'
  }
};

function handleSocialLogin(providerKey) {
  const provider = SOCIAL_PROVIDERS[providerKey] || {
    name: providerKey,
    icon: '🌐',
    loginUrl: 'https://google.com',
    defaultEmail: `usuario@${providerKey}.com`
  };

  // 1. Open official provider login page in a popup window
  try {
    const popupWidth = 550;
    const popupHeight = 650;
    const left = (window.screen.width - popupWidth) / 2;
    const top = (window.screen.height - popupHeight) / 2;
    window.open(
      provider.loginUrl,
      `Login_${providerKey}`,
      `width=${popupWidth},height=${popupHeight},top=${top},left=${left},scrollbars=yes,resizable=yes`
    );
  } catch (e) {
    console.warn('Popup open error:', e);
  }

  // 2. Close main auth modal and open interactive Social Auth modal
  closeAuthModal();

  const overlay = document.getElementById('socialAuthOverlay');
  const modal = document.getElementById('socialAuthModal');
  if (!overlay || !modal) return;

  document.getElementById('socialProviderInput').value = providerKey;
  document.getElementById('socialAuthIcon').textContent = provider.icon;
  document.getElementById('socialAuthTitle').textContent = `Conectar con ${provider.name}`;
  document.getElementById('socialAuthSubtitle').textContent = `Vincula tu cuenta de ${provider.name} a FIXIO`;
  document.getElementById('socialAuthNotice').textContent = `Se abrió la ventana de ${provider.name}. Confirma tu correo y nombre para iniciar sesión en FIXIO.`;
  document.getElementById('socialSubmitBtn').textContent = `🚀 Ingresar con ${provider.name}`;

  // Prefill default email if empty
  const emailInput = document.getElementById('socialEmailInput');
  const nameInput = document.getElementById('socialNameInput');
  if (emailInput && !emailInput.value) emailInput.value = provider.defaultEmail;
  if (nameInput && !nameInput.value) nameInput.value = `Usuario ${provider.name}`;

  overlay.classList.add('active');
  modal.classList.add('active');
}

function closeSocialAuthModal() {
  document.getElementById('socialAuthOverlay')?.classList.remove('active');
  document.getElementById('socialAuthModal')?.classList.remove('active');
}

function confirmSocialLoginSubmit(event) {
  event.preventDefault();
  const providerKey = document.getElementById('socialProviderInput').value || 'google';
  const name = document.getElementById('socialNameInput').value.trim();
  const email = document.getElementById('socialEmailInput').value.trim().toLowerCase();
  const phone = document.getElementById('socialPhoneInput')?.value.trim() || '300 000 0000';

  const providerObj = SOCIAL_PROVIDERS[providerKey] || { name: providerKey };

  let user = registeredUsers.find(u => u.email.toLowerCase() === email);

  if (user) {
    currentUser = user;
  } else {
    user = {
      name: name,
      email: email,
      pass: null,
      role: 'customer',
      address: 'Bogotá, Colombia',
      phone: phone,
      provider: providerKey
    };
    registeredUsers.push(user);
    localStorage.setItem('fixio_users', JSON.stringify(registeredUsers));
    currentUser = user;
  }

  localStorage.setItem('fixio_user', JSON.stringify(currentUser));
  renderHeaderAuth();
  closeSocialAuthModal();
  showToast(`🎉 ¡Sesión iniciada con ${providerObj.name}! Bienvenido, ${currentUser.name}.`);

  if (authIntent === 'checkout_required') {
    openCheckoutModal();
  }
}

// ─── Toggle Password Visibility ───────────────────────────────────────────
function togglePasswordVisibility(inputId, btn) {
  const input = document.getElementById(inputId);
  if (!input) return;

  const isPassword = input.type === 'password';
  input.type = isPassword ? 'text' : 'password';

  btn.innerHTML = isPassword
    ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`
    : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`;
}
