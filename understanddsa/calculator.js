function thecalculator(num1,num2,opt){
    let result = 0;
    switch(opt){
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
                        throw new Error('Invalid Operator');
    }
    return result;
}
console.log(thecalculator(2,3,'+'))