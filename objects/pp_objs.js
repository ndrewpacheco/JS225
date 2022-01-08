function makeCountry(name, continent, visited = false) {

  return {
    name,
    continent,
    visited,
    visitCountry() {
      this.visited = true;
    },
    getDescription() {
      let visitedCountry = this.visited ? '. I have visited ' + this.name : ". I haven't visited " + this.name; 
      return this.name + ' is located in ' + this.continent + visitedCountry + '.' ;

    },
  };
}

let chile = makeCountry('The Republic of Chile', 'South America');
let canada = makeCountry('Canada', 'North America');
let southAfrica = makeCountry('The Republic of South Africa', 'Africa');

console.log(canada.getDescription()); // "Canada is located in North America. I haven't visited Canada."
canada.visitCountry();
console.log(canada.getDescription()); // "Canada is located in North America. I have visited Canada."