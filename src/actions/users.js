import { answerQuestion } from "../api/api";
export const RECIEVE_USERS = "RECIEVE_USERS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ANSWER_QUESTION = "ANSWER_QUESTION";

export const recieveUsers = users => {
  return {
    type: RECIEVE_USERS,
    users
  };
};

export const addQuestion = (authedUser, qid) => {
  return {
    type: ADD_QUESTION,
    qid,
    authedUser
  };
};

export const saveUserAnswer = (authedUser, qid, option) => {
  return {
    type: ANSWER_QUESTION,
    authedUser,
    option,
    qid
  };
};
