/**
 * Dau vao
 * - Tao bien so1
 * - Tao bien so2
 * - Tao bien so3
 * - Tao bien so4
 * - Tao bien so5
** xu ly
- tao bien dtb gan vao gia tri la 0
- gia tri trung binh = (bien1 + bien2 + bien3 + bien4 + bien5)/5
* dau ra
* - in ra gia tri trung binh
*/
let so1 = Number(prompt("nhap so 1"));
let so2 = Number(prompt("nhap so 2"));
let so3 = Number(prompt("nhap so 3"));
let so4 = Number(prompt("nhap so 4"));
let so5 = Number(prompt("nhap so 5"));
let trung_binh = (so1 + so2 + so3 + so4 + so5) / 5;
console.log("trung binh la: " + trung_binh);