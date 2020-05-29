class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  set isCheckedOut(checkedOut) {
    return (this._isCheckedOut = checkedOut);
  }

  toggleCheckOutStatus() {
    return (this._isCheckedOut = !this._isCheckedOut);
  }

  getAverageRating() {
    let ratingSum = this._ratings.reduce(function (a, b) {
      return a + b;
    }, 0);
    // console.log(ratingSum)
    const length = this._ratings.length;
    return (ratingSum / length).toFixed(2);
  }

  addRating(rating) {
    return this._ratings.push(rating);
  }
}

class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }

  set pages(pageNumber) {
    return (this._pages += pageNumber);
  }
}

class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this.runTime;
  }
}

// Book instance
const smithWillow = new Book("Smith", "Willow in the mist", 300);

smithWillow.toggleCheckOutStatus();
smithWillow.addRating(4);
smithWillow.addRating(5);
smithWillow.addRating(5);

console.log(smithWillow.isCheckedOut);
console.log(smithWillow.getAverageRating());

// Movie instance
const speed = new Movie("Jan de Bont", "Speed", 116);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
speed.toggleCheckOutStatus();

console.log(speed.isCheckedOut);
console.log(speed.getAverageRating());
