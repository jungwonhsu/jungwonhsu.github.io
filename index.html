```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Điện Máy Xanh - Siêu Thị Điện Máy Trực Tuyến</title>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        dmx: {
                            blue: '#0088da',
                            darkblue: '#0066a5',
                            yellow: '#fff200',
                            gold: '#ffc20e',
                            red: '#d0021b',
                            lightbg: '#f3f4f6'
                        }
                    }
                }
            }
        }
    </script>
    <!-- Font Awesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Roboto', sans-serif;
            background-color: #f4f6f8;
        }
        /* Custom scrollbar for drawer & product lists */
        ::-webkit-scrollbar {
            width: 6px;
            height: 6px;
        }
        ::-webkit-scrollbar-track {
            background: #f1f1f1;
        }
        ::-webkit-scrollbar-thumb {
            background: #ccc;
            border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #aaa;
        }
    </style>
</head>
<body class="text-gray-800 antialiased selection:bg-dmx-yellow selection:text-black">

    <!-- TOP ANNOUNCEMENT BAR -->
    <div class="bg-dmx-darkblue text-white text-xs py-1.5 px-4 text-center font-medium flex justify-between items-center max-w-7xl mx-auto md:px-8">
        <div class="hidden sm:block">⚡ Siêu khuyến mãi tháng 11 - Giao hàng miễn phí toàn quốc cho đơn từ 500k</div>
        <div class="w-full sm:w-auto text-center sm:text-right flex items-center justify-center sm:justify-end gap-4">
            <span><i class="fa-solid fa-headset mr-1"></i> Tổng đài: <strong>1800.1061</strong> (7:30 - 22:00)</span>
            <span class="hidden md:inline">|</span>
            <span class="hidden md:inline"><i class="fa-solid fa-location-dot mr-1"></i> Tìm 3.385 siêu thị</span>
        </div>
    </div>

    <!-- MAIN HEADER -->
    <header class="bg-dmx-blue sticky top-0 z-40 shadow-md">
        <div class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-2 md:gap-6">
            
            <!-- LOGO -->
            <a href="#" onclick="filterByCategory('all'); return false;" class="flex items-center gap-2 group flex-shrink-0">
                <div class="bg-dmx-yellow text-dmx-blue p-2 rounded-full font-black text-xl md:text-2xl tracking-tighter flex items-center justify-center w-10 h-10 md:w-11 md:h-11 shadow-inner group-hover:scale-105 transition-transform">
                    <i class="fa-solid fa-plug"></i>
                </div>
                <div class="flex flex-col leading-none">
                    <span class="font-extrabold text-white text-lg md:text-2xl tracking-tight uppercase">ĐIỆN MÁY <span class="text-dmx-yellow">XANH</span></span>
                    <span class="text-[10px] text-blue-100 font-medium hidden sm:inline">Bao xài đổi trả 12 tháng</span>
                </div>
            </a>

            <!-- SEARCH BAR -->
            <div class="flex-1 max-w-2xl relative">
                <div class="relative flex items-center">
                    <input type="text" id="searchInput" oninput="handleSearch()" placeholder="Bạn tìm gì? Tivi, Tủ lạnh, Máy giặt..." 
                        class="w-full pl-4 pr-10 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-dmx-yellow shadow-inner text-gray-800">
                    <button onclick="handleSearchBtn()" class="absolute right-1 text-gray-500 hover:text-dmx-blue p-2">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
                <!-- Autocomplete Dropdown Simulation -->
                <div id="searchSuggestions" class="hidden absolute left-0 right-0 top-full mt-1 bg-white rounded-lg shadow-xl border border-gray-200 z-50 overflow-hidden">
                </div>
            </div>

            <!-- ACTION BUTTONS -->
            <div class="flex items-center gap-2 md:gap-4 text-white text-xs md:text-sm font-medium">
                <!-- User Account -->
                <button class="hidden lg:flex items-center gap-2 hover:bg-dmx-darkblue px-3 py-2 rounded-lg transition-colors">
                    <i class="fa-regular fa-user text-lg"></i>
                    <span class="text-left leading-tight">Đăng nhập /<br><strong class="font-semibold">Tài khoản</strong></span>
                </button>

                <!-- Cart Button -->
                <button onclick="toggleCartDrawer(true)" class="flex items-center gap-2 bg-dmx-yellow text-dmx-darkblue font-bold px-3.5 py-2 rounded-lg hover:bg-yellow-300 transition-transform active:scale-95 shadow relative">
                    <i class="fa-solid fa-cart-shopping text-base md:text-lg"></i>
                    <span class="hidden sm:inline">Giỏ hàng</span>
                    <span id="cartBadge" class="bg-dmx-red text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-extrabold border-2 border-white">0</span>
                </button>
            </div>
        </div>

        <!-- MAIN CATEGORY NAV BAR -->
        <nav class="bg-dmx-darkblue text-white border-t border-blue-400/30 overflow-x-auto whitespace-nowrap scrollbar-none">
            <div class="max-w-7xl mx-auto px-4 flex items-center text-xs md:text-sm font-medium">
                <button onclick="filterByCategory('all')" class="nav-item py-2.5 px-3 md:px-4 hover:bg-dmx-blue border-b-2 border-dmx-yellow flex items-center gap-2">
                    <i class="fa-solid fa-border-all"></i> Tất cả
                </button>
                <button onclick="filterByCategory('tivi')" class="nav-item py-2.5 px-3 md:px-4 hover:bg-dmx-blue border-b-2 border-transparent flex items-center gap-2">
                    <i class="fa-solid fa-tv"></i> Tivi
                </button>
                <button onclick="filterByCategory('tulanh')" class="nav-item py-2.5 px-3 md:px-4 hover:bg-dmx-blue border-b-2 border-transparent flex items-center gap-2">
                    <i class="fa-solid fa-box-archive"></i> Tủ lạnh
                </button>
                <button onclick="filterByCategory('maygiat')" class="nav-item py-2.5 px-3 md:px-4 hover:bg-dmx-blue border-b-2 border-transparent flex items-center gap-2">
                    <i class="fa-solid fa-soap"></i> Máy giặt
                </button>
                <button onclick="filterByCategory('dieuhoa')" class="nav-item py-2.5 px-3 md:px-4 hover:bg-dmx-blue border-b-2 border-transparent flex items-center gap-2">
                    <i class="fa-solid fa-snowflake"></i> Máy lạnh
                </button>
                <button onclick="filterByCategory('giadung')" class="nav-item py-2.5 px-3 md:px-4 hover:bg-dmx-blue border-b-2 border-transparent flex items-center gap-2">
                    <i class="fa-solid fa-kitchen-set"></i> Gia dụng
                </button>
                <button onclick="filterByCategory('giadung')" class="nav-item py-2.5 px-3 md:px-4 hover:bg-dmx-blue border-b-2 border-transparent flex items-center gap-2">
                    <i class="fa-solid fa-mobile-screen-button"></i> Điện thoại
                </button>
                <button onclick="filterByCategory('giadung')" class="nav-item py-2.5 px-3 md:px-4 hover:bg-dmx-blue border-b-2 border-transparent flex items-center gap-2">
                    <i class="fa-solid fa-laptop"></i> Laptop
                </button>
                <span class="ml-auto py-2.5 px-3 text-dmx-yellow font-bold hidden lg:flex items-center gap-1">
                    <i class="fa-solid fa-bolt"></i> Giá rẻ mỗi ngày
                </span>
            </div>
        </nav>
    </header>

    <!-- MAIN CONTAINER -->
    <main class="max-w-7xl mx-auto px-4 py-6 space-y-8">

        <!-- HERO BANNER SECTION -->
        <section class="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <!-- Main Slider Simulation -->
            <div class="lg:col-span-2 relative bg-gradient-to-r from-blue-900 via-dmx-blue to-cyan-700 text-white rounded-2xl overflow-hidden shadow-lg min-h-[220px] md:min-h-[300px] flex items-center p-6 md:p-10">
                <div class="z-10 space-y-3 max-w-md">
                    <span class="bg-dmx-yellow text-dmx-darkblue text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider inline-block">Đại hội Điện Máy</span>
                    <h2 class="text-2xl md:text-4xl font-extrabold leading-tight">Sắm Tivi 4K & Tủ Lạnh Inverter</h2>
                    <p class="text-sm text-blue-100">Giảm trực tiếp đến 45% + Miễn phí lắp đặt tại nhà trong 2 giờ!</p>
                    <button onclick="filterByCategory('tivi')" class="bg-dmx-yellow text-black font-extrabold px-6 py-2.5 rounded-xl hover:bg-yellow-300 transition-all shadow-lg transform hover:scale-105 inline-block text-sm">
                        Khám phá ngay <i class="fa-solid fa-arrow-right ml-1"></i>
                    </button>
                </div>
                <div class="absolute right-0 bottom-0 top-0 w-1/2 opacity-30 md:opacity-90 flex items-center justify-center pointer-events-none">
                    <i class="fa-solid fa-tv text-9xl text-white/20 transform rotate-6"></i>
                    <i class="fa-solid fa-box-archive text-8xl text-dmx-yellow/30 transform -rotate-12 absolute -left-10"></i>
                </div>
            </div>

            <!-- Promo Side Cards -->
            <div class="grid grid-cols-2 lg:grid-cols-1 gap-4">
                <div class="bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl p-4 text-white shadow flex flex-col justify-between relative overflow-hidden">
                    <div>
                        <span class="text-xs bg-black/20 font-bold px-2 py-0.5 rounded">Trả góp 0%</span>
                        <h3 class="font-extrabold text-base md:text-lg mt-1">Máy Giặt LG TurboWash</h3>
                        <p class="text-xs text-amber-100">Giặt sạch cực nhanh, tiết kiệm điện</p>
                    </div>
                    <div class="mt-3 flex justify-between items-end">
                        <span class="text-lg md:text-xl font-black">Chỉ từ 6.990.000đ</span>
                        <i class="fa-solid fa-shirt text-3xl opacity-40"></i>
                    </div>
                </div>
                <div class="bg-gradient-to-br from-emerald-500 to-teal-700 rounded-2xl p-4 text-white shadow flex flex-col justify-between relative overflow-hidden">
                    <div>
                        <span class="text-xs bg-black/20 font-bold px-2 py-0.5 rounded">Bảo hành 2 năm</span>
                        <h3 class="font-extrabold text-base md:text-lg mt-1">Nồi Cơm Điện Panasonic</h3>
                        <p class="text-xs text-emerald-100">Lòng nồi 5 lớp chống dính</p>
                    </div>
                    <div class="mt-3 flex justify-between items-end">
                        <span class="text-lg md:text-xl font-black">Giảm ngay 30%</span>
                        <i class="fa-solid fa-bowl-rice text-3xl opacity-40"></i>
                    </div>
                </div>
            </div>
        </section>

        <!-- FLASH SALE SECTION -->
        <section class="bg-gradient-to-r from-red-600 via-red-500 to-orange-500 rounded-2xl p-4 md:p-6 text-white shadow-xl">
            <!-- Header Flash Sale -->
            <div class="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-red-400/50 pb-4 mb-4">
                <div class="flex items-center gap-3">
                    <div class="bg-dmx-yellow text-dmx-red p-2 rounded-xl text-xl font-black animate-bounce">
                        <i class="fa-solid fa-bolt-lightning"></i>
                    </div>
                    <div>
                        <h2 class="text-xl md:text-2xl font-black uppercase tracking-wide">GIỜ VÀNG - SĂN SẢN PHẨM GIÁ SỐC</h2>
                        <p class="text-xs text-red-100">Số lượng có hạn, ưu đãi kết thúc sau:</p>
                    </div>
                </div>
                <!-- Countdown Timer -->
                <div class="flex items-center gap-2 font-mono text-sm font-bold bg-black/30 px-4 py-2 rounded-xl border border-red-300/30">
                    <span class="text-xs text-red-200">Kết thúc trong</span>
                    <span id="timerHours" class="bg-white text-red-600 px-2 py-1 rounded">04</span> :
                    <span id="timerMinutes" class="bg-white text-red-600 px-2 py-1 rounded">25</span> :
                    <span id="timerSeconds" class="bg-white text-red-600 px-2 py-1 rounded">12</span>
                </div>
            </div>

            <!-- Flash Sale Items Horizontal Grid -->
            <div id="flashSaleGrid" class="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                <!-- Rendered dynamically -->
            </div>
        </section>

        <!-- MAIN PRODUCTS DISPLAY SECTION -->
        <section class="space-y-4">
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <div>
                    <h2 id="currentCategoryTitle" class="text-xl font-extrabold text-gray-900 uppercase">Tất Cả Sản Phẩm Nổi Bật</h2>
                    <p class="text-xs text-gray-500">Cam kết 100% chính hãng - Bảo hành tận nơi</p>
                </div>

                <!-- Sort & Quick Filter -->
                <div class="flex items-center gap-2 text-xs md:text-sm w-full sm:w-auto">
                    <span class="text-gray-500 font-medium whitespace-nowrap"><i class="fa-solid fa-filter mr-1"></i> Sắp xếp:</span>
                    <select id="sortSelect" onchange="handleSort()" class="bg-gray-100 border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-dmx-blue text-gray-700 font-medium w-full sm:w-auto">
                        <option value="featured">Nổi bật nhất</option>
                        <option value="price-asc">Giá thấp đến cao</option>
                        <option value="price-desc">Giá cao đến thấp</option>
                        <option value="discount">Giảm giá nhiều nhất</option>
                    </select>
                </div>
            </div>

            <!-- PRODUCT GRID -->
            <div id="productGrid" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
                <!-- Dynamic Product Cards Injection -->
            </div>
        </section>

        <!-- TRUST BADGES / SERVICE PROMISES -->
        <section class="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
            <div class="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3">
                <i class="fa-solid fa-truck-fast text-3xl text-dmx-blue"></i>
                <div>
                    <h4 class="font-bold text-sm">Giao hàng nhanh chóng</h4>
                    <p class="text-xs text-gray-500">Giao trong 2 giờ tại 63 tỉnh thành</p>
                </div>
            </div>
            <div class="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3">
                <i class="fa-solid fa-arrow-rotate-left text-3xl text-dmx-blue"></i>
                <div>
                    <h4 class="font-bold text-sm">1 Đổi 1 trong 30 ngày</h4>
                    <p class="text-xs text-gray-500">Nếu sản phẩm lỗi do nhà sản xuất</p>
                </div>
            </div>
            <div class="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3">
                <i class="fa-solid fa-shield-halved text-3xl text-dmx-blue"></i>
                <div>
                    <h4 class="font-bold text-sm">Bảo hành chính hãng</h4>
                    <p class="text-xs text-gray-500">Bảo hành tận nhà đến 24 tháng</p>
                </div>
            </div>
            <div class="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3">
                <i class="fa-solid fa-credit-card text-3xl text-dmx-blue"></i>
                <div>
                    <h4 class="font-bold text-sm">Trả góp 0% lãi suất</h4>
                    <p class="text-xs text-gray-500">Thủ tục đơn giản, duyệt hồ sơ 5 phút</p>
                </div>
            </div>
        </section>

    </main>

    <!-- FOOTER -->
    <footer class="bg-gray-900 text-gray-300 pt-10 pb-6 text-xs md:text-sm border-t-4 border-dmx-yellow">
        <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
            <!-- Col 1 -->
            <div class="space-y-3">
                <div class="flex items-center gap-2">
                    <div class="bg-dmx-yellow text-dmx-blue p-1.5 rounded-full font-black text-lg">
                        <i class="fa-solid fa-plug"></i>
                    </div>
                    <span class="font-extrabold text-white text-xl">ĐIỆN MÁY <span class="text-dmx-yellow">XANH</span></span>
                </div>
                <p class="text-gray-400">Hệ thống siêu thị điện máy có doanh thu và số lượng cửa hàng lớn nhất Việt Nam.</p>
                <div class="pt-2">
                    <p class="font-bold text-white mb-1">Tổng đài hỗ trợ (Miễn phí):</p>
                    <p>Gọi mua: <strong class="text-dmx-yellow">1800.1061</strong> (7:30 - 22:00)</p>
                    <p>Kỹ thuật: <strong class="text-dmx-yellow">1800.1764</strong> (7:30 - 22:00)</p>
                    <p>Bảo hành: <strong class="text-dmx-yellow">1800.1065</strong> (8:00 - 21:00)</p>
                </div>
            </div>

            <!-- Col 2 -->
            <div>
                <h4 class="font-bold text-white text-base mb-3 border-l-4 border-dmx-yellow pl-2">Thông Tin Hỗ Trợ</h4>
                <ul class="space-y-2 text-gray-400">
                    <li><a href="#" class="hover:text-white transition">Chính sách bảo hành</a></li>
                    <li><a href="#" class="hover:text-white transition">Chính sách đổi trả sản phẩm</a></li>
                    <li><a href="#" class="hover:text-white transition">Giao hàng & Lắp đặt</a></li>
                    <li><a href="#" class="hover:text-white transition">Hướng dẫn mua hàng online</a></li>
                    <li><a href="#" class="hover:text-white transition">Mua trả góp thủ tục thế nào</a></li>
                </ul>
            </div>

            <!-- Col 3 -->
            <div>
                <h4 class="font-bold text-white text-base mb-3 border-l-4 border-dmx-yellow pl-2">Về Chúng Tôi</h4>
                <ul class="space-y-2 text-gray-400">
                    <li><a href="#" class="hover:text-white transition">Giới thiệu công ty</a></li>
                    <li><a href="#" class="hover:text-white transition">Tuyển dụng mới nhất</a></li>
                    <li><a href="#" class="hover:text-white transition">Gửi góp ý, khiếu nại</a></li>
                    <li><a href="#" class="hover:text-white transition">Tìm siêu thị (3.385 shop)</a></li>
                </ul>
            </div>

            <!-- Col 4 -->
            <div>
                <h4 class="font-bold text-white text-base mb-3 border-l-4 border-dmx-yellow pl-2">Phương Thức Thanh Toán</h4>
                <div class="flex flex-wrap gap-2 mb-4">
                    <span class="bg-white/10 px-3 py-1.5 rounded text-xs font-semibold text-white">VietQR</span>
                    <span class="bg-white/10 px-3 py-1.5 rounded text-xs font-semibold text-white">MoMo</span>
                    <span class="bg-white/10 px-3 py-1.5 rounded text-xs font-semibold text-white">Visa/Mastercard</span>
                    <span class="bg-white/10 px-3 py-1.5 rounded text-xs font-semibold text-white">Tiền mặt (COD)</span>
                </div>
                <h4 class="font-bold text-white text-base mb-2">Kết nối với chúng tôi</h4>
                <div class="flex gap-3 text-lg">
                    <a href="#" class="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center hover:opacity-80"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#" class="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center hover:opacity-80"><i class="fa-brands fa-youtube"></i></a>
                    <a href="#" class="w-8 h-8 rounded-full bg-pink-600 text-white flex items-center justify-center hover:opacity-80"><i class="fa-brands fa-tiktok"></i></a>
                </div>
            </div>
        </div>
        
        <div class="max-w-7xl mx-auto px-4 mt-8 pt-6 border-t border-gray-800 text-center text-gray-500 text-xs">
            © 2026 Bản quyền thuộc về Công ty Cổ phần Thế Giới Di Động / Điện Máy Xanh Demo UI.
        </div>
    </footer>

    <!-- PRODUCT DETAIL MODAL -->
    <div id="productModal" class="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 opacity-0 pointer-events-none transition-opacity duration-300">
        <div class="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative p-4 md:p-6">
            <button onclick="closeProductModal()" class="absolute top-4 right-4 text-gray-400 hover:text-gray-700 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-lg z-10">
                <i class="fa-solid fa-xmark"></i>
            </button>
            <div id="modalContent" class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Dynamically filled -->
            </div>
        </div>
    </div>

    <!-- CART DRAWER -->
    <div id="cartDrawer" class="fixed inset-0 z-50 pointer-events-none">
        <!-- Backdrop -->
        <div id="cartBackdrop" onclick="toggleCartDrawer(false)" class="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300"></div>
        
        <!-- Drawer Body -->
        <div id="cartPanel" class="absolute top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl transform translate-x-full transition-transform duration-300 pointer-events-auto flex flex-col">
            <!-- Drawer Header -->
            <div class="bg-dmx-blue text-white p-4 flex items-center justify-between">
                <div class="flex items-center gap-2">
                    <i class="fa-solid fa-cart-shopping text-xl"></i>
                    <h3 class="font-extrabold text-lg">Giỏ Hàng Của Bạn</h3>
                </div>
                <button onclick="toggleCartDrawer(false)" class="text-white hover:text-dmx-yellow text-xl">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>

            <!-- Cart Items List -->
            <div id="cartItemsContainer" class="flex-1 overflow-y-auto p-4 space-y-4">
                <!-- Dynamically populated -->
            </div>

            <!-- Drawer Footer / Summary -->
            <div class="p-4 border-t border-gray-200 bg-gray-50 space-y-3">
                <div class="flex justify-between items-center text-sm">
                    <span class="text-gray-600 font-medium">Tổng tiền tạm tính:</span>
                    <span id="cartTotalPrice" class="text-xl font-black text-dmx-red">0₫</span>
                </div>
                <p class="text-[11px] text-gray-500 text-center"><i class="fa-solid fa-truck"></i> Miễn phí giao hàng & lắp đặt tận nơi</p>
                <button onclick="checkoutSimulated()" class="w-full bg-dmx-red hover:bg-red-700 text-white font-extrabold py-3 rounded-xl shadow-lg transition transform active:scale-95 uppercase tracking-wide flex items-center justify-center gap-2">
                    Tiến hành đặt hàng <i class="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    </div>

    <!-- TOAST NOTIFICATION CONTAINER -->
    <div id="toastContainer" class="fixed bottom-5 right-5 z-50 flex flex-col gap-2"></div>

    <!-- APPLICATION JAVASCRIPT LOGIC -->
    <script>
        // Sample Product Database
        const products = [
            {
                id: 1,
                name: "Smart TV Samsung 4K 55 inch UA55AU7002",
                category: "tivi",
                price: 9990000,
                oldPrice: 14900000,
                rating: 4.8,
                reviews: 142,
                image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=600&q=80",
                badge: "Trả góp 0%",
                flashSale: true,
                soldCount: 38,
                stock: 50,
                specs: {
                    screen: "55 inch 4K Ultra HD",
                    os: "Tizen OS",
                    tech: "PurColor, Crystal Processor 4K",
                    origin: "Việt Nam (Năm 2023)"
                }
            },
            {
                id: 2,
                name: "Tủ Lạnh Toshiba Inverter 180 Lít GR-RT252WE-PMV(06)-MG",
                category: "tulanh",
                price: 5290000,
                oldPrice: 6890000,
                rating: 4.7,
                reviews: 89,
                image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&w=600&q=80",
                badge: "Trả góp 0%",
                flashSale: true,
                soldCount: 42,
                stock: 45,
                specs: {
                    capacity: "180 Lít (1-3 người)",
                    tech: "Origin Inverter, Kháng khuẩn Ag+ Bio",
                    power: "~0.89 kW/ngày",
                    origin: "Thái Lan"
                }
            },
            {
                id: 3,
                name: "Máy Giặt LG AI DD Inverter 9kg FV1409S4W",
                category: "maygiat",
                price: 8490000,
                oldPrice: 11990000,
                rating: 4.9,
                reviews: 210,
                image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=600&q=80",
                badge: "Bán chạy #1",
                flashSale: true,
                soldCount: 29,
                stock: 30,
                specs: {
                    type: "Cửa trước - Lồng ngang",
                    tech: "AI DD nhận biết sợi vải, Giặt hơi nước Steam",
                    motor: "Truyền động trực tiếp",
                    origin: "Việt Nam"
                }
            },
            {
                id: 4,
                name: "Máy Lạnh Panasonic Inverter 1 HP CU/CS-PU9XKH-8M",
                category: "dieuhoa",
                price: 9490000,
                oldPrice: 11290000,
                rating: 4.8,
                reviews: 75,
                image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80",
                badge: "Tiết kiệm điện 5 sao",
                flashSale: false,
                soldCount: 15,
                stock: 20,
                specs: {
                    power: "1 HP (Dưới 15m²)",
                    tech: "Nanoe-G lọc bụi mịn PM2.5, Eco tích hợp A.I",
                    guarantee: "1 đổi 1 trong 1 năm",
                    origin: "Malaysia"
                }
            },
            {
                id: 5,
                name: "Nồi Chiên Không Dầu Philips 4.1 Lít HD9200/90",
                category: "giadung",
                price: 1590000,
                oldPrice: 2490000,
                rating: 4.6,
                reviews: 312,
                image: "https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=600&q=80",
                badge: "Giảm 36%",
                flashSale: true,
                soldCount: 88,
                stock: 100,
                specs: {
                    capacity: "4.1 Lít",
                    power: "1400W",
                    tech: "Rapid Air chiên nướng ít mỡ 90%",
                    origin: "Trung Quốc"
                }
            },
            {
                id: 6,
                name: "Android Tivi Sony 4K 65 inch KD-65X75K",
                category: "tivi",
                price: 13990000,
                oldPrice: 18900000,
                rating: 4.9,
                reviews: 98,
                image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80",
                badge: "Trả góp 0%",
                flashSale: false,
                soldCount: 10,
                stock: 25,
                specs: {
                    screen: "65 inch 4K Ultra HD",
                    os: "Google TV",
                    sound: "Dolby Audio, X-Balanced Speaker",
                    origin: "Việt Nam"
                }
            },
            {
                id: 7,
                name: "Tủ Lạnh Side By Side Samsung 647 Lít RS62R5001M9/SV",
                category: "tulanh",
                price: 16490000,
                oldPrice: 22990000,
                rating: 4.8,
                reviews: 64,
                image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=600&q=80",
                badge: "Trả góp 0%",
                flashSale: false,
                soldCount: 8,
                stock: 12,
                specs: {
                    capacity: "647 Lít (Trên 5 người)",
                    tech: "Digital Inverter, Vòi lấy nước ngoài",
                    guarantee: "Bảo hành máy nén 20 năm",
                    origin: "Trung Quốc"
                }
            },
            {
                id: 8,
                name: "Nồi Cơm Điện Cao Tần Tefal 1.5 Lít RK604165",
                category: "giadung",
                price: 1890000,
                oldPrice: 2690000,
                rating: 4.7,
                reviews: 53,
                image: "https://images.unsplash.com/photo-1544233726-9f1d2b27be8b?auto=format&fit=crop&w=600&q=80",
                badge: "Quà tặng 200k",
                flashSale: false,
                soldCount: 19,
                stock: 40,
                specs: {
                    capacity: "1.5 Lít",
                    power: "1200W",
                    tech: "Cảm ứng điện từ IH, Lòng nồi niêu 6 lớp",
                    origin: "Trung Quốc"
                }
            }
        ];

        // Global State
        let currentFilter = 'all';
        let searchQuery = '';
        let sortOption = 'featured';
        let cart = JSON.parse(localStorage.getItem('dmx_cart')) || [];

        // Utility: Format Currency VND
        function formatVND(amount) {
            return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
        }

        // Initialize Page
        document.addEventListener('DOMContentLoaded', () => {
            renderFlashSale();
            renderProducts();
            updateCartUI();
            startCountdown();
        });

        // Filter Products Logic
        function filterByCategory(category) {
            currentFilter = category;
            
            // Highlight active nav item
            document.querySelectorAll('.nav-item').forEach(btn => {
                if (btn.getAttribute('onclick').includes(category)) {
                    btn.classList.add('border-dmx-yellow', 'bg-dmx-blue');
                    btn.classList.remove('border-transparent');
                } else {
                    btn.classList.remove('border-dmx-yellow', 'bg-dmx-blue');
                    btn.classList.add('border-transparent');
                }
            });

            // Update Title
            const titles = {
                all: "Tất Cả Sản Phẩm Nổi Bật",
                tivi: "Tivi Thông Minh Chính Hãng",
                tulanh: "Tủ Lạnh Inverter Tiết Kiệm Điện",
                maygiat: "Máy Giặt Cao Cấp",
                dieuhoa: "Máy Lạnh - Điều Hòa Không Khí",
                giadung: "Đồ Gia Dụng Nhà Bếp"
            };
            document.getElementById('currentCategoryTitle').innerText = titles[category] || "Danh Sách Sản Phẩm";

            renderProducts();
        }

        // Search Input Handling
        function handleSearch() {
            const query = document.getElementById('searchInput').value.trim().toLowerCase();
            const suggestionsBox = document.getElementById('searchSuggestions');
            
            if (query.length === 0) {
                suggestionsBox.classList.add('hidden');
                searchQuery = '';
                renderProducts();
                return;
            }

            const matched = products.filter(p => p.name.toLowerCase().includes(query));

            if (matched.length > 0) {
                suggestionsBox.innerHTML = matched.slice(0, 5).map(p => `
                    <div onclick="selectSearchItem('${p.name.replace(/'/g, "\\'")}')" class="p-3 hover:bg-gray-100 cursor-pointer flex items-center justify-between border-b border-gray-100">
                        <div class="flex items-center gap-3">
                            <img src="${p.image}" class="w-10 h-10 object-cover rounded" alt="${p.name}">
                            <div>
                                <p class="text-sm font-bold text-gray-800">${p.name}</p>
                                <span class="text-xs text-dmx-red font-bold">${formatVND(p.price)}</span>
                            </div>
                        </div>
                        <i class="fa-solid fa-arrow-right text-gray-400 text-xs"></i>
                    </div>
                `).join('');
                suggestionsBox.classList.remove('hidden');
            } else {
                suggestionsBox.innerHTML = `<div class="p-4 text-xs text-gray-500 text-center">Không tìm thấy sản phẩm nào phù hợp</div>`;
                suggestionsBox.classList.remove('hidden');
            }

            searchQuery = query;
            renderProducts();
        }

        function selectSearchItem(name) {
            document.getElementById('searchInput').value = name;
            document.getElementById('searchSuggestions').classList.add('hidden');
            searchQuery = name.toLowerCase();
            renderProducts();
        }

        function handleSearchBtn() {
            renderProducts();
            document.getElementById('searchSuggestions').classList.add('hidden');
        }

        // Sorting Logic
        function handleSort() {
            sortOption = document.getElementById('sortSelect').value;
            renderProducts();
        }

        // Render Flash Sale Section
        function renderFlashSale() {
            const flashSaleItems = products.filter(p => p.flashSale);
            const container = document.getElementById('flashSaleGrid');
            
            container.innerHTML = flashSaleItems.map(item => {
                const discount = Math.round(((item.oldPrice - item.price) / item.oldPrice) * 100);
                const percentSold = Math.round((item.soldCount / item.stock) * 100);
                
                return `
                    <div class="bg-white rounded-xl p-3 text-gray-800 shadow-md flex flex-col justify-between hover:shadow-xl transition transform hover:-translate-y-1">
                        <div class="relative">
                            <span class="absolute top-0 left-0 bg-dmx-red text-white text-[10px] font-extrabold px-2 py-0.5 rounded-br-lg z-10">
                                -${discount}%
                            </span>
                            <img src="${item.image}" class="w-full h-32 md:h-36 object-contain rounded-lg p-2" alt="${item.name}">
                        </div>
                        <div class="mt-2 space-y-1">
                            <h4 class="text-xs md:text-sm font-bold line-clamp-2 hover:text-dmx-blue cursor-pointer" onclick="openProductModal(${item.id})">${item.name}</h4>
                            <div class="flex items-baseline gap-2">
                                <span class="text-dmx-red font-black text-sm md:text-base">${formatVND(item.price)}</span>
                                <span class="text-gray-400 text-xs line-through">${formatVND(item.oldPrice)}</span>
                            </div>
                            
                            <!-- Progress Bar -->
                            <div class="w-full bg-gray-200 h-3.5 rounded-full overflow-hidden relative mt-2">
                                <div class="bg-gradient-to-r from-yellow-400 to-red-500 h-full" style="width: ${percentSold}%"></div>
                                <span class="absolute inset-0 text-[9px] font-extrabold text-white flex items-center justify-center uppercase tracking-tighter drop-shadow">
                                    Đã bán ${item.soldCount}/${item.stock}
                                </span>
                            </div>
                        </div>
                        <button onclick="addToCart(${item.id})" class="mt-3 w-full bg-dmx-yellow hover:bg-yellow-400 text-dmx-darkblue text-xs font-extrabold py-2 rounded-lg transition flex items-center justify-center gap-1">
                            <i class="fa-solid fa-cart-plus"></i> Chọn Mua
                        </button>
                    </div>
                `;
            }).join('');
        }

        // Render Main Products Grid
        function renderProducts() {
            let filtered = products;

            // Apply Category Filter
            if (currentFilter !== 'all') {
                filtered = filtered.filter(p => p.category === currentFilter);
            }

            // Apply Search Filter
            if (searchQuery) {
                filtered = filtered.filter(p => p.name.toLowerCase().includes(searchQuery));
            }

            // Apply Sort
            if (sortOption === 'price-asc') {
                filtered.sort((a, b) => a.price - b.price);
            } else if (sortOption === 'price-desc') {
                filtered.sort((a, b) => b.price - a.price);
            } else if (sortOption === 'discount') {
                filtered.sort((a, b) => (b.oldPrice - b.price) - (a.oldPrice - a.price));
            }

            const grid = document.getElementById('productGrid');
            if (filtered.length === 0) {
                grid.innerHTML = `
                    <div class="col-span-full py-12 text-center bg-white rounded-xl shadow-sm">
                        <i class="fa-solid fa-box-open text-5xl text-gray-300 mb-3"></i>
                        <p class="text-gray-500 font-medium">Không tìm thấy sản phẩm phù hợp với yêu cầu của bạn.</p>
                        <button onclick="filterByCategory('all')" class="mt-3 text-dmx-blue text-sm font-bold underline">Xem tất cả sản phẩm</button>
                    </div>
                `;
                return;
            }

            grid.innerHTML = filtered.map(item => {
                const discount = Math.round(((item.oldPrice - item.price) / item.oldPrice) * 100);
                return `
                    <div class="bg-white rounded-2xl p-3 md:p-4 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                        <div>
                            <!-- Badges -->
                            <div class="flex items-center justify-between text-[11px] font-extrabold mb-2">
                                <span class="bg-blue-50 text-dmx-blue px-2 py-0.5 rounded-full border border-blue-200">${item.badge}</span>
                                <span class="bg-red-50 text-dmx-red px-1.5 py-0.5 rounded font-bold">-${discount}%</span>
                            </div>

                            <!-- Product Image -->
                            <div class="overflow-hidden rounded-xl mb-3 cursor-pointer" onclick="openProductModal(${item.id})">
                                <img src="${item.image}" class="w-full h-40 md:h-48 object-contain group-hover:scale-105 transition-transform duration-300" alt="${item.name}">
                            </div>

                            <!-- Title -->
                            <h3 onclick="openProductModal(${item.id})" class="text-xs md:text-sm font-bold text-gray-800 hover:text-dmx-blue line-clamp-2 cursor-pointer mb-2 leading-snug">
                                ${item.name}
                            </h3>

                            <!-- Specs Chips -->
                            <div class="text-[11px] text-gray-500 bg-gray-50 p-2 rounded-lg mb-3 space-y-0.5">
                                <p class="truncate"><i class="fa-solid fa-check text-green-500 mr-1"></i>${Object.values(item.specs)[0]}</p>
                                <p class="truncate"><i class="fa-solid fa-check text-green-500 mr-1"></i>${Object.values(item.specs)[1]}</p>
                            </div>
                        </div>

                        <div>
                            <!-- Rating -->
                            <div class="flex items-center gap-1 text-xs text-amber-400 mb-2">
                                <i class="fa-solid fa-star"></i>
                                <span class="font-bold text-gray-700 text-xs">${item.rating}</span>
                                <span class="text-gray-400 text-[10px]">(${item.reviews})</span>
                            </div>

                            <!-- Price Tag -->
                            <div class="flex items-baseline gap-2 mb-3">
                                <span class="text-dmx-red font-black text-sm md:text-lg">${formatVND(item.price)}</span>
                                <span class="text-gray-400 text-xs line-through">${formatVND(item.oldPrice)}</span>
                            </div>

                            <!-- Action Buttons -->
                            <div class="grid grid-cols-4 gap-2">
                                <button onclick="openProductModal(${item.id})" class="col-span-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-xl text-xs font-bold transition flex items-center justify-center">
                                    <i class="fa-regular fa-eye"></i>
                                </button>
                                <button onclick="addToCart(${item.id})" class="col-span-3 bg-dmx-blue hover:bg-dmx-darkblue text-white py-2 rounded-xl text-xs font-bold transition shadow flex items-center justify-center gap-1 active:scale-95">
                                    <i class="fa-solid fa-cart-plus"></i> Chọn mua
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
        }

        // Cart Logic
        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            const existing = cart.find(item => item.id === productId);

            if (existing) {
                existing.quantity += 1;
            } else {
                cart.push({ ...product, quantity: 1 });
            }

            saveCart();
            updateCartUI();
            showToast(`Đã thêm <strong>${product.name}</strong> vào giỏ hàng!`);
        }

        function updateCartQuantity(productId, delta) {
            const index = cart.findIndex(item => item.id === productId);
            if (index !== -1) {
                cart[index].quantity += delta;
                if (cart[index].quantity <= 0) {
                    cart.splice(index, 1);
                }
            }
            saveCart();
            updateCartUI();
        }

        function saveCart() {
            localStorage.setItem('dmx_cart', JSON.stringify(cart));
        }

        function updateCartUI() {
            const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
            const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

            // Update Badge
            document.getElementById('cartBadge').innerText = totalCount;
            document.getElementById('cartTotalPrice').innerText = formatVND(totalPrice);

            // Render Drawer Items
            const container = document.getElementById('cartItemsContainer');
            if (cart.length === 0) {
                container.innerHTML = `
                    <div class="h-full flex flex-col items-center justify-center text-center p-6 text-gray-400 space-y-3">
                        <i class="fa-solid fa-cart-arrow-down text-6xl text-gray-300"></i>
                        <p class="font-medium text-sm">Giỏ hàng của bạn đang trống</p>
                        <button onclick="toggleCartDrawer(false)" class="text-xs bg-dmx-blue text-white px-4 py-2 rounded-lg font-bold">Tiếp tục mua sắm</button>
                    </div>
                `;
                return;
            }

            container.innerHTML = cart.map(item => `
                <div class="flex items-center gap-3 bg-gray-50 p-3 rounded-xl border border-gray-100">
                    <img src="${item.image}" class="w-16 h-16 object-contain bg-white rounded-lg p-1 border" alt="${item.name}">
                    <div class="flex-1 min-w-0">
                        <h4 class="text-xs font-bold text-gray-800 truncate">${item.name}</h4>
                        <div class="text-dmx-red font-black text-sm mt-0.5">${formatVND(item.price)}</div>
                        
                        <!-- Quantity Control -->
                        <div class="flex items-center gap-2 mt-2">
                            <button onclick="updateCartQuantity(${item.id}, -1)" class="w-6 h-6 rounded-md bg-white border border-gray-300 text-gray-600 font-bold text-xs flex items-center justify-center hover:bg-gray-100">-</button>
                            <span class="text-xs font-bold text-gray-800 w-4 text-center">${item.quantity}</span>
                            <button onclick="updateCartQuantity(${item.id}, 1)" class="w-6 h-6 rounded-md bg-white border border-gray-300 text-gray-600 font-bold text-xs flex items-center justify-center hover:bg-gray-100">+</button>
                        </div>
                    </div>
                    <button onclick="updateCartQuantity(${item.id}, -${item.quantity})" class="text-gray-400 hover:text-dmx-red p-1">
                        <i class="fa-regular fa-trash-can"></i>
                    </button>
                </div>
            `).join('');
        }

        function toggleCartDrawer(open) {
            const drawer = document.getElementById('cartDrawer');
            const backdrop = document.getElementById('cartBackdrop');
            const panel = document.getElementById('cartPanel');

            if (open) {
                drawer.classList.remove('pointer-events-none');
                backdrop.classList.remove('opacity-0');
                panel.classList.remove('translate-x-full');
            } else {
                backdrop.classList.add('opacity-0');
                panel.classList.add('translate-x-full');
                setTimeout(() => {
                    drawer.classList.add('pointer-events-none');
                }, 300);
            }
        }

        // Checkout Simulation
        function checkoutSimulated() {
            if (cart.length === 0) {
                showToast("Giỏ hàng của bạn đang trống!");
                return;
            }
            alert("🎉 Đặt hàng thành công! Cảm ơn bạn đã tin tưởng mua sắm tại Điện Máy Xanh.");
            cart = [];
            saveCart();
            updateCartUI();
            toggleCartDrawer(false);
        }

        // Product Modal Logic
        function openProductModal(productId) {
            const product = products.find(p => p.id === productId);
            if (!product) return;

            const modal = document.getElementById('productModal');
            const modalContent = document.getElementById('modalContent');
            const discount = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);

            modalContent.innerHTML = `
                <!-- Left Column: Image & Badges -->
                <div class="flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-gray-200 pb-4 md:pb-0 md:pr-6">
                    <span class="self-start bg-dmx-red text-white text-xs font-black px-2.5 py-1 rounded-md mb-2">Giảm ${discount}%</span>
                    <img src="${product.image}" class="w-full h-64 object-contain rounded-xl" alt="${product.name}">
                    <div class="mt-4 flex items-center gap-3 text-xs text-gray-500">
                        <span><i class="fa-solid fa-shield text-dmx-blue mr-1"></i> Bảo hành 12 tháng</span>
                        <span><i class="fa-solid fa-truck text-dmx-blue mr-1"></i> Miễn phí lắp đặt</span>
                    </div>
                </div>

                <!-- Right Column: Details & Order -->
                <div class="space-y-4">
                    <div>
                        <span class="text-xs bg-blue-100 text-dmx-blue font-bold px-2 py-0.5 rounded">${product.badge}</span>
                        <h2 class="text-lg md:text-xl font-extrabold text-gray-900 mt-1">${product.name}</h2>
                        <div class="flex items-center gap-2 mt-1">
                            <span class="text-amber-400 text-xs"><i class="fa-solid fa-star"></i> ${product.rating}</span>
                            <span class="text-gray-400 text-xs">(${product.reviews} đánh giá)</span>
                        </div>
                    </div>

                    <!-- Price Box -->
                    <div class="bg-gray-50 p-3 rounded-xl border border-gray-100 flex items-baseline gap-3">
                        <span class="text-2xl font-black text-dmx-red">${formatVND(product.price)}</span>
                        <span class="text-sm text-gray-400 line-through">${formatVND(product.oldPrice)}</span>
                    </div>

                    <!-- Specs List -->
                    <div>
                        <h4 class="font-bold text-xs uppercase text-gray-400 tracking-wider mb-2">Thông số kỹ thuật</h4>
                        <div class="bg-gray-50 rounded-xl p-3 text-xs space-y-1.5 border border-gray-100">
                            ${Object.entries(product.specs).map(([key, value]) => `
                                <div class="flex justify-between py-1 border-b border-gray-200/50 last:border-0">
                                    <span class="text-gray-500 font-medium capitalize">${key}:</span>
                                    <span class="font-bold text-gray-800 text-right">${value}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Buttons -->
                    <div class="flex gap-3 pt-2">
                        <button onclick="addToCart(${product.id}); closeProductModal();" class="flex-1 bg-dmx-blue hover:bg-dmx-darkblue text-white font-extrabold py-3 rounded-xl shadow-lg transition active:scale-95 text-sm flex items-center justify-center gap-2">
                            <i class="fa-solid fa-cart-plus"></i> Thêm vào giỏ
                        </button>
                    </div>
                </div>
            `;

            modal.classList.remove('opacity-0', 'pointer-events-none');
        }

        function closeProductModal() {
            const modal = document.getElementById('productModal');
            modal.classList.add('opacity-0', 'pointer-events-none');
        }

        // Toast Notification System
        function showToast(message) {
            const container = document.getElementById('toastContainer');
            const toast = document.createElement('div');
            toast.className = "bg-gray-900 text-white text-xs md:text-sm px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 border-l-4 border-dmx-yellow transition-all duration-300 transform translate-y-2 opacity-0";
            toast.innerHTML = `
                <i class="fa-solid fa-circle-check text-dmx-yellow text-lg"></i>
                <div>${message}</div>
            `;
            container.appendChild(toast);

            // Animate In
            setTimeout(() => {
                toast.classList.remove('translate-y-2', 'opacity-0');
            }, 50);

            // Remove Toast
            setTimeout(() => {
                toast.classList.add('opacity-0', 'translate-y-2');
                setTimeout(() => toast.remove(), 300);
            }, 3000);
        }

        // Flash Sale Countdown Logic
        function startCountdown() {
            let hours = 4, minutes = 25, seconds = 12;
            setInterval(() => {
                seconds--;
                if (seconds < 0) {
                    seconds = 59;
                    minutes--;
                    if (minutes < 0) {
                        minutes = 59;
                        hours--;
                        if (hours < 0) hours = 24;
                    }
                }
                document.getElementById('timerHours').innerText = String(hours).padStart(2, '0');
                document.getElementById('timerMinutes').innerText = String(minutes).padStart(2, '0');
                document.getElementById('timerSeconds').innerText = String(seconds).padStart(2, '0');
            }, 1000);
        }
    </script>
</body>
</html>
```
