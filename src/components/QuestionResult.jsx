import React from "react";
import styled from "styled-components";

const QuestionResult = ({ optionOne, optionTwo }) => {
  const questionOne = optionOne.text;
  const questionTwo = optionTwo.text;
  const optionOneVotes = optionOne.votes.length;
  const optionTwoVotes = optionTwo.votes.length;
  const totalVotes = optionOneVotes + optionTwoVotes;

  return (
    <Wrapper>
      <div className="result">
        <h4>{questionOne}</h4>
        <div className="progres-bar">
          <span
            style={{
              width: `${((optionOneVotes / totalVotes) * 100).toFixed(0)}%`
            }}
          >
            {((optionOneVotes / totalVotes) * 100).toFixed(0)}%
          </span>
        </div>
        <p className="votes">{`${optionOneVotes} out of ${totalVotes} votes`}</p>
      </div>
      <div className="result">
        <h4>{questionTwo}</h4>
        <div className="progres-bar">
          <span
            style={{
              width: `${((optionTwoVotes / totalVotes) * 100).toFixed(0)}%`
            }}
          >
            {((optionTwoVotes / totalVotes) * 100).toFixed(0)}%
          </span>
        </div>
        <p className="votes">{`${optionTwoVotes} out of ${totalVotes} votes`}</p>
      </div>
    </Wrapper>
  );
};

export default QuestionResult;

const Wrapper = styled.article`
  width: 100%;
  .result {
    text-align: center;
    margin-bottom: 0.8rem;
    .progres-bar {
      width: 95%;
      height: 20px;
      margin: auto;
      background: rgba(0, 0, 0, 0.2);
      border-radius: 0.4rem;
      overflow: hidden;
      span {
        display: block;
        height: 100%;
        background-color: #3a86ff;
      }
    }

    p {
      color: rgba(0, 0, 0, 0.7);
      font-size: 0.8rem;
      margin-top: 0.2rem;
    }
  }
`;
