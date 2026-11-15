document.addEventListener("DOMContentLoaded", function () {
  
  // Cart items array storing object: { title, price, qty }
  let cartItems = [];

  // 1. Coupon Modal Initialization
  const couponModal = document.getElementById("coupon-modal");
  const btnCouponClose = document.getElementById("btn-coupon-close");
  const btnCouponApply = document.getElementById("btn-coupon-apply");

  if (btnCouponClose) btnCouponClose.addEventListener("click", () => couponModal.classList.add("hidden"));
  if (btnCouponApply) {
    btnCouponApply.addEventListener("click", () => {
      alert("20% 할인 쿠폰이 성공적으로 발급되었습니다!");
      couponModal.classList.add("hidden");
    });
  }

  // 2. Heart (Wishlist) Toggle
  const btnHeart = document.getElementById("btn-heart");
  if (btnHeart) {
    btnHeart.addEventListener("click", function () {
      this.classList.toggle("active");
    });
  }

  // 3. Share Button
  const btnShare = document.getElementById("btn-share");
  if (btnShare) {
    btnShare.addEventListener("click", function () {
      if (navigator.share) {
        navigator.share({ title: "Hansunguni Apple Store", url: window.location.href });
      } else {
        alert("상품 링크가 클립보드에 복사되었습니다!");
      }
    });
  }

  // 4. Smooth Scroll to Reviews
  const reviewScrollTrigger = document.getElementById("review-scroll-trigger");
  const reviewsSection = document.getElementById("reviews-section");

  if (reviewScrollTrigger && reviewsSection) {
    reviewScrollTrigger.addEventListener("click", function (e) {
      e.preventDefault();
      reviewsSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  // 5. Color Selector Logic & Official Apple CDN Image Switch
  const colorDots = document.querySelectorAll(".color-dot");
  const selectedColorName = document.getElementById("selected-color-name");
  const mainProductImg = document.getElementById("main-product-img");
  const productTitle = document.getElementById("product-title");

  colorDots.forEach((dot) => {
    dot.addEventListener("click", function () {
      colorDots.forEach((d) => d.classList.remove("active"));
      this.classList.add("active");

      const color = this.getAttribute("data-color");
      const imgSrc = this.getAttribute("data-img");

      if (selectedColorName) selectedColorName.textContent = color;
      if (mainProductImg && imgSrc) mainProductImg.src = imgSrc;
      
      if (productTitle.textContent.includes("AirPods Max")) {
        productTitle.textContent = `AirPods Max - ${color}`;
      }
    });
  });

  // 6. Specs Toggle Accordion
  const btnToggleSpecs = document.getElementById("btn-toggle-specs");
  const specsDropdown = document.getElementById("specs-dropdown");
  if (btnToggleSpecs && specsDropdown) {
    btnToggleSpecs.addEventListener("click", function () {
      specsDropdown.classList.toggle("hidden");
      this.textContent = specsDropdown.classList.contains("hidden") 
        ? "📦 상세 기술 스펙 보기 ▼" 
        : "📦 상세 기술 스펙 접기 ▲";
    });
  }

  // 7. Related Apple Headphones Switcher
  const productCards = document.querySelectorAll(".product-card");
  productCards.forEach((card) => {
    card.addEventListener("click", function () {
      const cardTitle = this.querySelector(".card-title").textContent;
      const cardPrice = this.querySelector(".card-price").textContent;
      const cardImgSrc = this.querySelector("img").src;

      document.getElementById("product-title").textContent = cardTitle;
      document.getElementById("current-price-display").textContent = cardPrice;
      document.getElementById("main-product-img").src = cardImgSrc;

      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  // 8. Review Filters Logic
  const filterButtons = document.querySelectorAll(".filter-btn");
  const reviewItems = document.querySelectorAll(".review-item");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      filterButtons.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");

      const filterType = this.getAttribute("data-filter");

      reviewItems.forEach((item) => {
        const itemType = item.getAttribute("data-type");
        if (filterType === "all" || itemType === filterType) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  // 9. Cart & Buy Flow Modals
  const cartModal = document.getElementById("cart-modal");
  const buyModal = document.getElementById("buy-modal");
  const cartDrawer = document.getElementById("cart-drawer");
  
  const btnAddToCart = document.getElementById("btn-add-to-cart");
  const btnBuyNow = document.getElementById("btn-buy-now");
  const headerCartBtn = document.getElementById("header-cart-btn");
  const drawerCloseBtn = document.getElementById("drawer-close-btn");

  const btnCartContinue = document.getElementById("btn-cart-continue");
  const btnCartCheckout = document.getElementById("btn-cart-checkout");
  const btnBuyClose = document.getElementById("btn-buy-close");
  const drawerCheckoutBtn = document.getElementById("drawer-checkout-btn");

  // Add to cart with quantity check
  if (btnAddToCart) {
    btnAddToCart.addEventListener("click", () => {
      const title = document.getElementById("product-title").textContent;
      const price = document.getElementById("current-price-display").textContent;
      
      // Check if item already exists in cart
      const existingItem = cartItems.find(item => item.title === title);
      if (existingItem) {
        existingItem.qty += 1;
      } else {
        cartItems.push({ title, price, qty: 1 });
      }

      updateCartUI();
      cartModal.classList.remove("hidden");
    });
  }

  if (btnBuyNow) {
    btnBuyNow.addEventListener("click", () => {
      // Direct buy also resets cart count to 0 as requested
      cartItems = [];
      updateCartUI();
      buyModal.classList.remove("hidden");
    });
  }

  if (btnCartContinue) {
    btnCartContinue.addEventListener("click", () => cartModal.classList.add("hidden"));
  }
  if (btnCartCheckout) {
    btnCartCheckout.addEventListener("click", () => {
      cartModal.classList.add("hidden");
      cartDrawer.classList.remove("hidden");
    });
  }
  
  // Close buy modal and keep cart at 0
  if (btnBuyClose) {
    btnBuyClose.addEventListener("click", () => buyModal.classList.add("hidden"));
  }

  if (headerCartBtn) {
    headerCartBtn.addEventListener("click", () => cartDrawer.classList.remove("hidden"));
  }
  if (drawerCloseBtn) {
    drawerCloseBtn.addEventListener("click", () => cartDrawer.classList.add("hidden"));
  }

  // Checkout from drawer -> Reset cart items to 0 and show bouquet modal
  if (drawerCheckoutBtn) {
    drawerCheckoutBtn.addEventListener("click", () => {
      if (cartItems.length === 0) {
        alert("장바구니가 비어 있습니다.");
        return;
      }
      cartItems = []; // Reset to 0
      updateCartUI();
      cartDrawer.classList.add("hidden");
      buyModal.classList.remove("hidden");
    });
  }

  // Update Cart UI & handle qty change / delete events globally inside drawer list
  function updateCartUI() {
    const badge = document.getElementById("cart-badge");
    const listWrapper = document.getElementById("drawer-items-list");
    const totalPriceEl = document.getElementById("drawer-total-price");

    // Total quantity badge calculation
    const totalCount = cartItems.reduce((sum, item) => sum + item.qty, 0);
    if (badge) badge.textContent = totalCount;

    if (cartItems.length === 0) {
      listWrapper.innerHTML = `<p class="empty-cart-text">장바구니가 비어 있습니다.</p>`;
      if (totalPriceEl) totalPriceEl.textContent = "₩0";
    } else {
      let html = "";
      let totalSum = 0;

      cartItems.forEach((item, index) => {
        let cleanPrice = parseInt(item.price.replace(/[^0-9]/g, "")) || 0;
        let itemTotal = cleanPrice * item.qty;
        totalSum += itemTotal;

        html += `
          <div class="cart-item-row" data-index="${index}">
            <div class="cart-item-info">
              <div class="cart-item-title">${item.title}</div>
              <div class="cart-item-price">${item.price}</div>
            </div>
            <div class="cart-item-actions">
              <button class="qty-btn decrease-btn" data-index="${index}">-</button>
              <span class="qty-num">${item.qty}</span>
              <button class="qty-btn increase-btn" data-index="${index}">+</button>
              <button class="delete-btn" data-index="${index}" title="삭제">🗑️</button>
            </div>
          </div>
        `;
      });

      listWrapper.innerHTML = html;
      if (totalPriceEl) totalPriceEl.textContent = `₩${totalSum.toLocaleString()}`;

      // Attach event listeners for dynamic quantity and delete buttons
      attachCartItemEvents();
    }
  }

  function attachCartItemEvents() {
    // Decrease quantity
    document.querySelectorAll(".decrease-btn").forEach(btn => {
      btn.addEventListener("click", function() {
        const idx = this.getAttribute("data-index");
        if (cartItems[idx].qty > 1) {
          cartItems[idx].qty -= 1;
        } else {
          cartItems.splice(idx, 1); // remove if 0
        }
        updateCartUI();
      });
    });

    // Increase quantity
    document.querySelectorAll(".increase-btn").forEach(btn => {
      btn.addEventListener("click", function() {
        const idx = this.getAttribute("data-index");
        cartItems[idx].qty += 1;
        updateCartUI();
      });
    });

    // Delete item
    document.querySelectorAll(".delete-btn").forEach(btn => {
      btn.addEventListener("click", function() {
        const idx = this.getAttribute("data-index");
        cartItems.splice(idx, 1);
        updateCartUI();
      });
    });
  }
});
