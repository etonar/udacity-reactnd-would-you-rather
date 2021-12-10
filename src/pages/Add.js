import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Wrapper from "../components/Wrapper";
import { addNewQuestion } from "../actions/shared";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const Add = ({ dispatch, userAuth }) => {
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");
  const [isSubmited, setIsSubmited] = useState(false);
  const [actions, setActions] = useState([]);

  const createQuestion = async () => {
    const actions = await addNewQuestion(
      dispatch,
      userAuth,
      optionOne,
      optionTwo
    );
    setActions(actions);
  };

  useEffect(() => {
    if (actions.length === 0) {
      return;
    } else {
      dispatch(...actions);
      setIsSubmited(true);
    }
  }, [actions]);

  if (isSubmited) {
    return <Redirect to="/" />;
  }
  return (
    <Wrapper>
      <StyleWrapper>
        <h1>create new question</h1>
        <main>
          <h2>would you rather?</h2>
          <input
            type="text"
            placeholder="Option One"
            value={optionOne}
            onChange={(e) => setOptionOne(e.target.value)}
          />
          <p>or</p>
          <input
            type="text"
            placeholder="Option Two"
            value={optionTwo}
            onChange={(e) => setOptionTwo(e.target.value)}
          />
        </main>
        <button
          className="btn"
          onClick={createQuestion}
          disabled={optionOne === "" || optionTwo === ""}
        >
          submit
        </button>
      </StyleWrapper>
    </Wrapper>
  );
};

const mapStateToProps = ({ dispatch, userAuth }) => {
  return {
    dispatch,
    userAuth
  };
};
export default connect(mapStateToProps)(Add);

const StyleWrapper = styled.article`
  width: 90vw;
  max-width: 600px;
  margin: 2rem auto;
  background: #fff;
  padding: 2rem 1rem;
  border-radius: 0.3rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  h1 {
    text-transform: capitalize;
    font-size: 2rem;
    text-align: center;
    margin-bottom: 1rem;
  }
  h2 {
    text-transform: capitalize;
    padding-left: 1rem;
  }
  main {
    input {
      display: block;
      width: 90%;
      margin: 1rem auto;
      padding: 0.3rem 0.5rem;
      border-radius: 0.3rem;
      border: none;
      background: rgba(0, 0, 0, 0.4);
      color: #fff;
      font-size: 1.1rem;
    }
    input:focus {
      outline: 2px solid #3a86ff;
    }
    p {
      text-transform: uppercase;
      text-align: center;
      font-size: 1.1rem;
      font-weight: bold;
    }
  }
  .btn {
    display: block;
    font-size: 1.1rem;
    margin: 2rem auto 0;
    width: 93%;
    text-transform: capitalize;
    padding: 8px;
    background-color: #3a86ff;
  }
`;
