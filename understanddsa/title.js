function firstTitle(str){
    const word = str.toLowerCase().split(' ')
    for(let i=0; i<word.length; i++){
        word[i] = word[i][0].toUpperCase() + word[i].slice(1) 
    }
    return word.join(' ');
}
function reverseit(str){
    return str.split('').reverse().join(' ')
}
function anotherReverse(str){
    let reverse='';
    for(let i = str.length-1; i >= 0; i--){
        reverse += str[i]
    }

    return reverse;
}
function removeDuplicat(arr){
let arrlenght = [];
for(let i=0; i<arr.length; i++){
    if(!arrlenght.includes(arr[i])){
        arrlenght.push(arr[i])
    }

}
return arrlenght;
}
console.log(removeDuplicat([1,1,2,2,2,3,3,5,4,4,5]))
let sent = "THIS is it"
console.log(firstTitle(sent))
console.log(reverseit("Hello"))
console.log(anotherReverse("Hello friend"))