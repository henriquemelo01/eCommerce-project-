import styled from "styled-components";
import react from "react";

const InputBase = styled.input`
  padding: 5px;
  display: block;
  width: 100%;
  height: 40px;
  margin-bottom: 5px;
  border-radius: 0.6rem;
  text-indent: 10px;

  ::placeholder {
    color: black;
  }
  /* Retira seleção do input  */
  &:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`;

export default InputBase;
