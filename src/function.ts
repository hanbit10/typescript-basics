export{}
//you can choose which type you want to return
function add(n1: number, n2: number): number {
    return n1 + n2;
}

/* function printResult(num: number){
    console.log('Result: ' + num);
}
printResult(add(5, 12)); */

//let combineValues: Function;
//combineValues = add(5, 12);
//combineValues = printResult; will seen as a function too, so its not perfect for

let combineValues: (a: number, b: number) => number;

combineValues = add;
//wont work anymore
//combineValues = printResult;
console.log(combineValues(8, 8));

// undefined type
let value: undefined;

//give the result to cb
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

//cb function can do anything with the result now
addAndHandle(10, 20, (result) => {
    console.log(result);
});