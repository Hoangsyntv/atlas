// EXTRACT WORKING MEGA MENU DATA
// Chạy script này trong dự án Shopify working để lấy dữ liệu

console.log('🔍 EXTRACTING WORKING MEGA MENU DATA...');

const result = {
  html_structure: '',
  css_styles: '',
  javascript_code: '',
  menu_configuration: '',
  file_locations: []
};

// 1. Find mega menu HTML structure
console.log('1. 📋 EXTRACTING HTML STRUCTURE...');
const megaMenus = document.querySelectorAll('[class*="mega"], [class*="dropdown"], [class*="nav"], [id*="mega"], [id*="menu"]');
if (megaMenus.length > 0) {
  megaMenus.forEach((menu, i) => {
    if (menu.innerHTML.length > 100) { // Only substantial menus
      console.log(`Found mega menu ${i+1}:`, menu.className);
      result.html_structure += `\n<!-- MEGA MENU ${i+1} -->\n`;
      result.html_structure += menu.outerHTML;
    }
  });
} else {
  console.log('❌ No mega menus found');
}

// 2. Extract CSS styles
console.log('2. 🎨 EXTRACTING CSS STYLES...');
try {
  const styleSheets = Array.from(document.styleSheets);
  styleSheets.forEach(sheet => {
    try {
      const rules = Array.from(sheet.cssRules || []);
      rules.forEach(rule => {
        if (rule.selectorText && (
          rule.selectorText.includes('mega') ||
          rule.selectorText.includes('dropdown') ||
          rule.selectorText.includes('nav')
        )) {
          result.css_styles += rule.cssText + '\n';
        }
      });
    } catch(e) {
      console.log('CSS access blocked for:', sheet.href);
    }
  });
} catch(e) {
  console.log('CSS extraction error:', e.message);
}

// 3. Find JavaScript files
console.log('3. ⚙️ FINDING JAVASCRIPT FILES...');
const scripts = document.querySelectorAll('script[src]');
scripts.forEach(script => {
  if (script.src.includes('menu') || 
      script.src.includes('header') || 
      script.src.includes('nav') ||
      script.src.includes('dropdown')) {
    result.file_locations.push(script.src);
    console.log('Found JS file:', script.src);
  }
});

// 4. Check for inline JavaScript
console.log('4. 📜 CHECKING INLINE JAVASCRIPT...');
const inlineScripts = document.querySelectorAll('script:not([src])');
inlineScripts.forEach(script => {
  if (script.textContent.includes('mega') || 
      script.textContent.includes('menu') ||
      script.textContent.includes('dropdown')) {
    result.javascript_code += '\n/* INLINE SCRIPT */\n';
    result.javascript_code += script.textContent;
  }
});

// 5. Check Shopify section settings
console.log('5. ⚙️ CHECKING SECTION SETTINGS...');
const sectionElements = document.querySelectorAll('[data-section-type], [data-section-id]');
sectionElements.forEach(section => {
  if (section.innerHTML.includes('menu') || section.innerHTML.includes('nav')) {
    console.log('Found section:', section.dataset.sectionType || section.dataset.sectionId);
  }
});

// 6. Print results
console.log('\n🎯 EXTRACTION COMPLETE!');
console.log('📊 RESULTS:');
console.log('- HTML structure length:', result.html_structure.length);
console.log('- CSS styles length:', result.css_styles.length);
console.log('- JavaScript code length:', result.javascript_code.length);
console.log('- Files found:', result.file_locations.length);

// 7. Create downloadable data
console.log('\n📥 COPY THIS DATA:');
console.log('='.repeat(50));
console.log('HTML_STRUCTURE:');
console.log(result.html_structure);
console.log('\n' + '='.repeat(50));
console.log('CSS_STYLES:');
console.log(result.css_styles);
console.log('\n' + '='.repeat(50));
console.log('JAVASCRIPT_CODE:');
console.log(result.javascript_code);
console.log('\n' + '='.repeat(50));
console.log('FILE_LOCATIONS:');
console.log(JSON.stringify(result.file_locations, null, 2));
console.log('='.repeat(50));

// 8. Also check for hover behavior
console.log('\n🖱️ TESTING HOVER BEHAVIOR...');
const triggers = document.querySelectorAll('[class*="trigger"], [class*="toggle"], button, .menu-item');
triggers.forEach((trigger, i) => {
  if (i < 5) { // Test first 5 only
    console.log(`Testing trigger ${i+1}:`, trigger.className);
    trigger.dispatchEvent(new Event('mouseenter'));
    setTimeout(() => {
      const visibleMenus = document.querySelectorAll('[style*="visible"], [style*="block"], .active, .show');
      console.log(`- After hover: ${visibleMenus.length} elements became visible`);
    }, 100);
  }
});

return result;