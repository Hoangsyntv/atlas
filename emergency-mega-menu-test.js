// EMERGENCY MEGA MENU TEST - Force visible anywhere on page
console.log('🚨 EMERGENCY MEGA MENU TEST');

// Create a mega menu that MUST be visible
const emergencyMenu = document.createElement('div');
emergencyMenu.style.cssText = `
  position: fixed !important;
  top: 100px !important;
  left: 50px !important;
  width: 800px !important;
  height: 400px !important;
  background: yellow !important;
  border: 5px solid red !important;
  z-index: 9999999 !important;
  padding: 20px !important;
  color: black !important;
  font-size: 16px !important;
  overflow: auto !important;
`;

emergencyMenu.innerHTML = `
  <h2 style="color: red !important; margin: 0 0 20px 0 !important;">EMERGENCY MEGA MENU TEST</h2>
  <div style="display: grid !important; grid-template-columns: 1fr 1fr 1fr !important; gap: 20px !important;">
    <div style="background: white !important; padding: 15px !important; border: 2px solid blue !important;">
      <h3 style="color: red !important; margin: 0 0 10px 0 !important;">LEVEL 2: Danh mục sản phẩm</h3>
      <ul style="list-style: none !important; padding: 0 !important; margin: 0 !important;">
        <li style="margin: 5px 0 !important;"><a href="#" style="color: black !important; text-decoration: none !important;">LEVEL 3: Tất cả sản phẩm</a></li>
        <li style="margin: 5px 0 !important;"><a href="#" style="color: black !important; text-decoration: none !important;">LEVEL 3: Sản phẩm mới</a></li>
        <li style="margin: 5px 0 !important;"><a href="#" style="color: black !important; text-decoration: none !important;">LEVEL 3: Khuyến mãi</a></li>
        <li style="margin: 5px 0 !important;"><a href="#" style="color: black !important; text-decoration: none !important;">LEVEL 3: Nổi bật</a></li>
      </ul>
    </div>
    <div style="background: white !important; padding: 15px !important; border: 2px solid blue !important;">
      <h3 style="color: red !important; margin: 0 0 10px 0 !important;">LEVEL 2: Hỗ trợ khách hàng</h3>
      <ul style="list-style: none !important; padding: 0 !important; margin: 0 !important;">
        <li style="margin: 5px 0 !important;"><a href="#" style="color: black !important; text-decoration: none !important;">LEVEL 3: Liên hệ</a></li>
        <li style="margin: 5px 0 !important;"><a href="#" style="color: black !important; text-decoration: none !important;">LEVEL 3: Vận chuyển</a></li>
        <li style="margin: 5px 0 !important;"><a href="#" style="color: black !important; text-decoration: none !important;">LEVEL 3: Đổi trả</a></li>
        <li style="margin: 5px 0 !important;"><a href="#" style="color: black !important; text-decoration: none !important;">LEVEL 3: FAQ</a></li>
      </ul>
    </div>
    <div style="background: white !important; padding: 15px !important; border: 2px solid blue !important;">
      <h3 style="color: red !important; margin: 0 0 10px 0 !important;">LEVEL 2: Thông tin</h3>
      <ul style="list-style: none !important; padding: 0 !important; margin: 0 !important;">
        <li style="margin: 5px 0 !important;"><a href="#" style="color: black !important; text-decoration: none !important;">LEVEL 3: Về chúng tôi</a></li>
        <li style="margin: 5px 0 !important;"><a href="#" style="color: black !important; text-decoration: none !important;">LEVEL 3: Blog</a></li>
        <li style="margin: 5px 0 !important;"><a href="#" style="color: black !important; text-decoration: none !important;">LEVEL 3: Tin tức</a></li>
        <li style="margin: 5px 0 !important;"><a href="#" style="color: black !important; text-decoration: none !important;">LEVEL 3: Tìm kiếm</a></li>
      </ul>
    </div>
  </div>
  <p style="margin: 20px 0 0 0 !important; color: black !important;">
    ✅ If you can see this YELLOW box with RED border, then the mega menu CAN work!<br>
    ✅ This shows what LEVEL 2 and LEVEL 3 content should look like.<br>
    ✅ Now we need to fix why it's not showing in the actual mega menu location.
  </p>
  <button onclick="this.parentElement.remove()" style="background: red !important; color: white !important; padding: 10px !important; border: none !important; margin-top: 10px !important;">CLOSE TEST</button>
`;

document.body.appendChild(emergencyMenu);

console.log('🚨 EMERGENCY MEGA MENU ADDED TO PAGE');
console.log('You should see a YELLOW box with RED border somewhere on the page');
console.log('This shows what the mega menu levels 2 and 3 should look like');