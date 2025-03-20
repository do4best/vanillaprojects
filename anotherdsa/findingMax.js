function findMax(arr) {
    return Math.max.apply(Math, arr);
}
function findAnotherMax(arr) {
    var result = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > result) {
            result = arr[i];
        }
    }
    return result;
}
var arr1 = [1, 21, 3, 4, 5, 6];
console.log(findAnotherMax(arr1));
