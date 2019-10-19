import { combineReducers } from "redux";
import { question } from "./questionsReducer";
import { users } from "./userReducer";
import { authedUser } from "./authUserReducer";
import { LoadingReducer } from "./LoadingReducer";

export default combineReducers({
  question,
  users,
  authedUser,
  LoadingBar: LoadingReducer
});
