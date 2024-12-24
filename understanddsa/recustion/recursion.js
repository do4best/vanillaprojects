function callitself(num){
    if(num <= 0){
        console.log("All done");
        return;
    }
    //resursive
    console.log(num)
    num--;
    callitself(num)
}
//////////unwinding
function sumup(sum){
    if(sum === 1) {
        console.log(`sumup(${sum}) return 1`)
        return 1;}
        console.log(`sumup(${sum}) calls sumup(${sum-1}) + ${sum}`)
    let result= sum + sumup(sum-1)
    console.log(`sumup(${sum}) return ${result}`)
    return result;
}
function reverseString(str){
    if(str === ''){
        return ''
    }
    return reverseString(str.substr(1)) + str.charAt(0)
}
function fibnacchi(n){
    if(n < 2){
        return n;
    }
    return fibnacchi(n-1) + fibnacchi(n - 2)
}
callitself(10)
console.log(sumup(20))
console.log(reverseString("friend"))
console.log(fibnacchi(8))