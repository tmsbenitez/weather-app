import React from "react";
import styled from "styled-components";

const Input = styled.input`
  color: var(--font);
  padding: 1.5rem 3rem;
  font-size: 1.5rem;
  opacity: 0.5;
  width: 100%;
  border: 1px solid #E2E7EF;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  border-radius: 5rem;
  outline: none;
  font-family: "Montserrat", sans-serif;
  transition: 0.2s;

  &:focus {
    border-color: var(--blue);
  }
`;

const Search = (props) => {
  const { location, setLocation, searchLocation } = props;

  return (
    <Input
      value={location}
      onChange={(event) => setLocation(event.target.value)}
      onKeyPress={searchLocation}
      placeholder="Enter Location (Example: London, GB)"
      type="text"
    />
  );
};

export default Search;
