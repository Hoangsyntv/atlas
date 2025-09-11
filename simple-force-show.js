// SIMPLE FORCE SHOW - No complex syntax
console.log('FORCE SHOW MEGA MENU');

var menu = document.querySelector('.alx-categories-menu');
if (menu) {
  menu.style.display = 'flex';
  menu.style.visibility = 'visible';
  menu.style.opacity = '1';
  menu.style.position = 'fixed';
  menu.style.top = '100px';
  menu.style.left = '0';
  menu.style.right = '0';
  menu.style.background = 'white';
  menu.style.border = '5px solid red';
  menu.style.zIndex = '999999';
  menu.style.minHeight = '400px';
  console.log('Menu forced visible');
} else {
  console.log('Menu not found');
}

var content = document.querySelector('.alx-mega-menu-content');
if (content) {
  content.style.display = 'block';
  content.style.visibility = 'visible';
  content.style.opacity = '1';
  content.style.background = 'yellow';
  content.style.color = 'black';
  content.style.padding = '20px';
  content.style.fontSize = '16px';
  content.style.border = '3px solid blue';
  console.log('Content forced visible');
  console.log('Content text length:', content.textContent.length);
} else {
  console.log('Content not found');
}