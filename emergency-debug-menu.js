// EMERGENCY DEBUG - Check Vietnamese menu visibility
console.log('🚨 EMERGENCY DEBUG - Vietnamese Menu Check');

// Find the Vietnamese menu we just added
const vietnamMenu = document.querySelector('#VietnamFurnitureMenu-1');
const allPanels = document.querySelectorAll('.alx-mega-menu-panel');
const content = document.querySelector('.alx-mega-menu-content');

console.log('📊 VIETNAMESE MENU STATUS:');
console.log('- Vietnam menu found:', !!vietnamMenu);
console.log('- All panels found:', allPanels.length);
console.log('- Content area found:', !!content);

if (vietnamMenu) {
  const styles = window.getComputedStyle(vietnamMenu);
  console.log('Vietnam menu styles:');
  console.log('- display:', styles.display);
  console.log('- visibility:', styles.visibility);
  console.log('- opacity:', styles.opacity);
  console.log('- z-index:', styles.zIndex);
  console.log('- position:', styles.position);
} else {
  console.log('❌ Vietnamese menu not found in DOM!');
  console.log('Looking for any element with Vietnamese text...');
  
  // Search for Vietnamese text
  const vietnamTexts = document.querySelectorAll('*');
  let found = false;
  vietnamTexts.forEach(el => {
    if (el.textContent.includes('Nội thất văn phòng') || 
        el.textContent.includes('Ghế giám đốc')) {
      console.log('✅ Found Vietnamese text in:', el.tagName, el.className);
      found = true;
    }
  });
  
  if (!found) {
    console.log('❌ NO VIETNAMESE TEXT FOUND - Template may not be loaded!');
  }
}

// Check if menu shows on hover
const trigger = document.querySelector('.alx-categories-trigger');
if (trigger) {
  console.log('🖱️ Testing hover trigger...');
  trigger.dispatchEvent(new Event('mouseenter'));
  
  setTimeout(() => {
    console.log('📊 After hover:');
    console.log('- Vietnam menu visible:', vietnamMenu ? window.getComputedStyle(vietnamMenu).visibility : 'not found');
    
    // Force show ALL panels
    allPanels.forEach((panel, i) => {
      panel.style.cssText = `
        display: block !important;
        visibility: visible !important;
        opacity: 1 !important;
        position: fixed !important;
        top: ${120 + (i * 50)}px !important;
        left: 50px !important;
        right: 50px !important;
        background: yellow !important;
        border: 5px solid red !important;
        z-index: 999999 !important;
        padding: 20px !important;
        color: black !important;
      `;
      console.log(`🔧 Panel ${i+1} forced visible at top: ${120 + (i * 50)}px`);
    });
    
  }, 1000);
} else {
  console.log('❌ Trigger not found');
}

console.log('🔍 Debug complete - check for YELLOW panels with RED borders');