const readline = require('readline');
const data  = require('./data');

const todos = data.todos;


const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const menu = `
Your options are:

1. Add a todo.
2. Remove a todo.
3. Remove all completed todos.
4. Toggle a todo's completion status.
5. Toggle a todo's priority.
6. Quit.

`;

const add = (todo) => {
  todos.push({
    text:todo,
    isComplete: false,
    priority: 2
  })
  printTodos();
  interface.question(menu, handleMenu);
}
const handleMenu = function(cmd) {
  if (cmd === '6') {
    console.log('Quitting!')
    interface.close();
  } else if (cmd === '5') {
    console.clear();
    console.log("This feature is under construction, check back later!");
    console.log('Type 6 to quit');
    interface.question(menu, handleMenu);
  }else if (cmd === '4') {
    console.clear();
    console.log("This feature is under construction, check back later!");
    console.log('Type 6 to quit');
    interface.question(menu, handleMenu);
  }else if (cmd === '3') {
    console.clear();
    console.log("This feature is under construction, check back later!");
    console.log('Type 6 to quit');
    interface.question(menu, handleMenu);
  }else if (cmd === '2') {
    console.clear();
    console.log("This feature is under construction, check back later!");
    console.log('Type 6 to quit');
    interface.question(menu, handleMenu);
  } else if (cmd === '1') {
    console.clear();
    console.log("What should go on your todo list?\n", add);
    interface.question(menu, handleMenu);
  }
};
const printTodos = () => {
  console.log("Here are your todos:")
  for (const todo of todos) {
    console.log(todo.text);
  }
};

console.clear();
printTodos();
interface.question(menu, handleMenu);
