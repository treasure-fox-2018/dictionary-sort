const readline = require('readline');

/**
 * @function dictionarySort
 * melaksanakan pengurutan string alphabetic
 * @param {array} inputs kumpulan kata-kata acak
 * @returns {string} mengembalikan kumpulan kata-kata yang sudah diurutkan dalam bentuk string
 */

function dictionarySort(inputs) {
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i] > inputs[i+1]) {
            let str = inputs[i];
            inputs[i] = inputs[i+1];
            inputs[i+1] = str;
        }
    }

    return inputs.join();
}

console.log(dictionarySort(['makan', 'duduk', 'tidur', 'terbang']));
console.log(dictionarySort(['anggi', 'angga', 'ani', 'adi']));

module.exports = { dictionarySort };
