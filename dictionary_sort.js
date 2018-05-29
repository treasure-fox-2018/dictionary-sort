const readline = require('readline');
// your code here to initialize the program and take user input

function dictionary(arr){

for(let i=1;i<arr.length;i++){
    for(let j=0;j<arr.length;j++){
        if(arr[i] < arr[j]){
            let tempt = arr[i]
            arr[i] = arr[j]
            arr[j] = tempt
        }
    }
}
return arr


}

console.log(dictionary(["makan", "duduk", "tidur", "terbang"])); // duduk,makan,terbang,tidur
console.log(dictionary(["anggi", "angga", "ani", "adi"])); // adi,angga,anggi,ani

module.exports = dictionary
