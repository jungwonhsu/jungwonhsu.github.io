<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>인터넷비즈니스론 연구: 버전 A</title>
    <style>
        :root {
            --primary: #2563eb;
            --accent: #f59e0b;
            --bg-light: #f8fafc;
            --text-main: #1e293b;
            --text-muted: #64748b;
            --border: #e2e8f0;
            --card-bg: #ffffff;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Malgun Gothic', 'Apple SD Gothic Neo', sans-serif;
        }

        body {
            background-color: var(--bg-light);
            color: var(--text-main);
            line-height: 1.6;
            padding: 20px;
        }

        .container {
            max-width: 1000px;
            margin: 0 auto;
        }

        header {
            background: white;
            padding: 25px;
            border-radius: 12px;
            box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
            margin-bottom: 25px;
            text-align: center;
        }

        header h1 {
            color: var(--primary);
            font-size: 1.5rem;
            margin-bottom: 10px;
        }

        header p {
            color: var(--text-muted);
            font-size: 0.95rem;
        }

        .version-badge {
            background: #e2e8f0;
            color: var(--text-main);
            padding: 10px 20px;
            border-radius: 8px;
            text-align: center;
            font-weight: 600;
            margin-bottom: 25px;
            font-size: 1.05rem;
        }

        .product-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
            margin-bottom: 25px;
        }

        .product-card {
            background: var(--card-bg);
            border: 1px solid var(--border);
            border-radius: 12px;
            padding: 20px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.02);
            transition: transform 0.2s, box-shadow 0.2s;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .product-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05);
        }

        .product-img {
            background: #e2e8f0;
            height: 140px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--text-muted);
            font-weight: 600;
            margin-bottom: 15px;
        }

        .product-title {
            font-size: 1.1rem;
            font-weight: 600;
            margin-bottom: 8px;
        }

        .product-specs {
            font-size: 0.85rem;
            color: var(--text-muted);
            margin-bottom: 15px;
        }

        .product-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .price {
            font-weight: 700;
            color: #16a34a;
            font-size: 1.1rem;
        }

        .click-btn {
            background: var(--accent);
            border: none;
            color: white;
            padding: 8px 16px;
            border-radius: 6px;
            font-weight: 600;
            cursor: pointer;
            transition: background 0.2s;
        }

        .click-btn:hover {
            background: #d97706;
        }

        .stats-panel {
            background: white;
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
            text-align: center;
        }

        .stats-panel h3 {
            margin-bottom: 10px;
            font-size: 1.1rem;
        }

        .stats-number {
            font-size: 1.8rem;
            font-weight: bold;
            color: var(--primary);
        }
    </style>
</head>
<body>

<div class="container">
    <header>
        <h1>인터넷 쇼핑몰 상품 탐색</h1>
        <p>상품 탐색 과정에서의 정보 제공 인터페이스</p>
    </header>

    <div class="version-badge">
        🖥️ 버전 A: 전통적인 인터페이스 (선택 기준 가이드 없이 원시 상품 정보만 제공)
    </div>

    <div class="product-grid">
        <div class="product-card">
            <div>
                <div class="product-img">상품 이미지 1</div>
                <div class="product-title">알파 사운드 X 무선 이어폰</div>
                <div class="product-specs">배터리 35시간 • 액티브 노이즈 캔슬링(ANC) • 무게 240g • 블루투스 5.3 • 평점 4.8★ (리뷰 1,200개)</div>
            </div>
            <div class="product-footer">
                <span class="price">249,000 원</span>
                <button class="click-btn" onclick="recordClick('알파 사운드 X')">상세보기</button>
            </div>
        </div>

        <div class="product-card">
            <div>
                <div class="product-img">상품 이미지 2</div>
                <div class="product-title">베타베이스 프로 무선 이어폰</div>
                <div class="product-specs">배터리 20시간 • 노이즈 캔슬링 미지원 • 무게 290g • 블루투스 5.0 • 평점 4.2★ (리뷰 450개)</div>
            </div>
            <div class="product-footer">
                <span class="price">189,000 원</span>
                <button class="click-btn" onclick="recordClick('베타베이스 프로')">상세보기</button>
            </div>
        </div>

        <div class="product-card">
            <div>
                <div class="product-img">상품 이미지 3</div>
                <div class="product-title">감마 와이어리스 이어폰</div>
                <div class="product-specs">배터리 40시간 • 고급 ANC 탑재 • 무게 220g • 블루투스 5.4 • 평점 4.9★ (리뷰 3,400개)</div>
            </div>
            <div class="product-footer">
                <span class="price">329,000 원</span>
                <button class="click-btn" onclick="recordClick('감마 와이어리스')">상세보기</button>
            </div>
        </div>
    </div>

    <div class="stats-panel">
        <h3>버전 A에서 기록된 상품 클릭 수 (Clicks):</h3>
        <div class="stats-number" id="clickCount">0</div>
        <p style="color: var(--text-muted); font-size: 0.85rem; margin-top: 5px;">(선택 기준 안내가 없는 상태에서의 사용자 탐색 및 클릭 행동 측정)</p>
    </div>
</div>

<script>
    let clicks = 0;

    function recordClick(productName) {
        clicks++;
        document.getElementById('clickCount').innerText = clicks;
        alert(`[버전 A] "${productName}" 상품의 상세보기 버튼을 클릭했습니다.`);
    }
</script>

</body>
</html>
