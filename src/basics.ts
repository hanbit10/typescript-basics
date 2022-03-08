export{}

//-----------------------------------------
function adding(n1: number, n2: number, showResult: boolean, phrase: string){
    // print type of the number1
    console.log(typeof n1);
    //!== is boolean
    if (typeof n1 !=='number' || typeof n2 !=='number'){
        throw new Error('Incorrect input!');
    }
    const result = n1 + n2;
    if(showResult){
        console.log(phrase + result);
    } else {
        return result;
    }
}

//let number1: number = 5; not really good 
//stores anytype
let number1;
number1 = 5;
const number2 = 2.8;
const printResult = true;
let resultPhrase = 'Result is: ';
 
//const result adding(number1, number2);
//console.log(result);

adding(number1, number2, printResult, resultPhrase);

//----------------------------------
function adding2(n3: string, n4: number){
    return n3 + n4;
}

const number3 = '5';
const number4 = 2.8;
const result2 = adding2(number3, number4);
console.log(result2);

//----------------------------------




