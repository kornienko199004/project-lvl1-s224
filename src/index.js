import readlineSync from 'readline-sync';

export default (str = '') => {
  console.log('Welcome to the Brain Games!');
  if (!str === '') console.log(str);
  const userName = readlineSync.question('May I have you name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

