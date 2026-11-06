<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>한성유니 Store - AirPods Max (Version B)</title>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
  <style>
    :root {
      --primary-color: #003366;
      --secondary-color: #d63031;
      --accent-gold: #fdcb6e;
      --card-bg: rgba(255, 255, 255, 0.97);
      --text-dark: #1e272e;
      --text-muted: #636e72;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
    html { scroll-behavior: smooth; }
    
    body { 
      background: linear-gradient(rgba(10, 25, 47, 0.88), rgba(10, 25, 47, 0.93)),
                  url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1350&q=80') no-repeat center center fixed;
      background-size: cover;
      color: var(--text-dark); 
      padding-bottom: 60px; 
      position: relative;
      overflow-x: hidden;
      min-height: 100vh;
    }

    #snow-canvas {
      position: fixed;
      top: 0; left: 0; width: 100%; height: 100%;
      pointer-events: none;
      z-index: 99;
    }

    /* Welcome Modal Styles */
    .welcome-modal-overlay {
      position: fixed;
      top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(0, 0, 0, 0.75);
      backdrop-filter: blur(6px);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10000;
      animation: fadeIn 0.4s ease;
      transition: opacity 0.5s ease;
    }
    .welcome-modal {
      background: white;
      width: 90%;
      max-width: 400px;
      border-radius: 30px;
      padding: 35px 25px;
      text-align: center;
      box-shadow: 0 20px 40px rgba(0,0,0,0.4);
      position: relative;
      animation: popUp 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .mascot-frame-container {
      position: relative;
      width: 130px;
      height: 130px;
      margin: 0 auto 20px;
    }
    .mascot-circle {
      width: 130px;
      height: 130px;
      background: #eef6ff;
      border-radius: 50%;
      border: 4px solid var(--primary-color);
      box-shadow: 0 8px 20px rgba(0,51,102,0.3);
      position: relative;
      overflow: hidden;
    }
    .mascot-svg {
      position: absolute;
      bottom: -15px;
      left: 50%;
      transform: translateX(-50%);
      width: 115px;
      height: auto;
      animation: bounce 2s infinite;
    }

    .firework-star {
      position: absolute;
      color: var(--accent-gold);
      font-size: 22px;
      animation: fireworkBurst 1.2s infinite ease-out;
      opacity: 0;
    }
    .star-1 { top: -10px; left: 15px; animation-delay: 0.1s; color: #ff4d4d; }
    .star-2 { top: -20px; right: 25px; animation-delay: 0.4s; color: #fdcb6e; }
    .star-3 { top: 40px; left: -15px; animation-delay: 0.2s; color: #00d2d3; }
    .star-4 { top: 30px; right: -15px; animation-delay: 0.5s; color: #ff6b81; }

    .welcome-modal h2 { font-size: 22px; color: var(--primary-color); font-weight: 800; margin-bottom: 8px; }
    .welcome-modal p { font-size: 15px; color: #444; line-height: 1.5; font-weight: 600; }

    /* Top Christmas Banner */
    .top-bar { 
      background: linear-gradient(90deg, #b22222, #d63031, #b22222); 
      color: white; 
      text-align: center; 
      padding: 10px 15px; 
      font-size: 14px; 
      font-weight: 700; 
      letter-spacing: 0.5px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    }
    .top-bar i { margin: 0 6px; color: var(--accent-gold); }

    /* Header Navigation */
    header { background-color: rgba(255, 255, 255, 0.95); backdrop-filter: blur(8px); box-shadow: 0 4px 15px rgba(0,0,0,0.1); position: sticky; top: 0; z-index: 100; }
    .header-container { max-width: 1100px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; padding: 15px 20px; }
    .logo { font-size: 24px; font-weight: 800; color: var(--primary-color); text-decoration: none; display: flex; align-items: center; gap: 10px; }
    .logo-icon { width: 40px; height: 40px; background: var(--primary-color); color: white; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 20px; }

    /* Main Container & Floating Card with Snowy & LED Border */
    .container { max-width: 1000px; margin: 40px auto; padding: 0 20px; z-index: 2; position: relative; }

    .product-hero-card {
      background: var(--card-bg);
      border-radius: 28px;
      box-shadow: 0 20px 45px rgba(0,0,0,0.35), 0 0 25px rgba(253, 203, 110, 0.25);
      padding: 45px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
      align-items: center;
      position: relative;
      border: 3px solid transparent;
      background-clip: padding-box;
      animation: floatCard 5s ease-in-out infinite;
      overflow: visible;
    }

    .product-hero-card::before {
      content: '';
      position: absolute;
      inset: -3px;
      border-radius: 31px;
      background: linear-gradient(45deg, #d63031, #fdcb6e, #00cec9, #d63031);
      z-index: -1;
      animation: ledGlow 6s linear infinite;
      opacity: 0.85;
    }

    .snowy-roof {
      position: absolute;
      top: -12px;
      left: 30px;
      right: 30px;
      height: 20px;
      background: radial-gradient(circle, #fff 60%, transparent 61%);
      background-size: 18px 20px;
      z-index: 3;
      pointer-events: none;
      filter: drop-shadow(0 2px 3px rgba(0,0,0,0.1));
    }

    .interactive-gift-box {
      position: absolute;
      top: 20px;
      right: 25px;
      width: 48px;
      height: 48px;
      background: linear-gradient(135deg, #ff7675, #d63031);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 22px;
      box-shadow: 0 5px 15px rgba(214, 48, 49, 0.4);
      cursor: pointer;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      z-index: 5;
    }
    .interactive-gift-box:hover {
      transform: scale(1.15) rotate(10deg);
      box-shadow: 0 8px 25px rgba(253, 203, 110, 0.8);
    }
    .interactive-gift-box:hover::after {
      content: '✨🎁✨';
      position: absolute;
      top: -30px;
      font-size: 14px;
      white-space: nowrap;
      animation: sparkleFloat 0.8s ease infinite alternate;
    }

    .product-gallery { text-align: center; position: relative; }
    .main-img-wrap { 
      width: 100%; 
      height: 300px; 
      display: flex; 
      align-items: center; 
      justify-content: center;
      position: relative;
    }
    .main-img-wrap::before {
      content: '';
      position: absolute;
      width: 220px;
      height: 220px;
      background: radial-gradient(circle, rgba(116, 185, 255, 0.45) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 1;
      animation: auraPulse 4s ease-in-out infinite;
    }
    .main-img { 
      max-width: 100%; 
      max-height: 100%; 
      object-fit: contain; 
      position: relative;
      z-index: 2;
      filter: drop-shadow(0 20px 25px rgba(0,51,102,0.25)); 
      animation: floatHeadphone 4s ease-in-out infinite; 
    }

    .color-selector { display: flex; justify-content: center; gap: 15px; margin-top: 20px; }
    .color-dot {
      width: 28px; height: 28px; border-radius: 50%; cursor: pointer; border: 3px solid white; box-shadow: 0 0 0 1px #ccc; transition: all 0.2s ease;
    }
    .color-dot:hover, .color-dot.active { transform: scale(1.2); box-shadow: 0 0 0 2px var(--primary-color); }
    .dot-space-gray { background: #4b4b4b; }
    .dot-silver { background: #e2e2e2; }
    .dot-sky-blue { background: #87ceeb; }
    .dot-pink { background: #ffb6c1; }

    .product-details h1 { font-size: 30px; font-weight: 800; color: var(--primary-color); margin-bottom: 8px; }
    .product-subtitle { font-size: 14.5px; color: var(--text-muted); margin-bottom: 18px; font-weight: 500; }
    
    .price-box { margin-bottom: 22px; display: flex; align-items: center; gap: 12px; }
    .price-box .original { text-decoration: line-through; color: var(--text-muted); font-size: 15px; }
    .price-box .current { font-size: 30px; font-weight: 800; color: var(--secondary-color); }
    .price-box .badge { background: var(--secondary-color); color: white; padding: 4px 10px; border-radius: 12px; font-size: 13px; font-weight: 700; }

    /* Natural Highlight Pill List for Version B */
    .value-pill-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-bottom: 25px;
    }
    .value-pill-item {
      background: #f1f5f9;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 12px 15px;
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 13.5px;
      color: #1e293b;
      font-weight: 700;
      transition: all 0.25s ease;
    }
    .value-pill-item:hover {
      background: #ffffff;
      border-color: var(--secondary-color);
      transform: translateX(4px);
      box-shadow: 0 4px 12px rgba(214, 48, 49, 0.1);
    }
    .value-pill-icon {
      width: 26px;
      height: 26px;
      background: rgba(214, 48, 49, 0.12);
      color: var(--secondary-color);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 11px;
      flex-shrink: 0;
    }

    .btn-buy-hero {
      width: 100%;
      background: linear-gradient(135deg, #d63031, #b22222);
      color: white;
      border: none;
      padding: 18px;
      border-radius: 14px;
      font-size: 18px;
      font-weight: 800;
      cursor: pointer;
      box-shadow: 0 8px 20px rgba(214, 48, 49, 0.4);
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
    }
    .btn-buy-hero:hover { transform: translateY(-3px); box-shadow: 0 12px 25px rgba(214, 48, 49, 0.5); }

    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes popUp { from { transform: scale(0.7); opacity: 0; } to { transform: scale(1); opacity: 1; } }
    @keyframes bounce { 0%, 100% { transform: translateX(-50%) translateY(0); } 50% { transform: translateX(-50%) translateY(-6px); } }
    @keyframes fireworkBurst { 0% { transform: scale(0.2); opacity: 1; } 100% { transform: scale(1.6); opacity: 0; } }
    @keyframes floatCard { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-6px); } }
    @keyframes floatHeadphone { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
    @keyframes auraPulse { 0%, 100% { transform: scale(1); opacity: 0.4; } 50% { transform: scale(1.15); opacity: 0.7; } }
    @keyframes ledGlow { 0% { filter: hue-rotate(0deg); } 100% { filter: hue-rotate(360deg); } }
    @keyframes sparkleFloat { 0% { transform: translateY(0); opacity: 1; } 100% { transform: translateY(-8px); opacity: 0.6; } }

    footer { text-align: center; margin-top: 60px; padding: 25px; color: rgba(255,255,255,0.8); font-size: 13px; border-top: 1px solid rgba(255,255,255,0.1); }

    @media (max-width: 768px) {
      .product-hero-card { grid-template-columns: 1fr; padding: 25px; }
    }
  </style>
</head>
<body>

  <canvas id="snow-canvas"></canvas>

  <div class="welcome-modal-overlay" id="welcomeModal">
    <div class="welcome-modal">
      <div class="mascot-frame-container">
        <i class="fa-solid fa-star firework-star star-1"></i>
        <i class="fa-solid fa-star firework-star star-2"></i>
        <i class="fa-solid fa-star firework-star star-3"></i>
        <i class="fa-solid fa-star firework-star star-4"></i>
        
        <div class="mascot-circle">
          <svg class="mascot-svg" viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 15 A 65 65 0 0 1 165 80 A 65 65 0 0 1 100 145 A 65 65 0 0 1 35 80 A 65 65 0 0 1 100 15 Z" fill="#ffffff" stroke="#003366" stroke-width="8"/>
            <path d="M75 55 Q 85 45 95 55" fill="none" stroke="#003366" stroke-width="4" stroke-linecap="round"/>
            <circle cx="70" cy="70" r="4" fill="#003366"/>
            <circle cx="130" cy="70" r="4" fill="#003366"/>
            <circle cx="55" cy="80" r="12" fill="#b3d1ff" opacity="0.7"/>
            <circle cx="145" cy="80" r="12" fill="#b3d1ff" opacity="0.7"/>
            <path d="M 85 82 Q 100 95 115 82" fill="none" stroke="#003366" stroke-width="5" stroke-linecap="round"/>
            <path d="M 50 145 L 35 210 Q 100 220 165 210 L 150 145 Z" fill="#003366"/>
            <path d="M 85 150 Q 100 140 115 150" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
            <text x="100" y="190" font-family="Arial, sans-serif" font-weight="900" font-size="28" fill="#ffffff" text-anchor="middle">HSU</text>
          </svg>
        </div>
      </div>
      <h2>한성유니 Store</h2>
      <p>❄️ Merry Christmas! ❄️<br>한성유니 겨울 특별 스토어에 오신 것을<br>진심으로 환영합니다!</p>
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
    </div>
  </header>

  <div class="container">
    <div class="product-hero-card">
      <div class="snowy-roof"></div>
      <div class="interactive-gift-box" title="홀리데이 서프라이즈 선물상자!">
        <i class="fa-solid fa-gift"></i>
      </div>

      <div class="product-gallery">
        <div class="main-img-wrap">
          <img id="productImage" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-spacegray-202011?wid=470&hei=556&fmt=png-alpha" alt="AirPods Max" class="main-img">
        </div>
        <div class="color-selector">
          <div class="color-dot dot-space-gray active" title="스페이스 그레이" onclick="selectColor('space-gray', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-spacegray-202011?wid=470&hei=556&fmt=png-alpha', this)"></div>
          <div class="color-dot dot-silver" title="실버" onclick="selectColor('silver', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-silver-202011?wid=470&hei=556&fmt=png-alpha', this)"></div>
          <div class="color-dot dot-sky-blue" title="스카이 블루" onclick="selectColor('sky-blue', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-skyblue-202011?wid=470&hei=556&fmt=png-alpha', this)"></div>
          <div class="color-dot dot-pink" title="핑크" onclick="selectColor('pink', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-pink-202011?wid=470&hei=556&fmt=png-alpha', this)"></div>
        </div>
      </div>

      <div class="product-details">
        <h1>Apple AirPods Max</h1>
        <div class="product-subtitle">하이파이 오디오와 액티브 노이즈 캔슬링 헤드폰</div>
        
        <div class="price-box">
          <span class="original">769,000원</span>
          <span class="current">653,650원</span>
          <span class="badge">15% OFF</span>
        </div>

        <!-- Natural Highlight Pill List Layout -->
        <div class="value-pill-list">
          <div class="value-pill-item">
            <div class="value-pill-icon"><i class="fa-solid fa-check"></i></div>
            <span>전문가가 인정한 최고급 ANC 노이즈 차단 성능</span>
          </div>
          <div class="value-pill-item">
            <div class="value-pill-icon"><i class="fa-solid fa-check"></i></div>
            <span>장시간 착용에도 정수리 압박 없는 통기성 메쉬 캐노피</span>
          </div>
          <div class="value-pill-item">
            <div class="value-pill-icon"><i class="fa-solid fa-check"></i></div>
            <span>동적 헤드 추적 기술로 완성된 압도적인 입체 음향</span>
          </div>
          <div class="value-pill-item">
            <div class="value-pill-icon"><i class="fa-solid fa-check"></i></div>
            <span>5분 충전으로 1.5시간 사용 가능한 급속 충전 지원</span>
          </div>
        </div>

        <button id="buy-btn-airpods-max" class="btn-buy-hero" onclick="handleBuyClick()">
          <i class="fa-solid fa-cart-shopping"></i> 지금 바로 구매하기
        </button>
      </div>
    </div>
  </div>

  <footer>
    &copy; 2026 HansungUni Internet Business Research Center. All rights reserved.
  </footer>

  <script>
    let selectedColorName = 'Space Gray';

    function selectColor(colorName, imgSrc, element) {
      document.getElementById('productImage').src = imgSrc;
      document.querySelectorAll('.color-dot').forEach(dot => dot.classList.remove('active'));
      element.classList.add('active');
      selectedColorName = colorName;
    }

    window.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => {
        const modal = document.getElementById('welcomeModal');
        if (modal) {
          modal.style.opacity = '0';
          setTimeout(() => modal.style.display = 'none', 500);
        }
      }, 3000);
    });

    const canvas = document.getElementById('snow-canvas');
    const ctx = canvas.getContext('2d');
    function resizeCanvas() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 3 + 1,
      speed: Math.random() * 0.8 + 0.4,
      wind: Math.random() * 0.4 - 0.2
    }));

    function drawSnow() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
      ctx.beginPath();
      particles.forEach(p => {
        ctx.moveTo(p.x, p.y);
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        p.y += p.speed;
        p.x += p.wind;
        if (p.y > canvas.height) { p.y = -5; p.x = Math.random() * canvas.width; }
      });
      ctx.fill();
      requestAnimationFrame(drawSnow);
    }
    drawSnow();

    function handleBuyClick() {
      console.log('Purchase Intent Event (Version B):', selectedColorName);
      alert('AirPods Max (' + selectedColorName + ') 구매 페이지로 이동합니다.');
    }
  </script>
</body>
</html>
