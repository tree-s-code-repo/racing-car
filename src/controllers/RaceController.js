import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import CarNameValidator from '../validator/CarNameValidator.js';
import Car from '../models/Car.js';
import RaceManager from '../models/RaceManager.js';

class RaceController {
  constructor() {}

  async start() {
    const cars = await this.promptCarNames();
    const playRound = await this.propmtPlayRound();
    const raceManager = new RaceManager(cars);

    this.printRaceResult(raceManager, playRound);
    const winner = raceManager.calculateResult();
    this.printWinnerResult(winner);
  }

  async promptCarNames() {
    const PropmtedcarNames = await InputView.readCars();
    const carNames = PropmtedcarNames.split(',').map(carName => carName.trim());
    new CarNameValidator(carNames);

    return this.setRaceCar(carNames);
  }

  setRaceCar(carNames) {
    const cars = [];

    carNames.forEach(carName => {
      cars.push(new Car(carName));
    });

    return cars;
  }

  async propmtPlayRound() {
    const playRound = await InputView.readPlayRound();
    return playRound;
  }

  printRaceResult(raceManager, playRound) {
    OutputView.printMessage('실행결과 : ');

    for (let index = 0; index < Number(playRound); index++) {
      raceManager.race();
      const raceStatus = raceManager.status();

      this.printStatus(raceStatus);
      OutputView.printMessage('\n');
    }
  }

  printWinnerResult(winner) {
    OutputView.printMessage(`최종 우승자 : ${winner.join()}`);
  }

  printStatus(raceStatus) {
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
