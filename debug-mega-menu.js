// Debug script cho mega menu AliExpress
console.log('=== MEGA MENU DEBUG SCRIPT ===');

// 1. Kiểm tra các element cơ bản
console.log('1. Kiểm tra các element:');
const dropdown = document.querySelector('.alx-categories-dropdown');
const menu = document.querySelector('.alx-categories-menu');
const trigger = document.querySelector('.alx-categories-trigger');
const items = document.querySelectorAll('.alx-category-item');
const panels = document.querySelectorAll('.alx-mega-menu-panel');

console.log('- Dropdown:', dropdown ? 'TÌM THẤY' : 'KHÔNG TÌM THẤY');
console.log('- Menu:', menu ? 'TÌM THẤY' : 'KHÔNG TÌM THẤY');
console.log('- Trigger:', trigger ? 'TÌM THẤY' : 'KHÔNG TÌM THẤY');
console.log('- Category items:', items.length + ' items');
console.log('- Mega panels:', panels.length + ' panels');

// 2. Kiểm tra CSS styles
if (menu) {
  console.log('2. Kiểm tra CSS styles:');
  const computed = window.getComputedStyle(menu);
  console.log('- Display:', computed.display);
  console.log('- Visibility:', computed.visibility);
  console.log('- Opacity:', computed.opacity);
  console.log('- Z-index:', computed.zIndex);
  console.log('- Position:', computed.position);
}

// 3. Kiểm tra JavaScript events
console.log('3. Kiểm tra JavaScript events:');
if (dropdown) {
  console.log('- Dropdown listeners:', dropdown.eventListeners ? 'CÓ' : 'KHÔNG RÕ');
  
  // Test manual hover
  console.log('4. Test manual hover:');
  if (menu) {
    dropdown.dispatchEvent(new Event('mouseenter'));
    setTimeout(() => {
      const afterHover = window.getComputedStyle(menu);
      console.log('- Display sau mouseenter:', afterHover.display);
      console.log('- Visibility sau mouseenter:', afterHover.visibility);
    }, 100);
  }
}

// 5. Kiểm tra console errors
console.log('5. Kiểm tra JavaScript errors:');
window.addEventListener('error', function(e) {
  console.error('JavaScript Error:', e.message, e.filename, e.lineno);
});

// 6. Kiểm tra file loading
console.log('6. Kiểm tra file loading:');
const cssLink = document.querySelector('link[href*="component-aliexpress-header.css"]');
const jsScript = document.querySelector('script[src*="component-aliexpress-header.js"]');
console.log('- CSS file:', cssLink ? 'LOADED' : 'NOT LOADED');
console.log('- JS file:', jsScript ? 'LOADED' : 'NOT LOADED');

// 7. Force show menu để test - PHIÊN BẢN MẠNH
console.log('7. FORCE MEGA MENU TEST - PHIÊN BẢN CỰC MẠNH:');
if (menu) {
  console.log('=== FORCE MEGA MENU TEST ===');
  // Force show với styling cực mạnh
  menu.style.cssText = `
    display: block !important;
    visibility: visible !important;
    opacity: 1 !important;
    position: fixed !important;
    top: 200px !important;
    left: 100px !important;
    width: 400px !important;
    height: 300px !important;
    background: red !important;
    border: 10px solid blue !important;
    z-index: 999999 !important;
    color: white !important;
    font-size: 20px !important;
    padding: 20px !important;
  `;
  
  // Add text để đảm bảo có content
  if (menu.innerHTML.trim() === '' || menu.children.length === 0) {
    menu.innerHTML = '<div style="color: white; font-size: 24px;">MEGA MENU TEST - THIS IS WORKING!</div>';
  }
  
  console.log('Menu should now be visible with RED background!');
  console.log('Menu position:', menu.getBoundingClientRect());
  console.log('Menu display:', window.getComputedStyle(menu).display);
} else {
  console.log('Menu element NOT FOUND!');
}

// 8. Kiểm tra theme preview
console.log('8. Kiểm tra theme preview:');
const url = window.location.href;
const hasPreviewId = url.includes('preview_theme_id');
console.log('- URL hiện tại:', url);
console.log('- Có preview_theme_id:', hasPreviewId ? 'CÓ' : 'KHÔNG');

console.log('=== KẾT THÚC DEBUG ===');