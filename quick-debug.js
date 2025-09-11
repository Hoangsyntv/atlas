// QUICK DEBUG - Tell me what's wrong
console.log('🔍 QUICK MEGA MENU DEBUG');

// 1. Check elements exist
const elements = {
  trigger: document.querySelector('.alx-categories-trigger'),
  dropdown: document.querySelector('.alx-categories-dropdown'), 
  menu: document.querySelector('.alx-categories-menu'),
  content: document.querySelector('.alx-mega-menu-content'),
  panels: document.querySelectorAll('.alx-mega-menu-panel')
};

console.log('📋 ELEMENTS CHECK:');
Object.entries(elements).forEach(([name, el]) => {
  console.log(`- ${name}:`, el ? '✅ Found' : '❌ Missing');
});

// 2. Check JavaScript loaded
const header = document.querySelector('.alx-header');
const jsLoaded = header?.classList.contains('initialized');
console.log('- JavaScript:', jsLoaded ? '✅ Loaded' : '❌ Not loaded');

// 3. Check CSS visibility
if (elements.menu) {
  const styles = window.getComputedStyle(elements.menu);
  console.log('📱 MENU STYLES:');
  console.log(`- Display: ${styles.display}`);
  console.log(`- Visibility: ${styles.visibility}`);
  console.log(`- Opacity: ${styles.opacity}`);
  console.log(`- Z-index: ${styles.zIndex}`);
}

// 4. Quick test hover
console.log('🧪 TESTING HOVER...');
if (elements.trigger) {
  elements.trigger.dispatchEvent(new Event('mouseenter'));
  setTimeout(() => {
    const menuVisible = window.getComputedStyle(elements.menu).visibility === 'visible';
    console.log('- Menu shows on hover:', menuVisible ? '✅ YES' : '❌ NO');
    
    if (!menuVisible) {
      console.log('❌ PROBLEM: Menu not showing!');
      console.log('🔧 Check: CSS conflicts, JavaScript errors, or element structure');
    }
  }, 100);
}

// 5. Report specific issue
setTimeout(() => {
  console.log('📝 REPORT:');
  if (!elements.trigger) console.log('❌ Missing trigger button');
  if (!elements.menu) console.log('❌ Missing menu container');
  if (!jsLoaded) console.log('❌ JavaScript not initialized');
  console.log('💬 Tell me which specific issue you see!');
}, 200);