import { RECIEVE_QUESTIONS, POST_QUESTION } from "../actions/questions";

export const questions = (state = {}, action, question) => {
  switch (action.type) {
    case RECIEVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      };
    case POST_QUESTION:
      return {
        ...state,
        [question.id]: question
      };

    default:
      return state;
  }
};
