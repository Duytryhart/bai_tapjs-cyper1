/**
- Đầu vào
+ tạo biến so cho nguoi dùng nhập vào
+tao bien tong 
-Xử lý
+ cho biến soHangDonVi= so % 10
+ cho biến soHangChuc= so/10 
- đầu ra
+ in ra biến tong= soHangDonVi+soHangChuc
 */
let so = Number(prompt("moi ban nhap so co 2 chu so:"));
let tong;
let soHangDonVi = so % 10;
let soHangChuc = Math.floor(so / 10);
tong = soHangChuc + soHangDonVi;
console.log("Tong 2 ki so la : " + tong);
