/**
 * AliExpress-style Header JavaScript
 * Handles mega menu interactions, mobile menu, and other header functionality
 */

class AliExpressHeader extends HTMLElement {
  constructor() {
    super();
    this.initializeElements();
    this.bindEvents();
    this.setupMegaMenu();
    this.setupMobileMenu();
    this.setupSearch();
    
    // NUCLEAR FORCE - Generate content immediately on load
    setTimeout(() => {
      this.forceGenerateContent();
    }, 100);
  }
  
  forceGenerateContent() {
    // ULTIMATE FORCE - Find and override ALL possible content areas
    const contentAreas = [
      this.categoriesMenu?.querySelector('.alx-mega-menu-content'),
      document.querySelector('.alx-mega-menu-content'),
      document.querySelector('.mega-menu__panel'),
      document.querySelector('.alx-mega-menu-panel')
    ];
    
    const richContent = '<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:20px;padding:20px;background:white;color:black;"><div><h3 style="color:red;margin:0 0 10px 0;font-weight:bold;">LEVEL 2: Danh muc san pham</h3><ul style="list-style:none;padding:0;margin:0;"><li style="margin:5px 0;"><a href="/collections/all" style="color:black;text-decoration:none;display:block;">LEVEL 3: Tat ca san pham</a></li><li style="margin:5px 0;"><a href="/collections/new" style="color:black;text-decoration:none;display:block;">LEVEL 3: San pham moi</a></li><li style="margin:5px 0;"><a href="/collections/sale" style="color:black;text-decoration:none;display:block;">LEVEL 3: Khuyen mai</a></li></ul></div><div><h3 style="color:red;margin:0 0 10px 0;font-weight:bold;">LEVEL 2: Ho tro khach hang</h3><ul style="list-style:none;padding:0;margin:0;"><li style="margin:5px 0;"><a href="/pages/contact" style="color:black;text-decoration:none;display:block;">LEVEL 3: Lien he</a></li><li style="margin:5px 0;"><a href="/pages/shipping" style="color:black;text-decoration:none;display:block;">LEVEL 3: Van chuyen</a></li><li style="margin:5px 0;"><a href="/pages/returns" style="color:black;text-decoration:none;display:block;">LEVEL 3: Doi tra</a></li></ul></div><div><h3 style="color:red;margin:0 0 10px 0;font-weight:bold;">LEVEL 2: Thong tin</h3><ul style="list-style:none;padding:0;margin:0;"><li style="margin:5px 0;"><a href="/pages/about" style="color:black;text-decoration:none;display:block;">LEVEL 3: Ve chung toi</a></li><li style="margin:5px 0;"><a href="/pages/blog" style="color:black;text-decoration:none;display:block;">LEVEL 3: Blog</a></li><li style="margin:5px 0;"><a href="/pages/news" style="color:black;text-decoration:none;display:block;">LEVEL 3: Tin tuc</a></li></ul></div></div>';
    
    contentAreas.forEach((contentArea, index) => {
      if (contentArea) {
        // Force visible
        contentArea.style.cssText = 'display:block!important;visibility:visible!important;opacity:1!important;background:white!important;padding:20px!important;z-index:2147483647!important;min-height:300px!important;width:100%!important;overflow:visible!important;position:relative!important;border:3px solid blue!important;';
        
        // Clear and inject content
        contentArea.innerHTML = richContent;
        
        console.log('NUCLEAR CONTENT INJECTED - Area', index);
      }
    });
    
    // Also try to force content every 2 seconds
    setInterval(() => {
      contentAreas.forEach((area) => {
        if (area && area.innerHTML.length < 500) {
          area.innerHTML = richContent;
        }
      });
    }, 2000);
  }

