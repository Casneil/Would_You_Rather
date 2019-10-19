import thunk from "redux-thunk";
import { applyMiddleware } from "redux";
import log from "./log";

export default applyMiddleware(thunk, log);
