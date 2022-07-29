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

// let favoriteActivities: (string|number)[];
// favoriteActivities = [1,"Boo"];


// for (const hobby of person.hobbies) {
//     console.log(hobby.toUpperCase());
// }

import { Role } from "./enum_example";


const person = {
    name: "jack",
    age: 30,
    hobbies: ["Sports","Cooking"],
    role: Role.ADMIN
};

console.log(person.role);