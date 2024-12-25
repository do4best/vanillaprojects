// understanding factorial
function factorial(num){
if(num === 0 || num === 1){
    return 1;
}
return num * factorial(num - 1);
}
// raise to the power
function raisingPower(base,exp){
    if(exp === 0){
        return 1;
    }
    return base * raisingPower(base,exp - 1)
}
function arraySum(arr){
    if(arr.length === 0){
        return 0;
    }
    return arr[0] + arraySum(arr.slice(1))
}
function numberRange(startnum,endnum){
    if(startnum === endnum){
        return [startnum]
    }
    const number = numberRange(startnum,endnum - 1)
    number.push(endnum)
    return number
}
console.log(numberRange(1,52))
console.log(factorial(6))
console.log(arraySum([2,3,4,5,6,7]))