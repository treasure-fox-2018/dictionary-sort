const readline = require('readline');
// your code here to initialize the program and take user input

//module.exports = Dictionary
function dictionary(array) {

    var tmp = ''

    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            if (array[i] > array[j]) {
                tmp = array[i]   
                array[i] = array[j]
                array[j] = tmp
            }
        }
    }
    return array.join(',')
}

console.log(dictionary(["makan", "duduk", "tidur", "terbang"])); // duduk,makan,terbang,tidur
console.log(dictionary(["anggi", "angga", "ani", "adi"])); // adi,angga,anggi,ani

module.exports = dictionary