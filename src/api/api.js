// Import needed functions from Data.js

import {
  _getQuestions,
  _getUsers,
  _saveQuestion,
  _saveQuestionAnswer,
  _getUser
} from "./_DATA";

export const newQuestion = question => {
  return _saveQuestion(question);
};

export const answerQuestion = answer => {
  return _saveQuestionAnswer(answer);
};

export const getInitialData = () => {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions
    })
  );
};
