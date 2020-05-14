const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  // Getter courses
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },
  // Getter appetizers
  get appetizers() {
    if (this._courses.appetizers !== null) {
      return this._courses.appetizers;
    } else {
      return "No appetizer in the menu";
    }
  },
  // Setter appetizers
  set appetizers(appetizer) {
    if (typeof appetizer === "string" && Object.entries(appetizer) !== null) {
      return this.appetizers.push(appetizer);
    } else {
      return "You must enter a valid appetizer";
    }
  },
  // mains getter
  get mains() {
    if (this._courses.mains !== null) {
      return this._courses.mains;
    } else {
      return "No main course in the menu";
    }
  },
  // Setter mains
  set mains(main) {
    if (typeof main === "string" && Object.entries(main) !== null) {
      return this.mains.push(main);
    } else {
      return "You must enter a valid main";
    }
  },
  // Getter desserts
  get desserts() {
    if (this._courses.desserts !== null) {
      return this._courses.desserts;
    } else {
      return "No dessert in the menu";
    }
  },
  // Setter desserts
  set desserts(dessert) {
    if (typeof dessert === "string") {
      return this.desserts.push(dessert);
    } else {
      return "You must enter a valid dessert";
    }
  },
  // Adds dish to Courses
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    return this.courses[courseName].push(dish);
    // return this._courses[courseName] = dish;
  },
  // Random course getter
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    // console.log(this._courses[courseName])
    console.log(dishes.length);
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  // Random Meal generator
  generateRandomMeal: function () {
    const appetizer = this.getRandomDishFromCourse("appetizers");
    const mains = this.getRandomDishFromCourse("main");
    const desserts = this.getRandomDishFromCourse("dessert");
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}: The price is $${totalPrice}.`;
  },
};
// menu._courses.appetizers = 'banana'

// console.log(dessertMenu)

menu.addDishToCourse("appetizers", "soup", 3.5);
menu.addDishToCourse("mains", "stake", 10);
menu.addDishToCourse("desserts", "apple crumble", 5.2);
menu.addDishToCourse("appetizers", "salad", 8);
menu.addDishToCourse("appetizers", "onion rings", 11);
menu.addDishToCourse("appetizers", "shrimp", 13);
menu.addDishToCourse("mains", "chicken", 18);
menu.addDishToCourse("mains", "beef", 16);
menu.addDishToCourse("mains", "chili", 14);
menu.addDishToCourse("desserts", "fudge brownie", 7);
menu.addDishToCourse("desserts", "dolce de leche", 5);
menu.addDishToCourse("desserts", "cake shake", 4);
// menu._courses['appetizers'].push('cake');
// const meal = menu.generateRandomMeal
const newMenu = menu;

// console.log(menu.mains)
// console.log(newMenu.appetizers)

let meal = menu.generateRandomMeal();
console.log(meal);
