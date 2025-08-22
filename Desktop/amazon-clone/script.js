// Enhanced Amazon Clone with Dynamic Functionality
class AmazonClone {
  constructor() {
    this.cart = [];
    this.products = this.initializeProducts();
    this.currentUser = null;
    this.searchResults = [];
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.initializeCarousel();
    this.loadCartFromStorage();
    this.updateCartDisplay();
    this.setupSearch();
    this.setupProductInteractions();
    this.setupAccountSystem();
    this.setupResponsiveMenu();
  }

  // Initialize product database
  initializeProducts() {
    return [
      {
        id: '1',
        name: 'boAt Rockerz 450 Bluetooth Headphones',
        price: 1499,
        originalPrice: 2999,
        category: 'Electronics',
        image: 'images/boAt.jpg',
        rating: 4.2,
        reviews: 12450,
        inStock: true,
        description: 'Wireless Bluetooth headphones with 40 hours battery life'
      },
      {
        id: '2',
        name: 'BOULT Audio BassBuds X1',
        price: 999,
        originalPrice: 1999,
        category: 'Electronics',
        image: 'images/BOULT.jpg',
        rating: 4.0,
        reviews: 8920,
        inStock: true,
        description: 'True wireless earbuds with deep bass'
      },
      {
        id: '3',
        name: 'Noise ColorFit Pro 4',
        price: 2499,
        originalPrice: 3999,
        category: 'Electronics',
        image: 'images/Noise.jpg',
        rating: 4.3,
        reviews: 15670,
        inStock: true,
        description: 'Smartwatch with health monitoring'
      },
      {
        id: '4',
        name: 'Zebronics Zeb-Thunder',
        price: 799,
        originalPrice: 1499,
        category: 'Electronics',
        image: 'images/Zebronics.jpg',
        rating: 3.8,
        reviews: 5430,
        inStock: true,
        description: 'Gaming headset with microphone'
      },
      {
        id: '5',
        name: 'Samsung 4K Smart TV',
        price: 45999,
        originalPrice: 59999,
        category: 'Electronics',
        image: 'images/4K TVs.jpg',
        rating: 4.5,
        reviews: 2340,
        inStock: true,
        description: '55-inch 4K Ultra HD Smart TV'
      },
      {
        id: '6',
        name: 'iPhone 15 Pro',
        price: 119999,
        originalPrice: 139999,
        category: 'Electronics',
        image: 'images/phone.jpg',
        rating: 4.7,
        reviews: 8920,
        inStock: true,
        description: 'Latest iPhone with A17 Pro chip'
      },
      {
        id: '7',
        name: 'MacBook Air M2',
        price: 99999,
        originalPrice: 119999,
        category: 'Electronics',
        image: 'images/laptop.jpg',
        rating: 4.6,
        reviews: 4560,
        inStock: true,
        description: '13-inch laptop with M2 chip'
      },
      {
        id: '8',
        name: 'iPad Air 5th Gen',
        price: 54999,
        originalPrice: 64999,
        category: 'Electronics',
        image: 'images/ipad.jpg',
        rating: 4.4,
        reviews: 6780,
        inStock: true,
        description: '10.9-inch tablet with M1 chip'
      }
    ];
  }

  // Setup all event listeners
  setupEventListeners() {
    // Search functionality
    const searchForm = document.querySelector('.navbar-search');
    const searchInput = document.querySelector('.search-input');
    
    if (searchForm && searchInput) {
      searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.performSearch(searchInput.value.trim());
      });

