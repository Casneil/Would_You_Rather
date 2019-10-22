export const SET_AUTHED_USER = "AUTHED_USER";

export const setAuthedUser = (id, users) => {
  return {
    type: SET_AUTHED_USER,
    users,
    id
  };
};
