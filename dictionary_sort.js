const readline = require('readline');
// your code here to initialize the program and take user input
function dictionarySort(arr){
    
    for(var i = 0; i < arr.length; i++){
        for(var j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[i]){
                var temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}
console.log(dictionarySort(['makan','duduk','tidur','terbang']));
console.log(dictionarySort(['anggi','angga','ani','adi']));


// module.exports = Dictionary
