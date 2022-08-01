"use strict";
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number,string];
// } = {
//     name: "jack",
//     age: 30,
//     hobbies: ["Sports","Cooking"],
//     role: [2,"Author"]
// };
Object.defineProperty(exports, "__esModule", { value: true });
// let favoriteActivities: (string|number)[];
// favoriteActivities = [1,"Boo"];
// for (const hobby of person.hobbies) {
//     console.log(hobby.toUpperCase());
// }
const enum_example_1 = require("./enum_example");
const person = {
    name: "jack",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: enum_example_1.Role.ADMIN
};
console.log(person.role);
