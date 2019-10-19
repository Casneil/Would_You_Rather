import { USERS } from "../actions/users";

export const users = (state = {}, action) => {
  switch (action.type) {
    case USERS:
      return {
        ...state,
        ...action.users
      };
    default:
      return state;
  }
};
