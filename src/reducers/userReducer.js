import { RECIEVE_USERS, ADD_QUESTION, ANSWER_QUESTION } from "../actions/users";

export const users = (state = {}, action) => {
  switch (action.type) {
    case RECIEVE_USERS:
      return {
        ...state,
        ...action.users
      };
    case ADD_QUESTION:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          questions: state[action.authedUser].questions.concat([action.id])
        }
      };
    default:
      return state;

    case ANSWER_QUESTION:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.qid]: action.option
          }
        }
      };
  }
};
