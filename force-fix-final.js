// FORCE FIX FINAL - Make content absolutely visible
console.log('🔧 FORCE FIXING MEGA MENU CONTENT...');

// 1. Find and force ALL mega menu elements
const allElements = [
  '.alx-categories-menu',
  '.alx-mega-menu-content', 
  '.alx-mega-menu-panel',
  '.mega-menu__panel',
  '[id*="MegaMenu"]',
  '[class*="mega"]'
];

allElements.forEach(selector => {
  const elements = document.querySelectorAll(selector);
  elements.forEach(el => {
    el.style.cssText = `
      display: block !important;
      visibility: visible !important;
      opacity: 1 !important;
      z-index: 2147483647 !important;
      background: white !important;
      border: 2px solid red !important;
      padding: 20px !important;
      min-height: 200px !important;
      position: relative !important;
    `;
    console.log('FORCED VISIBLE:', selector, el);
  });
});

// 2. Create content if missing
const contentArea = document.querySelector('.alx-mega-menu-content');
if (contentArea) {
  if (contentArea.textContent.trim().length < 100) {
    contentArea.innerHTML = `
      <div style="background: yellow; padding: 20px; color: black; font-size: 16px;">
        <h3>FORCED MEGA MENU CONTENT</h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px;">
          <div>
            <h4>Danh mục 1</h4>
            <ul>
              <li><a href="/collections/all">Tất cả sản phẩm</a></li>
              <li><a href="/collections/new">Sản phẩm mới</a></li>
              <li><a href="/collections/sale">Khuyến mãi</a></li>
            </ul>
          </div>
          <div>
            <h4>Danh mục 2</h4>
            <ul>
              <li><a href="/pages/about">Về chúng tôi</a></li>
              <li><a href="/pages/contact">Liên hệ</a></li>
              <li><a href="/pages/shipping">Vận chuyển</a></li>
            </ul>
          </div>
          <div>
            <h4>Danh mục 3</h4>
            <ul>
              <li><a href="/search">Tìm kiếm</a></li>
              <li><a href="/account">Tài khoản</a></li>
              <li><a href="/cart">Giỏ hàng</a></li>
            </ul>
          </div>
        </div>
      </div>
    `;
    console.log('✅ FORCED CONTENT CREATED');
  }
}

// 3. Force show menu
const menu = document.querySelector('.alx-categories-menu');
if (menu) {
  menu.style.cssText = `
    display: flex !important;
    visibility: visible !important;
    opacity: 1 !important;
    position: fixed !important;
    top: 120px !important;
    left: 0 !important;
    right: 0 !important;
    z-index: 2147483647 !important;
    background: white !important;
    border: 5px solid blue !important;
    min-height: 400px !important;
  `;
  console.log('✅ MENU FORCED VISIBLE');
}

// 4. Test result
setTimeout(() => {
  console.log('\n🎯 FINAL TEST:');
  const isMenuVisible = menu && window.getComputedStyle(menu).visibility === 'visible';
  const hasContent = contentArea && contentArea.textContent.length > 200;
  
  console.log('- Menu visible:', isMenuVisible ? '✅ YES' : '❌ NO');
  console.log('- Has content:', hasContent ? '✅ YES' : '❌ NO');
  
  if (isMenuVisible && hasContent) {
    console.log('🎉 SUCCESS: MEGA MENU WITH CONTENT NOW WORKING!');
    console.log('👀 You should see a BLUE bordered menu with YELLOW content');
  } else {
    console.log('❌ Still not working - deeper issues');
  }
}, 500);

console.log('🔧 FORCE FIX APPLIED - Check visually!');