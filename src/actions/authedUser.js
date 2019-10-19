export const AUTHED_USER = "AUTHED_USER";

export const authedUser = id => {
  return {
    type: AUTHED_USER,
    id
  };
};
