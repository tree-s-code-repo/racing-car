import { Random } from '@woowacourse/mission-utils';

class Car {
  #name;

  #position;

  #MINIMUM_MOVE_VALUE = 4;

  constructor(name) {
    this.#name = name;
    this.#position = 0;
  }

  move() {
    const randomNumber = Random.pickNumberInRange(0, 9);
    if (randomNumber >= this.#MINIMUM_MOVE_VALUE) {
      this.#setPosition();
    }
  }

  #setPosition() {
    this.#position += 1;
  }

  getPosition() {
    return this.#position;
  }

  getName() {
    return this.#name;
  }
}
export default Car;
