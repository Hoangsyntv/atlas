Dựa trên tài liệu Shopify và kinh nghiệm về mega menu, đây là hướng dẫn chi tiết để tạo header và mega menu giống AliExpress:

1. Cấu trúc file cần tạo/chỉnh sửa:
Tạo các file mới:

sections/header-aliexpress.liquid - Header chính
snippets/mega-menu.liquid - Mega menu component
assets/mega-menu.css - CSS cho mega menu
assets/mega-menu.js - JavaScript cho mega menu
2. Code cho Header (sections/header-aliexpress.liquid):
<header class="header-aliexpress sticky top-0 z-50 bg-white shadow-md">
  <div class="container mx-auto px-4">
    <div class="flex items-center justify-between h-16">
      <!-- Logo -->
      <div class="flex-shrink-0">
        <a href="{{ routes.root_url }}" class="logo">
          {% if settings.logo %}
            <img src="{{ settings.logo | img_url: '150x' }}" alt="{{ shop.name }}" class="h-10">
          {% else %}
            <span class="text-xl font-bold">{{ shop.name }}</span>
          {% endif %}
        </a>
      </div>

      <!-- Search Bar -->
      <div class="flex-1 max-w-2xl mx-8">
        <form action="{{ routes.search_url }}" method="get" class="relative">
          <input 
            type="search" 
            name="q" 
            placeholder="Tìm kiếm sản phẩm..." 
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
            value="{{ search.terms | escape }}"
          >
          <button type="submit" class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white px-4 py-1 rounded">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
            </svg>
          </button>
        </form>
      </div>

      <!-- Right Icons -->
      <div class="flex items-center space-x-4">
        <!-- Language/Currency -->
        <div class="relative language-currency-selector">
          <button class="flex items-center space-x-1 text-sm">
            <span>{{ localization.country.currency.iso_code }}</span>
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>

        <!-- Account -->
        <a href="{{ routes.account_url }}" class="flex items-center space-x-1 text-sm">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
          </svg>
          <span class="hidden md:inline">Tài khoản</span>
        </a>

        <!-- Cart -->
        <a href="{{ routes.cart_url }}" class="relative flex items-center">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
          </svg>
          <span class="cart-count absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {{ cart.item_count }}
          </span>
        </a>
      </div>
    </div>
  </div>

  <!-- Menu Bar -->
  <div class="bg-gray-50 border-t">
    <div class="container mx-auto px-4">
      <div class="flex items-center h-12">
        <!-- All Categories Button -->
        <div class="relative mega-menu-container">
          <button class="all-categories-btn flex items-center space-x-2 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
            </svg>
            <span>Tất cả danh mục</span>
          </button>

          <!-- Mega Menu -->
          {% render 'mega-menu' %}
        </div>

        <!-- Additional Menu Items -->
        <nav class="ml-8 hidden md:flex space-x-6">
          <a href="#" class="text-sm hover:text-orange-500">Khuyến mãi</a>
          <a href="#" class="text-sm hover:text-orange-500">Sản phẩm mới</a>
          <a href="#" class="text-sm hover:text-orange-500">Bán chạy</a>
        </nav>
      </div>
    </div>
  </div>
</header>

3. Code cho Mega Menu (snippets/mega-menu.liquid):
<div class="mega-menu absolute top-full left-0 w-full bg-white shadow-lg border-t opacity-0 invisible transition-all duration-300 z-40">
  <div class="container mx-auto px-4 py-6">
    <div class="flex">
      <!-- Level 1 Sidebar -->
      <div class="w-64 bg-gray-50 p-4 rounded-l">
        <ul class="level-1-menu space-y-2">
          {% for link in linklists.main-menu.links %}
            <li class="level-1-item group" data-category="{{ forloop.index }}">
              <a href="{{ link.url }}" class="flex items-center justify-between p-2 hover:bg-orange-100 rounded transition-colors">
                <span class="text-sm font-medium">{{ link.title }}</span>
                {% if link.links.size > 0 %}
                  <svg class="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                  </svg>
                {% endif %}
              </a>
            </li>
          {% endfor %}
        </ul>
      </div>

      <!-- Level 2 & 3 Content -->
      <div class="flex-1 p-4">
        {% for link in linklists.main-menu.links %}
          {% if link.links.size > 0 %}
            <div class="level-2-content hidden" data-category="{{ forloop.index }}">
              <div class="grid grid-cols-4 gap-6">
                {% for child_link in link.links %}
                  <div class="level-2-column">
                    <h3 class="font-semibold text-sm mb-3 text-gray-800 border-b pb-2">
                      <a href="{{ child_link.url }}" class="hover:text-orange-500">{{ child_link.title }}</a>
                    </h3>
                    {% if child_link.links.size > 0 %}
                      <ul class="level-3-links space-y-1">
                        {% for grandchild_link in child_link.links %}
                          <li>
                            <a href="{{ grandchild_link.url }}" class="text-xs text-gray-600 hover:text-orange-500 block py-1">
                              {{ grandchild_link.title }}
                            </a>
                          </li>
                        {% endfor %}
                      </ul>
                    {% endif %}
                  </div>
                {% endfor %}
              </div>
            </div>
          {% endif %}
        {% endfor %}
      </div>
    </div>
  </div>
