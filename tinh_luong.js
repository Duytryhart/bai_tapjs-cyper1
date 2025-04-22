/**
 Đầu vào 
 - tao 1 bien luong_ngay = 100000
 
 -tao 1 bien so ngay lam de ban nhap vao
 
 **xu ly
 -
 --tao 1 bien tong luong_nhanVien = 0
 -tongLuong_nhanVien cap nhat gia tri la luong_ngay * so ngay lam
 **đầu ra
 -in ra tong luong nhan vien
 -
 -
 */
 let ngay_lam = prompt("nhap so ngay lam");
 const luong_ngay = 100000;
 let luong_nhanVien = ngay_lam * luong_ngay;
 console.log("luong nhan vien la: " + luong_nhanVien);