/*
Javascript documentation @
https://developer.mozilla.org/en-US/docs/Web/JavaScript
Remember to end all lines with a semicolon ;
Code from Codecademy lessons
*/

/*
jshint esversion: 6
*/


// Print hello world.  E-Z-P-Z
console.log("Hello world");
// Find the length of something using .length
console.log('Teaching the world how to code'.length);

/*
Math commands
*/

//Random number between [rand] 0-100 rounded to the nearest whole number [floor]
console.log(Math.floor(Math.random() * 100));
//"Returns the smallest integer greater than or equal to a number" [ceil]
console.log(Math.ceil(43.8));
//isInteger : true, false
console.log(Number.isInteger(2017));

/*
Variables: let, constant, and var
*/
var favoriteFood = 'pizza';
var numOfSlices = 8;

console.log(favoriteFood);
console.log(numOfSlices);

// let makes a changeable variable
let changeMe = true;
// changeMe is now changed
changeMe = false;
console.log(changeMe);

//const is a constant.  Makes an unchangeable Variables
const entree = 'Enchiladas';
console.log(entree);
//see, this line has an error!
//entree = 'Tacos';

let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

// Math commands
// Use the mathematical assignments in the space below:

levelUp += 5;
powerLevel -= 100;
multiplyMe *= 11;
quarterMe /= 4;


// These console.log() statements below will help you check the values of the variables.
// You do not need to edit these statements.
console.log('The value of levelUp:', levelUp);
console.log('The value of powerLevel:', powerLevel);
console.log('The value of multiplyMe:', multiplyMe);
console.log('The value of quarterMe:', quarterMe);

// Increments
let gainedDollar = 3;
let lostDollar = 50;

gainedDollar++;
lostDollar--;

// Truthy and falsy statements
let wordCount = 90000;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}

//Empty phrases are falsy
let favoritePhrase = ''
console.log(favoritePhrase);
//Returns `false`

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}
// No need to declare anything for if, else statements.


//Ternary operators:
let isLocked = true
if (isLocked) {
  console.log('You will need a key to open the door.');
} else {
  console.log('You will not need a key to open the door.');
}
//Becomes
isLocked ? console.log('You will need a key to open the door.') :
console.log('You will not need a key to open the door.')
//Where the colon functions as else

//Simple function
function getReminder() {
  console.log('Water the plants.')
}

//call function

getReminder();
//logs the reminder

// arrow functions 1
function sayThanks(name) {
  console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
}
sayThanks('Cole')

//Arrow functions
const plantNeedsWater = function(day) {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};
//Becomes
const plantNeedsWater = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};//Arrays

let myArray = ["Thing", "Object", "Et cetera", "So on"]
//Arrays are zero-indexed - the first object is 0
console.log(myArray[0])
//returns "Thing"

//`for` Loops
for (let counter = 5; counter < 11; counter++)
{
  console.log(counter);
}
/*
Logs
1
2
3
etc...
*/

//Reverse loop:
for (let counter = 3; counter >= 0; counter--){
  console.log(counter);
}
/*Logs
3
2
1
>= is greater than or equal to
*/

// Nested loops
var bobsFollowers = ['Cog', 'Jujube' , 'Bighead', 'Asdfman']
  var tinasFollowers = ['Cog', 'Jujube', 'Grape Flavored Spaceship']
    var mutualFollowers = []
// outer array
for (let i = 0; i < bobsFollowers.length; i++) {
  // inner array
  for (let j = 0; j < tinasFollowers.length; j++)
    if (bobsFollowers[i] === tinasFollowers[j]) {
      //pushing matching items
      mutualFollowers.push(tinasFollowers[j])
    }
  };

  //do...while loop


let cupsOfSugarNeeded = 2
let cupsAdded = 0

do {
  cupsAdded++
} while (cupsAdded < cupsOfSugarNeeded)
console.log(cupsAdded)

// exercise loops
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];
// Write your code below
for (i = 0; i< 4; i++) {
  if (i = 2) {
    break;
  }
    console.log(rapperArray[i]);
  }
console.log("And if you don't know, now you know.")

// other way:
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below
for (let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i]);
  if (rapperArray[i] === 'Notorious B.I.G.'){
    break;
  }
}

