// let sedan = {
//   speed: 0,
//   rate: 8,

//   accelerate() {
//     this.speed += this.rate;
//   },
// }


// let coupe = {
//   speed: 0,
//   rate: 12,

//   accelerate() {
//     this.speed += this.rate;
//   },
// }

// function makeCar(rate, brake) {
//   return {
//     speed: 0,
//     rate: rate,
//     accelerate() {
//       this.speed += this.rate;
//     },
//     brake() { (this.speed < brake) ? this.speed = 0 : this.speed -= brake },
//   }
// }


// let sedan = makeCar(8, 6);
// sedan.accelerate();
// sedan.speed;

// sedan.brake();
// sedan.speed;

// sedan.brake();
// sedan.speed;

function makeCountry(name, continent, visited = false) {
  return {
    name,
    continent,
    visited,
    visitCountry() {
      this.visited = true;
    },
    getDescription() {
      let visit = this.visited ? " I have visited " : " I haven't visited ";

      return this.name + ' is located in ' + this.continent + '.' + visit + this.name;
    },
  };
}


let chile = makeCountry('The Republic of Chile', 'South America');
let canada = makeCountry('Canada', 'North America');
let southAfrica = makeCountry('The Republic of South Africa', 'Africa');

console.log(canada.getDescription()); // "Canada is located in North America. I haven't visited Canada."
canada.visitCountry();
console.log(canada.getDescription()); // "Canada is located in North America. I have visited Canada."