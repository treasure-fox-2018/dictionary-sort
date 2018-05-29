const readline = require('readline');
// your code here to initialize the program and take user input

function Dictionary(arr){
  for (var i = 0; i < arr.length; i++){
    for (var j = 0; j < i; j++){
      let str = arr[i]
      if(arr[i] < arr[j]){
        arr[i] = arr [j]
        arr[j] = str
      }
    }
    debugger;
  }
  return arr
}

console.log(Dictionary(["makan", "duduk", "tidur", "terbang"])); // duduk,makan,terbang,tidur
console.log(Dictionary(["anggi", "angga", "ani", "adi"])); // adi,angga,anggi,ani

module.exports = Dictionary
