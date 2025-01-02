function shuffleArray(arr) {
    let newArraye = [...arr];
    let newPos;
    for (let i = newArraye.length - 1; i > 0; i--) {
        newPos = Math.floor(Math.random() * (i + 1));
        [newArraye[i], newArraye[newPos]] = [newArraye[newPos], newArraye[i]];
    }
    return newArraye;
}

console.log(shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));