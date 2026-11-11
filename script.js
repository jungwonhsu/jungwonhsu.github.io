document.addEventListener("DOMContentLoaded", function () {
  
  // 1. Coupon Modal Logic
  const couponModal = document.getElementById("coupon-modal");
  const btnCouponClose = document.getElementById("btn-coupon-close");
  const btnCouponApply = document.getElementById("btn-coupon-apply");

  if (btnCouponClose) {
    btnCouponClose.addEventListener("click", () => couponModal.classList.add("hidden"));
  }
  if (btnCouponApply) {
    btnCouponApply.addEventListener("click", () => {
      alert("20% 할인이 적용되었습니다!");
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
        navigator.share({ title: "Apple Store", url: window.location.href });
      } else {
        alert("링크가 복사되었습니다!");
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

  // 5. Color Selector Logic
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
      
      // Update title text if base product is AirPods Max
      if (productTitle.textContent.includes("AirPods Max")) {
        productTitle.textContent = `AirPods Max - ${color}`;
      }
    });
  });

  // 6. Related Products Switcher
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

  // 7. Cart & Buy Flow Modals
  const cartModal = document.getElementById("cart-modal");
  const buyModal = document.getElementById("buy-modal");
  
  const btnAddToCart = document.getElementById("btn-add-to-cart");
  const btnBuyNow = document.getElementById("btn-buy-now");

  const btnCartContinue = document.getElementById("btn-cart-continue");
  const btnCartCheckout = document.getElementById("btn-cart-checkout");
  const btnBuyClose = document.getElementById("btn-buy-close");

  if (btnAddToCart) {
    btnAddToCart.addEventListener("click", () => cartModal.classList.remove("hidden"));
  }
  if (btnBuyNow) {
    btnBuyNow.addEventListener("click", () => buyModal.classList.remove("hidden"));
  }

  if (btnCartContinue) {
    btnCartContinue.addEventListener("click", () => cartModal.classList.add("hidden"));
  }
  if (btnCartCheckout) {
    btnCartCheckout.addEventListener("click", () => {
      cartModal.classList.add("hidden");
      alert("결제 페이지로 이동합니다.");
    });
  }
  if (btnBuyClose) {
    btnBuyClose.addEventListener("click", () => buyModal.classList.add("hidden"));
  }
});
