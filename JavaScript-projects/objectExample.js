const robot = {
  model: "B-4MI",
  mobile: true,
  greetMaster() {
    console.log(`I'm model ${this.model}, how may I be of service?`);
  },
};

const massProdRobot = (model, mobile) => {
  return {
    model,
    mobile,
    greetMaster() {
      console.log(`I'm model ${this.model}, how may I be of service?`);
    },
  };
};

const shinyNewRobot = massProdRobot("TrayHax", true);

const chargingStation = {
  _name: "Electrons-R-Us",
  _robotCapacity: 120,
  _active: true,
  _chargingRooms: ["Low N Slow", "Middle of the Road", "In and Output"],

  set robotCapacity(newCapacity) {
    if (typeof newCapacity === "number") {
      this._robotCapacity = newCapacity;
    } else {
      console.log(`Change ${newCapacity} to a number.`);
    }
  },
  get robotCapacity() {
    return this._robotCapacity;
  },
};

// Object Getters
const robot = {
  _model: "1E78V2",
  _energyLevel: 100,
  get energyLevel() {
    if (typeof this._energyLevel === "number") {
      return `My current energy level is ${this._energyLevel}`;
    } else {
      return "System malfunction: cannot retrieve energy level";
    }
  },
};

robot.energyLevel;

console.log(robot.energyLevel);

// Object Setters
const robot = {
  _model: "1E78V2",
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors() {
    if (typeof this._numOfSensors === "number") {
      return this._numOfSensors;
    } else {
      return "Sensors are currently down.";
    }
  },
  set numOfSensors(num) {
    if (typeof num === "number" && num >= 0) {
      this._numOfSensors = num;
    } else {
      console.log("Pass in a number that is greater than or equal to 0");
    }
  },
};

robot.numOfSensors = 100;

console.log(robot.numOfSensors);
