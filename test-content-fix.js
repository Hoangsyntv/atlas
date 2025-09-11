// TEST MEGA MENU CONTENT AFTER FIXES
console.log('🧪 TESTING MEGA MENU CONTENT FIXES...');

const menu = document.querySelector('.alx-categories-menu');
if (menu) {
  console.log('✅ Menu container found');
  
  // Check sidebar
  const sidebar = menu.querySelector('.alx-categories-sidebar');
  const categoryItems = sidebar?.querySelectorAll('.alx-category-item');
  console.log('✅ Sidebar found:', !!sidebar);
  console.log('📋 Category items:', categoryItems?.length || 0);
  
  // Check content area
  const content = menu.querySelector('.alx-mega-menu-content');
  const panels = content?.querySelectorAll('.alx-mega-menu-panel');
  console.log('✅ Content area found:', !!content);
  console.log('📋 Panels found:', panels?.length || 0);
  
  // Check if content has actual text
  if (content) {
    const textContent = content.textContent.trim();
    console.log('📝 Content length:', textContent.length, 'characters');
    console.log('📝 Content preview:', textContent.substring(0, 100) + '...');
  }
  
  // Test hover to show menu
  console.log('\n🎯 TESTING HOVER...');
  const trigger = document.querySelector('.alx-categories-trigger');
  if (trigger) {
    trigger.dispatchEvent(new Event('mouseenter'));
    
    setTimeout(() => {
      const menuVisible = window.getComputedStyle(menu).visibility === 'visible';
      const menuOpacity = window.getComputedStyle(menu).opacity;
      
      console.log('- Menu visible:', menuVisible ? '✅ YES' : '❌ NO');
      console.log('- Menu opacity:', menuOpacity);
      
      if (menuVisible && content) {
        const contentVisible = window.getComputedStyle(content).display !== 'none';
        console.log('- Content visible:', contentVisible ? '✅ YES' : '❌ NO');
        
        if (panels && panels.length > 0) {
          const firstPanel = panels[0];
          const panelDisplay = window.getComputedStyle(firstPanel).display;
          console.log('- First panel display:', panelDisplay);
        }
      }
      
      console.log('\n🎉 RESULT:');
      if (menuVisible && content && content.textContent.trim().length > 50) {
        console.log('✅ MEGA MENU WITH CONTENT WORKING!');
      } else {
        console.log('❌ Still has issues - check fallback content');
      }
      
    }, 200);
  }
} else {
  console.log('❌ Menu container not found');
}