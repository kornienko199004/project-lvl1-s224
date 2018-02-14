#!/usr/bin/env node

import showWelcomeMessage from '../index';
import even from '../games/even';
import askQuestionLoop from '../modules/askQuestionLoop';

const userName = showWelcomeMessage('Answer "yes" if number even otherwise answer "no"');
const numberOfQuestions = 3;

askQuestionLoop(even, userName, numberOfQuestions);
