// VERIFY CONTENT GENERATION TEST
console.log('🔍 VERIFYING CONTENT GENERATION...');

const trigger = document.querySelector('.alx-categories-trigger');
const menu = document.querySelector('.alx-categories-menu');
const content = document.querySelector('.alx-mega-menu-content');

console.log('📋 ELEMENTS:');
console.log('- Trigger:', !!trigger);
console.log('- Menu:', !!menu);
console.log('- Content:', !!content);

if (trigger && content) {
  console.log('\n📏 BEFORE HOVER:');
  console.log('- Content length:', content.textContent.trim().length);
  console.log('- Content preview:', content.textContent.trim().substring(0, 100));
  
  // Trigger hover to activate JavaScript
  console.log('\n🖱️ TRIGGERING HOVER...');
  trigger.dispatchEvent(new Event('mouseenter'));
  
  setTimeout(() => {
    console.log('\n📏 AFTER HOVER:');
    console.log('- Content length:', content.textContent.trim().length);
    console.log('- Content preview:', content.textContent.trim().substring(0, 200));
    
    const menuStyles = window.getComputedStyle(menu);
    const contentStyles = window.getComputedStyle(content);
    
    console.log('\n🎨 VISIBILITY:');
    console.log('- Menu visible:', menuStyles.visibility === 'visible');
    console.log('- Content visible:', contentStyles.visibility === 'visible');
    console.log('- Menu opacity:', menuStyles.opacity);
    console.log('- Content opacity:', contentStyles.opacity);
    
    // Check if content was generated
    const hasGeneratedContent = content.textContent.includes('Electronics & Technology') || 
                               content.textContent.includes('Fashion & Clothing') ||
                               content.textContent.length > 100;
    
    console.log('\n🎯 CONTENT GENERATION STATUS:');
    console.log('- Content generated:', hasGeneratedContent ? '✅' : '❌');
    
    if (hasGeneratedContent) {
      console.log('🎉 SUCCESS: Content generation working!');
      console.log('👀 You should now see organized menu content');
    } else {
      console.log('⚠️ Content generation may not be working - checking fallback...');
      
      // Force generate content manually as test
      content.innerHTML = `
        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; padding: 20px;">
          <div>
            <h3 style="margin: 0 0 10px 0; font-weight: bold;">Electronics & Technology</h3>
            <ul style="list-style: none; padding: 0; margin: 0;">
              <li><a href="#" style="color: #333; text-decoration: none; display: block; padding: 4px 0;">Smartphones</a></li>
              <li><a href="#" style="color: #333; text-decoration: none; display: block; padding: 4px 0;">Laptops</a></li>
              <li><a href="#" style="color: #333; text-decoration: none; display: block; padding: 4px 0;">Tablets</a></li>
            </ul>
          </div>
          <div>
            <h3 style="margin: 0 0 10px 0; font-weight: bold;">Fashion & Clothing</h3>
            <ul style="list-style: none; padding: 0; margin: 0;">
              <li><a href="#" style="color: #333; text-decoration: none; display: block; padding: 4px 0;">Women's Fashion</a></li>
              <li><a href="#" style="color: #333; text-decoration: none; display: block; padding: 4px 0;">Men's Fashion</a></li>
              <li><a href="#" style="color: #333; text-decoration: none; display: block; padding: 4px 0;">Accessories</a></li>
            </ul>
          </div>
          <div>
            <h3 style="margin: 0 0 10px 0; font-weight: bold;">Home & Garden</h3>
            <ul style="list-style: none; padding: 0; margin: 0;">
              <li><a href="#" style="color: #333; text-decoration: none; display: block; padding: 4px 0;">Home Decor</a></li>
              <li><a href="#" style="color: #333; text-decoration: none; display: block; padding: 4px 0;">Kitchen & Dining</a></li>
              <li><a href="#" style="color: #333; text-decoration: none; display: block; padding: 4px 0;">Garden Tools</a></li>
            </ul>
          </div>
        </div>
      `;
      console.log('🔧 MANUAL CONTENT INJECTION COMPLETE');
    }
    
  }, 500);
  
} else {
  console.log('❌ Missing required elements');
}

console.log('\n🔍 VERIFICATION TEST COMPLETE');