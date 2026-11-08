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
      padding-bottom: 60px; 
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

    /* Main Container & Hero Card */
    .container { max-width: 1050px; margin: 40px auto; padding: 0 20px; z-index: 2; position: relative; }

    .product-hero-card {
      background: var(--card-bg); border-radius: 28px;
      box-shadow: 0 20px 45px rgba(0,0,0,0.35), 0 0 25px rgba(253, 203, 110, 0.25);
      padding: 45px; display: grid; grid-template-columns: 1fr 1.1fr; gap: 40px; align-items: center; position: relative;
      animation: floatCard 5s ease-in-out infinite; overflow: visible;
    }
    .product-hero-card::before {
      content: ''; position: absolute; inset: -3px; border-radius: 31px;
      background: linear-gradient(45deg, #d63031, #fdcb6e, #00cec9, #d63031); z-index: -1; animation: ledGlow 6s linear infinite; opacity: 0.85;
    }

    /* Tương tác 1: Visual Gallery & Aura Switcher */
    .product-gallery { text-align: center; position: relative; }
    .main-img-wrap { width: 100%; height: 310px; display: flex; align-items: center; justify-content: center; position: relative; }
    .main-img-wrap::before {
      content: ''; position: absolute; width: 230px; height: 230px;
      background: radial-gradient(circle, var(--aura-color) 0%, transparent 70%);
      border-radius: 50%; z-index: 1; animation: auraPulse 4s ease-in-out infinite; transition: background 0.5s ease;
    }
    .main-img { max-width: 100%; max-height: 100%; object-fit: contain; position: relative; z-index: 2; filter: drop-shadow(0 20px 25px rgba(0,51,102,0.25)); animation: floatHeadphone 4s ease-in-out infinite; transition: all 0.4s ease; }

    .color-selector { display: flex; justify-content: center; gap: 15px; margin-top: 15px; }
    .color-dot { width: 28px; height: 28px; border-radius: 50%; cursor: pointer; border: 3px solid white; box-shadow: 0 0 0 1px #ccc; transition: all 0.2s ease; }
    .color-dot:hover, .color-dot.active { transform: scale(1.25); box-shadow: 0 0 0 2px var(--primary-color); }
    .dot-space-gray { background: #4b4b4b; } .dot-silver { background: #e2e2e2; } .dot-sky-blue { background: #87ceeb; } .dot-pink { background: #ffb6c1; }

    .product-details h1 { font-size: 30px; font-weight: 800; color: var(--primary-color); margin-bottom: 6px; }
    .product-subtitle { font-size: 14.5px; color: var(--text-muted); margin-bottom: 15px; font-weight: 500; }
    
    .price-box { margin-bottom: 18px; display: flex; align-items: center; gap: 12px; }
    .price-box .original { text-decoration: line-through; color: var(--text-muted); font-size: 15px; }
    .price-box .current { font-size: 30px; font-weight: 800; color: var(--secondary-color); }
    .price-box .badge { background: var(--secondary-color); color: white; padding: 4px 10px; border-radius: 12px; font-size: 13px; font-weight: 700; }

    /* Version A: Grid Thông số Kỹ thuật */
    .specs-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 20px; }
    .spec-card-item { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 10px; display: flex; flex-direction: column; gap: 2px; }
    .spec-card-title { font-size: 11.5px; color: var(--text-muted); font-weight: 600; display: flex; align-items: center; gap: 5px; }
    .spec-card-title i { color: var(--primary-color); }
    .spec-card-value { font-size: 13px; color: var(--text-dark); font-weight: 700; }

    /* Tương tác 2: Audio Preview Simulator Widget */
    .audio-sim-box {
      background: linear-gradient(135deg, #eef6ff 0%, #e0e7ff 100%);
      border: 1px solid #c7d2fe; border-radius: 14px; padding: 12px 16px; margin-bottom: 20px;
      display: flex; align-items: center; justify-content: space-between; gap: 10px;
    }
    .audio-sim-info { display: flex; align-items: center; gap: 10px; font-size: 13px; font-weight: 700; color: var(--primary-color); }
    .audio-sim-controls { display: flex; gap: 8px; }
    .btn-sim {
      background: white; border: 1px solid #cbd5e1; padding: 6px 12px; border-radius: 8px;
      font-size: 12px; font-weight: 700; cursor: pointer; color: #334155; transition: all 0.2s ease;
    }
    .btn-sim.active { background: var(--primary-color); color: white; border-color: var(--primary-color); }
    .btn-sim-anc.active { background: var(--secondary-color); color: white; border-color: var(--secondary-color); }

    .btn-buy-hero {
      width: 100%; background: linear-gradient(135deg, #d63031, #b22222); color: white; border: none; padding: 18px;
      border-radius: 14px; font-size: 18px; font-weight: 800; cursor: pointer; box-shadow: 0 8px 20px rgba(214, 48, 49, 0.4);
      transition: all 0.3s ease; display: flex; align-items: center; justify-content: center; gap: 12px;
    }
    .btn-buy-hero:hover { transform: translateY(-3px); box-shadow: 0 12px 25px rgba(214, 48, 49, 0.5); }

    /* Tương tác 3: Floating Lucky Gift Trigger */
    .floating-gift-trigger {
      position: fixed; bottom: 30px; right: 30px; width: 60px; height: 60px;
      background: linear-gradient(135deg, #ff7675, #d63031); border-radius: 50%;
      display: flex; align-items: center; justify-content: center; color: white; font-size: 26px;
      box-shadow: 0 8px 25px rgba(214, 48, 49, 0.5); cursor: pointer; z-index: 1000;
      animation: pulseBounce 2s infinite ease-in-out;
    }

    /* Modal Popup Quà Giáng sinh */
    .gift-modal-overlay {
      position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7);
      backdrop-filter: blur(5px); display: none; align-items: center; justify-content: center; z-index: 10001;
    }
    .gift-modal {
      background: white; width: 90%; max-width: 380px; border-radius: 24px; padding: 30px 20px; text-align: center;
      position: relative; animation: popUp 0.3s ease;
    }
    .gift-modal h3 { color: var(--primary-color); font-size: 20px; font-weight: 800; margin-bottom: 10px; }
    .gift-modal p { font-size: 14px; color: #475569; margin-bottom: 20px; line-height: 1.5; }
    .coupon-code { background: #f1f5f9; border: 2px dashed var(--secondary-color); padding: 10px; border-radius: 10px; font-weight: 800; color: var(--secondary-color); font-size: 16px; margin-bottom: 20px; }
    .btn-close-gift { background: var(--primary-color); color: white; border: none; padding: 12px 24px; border-radius: 10px; font-weight: 700; cursor: pointer; }

    @keyframes floatCard { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-6px); } }
    @keyframes floatHeadphone { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
    @keyframes auraPulse { 0%, 100% { transform: scale(1); opacity: 0.4; } 50% { transform: scale(1.15); opacity: 0.7; } }
    @keyframes ledGlow { 0% { filter: hue-rotate(0deg); } 100% { filter: hue-rotate(360deg); } }
    @keyframes pulseBounce { 0%, 100% { transform: scale(1) translateY(0); } 50% { transform: scale(1.1) translateY(-6px); } }
    @keyframes popUp { from { transform: scale(0.7); opacity: 0; } to { transform: scale(1); opacity: 1; } }

    footer { text-align: center; margin-top: 60px; padding: 25px; color: rgba(255,255,255,0.8); font-size: 13px; border-top: 1px solid rgba(255,255,255,0.1); }
    @media (max-width: 768px) { .product-hero-card { grid-template-columns: 1fr; padding: 25px; } .specs-grid { grid-template-columns: 1fr; } }
  </style>
</head>
<body>

  <canvas id="snow-canvas"></canvas>

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
        
        <div class="price-box">
          <span class="original">769,000원</span>
          <span class="current">653,650원</span>
          <span class="badge">15% OFF</span>
        </div>

        <div class="specs-grid">
          <div class="spec-card-item">
            <span class="spec-card-title"><i class="fa-solid fa-volume-high"></i> 오디오 드라이버</span>
            <span class="spec-card-value">Apple 40mm 다이나믹</span>
          </div>
          <div class="spec-card-item">
            <span class="spec-card-title"><i class="fa-solid fa-microchip"></i> 프로세서 칩셋</span>
            <span class="spec-card-value">Apple H1 칩 (좌우 탑재)</span>
          </div>
          <div class="spec-card-item">
            <span class="spec-card-title"><i class="fa-solid fa-microphone-lines"></i> 마이크 센서</span>
            <span class="spec-card-value">총 9개 (ANC 8개 지원)</span>
          </div>
          <div class="spec-card-item">
            <span class="spec-card-title"><i class="fa-solid fa-battery-full"></i> 배터리 지속력</span>
            <span class="spec-card-value">최대 20시간 연속 재생</span>
          </div>
          <div class="spec-card-item">
            <span class="spec-card-title"><i class="fa-solid fa-feather"></i> 착용 구조 & 무게</span>
            <span class="spec-card-value">메쉬 캐노피 / 384.8g</span>
          </div>
          <div class="spec-card-item">
            <span class="spec-card-title"><i class="fa-solid fa-wifi"></i> 무선 연결</span>
            <span class="spec-card-value">Bluetooth 5.0 규격</span>
          </div>
        </div>

        <!-- Tương tác 2: Audio Simulator -->
        <div class="audio-sim-box">
          <div class="audio-sim-info">
            <i class="fa-solid fa-music"></i>
            <span id="audio-status-text">사운드 체험해보기</span>
          </div>
          <div class="audio-sim-controls">
            <button class="btn-sim" id="btn-play-sound" onclick="toggleAudioDemo()">▶ Play 5s</button>
            <button class="btn-sim" id="btn-toggle-anc" onclick="toggleANC()">ANC On</button>
          </div>
        </div>

        <button id="buy-btn-airpods-max" class="btn-buy-hero" onclick="handleBuyClick()">
          <i class="fa-solid fa-cart-shopping"></i> 지금 바로 구매하기
        </button>
      </div>
    </div>
  </div>

  <!-- Tương tác 3: Floating Lucky Gift Button -->
  <div class="floating-gift-trigger" onclick="openGiftModal()" title="홀리데이 서프라이즈 선물!">
    <i class="fa-solid fa-gift"></i>
  </div>

  <!-- Lucky Gift Modal -->
  <div class="gift-modal-overlay" id="giftModal">
    <div class="gift-modal">
      <i class="fa-solid fa-wand-magic-sparkles" style="font-size: 40px; color: var(--accent-gold); margin-bottom: 10px;"></i>
      <h3>🎄 크리스마스 특별 선물 🎄</h3>
      <p>축하합니다! 지금 구매 시 사용 가능한<br>한성유니 단독 추가 할인 쿠폰이 발급되었습니다!</p>
      <div class="coupon-code">HSU-HOLIDAY-2026</div>
      <button class="btn-close-gift" onclick="closeGiftModal()">쿠폰 적용하고 구매하기</button>
    </div>
  </div>

  <footer>
    &copy; 2026 HansungUni Internet Business Research Center. All rights reserved.
  </footer>

  <script>
    let selectedColorName = 'Space Gray';
    let isPlayingAudio = false;
    let isAncOn = false;

    // Tương tác 1: Color Selector & Aura Light Switcher
    function selectColor(colorName, imgSrc, auraColor, element) {
      document.getElementById('productImage').src = imgSrc;
      document.documentElement.style.setProperty('--aura-color', auraColor);
      document.querySelectorAll('.color-dot').forEach(dot => dot.classList.remove('active'));
      element.classList.add('active');
      selectedColorName = colorName;
    }

    // Tương tác 2: Audio Experience Simulator
    function toggleAudioDemo() {
      const playBtn = document.getElementById('btn-play-sound');
      const statusText = document.getElementById('audio-status-text');
      
      if (!isPlayingAudio) {
        isPlayingAudio = true;
        playBtn.classList.add('active');
        playBtn.innerText = '⏸ Pause';
        statusText.innerText = '🎵 Spatial Audio 재생 중...';
        setTimeout(() => {
          if(isPlayingAudio) {
            isPlayingAudio = false;
            playBtn.classList.remove('active');
            playBtn.innerText = '▶ Play 5s';
            statusText.innerText = '사운드 체험해보기';
          }
        }, 5000);
      } else {
        isPlayingAudio = false;
        playBtn.classList.remove('active');
        playBtn.innerText = '▶ Play 5s';
        statusText.innerText = '사운드 체험해보기';
      }
    }

    function toggleANC() {
      const ancBtn = document.getElementById('btn-toggle-anc');
      const statusText = document.getElementById('audio-status-text');
      isAncOn = !isAncOn;
      if (isAncOn) {
        ancBtn.classList.add('btn-sim-anc');
        ancBtn.innerText = 'ANC Active';
        statusText.innerText = '🤫 주변 소음 완벽 차단 중';
      } else {
        ancBtn.classList.remove('btn-sim-anc');
        ancBtn.innerText = 'ANC On';
        statusText.innerText = '사운드 체험해보기';
      }
    }

    // Tương tác 3: Gift Modal Logic
    function openGiftModal() { document.getElementById('giftModal').style.display = 'flex'; }
    function closeGiftModal() { document.getElementById('giftModal').style.display = 'none'; }

    // Canvas Snow Effect
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

    function handleBuyClick() {
      console.log('Purchase Intent Event (Version A):', selectedColorName);
      alert('AirPods Max (' + selectedColorName + ') 구매 페이지로 이동합니다.');
    }
  </script>
</body>
</html>
