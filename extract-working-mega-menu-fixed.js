// EXTRACT WORKING MEGA MENU DATA - FIXED VERSION
console.log('🔍 EXTRACTING WORKING MEGA MENU DATA...');

const result = {
  html_structure: '',
  css_styles: '',
  javascript_code: '',
  file_locations: []
};

// 1. Find mega menu HTML structure
console.log('1. 📋 EXTRACTING HTML STRUCTURE...');
const megaMenus = document.querySelectorAll('[class*="mega"], [class*="dropdown"], [class*="nav"], [id*="mega"], [id*="menu"]');
if (megaMenus.length > 0) {
  megaMenus.forEach((menu, i) => {
    if (menu.innerHTML.length > 100) {
      console.log(`Found mega menu ${i+1}:`, menu.className);
      result.html_structure += `\n<!-- MEGA MENU ${i+1} -->\n`;
      result.html_structure += menu.outerHTML;
    }
  });
}

// 2. Extract CSS styles for mega menu
console.log('2. 🎨 EXTRACTING CSS STYLES...');
try {
  Array.from(document.styleSheets).forEach(sheet => {
    try {
      Array.from(sheet.cssRules || []).forEach(rule => {
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

// 3. Find relevant JavaScript files
console.log('3. ⚙️ FINDING JAVASCRIPT FILES...');
document.querySelectorAll('script[src]').forEach(script => {
  if (script.src.includes('menu') || 
      script.src.includes('header') || 
      script.src.includes('nav') ||
      script.src.includes('dropdown')) {
    result.file_locations.push(script.src);
    console.log('Found JS file:', script.src);
  }
});

// 4. Extract inline JavaScript related to menus
console.log('4. 📜 CHECKING INLINE JAVASCRIPT...');
document.querySelectorAll('script:not([src])').forEach(script => {
  if (script.textContent.includes('mega') || 
      script.textContent.includes('menu') ||
      script.textContent.includes('dropdown') ||
      script.textContent.includes('z-index') ||
      script.textContent.includes('NUCLEAR')) {
    result.javascript_code += '\n/* INLINE SCRIPT */\n';
    result.javascript_code += script.textContent;
  }
});

// 5. Print results summary
console.log('\n🎯 EXTRACTION COMPLETE!');
console.log('📊 RESULTS:');
console.log('- HTML structure length:', result.html_structure.length);
console.log('- CSS styles length:', result.css_styles.length);
console.log('- JavaScript code length:', result.javascript_code.length);
console.log('- Files found:', result.file_locations.length);

// 6. Output all data for copying
console.log('\n📥 COPY THIS DATA:');
console.log('='.repeat(80));
console.log('HTML_STRUCTURE:');
console.log(result.html_structure);
console.log('\n' + '='.repeat(80));
console.log('CSS_STYLES:');
console.log(result.css_styles);
console.log('\n' + '='.repeat(80));
console.log('JAVASCRIPT_CODE:');
console.log(result.javascript_code);
console.log('\n' + '='.repeat(80));
console.log('FILE_LOCATIONS:');
console.log(JSON.stringify(result.file_locations, null, 2));
console.log('='.repeat(80));

console.log('\n✅ EXTRACTION DONE! Copy all the data above.');