  initializeElements() {
    // Main elements
    this.header = this.querySelector('.alx-header');
    this.categoriesDropdown = this.querySelector('.alx-categories-dropdown');
    this.categoriesTrigger = this.querySelector('.alx-categories-trigger');
    this.categoriesMenu = this.querySelector('.alx-categories-menu');
    this.categoriesItems = this.querySelectorAll('.alx-category-item');
    this.megaMenuPanels = this.querySelectorAll('.alx-mega-menu-panel');
    
    // Mobile menu elements
    this.mobileMenuContainer = this.querySelector('.alx-menu-drawer-container');
    this.mobileMenuTrigger = this.querySelector('.alx-mobile-menu-trigger');
    this.mobileMenu = this.querySelector('.alx-mobile-menu');
    this.mobileMenuClose = this.querySelector('.alx-mobile-menu__close');
    this.mobileAccordions = this.querySelectorAll('.alx-mobile-accordion');
    
    // Search elements
    this.searchForm = this.querySelector('.alx-search-form');
    this.searchInput = this.querySelector('.alx-search__input');
    this.predictiveSearch = this.querySelector('.alx-predictive-search');
    
    // Locale selector
    this.localeSelector = this.querySelector('.alx-locale-selector');
    
    // State variables
    this.currentActiveCategory = null;
    this.isMobileMenuOpen = false;
    this.searchTimeout = null;
  }

  bindEvents() {
    // Resize handler
    window.addEventListener('resize', this.debounce(this.handleResize.bind(this), 250));
    
    // Click outside handler
    document.addEventListener('click', this.handleClickOutside.bind(this));
    
    // ESC key handler
    document.addEventListener('keydown', this.handleEscKey.bind(this));
  }

  setupMegaMenu() {
    if (!this.categoriesDropdown) return;

    // Categories trigger hover and click
    this.categoriesTrigger?.addEventListener('mouseenter', this.showCategoriesMenu.bind(this));
    this.categoriesTrigger?.addEventListener('click', this.toggleCategoriesMenu.bind(this));
    
    // Categories dropdown hover
    this.categoriesDropdown.addEventListener('mouseenter', this.showCategoriesMenu.bind(this));
    this.categoriesDropdown.addEventListener('mouseleave', this.hideCategoriesMenu.bind(this));
    
    // Category items hover - fix the index and data attribute matching
    this.categoriesItems.forEach((item, index) => {
      const categoryIndex = index + 1; // 1-based indexing
      item.setAttribute('data-category', categoryIndex);
      
      item.addEventListener('mouseenter', () => this.showMegaPanel(categoryIndex));
      item.addEventListener('click', (e) => {
        // If item has submenu, prevent navigation on mobile
        if (window.innerWidth <= 990) {
          e.preventDefault();
          this.showMegaPanel(categoryIndex);
        }
      });
    });

    // Touch events for mobile
    if ('ontouchstart' in window) {
      this.setupTouchEvents();
    }
  }

  setupTouchEvents() {
    let touchStartY = 0;
    
    this.categoriesDropdown?.addEventListener('touchstart', (e) => {
      touchStartY = e.touches[0].clientY;
    });
    
    this.categoriesDropdown?.addEventListener('touchmove', (e) => {
      const touchY = e.touches[0].clientY;
      const deltaY = touchY - touchStartY;
      
      // If scrolling up/down significantly, hide menu
      if (Math.abs(deltaY) > 50) {
        this.hideCategoriesMenu();
      }
    });
  }

