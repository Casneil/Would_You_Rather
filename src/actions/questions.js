export const RECIEVE_QUESTIONS = "RECIEVE_QUESTIONS";
export const POST_QUESTION = "POST_QUESTION";

const recieveQuestions = questions => {
  return {
    type: RECIEVE_QUESTIONS,
    questions
  };
};

const postQuestion = question => {
  return {
    type: POST_QUESTION,
    question
  };
};

export default recieveQuestions;
