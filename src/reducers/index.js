import { combineReducers } from "redux";
import { questions } from "./questionsReducer";
import { users } from "./userReducer";
import { authedUser } from "./authUserReducer";
import { LoadingReducer } from "./LoadingReducer";

export default combineReducers({
  questions,
  users,
  authedUser,
  LoadingBar: LoadingReducer
});
