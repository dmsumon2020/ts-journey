"use strict";
var sym1 = Symbol();
var sym2 = Symbol();
console.log(sym1 == sym2);
const id = Symbol("id");
const obj = {
    [id]: 100,
    name: "John",
};
console.log(obj);
console.log(obj[id]);
