const readline = require('readline');
// your code here to initialize the program and take user input
function arrOfWord(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {
      if (array[j] < array[i]) {
        var min = array[j];
        array[j] = array[i];
        array[i] = min;
      }
    }
  }
  return array.join(',');
}
console.log(arrOfWord(['makan','duduk','tidur','terbang']));
console.log(arrOfWord(['anggi','angga','ani','adi']));

// module.exports = Dictionary
