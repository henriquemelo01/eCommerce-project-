import react from "react";
import styled from "styled-components";

const MiddleContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center; // alinha em relação a linha
  align-items: center; // alinha em relação a coluna
`;

MiddleContainer.Content = styled.div`
  height: 52%;
  width: 340px;
  padding: 20px;
  border: solid white 1px;
  border-radius: 1.5rem;
  background: ${(props) => props.background || "white"};
`;

export default function Middle({ children, background }) {
  return (
    <MiddleContainer>
      <MiddleContainer.Content background={background}>
        {children}
      </MiddleContainer.Content>
    </MiddleContainer>
  );
}
