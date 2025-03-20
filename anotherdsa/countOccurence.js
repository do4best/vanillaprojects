function countOccurence(arr, letter) {
    return arr.split(letter).length - 1;
}
function anotherCounter(arr1, letter) {
    var counter = 0;
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] === letter) {
            counter++;
        }
    }
    return counter;
}
console.log(anotherCounter('find the Godd', 'd'));
console.log(countOccurence('Hello friends', 'i'));
