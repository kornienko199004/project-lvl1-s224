import { generateRandomNum, cons } from '../modules/commonFunc';
import flow from '../index';

const quantityOfNumbers = 100;

const primeTest = (number) => {
  const primeTestIter = (num, acc) => {
    if ((num % acc === 0) && acc !== 1 && acc !== num) {
      return false;
    }
    if (acc === num) {
      return true;
    }
    return primeTestIter(num, acc + 1);
  };
  return primeTestIter(number, 1);
};

const primeStatus = num => (primeTest(num) ? 'yes' : 'no');

const prime = () => {
  const randomNumber = generateRandomNum(1, quantityOfNumbers);

  return cons(randomNumber, primeStatus(randomNumber));
};

export default () => flow(prime, 'Is this number prime?');
