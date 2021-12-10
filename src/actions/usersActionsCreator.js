import {
  GET_USERS,
  ADD_QUESTION_USER,
  SAVE_QUESTION_ANSWER_USER
} from "./ACTIONS";

export const getUsers = (users) => {
  return {
    type: GET_USERS,
    payload: { users }
  };
};

export function addQuestionToUser(userAuth, id) {
  return {
    type: ADD_QUESTION_USER,
    payload: { userAuth, id }
  };
}

export function saveQuestionAnswerUser(userAuth, id, answer) {
  return {
    type: SAVE_QUESTION_ANSWER_USER,
    payload: { userAuth, id, answer }
  };
}
