class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  get name() {
    return this._name;
  }

  get level() {
    return this._level;
  }

  get numberOfStudents() {
    return this._numberOfStudents;
  }

  quickFacts() {
    console.log(
      `${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`
    );
  }

  static pickSubstituteTeacher(substituteTeachers) {
    let length = substituteTeachers.length - 1;
    let randomNumber = Math.floor(Math.random() * length);
    if (randomNumber < 0) {
      return (randomNumber = 0);
    } else if (randomNumber > length) {
      return (randomNumber = length);
    }
    return substituteTeachers[randomNumber];
  }

  set numberOfStudents(newNumberOfStudents) {
    if (typeof newNumberOfStudents !== "number") {
      return console.log(
        "Invalid input: " + newNumberOfStudents + " must be set to be Number"
      );
    } else {
      return (this._numberOfStudents += newNumberOfStudents);
    }
  }
}

class PrimarySchool extends School {
  constructor(name, level, numberOfStudents, pickupPolicy) {
    super(name, level, numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy() {
    return this._pickupPolicy;
  }

  schoolPolicy(newPolicy) {
    if (typeof newPolicy === "String") {
      return (this._pickupPolicy += newPolicy);
    } else {
      return console.log(`${newPolicy} can not be empty`);
    }
  }
}

class HighSchool extends School {
  constructor(name, level, numberOfStudents, sportsTeams) {
    super(name, level, numberOfStudents);
    this._sportsTeams = sportsTeams;
  }

  get sportsTeams() {
    return console.log(this._sportsTeams);
  }
}

const lorraineHansbury = new PrimarySchool("Lorriane Hansbury", "primary", 514);

lorraineHansbury.schoolPolicy =
  "Students must be picked up by a parent, guardian, or a family member over the age of 13.";
const substitutes = [
  "Jamal Crawford",
  "Lou Williams",
  "J. R. Smith",
  "James Harden",
  "Jason Terry",
  "Manu Ginobli",
];
lorraineHansbury.quickFacts();
School.pickSubstituteTeacher(substitutes);

const alSmith = new HighSchool("Al E. Smith", "High", 415, [
  "Baseball",
  "Basketball",
  "Volleyball",
  "Track and Field",
]);

alSmith.sportsTeams;
