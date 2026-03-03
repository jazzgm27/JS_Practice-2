
let numbers = [];

let i = 1;

while (i <= 20) {
    numbers.push(i);  
    i++;              
}


for (let j = 0; j < numbers.length; j++){
    if (numbers[j] % 2 === 0) {
        continue;
    }
   if (numbers[j] === 10) {
        break;
    }
    console.log(numbers[j]);
}