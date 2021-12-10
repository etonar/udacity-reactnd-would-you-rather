//API Stuff
import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer
} from "../utils/_DATA";

//Actions
import { setUserAuth } from "./userAuthActionCreator";
import {
  getUsers,
  saveQuestionAnswerUser,
  addQuestionToUser
} from "./usersActionsCreator";
import {
  receiveQuestions,
  addQuestion,
  saveQuestionAnswer
} from "./questionsActionsCreator";

let USER = localStorage.getItem("user");

//Fetch Data
export const fetchData = async (dispatch) => {
  const [users, questions] = await Promise.all([_getUsers(), _getQuestions()]);
  dispatch(getUsers(users));
  dispatch(receiveQuestions(questions));
  dispatch(setUserAuth(USER));
};

//Save Answer
export const saveAnswer = (dispatch, userAuth, id, answer) => {
  _saveQuestionAnswer({ authedUser: userAuth, qid: id, answer });
  return [
    dispatch(saveQuestionAnswerUser(userAuth, id, answer)),
    dispatch(saveQuestionAnswer(id, answer, userAuth))
  ];
};

//Add New Question
export const addNewQuestion = async (
  dispatch,
  userAuth,
  optionOneText,
  optionTwoText
) => {
  const question = await _saveQuestion({
    author: userAuth,
    optionOneText,
    optionTwoText
  });

  return [
    dispatch(addQuestion(question)),
    dispatch(addQuestionToUser(userAuth, question.id))
  ];
};
