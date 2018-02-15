import { generateRandomNum, cons, key, value } from '../modules/commonFunc';
import flow from '../index';

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
  console.log(commonDivision);

  return cons(`${key(randomExample)} ${value(randomExample)}`, String(commonDivision));
};

export default () => flow(gcd, 'Find the greatest common division of given numbers.');

