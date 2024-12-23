function letterRepition(sentence,character){
    let counter = 0;
    for(let i=0; i<sentence.length; i++){
        if(sentence[i] === character){
            counter++;
        }
    }
    return counter;
}

console.log(letterRepition("Fello Reldddsllo","l")) // 3
module.exports = letterRepition