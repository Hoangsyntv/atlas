// JSON VALIDATION - Check if Schema.org JSON is valid
console.log('🔍 VALIDATING JSON SYNTAX...');

try {
  // Get all script tags with ld+json
  const jsonScripts = document.querySelectorAll('script[type="application/ld+json"]');
  
  console.log(`Found ${jsonScripts.length} JSON-LD scripts`);
  
  jsonScripts.forEach((script, index) => {
    try {
      const jsonData = JSON.parse(script.textContent);
      console.log(`✅ Script ${index + 1}: Valid JSON`);
      console.log('- Type:', jsonData['@type']);
      console.log('- Context:', jsonData['@context']);
    } catch (error) {
      console.error(`❌ Script ${index + 1}: Invalid JSON`);
      console.error('Error:', error.message);
      console.error('Content:', script.textContent);
    }
  });
  
  console.log('✅ JSON validation complete');
  
} catch (error) {
  console.error('❌ Validation failed:', error.message);
}

// Test if mega menu works now
console.log('\n🧪 TESTING MEGA MENU AFTER JSON FIX...');
setTimeout(() => {
  const trigger = document.querySelector('.alx-categories-trigger');
  if (trigger) {
    trigger.dispatchEvent(new Event('mouseenter'));
    setTimeout(() => {
      const menu = document.querySelector('.alx-categories-menu');
      const isVisible = menu && window.getComputedStyle(menu).visibility === 'visible';
      console.log('🎯 Mega menu working:', isVisible ? '✅ YES' : '❌ NO');
    }, 100);
  } else {
    console.log('❌ Trigger not found');
  }
}, 1000);