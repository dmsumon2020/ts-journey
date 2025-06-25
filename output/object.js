"use strict";
var userData = {
    name: "John Doe",
    age: 30,
    occupation: "Software Engineer",
    permanent: true,
};
console.log(userData);
userData.name = "Rana vai";
console.log(userData);
var userData2 = {
    name: "John Doe",
    age: 30,
    occupation: "Software Engineer",
    permanent: true,
    company: undefined,
};
console.log("userData2", userData2);
userData2.company = "HCL";
console.log("userData2", userData2);
var userData3 = {
    name: "John Doe",
    age: 30,
    occupation: "Software Engineer",
    permanent: true,
};
userData3.city = "Bangalore";
console.log("userData3", userData3);
var nestedObj = {
    name: "John Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Anytown",
        road: 30,
    },
};
console.log("nestedObj", nestedObj);
const nestedObj2 = {
    name: "John Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Anytown",
        road: 30,
    },
};
console.log("nestedObj2", nestedObj2);
