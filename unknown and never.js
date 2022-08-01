"use strict";
let userInput;
let userName;
userInput = 5;
userInput = "123";
if (typeof userInput === "string") {
    userName = userInput;
}
function generateErr(msg, code) {
    throw { msg: msg, code: code };
}
generateErr("ERROR", 500);
