import React from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  margin-top: 40rem;
`

const Span = styled.span`
  font-size: 4rem;
  font-family: "Montserrat", sans-serif;
  text-align: center;
  font-weight: 400;
  opacity: 1;
`;

const Img = styled.img`
  position: absolute;
  z-index: -1;
  opacity: 0.05;
  width: 20%;
  pointer-events: none;
`

const Landing = () => {
  return (
    <Div>
      <Span>Please, search for a location.</Span>
      <Img src="/img/weather.png" alt="weather-app-logo" className="logo" />
    </Div>
  );
};

export default Landing;
