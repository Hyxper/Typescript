var userInput;
var userName;
userInput = 5;
userInput = "123";
if (typeof userInput === "string") {
    userName = userInput;
}
function generateErr(msg, code) {
    throw { msg: msg, code: code };
}
try {
    generateErr("ERROR", 500);
}
catch (_a) { }
;
