import {
  GET_USERS,
  ADD_QUESTION_USER,
  SAVE_QUESTION_ANSWER_USER
} from "../actions/ACTIONS";

const users = (state = {}, action) => {
  if (action.type === GET_USERS) {
    return { ...state, ...action.payload.users };
  }

  if (action.type === ADD_QUESTION_USER) {
    const { userAuth, id } = action.payload;
    return {
      ...state,
      [userAuth]: {
        ...state[userAuth],
        questions: state[userAuth].questions.concat(id)
      }
    };
  }

  if (action.type === SAVE_QUESTION_ANSWER_USER) {
    const { userAuth, id, answer } = action.payload;

    return {
      ...state,
      [userAuth]: {
        ...state[userAuth],
        answers: {
          ...state[userAuth].answers,
          [id]: answer
        }
      }
    };
  }
  return state;
};

export default users;
