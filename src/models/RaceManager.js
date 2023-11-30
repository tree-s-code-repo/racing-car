class RaceManager {
  #cars;

  constructor(cars) {
    this.#cars = cars;
  }

  race() {
    this.#cars.forEach(car => {
      car.move();
    });
  }

  status() {
    const status = this.#cars.map(car => {
      const name = car.getName();
      const position = car.getPosition();
      return { name, position };
    });

    return status;
  }

  findLongestPosition() {
    const positions = this.#cars.map(car => car.getPosition());
    return Math.max(...positions, 0);
  }

  calculateResult() {
    const winner = [];
    const longestPosition = this.findLongestPosition();

    this.#cars.forEach(car => {
      if (car.getPosition() === longestPosition) {
        winner.push(car.getName());
      }
    });

    return winner;
  }
}

export default RaceManager;
