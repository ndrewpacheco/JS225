let me = {
  firstName: 'Andrew',
  lastName: 'Pacheco',
}

let friend = {
  firstName: 'John',
  lastName: 'Smith',
};

let mother = {
  firstName: 'Amber',
  lastName: 'Doe',
};

let father = {
  firstName: 'Shane',
  lastName: 'Doe',
};


people = {
  collection: [me, friend, mother, father],

  rollCall(collection) {
      this.collection.forEach(this.fullName);
  },

  fullName(person) {
    console.log(person.firstName + ' ' + person.lastName);
  },

  getIndex: function(person) {
    let index = -1;
    this.collection.forEach((comparator, i) => {
      if (comparator.firstName === person.firstName &&
          comparator.lastName === person.lastName) {
        index = i;
      }
    });
    return index;
  },

  isInvalidPerson: function(person) {
    return typeof person.firstName !== 'string' && typeof person.lastName !== 'string';
  }

  add: function(person) {
    if (this.isInvalidPerson(person)) return;

    this.collection.push(person);
  },

  get: function(person) {
    if (this.isInvalidPerson(person)) return;

    return this.collection[this.getIndex(person)];
  },

  remove: function(person) {
    let index;
    if (this.isInvalidPerson(person)) return;

    index = this.getIndex(person);

    if (index === -1) return;

    this.collection.splice(index, 1);
  },

  update: function(person) {
    if (this.isInvalidPerson(person)) return;

    let existingPersonId = this.getIndex(person);
    if (existingPersonId === -1) {
      this.add(person);
    } else {
      this.collection[existingPersonId] = person;
    }
  }
}



console.log(people.getIndex(friend)); // => 1
people.remove(friend);
console.log(people.getIndex(friend)); // => -1