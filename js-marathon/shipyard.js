// YOUR CODE GOES HERE
var Spaceship = require('./Spaceship');
var Crewmember = require('./Crewmember.js');
var rocket = require('./Rocket.js');

let ourShip = new Spaceship('Enterprise');
let crewNames = ['Jake', 'Shane', 'Chris', 'Adam', 'Reece'];
let countDown = 10;

let launchpad = (ship, crew, rocket, countDown) => {
  ourShip.loadCrew(crew);
  console.log('Command Center, prepare for launch!');
  console.log(`Spaceship ${ship.name} is prepped for takeoff!`);
  console.log(`Our Captain Today is ${ourShip.captain()}`);
  ourShip.mountPropulsion(rocket);
  ourShip.propulsion.addFuel(8);
  ourShip.countDown(countDown);
};

let trainCrew = (array) => {
  let trainedCrew = [];
  for(i=0; i < array.length ; i++) {
    trainedCrew.push(new Crewmember(array[i], true));
  }
   return trainedCrew;
};

trainedCrew = trainCrew(crewNames);
launchpad(ourShip, trainedCrew, rocket, countDown);
