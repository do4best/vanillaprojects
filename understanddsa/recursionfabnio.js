function fibnacchi(num){
    if(num < 2){
        return 2;}
        return fibnacchi(num-1) + fibnacchi(num-2)
    
}
function raisedPoser(base,exponent){
    if( exponent === 0){
        return 1;
    }
    return base * raisedPoser(base,exponent-1)}

    console.log(raisedPoser(5,5))
console.log(fibnacchi(5))