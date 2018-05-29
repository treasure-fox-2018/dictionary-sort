const readline = require('readline');
function sort(arr){
  var check;

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        check = arr[i];
        arr[i] = arr[j];
        arr[j] = check;
      }
    }
  }


  return arr.join();
}

console.log(sort(['makan','duduk','tidur','terbang']));
console.log(sort(['anggi','angga','ani','adi']));