</div>

4. CSS (assets/mega-menu.css):
.header-aliexpress {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.mega-menu-container:hover .mega-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.mega-menu {
  transform: translateY(-10px);
  max-height: 500px;
  overflow-y: auto;
}

.level-1-item:hover .level-2-content[data-category] {
  display: block !important;
}

.level-1-item[data-category="1"]:hover ~ .flex-1 .level-2-content[data-category="1"],
.level-1-item[data-category="2"]:hover ~ .flex-1 .level-2-content[data-category="2"],
.level-1-item[data-category="3"]:hover ~ .flex-1 .level-2-content[data-category="3"] {
  display: block !important;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .mega-menu {
    position: fixed;
    top: 0;
    left: -100%;
    width: 80%;
    height: 100vh;
    background: white;
    transition: left 0.3s ease;
    z-index: 9999;
  }
  
  .mega-menu.active {
    left: 0;
  }
  
  .mega-menu .container {
    padding: 0;
  }
  
  .mega-menu .flex {
    flex-direction: column;
  }
  
  .level-1-menu {
    width: 100%;
    background: white;
  }
  
  .level-2-content {
    display: none !important;
  }
  
  .level-1-item.active .level-2-content {
    display: block !important;
  }
}

/* Fix cho mega menu content bị ẩn */
.mega-menu-container {
  position: relative;
  z-index: 50;
}

.mega-menu {
  z-index: 40;
  min-height: 400px;
}

/* Đảm bảo overflow không bị ẩn */
.header-aliexpress,
.header-aliexpress * {
  overflow: visible !important;
}

5. JavaScript (assets/mega-menu.js):
document.addEventListener('DOMContentLoaded', function() {
  const allCategoriesBtn = document.querySelector('.all-categories-btn');
  const megaMenu = document.querySelector('.mega-menu');
  const level1Items = document.querySelectorAll('.level-1-item');
  const level2Contents = document.querySelectorAll('.level-2-content');

  // Desktop hover functionality
  if (window.innerWidth > 768) {
    // Show/hide mega menu
    const megaMenuContainer = document.querySelector('.mega-menu-container');
    
    megaMenuContainer.addEventListener('mouseenter', function() {
      megaMenu.classList.add('opacity-100', 'visible');
      megaMenu.classList.remove('opacity-0', 'invisible');
    });
    
    megaMenuContainer.addEventListener('mouseleave', function() {
      megaMenu.classList.add('opacity-0', 'invisible');
      megaMenu.classList.remove('opacity-100', 'visible');
      // Hide all level 2 content
      level2Contents.forEach(content => content.classList.add('hidden'));
    });

    // Level 1 hover to show Level 2
    level1Items.forEach(item => {
      item.addEventListener('mouseenter', function() {
        const categoryId = this.dataset.category;
        
        // Hide all level 2 content
        level2Contents.forEach(content => content.classList.add('hidden'));
        
        // Show corresponding level 2 content
        const targetContent = document.querySelector(`.level-2-content[data-category="${categoryId}"]`);
        if (targetContent) {
          targetContent.classList.remove('hidden');
        }
      });
    });
  } else {
    // Mobile functionality
    allCategoriesBtn.addEventListener('click', function(e) {
      e.preventDefault();
      megaMenu.classList.toggle('active');
      document.body.classList.toggle('overflow-hidden');
    });

    // Mobile accordion
    level1Items.forEach(item => {
      item.addEventListener('click', function(e) {
        e.preventDefault();
        this.classList.toggle('active');
        
        const categoryId = this.dataset.category;
        const targetContent = document.querySelector(`.level-2-content[data-category="${categoryId}"]`);
        
        if (targetContent) {
          targetContent.style.display = targetContent.style.display === 'block' ? 'none' : 'block';
        }
      });
    });
  }
});

6. Thêm vào theme.liquid:
<!-- Trong <head> -->
{{ 'mega-menu.css' | asset_url | stylesheet_tag }}

<!-- Trước </body> -->
{{ 'mega-menu.js' | asset_url | script_tag }}

7. Sử dụng section trong theme:
<!-- Trong layout/theme.liquid, thay thế header hiện tại -->
{% section 'header-aliexpress' %}

Khắc phục vấn đề mega menu content bị ẩn:
Kiểm tra z-index: Đảm bảo mega menu có z-index cao hơn các element khác
Kiểm tra overflow: Thêm overflow: visible !important cho container
Kiểm tra position: Đảm bảo container có position: relative
Kiểm tra CSS conflicts: Tìm các CSS rule có thể gây xung đột
Nếu vẫn gặp vấn đề, hãy kiểm tra Console trong Developer Tools để xem có lỗi JavaScript nào không.