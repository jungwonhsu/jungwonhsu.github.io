<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>A안 - 상품 상세보기</title>
  <style>
    :root {
      --bg-color: #f4f6f8;
      --card-bg: #ffffff;
      --primary-color: #0f172a;
      --text-main: #334155;
      --text-sub: #64748b;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
    }

    body {
      background-color: var(--bg-color);
      color: var(--text-main);
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      padding: 20px;
    }

    .product-card {
      background: var(--card-bg);
      border-radius: 12px;
      border: 1px solid #e2e8f0;
      width: 100%;
      max-width: 380px;
      padding: 20px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
    }

    .badge-variant {
      display: inline-block;
      background-color: #e0f2fe;
      color: #0284c7;
      font-size: 0.75rem;
      font-weight: bold;
      padding: 4px 8px;
      border-radius: 4px;
      margin-bottom: 12px;
    }

    .product-img {
      width: 100%;
      height: 220px;
      object-fit: cover;
      border-radius: 8px;
      background-color: #f8fafc;
    }

    .product-details {
      margin-top: 15px;
    }

    .product-title {
      font-size: 1.1rem;
      font-weight: 700;
      color: var(--primary-color);
      margin-bottom: 6px;
    }

    .product-price {
      font-size: 1.25rem;
      font-weight: 700;
      color: #0f172a;
      margin-bottom: 8px;
    }

    .rating {
      color: #f59e0b;
      font-size: 0.85rem;
      margin-bottom: 20px;
    }

    .btn-group {
      display: flex;
      gap: 10px;
    }

    .btn {
      flex: 1;
      padding: 12px;
      border: none;
      border-radius: 6px;
      font-weight: 600;
      font-size: 0.9rem;
      cursor: pointer;
      transition: background 0.2s;
    }

    .btn-outline {
      border: 1px solid #cbd5e1;
      background: transparent;
      color: var(--text-main);
    }

    .btn-outline:hover {
      background: #f1f5f9;
    }

    .btn-primary {
      background: var(--primary-color);
      color: #fff;
    }

    .btn-primary:hover {
      background: #1e293b;
    }
  </style>
</head>
<body>

  <div class="product-card">
    <span class="badge-variant">A안 (통제집단 UI)</span>
    <img class="product-img" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80" alt="무선 헤드폰">
    
    <div class="product-details">
      <h2 class="product-title">사운드웨이브 엘리트 ANC 무선 헤드폰</h2>
      <div class="product-price">299,000 원</div>
      <div class="rating">★★★★★ (4.8 - 리뷰 312개)</div>
      
      <!-- A안: 구매 선택 기준 정보가 없음 -->

      <div class="btn-group">
        <button class="btn btn-outline" onclick="trackClick('A', '상세보기')">상세보기</button>
        <button class="btn btn-primary" onclick="trackClick('A', '장바구니 담기')">장바구니 담기</button>
      </div>
    </div>
  </div>

  <script>
    function trackClick(variant, action) {
      alert(`[CTR 데이터 수집] ${variant}안에서 "${action}" 버튼을 클릭하셨습니다.`);
    }
  </script>
</body>
</html>
