import { generateRandomNum, cons } from '../modules/commonFunc';
import flow from '../index';

const minNumber = 1;
const maxNumber = 10;
const minHiddenPos = 1;
const maxHiddenPos = 10;

const generator = () => {
  const division = generateRandomNum(minNumber, maxNumber);
  const a1 = generateRandomNum(minNumber, maxNumber);
  const hidPosition = generateRandomNum(minHiddenPos, maxHiddenPos);

  const generatorIter = (firstNum, div, acc, str, numHidden, hiddenPos) => {
    if (acc === 11) {
      return cons(str, String(numHidden));
    }
    let hidden;
    let aN = firstNum + (div * (acc - 1));
    if (acc === hiddenPos) {
      hidden = aN;
      aN = '..';
    } else {
      hidden = numHidden;
    }
    return generatorIter(firstNum, div, acc + 1, `${aN} ${str}`, hidden, hiddenPos);
  };

  return generatorIter(a1, division, 1, '', 0, hidPosition);
};

const progression = () => generator();

export default () => flow(progression, 'What number is missing in this progression?');
