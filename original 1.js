 // 1. Function to open the pop-up
function openMembershipModal() {
    document.getElementById('membershipModal').style.display = 'flex';
}

// 2. Function to send data to the Robot (Make.com)
document.getElementById('membershipForm')?.addEventListener('submit', async function(e) {
    e.preventDefault();
    const btn = document.getElementById('memBtn');
    
    // The data we are sending
    const payload = {
        name: document.getElementById('memName').value,
        email: document.getElementById('memEmail').value,
        phone: document.getElementById('memPhone').value,
        source: 'Membership Form'
    };

    btn.innerText = "Sending...";
    btn.disabled = true;

    try {
        const response = await fetch('https://hook.us2.make.com/nb8v2zh76aq5vd8t80j76mrgpirxwl75', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            alert("Welcome to the club! Check your email soon.");
            document.getElementById('membershipModal').style.display = 'none';
            this.reset();
        }
    } catch (err) {
        alert("Connection error. Please try again.");
    } finally {
        btn.innerText = "Sign Up Now";
        btn.disabled = false;
    }
});

// 1. Updated Pre-order function: Opens the Modal instead of using Prompts
function handlePreOrder() {
    document.getElementById('preOrderModal').style.display = 'flex';
}

// 2. Add this "Messenger" function to handle the Pre-Order Form Submission
async function handleFormSubmit(event, webhookUrl) {
    event.preventDefault(); 
    const form = event.target;
    const btn = form.querySelector('button');
    
    // This grabs the Name, Item, and Phone from your form
    const formData = Object.fromEntries(new FormData(form));

    btn.innerText = "Sending...";
    btn.disabled = true;

    try {
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            alert("Success! Your pre-order request has been received.");
            document.getElementById('preOrderModal').style.display = 'none';
            form.reset();
        } else {
            alert("The server is busy. Please try again.");
        }
    } catch (err) {
        alert("Check your internet connection.");
    } finally {
        btn.innerText = "Submit Request";
        btn.disabled = false;
    }
}

