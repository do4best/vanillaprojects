function calculators(num1, num2, oprator) {
    var result = 0;
    if (oprator === "*") {
        result = num1 * num2;
    }
    else if (oprator === "/") {
        result = num1 / num2;
    }
    else {
        console.log("Invalid operation");
    }
    return result;
}
var result1 = calculators(566, 589, '*');
console.log(result1);
