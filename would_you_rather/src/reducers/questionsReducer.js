import { QUESTIONS } from "../actions/questions";

export const question = (state = {}, action) => {
  switch (action.type) {
    case QUESTIONS:
      return {
        ...state,
        ...action.questions
      };
    default:
      return state;
  }
};
