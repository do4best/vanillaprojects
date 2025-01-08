function wordReptition(str){
    const words = str.toLowerCase().split(/\W+/)
    const wordfrequency = new Map();
    for(const word of words){
        if(word === ' ') continue;

        if(wordfrequency.has(word)){
            wordfrequency.set(word,wordfrequency.get(word) + 1)
        }else{
            wordfrequency.set(word,1)
        }
    }
    return wordfrequency;
}
function findNumber(phoneNumber){
    const directory = new Map();
    for(const entry of phoneNumber){
        const [name,phoneNumber] = entry.split(':')
        directory.set(name.trim(),phoneNumber)
    }
    return directory;
}

const friend =[
    "jhon : 0320-4522701",
    "Meer : 0320-4522705",
    "Shah : 0320-4522704"
]
let result = findNumber(friend)
console.log(result.get('Meer'))
console.log(wordReptition("I went to the markeet and i saw a bagger"))