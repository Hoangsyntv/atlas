// NUCLEAR PANEL TEST - Force panels visible
console.log('💥 NUCLEAR PANEL FORCE TEST...');

const trigger = document.querySelector('.alx-categories-trigger');
const panels = document.querySelectorAll('.alx-mega-menu-panel, .mega-menu__panel');

console.log('📋 FOUND:');
console.log('- Trigger:', !!trigger);
console.log('- Panels:', panels.length);

// NUCLEAR FORCE ALL PANELS IMMEDIATELY
panels.forEach((panel, i) => {
  panel.style.cssText = `
    display: block !important;
    visibility: visible !important;
    opacity: 1 !important;
    background: yellow !important;
    padding: 20px !important;
    z-index: 2147483647 !important;
    color: black !important;
    border: 3px solid red !important;
    font-size: 16px !important;
    margin: 10px !important;
    position: relative !important;
  `;
  console.log(`💥 NUCLEAR FORCE Panel ${i+1}:`, panel);
});

// Test hover
if (trigger) {
  console.log('\n🖱️ TESTING HOVER...');
  trigger.dispatchEvent(new Event('mouseenter'));
  
  setTimeout(() => {
    console.log('\n📊 PANEL STATUS AFTER HOVER:');
    panels.forEach((panel, i) => {
      const styles = window.getComputedStyle(panel);
      console.log(`Panel ${i+1}:`, {
        display: styles.display,
        visibility: styles.visibility,
        opacity: styles.opacity,
        background: styles.backgroundColor,
        textLength: panel.textContent.trim().length
      });
    });
    
    const visiblePanels = Array.from(panels).filter(p => 
      window.getComputedStyle(p).display === 'block' &&
      window.getComputedStyle(p).visibility === 'visible'
    );
    
    console.log('\n🎯 RESULT:');
    console.log('- Visible panels:', visiblePanels.length);
    
    if (visiblePanels.length > 0) {
      console.log('🎉 SUCCESS: PANELS ARE NOW VISIBLE!');
      console.log('👀 You should see YELLOW panels with RED borders');
    } else {
      console.log('❌ PANELS STILL HIDDEN - Theme override too strong');
    }
    
  }, 500);
}

console.log('\n💥 NUCLEAR PANEL TEST COMPLETE');