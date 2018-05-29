// const readline = require('readline');
// // your code here to initialize the program and take user input

// module.exports = Dictionary

function dictionarySort (arr) {
  for (var i = 0; i <= arr.length - 2; i++) {
    for (var j = i+1; j <= arr.length - 1; j++) {
      if (arr[i] > arr[j]) {
        var sementara = arr[i];
        arr[i] = arr[j];
        arr[j] = sementara;
      }
    }
  }
  return arr;
}

console.log(dictionarySort(['makan', 'duduk', 'tidur','terbang']))
console.log(dictionarySort(['anggi', 'angga', 'ani','adi']))