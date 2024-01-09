// Create a new string called "myNewString" that holds the value of "Developer", using the lowercase value from "myString"
const myString = 'developer';

let myNewString;

// Solution 1:
myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);
//myString.charAt(0).toUpperCase(): Lấy ký tự ở vị trí đầu tiên của myString, chuyển đổi nó thành chữ hoa.
// myString.substring(1): Lấy phần còn lại của chuỗi myString từ vị trí thứ hai trở đi (bắt đầu từ index 1).
// Ghép kết quả của hai phần trên để tạo chuỗi mới với chữ cái đầu tiên đã được chuyển đổi thành chữ hoa.

// Solution 2:
myNewString = myString[0].toUpperCase() + myString.substring(1);
// Solution 3:
myNewString = `${myString[0].toUpperCase()}${myString.slice(1)}`;

console.log(myNewString);
