/*
class Robot {
  #name: string;

  private somePrivateField = "It is private!!!";

  constructor(name: string) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }
}

class AdvancedRobot extends Robot {
  #name: string;

  private somePrivateField = "OVERRIDDEN PRIVATE FIELD";

  constructor(name: string) {
    super(name);
    this.#name = `Advanced ${name}`;
  }

  getAdvancedRobotName() {
    return this.#name;
  }
}

const robot = new AdvancedRobot("Jackie");

console.log("private", robot.somePrivateField);

console.log("parent name", robot.getName());
console.log("subclass name", robot.getAdvancedRobotName());

*/
