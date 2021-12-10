import { GET_QUESTIONS, ADD_QUESTION, SAVE_QUESTION_ANSWER } from "./ACTIONS";

export function receiveQuestions(questions) {
  return {
    type: GET_QUESTIONS,
    payload: { questions }
  };
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    payload: { question }
  };
}

export function saveQuestionAnswer(id, answer, userAuth) {
  return {
    type: SAVE_QUESTION_ANSWER,
    payload: { id, answer, userAuth }
  };
}
