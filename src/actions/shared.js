import { getInitialData } from "../api/api";
import {
  recieveQuestions,
  postQuestion,
  saveQuestionAnswer
} from "../actions/questions";
import { recieveUsers, addQuestion, saveUserAnswer } from "../actions/users";
import { _saveQuestion, _saveQuestionAnswer } from "../api/_DATA";

export const initialData = () => {
  return dispatch => {
    getInitialData().then(({ users, questions }) => {
      dispatch(recieveUsers(users));
      dispatch(recieveQuestions(questions));
    });
  };
};

export const handleAddQuestion = (optionOne, optionTwo) => {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    return _saveQuestion({
      optionOne,
      optionTwo,
      author: authedUser
    }).then(question => {
      dispatch(postQuestion(question));
      dispatch(addQuestion(authedUser, question.id));
    });
  };
};

export function handleAnswer(id, option) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    const info = {
      authedUser: authedUser,
      id,
      answer: option
    };
    _saveQuestionAnswer(info).then(() => {
      dispatch(saveQuestionAnswer(authedUser, id, option));
      dispatch(saveUserAnswer(authedUser, id, option));
    });
  };
}
