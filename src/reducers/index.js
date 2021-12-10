import { combineReducers } from "redux";
import userAuth from "./userAuthReducer";
import users from "./usersReducer";
import questions from "./questionsReducer";

export default combineReducers({
  userAuth,
  users,
  questions
});
