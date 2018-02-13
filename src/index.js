import readlineSync from 'readline-sync';

export default () => {
  const userName = readlineSync.question('May I have you name? ');
  console.log(`Hello, ${userName}!`);
};

