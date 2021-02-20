import react from "react";
import styled from "styled-components";

const BtnLoginForm = styled.button`
  display: block;
  width: 100%;
  height: 35px;
  margin-bottom: 5px;
  border: black 1px solid;
  border-radius: 0.6rem;
  color: white;
  background-color: #e0e0e0;
  color: black;
  font-weight: bold;
  transition: transform 0.5s;
  :focus,
  :hover {
    box-shadow: 0 0 0 0;
    outline: 0;
    background-color: #4a148c; //#4a148c
    color: white;
    box-shadow: 0 0 10px #4a148c;
    // Animação - Subir botão
    transform: translate(0px, -2px);
    translate: transform 0.5;
  }
`;

export default BtnLoginForm;
