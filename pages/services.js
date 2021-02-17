import react from "react";
import styled from "styled-components";
import Menu from "../src/components/Menu";
import MenuTst from "../src/components/Menu/MenuTst";
import BtnLogin from "../src/components/Buttons/BtnLogin";
import BtnSignUp from "../src/components/Buttons/BtnSignUp";

// Testando Display Flex

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export default function Services() {
  // itens é um array de objetos que contém o nome do item e o caminho

  return (
    <>
      <Header>
        <MenuTst
          itens={[
            { nome: "Product", path: "/" },
            { nome: "Pricing", path: "#" },
            { nome: "Sucess Stories", path: "#" },
            { nome: "Services", path: "#" },
            { nome: "About Us", path: "about" },
            { nome: "Resources", path: "#" },
          ]}
          disp="inline-block" // Define disposição do menu (Block, Inline-block ou Inline)
        />
        <div style={{ display: "flex", flexWrap: "wrap", marginRight: "25px" }}>
          <BtnLogin>Log In</BtnLogin>
          <BtnSignUp>Create a free account</BtnSignUp>
        </div>
      </Header>
      <main>
        <h1>Refazer página usando flex box </h1>
      </main>
    </>
  );
}
