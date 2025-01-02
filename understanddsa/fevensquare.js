let arr = [,2,3,4,5,6,7,8,9,10,11,12]
function evensquare(arr){
    let result = arr.filter((item)=> item % 2 === 0)
    .map((item)=>item*2)
    .reduce((result,items)=>result + items,0)
    return result;
}
console.log(evensquare(arr))

let product =[
    {name:"apple",price:0.2,quantity:20},
    {name:"banana",price:0.3,quantity:10},
    {name:"mango",price:0.4,quantity:50},
    {name:"orange",price:0.5,quantity:60},
];

function calculateSales(totalsales,tax){
    let result = totalsales.reduce((sum,product)=> sum + product.price * product.quantity,0)
    let taxresult = (result * tax) / 100
    let totalsaleswithtax = taxresult + result;
    return totalsaleswithtax
}

console.log(calculateSales(product,7))