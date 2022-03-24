// Call Apply and Bind

var obj = {};

obj._name = "test123";

console.log(obj);

// window.movieName = "SomeXYZ";

var movie1 = {
  movieName: "Flash",
  owner: "DC",
};

function getMovieName(year) {
  return this.movieName + " is from " + this.owner + " and relased in " + year;
}

getMovieName.call(movie1);

console.log(getMovieName.call(movie1, 2017));
console.log(getMovieName.apply(movie1, [2017]));

let copyOfMovieNames = getMovieName.bind(movie1, 2017);

console.log(copyOfMovieNames());

// Task :

var person = {
  _name: "somex",
  _age: 30,
  getFullInfo: function () {
    return this._name + " " + this._age;
  },
};

var person1 = {
  _name: "somey",
  _age: 40,
};
