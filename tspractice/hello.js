var products = [
    { name: "Apple", price: 0.5, quantity: 10 },
    { name: "Orange", price: 0.4, quantity: 14 },
    { name: "Banana", price: 0.3, quantity: 13 }
];
function calculateTotalSales(products, taxRate) {
    var totalSales = products.reduce(function (sum, products) { return sum + products.price * products.quantity; }, 0);
    var taxAmount = (totalSales * taxRate) / 100;
    var totlaSaleswithTax = totalSales + taxAmount;
    return parseFloat(totlaSaleswithTax.toFixed(2));
}
console.log(calculateTotalSales(products, 10));
