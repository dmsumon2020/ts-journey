var age: number = 30;
var userName: string = "John";

var info: string = `My name is ${userName} and I am ${age} years old.`;

console.log(info);

var data: string = age.toString();
var data2: string = String(age);
var data3: string = "" + age;
console.log(typeof data, data);
console.log(typeof data2, data2);
console.log(typeof data3, data3);
