function add(n1: number, n2: number){
    return n1+n2;
}

function printResult(nun: number): void {
    console.log("RESULT: "+nun);
}

// printResult(add(5,12));

let combVal: (num1: number, num2: number) => number;

combVal=add;

// printResult(combVal(5,20));
// console.log(combVal(1,10));

function addAndHandle(n1: number, n2: number, cb: (num: number) => void){
    const result = n1 + n2;
    cb(result);
}

addAndHandle(5,12, (result) => {
    console.log(result);
    return;
});