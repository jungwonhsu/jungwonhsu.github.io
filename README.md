<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>한성유니 Store - A/B Testing Demo</title>
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif; }
        body { background-color: #f0f2f5; color: #333; padding-bottom: 60px; }

        /* Nút điều khiển A/B Test nằm cố định ở góc trên */
        .ab-control-panel {
            position: fixed;
            top: 15px;
            right: 15px;
            z-index: 1000;
            background: rgba(0, 0, 0, 0.85);
            color: #fff;
            padding: 10px 16px;
            border-radius: 30px;
            display: flex;
            align-items: center;
            gap: 12px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
            font-size: 13px;
        }
        .ab-control-panel select {
            background: #ff4757;
            color: #fff;
            border: none;
            padding: 6px 12px;
            border-radius: 15px;
            font-weight: bold;
            cursor: pointer;
            outline: none;
        }

        /* Top Banner Navigation */
        .top-bar { background-color: #e63946; color: white; text-align: center; padding: 10px; font-size: 14px; font-weight: bold; }
        .nav-bar { background: #ffffff; padding: 15px 40px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 2px 10px rgba(0,0,0,0.05); }
        .logo { font-size: 20px; font-weight: 800; color: #1d3557; display: flex; align-items: center; gap: 8px; }

        /* Container Sản Phẩm Main Hero (Giống Ảnh 1) */
        .container { max-width: 1100px; margin: 30px auto; padding: 0 20px; }
        .product-hero {
            background: linear-gradient(135deg, #a8ff78 0%, #78ffd6 100%);
            border-radius: 24px;
            padding: 40px;
            display: flex;
            gap: 40px;
            align-items: center;
            box-shadow: 0 10px 30px rgba(0,0,0,0.08);
            position: relative;
        }
        .product-gallery { flex: 1; text-align: center; }
        .product-gallery img { width: 100%; max-width: 380px; filter: drop-shadow(0 15px 15px rgba(0,0,0,0.15)); }
        
        .product-info { flex: 1.2; }
        .product-title { font-size: 32px; font-weight: 800; color: #1d3557; margin-bottom: 6px; }
        .product-subtitle { font-size: 15px; color: #457b9d; margin-bottom: 20px; }
        
        .price-box { display: flex; align-items: baseline; gap: 12px; margin-bottom: 20px; }
        .original-price { font-size: 18px; color: #888; text-decoration: line-through; }
        .current-price { font-size: 32px; font-weight: 900; color: #e63946; }
        .discount-badge { background: #e63946; color: white; padding: 4px 10px; border-radius: 6px; font-weight: bold; font-size: 14px; }

        /* PHẦN TIÊU CHÍ LỰA CHỌN (VARIANT B ONLY) - Giống Ảnh 1 & 2 */
        .criteria-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            margin-bottom: 25px;
        }
        .criteria-card {
            background: rgba(255, 255, 255, 0.9);
            padding: 14px;
            border-radius: 14px;
            border: 1px solid rgba(255,255,255,0.6);
            box-shadow: 0 4px 12px rgba(0,0,0,0.03);
        }
        .criteria-card h4 { font-size: 13px; color: #1d3557; margin-bottom: 4px; display: flex; align-items: center; gap: 6px; }
        .criteria-card p { font-size: 11px; color: #666; line-height: 1.3; }

        .service-tags { display: flex; gap: 10px; margin-bottom: 25px; font-size: 12px; color: #444; }
        .service-tag { background: rgba(255,255,255,0.6); padding: 6px 12px; border-radius: 20px; }

        .buy-btn {
            width: 100%;
            background: #e63946;
            color: white;
            border: none;
            padding: 18px;
            font-size: 18px;
            font-weight: bold;
            border-radius: 14px;
            cursor: pointer;
            box-shadow: 0 6px 20px rgba(230, 57, 70, 0.4);
            transition: 0.2s;
        }
        .buy-btn:hover { background: #d62839; transform: translateY(-2px); }

        /* Đánh giá / Review Section */
        .reviews-section { margin-top: 40px; background: white; padding: 30px; border-radius: 20px; }
        .reviews-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
        .review-card { border-bottom: 1px solid #eee; padding: 15px 0; }
        .review-card:last-child { border: none; }
        .review-user { font-weight: bold; font-size: 14px; margin-bottom: 4px; display: flex; gap: 8px; align-items: center; }
        .stars { color: #f1c40f; }
        .review-text { font-size: 13px; color: #555; }

        /* Ẩn/Hiện theo phiên bản A/B */
        .variant-b-only { display: none; }
    </style>
</head>
<body>

    <!-- Nút Toggle chọn bản A hoặc B trực tiếp -->
    <div class="ab-control-panel">
        <span>A/B Testing Mode:</span>
        <select id="abSelector" onchange="switchVariant(this.value)">
            <option value="A">Variant A (Control - Không tiêu chí)</option>
            <option value="B" selected>Variant B (Test - Có tiêu chí)</option>
        </select>
    </div>

    <div class="top-bar">🎁 한성유니 Store 신학기 & 홀리데이 특별 혜택 진행 중!</div>
    
    <nav class="nav-bar">
        <div class="logo">🎧 한성유니 Store</div>
    </nav>

    <div class="container">
        <div class="product-hero">
            <div class="product-gallery">
                <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80" alt="Apple AirPods Max / SoundWave Headphones">
            </div>
            
            <div class="product-info">
                <h1 class="product-title">Apple AirPods Max</h1>
                <p class="product-subtitle">하이파이 오디오와 액티브 노이즈 캔슬링 헤드폰</p>
                
                <div class="price-box">
                    <span class="original-price">769,000원</span>
                    <span class="current-price">653,650원</span>
                    <span class="discount-badge">15% OFF</span>
                </div>

                <!-- KHUNG TIÊU CHÍ CHỈ HIỂN THỊ Ở VARIANT B (Ảnh 1 & Ảnh 2) -->
                <div class="criteria-container variant-b-only" id="criteriaBox">
                    <div class="criteria-card">
                        <h4>🎧 몰입감 넘치는 음향</h4>
                        <p>영화관에 온 듯한 동적 헤드 추적 입체 음향 공간 제공</p>
                    </div>
                    <div class="criteria-card">
                        <h4>🔇 압도적 노이즈 차단</h4>
                        <p>주변 소음을 완벽히 격리하는 최상급 ANC 소음 차단</p>
                    </div>
                    <div class="criteria-card">
                        <h4>☁️ 극상의 편안한 착용감</h4>
                        <p>정수리 압박을 줄여주는 통기성 니트 메쉬 캐노피 디자인</p>
                    </div>
                    <div class="criteria-card">
                        <h4>⚡ 초고속 급속 충전</h4>
                        <p>단 5분 충전으로 1.5시간 동안 음악 감상 가능</p>
                    </div>
                </div>

                <div class="service-tags">
                    <span class="service-tag">🚚 무료 당일 배송</span>
                    <span class="service-tag">🔄 14일 무료 반품</span>
                    <span class="service-tag">🎁 선물 포장 지원</span>
                </div>

                <button class="buy-btn" onclick="trackClick()">🛒 지금 바로 구매하기</button>
            </div>
        </div>

        <!-- Bảng đánh giá người dùng (Reviews) -->
        <div class="reviews-section">
            <div class="reviews-header">
                <h3>구매 고객 후기 (4.8 / 5.0)</h3>
                <span style="color: #888; font-size: 13px;">총 312개의 평점</span>
            </div>
            
            <div class="review-card">
                <div class="review-user">김*민 <span class="stars">★★★★★</span></div>
                <div class="review-text">노이즈 캔슬링 성능이 정말 엄청납니다. 음질도 깔끔하고 디자인이 예뻐서 만족스럽습니다.</div>
            </div>
            <div class="review-card">
                <div class="review-user">Lee_JY <span class="stars">★★★★★</span></div>
                <div class="review-text">착용감이 편해서 장시간 착용해도 머리가 아프지 않네요. 배송도 하루만에 왔습니다.</div>
            </div>
        </div>
    </div>

    <script>
        let currentVariant = 'B';

        function switchVariant(variant) {
            currentVariant = variant;
            const criteriaBox = id = document.getElementById('criteriaBox');
            if (variant === 'B') {
                criteriaBox.style.display = 'grid';
            } else {
                criteriaBox.style.display = 'none';
            }
        }

        function trackClick() {
            alert(`[A/B Test Log]\n- Current Variant: ${currentVariant}\n- Event: Click Buy Button\n- CTR Tracked Successfully!`);
            console.log(`[CTR Tracking] Variant: ${currentVariant}, Timestamp: ${new Date().toISOString()}`);
        }

        // Khởi tạo giao diện ban đầu
        switchVariant('B');
    </script>
</body>
</html>
