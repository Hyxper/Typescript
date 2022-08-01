let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "123";


if (typeof userInput === "string") {
    userName = userInput;
}

function generateErr(msg: string, code: number): never{
    throw {msg: msg, code: code};
}

generateErr("ERROR",500)