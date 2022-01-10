class Robot {
  #name: string;

  constructor(name: string) {
    this.#name = name;
  }
}

class AdvancedRobot extends Robot {
  #name: string;

  getName() {
    return this.#name;
  }
}
