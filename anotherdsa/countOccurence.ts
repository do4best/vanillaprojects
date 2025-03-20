function countOccurence(arr:string,letter:string):number{
    return arr.split(letter).length-1
}
function anotherCounter(arr1:string,letter:string){
    let counter:number = 0;
    for(let i=0; i<arr1.length; i++){
        if(arr1[i] === letter){
            counter++;
        }
    }
    return counter;
}
console.log(anotherCounter('find the Godd','d'))
console.log(countOccurence('Hello friends','i'))