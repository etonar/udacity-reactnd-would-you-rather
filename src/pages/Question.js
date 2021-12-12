import React from "react";
import { connect } from "react-redux";
import { Link, Redirect, useParams } from "react-router-dom";
import styled from "styled-components";
import moment from "moment";

//Components
import { Wrapper, QuestionOptions, QuestionResult } from "../components/";

const Question = ({ userAuth, users, questions }) => {
  const { id } = useParams();
  const isAnswered = Object.keys(users[userAuth].answers).includes(id);

  // const name = users[userAuth].name;
  // const avatar = users[userAuth].avatarURL;

  const question = Object.values(questions).find(
    (question) => question.id === id
  );

  if (!question) {
    return <Redirect to="/404" />;
  }
  const fromNow = moment(question.timestamp).fromNow();

  const { name, avatarURL: avatar } = users[question.author];
  return (
    <Wrapper>
      <QuestionWrapper>
        <header>
          <h2>{name}</h2>
          <img src={avatar} alt={name} />
          <h3>would you rather?</h3>
        </header>
        {!isAnswered ? (
          <QuestionOptions {...question} id={id} />
        ) : (
          <QuestionResult {...question} id={id} />
        )}
        <footer>
          <div className="info">
            <p className="info-name">{name} asked</p>
            <p className="info-time">{fromNow}</p>
          </div>
          {isAnswered && (
            <Link to="/" className="btn">
              back to home
            </Link>
          )}
        </footer>
      </QuestionWrapper>
    </Wrapper>
  );
};

const mapStateToProps = ({ userAuth, users, questions }) => {
  return {
    userAuth,
    users,
    questions
  };
};
export default connect(mapStateToProps)(Question);

const QuestionWrapper = styled.article`
  width: 90vw;
  max-width: 600px;
  margin: 2rem auto;
  background: #fff;
  display: flex;
  flex-direction: column;
  row-gap: 0.675rem;
  align-items: center;
  border-radius: 0.3rem;
  padding-top: 3rem;
  background: linear-gradient(to bottom, #333 45%, #fff 45%);

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;
    h2 {
      color: #fff;
    }
    h3 {
      text-transform: capitalize;
      font-size: 1.3rem;
    }
    img {
      display: block;
      width: 95px;
      padding: 0.1rem;
      background: #fff;
      border: 2px solid #3a86ff;
      border-radius: 50%;
      position: relative;
    }
  }
  form {
    margin: 1rem 0;
    font-size: 1.1rem;
    div {
      display: flex;
      column-gap: 1rem;
      margin-bottom: 0.5rem;
    }
    .btn {
      display: block;
      text-transform: capitalize;
      min-width: 80%;
      margin: 0.8rem auto 0;
      padding: 7px 8px;
      background-color: #3a86ff;
    }
  }
  footer {
    width: 90%;
    padding: 0.5rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p:last-child {
      font-size: 0.8rem;
      font-style: italic;
      color: rgba(0, 0, 0, 0.8);
    }
  }
  .btn {
    text-transform: capitalize;
    min-width: 100px;
    padding: 7px 8px;
    background-color: #3a86ff;
  }
`;