console.log("And if you don't know, now you know.");

/* Higher level functions (aka super hard)

const a = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

const addTwo = num => num + 2;

const timeFuncRuntime = funcParameter => {
  let t1 = Date.now();
  funcParameter();
  let t2 = Date.now();
  return t2 - t1;
};

// Write your code below
const time2p2 = timeFuncRuntime(a)

const CheckConsistentOutput = (timeFuncRuntime, a) => {
  let x = timeFuncRuntime(a);
  let y = timeFuncRuntime(a);
 if (x === y) {
   return x;
 } else {
   return 'This function returned inconsistent results';
 	}
 };
CheckConsistentOutput(addTwo)
*/

//real code
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

const addTwo = num => num + 2;

const timeFuncRuntime = funcParameter => {
  let t1 = Date.now();
  funcParameter();
  let t2 = Date.now();
  return t2 - t1;
};

// Write your code below

const time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);

const checkConsistentOutput = (func, val) => {
    let firstTry = func(val);
    let secondTry = func(val);
    if (firstTry === secondTry) {
        return firstTry
    } else {
        return 'This function returned inconsistent results'
    }
};

checkConsistentOutput(addTwo, 10);

let crj = ["Carly", "Rae", "Jepsen"]
for (let i = 0; i < 3; i++){
  console.log(crj[i])
}

// Iterators
//Iterator docs @ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods
//Simple example of iterating using `forEach` syntax
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

function hungry(food) {
  console.log(`I want to eat a ${food}`);
}
fruits.forEach(hungry);
//forEach extracts each part of the array and applies it individually

//Using .map to manipulate each item of an array
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
//Elegant usage of arrow functoins
const secretMessage = animals.map(a => a.slice(0,1))
console.log(secretMessage.join('')); //Join and log

const bigNumbers = [100, 200, 300, 400, 500];

const smallNumbers = bigNumbers.map(a => { return(a / 100)});

//Using .filter()

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
//Sets a rule and calls it on each element of an array.

const longFavoriteWords = favoriteWords.filter(a => {return a.length > 7})
};

//.reduce functions
const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log(`The value of accumulator: ${accumulator}`)
  console.log(`The value of currentValue: ${currentValue}`)
  return accumulator + currentValue
}, 10)
console.log(newSum)
//cycles through an array and then reduces it to a single variable that matches
//the beginning settings

//Object literals
let fasterShip = {
  'Fuel Type' : 'Turbo Fuel', //note the comma
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.', //color and Fuel Type are keys, and Turbo Fuel and silver are values
  countdown() {
    console.log('1,2,3,4,5...')
  },
  'disabled' : false,
  crew: {
   captain: {
     name: 'Sandra',
     degree: 'Computer Engineering',
     badges: ['gold', 'silver','bronze']
            }
        }
  }

//Using dot property to access properties of an object literal
let sightline = fasterShip.color
console.log(sightline)//returns 'silver'

//Using bracket notation to access non-variable keys
console.log(fasterShip['Fuel Type']);

//Editing an object indirectly through mutation
spaceship.color = 'glorious gold' //changes the color key to glorious gold
spaceship.numEngines = 10 //adds a key named numEngines with a value of 10
delete spaceship['Secret Mission'] //removes the key Secret Mission

//Object methods
fasterShip.countdown() //logs 1,2,3, etc

console.log(fasterShip.crew.captain.badges[0]);
//using functions to permanently mutate an object
let remotelyDisable = obj2 => {
  obj2['disabled'] = true
}
remotelyDisable(spaceship) // permanently changes disabled to true.
/* Looping through functions


Skipping to promises for now.  Come back to finish objects, classes, and others.





*/

//My first promise:
const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344
};

// Write your code below:
const myExecutor = (resolve, reject) => {
  if (inventory.sunglasses > 0) {
    resolve("Sunglasses order processed.");
  } else {
    reject ("That item is sold out.");
  }
}

const orderSunglasses = () => new Promise(myExecutor)
let orderPromise = orderSunglasses()
console.log(orderPromise)

//setTimeout to delay functions
const delay = () => {console.log("Carly Rae Jepsen is  awesome");
};
setTimeout(delay, 5000) //delays 5 seconds
