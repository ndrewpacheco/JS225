function makeList() {
  let todoList = [];

  return function(todo) {
    if (todo) {
      if (todoList.includes(todo)) {
        let i = todoList.indexOf(todo);
        todoList.splice(i, 1);
        console.log(todo + ' removed!')
      } else {
        todoList.push(todo);
        console.log(todo + ' added!')

      }
    } else {
      if (todoList.length === 0) {
        console.log('The list is empty');
      } else {
        todoList.forEach(entry => console.log(entry));

      }
    }
  }
}

/*
When called with an argument that is not already on the list, it adds that argument to the list.

When called with an argument that is already on the list, it removes the element from the list.

When called without arguments, it logs all items on the list. If the list is empty,
it logs an appropriate message.
*/
let list = makeList();
list();
// The list is empty.
list('make breakfast');
// make breakfast added!
list('read book');
// read book added!
list();
// make breakfast
// read book
list('make breakfast');
// make breakfast removed!
list();
// read book