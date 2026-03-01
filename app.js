function add(a, b) {
    return a + b;
}"// change" 



function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }   
    return a / b;
}

function subtract(a, b) {
    return a - b;
}

function mod(a, b) {
    return a % b;
}

function doubleNumber(a) {
    console.log("This is a miscellaneous function.");
    return a * 2;
}

function halfNumber(a) {
    console.log("This is a miscellaneous function.");
    return a / 2;
}

function exponent(a, b) {
    console.log("This is a miscellaneous function.");
    return a ** b;
}

function thrice(a) {
    return 3 * a;
}
module.exports = {add, multiply, divide, subtract, mod, doubleNumber, halfNumber, exponent, thrice};"// test again" 
"// test again -2" 
"// trigger again" 
"// PR mode test"
"//added mod function as well" 
"// final test PR" 
"// clean PR test" 
"// confluence test" 
"// confluence retry" 
"//added PR plus confluence combination"