      searchInput.addEventListener('input', (e) => {
        this.handleSearchInput(e.target.value);
      });
    }

    // Cart functionality
    const cartBtn = document.getElementById('cartBtn');
    if (cartBtn) {
      cartBtn.addEventListener('click', () => this.toggleCart());
    }

    // Account functionality
    const loginBtn = document.getElementById('loginBtn');
    if (loginBtn) {
      loginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggleAccountDropdown();
      });
    }

    // Continue button in signin form
    const continueBtn = document.getElementById('continueSignin');
    if (continueBtn) {
      continueBtn.addEventListener('click', () => this.handleSignin());
    }

    // Category dropdown
    const categoryDropdown = document.getElementById('categoryDropdown');
    if (categoryDropdown) {
      categoryDropdown.addEventListener('change', (e) => {
        this.filterByCategory(e.target.value);
      });
    }

    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.nav-account') && !e.target.closest('.account-dropdown')) {
        this.closeAccountDropdown();
      }
      if (!e.target.closest('.cart-container')) {
        this.closeCart();
      }
    });

    // Escape key to close dropdowns
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeAccountDropdown();
        this.closeCart();
      }
    });
  }

  // Search functionality
  setupSearch() {
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
      // Add search suggestions
      searchInput.addEventListener('focus', () => {
        this.showSearchSuggestions();
      });

      searchInput.addEventListener('blur', () => {
        setTimeout(() => this.hideSearchSuggestions(), 200);
      });
    }
  }

  showSearchSuggestions() {
    let suggestionsContainer = document.getElementById('search-suggestions');
    if (!suggestionsContainer) {
      suggestionsContainer = document.createElement('div');
      suggestionsContainer.id = 'search-suggestions';
      suggestionsContainer.className = 'search-suggestions';
      document.querySelector('.navbar-search').appendChild(suggestionsContainer);
    }

    const suggestions = [
      'Electronics', 'Fashion', 'Books', 'Home & Kitchen',
      'Beauty', 'Sports', 'Toys', 'Automotive'
    ];

    suggestionsContainer.innerHTML = suggestions.map(suggestion => 
      `<div class="suggestion-item" onclick="this.selectSuggestion('${suggestion}')">${suggestion}</div>`
    ).join('');
    suggestionsContainer.style.display = 'block';
  }

  hideSearchSuggestions() {
    const suggestionsContainer = document.getElementById('search-suggestions');
    if (suggestionsContainer) {
      suggestionsContainer.style.display = 'none';
    }
  }

  selectSuggestion(suggestion) {
    document.querySelector('.search-input').value = suggestion;
    this.hideSearchSuggestions();
    this.performSearch(suggestion);
  }

  performSearch(query) {
    if (!query) return;

    this.searchResults = this.products.filter(product => 
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase())
    );

    this.displaySearchResults();
  }

  displaySearchResults() {
    let resultsContainer = document.getElementById('search-results');
    if (!resultsContainer) {
      resultsContainer = document.createElement('div');
      resultsContainer.id = 'search-results';
      resultsContainer.className = 'search-results';
      document.body.appendChild(resultsContainer);
    }

    if (this.searchResults.length === 0) {
      resultsContainer.innerHTML = '<div class="no-results">No products found</div>';
    } else {
      resultsContainer.innerHTML = this.searchResults.map(product => `
        <div class="search-result-item" onclick="this.addToCart('${product.id}')">
          <img src="${product.image}" alt="${product.name}">
          <div class="result-info">
            <h4>${product.name}</h4>
            <p class="price">₹${product.price.toLocaleString()}</p>
            <p class="rating">⭐ ${product.rating} (${product.reviews.toLocaleString()})</p>
          </div>
        </div>
      `).join('');
    }

    resultsContainer.style.display = 'block';
  }

  // Cart functionality
  addToCart(productId) {
    const product = this.products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = this.cart.find(item => item.id === productId);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }

    this.saveCartToStorage();
    this.updateCartDisplay();
    this.showNotification(`Added ${product.name} to cart!`);
  }

  removeFromCart(productId) {
    this.cart = this.cart.filter(item => item.id !== productId);
    this.saveCartToStorage();
    this.updateCartDisplay();
  }

  updateQuantity(productId, change) {
    const item = this.cart.find(item => item.id === productId);
    if (item) {
      item.quantity += change;
      if (item.quantity <= 0) {
        this.removeFromCart(productId);
      } else {
        this.saveCartToStorage();
        this.updateCartDisplay();
      }
    }
  }

  getCartTotal() {
    return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  getCartCount() {
    return this.cart.reduce((count, item) => count + item.quantity, 0);
  }

  saveCartToStorage() {
    localStorage.setItem('amazon-clone-cart', JSON.stringify(this.cart));
  }

  loadCartFromStorage() {
    const savedCart = localStorage.getItem('amazon-clone-cart');
    if (savedCart) {
      this.cart = JSON.parse(savedCart);
    }
  }

  updateCartDisplay() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
      cartCount.textContent = this.getCartCount();
    }

    // Update cart dropdown if open
    this.updateCartDropdown();
  }

  updateCartDropdown() {
    let cartDropdown = document.querySelector('.cart-dropdown');
    if (!cartDropdown) return;

    if (this.cart.length === 0) {
      cartDropdown.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
    } else {
      cartDropdown.innerHTML = `
        <div class="cart-items">
          ${this.cart.map(item => `
            <div class="cart-item">
              <img src="${item.image}" alt="${item.name}">
              <div class="item-details">
                <h4>${item.name}</h4>
                <p class="price">₹${item.price.toLocaleString()}</p>
                <div class="quantity-controls">
                  <button onclick="amazonClone.updateQuantity('${item.id}', -1)">-</button>
                  <span>${item.quantity}</span>
                  <button onclick="amazonClone.updateQuantity('${item.id}', 1)">+</button>
                </div>
              </div>
              <button class="remove-btn" onclick="amazonClone.removeFromCart('${item.id}')">×</button>
            </div>
          `).join('')}
        </div>
        <div class="cart-total">
          <strong>Total: ₹${this.getCartTotal().toLocaleString()}</strong>
        </div>
        <button class="checkout-btn" onclick="amazonClone.checkout()">Proceed to Checkout</button>
      `;
    }
  }

  toggleCart() {
    let cartContainer = document.querySelector('.cart-container');
    if (!cartContainer) {
      cartContainer = document.createElement('div');
      cartContainer.className = 'cart-container';
      cartContainer.innerHTML = `
        <div class="cart-header">
          <h3>Shopping Cart</h3>
          <button onclick="amazonClone.closeCart()">×</button>
        </div>
        <div class="cart-dropdown"></div>
      `;
      document.body.appendChild(cartContainer);
    }

    if (cartContainer.style.display === 'block') {
      this.closeCart();
    } else {
      this.openCart();
    }
  }

  openCart() {
    const cartContainer = document.querySelector('.cart-container');
    if (cartContainer) {
      cartContainer.style.display = 'block';
      this.updateCartDropdown();
    }
  }

  closeCart() {
    const cartContainer = document.querySelector('.cart-container');
    if (cartContainer) {
      cartContainer.style.display = 'none';
    }
  }

  // Account functionality
  toggleAccountDropdown() {
    const dropdown = document.getElementById('accountDropdown');
    if (dropdown) {
      const isVisible = dropdown.style.visibility === 'visible';
      if (isVisible) {
        this.closeAccountDropdown();
      } else {
        this.openAccountDropdown();
      }
    }
  }

  openAccountDropdown() {
    const dropdown = document.getElementById('accountDropdown');
    if (dropdown) {
      dropdown.style.visibility = 'visible';
      dropdown.style.opacity = '1';
      dropdown.setAttribute('aria-hidden', 'false');
    }
  }

  closeAccountDropdown() {
    const dropdown = document.getElementById('accountDropdown');
    if (dropdown) {
      dropdown.style.visibility = 'hidden';
      dropdown.style.opacity = '';
      dropdown.setAttribute('aria-hidden', 'true');
    }
  }

  handleSignin() {
    const input = document.getElementById('signin-identifier');
    const email = input.value.trim();
    
    if (!email) {
      input.classList.add('error');
      return;
    }

    // Simulate signin process
    this.currentUser = { email };
    this.showNotification(`Welcome back, ${email}!`);
    this.closeAccountDropdown();
    
    // Update UI to show logged in state
    this.updateUserInterface();
  }

  updateUserInterface() {
    const accountBtn = document.getElementById('loginBtn');
    if (accountBtn && this.currentUser) {
      accountBtn.innerHTML = `
        <div class="nav-account-line1">Hello, ${this.currentUser.email.split('@')[0]}</div>
        <div class="nav-account-line2">Account & Lists <i class="fa fa-chevron-down"></i></div>
      `;
    }
  }

  // Product interactions
  setupProductInteractions() {
    // Add click handlers to product images
    document.addEventListener('click', (e) => {
      if (e.target.closest('.product-image-item')) {
        const productCard = e.target.closest('.product-card');
        if (productCard) {
          const productName = productCard.querySelector('h2').textContent;
          const product = this.products.find(p => 
            productName.toLowerCase().includes(p.name.toLowerCase())
          );
          if (product) {
            this.showProductDetails(product);
          }
        }
      }
    });
  }

  showProductDetails(product) {
    const modal = document.createElement('div');
    modal.className = 'product-modal';
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close-modal" onclick="this.parentElement.parentElement.remove()">&times;</span>
        <div class="product-details">
          <img src="${product.image}" alt="${product.name}">
          <div class="product-info">
            <h2>${product.name}</h2>
            <div class="rating">⭐ ${product.rating} (${product.reviews.toLocaleString()} reviews)</div>
            <div class="price-section">
              <span class="current-price">₹${product.price.toLocaleString()}</span>
              <span class="original-price">₹${product.originalPrice.toLocaleString()}</span>
              <span class="discount">${Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% off</span>
            </div>
            <p class="description">${product.description}</p>
            <button class="add-to-cart-btn" onclick="amazonClone.addToCart('${product.id}'); this.parentElement.parentElement.parentElement.remove()">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  // Carousel functionality
  initializeCarousel() {
    const carouselContainer = document.querySelector('.carousel-container');
    const slides = Array.from(document.querySelectorAll('.carousel-slide'));
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dots = Array.from(document.querySelectorAll('.carousel-dots .dot'));
    
    if (!carouselContainer || slides.length === 0) return;

    let currentIndex = 0;
    let autoSlideInterval = null;

    const showSlide = (index) => {
      currentIndex = (index + slides.length) % slides.length;
      const slidePercent = 100 / slides.length;
      const offset = -currentIndex * slidePercent;
      carouselContainer.style.transform = `translateX(${offset}%)`;
      
      slides.forEach((s, i) => s.classList.toggle('active', i === currentIndex));
      dots.forEach((d, i) => d.classList.toggle('active', i === currentIndex));
    };

    const nextSlide = () => showSlide(currentIndex + 1);
    const prevSlide = () => showSlide(currentIndex - 1);

    if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); this.resetAutoSlide(); });
    if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); this.resetAutoSlide(); });

    dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => { showSlide(idx); this.resetAutoSlide(); });
    });

    this.startAutoSlide = () => {
      this.stopAutoSlide();
      autoSlideInterval = setInterval(nextSlide, 5000);
    };

    this.stopAutoSlide = () => {
      if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
        autoSlideInterval = null;
      }
    };

    this.resetAutoSlide = () => {
      this.stopAutoSlide();
      this.startAutoSlide();
    };

    // Pause on hover
    const hero = document.querySelector('.hero-carousel');
    if (hero) {
      hero.addEventListener('mouseenter', () => this.stopAutoSlide());
      hero.addEventListener('mouseleave', () => this.startAutoSlide());
    }

    // Initialize
    carouselContainer.style.width = `${slides.length * 100}%`;
    slides.forEach(s => s.style.width = `${100 / slides.length}%`);
    showSlide(0);
    this.startAutoSlide();
  }

  // Utility functions
  showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.classList.add('show');
    }, 100);

    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }

  filterByCategory(category) {
    if (category === 'all') {
      this.displayAllProducts();
    } else {
      const filtered = this.products.filter(p => 
        p.category.toLowerCase() === category.toLowerCase()
      );
      this.displayFilteredProducts(filtered);
    }
  }

  displayAllProducts() {
    // Reset to show all products
    const productGrid = document.querySelector('.product-grid');
    if (productGrid) {
      productGrid.style.display = 'block';
    }
  }

  displayFilteredProducts(products) {
    // This would update the product display
    // For now, just show a notification
    this.showNotification(`Showing ${products.length} products in selected category`);
  }

  checkout() {
    if (this.cart.length === 0) {
      this.showNotification('Your cart is empty!');
      return;
    }

    this.showNotification('Redirecting to checkout...');
    // In a real app, this would redirect to a checkout page
    setTimeout(() => {
      this.showNotification('Checkout functionality coming soon!');
    }, 1000);
  }

  // Responsive menu
  setupResponsiveMenu() {
    const hamburgerBtn = document.querySelector('.hamburger-menu');
    const allMenu = document.getElementById('allMenu');
    const allMenuOverlay = document.getElementById('allMenuOverlay');
    const allMenuClose = document.querySelector('.drawer-close');

    if (hamburgerBtn && allMenu) {
      hamburgerBtn.addEventListener('click', () => this.openAllMenu());
    }

    if (allMenuOverlay) {
      allMenuOverlay.addEventListener('click', () => this.closeAllMenu());
    }

    if (allMenuClose) {
      allMenuClose.addEventListener('click', () => this.closeAllMenu());
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.closeAllMenu();
    });
  }

  openAllMenu() {
    const allMenu = document.getElementById('allMenu');
    const allMenuOverlay = document.getElementById('allMenuOverlay');
    if (allMenu && allMenuOverlay) {
      allMenu.classList.add('show');
      allMenu.setAttribute('aria-hidden', 'false');
      allMenuOverlay.classList.add('show');
      allMenuOverlay.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  }

  closeAllMenu() {
    const allMenu = document.getElementById('allMenu');
    const allMenuOverlay = document.getElementById('allMenuOverlay');
    if (allMenu && allMenuOverlay) {
      allMenu.classList.remove('show');
      allMenu.setAttribute('aria-hidden', 'true');
      allMenuOverlay.classList.remove('show');
      allMenuOverlay.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }
}

// Initialize the application
let amazonClone;
document.addEventListener('DOMContentLoaded', () => {
  amazonClone = new AmazonClone();
  
  // Initialize delivery location
  updateDeliveryLocation();
  
  // Setup location update link
  const updateLocationLink = document.querySelector('.update-location');
  if (updateLocationLink) {
    updateLocationLink.addEventListener('click', (e) => {
      e.preventDefault();
      updateDeliveryLocation(true);
    });
  }
});

// Delivery location functionality
async function updateDeliveryLocation(showLoading = true) {
  const deliveryLabel = document.getElementById('deliveryLabel');
  if (!deliveryLabel) return;
  
  if (!navigator.geolocation) {
    deliveryLabel.textContent = 'Location not available';
    return;
  }
  
  if (showLoading) deliveryLabel.textContent = 'Detecting your location...';
  
  navigator.geolocation.getCurrentPosition(async (position) => {
    const { latitude, longitude } = position.coords;
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
      const data = await response.json();
      if (data && data.address) {
        const city = data.address.city || data.address.town || data.address.village || '';
        const region = data.address.state || '';
        const postcode = data.address.postcode || '';
        deliveryLabel.textContent = `Delivering to ${city ? city + ', ' : ''}${region}${postcode ? ' ' + postcode : ''}`;
      } else {
        deliveryLabel.textContent = 'Delivering to your area';
      }
    } catch (err) {
      deliveryLabel.textContent = 'Delivering to your area';
    }
  }, () => {
    deliveryLabel.textContent = 'Location permission denied';
  });
}
