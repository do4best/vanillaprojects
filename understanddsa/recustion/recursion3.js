function flatternArray(arr){
    let result = [];
    for(const item of arr){
        if(Array.isArray(item)){
            result = result.concat(flatternArray(item));
    }else(result.push(item))
    }
    return result;
}
function permitaion(arr){
    let result=[] 
    if(arr.length === 0){
        result.push('');
return result;
    }
    for(let i=0; i<arr.length; i++){
        const firstChar = arr[i]
        const restofString =arr.slice(0,i) + arr.slice(i + 1)
        const subPremition = permitaion(restofString)
        for(let j=0; j<subPremition.length; j++ ){
            result.push(firstChar + subPremition[j])
        } 
    }
    return result;

}
function getPermutations(arr) {
    if (arr.length === 0) return [[]];

    return arr.flatMap((item, index) => {
        const rest = arr.slice(0, index).concat(arr.slice(index + 1));
        return getPermutations(rest).map(permutation => [item, ...permutation]);
    });
}

console.log(getPermutations(['opd']));

console.log(flatternArray([1,2,3,[4,5,6,[7,8,9]]]))
console.log(permitaion("cde"))