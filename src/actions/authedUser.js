export const SET_AUTHED_USER = "AUTHED_USER";
export const DELETE_AUTHED_USER = "DELETE_AUTHED_USER";
export const setAuthedUser = (id, users) => {
  return {
    type: SET_AUTHED_USER,
    users,
    id
  };
};

export const deleteAuthedUser = () => {
  return {
    type: DELETE_AUTHED_USER
  };
};
