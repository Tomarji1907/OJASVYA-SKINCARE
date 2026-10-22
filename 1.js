"use strict";

// 18 products: each name and image URL is unique.
const products = [
  {id:1,name:"Cloud Cleanser",category:"Cleanse",price:549,oldPrice:649,label:"BESTSELLER",desc:"A gentle-feel daily cleansing step.",size:"100 ml",rating:"4.9",color:"#e8e6d8",image:"https://glownglee.com/cdn/shop/files/HydratingFacialCleanser.jpg?v=1698215659"},
  {id:2,name:"Dew Drop Serum",category:"Treat",price:899,oldPrice:null,label:"SKIN ESSENTIAL",desc:"A lightweight serum for your daily ritual.",size:"30 ml",rating:"4.8",color:"#e8e2d4",image:"https://helloskinist.com/cdn/shop/files/Illuminist.jpg?v=1715222378&width=1920"},
  {id:3,name:"Daily Dew Cream",category:"Hydrate",price:749,oldPrice:null,label:null,desc:"A comforting moisturising step for every day.",size:"50 g",rating:"4.9",color:"#e0e7dc",image:"https://freshline.gr/cdn/shop/files/5204989130962.A.jpg?v=1762183329&width=1500"},
  {id:4,name:"Sun Veil SPF 50",category:"Protect",price:699,oldPrice:null,label:"DAILY FAVOURITE",desc:"A daytime sun-care essential concept.",size:"50 ml",rating:"4.7",color:"#e8dfd0",image:"https://www.reequil.com/cdn/shop/files/bundle3.png?v=1715845573&width=1066"},
  {id:5,name:"Rose Water Mist",category:"Hydrate",price:449,oldPrice:null,label:null,desc:"A refreshing mist for a midday reset.",size:"100 ml",rating:"4.8",color:"#eadfdf",image:"https://marianella.co/cdn/shop/files/Rose-Crystal.jpg?v=1762384859&width=1920"},
  {id:6,name:"Night Bloom Oil",category:"Treat",price:1099,oldPrice:null,label:"NIGHT RITUAL",desc:"A silky facial-oil-inspired evening step.",size:"30 ml",rating:"4.9",color:"#e5d9c9",image:"https://www.threecosmetics.com/cms/img/usr/news/2024/04/bcb/present1%402x.jpg"},
  {id:7,name:"Botanical Cleansing Balm",category:"Cleanse",price:599,oldPrice:null,label:null,desc:"A balm-texture cleanser concept for evenings.",size:"80 g",rating:"4.7",color:"#e4e5d8",image:"https://images.unsplash.com/photo-1654967279511-bd6fc650edac?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"},
  {id:8,name:"Soft Focus Eye Gel",category:"Treat",price:799,oldPrice:null,label:null,desc:"A lightweight gel for your eye-care ritual.",size:"20 ml",rating:"4.8",color:"#dfe5dc",image:"https://www.doctrineskincare.com/cdn/shop/files/Doctrine_Skincare_004_4x5_2139236b-9e16-4923-a8d3-d181db71e0b3.jpg?v=1775033972"},
  {id:9,name:"Oat Milk Cleanser",category:"Cleanse",price:529,oldPrice:null,label:"NEW",desc:"A creamy-feel cleanser for a calm routine.",size:"120 ml",rating:"4.8",color:"#e9dfd1",image:"https://nibunaturals.com/cdn/shop/files/facial_cleanse_3.png?v=1749384014&width=1080"},
  {id:10,name:"Green Tea Foam Wash",category:"Cleanse",price:479,oldPrice:null,label:null,desc:"A fresh foaming-wash concept for everyday use.",size:"100 ml",rating:"4.7",color:"#dbe8d9",image:"https://karissakart.com/cdn/shop/articles/minimal-clean-blog-header-image-showing-gentle-skincare-products-like-creams-serums-and-lotions-in-soft-neutral-packaging-placed-on-a-light-pastel-background-include-calming-elements.png?v=1768892606"},
  {id:11,name:"Honey Melt Cleansing Oil",category:"Cleanse",price:679,oldPrice:null,label:null,desc:"An oil cleanser concept for an evening ritual.",size:"100 ml",rating:"4.8",color:"#eee0c7",image:"https://www.smz-sophie.com/cdn/shop/articles/Design_sans_titre_10.png?v=1762802473&width=1500"},
  {id:12,name:"Rice Cloud Toner",category:"Hydrate",price:629,oldPrice:null,label:null,desc:"A lightweight toner step to layer into a routine.",size:"150 ml",rating:"4.8",color:"#eee6d9",image:"https://cdn.shopify.com/s/files/1/0653/7678/0341/articles/A_modern_skincare_flat_lay_featuring_elegant_bottles_and_jars_with_no_labels_containing_serums_cr_15-02-2025_at_23-22-38.jpg.webp?v=1771336306"},
  {id:13,name:"Cucumber Cool Gel",category:"Hydrate",price:499,oldPrice:null,label:null,desc:"A cooling-feel gel moisturiser concept.",size:"60 g",rating:"4.7",color:"#dce9dc",image:"https://www.dotandkey.com/cdn/shop/files/1_a812cc64-02a1-4797-831e-1294dbf79d37.jpg?v=1722408101"},
  {id:14,name:"Ceramide Comfort Cream",category:"Hydrate",price:849,oldPrice:null,label:"SOFT COMFORT",desc:"A richer-feel cream for your evening routine.",size:"50 g",rating:"4.9",color:"#e5e1d7",image:"https://nala.eu/cdn/shop/files/crema-hidratanta-gradiens-2.jpg?v=1758205996&width=1500"},
  {id:15,name:"Vitamin C Glow Serum",category:"Treat",price:1099,oldPrice:null,label:null,desc:"A serum concept for a brightening-inspired routine.",size:"30 ml",rating:"4.8",color:"#f0dfc5",image:"https://images.squarespace-cdn.com/content/v1/6821a442b4d1155f0f030a7e/2fa84523-d8b0-442f-8215-b2334a38ea03/Cosmetics%2Blaboratory%2Bfor%2Bambitious%2Bindependent%2Bbrands.png"},
  {id:16,name:"Chamomile Rescue Balm",category:"Treat",price:649,oldPrice:null,label:null,desc:"A multipurpose balm concept for dry-feeling areas.",size:"40 g",rating:"4.8",color:"#e7dfcf",image:"https://www.handmadeheroes.com.sg/cdn/shop/products/HandmadeHeroesLipDewHyaluronicAcidLipBalmBestSellingVeganCarePackageGiftSet-01_600x.jpg?v=1621076810"},
  {id:17,name:"Silk Touch Hand Cream",category:"Hydrate",price:349,oldPrice:null,label:null,desc:"A compact hand cream for everyday moisture.",size:"50 ml",rating:"4.8",color:"#e6dfd4",image:"https://vgan-life.com/cdn/shop/products/BODYLOTION_HANDCREAMBUNDLE.jpg?v=1670590769"},
  {id:18,name:"Body Glow Lotion",category:"Hydrate",price:699,oldPrice:null,label:"BODY CARE",desc:"A daily body-moisturiser concept.",size:"200 ml",rating:"4.8",color:"#e8dfd2",image:"https://www.riversol.com/cdn/shop/files/head-to-toe-kv-1.jpg?v=1776126152&width=2500"},
  {id:19,name:"Silk Touch face Cream",category:"Hydrate",price:999,oldPrice:null,label:null,desc:"A compact hand cream for everyday moisture.",size:"100 ml",rating:"4.8",color:"#e6dfd4",image:"https://plus.unsplash.com/premium_photo-1774279904493-98f6a1cea37f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"}
];

