function printit(print){
    //base case
    if(print <= 0){
        console.log("Recustion is done here")
        return;
    }
    // recursive case
    console.log(print)
    print--;
    printit(print )

}
printit(20)
function sumit(n){
    if(n == 1){
        return n;
    }
    return n + sumit(n-1)
}

console.log(sumit(4))