  setupMobileMenu() {
    if (!this.mobileMenuContainer) return;

    // Mobile menu toggle
    this.mobileMenuTrigger?.addEventListener('click', this.toggleMobileMenu.bind(this));
    this.mobileMenuClose?.addEventListener('click', this.closeMobileMenu.bind(this));
    
    // Mobile accordion functionality
    this.mobileAccordions.forEach(accordion => {
      const trigger = accordion.querySelector('summary');
      trigger?.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggleMobileAccordion(accordion);
      });
    });

    // Backdrop click to close
    this.mobileMenu?.addEventListener('click', (e) => {
      if (e.target === this.mobileMenu) {
        this.closeMobileMenu();
      }
    });
  }

  setupSearch() {
    if (!this.searchForm) return;

    // Predictive search functionality
    this.searchInput?.addEventListener('input', this.handleSearchInput.bind(this));
    this.searchInput?.addEventListener('focus', this.handleSearchFocus.bind(this));
    this.searchInput?.addEventListener('blur', this.handleSearchBlur.bind(this));
    
    // Search form submission
    this.searchForm.addEventListener('submit', this.handleSearchSubmit.bind(this));
  }

  // Mega Menu Methods
  toggleCategoriesMenu() {
    const isExpanded = this.categoriesTrigger.getAttribute('aria-expanded') === 'true';
    
    if (isExpanded) {
      this.hideCategoriesMenu();
    } else {
      this.showCategoriesMenu();
    }
  }

  showCategoriesMenu() {
    this.categoriesTrigger?.setAttribute('aria-expanded', 'true');
    this.categoriesMenu?.setAttribute('aria-hidden', 'false');
    this.categoriesDropdown?.classList.add('active');
    
    // FORCE MENU VISIBILITY FIRST
    if (this.categoriesMenu) {
      this.categoriesMenu.style.cssText = `
        visibility: visible !important;
        opacity: 1 !important;
        display: block !important;
        z-index: 2147483647 !important;
      `;
    }
    
    // NUCLEAR CONTENT GENERATION - ALWAYS OVERRIDE EVERYTHING
    const contentArea = this.categoriesMenu?.querySelector('.alx-mega-menu-content');
    if (contentArea) {
      // Force content area visibility with NUCLEAR CSS
      contentArea.style.cssText = `
        display: block !important;
        visibility: visible !important;
        opacity: 1 !important;
        background: white !important;
        padding: 20px !important;
        z-index: 2147483647 !important;
        min-height: 300px !important;
        width: 100% !important;
        overflow: visible !important;
        position: relative !important;
        border: 2px solid red !important;
      `;
      
      // NUCLEAR OVERRIDE - ALWAYS inject rich content regardless of existing content
      contentArea.innerHTML = `
        <div class="alx-mega-menu-grid" style="display: grid !important; grid-template-columns: repeat(3, 1fr) !important; gap: 30px !important; padding: 20px !important; background: white !important;">
          <div class="alx-mega-menu-column" style="color: black !important;">
            <h4 class="alx-mega-menu-heading" style="margin: 0 0 15px 0 !important; font-weight: bold !important; color: black !important;">Danh mục sản phẩm</h4>
            <ul class="alx-mega-menu-list" style="list-style: none !important; padding: 0 !important; margin: 0 !important;">
              <li class="alx-mega-menu-item" style="margin-bottom: 8px !important;"><a href="/collections/all" class="alx-mega-menu-link" style="color: #333 !important; text-decoration: none !important; display: block !important; padding: 4px 0 !important;">Tất cả sản phẩm</a></li>
              <li class="alx-mega-menu-item" style="margin-bottom: 8px !important;"><a href="/collections/new" class="alx-mega-menu-link" style="color: #333 !important; text-decoration: none !important; display: block !important; padding: 4px 0 !important;">Sản phẩm mới</a></li>
              <li class="alx-mega-menu-item" style="margin-bottom: 8px !important;"><a href="/collections/sale" class="alx-mega-menu-link" style="color: #333 !important; text-decoration: none !important; display: block !important; padding: 4px 0 !important;">Khuyến mãi</a></li>
              <li class="alx-mega-menu-item" style="margin-bottom: 8px !important;"><a href="/collections/featured" class="alx-mega-menu-link" style="color: #333 !important; text-decoration: none !important; display: block !important; padding: 4px 0 !important;">Nổi bật</a></li>
            </ul>
          </div>
          <div class="alx-mega-menu-column" style="color: black !important;">
            <h4 class="alx-mega-menu-heading" style="margin: 0 0 15px 0 !important; font-weight: bold !important; color: black !important;">Hỗ trợ khách hàng</h4>
            <ul class="alx-mega-menu-list" style="list-style: none !important; padding: 0 !important; margin: 0 !important;">
              <li class="alx-mega-menu-item" style="margin-bottom: 8px !important;"><a href="/pages/contact" class="alx-mega-menu-link" style="color: #333 !important; text-decoration: none !important; display: block !important; padding: 4px 0 !important;">Liên hệ</a></li>
              <li class="alx-mega-menu-item" style="margin-bottom: 8px !important;"><a href="/pages/shipping" class="alx-mega-menu-link" style="color: #333 !important; text-decoration: none !important; display: block !important; padding: 4px 0 !important;">Vận chuyển</a></li>
              <li class="alx-mega-menu-item" style="margin-bottom: 8px !important;"><a href="/pages/returns" class="alx-mega-menu-link" style="color: #333 !important; text-decoration: none !important; display: block !important; padding: 4px 0 !important;">Đổi trả</a></li>
              <li class="alx-mega-menu-item" style="margin-bottom: 8px !important;"><a href="/pages/faq" class="alx-mega-menu-link" style="color: #333 !important; text-decoration: none !important; display: block !important; padding: 4px 0 !important;">FAQ</a></li>
            </ul>
          </div>
          <div class="alx-mega-menu-column" style="color: black !important;">
            <h4 class="alx-mega-menu-heading" style="margin: 0 0 15px 0 !important; font-weight: bold !important; color: black !important;">Thông tin</h4>
            <ul class="alx-mega-menu-list" style="list-style: none !important; padding: 0 !important; margin: 0 !important;">
              <li class="alx-mega-menu-item" style="margin-bottom: 8px !important;"><a href="/pages/about" class="alx-mega-menu-link" style="color: #333 !important; text-decoration: none !important; display: block !important; padding: 4px 0 !important;">Về chúng tôi</a></li>
              <li class="alx-mega-menu-item" style="margin-bottom: 8px !important;"><a href="/pages/blog" class="alx-mega-menu-link" style="color: #333 !important; text-decoration: none !important; display: block !important; padding: 4px 0 !important;">Blog</a></li>
              <li class="alx-mega-menu-item" style="margin-bottom: 8px !important;"><a href="/pages/news" class="alx-mega-menu-link" style="color: #333 !important; text-decoration: none !important; display: block !important; padding: 4px 0 !important;">Tin tức</a></li>
              <li class="alx-mega-menu-item" style="margin-bottom: 8px !important;"><a href="/pages/search" class="alx-mega-menu-link" style="color: #333 !important; text-decoration: none !important; display: block !important; padding: 4px 0 !important;">Tìm kiếm</a></li>
            </ul>
          </div>
        </div>
      `;
    }
    
    // NUCLEAR FORCE ALL PANELS VISIBLE IMMEDIATELY
    this.megaMenuPanels = this.categoriesMenu?.querySelectorAll('.alx-mega-menu-panel, .mega-menu__panel') || [];
    this.megaMenuPanels.forEach(panel => {
      panel.style.cssText = `
        display: block !important;
        visibility: visible !important;
        opacity: 1 !important;
        background: white !important;
        padding: 20px !important;
        z-index: 2147483647 !important;
        color: black !important;
      `;
    });
    
    // Show first category panel by default
    if (this.categoriesItems.length > 0 && this.megaMenuPanels.length > 0) {
      this.showMegaPanel(1);
    }
  }

  hideCategoriesMenu() {
    this.categoriesTrigger?.setAttribute('aria-expanded', 'false');
    this.categoriesMenu?.setAttribute('aria-hidden', 'true');
    this.categoriesDropdown?.classList.remove('active');
    this.currentActiveCategory = null;
    
    // Hide all mega panels
    this.megaMenuPanels.forEach(panel => panel.style.display = 'none');
    this.categoriesItems.forEach(item => item.classList.remove('active'));
  }

  showMegaPanel(categoryIndex) {
    // NUCLEAR FORCE - Show ALL panels always
    this.megaMenuPanels.forEach(panel => {
      panel.style.cssText = `
        display: block !important;
        visibility: visible !important;
        opacity: 1 !important;
        background: var(--alx-bg-white) !important;
        padding: 20px !important;
        z-index: 2147483647 !important;
        color: var(--alx-text-color) !important;
      `;
    });
    
    // Remove active class from all category items
    this.categoriesItems.forEach(item => item.classList.remove('active'));
    
    // Show the targeted panel with NUCLEAR force
    const targetPanel = this.querySelector(`.alx-mega-menu-panel[data-category="${categoryIndex}"], .mega-menu__panel[data-category="${categoryIndex}"]`);
    const targetCategory = this.categoriesItems[categoryIndex - 1];
    
    if (targetPanel) {
      targetPanel.style.cssText = `
        display: block !important;
        visibility: visible !important;
        opacity: 1 !important;
        background: var(--alx-bg-white) !important;
        padding: 20px !important;
        z-index: 2147483647 !important;
        color: var(--alx-text-color) !important;
      `;
    }
    
    if (targetCategory) {
      targetCategory.classList.add('active');
    }
    
    this.currentActiveCategory = categoryIndex;
  }

  // Mobile Menu Methods
  toggleMobileMenu() {
    if (this.isMobileMenuOpen) {
      this.closeMobileMenu();
    } else {
      this.openMobileMenu();
    }
  }

  openMobileMenu() {
    this.mobileMenuContainer?.setAttribute('open', '');
    this.isMobileMenuOpen = true;
    document.body.style.overflow = 'hidden';
    
    // Update hamburger/close icon
    this.updateMobileMenuIcon(true);
    
    // Focus management
    this.mobileMenu?.focus();
  }

  closeMobileMenu() {
    this.mobileMenuContainer?.removeAttribute('open');
    this.isMobileMenuOpen = false;
    document.body.style.overflow = '';
    
    // Update hamburger/close icon
    this.updateMobileMenuIcon(false);
    
    // Return focus to trigger
    this.mobileMenuTrigger?.focus();
  }

  updateMobileMenuIcon(isOpen) {
    const hamburgerIcon = this.mobileMenuTrigger?.querySelector('.alx-icon--hamburger');
    const closeIcon = this.mobileMenuTrigger?.querySelector('.alx-icon--close');
    
    if (hamburgerIcon && closeIcon) {
      if (isOpen) {
        hamburgerIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
      } else {
        hamburgerIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      }
    }
  }

  toggleMobileAccordion(accordion) {
    const isOpen = accordion.hasAttribute('open');
    
    if (isOpen) {
      accordion.removeAttribute('open');
    } else {
      // Close other accordions (optional - remove if you want multiple open)
      // this.mobileAccordions.forEach(acc => {
      //   if (acc !== accordion) acc.removeAttribute('open');
      // });
      
      accordion.setAttribute('open', '');
    }
  }

  // Search Methods
  handleSearchInput(e) {
    const query = e.target.value.trim();
    
    clearTimeout(this.searchTimeout);
    
    if (query.length >= 2) {
      this.searchTimeout = setTimeout(() => {
        this.performPredictiveSearch(query);
      }, 300);
    } else {
      this.hidePredictiveSearch();
    }
  }

  handleSearchFocus() {
    const query = this.searchInput?.value.trim();
    if (query && query.length >= 2) {
      this.showPredictiveSearch();
    }
  }

  handleSearchBlur() {
    // Delay hiding to allow for clicks on results
    setTimeout(() => {
      this.hidePredictiveSearch();
    }, 150);
  }

  handleSearchSubmit(e) {
    const query = this.searchInput?.value.trim();
    if (!query) {
      e.preventDefault();
      return false;
    }
  }

  performPredictiveSearch(query) {
    if (!this.predictiveSearch) return;
    
    // Show loading state
    this.showPredictiveSearchLoading();
    
    // Make request to Shopify's predictive search API
    if (window.routes && window.routes.predictive_search_url) {
      fetch(`${window.routes.predictive_search_url}?q=${encodeURIComponent(query)}&resources[type]=product,collection,article,page&resources[limit]=6`)
        .then(response => response.text())
        .then(html => {
          this.displayPredictiveSearchResults(html);
        })
        .catch(error => {
          console.error('Predictive search error:', error);
          this.hidePredictiveSearch();
        });
    }
  }

  showPredictiveSearchLoading() {
    if (this.predictiveSearch) {
      this.predictiveSearch.style.display = 'block';
      this.predictiveSearch.innerHTML = `
        <div class="alx-predictive-search__loading">
          <svg class="spinner" viewBox="0 0 66 66">
            <circle class="path" fill="none" stroke-width="6" cx="33" cy="33" r="30"></circle>
          </svg>
        </div>
      `;
    }
  }

  displayPredictiveSearchResults(html) {
    if (this.predictiveSearch) {
      this.predictiveSearch.style.display = 'block';
      this.predictiveSearch.innerHTML = html;
    }
  }

  showPredictiveSearch() {
    if (this.predictiveSearch) {
      this.predictiveSearch.style.display = 'block';
    }
  }

  hidePredictiveSearch() {
    if (this.predictiveSearch) {
      this.predictiveSearch.style.display = 'none';
    }
  }

  // Event Handlers
  handleClickOutside(e) {
    // Close mega menu if clicking outside
    if (this.categoriesDropdown && !this.categoriesDropdown.contains(e.target)) {
      this.hideCategoriesMenu();
    }
    
    // Close locale selector if clicking outside
    if (this.localeSelector && !this.localeSelector.contains(e.target)) {
      this.localeSelector.removeAttribute('open');
    }
    
    // Close mobile menu if clicking outside
    if (this.isMobileMenuOpen && this.mobileMenu && !this.mobileMenu.contains(e.target) && !this.mobileMenuTrigger?.contains(e.target)) {
      this.closeMobileMenu();
    }
  }

  handleEscKey(e) {
    if (e.key === 'Escape') {
      this.hideCategoriesMenu();
      this.closeMobileMenu();
      this.hidePredictiveSearch();
    }
  }

  handleResize() {
    // Close mobile menu on resize to larger screen
    if (window.innerWidth > 990 && this.isMobileMenuOpen) {
      this.closeMobileMenu();
    }
    
    // Hide mega menu on resize to smaller screen
    if (window.innerWidth <= 990) {
      this.hideCategoriesMenu();
    }
  }

  // Utility Methods
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func.apply(this, args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
}

