'use strict'

const readline = require('readline');

var arrOfWord = ['makan', 'duduk', 'tidur', 'terbang'];
var arrOfWord2 = ['anggi', 'angga', 'ani', 'adi', 'aji', 'test'];

function dictSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
            if(arr[i] > arr[j]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

console.log(dictSort(arrOfWord))
console.log(dictSort(arrOfWord2));

// module.exports = Dictionary