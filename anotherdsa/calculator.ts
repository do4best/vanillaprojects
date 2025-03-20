function calculators(num1:number,num2:number,oprator:string):number{
    let result:number=0;
    if(oprator === "*"){
        result = num1 * num2;
    }else if(oprator === "/"){
        result = num1 / num2;
    } else{
        console.log("Invalid operation")
    }
    return result
}

let result1 = calculators(566,589,'*')

console.log(result1)