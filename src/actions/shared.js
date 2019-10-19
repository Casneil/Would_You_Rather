import { getInitialData } from "../api/api";
import recieveQuestions from "../actions/questions";
import { recieveUsers } from "../actions/users";

export const initialData = () => {
  return dispatch => {
    getInitialData().then(({ users, questions }) => {
      dispatch(recieveQuestions(questions));
      dispatch(recieveUsers(users));
    });
  };
};
