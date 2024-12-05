const sumofSquare=(nums)=>{
const evensquare = nums.filter((num)=>num%2 === 0).map((num)=> num ** 2).reduce((sum,square)=>sum + square,0);
return evensquare;
}
console.log(sumofSquare([1,2,3,4,5,6,7,8]))