const readline = require('readline');

let dictionarySort = (array =>{
    for(let z = 1; z < array.length; z ++){
      let temp = array[z];
      for(let x = 0; x < z; x++){
        if(temp < array[x]){
          array.splice(z,1);
          array.splice(x,0,temp)
          break;
        }
      }
    }
    return array
  })
  
  console.log(dictionarySort(['makan', 'duduk', 'tidur', 'terbang']));
  console.log(dictionarySort(['anggi', 'angga', 'ani', 'adi']));
  
// your code here to initialize the program and take user input

// module.exports = Dictionary
