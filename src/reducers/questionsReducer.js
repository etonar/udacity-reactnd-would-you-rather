import {
  GET_QUESTIONS,
  ADD_QUESTION,
  SAVE_QUESTION_ANSWER
} from "../actions/ACTIONS";

const questions = (state = {}, action) => {
  if (action.type === GET_QUESTIONS) {
    return { ...state, ...action.payload.questions };
  }

  if (action.type === ADD_QUESTION) {
    const { question } = action.payload;

    return { ...state, [question.id]: question };
  }

  if (action.type === SAVE_QUESTION_ANSWER) {
    const { id, answer, userAuth } = action.payload;

    return {
      ...state,
      [id]: {
        ...state[id],
        [answer]: {
          ...state[id][answer],
          votes: state[id][answer].votes.concat(userAuth)
        }
      }
    };
  }
  return state;
};

export default questions;
