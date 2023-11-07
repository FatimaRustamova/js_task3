//Tapsiriq 1.
const number = [ 1, 2, 3 , 4, 5 ];
console.log(number);
const ex_number = [];

for (let i = 4; i >= 0; i--) {
    ex_number.push(number[i]);
}
console.log(ex_number);

//Tapsiriq 2.
const strArray = ["cat","mouse","panter","chicken"];
console.log(strArray);

strArray.shift();
strArray.push("bird");
console.log(strArray);


//Tapsiriq 3.
const array= [ 1, 2, 3, 4, 5];
console.log(array);

for(let i = 0; i < 5; i++){
    array.push(array[i]**2); 
}
console.log(array);


//Tapsiriq 4.
const string = [1, 2, 3, 4, 5, 6, 7, 8];
const item = []
console.log(string);

for (let i = 0; i < 8; i++) {
    if(string[i] % 2 == 0){
        item.push(string[i]);
    }
}
console.log(item);