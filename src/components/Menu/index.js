import React from "react";
import styled from "styled-components";

const MenuNav = styled.nav`
  font-family: Arial;
  font-weight: bolder;
  background-color: white;
  color: black;
  display: inline-block;
  margin: 15px 120px 15px 120px;

  ul {
  }

  li {
    display: inline-block;
    margin-left: 25px;
  }

  a {
    text-decoration-color: lightgray;
    text-decoration-thickness: 1.8px;
  }

  a:hover {
    text-decoration-color: cyan;
    text-decoration-thickness: 2.8px;
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
              <a href={item.path}>{item.nome}</a>
            </li>
          ))}
        </ul>
      </MenuNav>
    </>
  );
}
