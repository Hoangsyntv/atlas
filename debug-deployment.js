// DEBUG DEPLOYMENT - Check for errors
console.log('🔍 DEPLOYMENT DEBUG - Checking for errors...');

// Check for JavaScript errors
console.log('📋 JAVASCRIPT STATUS:');
console.log('- Window loaded:', document.readyState);
console.log('- Custom elements defined:', !!customElements.get('aliexpress-header'));

// Check for mega menu elements
const trigger = document.querySelector('.alx-categories-trigger');
const menu = document.querySelector('.alx-categories-menu');
const content = document.querySelector('.alx-mega-menu-content');
const header = document.querySelector('.alx-header');

console.log('📋 ELEMENTS STATUS:');
console.log('- Header:', !!header);
console.log('- Trigger:', !!trigger);
console.log('- Menu:', !!menu);
console.log('- Content:', !!content);

// Check for CSS loading
console.log('📋 CSS STATUS:');
const stylesheets = Array.from(document.styleSheets);
const aliexpressCSS = stylesheets.find(sheet => 
  sheet.href && sheet.href.includes('component-aliexpress-header')
);
console.log('- AliExpress CSS loaded:', !!aliexpressCSS);

// Check for JavaScript loading
console.log('📋 SCRIPT STATUS:');
const scripts = Array.from(document.scripts);
const aliexpressJS = scripts.find(script => 
  script.src && script.src.includes('component-aliexpress-header')
);
console.log('- AliExpress JS loaded:', !!aliexpressJS);

// Check for CSS errors
console.log('📋 CSS ERROR CHECK:');
try {
  if (header) {
    const headerStyles = window.getComputedStyle(header);
    console.log('- Header display:', headerStyles.display);
    console.log('- Header position:', headerStyles.position);
  }
  
  if (menu) {
    const menuStyles = window.getComputedStyle(menu);
    console.log('- Menu display:', menuStyles.display);
    console.log('- Menu visibility:', menuStyles.visibility);
    console.log('- Menu z-index:', menuStyles.zIndex);
  }
} catch (error) {
  console.error('CSS Error:', error);
}

// Test hover functionality
if (trigger && menu) {
  console.log('🖱️ TESTING HOVER...');
  trigger.dispatchEvent(new Event('mouseenter'));
  
  setTimeout(() => {
    console.log('📊 HOVER RESULT:');
    const menuStyles = window.getComputedStyle(menu);
    console.log('- Menu visible after hover:', menuStyles.visibility === 'visible');
    console.log('- Content length:', content ? content.textContent.trim().length : 0);
    
    if (content && content.textContent.trim().length > 50) {
      console.log('✅ MEGA MENU WORKING');
    } else {
      console.log('❌ MEGA MENU NOT WORKING');
      
      // Check for errors in console
      console.log('🔍 CHECKING FOR ERRORS...');
      // Force show menu
      if (menu) {
        menu.style.cssText = `
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
          z-index: 999999 !important;
          background: red !important;
          padding: 20px !important;
        `;
        console.log('🔧 FORCED MENU VISIBLE WITH RED BACKGROUND');
      }
    }
  }, 500);
} else {
  console.log('❌ MISSING TRIGGER OR MENU ELEMENTS');
}

console.log('\n🔍 DEPLOYMENT DEBUG COMPLETE');