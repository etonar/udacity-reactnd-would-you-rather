import { SET_USER_AUTH } from "../actions/ACTIONS";

const userAuth = (state = null, action) => {
  if (action.type === SET_USER_AUTH) {
    return action.payload.id;
  }
  return state;
};

export default userAuth;
