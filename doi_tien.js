/**
 * Dau vao 
 *- tao 1 bien so tien nguoi dung nhap vao 
 - tao 1 bien ty gia gan cho la 2400024000
    * xu ly
    * - tong so tien usd = so luong tien viet / 24000
*dau ra
* - in ra tong so tien usd
 */
// Đầu vào
let tien_viet = Number(prompt("Nhập số tiền Việt cần chuyển đổi:"));
const ty_gia =24000;
let tien_usd = tien_viet * ty_gia;
console.log("Tổng số tiền USD là: " + tien_usd);