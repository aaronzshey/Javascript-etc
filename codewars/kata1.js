//very very first kata lol
const multiply = (a, b) => {
  return a * b;
};

//first kata
//https://www.codewars.com/kata/546f922b54af40e1e90001da
//https://stackoverflow.com/questions/26533977/tolowercase-in-javascript-not-a-function
//Note that this code only accepts strings as input
let testInput = "Vandesm14 helped me with this yay";
let alphabetArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
let newInput = [];
alphabetPosition = input => {
  //Put lowercase and split code here with array called lowercase
  let lowercaseArray = input.toLowerCase().split("");

  for (i = 0; i < lowercaseArray.length; i++) {
    let integer = parseInt(array[i], 10);
    if (integer) {
      return ;
    }
  }

  for (i = 0; i < lowercaseArray.length + 1; i++) {
    if (typeof lowercaseArray[i] !== "string") {
      return;
    } else {
      return alphabetArray.indexOf(lowercaseArray[i]);
    }
  }
};
console.log(alphabetPosition(alphabetArray));
