

let a = 6;
let result = ++a + a + a++ + ++a + a;
 
// Giải thích:

//* ++a: Tăng a lên 1 đơn vị trước. Vậy a trở thành 7, và result bắt đầu là 7.
//*   a: a hiện tại là 7, vậy nên cộng a vào kết quả trước đó. Kết quả trở thành 7 + 7 = 14.
//* a++: Tăng a lên 1 đơn vị sau. a trở thành 8, nhưng giá trị được sử dụng trong biểu thức vẫn là 7 (giá trị trước đó của a). Vậy result trở thành 14 + 7 = 21.
//* ++a: Tăng a lên 1 đơn vị trước. a trở thành 9, và result trở thành 21 + 9 = 30.
//*   a: a hiện tại là 9, vậy nên cộng a vào kết quả trước đó. Kết quả cuối cùng trở thành 30 + 9 = 39.
//* a trở thành 9 (giá trị cuối cùng) 
//*  result = ++a + a + a++ + ++a + a; = 7 + 7 + 7 + 9 + 9 = 39

console.log(' a = ', a); //Đầu ra : 9
console.log(' result =',result); //Đầu ra : 39