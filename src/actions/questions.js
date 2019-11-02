export const RECIEVE_QUESTIONS = "RECIEVE_QUESTIONS";
export const POST_QUESTION = "POST_QUESTION";
export const SAVE_QUESTION_ANSWER = "SAVE_QUESTION_ANSWER";

export const recieveQuestions = questions => {
  return {
    type: RECIEVE_QUESTIONS,
    questions
  };
};

export function saveQuestionAnswer(authedUser, id, answer) {
  return {
    type: SAVE_QUESTION_ANSWER,
    authedUser,
    id,
    answer
  };
}

export const postQuestion = question => {
  return {
    type: POST_QUESTION,
    question
  };
};

export default recieveQuestions;
