const person = {
  firstName: "Mosh",
  lastName: "Hamedani",
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    const part = value.split(" ");
    this.firstName = part[0];
    this.lastName = part[1];
  }
};

person.fullName = "John Smith";
console.log(person);
