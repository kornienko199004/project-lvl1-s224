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
