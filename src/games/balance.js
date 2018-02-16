import { generateRandomNum, cons, key, value } from '../modules/commonFunc';
import flow from '../index';

const minQuantityNumbers = 3;
const maxQuantityNumbers = 4;

const minNumber = 1;
const maxNumber = 9;
let numberLength;

const generator = () => {
  const generatorIter = (acc, str, sum) => {
    if (acc === 0) {
      return cons(str, sum);
    }
    const number = generateRandomNum(minNumber, maxNumber);
    const sumResult = sum + number;
    return generatorIter(acc - 1, `${number}${str}`, sumResult);
  };
  numberLength = generateRandomNum(minQuantityNumbers, maxQuantityNumbers);
  return generatorIter(numberLength, '', 0);
};

const makeBalance = (sum, length) => {
  const division = sum % length;
  const number = (sum - division) / length;
  const balanceIter = (num, lng, div, str) => {
    if (lng === 0) {
      return str;
    }
    if (div > 0) {
      return balanceIter(num, lng - 1, div - 1, `${num + 1}${str}`);
    }
    return balanceIter(num, lng - 1, div, `${num}${str}`);
  };
  return balanceIter(number, length, division, '');
};

const balance = () => {
  const randomExpression = generator();

  return cons(key(randomExpression), String(makeBalance(value(randomExpression), numberLength)));
};

export default () => flow(balance, 'Balance the given number.');
