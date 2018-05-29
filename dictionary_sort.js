const readline = require('readline');
// your code here to initialize the program and take user input
function Dictionary(data) {
    
    for (let i = 0; i < data.length; i++) {
        var min = data[i]
        var index = i
        for (let j = i; j < data.length; j++) {
            if (min > data[j]) {
                min = data[j]
                index = j
            }
            var temp = data[i]
            data[i] = data[index]
            data[index] = temp
        }
    }

    return data.join()
}

console.log(Dictionary(['makan','duduk','tidur','terbang']));
//duduk,makan,terbang,tidur
console.log(Dictionary(['anggi','angga','ani','adi']));
//adi,angga,anggi,ani


module.exports = Dictionary
