function findMax(arr:[]):number{
    return Math.max(...arr)
}
function findAnotherMax(arr:number[]):number{
    let result:number = arr[0]
    for(let i=0; i<arr.length; i++){
        if(arr[i] > result){
            result = arr[i]
        }
    }
    return result;
}

let arr1:number[]=[1,21,3,4,5,6]
console.log(findAnotherMax(arr1))