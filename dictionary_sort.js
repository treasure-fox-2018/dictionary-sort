`use stric`

const readline = require('readline');

function dictionarySort(array){

	for(var a = 0; a < array.length; a++){
		for(var b = 0; b < array.length; b++){
			if(array[a] < array[b]){
				var temp = array[a]
				array[a] = array[b]
				array[b] = temp
			}
		}
	}

	var hasil = array.join()
  
	return hasil
}

console.log(dictionarySort(['makan', 'duduk', 'tidur', 'terbang']))
console.log(dictionarySort(['anggi', 'angga', 'adi', 'ani']))

//module.exports = Dictionary
