//Calculate the average of the numbers in an array of numbers
let sum = 0
let arr = [1,1,1,1,1]
let length = arr.length // Find length
//Sum
for (i = 0; i < array.length ; i++) {
  sum += array[i]
}
console.log(sum / length) //Divide by length

// Create a function that receives an array of numbers and returns an array
//containing only the positive numbers
let arr2 = [1, 2, -3, -4, -4, 6, 6, 100]
console.log(arr2)

function positive(value) {
  return value > 0
}

let positives = arr2.filter(positive); //returns positive numbers
let tryitagain = arr2.map(a => {return a > 0 });// returns true and false

for (i = 0; i < positives.length; i++){
  console.log(positives[i])
}

console.log("____")

for (i = 0; i < tryitagain.length; i++){
  console.log(tryitagain[i])
}

//Find the maximum number in an array of numbers
  let arr3 = [1,2,3,4,5,6,7,8,9,10]
  function maximum(value){
    return math.max(value)
  }

  for (i = 0; i < arr3.length; i ++){
    function maximum(value){
      return Math.max(...i)
    }
  }

console.log(Math.max(...array1));

//Coding challenge #14: Print the first 10 Fibonacci numbers without recursion
// 0,1,2,3,5,8,13,21,34

for (i = 0; i < 11; i++){
  console.log(i)
}
// logs one through ten
for (i = 0; i < 11; i++){
  console.log(i)
}
