const readline = require('readline');

function dictionarySort(input) {
  for (var index = 0; index < input.length; index++) {
    var target = input[index]
    for (var index2 = index - 1; index2 >= 0 && (input[index2] > target); index2--){
      input[index2+1] = input[index2]
    }
    input[index2+1] = target
  }
  return input.join(', ')
}
console.log(dictionarySort(["makan", "duduk", "tidur", "terbang"]))//duduk, makan, terbang, tidur
console.log(dictionarySort(["anggi", "angga", "ani", "adi"]))//adi, angga, anggi, ani

module.exports = dictionarySort
