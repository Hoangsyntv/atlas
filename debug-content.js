// DEBUG MEGA MENU CONTENT ISSUE
console.log('🔍 DEBUGGING MEGA MENU CONTENT...');

const menu = document.querySelector('.alx-categories-menu');
if (menu) {
  console.log('📋 MENU STRUCTURE:');
  console.log('- Menu found:', !!menu);
  console.log('- Menu innerHTML length:', menu.innerHTML.length);
  console.log('- Menu children count:', menu.children.length);
  
  // Check sidebar
  const sidebar = menu.querySelector('.alx-categories-sidebar');
  console.log('- Sidebar found:', !!sidebar);
  if (sidebar) {
    console.log('- Sidebar innerHTML length:', sidebar.innerHTML.length);
    console.log('- Category items:', sidebar.querySelectorAll('.alx-category-item').length);
  }
  
  // Check content area
  const content = menu.querySelector('.alx-mega-menu-content');
  console.log('- Content area found:', !!content);
  if (content) {
    console.log('- Content innerHTML length:', content.innerHTML.length);
    console.log('- Content children:', content.children.length);
  }
  
  // Check panels
  const panels = menu.querySelectorAll('.alx-mega-menu-panel');
  console.log('- Panels found:', panels.length);
  panels.forEach((panel, i) => {
    console.log(`  Panel ${i+1}:`, panel.innerHTML.length, 'chars');
  });
  
  // Check menu settings
  const menuSetting = document.querySelector('[data-menu]') || 
                      document.querySelector('.menu-setting') ||
                      document.querySelector('#menu-selector');
  console.log('- Menu setting configured:', !!menuSetting);
  
  console.log('\n📱 RAW MENU HTML (first 500 chars):');
  console.log(menu.innerHTML.substring(0, 500));
  
} else {
  console.log('❌ Menu not found');
}

// Check if menu is configured in section settings
console.log('\n⚙️ CHECKING SECTION CONFIGURATION...');
const sectionData = document.querySelector('[data-section-type="header"]');
if (sectionData) {
  console.log('- Header section found');
  // Look for menu configuration
  const menuLinks = document.querySelectorAll('nav a, .nav a, [href*="collections"]');
  console.log('- Navigation links found:', menuLinks.length);
}

console.log('\n💡 NEXT STEPS:');
console.log('1. Check if menu is configured in theme settings');
console.log('2. Verify navigation menu in admin');
console.log('3. Check liquid template menu loops');