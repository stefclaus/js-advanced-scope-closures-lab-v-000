function produceDrivingRange( range ){
  return function( stringOne, stringTwo ) {
    var removeThOne = stringOne.slice(0, -2);
    var removeThTwo = stringTwo.slice(0, -2);

    var numberOne = Number(removeThOne);
    var numberTwo = Number(removeThTwo);

    var blocksTravelled = numberTwo - numberOne
    var absDifference = Math.abs(blocksTravelled - range)

    if (blocksTravelled > range) {
      return `${absDifference} blocks out of range`
    } else {
      return `within range by ${absDifference}`
    }
  }
}


// Calculates whether a given trip is within range. For example,
//produceDrivingRange(10) returns a function that will take two strings as
//arguments and returns a message stating whether the trip is in range. If foo =
// produceDrivingRange(10), then foo('12th', '15th') would return "within range by
// 7" and foo('12th', '30th') would return "8 blocks out of range". We recommend
//referencing the test/indexTest.js for more details.


function produceTipCalculator( tipPercentage ){
  return function( tipAmount ) {
    return tipAmount * tipPercentage;
  }
}


//produceTipCalculator() - Returns a function that then calculates a tip.
//For example, produceTipCalculator(.10) returns a function that calculates
//ten percent tip on a fare. produceTipCalculator(.20) returns a function that
//calculates twenty percent tip on a fare.

function createDriver(){
  let DriverId = 0;

  return class {
    constructor(name) {
      this.name = name;
      this.id = ++DriverId;
    }
  }
}
//createDriver is a function that returns a Driver class. The class has reference
//to a driverId that is incremented each time a new driver is created. The rest
//of the code base does not have access to driverId.
