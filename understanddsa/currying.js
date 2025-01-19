function multi(a){
    return function inner(b){
        return a*b
    }
}
function add(a){
    return a + 4
}
function sub(b){
    return b - 2 ;
}
const makedifference = (x) => add(sub(x))
console.log(makedifference(9))
let result = multi(5)
console.log(result(3))