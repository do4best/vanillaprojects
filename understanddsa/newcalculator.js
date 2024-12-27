function calculator(num1,num2,option){
    let result;
    switch(option){
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
                        default:
                            throw new Error("Invalid Operator")

    }
    return result;
}
const operations = {
    '+': (num1, num2) => num1 + num2,
    '-': (num1, num2) => num1 - num2,
    '*': (num1, num2) => num1 * num2,
    '/': (num1, num2) => num1 / num2,
};

function calculators(num1, num2, operator) {
    const operation = operations[operator];
    if (!operation) {
        throw new Error("Invalid Operator");
    }
    return operation(num1, num2);
}

console.log(calculators(34, 67, '*')); // Output: 2278
console.log(calculators(34, 67, '+')); // Output: 101
console.log(calculators(34, 67, '-')); // Output: -33
console.log(calculators(34, 67, '/')); // Output: 0.5074626865671642
console.log(calculators(34,67,'*'))