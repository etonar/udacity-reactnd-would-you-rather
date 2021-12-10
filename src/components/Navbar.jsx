import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  const navItems = [
    {
      name: "Home",
      path: "/",
      isActive: window.location.pathname === "/"
    },

    {
      name: "Leaderboard",
      path: "/leaderboard",
      isActive: window.location.pathname === "/leaderboard"
    },

    {
      name: "Add Question",
      path: "/add",
      isActive: window.location.pathname === "/add"
    }
  ];

  return (
    <Wrapper>
      <div className="nav-center">
        {navItems.map((item, index) => {
          const { name, path, isActive } = item;
          return (
            <Link key={index} to={path} className={isActive ? "active" : null}>
              {name}
            </Link>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.nav`
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  .nav-center {
    width: 90vw;
    max-width: 1176px;
    margin: 0 auto;
    display: flex;
    column-gap: 1.2rem;
    a {
      text-decoration: none;
      padding: 1rem 0;
      color: rgba(0, 0, 0, 0.8);
      border-bottom: 1px solid transparent;
      transition: all 0.3s ease-in-out;
    }
    a:hover {
      color: #5086d1;
      border-bottom: 1px solid #5086d1;
    }
    .active {
      color: #5086d1;
      border-bottom: 1px solid #5086d1;
    }
  }
`;
