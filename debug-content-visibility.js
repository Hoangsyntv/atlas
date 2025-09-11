// DEBUG CONTENT VISIBILITY - Why text not showing
console.log('🔍 DEBUGGING CONTENT VISIBILITY...');

const content = document.querySelector('.alx-mega-menu-content');
const panels = document.querySelectorAll('.alx-mega-menu-panel, .mega-menu__panel');

if (content) {
  console.log('📋 CONTENT ANALYSIS:');
  
  // Check content styles
  const contentStyles = window.getComputedStyle(content);
  console.log('Content styles:');
  console.log('- display:', contentStyles.display);
  console.log('- visibility:', contentStyles.visibility);  
  console.log('- opacity:', contentStyles.opacity);
  console.log('- color:', contentStyles.color);
  console.log('- font-size:', contentStyles.fontSize);
  console.log('- height:', contentStyles.height);
  console.log('- width:', contentStyles.width);
  
  // Check each child element
  console.log('\n📋 CHILD ELEMENTS:');
  const children = content.children;
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    const childStyles = window.getComputedStyle(child);
    console.log(`Child ${i+1} (${child.tagName}):`, {
      display: childStyles.display,
      visibility: childStyles.visibility,
      opacity: childStyles.opacity,
      textContent: child.textContent.substring(0, 50)
    });
  }
  
  // Check panels specifically
  console.log('\n📋 PANELS:');
  panels.forEach((panel, i) => {
    const panelStyles = window.getComputedStyle(panel);
    console.log(`Panel ${i+1}:`, {
      display: panelStyles.display,
      visibility: panelStyles.visibility,
      opacity: panelStyles.opacity,
      height: panelStyles.height,
      textLength: panel.textContent.length
    });
  });
  
  // FORCE FIX - Make everything absolutely visible
  console.log('\n🔧 APPLYING NUCLEAR VISIBILITY...');
  
  // Force content area
  content.style.cssText += `
    color: black !important;
    font-size: 14px !important;
    line-height: 1.5 !important;
    background: white !important;
    border: 2px solid green !important;
  `;
  
  // Force all text elements
  const textElements = content.querySelectorAll('*');
  textElements.forEach(el => {
    if (el.textContent.trim().length > 0) {
      el.style.cssText += `
        color: black !important;
        display: block !important;
        visibility: visible !important;
        opacity: 1 !important;
        font-size: 14px !important;
        margin: 5px 0 !important;
      `;
    }
  });
  
  // Force panels
  panels.forEach(panel => {
    panel.style.cssText += `
      display: block !important;
      visibility: visible !important;
      opacity: 1 !important;
      background: yellow !important;
      color: black !important;
      padding: 10px !important;
      margin: 10px !important;
      border: 1px solid red !important;
    `;
  });
  
  console.log('✅ NUCLEAR VISIBILITY APPLIED');
  console.log('👀 You should now see GREEN border + YELLOW panels with BLACK text');
  
} else {
  console.log('❌ Content not found');
}

console.log('🔍 DEBUG COMPLETE - Check visual changes!');