const readline = require('readline');
// your code here to initialize the program and take user input
function ownSort(arr) {
  // Your sorting code
  for (var a = 1; a < arr.length; a++) {
    for (var b = 0; b < arr.length; b++) {
      if (arr[a] < arr[b]) {
        var move = arr[a]
        arr[a] = arr[b]
        arr[b] = move
      }
    }
  }
  return arr
}

function Dictionary(arr) {
  var sort = ownSort(arr)
  return sort
}

console.log(Dictionary(['makan', 'duduk', 'tidur', 'terbang']))
console.log(Dictionary(['anggi', 'angga', 'ani', 'adi']))

module.exports = Dictionary
