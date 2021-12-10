import { SET_USER_AUTH } from "./ACTIONS";

export const setUserAuth = (id) => {
  localStorage.setItem("user", id);
  return {
    type: SET_USER_AUTH,
    payload: { id }
  };
};
