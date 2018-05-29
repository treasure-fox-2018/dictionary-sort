const readline = require('readline');
// your code here to initialize the program and take user input
function dictionary_sort(arr){
  for(var i = 0; i < arr.length; i++){
    var min = i
    for(var j = i; j < arr.length; j++){
      if(arr[j] < arr[min]){
        min = j
      }
    }
    if(min != i){
      var temp = arr[i]
      arr[i] = arr[min]
      arr[min] = temp
    }
  }
  return arr.join(",")
}

console.log(dictionary_sort(['makan','duduk','tidur','terbang']))
console.log(dictionary_sort(['anggi','angga','ani','adi']))


module.exports = Dictionary
