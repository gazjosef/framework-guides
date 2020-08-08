class User {
  constructor() {
    this.name = name;
    this.age = age;
  }
}

function printName(user) {
  console.log(`User's name is ${user.name}`);
}

function printAge(user) {
  console.log(`User is ${user.age} years old`);
}

const newUser = new User();
newUser.name = "gareth";

console.log(newUser);
