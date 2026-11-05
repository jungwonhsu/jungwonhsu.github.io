<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>한성유니 Store - AirPods Max (Version A)</title>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
  <style>
    :root {
      --primary-color: #0056b3;
      --secondary-color: #ff6b00;
      --bg-light: rgba(244, 247, 250, 0.92);
      --card-bg: #ffffff;
      --text-dark: #222222;
      --text-muted: #666666;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
    html { scroll-behavior: smooth; }
    
    body { 
      background: linear-gradient(rgba(244, 247, 250, 0.88), rgba(244, 247, 250, 0.88)),
                  url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1350&q=80') no-repeat center center fixed;
      background-size: cover;
      color: var(--text-dark); 
      padding-bottom: 50px; 
      position: relative;
    }

    #snow-canvas {
      position: fixed;
      top: 0; left: 0; width: 100%; height: 100%;
      pointer-events: none;
      z-index: 99;
    }

    /* Welcome Modal Styles - Circular Frame & Fireworks */
    .welcome-modal-overlay {
      position: fixed;
      top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(0, 0, 0, 0.65);
      backdrop-filter: blur(5px);
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
      box-shadow: 0 20px 40px rgba(0,0,0,0.3);
      position: relative;
      animation: popUp 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      overflow: visible;
    }

    /* Circular Mascot Frame with Overflow for Upper Body */
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
      box-shadow: 0 8px 20px rgba(0,86,179,0.25);
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

    /* Fireworks Stars */
    .firework-star {
      position: absolute;
      color: #ffcc00;
      font-size: 20px;
      animation: fireworkBurst 1.2s infinite ease-out;
      opacity: 0;
    }
    .star-1 { top: -10px; left: 15px; animation-delay: 0.1s; color: #ff4d4d; }
    .star-2 { top: -20px; right: 25px; animation-delay: 0.4s; color: #ffcc00; }
    .star-3 { top: 40px; left: -15px; animation-delay: 0.2s; color: #00d2d3; }
    .star-4 { top: 30px; right: -15px; animation-delay: 0.5s; color: #ff6b81; }

    .welcome-modal h2 { font-size: 22px; color: var(--primary-color); font-weight: 800; margin-bottom: 8px; }
    .welcome-modal p { font-size: 15px; color: #444; line-height: 1.5; font-weight: 600; }

    /* Top Announcement Bar */
    .top-bar { background: linear-gradient(90deg, #004494, #0066cc); color: white; text-align: center; padding: 9px 15px; font-size: 14px; font-weight: 600; letter-spacing: 0.5px; }
    .top-bar i { margin-right: 6px; color: #ffcc00; animation: pulse 1.5s infinite; }

    /* Header Navigation */
    header { background-color: rgba(255, 255, 255, 0.95); backdrop-filter: blur(8px); box-shadow: 0 4px 15px rgba(0,0,0,0.06); position: sticky; top: 0; z-index: 100; }
    .header-container { max-width: 1200px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; padding: 15px 20px; }
    .logo { font-size: 24px; font-weight: 800; color: var(--primary-color); text-decoration: none; display: flex; align-items: center; gap: 10px; }
    .logo-icon { width: 38px; height: 38px; background: var(--primary-color); color: white; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 20px; }
    .search-box { display: flex; flex: 1; max-width: 500px; margin: 0 30px; }
    .search-box input { width: 100%; padding: 11px 18px; border: 2px solid var(--primary-color); border-radius: 8px 0 0 8px; outline: none; font-size: 14px; }
    .search-box button { background: var(--primary-color); color: white; border: none; padding: 0 22px; border-radius: 0 8px 8px 0; cursor: pointer; font-size: 16px; transition: background 0.2s; }

    /* Hero Banner */
    .hero-banner { 
      max-width: 1200px; 
      margin: 25px auto; 
      background: linear-gradient(135deg, rgba(0, 54, 121, 0.92) 0%, rgba(0, 86, 179, 0.92) 50%, rgba(0, 31, 77, 0.92) 100%); 
      border-radius: 20px; 
      color: white; 
      padding: 40px 50px; 
      position: relative; 
      overflow: hidden; 
      display: flex; 
      align-items: center; 
      justify-content: space-between;
      box-shadow: 0 10px 30px rgba(0, 86, 179, 0.25);
    }
    .hero-text { z-index: 2; max-width: 600px; }
    .hero-tag { display: inline-block; background: rgba(255,255,255,0.2); padding: 5px 12px; border-radius: 20px; font-size: 12px; font-weight: 700; margin-bottom: 12px; }
    .hero-text h1 { font-size: 36px; font-weight: 800; margin-bottom: 12px; line-height: 1.2; }
    .hero-text p { font-size: 16px; opacity: 0.9; }
    .hero-img-box { z-index: 2; position: relative; }
    .hero-img-box img { width: 260px; filter: drop-shadow(0 15px 25px rgba(0,0,0,0.4)); animation: floatHeadphone 4s ease-in-out infinite; }

    .waves { position: absolute; bottom: 0; left: 0; width: 100%; height: 40px; }
    .parallax > use { animation: move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite; }
    .parallax > use:nth-child(1) { animation-delay: -2s; animation-duration: 7s; fill: rgba(244,247,250,0.3); }
    .parallax > use:nth-child(2) { animation-delay: -3s; animation-duration: 10s; fill: rgba(244,247,250,0.5); }
    .parallax > use:nth-child(3) { animation-delay: -4s; animation-duration: 13s; fill: rgba(244,247,250,0.8); }
    .parallax > use:nth-child(4) { animation-delay: -5s; animation-duration: 20s; fill: rgba(244,247,250,0.92); }

    /* Container */
    .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }

    /* Product Grid */
    .section-title { font-size: 22px; font-weight: 700; margin: 35px 0 20px 0; border-left: 5px solid var(--primary-color); padding-left: 12px; }
    .product-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 25px; }

    .product-card { background: var(--card-bg); border-radius: 16px; overflow: hidden; box-shadow: 0 6px 20px rgba(0,0,0,0.06); transition: all 0.3s ease; display: flex; flex-direction: column; position: relative; border: 1px solid rgba(0,0,0,0.06); }
    .product-card:hover { transform: translateY(-8px); box-shadow: 0 12px 30px rgba(0,0,0,0.12); }

    .discount-badge { position: absolute; top: 15px; left: 15px; background: linear-gradient(135deg, #ff4d4d, #dc3545); color: white; padding: 5px 10px; border-radius: 20px; font-weight: 800; font-size: 12px; z-index: 5; }

    .product-img-wrap { width: 100%; height: 230px; padding: 25px; background: radial-gradient(circle, #ffffff 60%, #f0f4f8 100%); display: flex; align-items: center; justify-content: center; }
    .product-img { max-width: 100%; max-height: 100%; object-fit: contain; transition: transform 0.4s ease; }
    .product-card:hover .product-img { transform: scale(1.08); }

    .product-info { padding: 22px; display: flex; flex-direction: column; flex-grow: 1; }
    .product-title { font-size: 17px; font-weight: 700; margin-bottom: 10px; color: #1a1a1a; }
    .price-container { margin-bottom: 15px; }
    .original-price { text-decoration: line-through; color: var(--text-muted); font-size: 13px; }
    .current-price { font-size: 22px; font-weight: 800; color: #e63946; }

    /* Specs List for Version A */
    .specs-list { background: #f8fafc; padding: 14px; border-radius: 10px; font-size: 12px; color: #475569; line-height: 1.6; margin-bottom: 20px; flex-grow: 1; border: 1px solid #e2e8f0; list-style: none; }
    .specs-list li { margin-bottom: 5px; border-bottom: 1px dashed #cbd5e1; padding-bottom: 4px; }
    .specs-list li:last-child { border-bottom: none; }

    /* Buy Button */
    .btn-buy { 
      width: 100%; 
      background: linear-gradient(135deg, #ff6b00 0%, #ff8800 100%); 
      color: white; 
      border: none; 
      padding: 14px; 
      border-radius: 10px; 
      font-size: 16px; 
      font-weight: 800; 
      cursor: pointer; 
      transition: all 0.3s ease; 
      display: flex; 
      align-items: center; 
      justify-content: center; 
      gap: 10px; 
      box-shadow: 0 4px 12px rgba(255, 107, 0, 0.3);
    }
    .btn-buy:hover { background: linear-gradient(135deg, #e05d00 0%, #ff6b00 100%); transform: translateY(-2px); }

    /* Animations */
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes popUp { from { transform: scale(0.7); opacity: 0; } to { transform: scale(1); opacity: 1; } }
    @keyframes bounce { 0%, 100% { transform: translateX(-50%) translateY(0); } 50% { transform: translateX(-50%) translateY(-6px); } }
    @keyframes fireworkBurst {
      0% { transform: scale(0.2); opacity: 1; }
      100% { transform: scale(1.6); opacity: 0; }
    }
    @keyframes floatHeadphone { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }
    @keyframes move-forever { 0% { transform: translate3d(-90px,0,0); } 100% { transform: translate3d(85px,0,0); } }

    footer { text-align: center; margin-top: 60px; padding: 25px; color: var(--text-muted); font-size: 13px; border-top: 1px solid #e0e0e0; background: rgba(255,255,255,0.9); }
  </style>
</head>
<body>

  <!-- Snowfall Canvas -->
  <canvas id="snow-canvas"></canvas>

  <!-- Welcome Mascot Modal (Auto close after 3 seconds) -->
  <div class="welcome-modal-overlay" id="welcomeModal">
    <div class="welcome-modal">
      <div class="mascot-frame-container">
        <i class="fa-solid fa-star firework-star star-1"></i>
        <i class="fa-solid fa-star firework-star star-2"></i>
        <i class="fa-solid fa-star firework-star star-3"></i>
        <i class="fa-solid fa-star firework-star star-4"></i>
        
        <div class="mascot-circle">
          <!-- Embedded Precise Vector Mascot HSU -->
          <svg class="mascot-svg" viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg">
            <!-- Head Background White -->
            <path d="M100 15 A 65 65 0 0 1 165 80 A 65 65 0 0 1 100 145 A 65 65 0 0 1 35 80 A 65 65 0 0 1 100 15 Z" fill="#ffffff" stroke="#003366" stroke-width="8"/>
            <!-- Cute Face Features -->
            <path d="M75 55 Q 85 45 95 55" fill="none" stroke="#003366" stroke-width="4" stroke-linecap="round"/>
            <circle cx="70" cy="70" r="4" fill="#003366"/>
            <circle cx="130" cy="70" r="4" fill="#003366"/>
            <circle cx="55" cy="80" r="12" fill="#b3d1ff" opacity="0.7"/>
            <circle cx="145" cy="80" r="12" fill="#b3d1ff" opacity="0.7"/>
            <path d="M 85 82 Q 100 95 115 82" fill="none" stroke="#003366" stroke-width="5" stroke-linecap="round"/>
            <!-- Hoodie Body HSU -->
            <path d="M 50 145 L 35 210 Q 100 220 165 210 L 150 145 Z" fill="#003366"/>
            <path d="M 85 150 Q 100 140 115 150" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
            <text x="100" y="190" font-family="Arial, sans-serif" font-weight="900" font-size="28" fill="#ffffff" text-anchor="middle">HSU</text>
          </svg>
        </div>
      </div>
      <h2>한성유니 Store</h2>
      <p>✨ 환영합니다! ✨<br>한성유니 쇼핑 천국에 오신 것을<br>진심으로 환영합니다!</p>
    </div>
  </div>

  <div class="top-bar">
    <i class="fa-solid fa-bolt"></i> 한성유니 Store 프리미엄 혜택: Apple 정품 신학기 특별 할인 진행 중!
  </div>

  <header>
    <div class="header-container">
      <a href="#" class="logo">
        <div class="logo-icon"><i class="fa-solid fa-headphones"></i></div>
        한성유니 Store
      </a>
      <div class="search-box">
        <input type="text" placeholder="AirPods Max 색상 및 상세 사양 검색...">
        <button><i class="fa-solid fa-magnifying-glass"></i></button>
      </div>
    </div>
  </header>

  <div class="hero-banner">
    <div class="hero-text">
      <span class="hero-tag">✨ NEW ARRIVAL 2026</span>
      <h1>Apple AirPods Max<br>프리미엄 오디오 라인업</h1>
      <p>독보적인 하이파이 음향과 압도적인 노이즈 캔슬링의 완벽한 조화</p>
    </div>
    <div class="hero-img-box">
      <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-spacegray-202011?wid=470&hei=556&fmt=png-alpha" alt="Hero AirPods Max">
    </div>

    <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none">
      <defs><path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" /></defs>
      <g class="parallax">
        <use xlink:href="#gentle-wave" x="48" y="0" />
        <use xlink:href="#gentle-wave" x="48" y="3" />
        <use xlink:href="#gentle-wave" x="48" y="5" />
        <use xlink:href="#gentle-wave" x="48" y="7" />
      </g>
    </svg>
  </div>

  <div class="container">
    <div class="section-title">
      <span>전체 AirPods Max 상품 목록</span>
    </div>

    <div class="product-grid">
      <!-- Product 1 -->
      <div class="product-card">
        <div class="discount-badge">15% OFF</div>
        <div class="product-img-wrap">
          <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-spacegray-202011?wid=470&hei=556&fmt=png-alpha" alt="AirPods Max Space Gray" class="product-img">
        </div>
        <div class="product-info">
          <div class="product-title">AirPods Max - 스페이스 그레이</div>
          <div class="price-container">
            <span class="original-price">769,000원</span><br>
            <span class="current-price">653,650원</span>
          </div>
          <ul class="specs-list">
            <li><strong>드라이버:</strong> Apple 자체 설계 다이나믹 드라이버</li>
            <li><strong>칩셋:</strong> Apple H1 헤드폰 칩 (양쪽 각각 탑재)</li>
            <li><strong>마이크:</strong> 총 9개의 마이크 (ANC용 8개)</li>
            <li><strong>무게:</strong> 384.8g</li>
            <li><strong>배터리:</strong> ANC 활성화 시 최대 20시간 연속 재생</li>
            <li><strong>충전 방식:</strong> Lightning 단자 충전 지원</li>
            <li><strong>디스플레이:</strong> Smart Case 보관 시 초저전력 전환</li>
            <li><strong>연결:</strong> Bluetooth 5.0 기술 적용</li>
          </ul>
          <button id="buy-btn-airpods-max-space-gray" class="btn-buy" onclick="handleBuyClick('AirPods Max Space Gray')">
            <i class="fa-solid fa-cart-shopping"></i> 구매하기
          </button>
        </div>
      </div>

      <!-- Product 2 -->
      <div class="product-card">
        <div class="discount-badge">12% OFF</div>
        <div class="product-img-wrap">
          <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-silver-202011?wid=470&hei=556&fmt=png-alpha" alt="AirPods Max Silver" class="product-img">
        </div>
        <div class="product-info">
          <div class="product-title">AirPods Max - 실버</div>
          <div class="price-container">
            <span class="original-price">769,000원</span><br>
            <span class="current-price">676,720원</span>
          </div>
          <ul class="specs-list">
            <li><strong>드라이버:</strong> Apple 자체 설계 다이나믹 드라이버</li>
            <li><strong>칩셋:</strong> Apple H1 헤드폰 칩 (양쪽 각각 탑재)</li>
            <li><strong>마이크:</strong> 총 9개의 마이크 (ANC용 8개)</li>
            <li><strong>무게:</strong> 384.8g</li>
            <li><strong>배터리:</strong> ANC 활성화 시 최대 20시간 연속 재생</li>
            <li><strong>이어쿠션:</strong> 니트 메쉬 캐노피 및 메모리 폼 쿠션</li>
            <li><strong>센서:</strong> 광학 센서, 위치 센서, 케이스 감지 센서</li>
            <li><strong>연결:</strong> Bluetooth 5.0 기술 적용</li>
          </ul>
          <button id="buy-btn-airpods-max-silver" class="btn-buy" onclick="handleBuyClick('AirPods Max Silver')">
            <i class="fa-solid fa-cart-shopping"></i> 구매하기
          </button>
        </div>
      </div>

      <!-- Product 3 -->
      <div class="product-card">
        <div class="discount-badge">10% OFF</div>
        <div class="product-img-wrap">
          <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-skyblue-202011?wid=470&hei=556&fmt=png-alpha" alt="AirPods Max Sky Blue" class="product-img">
        </div>
        <div class="product-info">
          <div class="product-title">AirPods Max - 스카이 블루</div>
          <div class="price-container">
            <span class="original-price">769,000원</span><br>
            <span class="current-price">692,100원</span>
          </div>
          <ul class="specs-list">
            <li><strong>드라이버:</strong> Apple 자체 설계 다이나믹 드라이버</li>
            <li><strong>칩셋:</strong> Apple H1 헤드폰 칩 (양쪽 각각 탑재)</li>
            <li><strong>마이크:</strong> 총 9개의 마이크 (음성 픽업 겸용 3개)</li>
            <li><strong>무게:</strong> 384.8g</li>
            <li><strong>배터리:</strong> 5분 충전 시 약 1.5시간 사용 가능</li>
            <li><strong>오디오:</strong> 공간 음향 및 동적 헤드 추적 기능</li>
            <li><strong>제어:</strong> Digital Crown 볼륨 조절 및 트랙 건너뛰기</li>
            <li><strong>연결:</strong> Bluetooth 5.0 기술 적용</li>
          </ul>
          <button id="buy-btn-airpods-max-sky-blue" class="btn-buy" onclick="handleBuyClick('AirPods Max Sky Blue')">
            <i class="fa-solid fa-cart-shopping"></i> 구매하기
          </button>
        </div>
      </div>

      <!-- Product 4 -->
      <div class="product-card">
        <div class="discount-badge">14% OFF</div>
        <div class="product-img-wrap">
          <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-pink-202011?wid=470&hei=556&fmt=png-alpha" alt="AirPods Max Pink" class="product-img">
        </div>
        <div class="product-info">
          <div class="product-title">AirPods Max - 핑크</div>
          <div class="price-container">
            <span class="original-price">769,000원</span><br>
            <span class="current-price">661,340원</span>
          </div>
          <ul class="specs-list">
            <li><strong>드라이버:</strong> Apple 자체 설계 다이나믹 드라이버</li>
            <li><strong>칩셋:</strong> Apple H1 헤드폰 칩 (양쪽 각각 탑재)</li>
            <li><strong>마이크:</strong> 총 9개의 마이크 (ANC용 8개)</li>
            <li><strong>무게:</strong> 384.8g</li>
            <li><strong>배터리:</strong> ANC 활성화 시 최대 20시간 연속 재생</li>
            <li><strong>외형:</strong> 양각 처리된 아노다이즈드 알루미늄 이어컵</li>
            <li><strong>액세서리:</strong> Smart Case 및 Lightning 케이블 동봉</li>
            <li><strong>연결:</strong> Bluetooth 5.0 기술 적용</li>
          </ul>
          <button id="buy-btn-airpods-max-pink" class="btn-buy" onclick="handleBuyClick('AirPods Max Pink')">
            <i class="fa-solid fa-cart-shopping"></i> 구매하기
          </button>
        </div>
      </div>
    </div>
  </div>

  <footer>
    &copy; 2026 HansungUni Internet Business Research Center. All rights reserved. (Control Group Page)
  </footer>

  <script>
    /* Auto close modal after 3 seconds */
    window.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => {
        const modal = document.getElementById('welcomeModal');
        if (modal) {
          modal.style.opacity = '0';
          setTimeout(() => modal.style.display = 'none', 500);
        }
      }, 3000);
    });

    /* Snowfall Animation Engine */
    const canvas = document.getElementById('snow-canvas');
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 3 + 1,
      speed: Math.random() * 1 + 0.5,
      wind: Math.random() * 0.5 - 0.25
    }));

    function drawSnow() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.beginPath();
      particles.forEach(p => {
        ctx.moveTo(p.x, p.y);
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        p.y += p.speed;
        p.x += p.wind;
        if (p.y > canvas.height) {
          p.y = -5;
          p.x = Math.random() * canvas.width;
        }
      });
      ctx.fill();
      requestAnimationFrame(drawSnow);
    }
    drawSnow();

    function handleBuyClick(productName) {
      console.log('Purchase Intent Event (Version A):', productName);
      alert(productName + ' 상품 구매 페이지로 이동합니다.');
    }
  </script>
</body>
</html>
