function sumit(arr){
    return arr.reduce((a,b)=>a+b,0)
}
const operator={
    '+':((a,b)=> a + b),
    '-':((a,b)=> a - b),
    '*':((a,b)=> a * b),
    '/':((a,b)=> a / b),

}
function fun1(num1,num2,opp){
    let operations = operator[opp];
    if(!operations){
        throw new Error("Invalid Operator")
    }
    return operations(num1,num2)
}
function findingMax(value){
    let max = value[0];
    for(let i=0; i<value.length; i++){
        if(value[i] > max){
            max = value[i]
        }
    }
    return max;
}
console.log(findingMax([5,6,8,10,2,1]))
console.log(sumit([5,8,4,5,5]))
console.log(fun1(56,48,'/'))