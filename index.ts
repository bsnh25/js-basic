const person = {
  name: "Jhon",
  age: 25,
  job: "Developer",
};

console.log(person.name);
console.log(person.job);

person["hobby"] = "Reading";

console.log(person["hobby"]);

person.age = 30;
console.log(person.age);

console.log(person);
delete person.job;
console.log(person);

person["student"] = {
  name: "Alice",
  grade: 90,
  address: {
    city: "Jakarta",
    country: "Indonesia",
  },
};

// console.log(person);

person["greet"] = function () {
  return `Hi, my name is ${this.name}`;
};

console.log(person);

console.log(person.greet());

let fruits = ["Apple", "Banana", "Orange"];

// console.log(fruits.shift());
// console.log(fruits.pop());

fruits.push("Mango");
fruits.unshift("Grape");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.shift();
console.log(fruits);
console.log(fruits.length);
