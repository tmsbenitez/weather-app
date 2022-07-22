import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background: none;
  cursor: pointer;
  transition: 0.2s;
  border: none;

  &:hover {
    transform: scale(0.95);
  }
`;

const Img = styled.img`
  width: 4rem;
`;

const Title = styled.span`
  font-size: 2rem;
  pointer-events: none;
  font-weight: 500;
  font-family: "Montserrat", sans-serif;
`;

const Logo = () => {
  return (
    <Btn onClick={() => window.location.reload(false)}>
      <Img src="/img/weather.png" alt="weather-app-logo" className="logo" />
      <Title className="title">Weather App</Title>
    </Btn>
  );
};

export default Logo;
