const readline = require('readline');

function dictionarySort (arrWords) {

    for (var i = 0; i < arrWords.length; i++) {
        var sort = arrWords[i];
        for (var j = i - 1; j >= 0 && arrWords[j] > sort; j--) {
            arrWords[j+1] = arrWords[j];
        }
        arrWords[j+1] = sort;
    }
    return arrWords.join(' ');
}

console.log(dictionarySort(['makan', 'duduk', 'tidur', 'terbang']));
console.log(dictionarySort(['anggi', 'angga', 'ani', 'adi']));

module.exports = dictionarySort
