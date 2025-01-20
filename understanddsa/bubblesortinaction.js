function bubblesort(arr){
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length - i - 1; j++){
            if(arr[j]>arr[j+1]){
            [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
        }}
    }
    return arr;
}
let find=[4,3,2,0,8,1]
console.log(bubblesort(find))