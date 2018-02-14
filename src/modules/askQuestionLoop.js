const showLossMessage = (message, userName) => {
  console.log(`Let's try again, ${userName}!`);
};

export default (game, userName, numbersOfQuestions) => {
  const askQuestion = (acc) => {
    if (acc === 3) return acc;
    const message = game();
    console.log(message);
    return message === 'Correct!' ? askQuestion(acc + 1) : showLossMessage(message, userName);
  };

  const rightAnswers = askQuestion(0);
  if (rightAnswers === numbersOfQuestions) console.log(`Congratulations, ${userName}!`);
};
