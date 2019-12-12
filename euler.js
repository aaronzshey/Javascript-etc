//simple fizzbuzz script because I can
let numberArray = [];
let i = 10;
console.log(`let's play fizzbuzz through the number ${i}`);

for (i = 0; i < 11; i++) {
  if (i % 3 === 0) {
    console.log("fizz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(i);
  }
}

//Fibonacci numbers

for (i = 1; i < 11; i++) {
  let previousNumber = i - 1;
  let newNumber = previousNumber + i;
  console.log(newNumber);
}

//Eratosthenes sieve
let primeArray = [];
let notPrimes = [];

function sieve(number) {
  if (
    number % 2 != 0 &&
    number % 3 &&
    number % 5 !== 0 &&
    number % 7 !== 0 &&
    number % 11 !== 0
  ) {
    primeArray.push(number);
  } else {
    notPrimes.push(number);
  }
}

for (i = 0; i < 600851475143; i++) {
  sieve(i);
}

console.log(primeArray);

let thatPrime = 600851475143;
const divisibleNumbers = [];

let number = [2, 4, 5];
const divideFunction = number => {
  if (number % 2 === 0) {
    divisibleNumbers.push(number);
  } else {
    return "nope";
  }
};

number.forEach(divideFunction);
console.log(divisibleNumbers);
