// const readline = require('readline');
// // your code here to initialize the program and take user input


function arrOfWord(array) {

  var temp = 0

  for(var i = 0 ; i < array.length; i++){

      var ubah = i;

      for(var j = i + 1; j<array.length; j++) {
          if(array[j] < array[ubah])
              ubah = j;
      }
      //proses swap mencari terkecil
      temp = array[i];
      array[i] = array[ubah];
      array[ubah] = temp;
  }
  return array.join(',')
}
console.log(arrOfWord(['makan' , 'duduk' , 'tidur', 'terbang']));
console.log(arrOfWord(['anggi', 'angga', 'ani', 'adi']))


module.exports = Dictionary
