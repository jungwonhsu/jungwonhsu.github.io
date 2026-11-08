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
