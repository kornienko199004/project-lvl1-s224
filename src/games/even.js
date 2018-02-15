import { generateRandomNum, gameData } from '../modules/commonFunc';
import flow from '../modules/flow';

const quantityOfNumbers = 100;

const evenTest = num => num % 2 === 0;

const evenStatus = num => (evenTest(num) ? 'yes' : 'no');

const gameMessage = (userAnswer) => {
  switch (userAnswer) {
    case 'yes':
      return '"yes" is wrong answer ;(. Correct answer was "no".';
    case 'no':
      return '"no" is wrong answer ;(. Correct answer was "yes".';
    default:
      return 'Wrong answer.';
  }
};

const even = () => {
  const randomNumber = generateRandomNum(1, quantityOfNumbers);

  return gameData(randomNumber, evenStatus(randomNumber), gameMessage);
};

export default () => flow(even, 'Answer "yes" if number even otherwise answer "no"');
