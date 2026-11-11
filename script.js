document.addEventListener("DOMContentLoaded", function () {
  
  // 1. Smooth Scroll to Reviews
  const reviewScrollTrigger = document.getElementById("review-scroll-trigger");
  const reviewsSection = document.getElementById("reviews-section");

  if (reviewScrollTrigger && reviewsSection) {
    reviewScrollTrigger.addEventListener("click", function (e) {
      e.preventDefault();
      reviewsSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  // 2. Color Option Selector Logic
  const colorButtons = document.querySelectorAll(".color-btn");
  const selectedColorName = document.getElementById("selected-color-name");

  colorButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      colorButtons.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");
      
      const colorText = this.getAttribute("data-color") === "purple" ? "데이브레이크 퍼플-PR" : "블랙-BK";
      if (selectedColorName) selectedColorName.textContent = colorText;
    });
  });

  // 3. Related Products Click Interaction (Dynamic Switch)
  const productCards = document.querySelectorAll(".product-card");
  
  productCards.forEach((card) => {
    card.addEventListener("click", function () {
      const cardTitle = this.querySelector(".card-title").textContent;
      const cardPrice = this.querySelector(".card-price").textContent;
      const cardImgSrc = this.querySelector("img").src;

      // Update main product details dynamically
      document.getElementById("product-title").textContent = cardTitle;
      document.getElementById("current-price-display").textContent = cardPrice.replace("원", "");
      document.getElementById("main-product-img").src = cardImgSrc;

      // Scroll to top smooth
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  // 4. Action Button Listeners (Ready for VWO Event Trackers)
  const buyBtn = document.getElementById("btn-buy-now");
  const cartBtn = document.getElementById("btn-add-to-cart");

  if (buyBtn) {
    buyBtn.addEventListener("click", function () {
      alert("주문 페이지로 이동합니다.");
    });
  }

  if (cartBtn) {
    cartBtn.addEventListener("click", function () {
      alert("장바구니에 담겼습니다.");
    });
  }
});
