import React, { useState } from "react";
import { connect } from "react-redux";

import { addQuestion } from "../actions/shared";

const PostQuestion = () => {
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");

  const handleOptionOneChange = event => {
    event.preventDefault();
    setOptionOne({
      optionOne: event.target.value
    });
  };

  const handleOptionTwoChange = event => {
    event.preventDefault();
    setOptionTwo({
      optionTwo: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const { text1, text2 } = "";
    addQuestion(text1, text2);
  };

  // s
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="text1"
            value={optionOne}
            onChange={handleOptionOneChange}
            placeholder="Option One"
          />

          <h1 for="optionTwo">Option Two</h1>
          <input
            type="text"
            name="text2"
            value={optionTwo}
            onChange={handleOptionTwoChange}
            placeholder="Option Two"
          />

          <button disabled={optionOne === "" || optionTwo === ""}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    postQuestion: (text1, text2) => {}
  };
}

export default connect(
  null,
  mapDispatchToProps
)(PostQuestion);
