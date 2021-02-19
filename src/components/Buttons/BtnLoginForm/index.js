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
  background-color: #e0e0e0;
  color: black;
  font-weight: bold;
  :focus,
  :hover {
    box-shadow: 0 0 0 0;
    outline: 0;
    background-color: #1a237e;
    color: white;
  }
`;

export default BtnLoginForm;
