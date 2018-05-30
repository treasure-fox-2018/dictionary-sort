const readline = require('readline');
// your code here to initialize the program and take user input

function selectionSort(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    var tempoSmallest = arr[i];
    var tempoSmallestPosition = 0;
    for (var j = i; j < arr.length; j++) {
      var comparison = arr[j]
      if (comparison < tempoSmallest) {
        tempoSmallest = arr[j];
        tempoSmallestPosition = j;
      }
    }
    arr[tempoSmallestPosition] = arr[i];
    arr[i] = tempoSmallest;
  }
  return arr.join(", ");
}

console.log(selectionSort(["anggi", "angga", "ani", "adi"]));

// module.exports = Dictionary
