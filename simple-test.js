// Simple test - inject Vietnamese menu directly
console.log('Simple test starting...');

// Find content area
const content = document.querySelector('.alx-mega-menu-content');
if (content) {
  console.log('Content area found');
  
  // Style it
  content.style.background = 'yellow';
  content.style.border = '5px solid red';
  content.style.padding = '20px';
  content.style.color = 'black';
  
  // Add simple content
  content.innerHTML = 'TEST VIETNAMESE MENU - Level 1: Noi that van phong - Level 2: Ghe van phong - Level 3: Ghe giam doc';
  
  console.log('Vietnamese menu injected successfully');
} else {
  console.log('Content area not found');
}

// Force show menu
const menu = document.querySelector('.alx-categories-menu');
if (menu) {
  menu.style.display = 'block';
  menu.style.visibility = 'visible';
  menu.style.opacity = '1';
  console.log('Menu forced visible');
}