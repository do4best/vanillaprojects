const display=(str)=>console.log(str)
// function sumup () {
//     let sum=0;
//     for(let i of arguments){
//         sum += i;
//     }
//     return sum;
// }
// let result = sumup(2,3,4,5,6)

// display(result)
// console.log(sumup(9,8,7))

const anotherSum = function(){
    return Array.from(arguments).reduce((tot,sum)=>tot +sum,0)
}
display(anotherSum(5,6,7,8,9))

const theThirdsum = function(...num){
    return num.reduce((total,sum)=>total + sum,0)
}
display(theThirdsum(90,56,666))