import readlineSync from 'readline-sync';
import showWelcomeMessage from '../index';
import { answer, question, gameMessage } from '../modules/commonFunc';

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

    console.log(`Question: ${question(gameData)}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer(gameData)) console.log('Correct!');
    if (userAnswer === answer(gameData)) return askQuestion(acc + 1);
    return showLossMessage(gameMessage(gameData)(userAnswer), userName);
  };

  const rightAnswers = askQuestion(0);
  if (rightAnswers === numbersOfQuestions) console.log(`Congratulations, ${userName}!`);
};
