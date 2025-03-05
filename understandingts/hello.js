function mainCalculator(num1, num2, operator) {
    var result = 0;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            throw new Error("Invalid Operator");
    }
    return result;
}
function countOccurence(str, char) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
        else {
            
            console.log("Sorry the sentence has no such letters");
            break;
            return null
        }
    }
    return count;
}
console.log(countOccurence("Friend", "z"));
console.log(mainCalculator(25, 56, '*'));
