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
  constructor(director, title, runTime, movieCast) {
    super(title);
    this._director = director;
    this._runTime = runTime;
    this._movieCast = movieCast;
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this.runTime;
  }

  get movieCast() {
    return this._movieCast;
  }

  addMovieCast(newMovieCast) {
    return this._movieCast.push(newMovieCast);
  }
}

// CD class parent class Media
class CD extends Media {
  constructor(artist, title, songs) {
    super(title);
    this._artist = artist;
    this._songs = songs;
  }

  get artist() {
    return this._artist;
  }

  get songs() {
    return this._songs;
  }

  addSongs(newSong) {
    console.log(newSong);
    return this._songs.push(newSong);
  }

  shuffle() {
    let shuffled = [];
    let counter = this._songs.length;

    for (let i = 0; i < counter; i++) {
      let length = this._songs.length;
      let randomNumber = Math.floor(Math.random() * counter);
      let song = this._songs[randomNumber];
      if (!shuffled.includes(song)) {
        if (shuffled.length < length) {
          shuffled.push(this._songs[randomNumber]);
        }
        //  shuffled;
      }
      shuffled;
    }
    return shuffled;
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
const speed = new Movie("Jan de Bont", "Speed", 116, [
  "Keanu Reeves",
  "Sandra Bullock",
  "Joe Morton",
]);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
speed.addMovieCast("Beth Grant");

speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);

console.log(speed.getAverageRating());
console.log(speed.movieCast);

// songTitles, title
let nenahSsongs = [
  "Fade Away",
  "Radial Drill",
  "State Assembly",
  "Crazy Dreams and High Ideals",
  "Abderhamane's Demise",
  "Animal Space",
  "Love Forever",
  "Private Armies",
];

const nenahCherry = new CD("Nenah Cherry", "Crazy", nenahSsongs);
nenahCherry.addSongs("Added a New song");

console.log(nenahCherry.title);
console.log(nenahCherry.shuffle());
// console.log(nenahCherry.songs)
