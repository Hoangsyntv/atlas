// 🔍 LIVE MENU DEBUG - Run this in browser console or add to page
console.log('🔍 LIVE MENU DEBUG STARTING...');

// 1. Check if menu container exists
const menuContainer = document.querySelector('.alx-mega-menu-content');
const megaMenuContainer = document.querySelector('.mega-menu-container');
const categoriesMenu = document.querySelector('.alx-categories-menu');

console.log('📊 CONTAINER STATUS:');
console.log('- .alx-mega-menu-content found:', !!menuContainer);
console.log('- .mega-menu-container found:', !!megaMenuContainer);
console.log('- .alx-categories-menu found:', !!categoriesMenu);

if (menuContainer) {
  console.log('📋 MENU CONTAINER CONTENT:');
  console.log('- innerHTML length:', menuContainer.innerHTML.length);
  console.log('- children count:', menuContainer.children.length);
  
  // Check for menu items
  const menuItems = menuContainer.querySelectorAll('.menu-item');
  const oldPanels = menuContainer.querySelectorAll('.alx-mega-menu-panel');
  
  console.log('- .menu-item found:', menuItems.length);
  console.log('- .alx-mega-menu-panel found:', oldPanels.length);
  
  if (menuItems.length > 0) {
    console.log('✅ NEW STRUCTURE FOUND!');
    menuItems.forEach((item, idx) => {
      const link = item.querySelector('.main-menu-link');
      const dropdown = item.querySelector('.mega-dropdown');
      const submenuItems = item.querySelectorAll('.submenu-item');
      
      console.log(`📂 Menu Item ${idx + 1}:`);
      console.log(`   - Title: ${link ? link.textContent.trim() : 'NO LINK'}`);
      console.log(`   - Has dropdown: ${!!dropdown}`);
      console.log(`   - Submenu items: ${submenuItems.length}`);
      
      if (submenuItems.length > 0) {
        submenuItems.forEach((subitem, sidx) => {
          const subHeading = subitem.querySelector('.alx-mega-menu-heading a');
          const subSubmenu = subitem.querySelector('.sub-submenu');
          const grandchildren = subitem.querySelectorAll('.alx-mega-menu-item');
          
          console.log(`     📁 Submenu ${sidx + 1}:`);
          console.log(`        - Title: ${subHeading ? subHeading.textContent.trim() : 'NO HEADING'}`);
          console.log(`        - Has sub-submenu: ${!!subSubmenu}`);
          console.log(`        - Grandchildren: ${grandchildren.length}`);
          
          if (grandchildren.length > 0) {
            grandchildren.forEach((grandchild, gidx) => {
              const grandLink = grandchild.querySelector('a');
              console.log(`           📄 Item ${gidx + 1}: ${grandLink ? grandLink.textContent.trim() : 'NO LINK'}`);
            });
          }
        });
      }
    });
  } else {
    console.log('❌ NEW STRUCTURE NOT FOUND - checking old structure...');
    
    if (oldPanels.length > 0) {
      console.log('🔍 OLD PANEL STRUCTURE FOUND:');
      oldPanels.forEach((panel, idx) => {
        console.log(`Panel ${idx + 1}:`, panel.id, panel.getAttribute('data-category'));
        console.log('   - Display:', window.getComputedStyle(panel).display);
        console.log('   - Visibility:', window.getComputedStyle(panel).visibility);
        console.log('   - Opacity:', window.getComputedStyle(panel).opacity);
      });
    }
  }
} else {
  console.log('❌ NO MENU CONTAINER FOUND AT ALL!');
}

// 2. Check Shopify menu data in template
console.log('\n📊 SHOPIFY MENU DATA CHECK:');
const menuTitle = document.querySelector('[data-menu-title]');
if (menuTitle) {
  console.log('Menu title element found:', menuTitle.textContent);
}

// Look for any text that indicates menu presence
const allElements = document.querySelectorAll('*');
let menuDataFound = false;
allElements.forEach(el => {
  if (el.textContent && (
    el.textContent.includes('Ghế văn phòng') || 
    el.textContent.includes('Bàn văn phòng') ||
    el.textContent.includes('Tủ văn phòng')
  )) {
    console.log('🎯 Menu text found in:', el.tagName + (el.className ? '.' + el.className : ''), el.textContent.substring(0, 100));
    menuDataFound = true;
  }
});

if (!menuDataFound) {
  console.log('❌ NO MENU TEXT FOUND - Shopify data may not be loading');
}

// 3. Force show menu for testing
console.log('\n🔧 FORCING MENU VISIBILITY FOR TESTING...');

if (categoriesMenu) {
  categoriesMenu.style.cssText = `
    display: flex !important;
    visibility: visible !important;
    opacity: 1 !important;
    position: fixed !important;
    top: 120px !important;
    left: 0 !important;
    right: 0 !important;
    background: white !important;
    border: 3px solid red !important;
    z-index: 999999 !important;
    min-height: 400px !important;
  `;
  console.log('✅ Categories menu forced visible');
}

if (menuContainer) {
  menuContainer.style.cssText = `
    display: block !important;
    visibility: visible !important;
    opacity: 1 !important;
    background: yellow !important;
    padding: 20px !important;
    border: 2px solid blue !important;
  `;
  console.log('✅ Menu container forced visible');
  
  // Force show all dropdowns
  const allDropdowns = menuContainer.querySelectorAll('.mega-dropdown');
  allDropdowns.forEach((dropdown, idx) => {
    dropdown.style.cssText = `
      display: block !important;
      position: relative !important;
      background: lightgreen !important;
      border: 1px solid green !important;
      margin: 10px 0 !important;
      padding: 10px !important;
    `;
    console.log(`✅ Dropdown ${idx + 1} forced visible`);
  });
}

console.log('\n🔍 DEBUG COMPLETE - Check page for RED/YELLOW/GREEN boxes');
console.log('If you see boxes, menu structure exists but styling needs fix');
console.log('If no boxes appear, template structure needs to be fixed');