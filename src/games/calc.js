import { generateRandomNum, gameData, cons, key, value } from '../modules/commonFunc';
import flow from '../modules/flow';

const quantityOfNumbers = 20;
const quantityOfSigns = 3;

const returnSign = (numSign) => {
  switch (numSign) {
    case 1:
      return '+';
    case 2:
      return '-';
    case 3:
      return '*';
    default:
      break;
  }
  return '';
};

const returnValue = (numSign, a, b) => {
  switch (numSign) {
    case 1:
      return a + b;
    case 2:
      return a - b;
    case 3:
      return a * b;
    default:
      break;
  }
  return '';
};

const generateRandomExample = () => {
  const a = generateRandomNum(1, quantityOfNumbers);
  const b = generateRandomNum(1, quantityOfNumbers);
  const i = generateRandomNum(1, quantityOfSigns);
  const sign = returnSign(i);
  return cons(`${a} ${sign} ${b}`, (returnValue(i, a, b)));
};

const calc = () => {
  const randomExample = generateRandomExample();

  const gameMessage = (userAnswer) => userAnswer === String(value(randomExample)) ? 'Correct!' : 'Wrong answer.';

  return gameData(key(randomExample), String(value(randomExample)), gameMessage);
};

export default () => flow(calc, 'What is the result of the expression?');

