// TEST NUCLEAR PATTERNS APPLIED
console.log('🚀 TESTING NUCLEAR Z-INDEX PATTERNS...');

// 1. Check if NUCLEAR script loaded
const scriptsWithNuclear = Array.from(document.querySelectorAll('script')).filter(s => 
  s.textContent.includes('NUCLEAR') || s.textContent.includes('2147483647')
);
console.log('📜 Scripts with NUCLEAR:', scriptsWithNuclear.length);

// 2. Check mega menu elements with working patterns
const workingPatterns = document.querySelectorAll('#MegaMenu-Content-1, .mega-menu__panel, [style*="2147483647"]');
console.log('🎯 Elements with working patterns:', workingPatterns.length);

workingPatterns.forEach((el, i) => {
  console.log(`Element ${i+1}:`, {
    id: el.id,
    classes: el.className,
    zIndex: window.getComputedStyle(el).zIndex,
    display: window.getComputedStyle(el).display
  });
});

// 3. Test NUCLEAR Z-INDEX force
console.log('\n⚡ TESTING NUCLEAR Z-INDEX FORCE...');
const menu = document.querySelector('.alx-categories-menu');
const content = document.querySelector('.alx-mega-menu-content');
const panels = document.querySelectorAll('.mega-menu__panel, .alx-mega-menu-panel');

if (menu) {
  console.log('🎛️ Menu z-index:', window.getComputedStyle(menu).zIndex);
}

if (content) {
  console.log('🎛️ Content z-index:', window.getComputedStyle(content).zIndex);
}

panels.forEach((panel, i) => {
  const zIndex = window.getComputedStyle(panel).zIndex;
  console.log(`🎛️ Panel ${i+1} z-index:`, zIndex);
  
  if (zIndex !== '2147483647') {
    console.log('⚠️ Panel needs NUCLEAR force!');
    panel.style.zIndex = '2147483647';
    console.log('✅ NUCLEAR force applied to panel', i+1);
  }
});

// 4. Test mega menu visibility
console.log('\n👁️ TESTING VISIBILITY...');
const trigger = document.querySelector('.alx-categories-trigger');
if (trigger) {
  console.log('🖱️ Triggering hover...');
  trigger.dispatchEvent(new Event('mouseenter'));
  
  setTimeout(() => {
    if (menu) {
      const isVisible = window.getComputedStyle(menu).visibility === 'visible';
      const opacity = window.getComputedStyle(menu).opacity;
      const zIndex = window.getComputedStyle(menu).zIndex;
      
      console.log('📊 MEGA MENU STATUS:');
      console.log('- Visible:', isVisible ? '✅ YES' : '❌ NO');
      console.log('- Opacity:', opacity);
      console.log('- Z-index:', zIndex);
      
      // Check content
      if (content) {
        const contentText = content.textContent.trim();
        console.log('- Content length:', contentText.length, 'chars');
        console.log('- Content preview:', contentText.substring(0, 100));
      }
      
      // Final result
      if (isVisible && content && content.textContent.length > 50 && zIndex === '2147483647') {
        console.log('\n🎉 SUCCESS: MEGA MENU WITH NUCLEAR PATTERNS WORKING!');
      } else {
        console.log('\n⚠️ Issues detected:');
        if (!isVisible) console.log('- Menu not visible');
        if (!content || content.textContent.length < 50) console.log('- No content');
        if (zIndex !== '2147483647') console.log('- Z-index not NUCLEAR');
      }
    }
  }, 300);
} else {
  console.log('❌ Trigger not found');
}

console.log('\n🔥 NUCLEAR PATTERNS TEST COMPLETE!');