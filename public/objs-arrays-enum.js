"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//must tell the object what type
/* const person: {
    name: string;
    age: number;
} = {*/
/* const person:  {
    name: string;
    age: number;
    hobbies: string[];
    //tuple type for both types
    role: [number, string];
} = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['sports', 'cooking'],
    role: [2, 'author']
}; */
//array with strings
/* let favoriteActivities: string[];
favoriteActivities = ['sports']; */
/* for (const hobby of person.hobbies){
    console.log(hobby.toUpperCase);
} */
//console.log(person.hobbies);
/* //create a new array
person.role.push('admin');
//person.role[1] = 10;
console.log(person.role); */
//----------------------------------------------------------------
/* const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2; */
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role[Role["AUTHOR"] = 200] = "AUTHOR";
})(Role || (Role = {}));
;
const person2 = {
    name2: 'Maximilian',
    age2: 30,
    hobbies2: ['sports', 'cooking'],
    role2: Role.ADMIN
};
if (person2.role2 === Role.ADMIN) {
    console.log('is author');
}
//anytype--------------------------------------------------------
let favoriteActivities;
favoriteActivities = ['sports'];
//# sourceMappingURL=objs-arrays-enum.js.map