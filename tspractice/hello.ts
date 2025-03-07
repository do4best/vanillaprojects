type Product={
    name:string,
    price:number,
    quantity:number
}

const products:Product[]=[
    {name:"Apple",price:0.5,quantity:10},
    {name:"Orange",price:0.4,quantity:14},
    {name:"Banana",price:0.3,quantity:13}
]
function calculateTotalSales(products : Product[],taxRate:number):number{
    const totalSales = products.reduce((sum,products) =>sum + products.price * products.quantity,0)
    const taxAmount = (totalSales * taxRate)/100;
    const totlaSaleswithTax = totalSales + taxAmount;

    return parseFloat(totlaSaleswithTax.toFixed(2));
}
console.log(calculateTotalSales(products,10))