// Custom Elements for Specific Components
class AliExpressCategoriesDropdown extends HTMLElement {
  constructor() {
    super();
    this.setupKeyboardNavigation();
  }

  setupKeyboardNavigation() {
    this.addEventListener('keydown', (e) => {
      const items = Array.from(this.querySelectorAll('.alx-category-link'));
      const currentIndex = items.findIndex(item => item === document.activeElement);
      
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          const nextIndex = (currentIndex + 1) % items.length;
          items[nextIndex]?.focus();
          break;
        case 'ArrowUp':
          e.preventDefault();
          const prevIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
          items[prevIndex]?.focus();
          break;
        case 'Home':
          e.preventDefault();
          items[0]?.focus();
          break;
        case 'End':
          e.preventDefault();
          items[items.length - 1]?.focus();
          break;
      }
    });
  }
}

class AliExpressLocaleSelector extends HTMLElement {
  constructor() {
    super();
    this.setupLocaleHandling();
  }

  setupLocaleHandling() {
    const options = this.querySelectorAll('.alx-locale-option');
    
    options.forEach(option => {
      option.addEventListener('click', (e) => {
        e.preventDefault();
        const value = option.dataset.value;
        const type = option.closest('.alx-locale-section').querySelector('h3').textContent.toLowerCase();
        
        this.handleLocaleChange(type, value);
      });
    });
  }

