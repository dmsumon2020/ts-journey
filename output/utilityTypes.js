"use strict";
let collegeData = {
    name: "Dhaka College",
    location: "Dhanmondi, Dhaka",
};
function getCollegeData(data) {
    return data;
}
getCollegeData({ name: "City College", students: 3500 });
function getCollegeData2(data) {
    return data;
}
getCollegeData2({
    name: "City College",
    location: "Dhaka",
    students: 3500,
    branches: 500,
});
/** Readonly */
let collegeType4 = {
    name: "Rifles College",
    location: "Rajshahi",
    students: 18000,
    branches: 50,
};
collegeType4.name = "Rifles College, Rajshahi"; // not possible
/** Pick */
let collegeType5 = {
    name: "Rifles College",
    students: 18000,
};
