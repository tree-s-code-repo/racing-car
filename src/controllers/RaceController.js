import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import CarNameValidator from '../validator/CarNameValidator.js';
import Car from '../models/Car.js';
import RaceManager from '../models/RaceManager.js';

class RaceController {
  async start() {
    const carNames = await this.#promptCarNames();
    const carModels = this.#createCarModels(carNames);
    const playRound = await this.#propmtPlayRound();
    const raceManager = new RaceManager(carModels);

    this.#printRaceResult(raceManager, playRound);
    this.#printWinnerResult(raceManager.calculateWinner());
  }

  async #promptCarNames() {
    const PropmtedcarNames = await InputView.readCars();
    const carNames = PropmtedcarNames.split(',').map(carName => carName.trim());
    new CarNameValidator(carNames);

    return carNames;
  }

  #createCarModels(carNames) {
    const cars = carNames.map(carName => new Car(carName));
    return cars;
  }

  async #propmtPlayRound() {
    const playRound = await InputView.readPlayRound();
    return playRound;
  }

  #printRaceResult(raceManager, playRound) {
    OutputView.printMessage('실행결과 : ');

    for (let index = 0; index < Number(playRound); index++) {
      this.startRace(raceManager);
    }
  }

  startRace(raceManager) {
    raceManager.race();
    const raceStatus = raceManager.status();
    this.printGameStatus(raceStatus);

    OutputView.printMessage('\n');
  }

  #printWinnerResult(winner) {
    OutputView.printMessage(`최종 우승자 : ${winner.join()}`);
  }

  printGameStatus(raceStatus) {
    raceStatus.forEach(({ name, position }) => {
      const distance = this.createHyphenString(position);
      OutputView.printMessage(`${name} : ${distance}`);
    });
  }

  createHyphenString(number) {
    return '-'.repeat(number);
  }
}

export default RaceController;
