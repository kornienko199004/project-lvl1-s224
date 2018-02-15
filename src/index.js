import readlineSync from 'readline-sync';
import { key, value } from './modules/commonFunc';

export const showWelcomeMessage = (str = '') => {
  console.log('Welcome to the Brain Games!');
  if (str !== '') console.log(str);
  const userName = readlineSync.question('May I have you name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const numbersOfQuestions = 3;

const showLossMessage = (message, userName) => {
  console.log(message);
  console.log(`Let's try again, ${userName}!`);
};

export default (game, gameDescription) => {
  const userName = showWelcomeMessage(gameDescription);

  const askQuestion = (acc) => {
    if (acc === 3) return acc;

    const gameData = game();

    console.log(`Question: ${key(gameData)}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === value(gameData)) console.log('Correct!');
    if (userAnswer === value(gameData)) return askQuestion(acc + 1);
    return showLossMessage('Wrong answer!', userName);
  };

  const rightAnswers = askQuestion(0);
  if (rightAnswers === numbersOfQuestions) console.log(`Congratulations, ${userName}!`);
};
