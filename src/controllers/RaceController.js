import { Random, Console } from '@woowacourse/mission-utils';
import InputView from '../views/InputView.js';
import CarNameValidator from '../validator/CarNameValidator.js';

class RaceController {
  constructor() {}

  async start() {
    await this.promptCarNames();
  }

  async promptCarNames() {
    const PropmtedcarNames = await InputView.readCars();
    const carNames = PropmtedcarNames.split(',').map(carName => carName.trim());
    new CarNameValidator(carNames);
  }
}

export default RaceController;
