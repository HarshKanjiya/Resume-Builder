import React from "react";
import styled from "styled-components";

const MultilineDisplay = ({ data, remove, type,index }) => {
  return (
    <Wrapper>
        <Master>
           {
            type === 'edu' ?
            (
              <>
              <p> { data.course } </p>
            <p> { data.place } </p>
            <p> { data.duration } </p>
              </>
            )
            :
           type === "link" ? 
           (
              <>
              <p> { data.name } </p>
              </>
            )
            :
            (
              <>
                <p> { data.name } </p>
                <p> { data.dipscription } </p>
              </>
            )
           }
        </Master>
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

export default MultilineDisplay;

const Wrapper = styled.div`
  background-color: #f5f5f5 ;
  padding: 0.3rem 0.8rem;
  width: max-content;
  display: flex;
  gap: 0.9rem;
  border-radius: 7px;
  cursor: default;
  color: #343434;
  align-items: center;

  .cross {
    cursor: pointer;
  }
`;

const Master = styled.div`
display: flex;
flex-direction: column;
font-size: 0.8rem;
padding: 0;
`