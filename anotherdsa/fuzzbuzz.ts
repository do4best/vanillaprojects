function fuzzArray(arr:number):(string|number)[]{
    let result:(number|string)[]=[]
    for(let i=0; i<arr; i++){
        if(i % 3 === 0 && i%5 === 0){
            result.push("FizzBuzz")
        }else if(i%3 === 0){
            result.push("Fizz")
        }else if(i%5 === 0){
            result.push("Buzz")
        }else{
            result.push(i)
        }
    }
    return result
}
console.log(fuzzArray(30))