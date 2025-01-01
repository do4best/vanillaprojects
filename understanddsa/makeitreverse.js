function countDown(num){
    if(num <= 0 ){
        return;
    }
    console.log(num)
    num--;
    countDown(num)
}
const reverseString=(str)=>{
return str === ''?'':reverseString(str.substr(1)) + str.charAt(0)
}
function fibnacchi(item){
    if(item === 1){
        return 1;
    }
    return item + fibnacchi(item - 1)
}
function factorial(item){
    if(item === 1 ){
        return 1;
    }
    return item * factorial(item - 1)
}
function raisedPower(base,exp){
    if(exp === 0){
return 1;
    }
    return base * raisedPower(base,exp - 1)
}
function sumit(arr){
    if(arr.length === 0){
        return 0;
    }
    return arr[0] + sumit(arr.slice(1))
}
function numberRange(start,end){
    if(start === end){
        return [start]
    }
    const result = numberRange(start,end - 1)
    result.push(end)
    return result;
}
countDown(20)
let result = reverseString("Hello Friend") 
console.log(result)
console.log(fibnacchi(10))
console.log(factorial(10))
console.log(raisedPower(2,10))
console.log(sumit([2,3,4,5,6,7,8,9,10]))
console.log(numberRange(1,5))