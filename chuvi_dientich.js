/**
 * Dau vao
 * -tao 1 bien chieu dai do user nhap vao
 * -tao 1 bien chieu rong do user nhap vao
 * - tao 1 bien dien tich
 * - tao 1 bien chu vi
 * * xu ly
 * - dien tich = chieu dai * chieu rong
 * - chu vi = (chieu dai + chieu rong) * 2
 * dau ra
 * - in ra dien tich va chu vi
 * - in ra dien tich va chu vi
 */
let chieu_dai = Number(prompt("nhap chieu dai"));
let chieu_rong = Number(prompt("nhap chieu rong"));
let dien_tich = chieu_dai * chieu_rong;
let chu_vi = (chieu_dai + chieu_rong) * 2;
console.log("dien tich la: " + dien_tich);
console.log("chu vi la: " + chu_vi);
