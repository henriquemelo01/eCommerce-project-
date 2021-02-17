import react from "react";
import styled from "styled-components";

const BtnLoginForm = styled.button`
  display: block;
  width: 100%;
  height: 35px;
  margin-bottom: 5px;
  border: white 1px solid;
  border-radius: 0.6rem;
  color: white;
  background-color: black;
  opacity: 0.8;
  :focus,
  :hover {
    box-shadow: 0 0 0 0;
    outline: 0;
    opacity: 1;
  }
`;

export default BtnLoginForm;