const $ = id => document.getElementById(id);
const money = amount => "₹" + Number(amount).toLocaleString("en-IN");
const FREE_SHIPPING = 999;

let cart = {};
let wishlist = new Set();
let activeCategory = "All";
let searchTerm = "";
let toastTimer;
let lastFocusedElement = null;

const reducedMotion =
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

// If an external photo fails, create a different illustration for that item.
function fallbackImage(product) {
  const color = product.color;
  const lines = [];
  let line = "";

  product.name.split(/\s+/).forEach(word => {
    if ((line + " " + word).trim().length > 18 && line) {
      lines.push(line);
      line = word;
    } else {
      line = (line + " " + word).trim();
    }
  });

  if (line) lines.push(line);

  const title = lines.slice(0, 3).map((text, i) => `
    <text x="350" y="510"
      text-anchor="middle"
      font-family="Arial,sans-serif"
      font-size="${text.length > 16 ? 17 : 20}"
      font-weight="600"
      fill="#34452f"
      transform="translate(0 ${i * 25})">${escapeHTML(text)}</text>
  `).join("");

  const jar = /cream|balm|mask|gel|patch|butter/i.test(product.name);

  const pack = jar
    ? `<rect x="208" y="310" width="284" height="300" rx="38" fill="#fffdf7" stroke="#cfcfc3" stroke-width="4"/>
       <rect x="190" y="278" width="320" height="58" rx="13" fill="#65765b"/>
       <rect x="224" y="354" width="252" height="228" rx="23" fill="${color}"/>`
    : `<rect x="317" y="180" width="66" height="75" rx="8" fill="#65765b"/>
       <rect x="270" y="235" width="160" height="390" rx="27" fill="#fffdf7" stroke="#cfcfc3" stroke-width="4"/>
       <rect x="287" y="255" width="126" height="352" rx="18" fill="${color}"/>`;

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="700" height="900" viewBox="0 0 700 900">
      <defs>
        <linearGradient id="b" x1="0" y1="0" x2="1" y2="1">
          <stop stop-color="${color}"/>
          <stop offset="1" stop-color="#faf7ef"/>
        </linearGradient>
      </defs>
      <rect width="700" height="900" fill="url(#b)"/>
      <circle cx="570" cy="145" r="110" fill="#fff" opacity=".3"/>
      <circle cx="110" cy="740" r="125" fill="#fff" opacity=".25"/>
      <ellipse cx="350" cy="674" rx="150" ry="22" fill="#34452f" opacity=".15"/>
      ${pack}
      <text x="350" y="420" text-anchor="middle"
        font-family="Georgia,serif" font-size="34" fill="#34452f">ojasvya</text>
      <text x="350" y="448" text-anchor="middle"
        font-family="Arial,sans-serif" font-size="15"
        letter-spacing="2" fill="#65765b">SKINCARE RITUALS</text>
      ${title}
      <line x1="310" y1="570" x2="390" y2="570" stroke="#65765b" stroke-width="2"/>
      <text x="350" y="598" text-anchor="middle"
        font-family="Arial,sans-serif" font-size="13"
        letter-spacing="2" fill="#65765b">${escapeHTML(product.size).toUpperCase()}</text>
      <text x="350" y="820" text-anchor="middle"
        font-family="Georgia,serif" font-size="24" fill="#34452f">Your everyday ritual</text>
    </svg>`;

  return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}

function watchImages(root = document) {
  root.querySelectorAll("img[data-product-id]").forEach(img => {
    img.addEventListener("error", () => {
      if (img.dataset.fallbackApplied === "true") return;

      const product = products.find(
        p => p.id === Number(img.dataset.productId)
      );

      if (!product) return;

      img.dataset.fallbackApplied = "true";
      img.src = fallbackImage(product);
    }, { once: true });
  });
}

function productCard(p, index = 0) {
  const liked = wishlist.has(p.id);

  return `
    <article class="product-card"
      data-open="${p.id}"
      tabindex="0"
      aria-label="View ${escapeHTML(p.name)}"
      style="animation-delay:${(index % 4) * 55}ms">

      <div class="product-image" style="background:${p.color}">
        <img
          src="${p.image}"
          alt="${escapeHTML(p.name)} product photo"
          loading="lazy"
          decoding="async"
          data-product-id="${p.id}">

        ${p.label
          ? `<span class="product-label">${escapeHTML(p.label)}</span>`
          : ""}

        <button type="button"
          class="wishlist-btn ${liked ? "liked" : ""}"
          data-wish="${p.id}"
          aria-label="${liked ? "Remove from" : "Add to"} wishlist"
          aria-pressed="${liked}">
          ${liked ? "♥" : "♡"}
        </button>

        <button type="button" class="quick-add" data-add="${p.id}">
          ＋ Add to bag
        </button>
      </div>

      <div class="product-info">
        <div class="product-top">
          <span class="product-name">${escapeHTML(p.name)}</span>
          <span class="price">
            ${money(p.price)}
            ${p.oldPrice
              ? `<del class="old-price">${money(p.oldPrice)}</del>`
              : ""}
          </span>
        </div>

        <p class="product-desc">${escapeHTML(p.desc)}</p>

        <span class="rating">
          ★ ${escapeHTML(p.rating)}
          <span style="color:#999">· ${escapeHTML(p.size)}</span>
        </span>
      </div>
    </article>`;
}

function renderProducts() {
  const list = $("allProducts");
  const featured = $("featuredProducts");

  if (!list || !featured) return;

  const filtered = products.filter(p => {
    const categoryMatch =
      activeCategory === "All" || p.category === activeCategory;

    const text = `${p.name} ${p.desc} ${p.category}`.toLowerCase();

    return categoryMatch && text.includes(searchTerm.toLowerCase());
  });

  const sort = $("sort")?.value || "featured";

  if (sort === "low") filtered.sort((a, b) => a.price - b.price);
  if (sort === "high") filtered.sort((a, b) => b.price - a.price);
  if (sort === "name") filtered.sort((a, b) => a.name.localeCompare(b.name));

  list.innerHTML = filtered.map(productCard).join("");
  featured.innerHTML = products.slice(0, 4).map(productCard).join("");

  $("resultCount").textContent =
    `${filtered.length} ${filtered.length === 1 ? "product" : "products"}`;

  $("noResults").hidden = filtered.length !== 0;

  watchImages(list);
  watchImages(featured);
}

function selectCategory(category) {
  activeCategory = category;

  document.querySelectorAll(".filter").forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.category === category
    );
  });

  renderProducts();
}

function showToast(message) {
  const toast = $("toast");
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2300);
}

function toggleWishlist(id) {
  const p = products.find(item => item.id === Number(id));
  if (!p) return;

  if (wishlist.has(p.id)) {
    wishlist.delete(p.id);
    showToast(`${p.name} removed from wishlist`);
  } else {
    wishlist.add(p.id);
    showToast(`${p.name} saved to wishlist ♥`);
  }

  renderProducts();
}

function addToCart(id) {
  const p = products.find(item => item.id === Number(id));
  if (!p) return;

  cart[p.id] = (cart[p.id] || 0) + 1;
  updateCart();

  const button = $("openCart");

  if (button) {
    button.classList.remove("bump");
    void button.offsetWidth;
    button.classList.add("bump");
  }

  showToast(`${p.name} added to your bag ✳`);
}

function changeQuantity(id, delta) {
  const p = products.find(item => item.id === Number(id));
  if (!p) return;

  cart[p.id] = (cart[p.id] || 0) + delta;

  if (cart[p.id] <= 0) delete cart[p.id];

  updateCart();
}

function updateCart() {
  const holder = $("cartItems");
  if (!holder) return;

  const entries = Object.entries(cart).filter(([, qty]) => qty > 0);
  const count = entries.reduce((sum, [, qty]) => sum + qty, 0);

  const total = entries.reduce((sum, [id, qty]) => {
    const product = products.find(p => p.id === Number(id));
    return sum + (product?.price || 0) * qty;
  }, 0);

  $("cartCount").textContent = count;
  $("drawerCount").textContent = `(${count})`;
  $("subtotal").textContent = money(total);

  $("shippingFill").style.width =
    `${Math.min(100, total / FREE_SHIPPING * 100)}%`;

  $("shippingMessage").textContent = total >= FREE_SHIPPING
    ? "Lovely! You've unlocked free shipping. ✳"
    : `Add ${money(Math.max(0, FREE_SHIPPING - total))} more for free shipping.`;

  if (!entries.length) {
    holder.innerHTML = `
      <div class="empty-cart">
        <div style="color:#65765b;font-size:30px">✳</div>
        <h3>Your bag is taking a little break.</h3>
        <p>Find something lovely for your daily ritual.</p>
        <button class="btn" type="button" id="emptyShop">
          Explore the collection ↗
        </button>
      </div>`;
    return;
  }
    holder.innerHTML = entries.map(([id, qty]) => {
    const p = products.find(item => item.id === Number(id));
    if (!p) return "";

    return `
      <div class="cart-row">
        <img src="${p.image}" alt="${escapeHTML(p.name)}"
          data-product-id="${p.id}" loading="lazy">

        <div>
          <h3>${escapeHTML(p.name)}</h3>
          <p>${escapeHTML(p.size)}</p>
          <span class="row-price">${money(p.price)}</span>

          <div class="qty">
            <button type="button" data-qty="${p.id}" data-delta="-1"
              aria-label="Decrease quantity">−</button>
            <span>${qty}</span>
            <button type="button" data-qty="${p.id}" data-delta="1"
              aria-label="Increase quantity">+</button>
          </div>
        </div>

        <button class="remove" type="button" data-remove="${p.id}">
          Remove
        </button>
      </div>`;
  }).join("");

  watchImages(holder);
}

function openCart() {
  lastFocusedElement = document.activeElement;
  $("cartDrawer").classList.add("open");
  $("overlay").classList.add("show");
  document.body.classList.add("no-scroll");
  $("closeCart").focus();
}

function closeCart() {
  $("cartDrawer").classList.remove("open");
  $("overlay").classList.remove("show");

  if (!$("productModal")?.classList.contains("open")) {
    document.body.classList.remove("no-scroll");
  }

  if (lastFocusedElement?.isConnected) {
    lastFocusedElement.focus();
  }
}

function openProduct(id) {
  const p = products.find(item => item.id === Number(id));
  if (!p) return;

  lastFocusedElement = document.activeElement;

  $("productDetails").innerHTML = `
    <div class="detail-layout">
      <div class="detail-image" style="background:${p.color}">
        <img src="${p.image}" alt="${escapeHTML(p.name)} product photo"
          data-product-id="${p.id}">
      </div>

      <div class="detail-copy">
        <span class="eyebrow">${p.category.toUpperCase()} · OJASVYA</span>
        <h2>${escapeHTML(p.name)}</h2>
        <span class="rating">★ ${p.rating} · Demo listing</span>

        <div class="detail-price">
          ${money(p.price)}
          ${p.oldPrice ? `<del>${money(p.oldPrice)}</del>` : ""}
        </div>

        <p>${escapeHTML(p.desc)}</p>
        <p><b>Size:</b> ${escapeHTML(p.size)}</p>

        <p>
          This is a concept storefront item. Photography is illustrative
          and may show reference packaging, not an actual Ojasvya product.
        </p>

        <button type="button" class="btn" id="detailAdd">
          Add to bag — ${money(p.price)} ↗
        </button>

        <div class="detail-meta">
          ✳ Thoughtful everyday skincare<br>
          ✳ Clear product information<br>
          ✳ Sample product listing
        </div>
      </div>
    </div>`;

  $("productModal").classList.add("open");
  document.body.classList.add("no-scroll");

  watchImages($("productDetails"));

  $("detailAdd").addEventListener("click", () => {
    addToCart(p.id);
    closeProduct();
  });

  $("closeModal").focus();
}

function closeProduct() {
  $("productModal").classList.remove("open");

  if (!$("cartDrawer")?.classList.contains("open")) {
    document.body.classList.remove("no-scroll");
  }

  if (lastFocusedElement?.isConnected) {
    lastFocusedElement.focus();
  }
}

function updateScrollUI() {
  const max = document.documentElement.scrollHeight - window.innerHeight;

  $("scrollProgress").style.width =
    `${max > 0 ? window.scrollY / max * 100 : 0}%`;

  $("header").classList.toggle("scrolled", window.scrollY > 15);
  $("backToTop").classList.toggle("visible", window.scrollY > 500);
}

function init() {
  const required = [
    "allProducts",
    "featuredProducts",
    "cartItems",
    "productModal",
    "productDetails",
    "cartCount"
  ];

  const missing = required.filter(id => !$(id));

  if (missing.length) {
    console.error("Ojasvya HTML missing IDs:", missing.join(", "));
    return;
  }

  renderProducts();
  updateCart();
  updateScrollUI();

  window.addEventListener("scroll", updateScrollUI, { passive: true });

  document.addEventListener("click", event => {
    const target = event.target instanceof Element ? event.target : null;
    if (!target) return;

    const wish = target.closest("[data-wish]");
    if (wish) {
      event.preventDefault();
      event.stopPropagation();
      toggleWishlist(wish.dataset.wish);
      return;
    }

    const add = target.closest("[data-add]");
    if (add) {
      event.preventDefault();
      event.stopPropagation();
      addToCart(add.dataset.add);
      return;
    }

    const qty = target.closest("[data-qty]");
    if (qty) {
      changeQuantity(qty.dataset.qty, Number(qty.dataset.delta));
      return;
    }

    const remove = target.closest("[data-remove]");
    if (remove) {
      delete cart[Number(remove.dataset.remove)];
      updateCart();
      showToast("Item removed from your bag");
      return;
    }

    if (target.closest("#emptyShop")) {
      closeCart();
      $("shop").scrollIntoView({
        behavior: reducedMotion ? "auto" : "smooth"
      });
      return;
    }

    if (target.closest("#resetFilters")) {
      searchTerm = "";
      activeCategory = "All";
      $("searchInput").value = "";
      $("sort").value = "featured";
      selectCategory("All");
      return;
    }

    const card = target.closest("[data-open]");
    if (card && !target.closest("button")) {
      openProduct(card.dataset.open);
    }
  });

  document.querySelectorAll(".filter").forEach(button => {
    button.addEventListener("click", () => {
      selectCategory(button.dataset.category || "All");
    });
  });

  $("sort").addEventListener("change", renderProducts);

  $("searchToggle").addEventListener("click", () => {
    $("searchBar").classList.toggle("open");

    if ($("searchBar").classList.contains("open")) {
      $("searchInput").focus();
    }
  });

  $("searchInput").addEventListener("input", event => {
    searchTerm = event.target.value.trim();
    renderProducts();
  });

  $("clearSearch").addEventListener("click", () => {
    $("searchInput").value = "";
    searchTerm = "";
    renderProducts();
    $("searchInput").focus();
  });

  $("menuToggle").addEventListener("click", () => {
    const open = $("nav").classList.toggle("open");
    $("menuToggle").setAttribute("aria-expanded", String(open));
    $("menuToggle").setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });

  document.querySelectorAll("#nav a").forEach(link => {
    link.addEventListener("click", () => {
      $("nav").classList.remove("open");
      $("menuToggle").setAttribute("aria-expanded", "false");
    });
  });

  $("openCart").addEventListener("click", openCart);
  $("closeCart").addEventListener("click", closeCart);
  $("overlay").addEventListener("click", closeCart);
  $("closeModal").addEventListener("click", closeProduct);

  $("productModal").addEventListener("click", event => {
    if (event.target === $("productModal")) closeProduct();
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      if ($("productModal").classList.contains("open")) closeProduct();
      if ($("cartDrawer").classList.contains("open")) closeCart();

      $("nav").classList.remove("open");
      $("searchBar").classList.remove("open");
      $("menuToggle").setAttribute("aria-expanded", "false");
    }

    if (
      (event.key === "Enter" || event.key === " ") &&
      event.target instanceof Element &&
      event.target.matches(".product-card")
    ) {
      event.preventDefault();
      openProduct(event.target.dataset.open);
    }
  });

  $("newsletterForm").addEventListener("submit", event => {
    event.preventDefault();

    $("newsletterMessage").textContent =
      "Thanks for your interest! This demo does not store email addresses.";

    event.target.reset();
  });

  $("checkout").addEventListener("click", () => {
    showToast(
      Object.keys(cart).length
        ? "Demo checkout — payments are not enabled."
        : "Your bag is empty."
    );
  });

  $("backToTop").addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: reducedMotion ? "auto" : "smooth"
    });
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init, { once: true });
} else {
  init();
}