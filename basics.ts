console.log("Code in here");

function add(n1: number,n2: number, showResult: boolean, resultPhrase: string){
    
    if(showResult){
        const result = n1+n2;
        console.log(resultPhrase + result);
    }else{
        return n1+ n2;
    }

}


const number1: number = 1.3;
const number2 = 5;
const printResult = true;
let resultPhrase = "Result is: ";


console.log(add(number1,number2, printResult, resultPhrase));