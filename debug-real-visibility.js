// DEBUG REAL VISIBILITY - Check what user actually sees
console.log('🔍 DEBUGGING REAL VISIBILITY...');

const menu = document.querySelector('.alx-categories-menu');
const content = document.querySelector('.alx-mega-menu-content');
const panels = document.querySelectorAll('.alx-mega-menu-panel');

if (menu && content) {
  console.log('📊 DETAILED VISIBILITY CHECK:');
  
  // Check computed styles
  const menuStyles = window.getComputedStyle(menu);
  const contentStyles = window.getComputedStyle(content);
  
  console.log('🎛️ MENU STYLES:');
  console.log('- display:', menuStyles.display);
  console.log('- visibility:', menuStyles.visibility);
  console.log('- opacity:', menuStyles.opacity);
  console.log('- z-index:', menuStyles.zIndex);
  console.log('- position:', menuStyles.position);
  console.log('- width:', menuStyles.width);
  console.log('- height:', menuStyles.height);
  
  console.log('🎛️ CONTENT STYLES:');
  console.log('- display:', contentStyles.display);
  console.log('- visibility:', contentStyles.visibility);
  console.log('- opacity:', contentStyles.opacity);
  console.log('- background:', contentStyles.backgroundColor);
  console.log('- color:', contentStyles.color);
  
  // Check if content has actual text
  console.log('📝 CONTENT TEXT:');
  console.log('- innerHTML length:', content.innerHTML.length);
  console.log('- textContent length:', content.textContent.length);
  console.log('- First 200 chars:', content.textContent.substring(0, 200));
  
  // Check each panel
  console.log('📋 PANEL DETAILS:');
  panels.forEach((panel, i) => {
    const panelStyles = window.getComputedStyle(panel);
    console.log(`Panel ${i+1}:`);
    console.log('- display:', panelStyles.display);
    console.log('- visibility:', panelStyles.visibility);
    console.log('- opacity:', panelStyles.opacity);
    console.log('- text length:', panel.textContent.length);
  });
  
  // FORCE VISIBILITY TEST
  console.log('\n🔧 FORCE VISIBILITY TEST...');
  
  // Force show menu
  menu.style.cssText = `
    display: flex !important;
    visibility: visible !important;
    opacity: 1 !important;
    position: fixed !important;
    top: 100px !important;
    left: 0 !important;
    right: 0 !important;
    background: white !important;
    border: 5px solid red !important;
    z-index: 999999 !important;
    min-height: 400px !important;
  `;
  
  // Force show content
  content.style.cssText = `
    display: block !important;
    visibility: visible !important;
    opacity: 1 !important;
    background: yellow !important;
    color: black !important;
    padding: 20px !important;
    font-size: 16px !important;
    border: 3px solid blue !important;
  `;
  
  // Force show first panel
  if (panels[0]) {
    panels[0].style.cssText = `
      display: block !important;
      visibility: visible !important;
      opacity: 1 !important;
      background: lightgreen !important;
      color: black !important;
      padding: 10px !important;
      border: 2px solid green !important;
    `;
  }
  
  console.log('✅ FORCED VISIBILITY APPLIED');
  console.log('👀 You should now see a BRIGHT COLORED mega menu on screen!');
  console.log('📍 Red border = menu container');
  console.log('📍 Yellow background = content area');
  console.log('📍 Green background = first panel');
  
} else {
  console.log('❌ Menu or content not found!');
  console.log('Menu:', !!menu);
  console.log('Content:', !!content);
}