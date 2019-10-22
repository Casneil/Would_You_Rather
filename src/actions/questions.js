export const RECIEVE_QUESTIONS = "RECIEVE_QUESTIONS";

const recieveQuestions = questions => {
  return {
    type: RECIEVE_QUESTIONS,
    questions
  };
};

export default recieveQuestions;
