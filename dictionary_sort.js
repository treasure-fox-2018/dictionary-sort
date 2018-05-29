const readline = require('readline');
// your code here to initialize the program and take user input
function dictionary_sort(arrOfWord) {
  for (var i = 1; i < arrOfWord.length; i++) {
    for (var j = 0; j < arrOfWord.length; j++) {
      if (arrOfWord[i]<arrOfWord[j]) {
        var sort = arrOfWord[i]
        arrOfWord[i]=arrOfWord[j]
        arrOfWord[j]=sort
      }
    }
  }

  // }
  return arrOfWord;
}
console.log(dictionary_sort(['makan','duduk','tidur','terbang']));
console.log(dictionary_sort(['anggi','angga','ani','adi']));

// module.exports = Dictionary
