import react from "react";
import styled from "styled-components";

const BtnSignUp = styled.button`
  color: white;
  background-color: black;
  margin-left: 20px;
  padding: 12px 30px;
  border: solid black 2px;
  border-radius: 0.5rem;
  font-family: Arial;
  font-weight: bolder;
  &:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`;

export default BtnSignUp;
