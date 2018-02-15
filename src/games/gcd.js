import { generateRandomNum, gameData, cons, key, value, chooseMessage } from '../modules/commonFunc';
import flow from '../modules/flow';

const getCommonDiv = (num1, num2) => {
  const division = num1 > num2 ? num2 : num1;

  const getCommonDivIter = (div) => {
    if ((num1 % div === 0) && (num2 % div === 0)) return div;
    return getCommonDivIter(div - 1);
  };

  return getCommonDivIter(division);
};

const quantityOfNumbers = 20;
const quantityOfDivisions = 10;

const generateRandomNumbers = () => {
  const division = generateRandomNum(1, quantityOfDivisions);
  const firstNum = division * generateRandomNum(1, quantityOfNumbers);
  const secondNum = division * generateRandomNum(1, quantityOfNumbers);

  return cons(firstNum, secondNum);
};

export const gcd = () => {
  const randomExample = generateRandomNumbers();
  const commonDivision = getCommonDiv(key(randomExample), value(randomExample));

  return gameData(`${key(randomExample)} ${value(randomExample)}`, String(commonDivision), chooseMessage(commonDivision));
};

export default () => flow(gcd, 'Find the greatest common division of given numbers.');

