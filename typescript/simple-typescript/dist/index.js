"use strict";
class Robot {
    constructor(name) {
        this.name = name;
    }
    askName() {
        console.log(`My name is ${this.name}`);
    }
    move(distance) {
        console.log(`${this.name} moved ${distance} meters`);
    }
}
class FlyingRobot extends Robot {
    constructor(name) {
        super(name);
    }
}
const robot = new Robot("John");
robot.askName();
