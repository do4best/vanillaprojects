function interSection(arr1, arr2) {
    var inresect = [];
    for (var i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i]) && !inresect.includes(arr1[i])) {
            inresect.push(arr1[i]);
        }
    }
    return inresect;
}
console.log(interSection([1, 2, 3, 4, 5], [3, 5, 6, 7, 8]));
