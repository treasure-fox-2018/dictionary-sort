
let Dictionary = (input) => {
  for (let i = 0 ; i < input.length-1 ; i++) {
    for (let j = i+1; j < input.length ; j++) {
      if (input[i] > input[j]) {
        let temp = input[i];
        input[i] = input[j];
        input[j] = temp;
      }
    }
  }
  return input.join();
}


var arrOfWord = ["makan", "duduk", "tidur", "terbang"]
var arrOfWord2 = ["anggi", "angga", "ani", "adi", "adii"]
console.log(Dictionary(arrOfWord));
//duduk,makan,terbang,tidur

console.log(Dictionary(arrOfWord2));
//adi,adii,angga,anggi,ani

const readline = require('readline');



module.exports = Dictionary
