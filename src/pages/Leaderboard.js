import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Wrapper from "../components/Wrapper";

const Leaderboard = ({ usersScore }) => {
  return (
    <Wrapper>
      <StyleWrapper>
        {usersScore.map((user) => {
          const {
            id,
            name,
            avatarURL,
            questionsCount,
            answersCount,
            score
          } = user;
          return (
            <article key={id}>
              <img src={avatarURL} alt={name} />
              <div className="info">
                <h2>{name}</h2>
                <p>
                  Answerd questions <span>{answersCount}</span>
                </p>
                <p>
                  Created questions <span>{questionsCount}</span>
                </p>
              </div>
              <div className="score">
                <p>Score</p>
                <p>{score}</p>
              </div>
            </article>
          );
        })}
      </StyleWrapper>
    </Wrapper>
  );
};

const mapStateToProps = ({ users }) => {
  const usersScore = Object.values(users)
    .map((user) => {
      const { id, name, avatarURL, answers, questions } = user;
      const questionsCount = questions.length;
      const answersCount = Object.values(answers).length;
      const score = questionsCount + answersCount;
      return { id, name, avatarURL, questionsCount, answersCount, score };
    })
    .sort((a, b) => {
      //Sort By Score
      if (a.score < b.score) {
        return 1;
      } else if (a.score > b.score) {
        return -1;
      } else {
        return 0;
      }
    });
  return { usersScore };
};
export default connect(mapStateToProps)(Leaderboard);

const StyleWrapper = styled.main`
  width: 90vw;
  max-width: 600px;
  margin: 2rem auto;
  article {
    margin-bottom: 2rem;
    padding: 2rem;
    border-radius: 0.4rem;
    background: #fff;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 115px;
    }
    .info {
      display: flex;
      flex-direction: column;
      row-gap: 1rem;

      p {
        color: rgba(0, 0, 0, 0.7);
        display: grid;
        grid-template-columns: 190px auto;
      }
    }
    .score {
      font-size: 1.1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      row-gap: 0.675rem;
      > p:last-child {
        font-size: 2rem;
        background: #333;
        padding: 0.5rem 1rem;
        border-radius: 50%;
        color: #fff;
      }
    }
  }
`;
