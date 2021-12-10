import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Img from "../assets/404.svg";

const NotFound = () => {
  return (
    <StyleWrapper>
      <Link className="btn" to="/">
        back home
      </Link>
      <img src={Img} alt="not found" />
    </StyleWrapper>
  );
};
const StyleWrapper = styled.section`
  width: 90vw;
  max-width: 600px;
  margin: 1rem auto;
  img {
    width: 100%;
    display: block;
  }
  .btn {
    display: block;
    width: 40%;
    text-align: center;
    background: #3a86ff;
    margin: 2rem auto 0;
    font-size: 1.2rem;
  }
`;
export default NotFound;
