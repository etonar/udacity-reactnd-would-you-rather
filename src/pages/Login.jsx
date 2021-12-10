import React, { useState } from "react";
import styled from "styled-components";
import { withRouter, useLocation, useHistory } from "react-router-dom";
import { connect } from "react-redux";

import { setUserAuth } from "../actions/userAuthActionCreator";

const Login = ({ users, dispatch }) => {
  const [userID, setUserID] = useState("");
  const location = useLocation();
  const history = useHistory();
  console.log(location);
  console.log(history);

  const logginUser = () => {
    dispatch(setUserAuth(userID));

    let prevRouterPath =
      location.state !== undefined ? location.pathname : null;

    prevRouterPath ? history.push(prevRouterPath) : history.push("/");
  };

  return (
    <Wrapper>
      <section className="section-center">
        <h1>would you rather?</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <h3>login to your account</h3>
          <div className="user-select">
            <label>Select User</label>
            <select value={userID} onChange={(e) => setUserID(e.target.value)}>
              <option default defaultValue value="" disabled>
                Select User
              </option>
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
          </div>
          <button className="btn" onClick={logginUser}>
            login
          </button>
        </form>
      </section>
    </Wrapper>
  );
};

const mapStateToProps = ({ users }) => {
  return {
    users: Object.values(users)
  };
};

export default connect(mapStateToProps)(withRouter(Login));

const Wrapper = styled.article`
  height: 100vh;
  display: flex;
  align-items: center;

  .section-center {
    width: 90vw;
    max-width: 500px;
    margin: 0 auto;
    h1 {
      font-size: 1.75rem;
      margin-bottom: 2rem;
      text-align: center;
      text-transform: uppercase;
    }
    form {
      height: 250px;
      background: white;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      border-radius: 0.5rem;

      h3 {
        text-transform: capitalize;
        text-align: center;
      }

      .user-select {
        color: #666;
        display: flex;
        flex-direction: column;
        row-gap: 1rem;

        select {
          height: 2.75rem;
          padding-left: 1rem;
          font-size: 1rem;
        }
      }

      .btn {
        text-align: center;
        text-decoration: none;
        font-family: inherit;
        font-size: 1.1rem;
        background: #444;
        color: white;
        border: 2px solid transparent;
        border-radius: 0.5rem;
        text-transform: uppercase;
        padding: 0.5rem;
        cursor: pointer;
        transition-property: background, color, border;
        transition-duration: 0.3s;
        &:hover {
          color: #444;
          background: white;
          border-color: #444;
        }
      }
    }
  }
`;
