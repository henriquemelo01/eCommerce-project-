import react from "react";
import styled from "styled-components";

const BtnLogin = styled.button`
  padding: 12px 16px;
  border: solid black 2px;
  border-radius: 0.5rem;
  font-family: Arial;
  font-weight: bolder;
  &:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`;

export default BtnLogin;