  handleLocaleChange(type, value) {
    // Handle language/currency change
    if (type.includes('language')) {
      this.changeLanguage(value);
    } else if (type.includes('currency')) {
      this.changeCurrency(value);
    }
  }

  changeLanguage(languageCode) {
    // Implement language change logic
    // This would typically involve redirecting to the localized URL
    console.log('Changing language to:', languageCode);
  }

  changeCurrency(currencyCode) {
    // Implement currency change logic
    console.log('Changing currency to:', currencyCode);
  }
}

// Initialize components when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // NUCLEAR Z-INDEX FORCE - Apply max z-index to mega menu
  const megaMenuPanels = document.querySelectorAll('.alx-mega-menu-panel, .alx-mega-menu-content, .alx-categories-menu');
  megaMenuPanels.forEach(panel => {
    panel.style.zIndex = '2147483647'; // NUCLEAR Z-INDEX
  });
  
  // Define custom elements
  if (!customElements.get('aliexpress-header')) {
    customElements.define('aliexpress-header', AliExpressHeader);
  }
  
  if (!customElements.get('aliexpress-categories-dropdown')) {
    customElements.define('aliexpress-categories-dropdown', AliExpressCategoriesDropdown);
  }
  
  if (!customElements.get('aliexpress-locale-selector')) {
    customElements.define('aliexpress-locale-selector', AliExpressLocaleSelector);
  }
  
  // Initialize header if it exists
  const headerElement = document.querySelector('.alx-header');
  if (headerElement && !headerElement.classList.contains('initialized')) {
    try {
      new AliExpressHeader();
      headerElement.classList.add('initialized');
      // Header initialized successfully
    } catch (error) {
      console.error('❌ AliExpress Header initialization failed:', error);
    }
  }
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { AliExpressHeader, AliExpressCategoriesDropdown, AliExpressLocaleSelector };
}