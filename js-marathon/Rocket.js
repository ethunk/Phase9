let rocket = {
  fuel: 0,
  addFuel(fuelAmount) {
      this.fuel += fuelAmount;
      console.log(`Fuel added. We have ${this.fuel} gallons in our tank.`);
    }
  // fire () {
  //   if (this.fuel === 0) {
  //     console.log('Launch failure. No fuel. Please add fuel and rebegin final launch sequence.');
  //     return false;
  //   } else {
  //     this.fuel -= 1;
  //     console.log(`Successful launch. All rockets are go with ${this.fuel} gallons left in the tank.`);
  //     return true;
  //   }
  // }
};
module.exports = rocket;
