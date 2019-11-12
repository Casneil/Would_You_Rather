import {
  RECIEVE_QUESTIONS,
  POST_QUESTION,
  SAVE_QUESTION_ANSWER
} from "../actions/questions";

export const questions = (state = {}, action, question) => {
  switch (action.type) {
    case RECIEVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      };
    case POST_QUESTION:
      const { question } = action;
      return {
        ...state,
        [question.id]: question
      };
    case SAVE_QUESTION_ANSWER:
      const { authedUser, qid, answer } = action;
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer]
            // votes: state[qid][answer].votes.concat([authedUser])
          }
        }
      };

    default:
      return state;
  }
};
