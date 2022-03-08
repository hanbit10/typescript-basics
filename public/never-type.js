"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let userInput;
let userName;
userInput = 5;
userInput = 'Hanbit Chang';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
    //while(true){}
}
//never return anything
const result = generateError('An error occurred!', 500);
console.log(result);
//# sourceMappingURL=never-type.js.map