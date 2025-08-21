// Realtime location for delivery using Geolocation API and manual update
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

// Single DOMContentLoaded initializer
document.addEventListener('DOMContentLoaded', () => {
  // Initialize delivery label
  updateDeliveryLocation();
  const updateLocationLink = document.querySelector('.update-location');
  if (updateLocationLink) updateLocationLink.addEventListener('click', (e) => { e.preventDefault(); updateDeliveryLocation(true); });

  // ---------- Carousel (hero) ----------
  const carouselContainer = document.querySelector('.carousel-container');
  const slides = Array.from(document.querySelectorAll('.carousel-slide'));
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const dots = Array.from(document.querySelectorAll('.carousel-dots .dot'));
  let currentIndex = 0;
  let autoSlideInterval = null;

  function showSlide(index) {
    if (!carouselContainer || slides.length === 0) return;
    currentIndex = (index + slides.length) % slides.length;
  const slidePercent = 100 / slides.length;
  const offset = -currentIndex * slidePercent;
  carouselContainer.style.transform = `translateX(${offset}%)`;
    slides.forEach((s, i) => s.classList.toggle('active', i === currentIndex));
    dots.forEach((d, i) => d.classList.toggle('active', i === currentIndex));
  }

  function nextSlide() { showSlide(currentIndex + 1); }
  function prevSlide() { showSlide(currentIndex - 1); }

  if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); resetAutoSlide(); });
  if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); resetAutoSlide(); });

  dots.forEach((dot, idx) => { dot.addEventListener('click', () => { showSlide(idx); resetAutoSlide(); }); });

  function startAutoSlide() {
    stopAutoSlide();
    autoSlideInterval = setInterval(nextSlide, 5000);
  }
  function stopAutoSlide() { if (autoSlideInterval) { clearInterval(autoSlideInterval); autoSlideInterval = null; } }
  function resetAutoSlide() { stopAutoSlide(); startAutoSlide(); }

  // Pause on hover
  const hero = document.querySelector('.hero-carousel');
  if (hero) {
    hero.addEventListener('mouseenter', stopAutoSlide);
    hero.addEventListener('mouseleave', startAutoSlide);
  }

  // Initialize positions (use percent translate because slides are 100% width)
  carouselContainer.style.width = `${slides.length * 100}%`;
  slides.forEach(s => s.style.width = `${100 / slides.length}%`);
  showSlide(0);
  startAutoSlide();

  // ---------- Prime popover (mobile toggle) ----------
  const primeTrigger = document.getElementById('primeTrigger');
  const primePopover = document.getElementById('primePopover');
  if (primeTrigger && primePopover) {
    let primeOpen = false;
    function openPrime(){ primePopover.style.opacity = '1'; primePopover.style.visibility = 'visible'; primePopover.style.transform = 'translate(-50%, 0)'; primeTrigger.setAttribute('aria-expanded','true'); primeOpen = true; }
    function closePrime(){ primePopover.style.opacity = ''; primePopover.style.visibility = ''; primePopover.style.transform = ''; primeTrigger.setAttribute('aria-expanded','false'); primeOpen = false; }
    primeTrigger.addEventListener('click', (e) => { const isTouch = matchMedia('(hover: none)').matches; if (!isTouch) return; e.preventDefault(); e.stopPropagation(); primeOpen ? closePrime() : openPrime(); });
    document.addEventListener('click', (e)=>{ if (!primeOpen) return; if (!primePopover.contains(e.target) && !primeTrigger.contains(e.target)) closePrime(); });
    document.addEventListener('keydown', (e)=>{ if (e.key === 'Escape' && primeOpen) closePrime(); });
  }

  // ---------- Hamburger / All menu ----------
  const hamburgerBtn = document.querySelector('.hamburger-menu');
  const allMenu = document.getElementById('allMenu');
  const allMenuOverlay = document.getElementById('allMenuOverlay');
  const allMenuClose = document.querySelector('.drawer-close');
  function openAllMenu(){ if(!allMenu || !allMenuOverlay) return; allMenu.classList.add('show'); allMenu.setAttribute('aria-hidden','false'); allMenuOverlay.classList.add('show'); allMenuOverlay.setAttribute('aria-hidden','false'); document.body.style.overflow = 'hidden'; }
  function closeAllMenu(){ if(!allMenu || !allMenuOverlay) return; allMenu.classList.remove('show'); allMenu.setAttribute('aria-hidden','true'); allMenuOverlay.classList.remove('show'); allMenuOverlay.setAttribute('aria-hidden','true'); document.body.style.overflow = ''; }
  if (hamburgerBtn) hamburgerBtn.addEventListener('click', openAllMenu);
  if (allMenuOverlay) allMenuOverlay.addEventListener('click', closeAllMenu);
  if (allMenuClose) allMenuClose.addEventListener('click', closeAllMenu);
  document.addEventListener('keydown', (e)=>{ if (e.key === 'Escape') closeAllMenu(); });

  // ---------- Account dropdown (basic) ----------
  const account = document.getElementById('loginBtn');
  const accountDropdown = document.getElementById('accountDropdown');
  if (account && accountDropdown) {
  let suppressHoverUntil = 0;
  let suppressTimer = null;
    // Toggle dropdown on click for all devices
    function openAccount() {
      accountDropdown.style.visibility = 'visible';
      accountDropdown.style.opacity = '1';
      accountDropdown.setAttribute('aria-hidden', 'false');
    }
    function closeAccount() {
      accountDropdown.style.visibility = 'hidden';
      accountDropdown.style.opacity = '';
      accountDropdown.setAttribute('aria-hidden', 'true');
  // remove persistent open state if present
  accountDropdown.classList.remove('keep-open');
    }

    // Only use click/tap toggling and outside-click closing on touch devices.
    const isTouchDevice = matchMedia('(hover: none)').matches;
  if (isTouchDevice) {
      account.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = accountDropdown.style.visibility === 'visible';
        if (isOpen) closeAccount(); else openAccount();
      });

      // Close when clicking outside (respect keep-open state)
      document.addEventListener('click', (e) => {
        const keep = accountDropdown.classList.contains('keep-open');
        if (!account.contains(e.target) && !keep) closeAccount();
      });

      // Close on Escape for touch flows
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeAccount();
      });
    } else {
      // Desktop: hover shows dropdown via CSS; still allow Escape to close if desired
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeAccount();
      });

      // Prevent immediate hover reopen after Continue by forcing hidden while suppressed
      account.addEventListener('mouseenter', () => {
        if (Date.now() < suppressHoverUntil) {
          // enforce closed state with inline styles while suppressed
          accountDropdown.style.visibility = 'hidden';
          accountDropdown.style.opacity = '';
        }
      });
    }

    // Wire Continue button in dropdown and keep-open behavior when input focused
    const continueBtn = document.getElementById('continueSignin');
    const signinInput = document.getElementById('signin-identifier');
    if (signinInput) {
      signinInput.addEventListener('focus', () => { accountDropdown.classList.add('keep-open'); openAccount(); });
      signinInput.addEventListener('blur', () => { accountDropdown.classList.remove('keep-open'); });
    }
    if (continueBtn && signinInput) {
      continueBtn.addEventListener('click', () => {
        const val = signinInput.value.trim();
        if (!val) {
          signinInput.style.borderColor = '#e53935';
          signinInput.focus();
          return;
        }
        // blur input to remove focus and any keep-open races
        try { signinInput.blur(); } catch (e) { /* ignore */ }
        // Simple next-step: show confirmation (replace with real auth flow later)
        alert(`Continue with: ${val}`);
        // ensure persistent state removed and close
        accountDropdown.classList.remove('keep-open');
        // Temporarily suppress hover-based reopening using a time window
        suppressHoverUntil = Date.now() + 1500;
        if (suppressTimer) clearTimeout(suppressTimer);
        // enforce hidden state immediately (inline style overrides CSS hover)
        accountDropdown.style.visibility = 'hidden';
        accountDropdown.style.opacity = '';
        suppressTimer = setTimeout(() => {
          suppressHoverUntil = 0;
          // clear inline styles so CSS hover works again
          accountDropdown.style.visibility = '';
          accountDropdown.style.opacity = '';
          suppressTimer = null;
        }, 1500);
        closeAccount();
      });
    }
  }

  // ---------- Search form ----------
  const searchForm = document.querySelector('.navbar-search');
  const searchInput = document.querySelector('.navbar-search input[type="text"]');
  if (searchForm && searchInput) {
    searchForm.addEventListener('submit', (e) => { e.preventDefault(); const q = searchInput.value.trim(); if (q) alert(`Searching for: ${q}`); });
  }

  // Category dropdown placeholder updates
  const searchCategory = document.querySelector('.search-category');
  if (searchCategory && searchInput) {
    searchCategory.addEventListener('change', () => {
      const val = searchCategory.value || '';
      if (val.toLowerCase && val.toLowerCase() === 'all') searchInput.placeholder = 'Search Amazon.in';
      else searchInput.placeholder = `Search ${val} on Amazon.in`;
    });
  }

  // ---------- Language / country modal ----------
  const countryChangeLink = Array.from(document.querySelectorAll('.language-learn-more a')).find(a => a.textContent.trim().toLowerCase() === 'change country/region');
  const countryModal = document.getElementById('countryModal');
  if (countryChangeLink && countryModal) {
    countryChangeLink.addEventListener('click', (e)=>{ e.preventDefault(); countryModal.style.display = 'flex'; });
    countryModal.querySelector('#countrySaveBtn').onclick = () => { countryModal.style.display = 'none'; };
    countryModal.querySelector('#countryCancelBtn').onclick = () => { countryModal.style.display = 'none'; };
    countryModal.addEventListener('click', (e)=>{ if (e.target === countryModal) countryModal.style.display = 'none'; });
  }

  // ---------- Dynamic dropdown width adjustment (category) ----------
  const searchCategoryWrap = document.querySelector('.search-category-wrap');
  function adjustDropdownWidth() {
    if (!searchCategory || !searchCategoryWrap) return;
    const selectedOption = searchCategory.options[searchCategory.selectedIndex];
    const text = selectedOption ? selectedOption.text : '';
    const tempSpan = document.createElement('span');
    tempSpan.style.visibility = 'hidden'; tempSpan.style.position = 'absolute'; tempSpan.style.whiteSpace = 'nowrap'; tempSpan.style.fontSize = '14px'; tempSpan.style.fontWeight = '500'; tempSpan.style.fontFamily = 'inherit'; tempSpan.textContent = text;
    document.body.appendChild(tempSpan);
    const textWidth = tempSpan.offsetWidth;
    document.body.removeChild(tempSpan);
    const minWidth = 70; const arrowPadding = 40; const newWidth = Math.max(minWidth, textWidth + arrowPadding);
    searchCategoryWrap.style.width = newWidth + 'px';
    searchCategory.style.width = newWidth + 'px';
  }
  if (searchCategory) { adjustDropdownWidth(); searchCategory.addEventListener('change', adjustDropdownWidth); window.addEventListener('resize', adjustDropdownWidth); }

  // ---------- Product cards (static) ----------
  const productContainer = document.getElementById('product-container');
  if (productContainer) {
    const products = [
      { id: '1', name: 'Amazon Echo', price: 99.99, image: 'images/products/boAt.jpg' },
      { id: '2', name: 'Kindle Paperwhite', price: 129.99, image: 'images/products/ipad.jpg' },
      { id: '3', name: 'Fire TV Stick', price: 39.99, image: 'images/products/Redmi F Series firetv.jpg' },
    ];
    productContainer.innerHTML = '';
    products.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `\n        <img src="${product.image}" alt="${product.name}" class="product-image" />\n        <h3 class="product-name">${product.name}</h3>\n        <p class="product-price">$${product.price.toFixed(2)}</p>\n      `;
      productContainer.appendChild(card);
    });
  }

  // ---------- Scroll to top button ----------
  const scrollBtn = document.createElement('button');
  scrollBtn.type = 'button'; scrollBtn.innerHTML = '<i class="fa fa-arrow-up" aria-hidden="true"></i>'; scrollBtn.className = 'scroll-to-top'; scrollBtn.setAttribute('aria-label', 'Scroll to top');
  document.body.appendChild(scrollBtn);
  window.addEventListener('scroll', () => { scrollBtn.style.display = (window.scrollY > 300) ? 'flex' : 'none'; });
  scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
});
