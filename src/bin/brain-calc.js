#!/usr/bin/env node

import showWelcomeMessage from '../index';
import calc from '../games/calc';
import askQuestionLoop from '../modules/askQuestionLoop';

const userName = showWelcomeMessage('What is the result of the expression?');
const numberOfQuestions = 3;

askQuestionLoop(calc, userName, numberOfQuestions);
