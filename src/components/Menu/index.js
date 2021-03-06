import React from "react";
import styled from "styled-components";
import Link from "next/link";

// ** Pensei que tinha que referenciar o link no componente`../../../pages/${}` entretanto a referência do mesmo é o local que esta "chamando" o componente

const MenuNav = styled.nav`
  font-family: Arial;
  font-weight: bolder;
  background-color: white;
  color: black;
  display: inline-block;
  margin: 30px 120px 30px 120px;

  ul {
  }

  li {
    display: inline-block;
    margin-left: 25px;
  }

  a {
    text-decoration-color: lightgray;
    text-decoration-thickness: 1.8px;
    opacity: 0.7;
  }

  a:hover {
    text-decoration-color: cyan;
    text-decoration-thickness: 2.8px;
    opacity: 1;
  }
  a:visited {
    color: black;
  }
`;

export default function Menu({ itens, disp }) {
  return (
    <>
      <MenuNav style={{ display: disp }}>
        <ul>
          {itens.map((item, i) => (
            <li key={`lista--${i}`}>
              <Link href={item.path}>
                <a>{item.nome}</a>
              </Link>
            </li>
          ))}
        </ul>
      </MenuNav>
    </>
  );
}