// 3. Add this helper to close the modal if you click outside of it
function closeModal(e, id) {
    if (e.target.id === id) {
        document.getElementById(id).style.display = 'none';
    }
}
    // Optional: Open WhatsApp with the pre-filled details
    // const msg = encodeURIComponent(`Pre-order Request\nName: ${userName}\nItem: ${customItem}\nPhone: ${userPhone}`);
    // window.open(`https://wa.me/254700200234?text=${msg}`, '_blank');

  // ===== 1. CURRENCY & FORMATTING =====
  const fmt = (n) => {
    const v = Math.round(Number(n) || 0);
    return "KSh " + v.toLocaleString("en-KE");
  };

  // ===== 2. IMAGE HELPER (LOCAL FOLDER INTEGRATION) =====
  // This ensures paths look like: images/Hoodies/hoodie1.jpg
  const uimg = (category, filename) => `images/${category}/${filename}`;

  // ===== 3. PRODUCTS DATA (MAPPED TO YOUR 11 FOLDERS) =====
  const PRODUCTS = [
    // Hoodies
    { id:"p1", name:"Midnight Hoodie", category:"Hoodies", price:2499, sizes:["S","M","L","XL"], featured:1, createdAt:"2025-12-15", badges:["Cozy","Best Seller"], image: uimg("Hoodies","hoodie1.jpg") },
    { id:"p9", name:"Essential Hoodie", category:"Hoodies", price:2299, sizes:["S","M","L","XL"], featured:20, createdAt:"2025-12-18", badges:["Warm"], image: uimg("Hoodies","hoodie2.jpg") },
    { id:"p10", name:"Zip-Up Hoodie", category:"Hoodies", price:2599, sizes:["S","M","L","XL"], featured:21, createdAt:"2025-12-08", badges:["Zip"], image: uimg("Hoodies","hoodie3.jpg") },
    { id:"p11", name:"Boxy Hoodie", category:"Hoodies", price:2399, sizes:["S","M","L"], featured:22, createdAt:"2025-11-26", badges:["Street Fit"], image: uimg("Hoodies","hoodie4.jpg") },
    { id:"p12", name:"Heavyweight Hoodie", category:"Hoodies", price:2999, sizes:["M","L","XL"], featured:23, createdAt:"2025-12-28", badges:["Premium"], image: uimg("Hoodies","hoodie5.jpg") },
    { id:"p13", name:"Graphic Hoodie — Wave", category:"Hoodies", price:2799, sizes:["S","M","L","XL"], featured:24, createdAt:"2025-12-02", badges:["Graphic"], image: uimg("Hoodies","hoodie6.jpg") },

    // T-Shirts
    { id:"p2", name:"Core Oversized Tee", category:"T-Shirts", price:999, sizes:["XS","S","M","L","XL"], featured:2, createdAt:"2025-12-22", badges:["Soft Cotton"], image: uimg("T-Shirts","tee1.jpg") },
    { id:"p14", name:"Oversized Tee — Stone", category:"T-Shirts", price:1099, sizes:["XS","S","M","L","XL"], featured:30, createdAt:"2025-12-21", badges:["Oversized"], image: uimg("T-Shirts","tee2.jpg") },
    { id:"p15", name:"Basic Tee — White", category:"T-Shirts", price:799, sizes:["XS","S","M","L","XL"], featured:31, createdAt:"2025-10-30", badges:["Everyday"], image: uimg("T-Shirts","tee3.jpg") },
    { id:"p16", name:"Basic Tee — Black", category:"T-Shirts", price:799, sizes:["XS","S","M","L","XL"], featured:32, createdAt:"2025-10-30", badges:["Everyday"], image: uimg("T-Shirts","tee4.jpg") },
    { id:"p17", name:"Ringer Tee", category:"T-Shirts", price:950, sizes:["S","M","L","XL"], featured:33, createdAt:"2025-11-14", badges:["Retro"], image: uimg("T-Shirts","tee5.jpg") },
    { id:"p18", name:"Longline Tee", category:"T-Shirts", price:1199, sizes:["S","M","L","XL"], featured:34, createdAt:"2025-12-11", badges:["New"], image: uimg("T-Shirts","tee6.jpg") },
    { id:"p19", name:"Pocket Tee", category:"T-Shirts", price:899, sizes:["XS","S","M","L","XL"], featured:35, createdAt:"2025-11-03", badges:["Pocket"], image: uimg("T-Shirts","tee7.jpg") },
    { id:"p20", name:"Graphic Tee — Neon", category:"T-Shirts", price:1299, sizes:["S","M","L","XL"], featured:36, createdAt:"2025-12-27", badges:["Hot"], image: uimg("T-Shirts","tee8.jpg") },

    // Pants
    { id:"p3", name:"Street Cargo Pants", category:"Pants", price:2199, sizes:["S","M","L","XL"], featured:3, createdAt:"2025-11-28", badges:["Utility"], image:uimg("Pants","pants1.jpg") },
    { id:"p21", name:"Slim Cargo Pants", category:"Pants", price:2299, sizes:["S","M","L","XL"], featured:40, createdAt:"2025-11-20", badges:["Slim"], image:uimg("Pants","pants2.jpg") },
    { id:"p22", name:"Relaxed Cargo Pants", category:"Pants", price:2399, sizes:["S","M","L","XL"], featured:41, createdAt:"2025-12-06", badges:["Relaxed"], image:uimg("Pants","pants3.jpg") },
    { id:"p23", name:"Straight Denim", category:"Pants", price:2699, sizes:["S","M","L","XL"], featured:42, createdAt:"2025-10-12", badges:["Denim"], image:uimg("Pants","pants4.jpg") },
    { id:"p24", name:"Baggy Denim", category:"Pants", price:2799, sizes:["S","M","L","XL"], featured:43, createdAt:"2025-12-14", badges:["Baggy"], image:uimg("Pants","pants5.jpg") },
    { id:"p25", name:"Chino Pants", category:"Pants", price:2199, sizes:["S","M","L","XL"], featured:44, createdAt:"2025-09-25", badges:["Clean"], image:uimg("Pants","pants6.jpg") },
    { id:"p26", name:"Track Pants", category:"Pants", price:1799, sizes:["S","M","L","XL"], featured:45, createdAt:"2025-12-01", badges:["Sport"], image:uimg("Pants","pants7.jpg") },
    { id:"p27", name:"Pleated Trousers", category:"Pants", price:2499, sizes:["S","M","L"], featured:46, createdAt:"2025-11-29", badges:["Formal"], image:uimg("Pants","pants8.jpg") },

    // Outerwear
    { id:"p4", name:"Cloud Puffer Jacket", category:"Outerwear", price:5499, sizes:["S","M","L"], featured:4, createdAt:"2025-12-29", badges:["New"], image:uimg("Outerwear","jacket1.jpg") },
    { id:"p5", name:"Classic Denim Jacket", category:"Outerwear", price:3999, sizes:["S","M","L","XL"], featured:6, createdAt:"2025-10-18", badges:["Iconic"], image:uimg("Outerwear","jacket2.jpg") },
    { id:"p28", name:"Bomber Jacket", category:"Outerwear", price:4499, sizes:["S","M","L","XL"], featured:50, createdAt:"2025-12-13", badges:["Street"], image:uimg("Outerwear","jacket3.jpg") },
    { id:"p29", name:"Windbreaker Jacket", category:"Outerwear", price:3299, sizes:["S","M","L","XL"], featured:51, createdAt:"2025-12-26", badges:["Light"], image:uimg("Outerwear","jacket4.jpg") },
    { id:"p30", name:"Fleece Jacket", category:"Outerwear", price:3899, sizes:["S","M","L","XL"], featured:52, createdAt:"2025-11-08", badges:["Warm"], image:uimg("Outerwear","jacket5.jpg") },
    { id:"p31", name:"Trench Coat", category:"Outerwear", price:5999, sizes:["S","M","L"], featured:53, createdAt:"2025-10-05", badges:["Elegant"], image:uimg("Outerwear","jacket6.jpg") },
    { id:"p32", name:"Overshirt Jacket", category:"Outerwear", price:3599, sizes:["S","M","L","XL"], featured:54, createdAt:"2025-12-09", badges:["Layer"], image:uimg("Outerwear","jacket7.jpg") },

    // Tops
    { id:"p6", name:"Ribbed Crop Top", category:"Tops", price:850, sizes:["XS","S","M","L"], featured:5, createdAt:"2025-12-05", badges:["Trending"], image:uimg("Tops","top1.jpg") },
    { id:"p33", name:"Ribbed Tank", category:"Tops", price:650, sizes:["XS","S","M","L"], featured:60, createdAt:"2025-11-21", badges:["Basic"], image:uimg("Tops","top2.jpg") },
    { id:"p34", name:"Satin Cami", category:"Tops", price:999, sizes:["XS","S","M","L"], featured:61, createdAt:"2025-12-03", badges:["Shine"], image:uimg("Tops","top3.jpg") },
    { id:"p35", name:"Wrap Top", category:"Tops", price:1199, sizes:["XS","S","M","L"], featured:62, createdAt:"2025-10-20", badges:["Chic"], image:uimg("Tops","top4.jpg") },
    { id:"p36", name:"Mesh Top", category:"Tops", price:1099, sizes:["XS","S","M","L"], featured:63, createdAt:"2025-12-24", badges:["Night"], image:uimg("Tops","top5.jpg") },
    { id:"p37", name:"Button-Up Shirt", category:"Tops", price:1599, sizes:["S","M","L","XL"], featured:64, createdAt:"2025-11-01", badges:["Smart"], image:uimg("Tops","top6.jpg") },

    // Accessories
    { id:"p8", name:"Minimal Cap", category:"Accessories", price:650, sizes:["M"], featured:8, createdAt:"2025-12-30", badges:["New"], image:uimg("Accessories","acc1.jpg") },
    { id:"p38", name:"Crew Socks (3 Pack)", category:"Accessories", price:499, sizes:["M"], featured:70, createdAt:"2025-10-09", badges:["Bundle"], image:uimg("Accessories","acc2.jpg") },
    { id:"p39", name:"Canvas Tote Bag", category:"Accessories", price:899, sizes:["M"], featured:71, createdAt:"2025-12-12", badges:["Carry"], image:uimg("Accessories","acc3.jpg") },
    { id:"p40", name:"Minimal Belt", category:"Accessories", price:950, sizes:["M"], featured:72, createdAt:"2025-11-18", badges:["Essential"], image:uimg("Accessories","acc4.jpg") },
    { id:"p41", name:"Beanie", category:"Accessories", price:650, sizes:["M"], featured:73, createdAt:"2025-12-20", badges:["Warm"], image:uimg("Accessories","acc5.jpg") },
    { id:"p42", name:"Sunglasses", category:"Accessories", price:1299, sizes:["M"], featured:74, createdAt:"2025-10-16", badges:["UV"], image:uimg("Accessories","acc6.jpg") },
// This loop automatically generates the 33 accessory items
// ===== Accessories Generator =====
  ...Array.from({ length: 34 }, (_, i) => {
    const idNum = i + 7;
    // This formula creates a stable price between 400 and 800 
    // based on whether the ID is even, odd, or divisible by 3.
    const calculatedPrice = 400 + ((idNum * 123) % 401); 
    
    return {
      id: `acc-auto-${idNum}`,
      name: `Premium Accessory ${idNum}`,
      category: "Accessories",
      price: calculatedPrice, // Stable, non-random price
      sizes: ["M"],
      featured: 200 + i,
      createdAt: "2026-01-13",
      badges: [],
      image: uimg("Accessories", `acc${idNum}.jpg`)
    };
  }),

    // Shorts
    { id:"p43", name:"Cargo Shorts", category:"Shorts", price:1499, sizes:["S","M","L","XL"], featured:80, createdAt:"2025-11-06", badges:["Utility"], image:uimg("Shorts","shorts1.jpg") },
    { id:"p44", name:"Denim Shorts", category:"Shorts", price:1599, sizes:["S","M","L","XL"], featured:81, createdAt:"2025-12-07", badges:["Denim"], image:uimg("Shorts","shorts2.jpg") },
    { id:"p45", name:"Cycling Shorts", category:"Shorts", price:1199, sizes:["XS","S","M","L"], featured:82, createdAt:"2025-12-25", badges:["Sport"], image:uimg("Shorts","shorts3.jpg") },
    { id:"p46", name:"Lounge Shorts", category:"Shorts", price:999, sizes:["S","M","L","XL"], featured:83, createdAt:"2025-10-25", badges:["Comfort"], image:uimg("Shorts","shorts4.jpg") },

    // Sweaters
    { id:"p47", name:"Knit Sweater", category:"Sweaters", price:2299, sizes:["S","M","L","XL"], featured:90, createdAt:"2025-12-17", badges:["Knit"], image:uimg("Sweaters","sweater1.jpg") },
    { id:"p48", name:"Turtleneck Sweater", category:"Sweaters", price:2599, sizes:["S","M","L"], featured:91, createdAt:"2025-11-11", badges:["Warm"], image:uimg("Sweaters","sweater2.jpg") },
    { id:"p49", name:"Cardigan", category:"Sweaters", price:2199, sizes:["S","M","L","XL"], featured:92, createdAt:"2025-10-28", badges:["Layer"], image:uimg("Sweaters","sweater3.jpg") },
    { id:"p50", name:"Zip Sweater", category:"Sweaters", price:2699, sizes:["S","M","L","XL"], featured:93, createdAt:"2025-12-23", badges:["New"], image:uimg("Sweaters","sweater4.jpg") },

    // Skirts
    { id:"p51", name:"Mini Skirt", category:"Skirts", price:1399, sizes:["XS","S","M","L"], featured:100, createdAt:"2025-11-30", badges:["Cute"], image:uimg("Skirts","skirt1.jpg") },
    { id:"p52", name:"Pleated Skirt", category:"Skirts", price:1699, sizes:["XS","S","M","L"], featured:101, createdAt:"2025-12-16", badges:["Classic"], image:uimg("Skirts","skirt2.jpg") },
    { id:"p53", name:"Denim Skirt", category:"Skirts", price:1599, sizes:["XS","S","M","L"], featured:102, createdAt:"2025-10-08", badges:["Denim"], image:uimg("Skirts","skirt3.jpg") },

    // Dresses
    { id:"p54", name:"Bodycon Dress", category:"Dresses", price:2499, sizes:["XS","S","M","L"], featured:110, createdAt:"2025-12-31", badges:["New"], image:uimg("Dresses","dress1.jpg") },
    { id:"p55", name:"Slip Dress", category:"Dresses", price:2699, sizes:["XS","S","M","L"], featured:111, createdAt:"2025-12-04", badges:["Chic"], image:uimg("Dresses","dress2.jpg") },
    { id:"p56", name:"Midi Dress", category:"Dresses", price:2999, sizes:["S","M","L","XL"], featured:112, createdAt:"2025-11-07", badges:["Elegant"], image:uimg("Dresses","dress3.jpg") },

    // Sets
    { id:"p57", name:"Matching Set — Lounge", category:"Sets", price:3499, sizes:["S","M","L","XL"], featured:120, createdAt:"2025-12-19", badges:["Bundle"], image:uimg("Sets","set1.jpg") },
    { id:"p58", name:"Matching Set — Street", category:"Sets", price:3799, sizes:["S","M","L","XL"], featured:121, createdAt:"2025-12-22", badges:["Trending"], image:uimg("Sets","set2.jpg") },
  ];

  // ===== 4. STATE MANAGEMENT =====
  const CART_KEY = "urbanthread_cart_v3";
  const state = {
    q: "",
    category: "all",
    size: "all",
    sort: "featured",
    cart: loadCart()
  };

  function loadCart(){
    try { return JSON.parse(localStorage.getItem(CART_KEY) || "{}"); }
    catch { return {}; }
  }
  function saveCart(){
    localStorage.setItem(CART_KEY, JSON.stringify(state.cart));
    renderCartBadge();
  }

  // ===== 5. HELPERS =====
  const $ = (sel) => document.querySelector(sel);
  const uniq = (arr) => [...new Set(arr)];

  function escapeHtml(s){
    return String(s).replace(/[&<>"']/g, c => ({
      "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
    }[c]));
  }

  // ===== 6. RENDER LOGIC =====

  function initCategoriesSelect(){
    const cats = uniq(PRODUCTS.map(p => p.category)).sort();
    const sel = $("#category");
    if(!sel) return;
    sel.innerHTML = `<option value="all">All</option>`;
    cats.forEach(c => {
      const opt = document.createElement("option");
      opt.value = c;
      opt.textContent = c;
      sel.appendChild(opt);
    });
  }

  function getVisibleProducts(){
    const q = state.q.trim().toLowerCase();
    let list = PRODUCTS.slice();

    if(q){
      list = list.filter(p =>
        (p.name.toLowerCase().includes(q)) ||
        (p.category.toLowerCase().includes(q)) ||
        (p.badges || []).some(b => b.toLowerCase().includes(q))
      );
    }
    if(state.category !== "all"){
      list = list.filter(p => p.category === state.category);
    }
    if(state.size !== "all"){
      list = list.filter(p => p.sizes.includes(state.size));
    }

    switch(state.sort){
      case "low": list.sort((a,b) => a.price - b.price); break;
      case "high": list.sort((a,b) => b.price - a.price); break;
      case "new": list.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt)); break;
      default: list.sort((a,b) => (a.featured ?? 999) - (b.featured ?? 999));
    }
    return list;
  }

  function renderProducts(){
    const grid = $("#productGrid");
    const empty = $("#emptyState");
    if(!grid) return;
    grid.innerHTML = "";

    const list = getVisibleProducts();
    if($("#resultsCount")) $("#resultsCount").textContent = `${list.length} item${list.length===1?"":"s"}`;

    if(list.length === 0){
      if(empty) empty.style.display = "block";
      return;
    }
    if(empty) empty.style.display = "none";

   list.forEach(p => {
  const card = document.createElement("article");
  card.className = "card";
  
  // Choose the first image from the array, or fallback to p.image
  const displayImage = (p.images && p.images.length > 0) ? p.images[0] : p.image;

  card.innerHTML = `
    <div class="thumb">
      <img class="thumbImg" 
           src="${escapeHtml(displayImage)}" 
           alt="${escapeHtml(p.name)}" 
           onclick="openFullImage('${escapeHtml(displayImage)}')" 
           style="cursor:zoom-in;"
           onerror="this.src='https://via.placeholder.com/400x500?text=Missing+Image';"
           loading="lazy">
      <div class="tag">${escapeHtml(p.category)}</div>
    </div>
        <div class="cardBody">
          <div class="titleRow">
            <div>
              <div class="name">${escapeHtml(p.name)}</div>
              <div class="meta">
                ${(p.badges || []).slice(0,2).map(b => `<span class="chip">${escapeHtml(b)}</span>`).join("")}
                <span class="chip">Sizes: ${p.sizes.join(", ")}</span>
              </div>
            </div>
            <div class="price">${fmt(p.price)}</div>
          </div>
          <div class="cardActions">
            <button class="btnSm" data-view="${p.id}">Quick view</button>
            <button class="btnSm btnSmPrimary" data-add="${p.id}">Add</button>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });

    grid.querySelectorAll("[data-add]").forEach(btn => btn.onclick = () => addToCart(btn.dataset.add));
    grid.querySelectorAll("[data-view]").forEach(btn => btn.onclick = () => quickView(btn.dataset.view));
  }

  function categoryDescription(name){
    const map = {
      "Hoodies":"Warm layers for cold nights.",
      "T-Shirts":"Everyday tees — clean & comfy.",
      "Pants":"Street + smart fits.",
      "Outerwear":"Jackets & coats for layers.",
      "Tops":"Crop tops, shirts, and more.",
      "Accessories":"Caps, bags, belts, extras.",
      "Shorts":"Casual + sporty shorts.",
      "Sweaters":"Knitwear for cozy days.",
      "Skirts":"Simple skirts for clean looks.",
      "Dresses":"Easy fits for outings.",
      "Sets":"Matching combos — instant drip."
    };
    return map[name] || "Browse the latest drops.";
  }

  function renderCategories(){
    const grid = $("#categoriesGrid");
    if(!grid) return;
    const counts = {};
    for(const p of PRODUCTS) counts[p.category] = (counts[p.category] || 0) + 1;
    const cats = Object.keys(counts).sort();

    grid.innerHTML = "";
    // Replace the .forEach section inside your renderCategories function with this:
cats.forEach(cat => {
  const card = document.createElement("div");
  card.className = "catCard";
  // Removed image preview; kept only text and description
  card.innerHTML = `
    <div class="catTop" style="background: none; padding: 10px 0; border-bottom: 1px solid #eee;">
      <div class="catName" style="font-size: 1.2rem; font-weight: bold; color: #333;">${escapeHtml(cat)}</div>
      <div class="catCount" style="font-size: 0.85rem; color: #888;">${counts[cat]} items</div>
    </div>
    <div class="catDesc" style="margin: 10px 0; color: #555; line-height: 1.4;">
      ${escapeHtml(categoryDescription(cat))}
    </div>
    <div class="catAction" style="font-size: 0.9rem; color: #000; font-weight: 500;">View in Shop →</div>
  `;
  card.onclick = () => {
    state.category = cat;
    if($("#category")) $("#category").value = cat;
    location.hash = "#shop";
    renderProducts();
    setTimeout(() => document.querySelector("#shop")?.scrollIntoView({behavior:"smooth"}), 50);
  };
  grid.appendChild(card);
});
  }

  // ===== 7. CART & INTERACTIVE LOGIC =====

  function quickView(id){
    const p = PRODUCTS.find(x => x.id === id);
    if(!p) return;
    const size = prompt(`${p.name}\nPrice: ${fmt(p.price)}\nSizes: ${p.sizes.join(", ")}\nEnter size:`, "M");
    if(size && p.sizes.includes(size.toUpperCase())) addToCart(id, size.toUpperCase());
    else if(size) alert("Invalid size.");
  }

  function addToCart(productId, chosenSize=null){
    const p = PRODUCTS.find(x => x.id === productId);
    const size = chosenSize || (p.sizes.includes("M") ? "M" : p.sizes[0]);
    const key = `${productId}__${size}`;
    if(!state.cart[key]) state.cart[key] = { productId, size, qty: 0 };
    state.cart[key].qty += 1;
    saveCart(); renderCart(); openCart();
  }

  function cartTotals(){
    const items = Object.values(state.cart);
    let total = 0, count = 0;
    for(const it of items){
      const p = PRODUCTS.find(x => x.id === it.productId);
      if(p) { total += p.price * it.qty; count += it.qty; }
    }
    return { total, count };
  }

  function renderCartBadge(){
    if($("#cartCount")) $("#cartCount").textContent = cartTotals().count;
  }

 // ----- Updated Cart Rendering (Restored Original Logic)
    function renderCart() {
      const box = $("#cartItems");
      const { total, count } = cartTotals();
      
      // Update Total Display
      if ($("#cartTotal")) $("#cartTotal").textContent = fmt(total);

      if (!box) return;

      if (count === 0) {
        box.innerHTML = `
          <div class="empty" style="margin:0;">
            Your cart is empty. Add something 🔥
          </div>
        `;
        return;
      }

      const items = Object.entries(state.cart);
     // Replace the .map section inside your renderCart function with this:
box.innerHTML = items.map(([key, it]) => {
  const p = PRODUCTS.find(x => x.id === it.productId);
  if (!p) return "";
  return `
    <div class="lineItem" style="display: flex; align-items: center; gap: 12px; margin-bottom: 15px;">
      <div class="liImgContainer" style="width: 50px; height: 50px; flex-shrink: 0; overflow: hidden; border-radius: 4px;">
          <img src="${p.image}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none'">
      </div>
      
      <div class="liInfo" style="flex-grow: 1;">
        <div class="liTitle" style="font-weight: bold; font-size: 0.9rem;">${escapeHtml(p.name)}</div>
        <div class="liMeta" style="font-size: 0.8rem; color: #666;">Size: ${escapeHtml(it.size)} • ${fmt(p.price)}</div>
      </div>

      <div style="text-align:right;">
        <button class="remove" onclick="removeItem('${key}')" style="font-size: 0.7rem; cursor: pointer; background: none; border: none; color: red; padding: 0;">Remove</button>
        <div class="qtyRow" style="display: flex; align-items: center; gap: 5px; margin-top: 4px;">
          <button class="qtyBtn" onclick="changeQty('${key}', -1)">−</button>
          <b style="font-size: 0.9rem;">${it.qty}</b>
          <button class="qtyBtn" onclick="changeQty('${key}', 1)">+</button>
        </div>
      </div>
    </div>
  `;
}).join("");
    }

    // ----- Global Helper Functions (Attach to Window for onclick access)
    window.changeQty = (key, delta) => {
      if (!state.cart[key]) return;
      state.cart[key].qty += delta;
      if (state.cart[key].qty <= 0) delete state.cart[key];
      saveCart();
      renderCart();
    };

    window.removeItem = (key) => {
      delete state.cart[key];
      saveCart();
      renderCart();
    };

  const openCart = () => { $("#overlay").classList.add("show"); $("#drawer").classList.add("show"); };
  const closeCart = () => { $("#overlay").classList.remove("show"); $("#drawer").classList.remove("show"); };

  function showPage(){
    const hash = (location.hash || "#shop").toLowerCase();
    const isCats = hash.startsWith("#categories");
    $("#page-shop").classList.toggle("show", !isCats);
    $("#page-categories").classList.toggle("show", isCats);
  }

  // ===== 8. INITIALIZATION =====
  document.addEventListener("DOMContentLoaded", () => {
    initCategoriesSelect();
    renderProducts();
    renderCategories();
    renderCartBadge();
    renderCart();
    showPage();

    // Listeners
    $("#q")?.addEventListener("input", (e) => { state.q = e.target.value; renderProducts(); });
    $("#category")?.addEventListener("change", (e) => { state.category = e.target.value; renderProducts(); });
    $("#size")?.addEventListener("change", (e) => { state.size = e.target.value; renderProducts(); });
    $("#sort")?.addEventListener("change", (e) => { state.sort = e.target.value; renderProducts(); });
    $("#openCartBtn")?.addEventListener("click", openCart);
    $("#closeCartBtn")?.addEventListener("click", closeCart);
    $("#overlay")?.addEventListener("click", closeCart);
    window.addEventListener("hashchange", showPage);
    if($("#year")) $("#year").textContent = new Date().getFullYear();
  });
  function openModal(id) { document.getElementById(id).style.display = 'flex'; }

function closeModal(e, id) { 
    if (e.target.id === id) document.getElementById(id).style.display = 'none'; 
}

async function handleFormSubmit(event, webhookUrl) {
    event.preventDefault();
    const form = event.target;
    const btn = form.querySelector('button');
    const formData = Object.fromEntries(new FormData(form));

    btn.innerText = "Sending...";
    btn.disabled = true;

    try {
        await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        alert("Success! We have received your request.");
        form.closest('.modal-overlay').style.display = 'none';
        form.reset();
    } catch (err) {
        alert("Something went wrong. Please try again.");
    } finally {
        btn.innerText = "Submit";
        btn.disabled = false;
    }
}
// 1. Keep this function separate so it's clean
// 1. Move sendOrderToRobot OUTSIDE so it is accessible and clean
async function sendOrderToRobot(ref, amount, email, items) {
    try {
        await fetch('https://hook.us2.make.com/ra52o56mi4dadoxg7nyxpe5q3w74awq1', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                status: "success", // Matches the Make.com filter we set up
                orderNumber: ref,
                totalPrice: amount,
                customerEmail: email,
                items: items,
                date: new Date().toLocaleString()
            })
        });
    } catch (err) {
        console.error("Robot connection error:", err);
    }
}

// 2. The Updated Payment Function
function payWithPaystack() {
    console.log("=== PAYSTACK DEBUG START ===");
    
    const customerEmail = document.getElementById('checkout-email').value;
    console.log("Email:", customerEmail);

    if (!customerEmail || !customerEmail.includes('@')) {
        alert("Please enter a valid email address for your receipt.");
        return;
    }

    // Calculate total correctly from cart object
    const { total, count } = cartTotals();
    console.log("Cart Total:", total, "Count:", count);
    
    if (count === 0) {
        alert("Your cart is empty!");
        return;
    }

    // Build items list from cart BEFORE clearing it
    const itemsList = Object.entries(state.cart).map(([key, item]) => {
        const product = PRODUCTS.find(p => p.id === item.productId);
        return product ? `${product.name} - Size ${item.size} (x${item.qty})` : '';
    }).filter(Boolean).join(', ');
    
    console.log("Items List:", itemsList);

    // Check if Paystack is loaded
    if (typeof PaystackPop === 'undefined') {
        console.error("PaystackPop is not defined! Script may not be loaded.");
        alert("Payment system not loaded. Please refresh the page and try again.");
        return;
    }
    
    console.log("PaystackPop exists:", PaystackPop);

    try {
        let handler = PaystackPop.setup({
            key: 'pk_live_ebcc2d91a1283ce96a9ab0a50d60fd9200fe74f8', 
            email: customerEmail,
            amount: total * 100, 
            currency: 'KES',
            ref: 'OT_' + Math.floor((Math.random() * 1000000000) + 1),
            channels: ['card', 'mpesa', 'bank_transfer'], 
            
            onClose: function() {
                console.log("Payment window closed by user");
                alert('Payment window closed.');
            },
            
            callback: function(response) {
                console.log("Payment callback:", response);
                // Show the loading overlay
                document.getElementById('paymentLoading').style.display = 'flex';
                
                // Send data to the robot
                sendOrderToRobot(response.reference, total, customerEmail, itemsList).then(() => {
                    document.getElementById('paymentLoading').style.display = 'none';
                    alert('Payment Received! Your order is being processed.');
                    
                    // Clear cart after robot confirms receipt
                    state.cart = {};
                    saveCart();
                    renderCart();
                    closeCart();
                });
            }
        });

        console.log("Handler created:", handler);
        console.log("About to open iframe...");
        handler.openIframe();
        console.log("openIframe() called");
    } catch (error) {
        console.error("Error setting up Paystack:", error);
        alert("Error opening payment window: " + error.message);
    }
    
    console.log("=== PAYSTACK DEBUG END ===");
}
function openFullImage(imgSrc) {
    const lightbox = document.getElementById('imageLightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    lightboxImg.src = imgSrc;
    lightbox.style.display = 'flex';
}