import React from "react";
import styled from "styled-components";

const Span = styled.span`
  position: absolute;
  display: flex;
  justify-content: center;
  font-size: 1.6rem;
  font-family: "Montserrat", sans-serif;
  bottom: 0;
  z-index: 2;
  background-color: lightgrey;
  padding: 2rem 0;
  width: 100%;
  gap: 1rem;

  @media screen and (max-width: 720px) {
    position: fixed;
  }
`;

const Error = (props) => {
  const { err } = props;

  return (
    <>
      {err === "404" ? (
        <Span>
          Sorry, location not found. <strong>Error 404</strong>
        </Span>
      ) : (
        <Span>
          Sorry, no answer from server. <strong>Error 401</strong>
        </Span>
      )}
    </>
  );
};

export default Error;
