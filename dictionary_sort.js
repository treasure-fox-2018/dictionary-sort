const readline = require('readline');
// your code here to initialize the program and take user input

function Dictionary(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i].toLowerCase() > arr[j].toLowerCase()) {
        var kc = arr[j];
        arr[j] = arr[i];
        arr[i] = kc;
      }
    }
  }

  return arr.join(',')
}

var arrOfWord = ['makan', 'duduk', 'tidur', 'terbang'];
var arrOfWord1 = ['anggi', 'angga', 'ani', 'adi'];
console.log(Dictionary(arrOfWord)); // duduk,makan,terbang,tidur
console.log(Dictionary(arrOfWord1)); // adi,angga,anggi,ani

module.exports = Dictionary
