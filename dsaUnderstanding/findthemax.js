const findMax=(arr)=>{
    let mymax=arr[0];
    for(let i=0; i < arr.length; i++){
        if(arr[i] > mymax){
            mymax = arr[i]
        }
    }
    return mymax;
}
let arr1=[5,8,9,10,12]
console.log(findMax(arr1))
function firstletterCapitalized(str){
    let words = str.toLowerCase().split(' ')
    for(let i=0; i<words.length; i++){
        words[i] = words[i][0].toUpperCase() + words[i].slice(1) 
    }
    return words.join(' ')
}
console.log(firstletterCapitalized("This is StraNGE"))