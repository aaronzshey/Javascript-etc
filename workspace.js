// Chain two iterators together on the same array.  Can you do it?
let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  'disabled' : false
};

// Write your code below
let greenEnergy = obj => {
  obj['Fuel Type'] = 'avocado oil'
}

let remotelyDisable = obj2 => {
  obj2['disabled'] = true
}
greenEnergy(spaceship)
remotelyDisable(spaceship)
console.log(spaceship)

let inventory = {
  coal: 100,
  cobblestone: 100,
  diamond: 50,
  netherrack: 15
}

let amount =
