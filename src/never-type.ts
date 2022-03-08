//NEVER TYPE
export{}

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Hanbit Chang';
if (typeof userInput === 'string') {
    userName = userInput;
}

function generateError(message: string, code: number) {
    throw {message: message, errorCode: code};
    //while(true){}
}

//never return anything
const result = generateError('An error occurred!', 500);
console.log(result);
