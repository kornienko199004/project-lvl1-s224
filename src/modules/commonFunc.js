export const generateRandomNum = (minNum, maxNum) => {
  const randomNum = Math.round(Math.random() * (maxNum - minNum)) + minNum;
  return randomNum;
};

export const cons = (a, b) => (message) => {
  switch (message) {
    case 'key':
      return a;
    case 'value':
      return b;
    default:
      break;
  }
  return '';
};

export const key = pair => pair('key');

export const value = pair => pair('value');

export const question = pair => key(key(pair));

export const answer = pair => value(key(pair));

export const gameMessage = pair => value(pair);

export const gameData = (quest, answ, msg) => cons(cons(quest, answ), msg);

export const chooseMessage = rightAnswer => userAnswer => (userAnswer === String(rightAnswer) ? 'Correct!' : 'Wrong answer.');