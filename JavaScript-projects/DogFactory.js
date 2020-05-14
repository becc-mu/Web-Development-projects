// Write your code here:
const dogFactory = (name, breed, weight) => {
  return {
    _name: name,
    get name() {
      return this._name;
    },
    _breed: breed,
    get breed() {
      return this._breed;
    },
    _weight: weight,
    get weight() {
      return this._weight;
    },
    // setters
    set name(nameIn) {
      return (this._name = nameIn);
    },
    set breed(breedIn) {
      return (this._breed = breedIn);
    },
    set weight(weightIn) {
      return (this._weight = weightIn);
    },
    bark() {
      return "ruff! ruff!";
    },
    eatTooManyTreats() {
      return (this.weight += 1);
    },
  };
};
