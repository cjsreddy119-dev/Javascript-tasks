 /* =========================================
           1. DATA (Mock Product Database with Realism)
           ========================================= */
        // Added MRP, ratings, and review counts to simulate realistic product objects.
        const productsData = [
            { id: 1, name: "Premium Wireless Headphones", price: 24999.00, mrp: 29999.00, rating: 4.8, reviews: 342, category: "electronics", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80", description: "Experience crystal-clear audio with our premium noise-canceling wireless headphones. Features 30-hour battery life, active noise cancellation (ANC), and plush ear cushions for all-day comfort.", featured: true },
            { id: 2, name: "Minimalist Leather Watch", price: 8999.00, mrp: 12499.00, rating: 4.5, reviews: 128, category: "accessories", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80", description: "A sleek, minimalist watch featuring a genuine Italian leather strap, quartz movement, and a scratch-resistant sapphire crystal face. Perfect for everyday professional wear.", featured: true },
            { id: 3, name: "Athletic Running Shoes", price: 4999.00, mrp: 6999.00, rating: 4.6, reviews: 512, category: "fashion", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80", description: "Lightweight, breathable, and aerodynamic. These running shoes are designed for maximum comfort, shock absorption, and arch support during intense workouts and marathons.", featured: true },
            { id: 4, name: "Mirrorless Digital Camera", price: 74999.00, mrp: 85999.00, rating: 4.9, reviews: 89, category: "electronics", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80", description: "Capture stunning photos and 4K 60fps videos with this compact mirrorless camera. Includes a versatile 15-45mm kit lens, ultra-fast autofocus, and built-in Wi-Fi.", featured: true },
            { id: 5, name: "Classic Aviator Sunglasses", price: 2499.00, mrp: 3999.00, rating: 4.3, reviews: 245, category: "accessories", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80", description: "Protect your eyes in style with these classic aviator sunglasses featuring 100% UV protection, polarized lenses, and a durable yet lightweight metal frame.", featured: false },
            { id: 6, name: "Waterproof Canvas Backpack", price: 3499.00, mrp: 4999.00, rating: 4.7, reviews: 310, category: "fashion", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80", description: "A rugged, waterproof canvas backpack with a dedicated 15-inch laptop compartment, ergonomic straps, and multiple quick-access pockets. Perfect for commutes.", featured: false },
            { id: 7, name: "Smart Home Speaker", price: 12999.00, mrp: 14999.00, rating: 4.4, reviews: 420, category: "electronics", image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=500&q=80", description: "Control your smart home appliances, set alarms, and listen to high-fidelity room-filling audio with this intelligent, voice-activated smart speaker.", featured: false },
            { id: 8, name: "Mechanical Gaming Keyboard", price: 7999.00, mrp: 10999.00, rating: 4.8, reviews: 180, category: "electronics", image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&q=80", description: "Enhance your gaming performance with tactile mechanical blue switches, 100% anti-ghosting, and fully customizable per-key RGB backlighting.", featured: false },
            { id: 9, name: "Latest 5G Smartphone", price: 54999.00, mrp: 64999.00, rating: 4.7, reviews: 940, category: "electronics", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80", description: "Experience lightning-fast speeds with this next-gen 5G smartphone. Features a stunning 120Hz OLED display, all-day battery, and a pro-grade triple camera system.", featured: true },
            { id: 10, name: "True Wireless Earbuds", price: 12999.00, mrp: 17999.00, rating: 4.6, reviews: 620, category: "electronics", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80", description: "Compact and powerful true wireless earbuds delivering deep bass and crisp highs. Features active noise cancellation and a wireless charging case.", featured: true },
            { id: 11, name: "Classic Denim Jacket", price: 3499.00, mrp: 4599.00, rating: 4.5, reviews: 115, category: "fashion", image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=500&q=80", description: "A timeless, versatile denim jacket that never goes out of style. Crafted from premium, durable cotton denim with reinforced stitching.", featured: false },
            { id: 12, name: "Eco-friendly Yoga Mat", price: 1499.00, mrp: 2199.00, rating: 4.8, reviews: 430, category: "accessories", image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&q=80", description: "100% biodegradable, non-slip yoga mat. Provides excellent cushioning for your joints and maintains grip even during intense, sweaty sessions.", featured: false },
            { id: 13, name: "Smart Fitness Band", price: 2999.00, mrp: 3999.00, rating: 4.2, reviews: 850, category: "electronics", image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&q=80", description: "Track your daily steps, heart rate, blood oxygen levels, and sleep patterns with this sleek, waterproof smart fitness band. 14-day battery life.", featured: false },
            { id: 14, name: "Men's Cotton Chinos", price: 2199.00, mrp: 2999.00, rating: 4.4, reviews: 210, category: "fashion", image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&q=80", description: "Versatile, tailored-fit cotton chinos with a hint of stretch. Perfect for seamlessly transitioning from office wear to casual evening outings.", featured: false },
            { id: 15, name: "Elegant Silver Pendant", price: 3999.00, mrp: 5499.00, rating: 4.9, reviews: 95, category: "accessories", image: "https://images.unsplash.com/photo-1599643478514-4a4208bd121c?w=500&q=80", description: "A delicate, handcrafted 925 sterling silver pendant. Its minimalist design adds a touch of sophisticated elegance to absolutely any outfit.", featured: false },
            { id: 16, name: "4K Ultra HD Smart TV", price: 45999.00, mrp: 55999.00, rating: 4.7, reviews: 315, category: "electronics", image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&q=80", description: "Immerse yourself in cinematic brilliance with stunning 4K visuals, HDR10 support, and seamless smart connectivity for all your streaming apps.", featured: true },
            { id: 17, name: "Breathable Workout Tee", price: 999.00, mrp: 1499.00, rating: 4.5, reviews: 540, category: "fashion", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80", description: "Advanced moisture-wicking athletic t-shirt engineered to keep you cool, dry, and comfortable during the most intense training sessions.", featured: false },
            { id: 18, name: "Genuine Leather Wallet", price: 1899.00, mrp: 2499.00, rating: 4.6, reviews: 185, category: "accessories", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&q=80", description: "Slim, stylish, and highly practical bi-fold genuine leather wallet. Features multiple card slots and built-in RFID blocking technology for security.", featured: false },
            { id: 19, name: "Fast Wireless Charging Pad", price: 1499.00, mrp: 2299.00, rating: 4.3, reviews: 275, category: "electronics", image: "https://images.unsplash.com/photo-1586816879360-004f5b0c51e3?w=500&q=80", description: "Convenient 15W fast wireless charging pad. Compatible with all Qi-enabled smartphones and earbuds. Features an anti-slip silicone ring.", featured: false },
            { id: 20, name: "High-Waist Yoga Pants", price: 1799.00, mrp: 2499.00, rating: 4.8, reviews: 490, category: "fashion", image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500&q=80", description: "Ultra-flexible, high-waisted yoga pants providing maximum comfort, squat-proof coverage, and targeted core support for all body types.", featured: false },
            { id: 21, name: "20000mAh Power Bank", price: 2499.00, mrp: 3499.00, rating: 4.7, reviews: 610, category: "electronics", image: "https://images.unsplash.com/photo-1609091839311-d5365f47d81a?w=500&q=80", description: "High-capacity portable charger capable of charging a smartphone up to 5 times. Features dual USB outputs and 18W fast charging support.", featured: false },
            { id: 22, name: "Cozy Knit Beanie", price: 599.00, mrp: 999.00, rating: 4.4, reviews: 130, category: "accessories", image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=500&q=80", description: "Stay warm and effortlessly stylish with this soft, chunky knit beanie. Designed to provide maximum heat retention during chilly winter days.", featured: false },
            { id: 23, name: "Minimalist LED Desk Lamp", price: 1999.00, mrp: 2999.00, rating: 4.6, reviews: 220, category: "electronics", image: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?w=500&q=80", description: "Sleek and modern LED desk lamp with touch controls, adjustable brightness levels, and 3 color temperature modes. Perfect for late-night productivity.", featured: true },
            { id: 24, name: "Classic Leather Belt", price: 1299.00, mrp: 1899.00, rating: 4.5, reviews: 165, category: "fashion", image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=500&q=80", description: "Genuine full-grain leather belt finished with a timeless, heavy-duty brass buckle. Highly durable and perfect for both formal and casual occasions.", featured: false }
        ];

        /* =========================================
           2. STATE MANAGEMENT & UTILS
           ========================================= */
        let cart = [];
        let currentCategory = 'all';
        let isLoggedIn = false;
        let pendingCheckout = false; // Remembers if user tried to checkout before signing in
        let otpSentState = false;    // Tracks if OTP has been requested
        const expectedOtp = "1234";  // Mock OTP for demonstration

        // Utility to format currency properly for India
        function formatPrice(amount) {
            return '₹' + amount.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        }

        // Generate Star Rating HTML
        function generateStars(rating) {
            let starsHtml = '';
            for(let i=1; i<=5; i++) {
                if (rating >= i) {
                    starsHtml += '<i class="fa-solid fa-star text-yellow-400 text-xs"></i>';
                } else if (rating >= i - 0.5) {
                    starsHtml += '<i class="fa-solid fa-star-half-stroke text-yellow-400 text-xs"></i>';
                } else {
                    starsHtml += '<i class="fa-regular fa-star text-gray-300 text-xs"></i>';
                }
            }
            return starsHtml;
        }

        function updateAuthUI() {
            const authBtns = document.querySelectorAll('.signin-btn-text');
            authBtns.forEach(btn => {
                btn.innerText = isLoggedIn ? 'Logout' : 'Sign In';
            });
        }

        /* =========================================
           3. INITIALIZATION
           ========================================= */
        document.addEventListener('DOMContentLoaded', () => {
            // Load cart from LocalStorage
            const savedCart = localStorage.getItem('reddyKartCart');
            if (savedCart) {
                cart = JSON.parse(savedCart);
            }
            
            // Check auth state
            const savedAuth = localStorage.getItem('reddyKartAuth');
            if (savedAuth === 'true') {
                isLoggedIn = true;
            }
            
            updateAuthUI();
            updateCartBadge(false); // Init without pop animation
            renderFeaturedProducts();
            setupSearch();
        });

        /* =========================================
           4. NAVIGATION, AUTH, & ROUTING
           ========================================= */
           
        function handleAuthClick() {
            if (isLoggedIn) {
                // Logout flow
                isLoggedIn = false;
                localStorage.setItem('reddyKartAuth', 'false');
                updateAuthUI();
                showToast("Logged out successfully");
                navigate('home');
            } else {
                // Manual login click
                pendingCheckout = false;
                resetAuthForm();
                navigate('signin');
            }
        }
        
        function handleAuthSubmit(event) {
            event.preventDefault();
            
            if (!otpSentState) {
                // STEP 1: Process mobile number and send OTP
                const mobileInput = document.getElementById('login-mobile');
                
                if (mobileInput.validity.valid) {
                    // Update UI for OTP entry
                    document.getElementById('display-mobile').innerText = '+91 ' + mobileInput.value;
                    document.getElementById('step-mobile').classList.add('hidden');
                    document.getElementById('step-otp').classList.remove('hidden');
                    
                    const otpInput = document.getElementById('login-otp');
                    otpInput.required = true;
                    mobileInput.required = false; // allow form to submit without re-validating phone
                    
                    document.getElementById('auth-submit-btn').innerHTML = 'Verify & Sign In <i class="fa-solid fa-arrow-right-to-bracket ml-2"></i>';
                    otpSentState = true;
                    
                    // Simulate sending SMS by displaying a toast
                    showToast(`OTP sent! Use ${expectedOtp} to login.`, "success");
                    
                    // Focus the OTP input
                    setTimeout(() => otpInput.focus(), 100);
                }
            } else {
                // STEP 2: Verify the entered OTP
                const otpInput = document.getElementById('login-otp');
                
                if (otpInput.value === expectedOtp) {
                    // Simulate successful login
                    isLoggedIn = true;
                    localStorage.setItem('reddyKartAuth', 'true');
                    updateAuthUI();
                    
                    showToast("Successfully signed in!", "success");
                    resetAuthForm(); // Clean up form for future logouts
                    
                    // Route logic based on intent
                    if (pendingCheckout) {
                        pendingCheckout = false;
                        navigate('checkout');
                    } else {
                        navigate('home');
                    }
                } else {
                    // Failed login
                    showToast("Invalid OTP. Please try again.", "error");
                    otpInput.value = ''; // clear incorrect entry
                    otpInput.focus();
                }
            }
        }

        // Helper to reset the sign-in form to step 1
        function resetAuthForm() {
            otpSentState = false;
            document.getElementById('step-otp').classList.add('hidden');
            document.getElementById('step-mobile').classList.remove('hidden');
            
            document.getElementById('login-otp').required = false;
            document.getElementById('login-otp').value = '';
            document.getElementById('login-mobile').required = true;
            
            document.getElementById('auth-submit-btn').innerHTML = 'Get OTP <i class="fa-solid fa-arrow-right ml-2"></i>';
        }

        function navigate(viewId, param = null) {
            // Check if user is trying to checkout without signing in
            if (viewId === 'checkout' && !isLoggedIn) {
                pendingCheckout = true;
                resetAuthForm();
                navigate('signin');
                showToast("Please sign in to continue to checkout.", "error");
                return;
            }

            // Hide all views
            document.querySelectorAll('.view-section').forEach(el => {
                el.classList.remove('active');
            });
            
            // Show target view
            document.getElementById(`${viewId}-view`).classList.add('active');

            // Handle specific view logic
            if (viewId === 'home') {
                renderFeaturedProducts();
            } else if (viewId === 'products') {
                if (param) filterCategory(param);
                else renderProducts(productsData, 'all-products-container');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (viewId === 'detail' && param) {
                renderProductDetail(param);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (viewId === 'cart') {
                renderCart();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (viewId === 'signin') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (viewId === 'checkout') {
                // Update checkout total display (Subtotal + Platform fee + Shipping)
                const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
                const platformFee = 20;
                const shipping = subtotal > 1000 ? 0 : 99;
                const grandTotal = subtotal + platformFee + shipping;
                
                document.getElementById('checkout-total-display').innerText = formatPrice(grandTotal);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }

        /* =========================================
           5. RENDERING FUNCTIONS
           ========================================= */
        
        // Generate HTML for a single product card
        function createProductCard(product) {
            const discountPercent = Math.round(((product.mrp - product.price) / product.mrp) * 100);
            
            return `
                <div class="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col group cursor-pointer relative" onclick="navigate('detail', ${product.id})">
                    <!-- Discount Badge -->
                    <div class="absolute top-3 left-3 z-10 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm">
                        ${discountPercent}% OFF
                    </div>
                    
                    <div class="relative pt-[100%] overflow-hidden bg-gray-50 flex items-center justify-center">
                        <img src="${product.image}" onerror="this.src='https://placehold.co/500x500/f8fafc/94a3b8?text=Image+Unavailable'" alt="${product.name}" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out">
                    </div>
                    
                    <div class="p-5 flex flex-col flex-grow">
                        <span class="text-[10px] text-indigo-600 font-bold uppercase tracking-wider mb-1.5">${product.category}</span>
                        <h3 class="font-bold text-gray-800 text-base mb-1 line-clamp-2 leading-tight hover:text-indigo-600 transition-colors">${product.name}</h3>
                        
                        <!-- Rating Display -->
                        <div class="flex items-center mb-3">
                            <div class="flex mr-1.5">
                                ${generateStars(product.rating)}
                            </div>
                            <span class="text-xs text-gray-400 font-medium">(${product.reviews})</span>
                        </div>
                        
                        <div class="mt-auto flex justify-between items-end">
                            <div>
                                <div class="flex items-center space-x-2">
                                    <span class="font-black text-gray-900 text-lg">${formatPrice(product.price)}</span>
                                </div>
                                <div class="text-xs text-gray-400 line-through font-medium">MRP: ${formatPrice(product.mrp)}</div>
                            </div>
                            <button onclick="event.stopPropagation(); addToCart(${product.id})" class="bg-indigo-50 text-indigo-600 w-10 h-10 rounded-full flex items-center justify-center hover:bg-indigo-600 hover:text-white active:scale-90 transition-all duration-200" title="Add to Cart">
                                <i class="fa-solid fa-cart-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }

        function renderFeaturedProducts() {
            const container = document.getElementById('featured-products-container');
            const featured = productsData.filter(p => p.featured);
            container.innerHTML = featured.map(createProductCard).join('');
        }

        function renderProducts(products, containerId) {
            const container = document.getElementById(containerId);
            const noProductsMsg = document.getElementById('no-products-msg');
            
            // Update the count indicator if on the main products page
            if(containerId === 'all-products-container') {
                const countText = document.querySelector('#products-view span.text-gray-500');
                if(countText) countText.innerText = `Showing ${products.length} products`;
            }
            
            if (products.length === 0) {
                container.innerHTML = '';
                noProductsMsg.classList.remove('hidden');
            } else {
                noProductsMsg.classList.add('hidden');
                container.innerHTML = products.map(createProductCard).join('');
            }
        }

        function renderProductDetail(productId) {
            const product = productsData.find(p => p.id === productId);
            if (!product) return;
            
            const discountPercent = Math.round(((product.mrp - product.price) / product.mrp) * 100);

            // Update Breadcrumb
            document.getElementById('breadcrumb-product-name').innerText = product.name;

            const container = document.getElementById('product-detail-container');
            container.innerHTML = `
                <!-- Image Gallery Side -->
                <div class="md:w-1/2 flex flex-col gap-4">
                    <div class="bg-gray-50 rounded-2xl overflow-hidden flex items-center justify-center border border-gray-100 relative">
                        <div class="absolute top-4 left-4 z-10 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded shadow-sm">
                            ${discountPercent}% OFF
                        </div>
                        <img src="${product.image}" onerror="this.src='https://placehold.co/500x500/f8fafc/94a3b8?text=Image+Unavailable'" alt="${product.name}" class="w-full h-auto object-cover max-h-[500px]">
                    </div>
                    <!-- Simulated Thumbnails -->
                    <div class="grid grid-cols-4 gap-2 sm:gap-4">
                        <div class="bg-gray-50 rounded-lg border-2 border-indigo-500 overflow-hidden cursor-pointer"><img src="${product.image}" class="w-full h-full object-cover opacity-100"></div>
                        <div class="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden cursor-pointer hover:border-indigo-300 opacity-60 hover:opacity-100 transition-all"><img src="${product.image}" class="w-full h-full object-cover grayscale"></div>
                        <div class="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden cursor-pointer hover:border-indigo-300 opacity-60 hover:opacity-100 transition-all flex items-center justify-center text-gray-300"><i class="fa-solid fa-image text-2xl"></i></div>
                        <div class="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden cursor-pointer hover:border-indigo-300 opacity-60 hover:opacity-100 transition-all flex items-center justify-center text-gray-300"><i class="fa-solid fa-image text-2xl"></i></div>
                    </div>
                </div>
                
                <!-- Details Side -->
                <div class="md:w-1/2 flex flex-col justify-center py-4">
                    <span class="text-xs text-indigo-600 font-bold uppercase tracking-wider mb-2 bg-indigo-50 inline-block px-2 py-1 rounded w-max">${product.category}</span>
                    <h1 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 leading-tight">${product.name}</h1>
                    
                    <!-- Ratings -->
                    <div class="flex items-center mb-4">
                        <div class="flex mr-2 text-base">
                            ${generateStars(product.rating)}
                        </div>
                        <span class="text-sm font-bold text-gray-700">${product.rating}</span>
                        <span class="text-sm text-indigo-600 font-medium ml-2 hover:underline cursor-pointer">Read ${product.reviews} Reviews</span>
                    </div>

                    <!-- Pricing -->
                    <div class="mb-6 bg-gray-50 p-4 rounded-xl border border-gray-100">
                        <div class="flex items-end space-x-3 mb-1">
                            <span class="text-3xl font-black text-gray-900">${formatPrice(product.price)}</span>
                            <span class="text-lg text-gray-400 line-through font-medium mb-0.5">MRP: ${formatPrice(product.mrp)}</span>
                        </div>
                        <p class="text-xs text-green-600 font-bold">Inclusive of all taxes</p>
                    </div>
                    
                    <p class="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">${product.description}</p>
                    
                    <!-- Stock & Actions -->
                    <div class="mb-8">
                        <div class="flex items-center text-sm font-bold text-green-600 mb-4">
                            <div class="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></div> In Stock
                        </div>
                        <div class="flex gap-4">
                            <button onclick="addToCart(${product.id})" class="flex-1 bg-indigo-600 text-white py-4 rounded-xl font-bold hover:bg-indigo-700 active:scale-95 transition-all duration-200 flex justify-center items-center shadow-lg shadow-indigo-200 text-lg">
                                <i class="fa-solid fa-cart-shopping mr-2"></i> Add to Cart
                            </button>
                        </div>
                    </div>

                    <!-- Trust indicators -->
                    <div class="grid grid-cols-2 gap-4 mt-auto border-t border-gray-100 pt-6">
                        <div class="flex items-start">
                            <i class="fa-solid fa-truck text-gray-400 text-lg mt-0.5 mr-3"></i>
                            <div>
                                <p class="text-sm font-bold text-gray-800">Fast Delivery</p>
                                <p class="text-xs text-gray-500">Usually ships in 24 hrs</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <i class="fa-solid fa-shield-halved text-gray-400 text-lg mt-0.5 mr-3"></i>
                            <div>
                                <p class="text-sm font-bold text-gray-800">1 Year Warranty</p>
                                <p class="text-xs text-gray-500">Brand guarantee</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        /* =========================================
           6. CART & LOCALSTORAGE LOGIC
           ========================================= */
        function saveCart() {
            localStorage.setItem('reddyKartCart', JSON.stringify(cart));
            updateCartBadge(true); // Show pop animation when saving via user action
        }

        function updateCartBadge(animate = true) {
            const badge = document.getElementById('cartBadge');
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            badge.innerText = totalItems;
            
            if (totalItems > 0) {
                badge.classList.remove('hidden');
                if (animate) {
                    // Trigger reflow to restart animation
                    badge.classList.remove('animate-pop');
                    void badge.offsetWidth; 
                    badge.classList.add('animate-pop');
                }
            } else {
                badge.classList.add('hidden');
            }
        }

        function addToCart(productId) {
            const product = productsData.find(p => p.id === productId);
            if (!product) return;

            const existingItem = cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ ...product, quantity: 1 });
            }

            saveCart();
            showToast(`${product.name} added to cart!`);
        }

        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            saveCart();
            renderCart();
            showToast("Item removed from cart", "error");
        }

        function updateQuantity(productId, change) {
            const item = cart.find(i => i.id === productId);
            if (item) {
                item.quantity += change;
                if (item.quantity <= 0) {
                    removeFromCart(productId);
                } else {
                    saveCart();
                    renderCart();
                }
            }
        }

        function renderCart() {
            const container = document.getElementById('cart-items-container');
            const subtotalEl = document.getElementById('cart-subtotal');
            const shippingEl = document.getElementById('cart-shipping');
            const totalEl = document.getElementById('cart-total');
            const checkoutBtn = document.getElementById('checkout-btn');

            if (cart.length === 0) {
                container.innerHTML = `
                    <div class="py-16 text-center text-gray-500">
                        <div class="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-100">
                            <i class="fa-solid fa-cart-shopping text-4xl text-gray-300"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-2 text-gray-800">Your cart is empty</h3>
                        <p class="text-sm mb-6">Looks like you haven't added anything yet.</p>
                        <button onclick="navigate('products', 'all')" class="bg-indigo-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-indigo-700 transition-colors">Continue Shopping</button>
                    </div>
                `;
                subtotalEl.innerText = '₹0.00';
                shippingEl.innerText = '₹0.00';
                shippingEl.classList.remove('text-green-600');
                totalEl.innerText = '₹0.00';
                checkoutBtn.disabled = true;
                return;
            }

            checkoutBtn.disabled = false;
            let subtotal = 0;

            container.innerHTML = cart.map(item => {
                const itemTotal = item.price * item.quantity;
                subtotal += itemTotal;
                
                return `
                    <div class="py-5 flex flex-col sm:flex-row items-center gap-4 group">
                        <img src="${item.image}" onerror="this.src='https://placehold.co/500x500/f8fafc/94a3b8?text=Image+Unavailable'" alt="${item.name}" class="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg bg-gray-50 border border-gray-100">
                        
                        <div class="flex-1 text-center sm:text-left w-full sm:w-auto">
                            <h4 class="font-bold text-gray-800 line-clamp-1 group-hover:text-indigo-600 transition-colors">${item.name}</h4>
                            <span class="text-gray-500 text-sm font-medium block mt-1">${formatPrice(item.price)} <span class="text-xs line-through text-gray-300 ml-1">${formatPrice(item.mrp)}</span></span>
                        </div>
                        
                        <!-- Quantity Controls -->
                        <div class="flex items-center border border-gray-200 rounded-lg bg-white shadow-sm">
                            <button onclick="updateQuantity(${item.id}, -1)" class="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:text-indigo-600 rounded-l-lg transition-colors">-</button>
                            <span class="w-10 text-center font-bold text-gray-800 text-sm">${item.quantity}</span>
                            <button onclick="updateQuantity(${item.id}, 1)" class="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:text-indigo-600 rounded-r-lg transition-colors">+</button>
                        </div>
                        
                        <div class="font-black text-gray-900 w-full sm:w-24 text-center sm:text-right mt-2 sm:mt-0 text-lg">
                            ${formatPrice(itemTotal)}
                        </div>
                        
                        <button onclick="removeFromCart(${item.id})" class="text-gray-400 hover:text-red-500 p-2 hover:bg-red-50 rounded-full transition-all duration-200 active:scale-90 absolute sm:relative top-2 sm:top-0 right-2 sm:right-0" title="Remove Item">
                            <i class="fa-solid fa-xmark text-lg"></i>
                        </button>
                    </div>
                `;
            }).join('');

            // Calculate realistic totals
            const platformFee = 20;
            const shipping = subtotal > 1000 ? 0 : 99;
            const grandTotal = subtotal + platformFee + shipping;

            subtotalEl.innerText = formatPrice(subtotal);
            
            if (shipping === 0) {
                shippingEl.innerText = 'Free';
                shippingEl.classList.add('text-green-600');
            } else {
                shippingEl.innerText = formatPrice(shipping);
                shippingEl.classList.remove('text-green-600');
                shippingEl.classList.add('text-gray-900');
            }

            totalEl.innerText = formatPrice(grandTotal);
        }

        /* =========================================
           7. SEARCH & FILTERING LOGIC
           ========================================= */
        function filterCategory(category) {
            currentCategory = category;
            
            // Update button styles
            document.querySelectorAll('.category-btn').forEach(btn => {
                if (btn.innerText.toLowerCase() === category.toLowerCase() || (category === 'all' && btn.innerText === 'All')) {
                    btn.classList.replace('bg-white', 'bg-indigo-600');
                    btn.classList.replace('text-gray-600', 'text-white');
                    btn.classList.remove('border-gray-200');
                } else {
                    btn.classList.replace('bg-indigo-600', 'bg-white');
                    btn.classList.replace('text-white', 'text-gray-600');
                    btn.classList.add('border-gray-200');
                }
            });

            // Filter data
            let filtered = productsData;
            if (category !== 'all') {
                filtered = productsData.filter(p => p.category === category);
            }
            
            document.getElementById('listing-title').innerText = category === 'all' ? 'All Products' : category.charAt(0).toUpperCase() + category.slice(1);
            renderProducts(filtered, 'all-products-container');
        }

        function setupSearch() {
            const handleSearch = (e) => {
                const query = e.target.value.toLowerCase().trim();
                
                if (query === '') {
                    // If search cleared while on products page, respect current category
                    if (document.getElementById('products-view').classList.contains('active')) {
                        filterCategory(currentCategory);
                    }
                    return;
                }

                // Switch to products view to show results
                navigate('products');
                document.getElementById('listing-title').innerText = `Search Results for "${query}"`;
                
                // Reset category buttons visually
                document.querySelectorAll('.category-btn').forEach(btn => {
                    btn.classList.replace('bg-indigo-600', 'bg-white');
                    btn.classList.replace('text-white', 'text-gray-600');
                    btn.classList.add('border-gray-200');
                });

                const filtered = productsData.filter(p => 
                    p.name.toLowerCase().includes(query) || 
                    p.description.toLowerCase().includes(query)
                );
                
                renderProducts(filtered, 'all-products-container');
            };

            document.getElementById('searchInput').addEventListener('keyup', handleSearch);
            document.getElementById('mobileSearchInput').addEventListener('keyup', handleSearch);
        }

        /* =========================================
           8. CHECKOUT PROCESS
           ========================================= */
        function processCheckout(event) {
            event.preventDefault(); // Prevent page reload
            
            // In a real app, send data to backend here.
            
            // Clear cart
            cart = [];
            saveCart();
            
            // Show Success
            showToast("Order placed successfully! Redirecting to home...", "success");
            
            // Reset form and go home
            document.getElementById('checkout-form').reset();
            setTimeout(() => {
                navigate('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 2000);
        }

        /* =========================================
           9. UI UTILITIES (Toast Notifications)
           ========================================= */
        function showToast(message, type = "success") {
            const container = document.getElementById('toast-container');
            
            const toast = document.createElement('div');
            toast.className = `toast-enter flex items-center p-4 rounded-xl shadow-xl text-white font-medium text-sm ${type === 'success' ? 'bg-gray-900' : 'bg-red-500 border border-red-600'}`;
            
            const icon = type === 'success' ? '<i class="fa-solid fa-circle-check mr-3 text-green-400 text-lg"></i>' : '<i class="fa-solid fa-circle-exclamation mr-3 text-white text-lg"></i>';
            
            toast.innerHTML = `
                ${icon}
                <span>${message}</span>
            `;
            
            container.appendChild(toast);
            
            // Remove toast after 3 seconds
            setTimeout(() => {
                toast.classList.replace('toast-enter', 'toast-leave');
                setTimeout(() => {
                    toast.remove();
                }, 300); // Wait for exit animation
            }, 3000);
        }
