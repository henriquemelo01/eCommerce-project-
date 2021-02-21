import react from "react";
import styled from "styled-components";

const MiddleContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center; // alinha em relação a linha
  align-items: center; // alinha em relação a coluna
`;

MiddleContainer.Content = styled.div`
  height: ${(props) => props.height || "50 %"};
  width: ${(props) => props.width || "340px"};
  padding: 20px;
  border: solid white 1px;
  border-radius: 1.5rem;
  background: ${(props) => props.background || "white"};
`;

export default function Middle({ children, background, height, width }) {
  return (
    <MiddleContainer>
      <MiddleContainer.Content
        background={background}
        height={height}
        width={width}
      >
        {children}
      </MiddleContainer.Content>
    </MiddleContainer>
  );
}
