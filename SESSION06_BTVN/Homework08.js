alert("nhập bán kính(r) của hình tròn vào ô sau đây đê tính diện tích(S) và chu vi(C) của hình tròn đó.")
const pi = 3.14;
let r = prompt("Nhập bán kính(r) của hình tròn");
let c = 2 * pi * r;
let s = (r * r) * pi;
console.log("Chu vi hình tròn : " + c);
console.log("Diện tích hình tròn : " + s);