function findthemax(arr){
    let max = arr[0]
    for(let i=1; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max;
}
let arr1=[3,2,4,5,6,8,9]
console.log(Math.max(...arr1))

console.log(findthemax(arr1))