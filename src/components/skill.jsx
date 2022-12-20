import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Skill = ({ skillName, remove, type, index }) => {
  return (
    <Wrapper
      layout
      key={`skill${index}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <>{skillName}</>
      <div
        className="cross"
        onClick={() => {
          remove(type, index);
        }}
      >
        &#10006;
      </div>
    </Wrapper>
  );
};

export default Skill;

const Wrapper = styled(motion.div)`
  background-color: #f5f5f5;
  padding: 0.3rem 0.8rem;
  width: max-content;
  display: flex;
  gap: 0.9rem;
  border-radius: 7px;
  cursor: default;
  color: #343434;

  .cross {
    cursor: pointer;
  }
`;
