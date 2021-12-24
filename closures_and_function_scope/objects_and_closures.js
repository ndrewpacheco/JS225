function makeList() {
  let items = [];
  return {
    add(todo) {
      items.push(todo);
      console.log(todo + ' added!')
    },

    list() {
      if (items.length === 0) {
        console.log('The list is empty.');
      } else {
        items.forEach(item => console.log(item));
      }
    },
    remove(todo) {
      let index = items.indexOf(todo);
      items.splice(index, 1);
      console.log(todo + ' removed!');
    },
  };
}

let list = makeList();
list.list();
list.add('peas');
// peas added!
list.list();
// peas
list.add('corn');
// corn added!
list.list();
// peas
// corn
list.remove('peas');
// peas removed!
list.list();
// corn
console.log(list.items);

