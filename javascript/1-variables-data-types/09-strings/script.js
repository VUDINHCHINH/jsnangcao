let x;

const name = 'Chinh';
const age = 19;

// Concatenation
x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old';

// Template Literals
x = `Hello, my name is ${name} and I am ${age} years old`;

// String Properties and Methods

// Creating a "string object" (JS does this automatically when using a propery or method on a primitive string)
const s = new String('Hello World');

x = typeof s;

x = s.length;

// Access value by key
x = s[0];

// Shows the prototype of the string object. Shows the properties and methods
x = s.__proto__;

// Change case
x = s.toUpperCase(); //chuyển đổi chuổi thành chữ in hoa
x = s.toLowerCase(); //chữ thường
// charAt() - returns the character at the specified index
x = s.charAt(0); //trả về ký tự tại vị trí chỉ định trong chuỗi

// indexOf - returns the index of the first occurrence of a specified value in a string
x = s.indexOf('d'); //Trả về chỉ số của sự xuất hiện đầu tiên của một giá trị cụ thể trong chuỗi.

// substring() - search a string for a specified value
x = s.substring(2, 5);
x = s.substring(7);

// slice() - extracts a part of a string and returns a new string
x = s.slice(-11, -6);

// trim() - remove whitespace from beginning and end of string
x = '         Hello World';
x = x.trim(); //loại bỏ khoảng trắng

// replace() - replace all instances of a string
x = s.replace('World', 'John');

// includes() - returns true if the string is found
x = s.includes('Hell'); //Kiểm tra xem chuỗi có chứa một chuỗi khác không và trả về true nếu tìm thấy.

// valueOf() - returns the primitive value of a variable
x = s.valueOf();//Trả về giá trị nguyên thủy của biến s.

// split() - returns an array of strings
x = s.split('');

console.log(x);
