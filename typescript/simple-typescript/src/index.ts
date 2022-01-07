class Robot {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  askName() {
    console.log(`My name is ${this.name}`);
  }

  move(distance: number) {
    console.log(`${this.name} moved ${distance} meters`);
  }
}

class FlyingRobot extends Robot {
  constructor(name: string) {
    super(name);
  }
}

const robot = new Robot("John");

robot.askName();
