//Q 3.write a class to calculate the Uber price.
// Ans:

class UberPriceCalculator {
    constructor(baseFare, distanceRate, timeRate) {
      this.baseFare = baseFare;
      this.distanceRate = distanceRate;
      this.timeRate = timeRate;
    }
  
    calculatePrice(distance, time) {
      return this.baseFare + (this.distanceRate * distance) + (this.timeRate * time);
    }
  }
  
  
  var uberPriceCalculator = new UberPriceCalculator(10, 2, 1);
  var price = uberPriceCalculator.calculatePrice(10, 15);
  console.log(price);
  