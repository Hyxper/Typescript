"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(nun) {
    console.log("RESULT: " + nun);
}
// printResult(add(5,12));
let combVal;
combVal = add;
// printResult(combVal(5,20));
// console.log(combVal(1,10));
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addAndHandle(5, 12, (result) => {
    console.log(result);
    return;
});
