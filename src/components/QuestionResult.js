import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import VoteIcon from "../assets/vote.png";

const QuestionResult = ({ optionOne, optionTwo, answers, id }) => {
  const questionOne = optionOne.text;
  const questionTwo = optionTwo.text;
  const optionOneVotes = optionOne.votes.length;
  const optionTwoVotes = optionTwo.votes.length;
  const totalVotes = optionOneVotes + optionTwoVotes;
  const userVote = answers[id];

  return (
    <Wrapper>
      <div className="result">
        <h4>{questionOne}</h4>
        {userVote === "optionOne" && <img src={VoteIcon} alt="vote" />}
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
        {userVote === "optionTwo" && <img src={VoteIcon} alt="vote" />}
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

const mapStateToProps = ({ users, userAuth }) => {
  return {
    answers: users[userAuth].answers
  };
};

export default connect(mapStateToProps)(QuestionResult);

const Wrapper = styled.article`
  width: 100%;
  .result {
    text-align: center;
    margin-bottom: 0.8rem;
    position: relative;
    img {
      width: 50px;
      position: absolute;
      left: 25px;
      bottom: 5px;
      background: #fff;
      border-radius: 50%;
      border: 2px solid #3a86ff;
    }
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
