const readline = require('readline');

function dictionary(words) {
    for(let i=0; i<words.length; i++){
        for(let j=i+1; j<words.length; j++){
            if(words[i] >= words[j]){
                let temp = words[i]
                words[i] = words[j]
                words[j] = temp
            }
        }
    }
    return words.join()
}

console.log(dictionary(["makan", "duduk", "tidur", "terbang"])); // duduk,makan,terbang,tidur
console.log(dictionary(["anggi", "angga", "ani", "adi"])); // adi,angga,anggi,ani

module.exports = dictionary
