import React from "react";
import styled from "styled-components";

const Nav = () => {
  return <Wrapper>
    <p>20SE02IT028</p>
    <p>Resume Genrator</p>
    <p>Web tech A 2</p>
  </Wrapper>;
};

export default Nav;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 8%;
  background-color: rgba(255,255,255,0.2);
  position: absolute;
  z-index: 10;
  backdrop-filter: blur(16px);
  font-weight: 500;
`;
