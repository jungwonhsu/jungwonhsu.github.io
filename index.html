<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>한성유니 Store - AirPods Max (Version A)</title>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
  <style>
    :root {
      --primary-color: #003366;
      --secondary-color: #d63031;
      --accent-gold: #fdcb6e;
      --card-bg: rgba(255, 255, 255, 0.97);
      --text-dark: #1e272e;
      --text-muted: #636e72;
      --aura-color: rgba(116, 185, 255, 0.45);
    }
    * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
    html { scroll-behavior: smooth; }
    
    body { 
      background: linear-gradient(rgba(10, 25, 47, 0.88), rgba(10, 25, 47, 0.93)),
                  url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1350&q=80') no-repeat center center fixed;
      background-size: cover;
      color: var(--text-dark); 
      padding-bottom: 90px; 
      position: relative;
      overflow-x: hidden;
      min-height: 100vh;
    }

    #snow-canvas { position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 99; }

    /* Top Christmas Banner */
    .top-bar { 
      background: linear-gradient(90deg, #b22222, #d63031, #b22222); 
      color: white; text-align: center; padding: 10px 15px; font-size: 14px; font-weight: 700;
      box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    }
    .top-bar i { margin: 0 6px; color: var(--accent-gold); }

    /* Header */
    header { background-color: rgba(255, 255, 255, 0.95); backdrop-filter: blur(8px); box-shadow: 0 4px 15px rgba(0,0,0,0.1); position: sticky; top: 0; z-index: 100; }
    .header-container { max-width: 1100px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; padding: 15px 20px; }
    .logo { font-size: 24px; font-weight: 800; color: var(--primary-color); text-decoration: none; display: flex; align-items: center; gap: 10px; }
    .logo-icon { width: 40px; height: 40px; background: var(--primary-color); color: white; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 20px; }

    /* Welcome Coupon Modal (3s Auto Hide) */
    .welcome-modal-overlay {
      position: fixed; top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(0, 0, 0, 0.75); backdrop-filter: blur(6px);
      display: flex; align-items: center; justify-content: center; z-index: 20000;
      animation: fadeIn 0.4s ease; transition: opacity 0.5s ease;
    }
    .welcome-modal {
      background: white; width: 90%; max-width: 400px; border-radius: 28px; padding: 35px 25px;
      text-align: center; box-shadow: 0 20px 40px rgba(0,0,0,0.4); animation: popUp 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    .welcome-modal h2 { font-size: 22px; color: var(--primary-color); font-weight: 800; margin-bottom: 10px; }
    .welcome-modal p { font-size: 14.5px; color: #444; line-height: 1.5; font-weight: 600; margin-bottom: 15px; }
    .coupon-tag { background: #fee2e2; color: var(--secondary-color); padding: 8px 16px; border-radius: 10px; font-weight: 800; font-size: 15px; display: inline-block; margin-bottom: 15px; border: 1.5px dashed var(--secondary-color); }

    /* Main Container & Hero Card */
    .container { max-width: 1050px; margin: 40px auto; padding: 0 20px; z-index: 2; position: relative; }

    .product-hero-card {
      background: var(--card-bg); border-radius: 28px;
      box-shadow: 0 20px 45px rgba(0,0,0,0.35), 0 0 25px rgba(253, 203, 110, 0.25);
      padding: 40px; display: grid; grid-template-columns: 1fr 1.1fr; gap: 40px; align-items: center; position: relative;
      animation: floatCard 5s ease-in-out infinite; overflow: visible; margin-bottom: 40px;
    }
    .product-hero-card::before {
      content: ''; position: absolute; inset: -3px; border-radius: 31px;
      background: linear-gradient(45deg, #d63031, #fdcb6e, #00cec9, #d63031); z-index: -1; animation: ledGlow 6s linear infinite; opacity: 0.85;
    }

    .product-gallery { text-align: center; position: relative; }
    .main-img-wrap { width: 100%; height: 280px; display: flex; align-items: center; justify-content: center; position: relative; }
    .main-img-wrap::before {
      content: ''; position: absolute; width: 220px; height: 220px;
      background: radial-gradient(circle, var(--aura-color) 0%, transparent 70%);
      border-radius: 50%; z-index: 1; animation: auraPulse 4s ease-in-out infinite; transition: background 0.5s ease;
    }
    .main-img { max-width: 100%; max-height: 100%; object-fit: contain; position: relative; z-index: 2; filter: drop-shadow(0 20px 25px rgba(0,51,102,0.25)); animation: floatHeadphone 4s ease-in-out infinite; }

    .color-selector { display: flex; justify-content: center; gap: 15px; margin-top: 15px; }
    .color-dot { width: 28px; height: 28px; border-radius: 50%; cursor: pointer; border: 3px solid white; box-shadow: 0 0 0 1px #ccc; transition: all 0.2s ease; }
    .color-dot:hover, .color-dot.active { transform: scale(1.25); box-shadow: 0 0 0 2px var(--primary-color); }
    .dot-space-gray { background: #4b4b4b; } .dot-silver { background: #e2e2e2; } .dot-sky-blue { background: #87ceeb; } .dot-pink { background: #ffb6c1; }

    .product-details h1 { font-size: 28px; font-weight: 800; color: var(--primary-color); margin-bottom: 4px; }
    .product-subtitle { font-size: 14px; color: var(--text-muted); margin-bottom: 12px; font-weight: 500; }

    /* Interactive Rating Summary Link */
    .rating-box { display: flex; align-items: center; gap: 8px; margin-bottom: 12px; font-size: 13px; font-weight: 700; color: #d97706; cursor: pointer; }
    .rating-box .stars { color: #f59e0b; }
    .rating-box .review-count { color: var(--text-muted); font-weight: 500; text-decoration: underline; transition: color 0.2s; }
    .rating-box:hover .review-count { color: var(--secondary-color); }
    
    .price-box { margin-bottom: 15px; display: flex; align-items: center; gap: 12px; }
    .price-box .original { text-decoration: line-through; color: var(--text-muted); font-size: 14px; }
    .price-box .current { font-size: 28px; font-weight: 800; color: var(--secondary-color); }
    .price-box .badge { background: var(--secondary-color); color: white; padding: 4px 10px; border-radius: 12px; font-size: 12px; font-weight: 700; }

    /* Version A: Grid Thông số kỹ thuật chuẩn */
    .specs-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 15px; }
    .spec-card-item { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 8px 10px; display: flex; flex-direction: column; gap: 2px; }
    .spec-card-title { font-size: 11px; color: var(--text-muted); font-weight: 600; display: flex; align-items: center; gap: 5px; }
    .spec-card-title i { color: var(--primary-color); }
    .spec-card-value { font-size: 12.5px; color: var(--text-dark); font-weight: 700; }

    .guarantee-row { display: flex; justify-content: space-around; background: #f1f5f9; padding: 8px; border-radius: 10px; font-size: 11.5px; font-weight: 700; color: #334155; margin-bottom: 15px; }

    .btn-buy-hero {
      width: 100%; background: linear-gradient(135deg, #d63031, #b22222); color: white; border: none; padding: 16px;
      border-radius: 12px; font-size: 17px; font-weight: 800; cursor: pointer; box-shadow: 0 8px 20px rgba(214, 48, 49, 0.4);
      transition: all 0.3s ease; display: flex; align-items: center; justify-content: center; gap: 10px;
    }
    .btn-buy-hero:hover { transform: translateY(-3px); box-shadow: 0 12px 25px rgba(214, 48, 49, 0.5); }

    /* Sticky Bottom Buy Bar */
    .sticky-buy-bar {
      position: fixed; bottom: 0; left: 0; width: 100%; background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px); box-shadow: 0 -4px 20px rgba(0,0,0,0.15); padding: 12px 20px;
      display: flex; align-items: center; justify-content: space-between; z-index: 1000;
      transform: translateY(100%); transition: transform 0.3s ease;
    }
    .sticky-buy-bar.visible { transform: translateY(0); }
    .sticky-product-info { display: flex; align-items: center; gap: 12px; }
    .sticky-product-info img { width: 45px; height: 45px; object-fit: contain; }
    .sticky-product-info .title { font-size: 14px; font-weight: 800; color: var(--primary-color); }
    .sticky-product-info .price { font-size: 15px; font-weight: 800; color: var(--secondary-color); }
    .btn-sticky-buy {
      background: linear-gradient(135deg, #d63031, #b22222); color: white; border: none; padding: 12px 28px;
      border-radius: 10px; font-size: 15px; font-weight: 800; cursor: pointer; box-shadow: 0 4px 15px rgba(214, 48, 49, 0.3);
    }

    /* Detailed Reviews Section & Filter Chips */
    .reviews-section {
      background: var(--card-bg); border-radius: 24px; padding: 35px;
      box-shadow: 0 15px 35px rgba(0,0,0,0.25); scroll-margin-top: 100px;
    }
    .reviews-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; border-bottom: 2px solid #f1f5f9; padding-bottom: 15px; }
    .reviews-header h2 { font-size: 22px; font-weight: 800; color: var(--primary-color); display: flex; align-items: center; gap: 10px; }
    
    .review-score-card { display: flex; align-items: center; gap: 20px; background: #f8fafc; padding: 20px; border-radius: 16px; margin-bottom: 20px; }
    .big-score { font-size: 36px; font-weight: 900; color: var(--primary-color); }
    .score-stars { color: #f59e0b; font-size: 18px; }

    /* Filter Chips */
    .filter-chips { display: flex; gap: 10px; margin-bottom: 20px; flex-wrap: wrap; }
    .chip { background: #f1f5f9; border: 1px solid #cbd5e1; padding: 6px 14px; border-radius: 20px; font-size: 12.5px; font-weight: 700; color: #475569; cursor: pointer; transition: all 0.2s; }
    .chip.active, .chip:hover { background: var(--primary-color); color: white; border-color: var(--primary-color); }

    /* Scrollable Reviews Container */
    .reviews-scroll-container {
      max-height: 520px; overflow-y: auto; padding-right: 10px;
      display: flex; flex-direction: column; gap: 20px;
    }
    .reviews-scroll-container::-webkit-scrollbar { width: 6px; }
    .reviews-scroll-container::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }

    .review-item { border-bottom: 1px solid #e2e8f0; padding-bottom: 20px; }
    .review-item:last-child { border-bottom: none; }
    .review-user-info { display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 13px; }
    .review-user { font-weight: 700; color: var(--text-dark); display: flex; align-items: center; gap: 6px; }
    .review-badge { background: #e0f2fe; color: #0284c7; padding: 2px 8px; border-radius: 6px; font-size: 11px; font-weight: 700; }
    .review-date { color: var(--text-muted); }
    .review-comment { font-size: 14px; color: #334155; line-height: 1.6; margin-bottom: 10px; font-weight: 500; }
    .review-photos { display: flex; gap: 10px; margin-bottom: 8px; }
    .review-photo-img { width: 70px; height: 70px; border-radius: 10px; object-fit: cover; border: 1px solid #cbd5e1; cursor: pointer; transition: transform 0.2s; }
    .review-photo-img:hover { transform: scale(1.08); }
    .review-helpful { font-size: 12px; color: var(--text-muted); display: flex; align-items: center; gap: 5px; cursor: pointer; }
    .review-helpful:hover { color: var(--secondary-color); }

    /* Success Order Modal */
    .success-modal-overlay {
      position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7);
      backdrop-filter: blur(5px); display: none; align-items: center; justify-content: center; z-index: 30000;
    }
    .success-modal {
      background: white; width: 90%; max-width: 360px; border-radius: 24px; padding: 30px 20px; text-align: center;
      animation: popUp 0.3s ease; box-shadow: 0 20px 40px rgba(0,0,0,0.3);
    }
    .success-icon { font-size: 45px; color: #10b981; margin-bottom: 12px; animation: bounce 1s infinite; }
    .success-modal h3 { color: var(--primary-color); font-size: 20px; font-weight: 800; margin-bottom: 8px; }
    .success-modal p { font-size: 14px; color: #475569; line-height: 1.5; margin-bottom: 20px; font-weight: 600; }
    .btn-success-close { background: var(--primary-color); color: white; border: none; padding: 10px 20px; border-radius: 10px; font-weight: 700; cursor: pointer; }

    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes popUp { from { transform: scale(0.7); opacity: 0; } to { transform: scale(1); opacity: 1; } }
    @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
    @keyframes floatCard { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-6px); } }
    @keyframes floatHeadphone { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
    @keyframes auraPulse { 0%, 100% { transform: scale(1); opacity: 0.4; } 50% { transform: scale(1.15); opacity: 0.7; } }
    @keyframes ledGlow { 0% { filter: hue-rotate(0deg); } 100% { filter: hue-rotate(360deg); } }

    footer { text-align: center; margin-top: 50px; padding: 20px; color: rgba(255,255,255,0.8); font-size: 13px; border-top: 1px solid rgba(255,255,255,0.1); }
    @media (max-width: 768px) { .product-hero-card { grid-template-columns: 1fr; padding: 25px; } .specs-grid { grid-template-columns: 1fr; } .sticky-buy-bar { padding: 10px 15px; } }
  </style>
</head>
<body>

  <canvas id="snow-canvas"></canvas>

  <!-- Welcome Coupon Modal (3s Auto Hide) -->
  <div class="welcome-modal-overlay" id="welcomeModal">
    <div class="welcome-modal">
      <i class="fa-solid fa-gift" style="font-size: 38px; color: var(--secondary-color); margin-bottom: 10px;"></i>
      <h2>환영합니다! (Welcome)</h2>
      <p>한성유니 스토어 방문 기념<br><strong>겨울 홀리데이 특별 할인 쿠폰</strong>이 자동 적용되었습니다!</p>
      <div class="coupon-tag">🎉 15% 즉시 할인 적용 완료</div>
      <p style="font-size: 12px; color: #64748b;">3초 뒤 자동으로 쇼핑 페이지로 이동합니다...</p>
    </div>
  </div>

  <div class="top-bar">
    <i class="fa-solid fa-snowflake"></i> 한성유니 Store 신학기 & 홀리데이 특별 혜택 진행 중! <i class="fa-solid fa-gift"></i>
  </div>

  <header>
    <div class="header-container">
      <a href="#" class="logo">
        <div class="logo-icon"><i class="fa-solid fa-headphones"></i></div>
        한성유니 Store
      </a>
      <i class="fa-solid fa-cart-shopping" style="font-size: 20px; color: var(--primary-color);"></i>
    </div>
  </header>

  <div class="container">
    <div class="product-hero-card">

      <div class="product-gallery">
        <div class="main-img-wrap">
          <img id="productImage" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-spacegray-202011?wid=470&hei=556&fmt=png-alpha" alt="AirPods Max" class="main-img">
        </div>
        <div class="color-selector">
          <div class="color-dot dot-space-gray active" title="스페이스 그레이" onclick="selectColor('space-gray', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-spacegray-202011?wid=470&hei=556&fmt=png-alpha', 'rgba(116, 185, 255, 0.45)', this)"></div>
          <div class="color-dot dot-silver" title="실버" onclick="selectColor('silver', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-silver-202011?wid=470&hei=556&fmt=png-alpha', 'rgba(220, 225, 230, 0.6)', this)"></div>
          <div class="color-dot dot-sky-blue" title="스카이 블루" onclick="selectColor('sky-blue', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-skyblue-202011?wid=470&hei=556&fmt=png-alpha', 'rgba(135, 206, 235, 0.55)', this)"></div>
          <div class="color-dot dot-pink" title="핑크" onclick="selectColor('pink', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-pink-202011?wid=470&hei=556&fmt=png-alpha', 'rgba(255, 182, 193, 0.55)', this)"></div>
        </div>
      </div>

      <div class="product-details">
        <h1>Apple AirPods Max</h1>
        <div class="product-subtitle">하이파이 오디오와 액티브 노이즈 캔슬링 헤드폰</div>
        
        <!-- Smooth Scroll Trigger -->
        <div class="rating-box" onclick="scrollToReviews()">
          <span class="stars"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>
          <span>4.9 / 5.0</span>
          <span class="review-count">(구매후기 1,280건 보기 ↓)</span>
        </div>

        <div class="price-box">
          <span class="original">769,000원</span>
          <span class="current">653,650원</span>
          <span class="badge">15% OFF</span>
        </div>

        <!-- 👇 VÙNG ĐỊNH DANH ĐỂ VWO NHẬN DIỆN VÀ THAY THẾ AN TOÀN -->
        <div id="ab-test-specs-container">
          <!-- Version A: Grid Thông số kỹ thuật -->
          <div class="specs-grid">
            <div class="spec-card-item">
              <span class="spec-card-title"><i class="fa-solid fa-microchip"></i> 프로세서</span>
              <span class="spec-card-value">H1 칩 듀얼 탑재</span>
            </div>
            <div class="spec-card-item">
              <span class="spec-card-title"><i class="fa-solid fa-compact-disc"></i> 드라이버</span>
              <span class="spec-card-value">40mm 커스텀 드라이버</span>
            </div>
            <div class="spec-card-item">
              <span class="spec-card-title"><i class="fa-solid fa-microphone-lines"></i> 마이크</span>
              <span class="spec-card-value">9개 마이크 ANC 시스템</span>
            </div>
            <div class="spec-card-item">
              <span class="spec-card-title"><i class="fa-solid fa-feather"></i> 무게</span>
              <span class="spec-card-value">384.8g 가벼운 무게</span>
            </div>
            <div class="spec-card-item">
              <span class="spec-card-title"><i class="fa-solid fa-battery-full"></i> 배터리</span>
              <span class="spec-card-value">최대 20시간 재생</span>
            </div>
            <div class="spec-card-item">
              <span class="spec-card-title"><i class="fa-solid fa-wifi"></i> 연결</span>
              <span class="spec-card-value">Bluetooth 5.0 연결</span>
            </div>
          </div>
        </div>
        <!-- 👆 KẾT THÚC VÙNG ĐỊNH DANH VWO -->

        <div class="guarantee-row">
          <span><i class="fa-solid fa-check" style="color:var(--secondary-color);"></i> 무료 배송</span>
          <span><i class="fa-solid fa-check" style="color:var(--secondary-color);"></i> 14일 무료 반품</span>
          <span><i class="fa-solid fa-check" style="color:var(--secondary-color);"></i> 홀리데이 선물 포장</span>
        </div>

        <button id="buy-btn-airpods-max" class="btn-buy-hero" onclick="handleBuyClick()">
          <i class="fa-solid fa-cart-shopping"></i> 지금 바로 구매하기
        </button>
      </div>
    </div>

    <!-- Detailed Reviews Section with 10 Scrollable Reviews -->
    <div class="reviews-section" id="reviewsSection">
      <div class="reviews-header">
        <h2><i class="fa-solid fa-comments"></i> 실구매자 상품 후기</h2>
        <span style="font-size: 13px; color: var(--text-muted);">총 1,280개의 리뷰 중 10개 표시</span>
      </div>

      <div class="review-score-card">
        <div class="big-score">4.9</div>
        <div>
          <div class="score-stars">
            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
          </div>
          <div style="font-size: 13px; color: var(--text-muted); margin-top: 4px;">구매자의 98%가 이 상품을 추천합니다.</div>
        </div>
      </div>

      <!-- Filter Chips -->
      <div class="filter-chips">
        <div class="chip active">전체보기 (1,280)</div>
        <div class="chip">📸 포토 리뷰 (4)</div>
        <div class="chip">⭐️ 5점 만점 (1,210)</div>
        <div class="chip">🎨 스페이스 그레이</div>
      </div>

      <div class="reviews-scroll-container">
        <!-- Review 1 -->
        <div class="review-item">
          <div class="review-user-info">
            <span class="review-user">kim*** <span class="review-badge">실제 구매자</span> [Space Gray]</span>
            <span class="review-date">2026.11.02</span>
          </div>
          <div class="score-stars" style="font-size: 12px; margin-bottom: 6px;"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
          <div class="review-comment">노이즈 캔슬링 성능이 정말 미쳤습니다! 카페에서 공부할 때 소음 차단 확실하고, 디자인이 너무 예뻐서 매일 착용하고 다녀요. 강추합니다!</div>
          <div class="review-photos"><img src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=150&q=80" alt="photo" class="review-photo-img"></div>
          <div class="review-helpful"><i class="fa-regular fa-thumbs-up"></i> 도움이 되었어요 (24)</div>
        </div>

        <!-- Review 2 -->
        <div class="review-item">
          <div class="review-user-info">
            <span class="review-user">lee*** <span class="review-badge">실제 구매자</span> [Silver]</span>
            <span class="review-date">2026.10.28</span>
          </div>
          <div class="score-stars" style="font-size: 12px; margin-bottom: 6px;"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
          <div class="review-comment">배송도 엄청 빠르고 홀리데이 포장까지 깔끔하게 와서 선물받는 느낌이었어요. 음질 공간 음향이 최고네요.</div>
          <div class="review-helpful"><i class="fa-regular fa-thumbs-up"></i> 도움이 되었어요 (18)</div>
        </div>

        <!-- Review 3 -->
        <div class="review-item">
          <div class="review-user-info">
            <span class="review-user">park*** <span class="review-badge">실제 구매자</span> [Sky Blue]</span>
            <span class="review-date">2026.10.25</span>
          </div>
          <div class="score-stars" style="font-size: 12px; margin-bottom: 6px;"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
          <div class="review-comment">색감이 실물이 훨씬 이쁩니다. 스카이 블루 고르길 정말 잘했어요. 영화 볼 때 사운드가 입체적으로 들려서 몰입감이 남다릅니다.</div>
          <div class="review-photos"><img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=150&q=80" alt="photo" class="review-photo-img"></div>
          <div class="review-helpful"><i class="fa-regular fa-thumbs-up"></i> 도움이 되었어요 (31)</div>
        </div>

        <!-- Review 4 -->
        <div class="review-item">
          <div class="review-user-info">
            <span class="review-user">choi*** <span class="review-badge">실제 구매자</span> [Pink]</span>
            <span class="review-date">2026.10.22</span>
          </div>
          <div class="score-stars" style="font-size: 12px; margin-bottom: 6px;"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
          <div class="review-comment">핑크색 너무 영롱해요. 무게감이 살짝 있지만 정수리 쿠션이 편해서 장시간 착용해도 편안합니다.</div>
          <div class="review-helpful"><i class="fa-regular fa-thumbs-up"></i> 도움이 되었어요 (9)</div>
        </div>

        <!-- Review 5 -->
        <div class="review-item">
          <div class="review-user-info">
            <span class="review-user">nguyen*** <span class="review-badge">실제 구매자</span> [Space Gray]</span>
            <span class="review-date">2026.10.19</span>
          </div>
          <div class="score-stars" style="font-size: 12px; margin-bottom: 6px;"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
          <div class="review-comment">대학생 과제할 때 도서관에서 쓰려고 샀는데 집중력 200% 상승했습니다. 배터리도 오래가서 충전 자주 안 해도 되니 편해요.</div>
          <div class="review-photos"><img src="https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=150&q=80" alt="photo" class="review-photo-img"></div>
          <div class="review-helpful"><i class="fa-regular fa-thumbs-up"></i> 도움이 되었어요 (42)</div>
        </div>

        <!-- Review 6 -->
        <div class="review-item">
          <div class="review-user-info">
            <span class="review-user">jung*** <span class="review-badge">실제 구매자</span> [Silver]</span>
            <span class="review-date">2026.10.15</span>
          </div>
          <div class="score-stars" style="font-size: 12px; margin-bottom: 6px;"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></div>
          <div class="review-comment">제품 성능은 말할 것도 없이 훌륭합니다. 다만 기본 구성품에 스마트 케이스 외에 파우치가 하나 더 있었으면 좋겠어요. 그래도 대만족!</div>
          <div class="review-helpful"><i class="fa-regular fa-thumbs-up"></i> 도움이 되었어요 (15)</div>
        </div>

        <!-- Review 7 -->
        <div class="review-item">
          <div class="review-user-info">
            <span class="review-user">kang*** <span class="review-badge">실제 구매자</span> [Sky Blue]</span>
            <span class="review-date">2026.10.11</span>
          </div>
          <div class="score-stars" style="font-size: 12px; margin-bottom: 6px;"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
          <div class="review-comment">아이폰이랑 맥북 번갈아가면서 쓰는데 기기 전환 연동성이 예술입니다. 역시 애플 생태계 최고예요.</div>
          <div class="review-helpful"><i class="fa-regular fa-thumbs-up"></i> 도움이 되었어요 (19)</div>
        </div>

        <!-- Review 8 -->
        <div class="review-item">
          <div class="review-user-info">
            <span class="review-user">yoon*** <span class="review-badge">실제 구매자</span> [Space Gray]</span>
            <span class="review-date">2026.10.05</span>
          </div>
          <div class="score-stars" style="font-size: 12px; margin-bottom: 6px;"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
          <div class="review-comment">급속 충전 기능 덕분에 아침에 씻을 때 잠깐 꽂아둬도 하루 종일 쓸 수 있어서 바쁜 직장인들에게 최고입니다.</div>
          <div class="review-photos"><img src="https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=150&q=80" alt="photo" class="review-photo-img"></div>
          <div class="review-helpful"><i class="fa-regular fa-thumbs-up"></i> 도움이 되었어요 (27)</div>
        </div>

        <!-- Review 9 -->
        <div class="review-item">
          <div class="review-user-info">
            <span class="review-user">han*** <span class="review-badge">실제 구매자</span> [Pink]</span>
            <span class="review-date">2026.09.30</span>
          </div>
          <div class="score-stars" style="font-size: 12px; margin-bottom: 6px;"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
          <div class="review-comment">친구 생일 선물로 구매했는데 포장도 너무 예쁘고 친구가 감동받았어요. 여기서 사길 정말 잘했습니다!</div>
          <div class="review-helpful"><i class="fa-regular fa-thumbs-up"></i> 도움이 되었어요 (11)</div>
        </div>

        <!-- Review 10 -->
        <div class="review-item">
          <div class="review-user-info">
            <span class="review-user">jang*** <span class="review-badge">실제 구매자</span> [Silver]</span>
            <span class="review-date">2026.09.25</span>
          </div>
          <div class="score-stars" style="font-size: 12px; margin-bottom: 6px;"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
          <div class="review-comment">귀를 감싸주는 이어쿠션 촉감이 아주 부드럽고 안경 착용하고 써도 귀가 안 아파요. 적극 추천합니다.</div>
          <div class="review-helpful"><i class="fa-regular fa-thumbs-up"></i> 도움이 되었어요 (35)</div>
        </div>
      </div>
    </div>
  </div>

  <!-- Sticky Bottom Buy Bar -->
  <div class="sticky-buy-bar" id="stickyBar">
    <div class="sticky-product-info">
      <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-spacegray-202011?wid=470&hei=556&fmt=png-alpha" alt="AirPods Max">
      <div>
        <div class="title">Apple AirPods Max</div>
        <div class="price">653,650원 (15% OFF)</div>
      </div>
    </div>
    <button class="btn-sticky-buy" onclick="handleBuyClick()">지금 바로 구매하기</button>
  </div>

  <!-- Success Order Modal -->
  <div class="success-modal-overlay" id="successModal">
    <div class="success-modal">
      <div class="success-icon">💐🎉</div>
      <h3>주문 완료를 축하드립니다!</h3>
      <p>고객님의 주문이 안전하게 접수되었습니다.<br>한성유니 스토어를 이용해 주셔서 감사합니다! 🎁</p>
      <button class="btn-success-close" onclick="closeSuccessModal()">확인</button>
    </div>
  </div>

  <footer>
    &copy; 2026 HansungUni Internet Business Research Center. All rights reserved.
  </footer>

  <script>
    let selectedColorName = 'Space Gray';

    // 3s Auto Hide Welcome Modal
    window.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => {
        const modal = document.getElementById('welcomeModal');
        if (modal) {
          modal.style.opacity = '0';
          setTimeout(() => modal.style.display = 'none', 500);
        }
      }, 3000);
    });

    // Sticky Buy Bar Scroll Trigger
    window.addEventListener('scroll', () => {
      const stickyBar = document.getElementById('stickyBar');
      const heroCard = document.querySelector('.product-hero-card');
      const heroBottom = heroCard.offsetTop + heroCard.offsetHeight;
      
      if (window.scrollY > heroBottom - 100) {
        stickyBar.classList.add('visible');
      } else {
        stickyBar.classList.remove('visible');
      }
    });

    // Smooth Scroll to Reviews
    function scrollToReviews() {
      const target = document.getElementById('reviewsSection');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }

    function selectColor(colorName, imgSrc, auraColor, element) {
      document.getElementById('productImage').src = imgSrc;
      document.documentElement.style.setProperty('--aura-color', auraColor);
      document.querySelectorAll('.color-dot').forEach(dot => dot.classList.remove('active'));
      element.classList.add('active');
      selectedColorName = colorName;
    }

    function handleBuyClick() {
      console.log('Purchase Success (Version A):', selectedColorName);
      document.getElementById('successModal').style.display = 'flex';
    }

    function closeSuccessModal() {
      document.getElementById('successModal').style.display = 'none';
    }

    // Snow Effect Canvas
    const canvas = document.getElementById('snow-canvas');
    const ctx = canvas.getContext('2d');
    function resizeCanvas() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const particles = Array.from({ length: 40 }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      radius: Math.random() * 3 + 1, speed: Math.random() * 0.8 + 0.4, wind: Math.random() * 0.4 - 0.2
    }));

    function drawSnow() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
      ctx.beginPath();
      particles.forEach(p => {
        ctx.moveTo(p.x, p.y); ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        p.y += p.speed; p.x += p.wind;
        if (p.y > canvas.height) { p.y = -5; p.x = Math.random() * canvas.width; }
      });
      ctx.fill();
      requestAnimationFrame(drawSnow);
    }
    drawSnow();
  </script>
</body>
</html>
