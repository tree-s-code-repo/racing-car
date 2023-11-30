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

  #findLongestPosition() {
    const positions = this.#cars.map(car => car.getPosition());
    return Math.max(...positions, 0);
  }

  calculateWinner() {
    const longestPosition = this.#findLongestPosition();

    const winners = this.#cars
      .filter(car => car.getPosition() === longestPosition)
      .map(car => car.getName());

    return winners;
  }
}

export default RaceManager;
