const readline = require('readline');
// your code here to initialize the program and take user input
function dictionarySort (arrOfWords) {
  for (var a = 0; a < arrOfWords.length; a ++) {
    for(var b = a+1; b < arrOfWords.length; b++) {
      if(arrOfWords[b] < arrOfWords[a]) {
        var tampung = arrOfWords[a];
        arrOfWords[a] = arrOfWords[b];
        arrOfWords[b] = tampung
      }
    }
  }
  var joinArr = arrOfWords.join(',')
  return joinArr
}

console.log(dictionarySort(['makan', 'duduk', 'tidur', 'terbang']))
console.log(dictionarySort(['anggi', 'angga', 'ani', 'adi']))

// module.exports = Dictionary