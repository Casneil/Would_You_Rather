export const QUESTIONS = "QUESTIONS";

const recieveQuestions = questions => {
  return {
    type: QUESTIONS,
    questions
  };
};

export default recieveQuestions;
