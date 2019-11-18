import { getInitialData } from "../api/api";
import {
  recieveQuestions,
  postQuestion,
  saveQuestionAnswer
} from "../actions/questions";
import { recieveUsers, addQuestion, saveAnswer } from "../actions/users";
import { _saveQuestion, _saveQuestionAnswer } from "../api/_DATA";

export const initialData = () => {
  return dispatch => {
    getInitialData().then(({ users, questions }) => {
      dispatch(recieveUsers(users));
      dispatch(recieveQuestions(questions));
    });
  };
};

export const AddQuestion = (optionOne, optionTwo) => {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    return _saveQuestion({
      optionOneText: optionOne,
      optionTwoText: optionTwo,
      author: authedUser
    }).then(question => {
      dispatch(postQuestion(question));
      dispatch(addQuestion(authedUser, question.id));
    });
  };
};

export function handleAnswer(qid, option) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    const info = {
      authedUser: authedUser,
      qid,
      answer: option
    };
    _saveQuestionAnswer(info).then(() => {
      dispatch(saveQuestionAnswer(authedUser, qid, option));
      dispatch(saveAnswer(authedUser, qid, option));
    });
  };
}
