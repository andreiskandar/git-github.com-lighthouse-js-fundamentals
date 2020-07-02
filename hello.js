// const sayHello  = function (name) {
//   console.log("Hello, " + name);
// }

// sayHello('Andre');
// sayHello('David');
// sayHello('Any');
// sayHello('Michelle');

const returnSayHello = (name) => {
  return "Hello, " + name;
}

const greeting = returnSayHello('David');
console.log(greeting);