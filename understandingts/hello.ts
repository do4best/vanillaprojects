function mainCalculator(num1:number,num2:number,operator:string):number{
    let result = 0;
    switch(operator){
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
            throw new Error("Invalid Operator")
    }
    return result;
}
function countOccurence(str:string,char:string):number{
    let count:string|number = 0;
    for(let i=0; i <str.length; i++){
        if(str[i] === char){
            count++
        }else{
        console.log("Sorry the sentence has no such letters")
        }
    }
    return count;
}
console.log(countOccurence("Friend","z"))
console.log(mainCalculator(25,56,'*'))