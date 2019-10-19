import LoadingBar from "../components/Loading";

export const LoadingReducer = (state = {}, action) => {
  switch (action.type) {
    case LoadingBar:
      return {
        ...state,
        ...action.questions
      };
    default:
      return state;
  }
};
