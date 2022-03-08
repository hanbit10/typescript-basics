"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//you can choose which type you want to return
function add(n1, n2) {
    return n1 + n2;
}
/* function printResult(num: number){
    console.log('Result: ' + num);
}
printResult(add(5, 12)); */
//let combineValues: Function;
//combineValues = add(5, 12);
//combineValues = printResult; will seen as a function too, so its not perfect for
let combineValues;
combineValues = add;
//wont work anymore
//combineValues = printResult;
console.log(combineValues(8, 8));
// undefined type
let value;
//give the result to cb
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
//cb function can do anything with the result now
addAndHandle(10, 20, (result) => {
    console.log(result);
});
//# sourceMappingURL=function.js.map