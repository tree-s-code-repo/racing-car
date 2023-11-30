import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async readCars() {
    const input = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
    );
    return input;
  },
};

export default InputView;
