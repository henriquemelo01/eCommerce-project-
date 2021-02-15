import React from "react";
import styled from "styled-components";

const Menu = styled.nav`
  // Propriedades
  background-color: ${({ theme }) => theme.colors.bg};
  color: white;
`;

Menu.ul = styled.ul`
  padding-left: 10px;
`;

Menu.li = styled.li`
  display: inline-block;
  margin: 0 10px;
`;

export default Menu;
