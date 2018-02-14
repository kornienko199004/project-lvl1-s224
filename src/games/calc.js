import readlineSync from 'readline-sync';
import { generateRandomNum, cons, key, value } from '../modules/commonFunc';

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

export default () => {
  const randomExample = generateRandomExample();

  console.log(`Question: ${key(randomExample)}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return Number(userAnswer) === value(randomExample) ? 'Correct!' : 'Wrong answer.';
};
