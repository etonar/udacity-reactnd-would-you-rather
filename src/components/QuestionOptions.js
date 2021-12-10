import React, { useState } from "react";
import { connect } from "react-redux";
import { saveAnswer } from "../actions/shared";

const QuestionOptions = ({ optionOne, optionTwo, userAuth, dispatch, id }) => {
  const [answer, setAnswer] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    answer && dispatch(...saveAnswer(dispatch, userAuth, id, answer));
  };
  return (
    <form
      onChange={(e) => setAnswer(e.target.value)}
      onSubmit={(e) => handleSubmit(e)}
    >
      <div>
        <input type="radio" id="optionOne" name="options" value="optionOne" />
        <label htmlFor="optionOne">{optionOne.text}</label>
      </div>
      <div>
        <input type="radio" id="optionTwo" name="options" value="optionTwo" />
        <label htmlFor="optionTwo">{optionTwo.text}</label>
      </div>
      <button className="btn">answer</button>
    </form>
  );
};

const mapStateToProps = ({ userAuth, dispatch }) => {
  return { userAuth, dispatch };
};
export default connect(mapStateToProps)(QuestionOptions);
