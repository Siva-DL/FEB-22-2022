var arr = [9012121, "name", 30];

var persons = [
  {
    num: 9012121,
    "First Name": "sname",
    age: 30,
    favColors: ["red", "green", "blue"],
    favMovies: { DC: { heros: ["superman", "batman"], villans: ["joker"] } },
  },
];

console.log(persons["First Name"]); //sname
console.log(persons[0].favMovies.DC.heros[0]);
