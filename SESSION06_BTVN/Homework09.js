let a = 5;
let b = "5";
console.log(a == b); 
console.log(a === b); 
console.log(a != b); 
console.log(a !== b); 

//Kiểm tra kết quả & giải thích:

//console.log(a == b);
//-kết quả là:  true
//-vì 2 phần tử có giá trị là 5 và cùng là kiểu số.

//console.log(a === b);
//-kết quả là:  false
//-vì toán tử === không chỉ so sánh giá trị của 2 phần tử mà nó còn so sánh cả kiểu dữ liệu của 2 phần tử đó.

//console.log(a != b);
//-kết quả là:  false
//-vì toán tử != sẽ chuyển đổi các loại dữ liệu của giá trị trong khi so sánh.
//-và việc chuyển đổi dữ liệu đã diễn ra, 5 và "5" được coi là bằng nhau.

//console.log(a !== b);
//-kết quả là:  true
//-vì toán tử !== sẽ không chuyển đổi các loại dữ liệu.
//-vì 5 là số nguyên và "5" là một ký tự và không có chuyển đổi loại dữ liệu nào diễn ra.