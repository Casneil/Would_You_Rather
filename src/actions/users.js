import { authedUser } from "./authedUser";

export const USERS = "USERS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ANSWER_QUESTION = "ANSWER_QUESTION";

export const recieveUsers = users => {
  return {
    type: USERS,
    users
  };
};

export const addQuestion = (authedUser, id) => {
  return {
    type: ADD_QUESTION,
    id,
    authedUser
  };
};

export const answerQuestion = (authedUser, id, choice) => {
  return {
    type: ANSWER_QUESTION,
    authedUser,
    choice,
    id
  };
};
