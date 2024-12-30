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
let sent = "THIS is it"
console.log(firstTitle(sent))
console.log(reverseit("Hello"))
console.log(anotherReverse("Hello friend"))