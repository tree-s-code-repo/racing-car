class RoundValidator {
  constructor(palyRound) {
    this.start(palyRound);
  }

  start(palyRound) {
    if (typeof palyRound !== 'number') {
      throw new Error('[ERROR] playRound은 숫자여야 합니다.');
    }
    if (!Number.isInteger(palyRound)) {
      throw new Error('[ERROR] 정수를 입력해주세요.');
    }
    if (palyRound <= 0) {
      throw new Error('[ERROR] 1이상의 정수를 입력해주세요.');
    }
  }
}
export default RoundValidator;
