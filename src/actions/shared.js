import { getInitialData } from "../api/api";
import recieveQuestions from "../actions/questions";
import { recieveUsers } from "../actions/users";
import { _saveQuestion, _saveQuestionAnswer } from "../api/_DATA";

export const initialData = () => {
  return dispatch => {
    getInitialData().then(({ users, questions }) => {
      dispatch(recieveQuestions(questions));
      dispatch(recieveUsers(users));
    });
  };
};

export const addQuestion = (text1, text2) => {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    return _saveQuestion({
      text1,
      text2,
      author: authedUser
    }).then(question => {
      dispatch(addQuestion(question));
    });
  };
};
