class CarNameValidator {
  #carNames;

  constructor(carNames) {
    this.#carNames = carNames;
    this.#start();
  }

  #start() {
    this.#validateLength();
    this.#validtaeCarNames();
    this.#validateDuplicates();
  }

  #validateLength() {
    if (!this.#carNames.length) {
      throw new Error('[ERROR] 자동차 이름을 비워둘수 없습니다.');
    }
  }

  #validtaeCarNames() {
    this.#carNames.forEach(carName => {
      if (!carName) {
        throw new Error('[ERROR] 자동차 이름을 입력해주세요.');
      }

      if (carName.length > 5) {
        throw new Error('[ERROR] 자동차 이름은 5글자를 넘길 수 없습니다.');
      }
    });
  }

  #validateDuplicates() {
    if (new Set(this.#carNames).size !== this.#carNames.length) {
      throw new Error('[ERROR] 자동차 이름은 중복을 입력할 수 없습니다.');
    }
  }
}

export default CarNameValidator;
