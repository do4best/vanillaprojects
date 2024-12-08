
function findDuplicateletter(str,ltr){
    let count = 0;
    for(let i=0; i<str.length; i++){
        if(str[i] === ltr){
            count++;
        }

    }
    return `your letter ${ltr} in sentence ${str} times is ${count}`;
}
function findletters(str,ltr){
    return str.split(ltr).length-1;
}
console.log(findDuplicateletter("Hello friend",'k'))
console.log(findletters("find the friend",'f'))