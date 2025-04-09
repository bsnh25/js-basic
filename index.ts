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
