import react from "react";
import styled from "styled-components";
import Menu from "../src/components/Menu";
import BtnLogin from "../src/components/Buttons/BtnLogin";
import BtnSignUp from "../src/components/Buttons/BtnSignUp";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

// Dúvida como defino o body pra cada uma das páginas separadamente ***
// const Body = styled.body`
//   background-color: black;
// `;

export default function About() {
  // itens é um array de objetos que contém o nome do item e o caminho

  return (
    <>
      <header>
        <Menu
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
        <BtnLogin>Log In</BtnLogin>
        <BtnSignUp>Create a free account</BtnSignUp>
      </header>
      <main>
        <h1>Faaala Cachazaaaaaress</h1>
      </main>
    </>
  );
}
