const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/*
    Challenge: Display the numbers using the below format
    EVEN NUMBERS: 
    2
    4
    6
    8
    10
    ODD NUMBERS: 
    1
    3
    5
    7
    9
*/

const evenNumbers = [];
const oddNumbers = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNumbers.push(arr[i]);
    } else {
      oddNumbers.push(arr[i]);
    }
  }

  console.log("EVEN NUMBERS: ");
for (let i = 0; i < evenNumbers.length; i++) {
  console.log(evenNumbers[i]);
}

console.log("ODD NUMBERS: ");
for (let i = 0; i < oddNumbers.length; i++) {
  console.log(oddNumbers[i]);
}