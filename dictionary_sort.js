const readline = require('readline');

function dicSort(arr) {


    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = i; j >= 0; j--) {
            if (arr[i] < arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }


    }
    var str = ''
    for (let i = 0; i < arr.length; i++) {
        str += arr[i] + ', '

    }

    return str.substring(0,str.length-2)
}

console.log(dicSort(['makan', 'duduk', 'tidur', 'terbang']))

// your code here to initialize the program and take user input

// module.exports = Dictionary
