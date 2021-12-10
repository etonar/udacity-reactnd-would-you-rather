import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Wrapper from "../components/Wrapper";
import moment from "moment";
import { Link } from "react-router-dom";

const Home = ({ userAuth, users, questions, answered, unanswered }) => {
  const answeredList = answered.map((answer) => questions[answer]);
  const unansweredList = unanswered.map((answer) => questions[answer]);

  const [questionList, setQuestionList] = useState(unansweredList);
  return (
    <Wrapper>
      <StyleWrapper>
        <div className="list-control">
          <button onClick={() => setQuestionList(unansweredList)}>
            unanswered questions
          </button>
          <button
            className="primary-btn"
            onClick={() => setQuestionList(answeredList)}
          >
            answered questions
          </button>
        </div>
        <section className="questions-container">
          {questionList.map((question) => {
            const { id, author, optionOne, timestamp } = question;
            const avatar = users[author].avatarURL;
            const name = users[author].name;
            const fromNow = moment(timestamp).fromNow();
            return (
              <article key={id} className="question">
                <h2 className="name">{name}</h2>
                <img src={avatar} alt={author} />
                <div>
                  <h3>would you rather?</h3>
                  <p>{optionOne.text}</p>
                  <span>or</span>
                </div>
                <footer>
                  <div className="info">
                    <p className="info-name">{name} asked</p>
                    <p className="info-time">{fromNow}</p>
                  </div>
                  <Link to={`/question/${id}`}>
                    <button>answer</button>
                  </Link>
                </footer>
              </article>
            );
          })}
        </section>
      </StyleWrapper>
    </Wrapper>
  );
};

const mapStateToProps = ({ userAuth, users, questions }) => {
  const sorting = (a, b) => {
    return (
      new Date(questions[b].timestamp).getTime() -
      new Date(questions[a].timestamp).getTime()
    );
  };
  let answered = Object.keys(users[userAuth].answers).sort(sorting);
  let unanswered = Object.keys(Object.assign({}, questions)).sort(sorting);
  answered.map(
    (answer) =>
      (unanswered = unanswered.filter((unanswered) => answer !== unanswered))
  );

  return { userAuth, users, questions, answered, unanswered };
};
export default connect(mapStateToProps)(Home);

const StyleWrapper = styled.main`
  width: 90vw;
  max-width: 600px;
  margin: 2.5rem auto;

  .list-control {
    display: flex;
    justify-content: space-between;
    column-gap: 1.5rem;

    > button {
      height: 40px;
      flex-basis: 50%;
    }
    button:first-child {
      background-color: #343a40;
    }

    button:last-child {
      background-color: #3a86ff;
    }
  }

  .questions-container {
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
    .question {
      display: flex;
      flex-direction: column;
      row-gap: 0.675rem;
      align-items: center;
      border-radius: 0.3rem;
      padding: 3rem 0rem 0;
      background: linear-gradient(to bottom, #333 45%, #fff 45%);

      .name {
        font-size: 1.8rem;
        color: #fff;
      }
      img {
        width: 95px;
        padding: 0.1rem;
        background: #fff;
        border: 2px solid #3a86ff;
        border-radius: 50%;
        position: relative;
        top: 20px;
      }

      > div {
        position: relative;
        top: 25px;
        h3 {
          text-transform: capitalize;
          margin-bottom: 0.675rem;
        }
        p {
          text-align: center;
          color: rgba(0, 0, 0, 0.8);
          font-style: italic;
        }
        span {
          display: block;
          width: 35px;
          height: 35px;
          margin: 1rem auto;
          background: #222;
          color: #fff;
          border-radius: 0.2rem;
          text-transform: uppercase;
          display: grid;
          place-items: center;
        }
      }

      footer {
        width: 100%;
        padding: 0.5rem 0;
        margin-top: 0.5rem;
        border-top: 1px solid rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: space-between;

        .info {
          margin-left: 2rem;
          .info-name {
            font-size: 0.8rem;
          }
          .info-time {
            font-size: 0.675rem;
            color: rgba(0, 0, 0, 0.8);
          }
        }
        button {
          text-transform: capitalize;
          margin-right: 2rem;
          min-width: 100px;
          padding: 7px 8px;
          background-color: #3a86ff;
        }
      }
    }
  }
`;
