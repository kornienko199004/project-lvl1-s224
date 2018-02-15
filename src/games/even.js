import { generateRandomNum, cons } from '../modules/commonFunc';
import flow from '../index';

const quantityOfNumbers = 100;

const evenTest = num => num % 2 === 0;

const evenStatus = num => (evenTest(num) ? 'yes' : 'no');

const even = () => {
  const randomNumber = generateRandomNum(1, quantityOfNumbers);

  return cons(randomNumber, evenStatus(randomNumber));
};

export default () => flow(even, 'Answer "yes" if number even otherwise answer "no"');
