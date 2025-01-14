function fibnacchi(num){
    if(num < 2){
        return 2;}
        return fibnacchi(num-1) + fibnacchi(num-2)
    
}

console.log(fibnacchi(5))