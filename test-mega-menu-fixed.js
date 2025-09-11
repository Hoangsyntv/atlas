// TEST SCRIPT: Mega Menu Fixed with Guide Fixes Applied
console.log('=== MEGA MENU GUIDE FIXES TEST ===');

// Check if JavaScript is loaded
const headerElement = document.querySelector('.alx-header');
const isInitialized = headerElement && headerElement.classList.contains('initialized');
console.log('1. JavaScript initialized:', isInitialized ? '✅ YES' : '❌ NO');

// Check all required elements
const elements = {
  trigger: document.querySelector('.alx-categories-trigger'),
  dropdown: document.querySelector('.alx-categories-dropdown'),
  menu: document.querySelector('.alx-categories-menu'),
  sidebar: document.querySelector('.alx-categories-sidebar'),
  content: document.querySelector('.alx-mega-menu-content'),
  categoryItems: document.querySelectorAll('.alx-category-item'),
  megaPanels: document.querySelectorAll('.alx-mega-menu-panel')
};

console.log('2. DOM Elements Check:');
console.log('- Trigger:', elements.trigger ? '✅ Found' : '❌ Missing');
console.log('- Dropdown:', elements.dropdown ? '✅ Found' : '❌ Missing');
console.log('- Menu:', elements.menu ? '✅ Found' : '❌ Missing');
console.log('- Sidebar:', elements.sidebar ? '✅ Found' : '❌ Missing');
console.log('- Content:', elements.content ? '✅ Found' : '❌ Missing');
console.log('- Category Items:', elements.categoryItems.length, 'items');
console.log('- Mega Panels:', elements.megaPanels.length, 'panels');

// Check CSS styles
if (elements.menu) {
  const menuStyles = window.getComputedStyle(elements.menu);
  console.log('3. CSS Styles Check:');
  console.log('- Display:', menuStyles.display);
  console.log('- Visibility:', menuStyles.visibility);
  console.log('- Opacity:', menuStyles.opacity);
  console.log('- Position:', menuStyles.position);
  console.log('- Z-index:', menuStyles.zIndex);
}

// Check guide fixes applied
console.log('4. Guide Fixes Check:');

// Check overflow visibility fix from guide
const megaMenuBar = document.querySelector('.alx-mega-menu-bar');
const dropdown = elements.dropdown;
const header = elements.trigger?.closest('.alx-header');

if (megaMenuBar) {
  const overflow = window.getComputedStyle(megaMenuBar).overflow;
  console.log('- Mega menu bar overflow:', overflow === 'visible' ? '✅ VISIBLE' : '❌ ' + overflow);
}

if (dropdown) {
  const zIndex = window.getComputedStyle(dropdown).zIndex;
  console.log('- Dropdown z-index:', zIndex >= 50 ? '✅ HIGH (' + zIndex + ')' : '❌ LOW (' + zIndex + ')');
}

// Check min-height fix from guide
if (elements.menu) {
  const minHeight = window.getComputedStyle(elements.menu).minHeight;
  console.log('- Menu min-height:', minHeight === '400px' ? '✅ 400px' : '❌ ' + minHeight);
}

// Test manual hover simulation
if (elements.trigger && elements.dropdown && elements.menu) {
  console.log('5. Testing hover simulation...');
  
  // Simulate mouseenter on trigger
  elements.trigger.dispatchEvent(new Event('mouseenter'));
  
  setTimeout(() => {
    const hasActiveClass = elements.dropdown.classList.contains('active');
    const isVisible = window.getComputedStyle(elements.menu).visibility === 'visible';
    
    console.log('- Active class added:', hasActiveClass ? '✅ YES' : '❌ NO');
    console.log('- Menu visible after hover:', isVisible ? '✅ YES' : '❌ NO');
    
    // Test mouseleave
    elements.dropdown.dispatchEvent(new Event('mouseleave'));
    
    setTimeout(() => {
      const stillActive = elements.dropdown.classList.contains('active');
      const stillVisible = window.getComputedStyle(elements.menu).visibility === 'visible';
      
      console.log('- Menu hidden after leave:', !stillVisible ? '✅ YES' : '❌ NO');
      
      console.log('=== TEST COMPLETED ===');
      
      // Final assessment
      const allWorking = isInitialized && elements.trigger && elements.menu && !hoverRule;
      console.log('🎯 MEGA MENU STATUS:', allWorking ? '✅ FIXED & WORKING' : '❌ STILL HAS ISSUES');
      
    }, 350); // Wait for hide animation
  }, 100); // Wait for show animation
}