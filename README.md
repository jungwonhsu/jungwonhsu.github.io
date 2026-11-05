<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>한성유니 Store - 무선 이어폰/헤드폰 전문점 (Version A)</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- FontAwesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Google Fonts: Noto Sans KR -->
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap" rel="stylesheet">
    
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Noto Sans KR', 'sans-serif'],
                    }
                }
            }
        }
    </script>
    <style>
        /* Custom Modern Scrollbar */
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #f1f5f9;
        }
        ::-webkit-scrollbar-thumb {
            background: #cbd5e1;
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #94a3b8;
        }
    </style>
</head>
<body class="bg-slate-50 text-slate-800 font-sans antialiased min-h-screen flex flex-col">

    <!-- Top Announcement Bar -->
    <div class="bg-slate-900 text-slate-300 py-2 px-4 text-xs text-center border-b border-slate-800">
        <span class="font-bold text-amber-400 mr-2">[버전 A - 통제군]</span>
        한성유니 Store 신학기 정품 오디오 특가 기획전 (무료 배송 & A/S 2년 보장)
    </div>

    <!-- Main Navigation Bar -->
    <header class="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-40">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
            <!-- Brand Logo -->
            <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                    <i class="fa-solid fa-headphones text-xl"></i>
                </div>
                <div>
                    <h1 class="text-xl font-black tracking-tight text-slate-900 flex items-center gap-2">
                        한성유니 Store
                        <span class="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-bold border border-slate-200">Ver A</span>
                    </h1>
                    <p class="text-xs text-slate-500">Premium Audio Collection</p>
                </div>
            </div>

            <!-- Search Bar -->
            <div class="hidden md:flex flex-1 max-w-md mx-8">
                <div class="relative w-full">
                    <input type="text" placeholder="노이즈 캔슬링 헤드폰 및 무선 이어폰 검색..." 
                        class="w-full bg-slate-100 border border-slate-200 rounded-full py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition">
                    <button class="absolute right-3 top-2.5 text-slate-400 hover:text-blue-600">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
            </div>

            <!-- Header Utility Icons -->
            <div class="flex items-center space-x-6 text-slate-600 text-sm">
                <a href="#" class="hover:text-blue-600 flex flex-col items-center gap-0.5"><i class="fa-regular fa-heart text-lg"></i><span class="text-[10px]">위시리스트</span></a>
                <a href="#" class="hover:text-blue-600 flex flex-col items-center gap-0.5 relative">
                    <i class="fa-solid fa-shopping-bag text-lg"></i>
                    <span class="text-[10px]">장바구니</span>
                    <span class="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
                </a>
            </div>
        </div>
    </header>

    <!-- Main Content Container -->
    <main class="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">

        <!-- Category Hero Banner -->
        <div class="bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 rounded-3xl p-6 sm:p-10 text-white shadow-xl mb-10 relative overflow-hidden">
            <div class="relative z-10 max-w-2xl">
                <span class="text-blue-400 font-bold text-xs tracking-widest uppercase mb-2 block">Official Audio Collection</span>
                <h2 class="text-2xl sm:text-4xl font-extrabold tracking-tight mb-3">프리미엄 무선 음향 기기 라인업</h2>
                <p class="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                    각 브랜드 최상위 모델의 세부 스펙, 드라이버 사양, 지원 코덱, 주파수 응답 및 배터리 성능 정보를 상세히 확인하시고 최적의 제품을 선택하세요.
                </p>
            </div>
        </div>

        <!-- Section Title -->
        <div class="flex items-center justify-between mb-6 pb-3 border-b border-slate-200">
            <div>
                <h3 class="text-xl font-bold text-slate-900">전체 상품 목록</h3>
                <p class="text-xs text-slate-500 mt-0.5">상세 사양 정보를 비교해 보세요.</p>
            </div>
            <span class="text-xs text-slate-500 font-semibold">총 4개 상품</span>
        </div>

        <!-- Product Grid (4 Products) -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            <!-- PRODUCT 1: SONY -->
            <div class="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden">
                <div class="relative bg-slate-100 p-6 flex items-center justify-center h-52">
                    <span class="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">BEST SELLER</span>
                    <!-- Sony SVG Illustration -->
                    <svg class="w-36 h-36 object-contain" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M60 120 C60 70, 180 70, 180 120" stroke="#334155" stroke-width="14" stroke-linecap="round"/>
                        <rect x="40" y="110" width="35" height="55" rx="16" fill="#1e293b"/>
                        <rect x="165" y="110" width="35" height="55" rx="16" fill="#1e293b"/>
                        <rect x="46" y="118" width="23" height="39" rx="10" fill="#475569"/>
                        <rect x="171" y="118" width="23" height="39" rx="10" fill="#475569"/>
                        <circle cx="57.5" cy="137.5" r="4" fill="#94a3b8"/>
                        <circle cx="182.5" cy="137.5" r="4" fill="#94a3b8"/>
                    </svg>
                </div>

                <div class="p-5 flex-1 flex flex-col justify-between">
                    <div>
                        <div class="text-xs font-bold text-blue-600 mb-1">소니 (Sony)</div>
                        <h4 class="font-bold text-slate-900 text-base mb-1">WH-1000XM5 무선 헤드폰</h4>
                        <div class="flex items-center space-x-1 text-amber-400 text-xs mb-3">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <span class="text-slate-500 font-semibold ml-1">4.9 (1,240)</span>
                        </div>
                        <div class="text-xl font-black text-slate-900 mb-4">479,000원</div>

                        <!-- VERSION A DETAILED SPECIFICATIONS (INFORMATION OVERLOAD) -->
                        <div class="bg-slate-50 p-3.5 rounded-xl border border-slate-100 mb-5 text-[11px] text-slate-600 space-y-1.5 leading-tight">
                            <div class="font-bold text-slate-800 border-b border-slate-200 pb-1 mb-2 flex justify-between">
                                <span>상세 스펙 사양</span>
                                <span class="text-slate-400 text-[10px]">Full Spec</span>
                            </div>
                            <p><strong class="text-slate-700">드라이버:</strong> 30mm 신개발 전용 드라이버</p>
                            <p><strong class="text-slate-700">주파수 응답:</strong> 4Hz - 40,000Hz (JEITA)</p>
                            <p><strong class="text-slate-700">오디오 코덱:</strong> LDAC, AAC, SBC 지원</p>
                            <p><strong class="text-slate-700">프로세서:</strong> Integrated Processor V1 + QN1</p>
                            <p><strong class="text-slate-700">블루투스:</strong> Bluetooth Ver 5.2</p>
                            <p><strong class="text-slate-700">마이크:</strong> 8개 마이크 & 멀티 빔포밍</p>
                            <p><strong class="text-slate-700">배터리:</strong> 최대 30시간 (ANC ON) / 40시간 (OFF)</p>
                            <p><strong class="text-slate-700">충전:</strong> USB-PD 3분 충전 시 3시간 재생</p>
                            <p><strong class="text-slate-700">무게:</strong> 약 250g</p>
                            <p><strong class="text-slate-700">케이블:</strong> 약 1.2m OFC 선 포함</p>
                        </div>
                    </div>

                    <!-- BUY BUTTON FOR VERSION A (VWO ELEMENT TRACKING ID: #buy-btn-sony) -->
                    <button id="buy-btn-sony" class="buy-btn w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl shadow-md transition duration-200 flex items-center justify-center space-x-2 active:scale-95">
                        <i class="fa-solid fa-cart-shopping text-sm"></i>
                        <span>구매하기</span>
                    </button>
                </div>
            </div>

            <!-- PRODUCT 2: APPLE -->
            <div class="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden">
                <div class="relative bg-slate-100 p-6 flex items-center justify-center h-52">
                    <span class="absolute top-3 left-3 bg-slate-900 text-white text-[10px] font-bold px-2 py-0.5 rounded">PREMIUM</span>
                    <!-- Apple AirPods Max SVG Illustration -->
                    <svg class="w-36 h-36 object-contain" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M55 115 C55 60, 185 60, 185 115" stroke="#64748b" stroke-width="14" stroke-linecap="round"/>
                        <rect x="40" y="105" width="40" height="60" rx="18" fill="#94a3b8"/>
                        <rect x="160" y="105" width="40" height="60" rx="18" fill="#94a3b8"/>
                        <rect x="46" y="112" width="28" height="46" rx="12" fill="#cbd5e1"/>
                        <rect x="166" y="112" width="28" height="46" rx="12" fill="#cbd5e1"/>
                    </svg>
                </div>

                <div class="p-5 flex-1 flex flex-col justify-between">
                    <div>
                        <div class="text-xs font-bold text-slate-700 mb-1">애플 (Apple)</div>
                        <h4 class="font-bold text-slate-900 text-base mb-1">AirPods Max 무선 헤드폰</h4>
                        <div class="flex items-center space-x-1 text-amber-400 text-xs mb-3">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star-half-stroke"></i>
                            <span class="text-slate-500 font-semibold ml-1">4.8 (980)</span>
                        </div>
                        <div class="text-xl font-black text-slate-900 mb-4">769,000원</div>

                        <!-- VERSION A DETAILED SPECIFICATIONS -->
                        <div class="bg-slate-50 p-3.5 rounded-xl border border-slate-100 mb-5 text-[11px] text-slate-600 space-y-1.5 leading-tight">
                            <div class="font-bold text-slate-800 border-b border-slate-200 pb-1 mb-2 flex justify-between">
                                <span>상세 스펙 사양</span>
                                <span class="text-slate-400 text-[10px]">Full Spec</span>
                            </div>
                            <p><strong class="text-slate-700">칩셋:</strong> 각 컵에 Apple H1 헤드폰 칩 탑재</p>
                            <p><strong class="text-slate-700">오디오:</strong> Apple 자체 설계 다이내믹 드라이버</p>
                            <p><strong class="text-slate-700">공간 오디오:</strong> 동적 헤드 트래킹 기술 지원</p>
                            <p><strong class="text-slate-700">센서:</strong> 광학 센서, 위치 센서, 케이스 감지</p>
                            <p><strong class="text-slate-700">마이크:</strong> 총 9개 마이크 (ANC용 8개)</p>
                            <p><strong class="text-slate-700">제어:</strong> Digital Crown (볼륨, 재생, Siri)</p>
                            <p><strong class="text-slate-700">배터리:</strong> 최대 20시간 (ANC 및 공간 음향 ON)</p>
                            <p><strong class="text-slate-700">충전:</strong> Lightning / USB-C 5분 충전 시 1.5시간</p>
                            <p><strong class="text-slate-700">무게:</strong> 384.8g (Smart Case 134.5g)</p>
                            <p><strong class="text-slate-700">이어쿠션:</strong> 니트 메쉬 헤드밴드 & 메모리 폼</p>
                        </div>
                    </div>

                    <!-- BUY BUTTON FOR VERSION A (VWO ELEMENT TRACKING ID: #buy-btn-apple) -->
                    <button id="buy-btn-apple" class="buy-btn w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-4 rounded-xl shadow-md transition duration-200 flex items-center justify-center space-x-2 active:scale-95">
                        <i class="fa-solid fa-cart-shopping text-sm"></i>
                        <span>구매하기</span>
                    </button>
                </div>
            </div>

            <!-- PRODUCT 3: BOSE -->
            <div class="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden">
                <div class="relative bg-slate-100 p-6 flex items-center justify-center h-52">
                    <span class="absolute top-3 left-3 bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">NEW RELEASE</span>
                    <!-- Bose QuietComfort Ultra SVG Illustration -->
                    <svg class="w-36 h-36 object-contain" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M50 120 C50 60, 190 60, 190 120" stroke="#0f172a" stroke-width="16" stroke-linecap="round"/>
                        <rect x="35" y="105" width="40" height="60" rx="18" fill="#334155"/>
                        <rect x="165" y="105" width="40" height="60" rx="18" fill="#334155"/>
                        <circle cx="55" cy="135" r="8" fill="#94a3b8"/>
                        <circle cx="185" cy="135" r="8" fill="#94a3b8"/>
                    </svg>
                </div>

                <div class="p-5 flex-1 flex flex-col justify-between">
                    <div>
                        <div class="text-xs font-bold text-emerald-600 mb-1">보스 (Bose)</div>
                        <h4 class="font-bold text-slate-900 text-base mb-1">QuietComfort Ultra 헤드폰</h4>
                        <div class="flex items-center space-x-1 text-amber-400 text-xs mb-3">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <span class="text-slate-500 font-semibold ml-1">4.9 (850)</span>
                        </div>
                        <div class="text-xl font-black text-slate-900 mb-4">499,000원</div>

                        <!-- VERSION A DETAILED SPECIFICATIONS -->
                        <div class="bg-slate-50 p-3.5 rounded-xl border border-slate-100 mb-5 text-[11px] text-slate-600 space-y-1.5 leading-tight">
                            <div class="font-bold text-slate-800 border-b border-slate-200 pb-1 mb-2 flex justify-between">
                                <span>상세 스펙 사양</span>
                                <span class="text-slate-400 text-[10px]">Full Spec</span>
                            </div>
                            <p><strong class="text-slate-700">공간 오디오:</strong> Bose Immersive Audio 기술</p>
                            <p><strong class="text-slate-700">소음 제어:</strong> CustomTune 기술 자동 맞춤</p>
                            <p><strong class="text-slate-700">모드 지원:</strong> Quiet, Aware, Immersion 모드</p>
                            <p><strong class="text-slate-700">블루투스:</strong> Bluetooth Ver 5.3 (Snapdragon Sound)</p>
                            <p><strong class="text-slate-700">코덱:</strong> aptX Adaptive, AAC, SBC</p>
                            <p><strong class="text-slate-700">마이크:</strong> 어레이 마이크 음성 전용 시스템</p>
                            <p><strong class="text-slate-700">배터리:</strong> 최대 24시간 (몰입 오디오 ON 시 18시간)</p>
                            <p><strong class="text-slate-700">충전:</strong> USB-C 15분 충전 시 2.5시간 재생</p>
                            <p><strong class="text-slate-700">무게:</strong> 약 252g</p>
                            <p><strong class="text-slate-700">재질:</strong> 고급 인조 가죽 및 캐스트 알루미늄</p>
                        </div>
                    </div>

                    <!-- BUY BUTTON FOR VERSION A (VWO ELEMENT TRACKING ID: #buy-btn-bose) -->
                    <button id="buy-btn-bose" class="buy-btn w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl shadow-md transition duration-200 flex items-center justify-center space-x-2 active:scale-95">
                        <i class="fa-solid fa-cart-shopping text-sm"></i>
                        <span>구매하기</span>
                    </button>
                </div>
            </div>

            <!-- PRODUCT 4: SAMSUNG -->
            <div class="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden">
                <div class="relative bg-slate-100 p-6 flex items-center justify-center h-52">
                    <span class="absolute top-3 left-3 bg-purple-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">POPULAR</span>
                    <!-- Samsung Galaxy Buds 3 Pro SVG Illustration -->
                    <svg class="w-36 h-36 object-contain" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="65" y="85" width="110" height="75" rx="25" fill="#cbd5e1"/>
                        <path d="M80 95 L95 150 L110 95" stroke="#475569" stroke-width="6" stroke-linecap="round"/>
                        <path d="M130 95 L145 150 L160 95" stroke="#475569" stroke-width="6" stroke-linecap="round"/>
                    </svg>
                </div>

                <div class="p-5 flex-1 flex flex-col justify-between">
                    <div>
                        <div class="text-xs font-bold text-purple-600 mb-1">삼성전자 (Samsung)</div>
                        <h4 class="font-bold text-slate-900 text-base mb-1">Galaxy Buds3 Pro 무선 이어폰</h4>
                        <div class="flex items-center space-x-1 text-amber-400 text-xs mb-3">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <span class="text-slate-500 font-semibold ml-1">4.7 (1,890)</span>
                        </div>
                        <div class="text-xl font-black text-slate-900 mb-4">319,000원</div>

                        <!-- VERSION A DETAILED SPECIFICATIONS -->
                        <div class="bg-slate-50 p-3.5 rounded-xl border border-slate-100 mb-5 text-[11px] text-slate-600 space-y-1.5 leading-tight">
                            <div class="font-bold text-slate-800 border-b border-slate-200 pb-1 mb-2 flex justify-between">
                                <span>상세 스펙 사양</span>
                                <span class="text-slate-400 text-[10px]">Full Spec</span>
                            </div>
                            <p><strong class="text-slate-700">스피커:</strong> 2-Way (10.5mm 우퍼 + 6.1mm 트위터)</p>
                            <p><strong class="text-slate-700">오디오 sampling:</strong> 24bit / 96kHz Hi-Fi 오디오</p>
                            <p><strong class="text-slate-700">AI 통번역:</strong> Galaxy AI 실시간 통역 연동</p>
                            <p><strong class="text-slate-700">소음 제어:</strong> 적응형 ANC & 사이렌/사이렌 감지</p>
                            <p><strong class="text-slate-700">방수방진:</strong> IP57 등급 지원</p>
                            <p><strong class="text-slate-700">블루투스:</strong> Bluetooth Ver 5.4</p>
                            <p><strong class="text-slate-700">코덱:</strong> SSC (Seamless Codec), AAC, SBC</p>
                            <p><strong class="text-slate-700">배터리:</strong> 최대 7시간 (케이스 포함 30시간)</p>
                            <p><strong class="text-slate-700">무게:</strong> 유닛당 5.4g (케이스 46.5g)</p>
                            <p><strong class="text-slate-700">라이팅:</strong> 블레이드 라이트 (Blade Lights) 적용</p>
                        </div>
                    </div>

                    <!-- BUY BUTTON FOR VERSION A (VWO ELEMENT TRACKING ID: #buy-btn-samsung) -->
                    <button id="buy-btn-samsung" class="buy-btn w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-xl shadow-md transition duration-200 flex items-center justify-center space-x-2 active:scale-95">
                        <i class="fa-solid fa-cart-shopping text-sm"></i>
                        <span>구매하기</span>
                    </button>
                </div>
            </div>

        </div>

    </main>

    <!-- Footer -->
    <footer class="bg-white border-t border-slate-200 py-8 text-slate-500 text-xs">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-2">
            <p class="font-bold text-slate-700">한성대학교 인터넷 비즈니스 이론 수업 A/B 테스트 실증 연구 프로젝트 [버전 A - 통제군]</p>
            <p>본 웹사이트는 소비자 행동 이론 (Information Overload) 실험을 위해 제작된 대조군(Control Group) 프로토타입입니다.</p>
            <p class="text-slate-400">© 2026 HansungUni Store Experiment Team. All rights reserved.</p>
        </div>
    </footer>

    <!-- Toast Notification for Click Action Feedback -->
    <div id="toast-notification" class="fixed bottom-6 right-6 bg-slate-900 text-white px-5 py-3.5 rounded-2xl shadow-2xl transition-all duration-300 transform translate-y-32 opacity-0 flex items-center space-x-3 z-50 border border-slate-700">
        <div class="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">
            <i class="fa-solid fa-check text-sm"></i>
        </div>
        <div>
            <div id="toast-title" class="font-bold text-sm">구매하기 클릭 이벤트</div>
            <div id="toast-message" class="text-xs text-slate-300">VWO 추적 코드로 이벤트가 수집되었습니다.</div>
        </div>
    </div>

    <!-- Click Listener Script for VWO Goal Simulation -->
    <script>
        document.querySelectorAll('.buy-btn').forEach(button => {
            button.addEventListener('click', function() {
                const elementId = this.id;
                const productName = this.parentElement.querySelector('h4').textContent;
                
                // Show Toast Notification
                showToast(productName, elementId);

                // Log Event for VWO Verification
                console.log(`[VWO GOAL TRACKED] Element ID: #${elementId} | Product: ${productName} | Timestamp: ${new Date().toISOString()}`);
            });
        });

        function showToast(productName, elementId) {
            const toast = document.getElementById('toast-notification');
            const title = document.getElementById('toast-title');
            const msg = document.getElementById('toast-message');

            title.textContent = `'${productName}' 구매 클릭!`;
            msg.textContent = `ID: #${elementId} 클릭 데이터가 VWO Goal에 등록되었습니다.`;

            toast.classList.remove('translate-y-32', 'opacity-0');
            toast.classList.add('translate-y-0', 'opacity-100');

            setTimeout(() => {
                toast.classList.remove('translate-y-0', 'opacity-100');
                toast.classList.add('translate-y-32', 'opacity-0');
            }, 3000);
        }
    </script>
</body>
</html>
