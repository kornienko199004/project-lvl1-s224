import readlineSync from 'readline-sync';
import { generateRandomNum } from '../modules/commonFunc';

const quantityOfNumbers = 100;

const evenTest = num => num % 2 === 0;

const correctAnswer = (num, answer) => (answer === 'yes' && evenTest(num)) || (answer === 'no' && !evenTest(num));

export default () => {
  const randomNumber = generateRandomNum(1, quantityOfNumbers);

  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (!correctAnswer(randomNumber, userAnswer)) {
    switch (userAnswer) {
      case 'yes':
        return '"yes" is wrong answer ;(. Correct answer was "no".';
      case 'no':
        return '"no" is wrong answer ;(. Correct answer was "yes".';
      default:
        return 'Wrong answer.';
    }
  }
  return 'Correct!';
};
