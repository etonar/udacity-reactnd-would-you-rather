import React from "react";
import { connect } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import { setUserAuth } from "../actions/userAuthActionCreator";

const Header = ({ profile, dispatch, userAuth }) => {
  const history = useHistory();
  const location = useLocation();

  const logout = () => {
    localStorage.setItem("lastPage", location.pathname);
    history.push("/login");
    dispatch(setUserAuth(null));
  };
  return (
    <Wrapper>
      <div className="header-center">
        <h1>would you rather?</h1>
        <div className="col-2">
          {userAuth && (
            <div className="profile">
              <img
                className="profile-avatar"
                src={profile.avatarURL}
                alt={profile.name}
              />
              <div className="profile-name">
                <h4>{profile.name}</h4>
                <p>{profile.id}</p>
              </div>
            </div>
          )}
          <button className="logout-btn" onClick={logout}>
            log out
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const mapStateToProps = ({ userAuth, users }) => {
  return {
    userAuth,
    profile: Object.values(users).find((user) => user.id === userAuth)
  };
};

export default connect(mapStateToProps)(Header);

const Wrapper = styled.header`
  .header-center {
    width: 90vw;
    max-width: 1170px;
    margin: 0 auto;
    padding: 0.6rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      text-transform: capitalize;
      font-size: clamp(0.6rem, -0.875rem + 8.333vw, 2.3rem);
    }

    .col-2 {
      display: flex;
      column-gap: 1rem;
      .profile {
        display: flex;
        column-gap: 0.5rem;
        .profile-avatar {
          width: 40px;
        }
        .profile-name {
          p {
            font-size: 0.8rem;
            color: grey;
          }
        }
      }
      .logout-btn {
        min-width: 90px;
        font-size: 0.9rem;
        font-family: inherit;
        color: #fff;
        padding: 5px 10px;
        cursor: pointer;
        transition: all 0.3s ease;
        position: relative;
        display: inline-block;
        outline: none;
        border-radius: 5px;
        border: 2px solid #d90429;
        background: #d90429;
        text-transform: capitalize;
      }
      .logout-btn:hover {
        background: aliceblue;
        color: #d90429;
      }

      /*    .logout-btn {
        border: transparent;
        background: transparent;
        cursor: pointer;
        
      } */
    }
  }
`;
