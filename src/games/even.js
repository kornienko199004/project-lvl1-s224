import readlineSync from 'readline-sync';

const quantityOfNumbers = 100;

const evenTest = (num) => num % 2 === 0;
const generateRandomNum = () => Math.round(Math.random() * quantityOfNumbers) + 1;

const correctAnswer = (num, answer) => (answer === 'yes' && evenTest(num)) || (answer === 'no' && !evenTest(num)); 

export default () => {

  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no"');
  const userName = readlineSync.question('May I have you name? ');
  console.log(`Hello, ${userName}!`);
  
  const askQuestion = (acc) => {
    if (acc === 3) return acc;
    
    const randomNumber = generateRandomNum();
    console.log(`Question: ${randomNumber}`);    
    const userAnswer = readlineSync.question('Your answer: ');
    if (!correctAnswer(randomNumber, userAnswer)) {
      let message;

      switch (userAnswer) {
        case 'yes': 
          message = '"yes" is wrong answer ;(. Correct answer was "no".';
          break;
        case 'no': 
          message = '"no" is wrong answer ;(. Correct answer was "yes".';
          break;
        default: 
          message = 'Wrong answer.';
          break;
      }

      console.log(message);
      console.log(`Let's try again, ${userName}!`);
      return acc;
    }
    console.log('Correct!');
    return askQuestion(++acc);
  };
  const accum = askQuestion(0);
  accum === 3 ? console.log(`Congratulations, ${userName}!`) : '';
    
};