class Spaceship {

  constructor(name) {
    this.name = name;
    this.crew = [];
    this.propulsion = null;
  }

  loadCrew(array) {
    array.forEach((element) => {
      this.crew.push(element);
      console.log(`${element.name} has been added to the crew`);
    });
  }

  captain(crew) {
    let number = (this.crew.length - 1);
    let randomNumber = Math.floor(Math.random() * number);
    return (this.crew[randomNumber]).name;
  }

  mountPropulsion(rocketObj) {
    this.propulsion = rocketObj;
    console.log('Propulsion is mounted');
  }

  takeOff() {
    if (!this.propulsion) {
      console.log('Please load a rocket');
    } else if (this.propulsion.fuel === 0) {
      console.log('Please fuel the rocket');
    } else {
      console.log("SHHURUURUHUUHOOOOO! (*lift off*)");
    }
  }

  countDown(delay) {
    function doSetTimeout(i) {
      setTimeout(function() { console.log(`${i}`); }, 1000);
    }
    if (delay != 0) {
      for (let i = delay ; i > 0; --i) {
        doSetTimeout(i)
      }
    }
  this.takeOff();
  }
}

    //can't do the setTimeout with a for loop

module.exports = Spaceship;
