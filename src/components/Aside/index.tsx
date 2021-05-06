import React from 'react';
import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp
} from 'react-icons/md';

import { Container, Header, MenuContainer, MenuItemLink, TitleWatch, TitleMe } from './styles';

const Aside: React.FC = () => {
  return (
    <Container>
      <Header>
        <TitleWatch>Watch</TitleWatch>
        <TitleMe>Me</TitleMe>
      </Header>
      <MenuContainer>
        <MenuItemLink href="/action">
          <MdDashboard/>
          Ação
        </MenuItemLink>
        <MenuItemLink href="/comedy">
          <MdArrowUpward/>
          Comédia
        </MenuItemLink>
        <MenuItemLink href="/documentary">
          <MdArrowDownward/>
          Documentário
        </MenuItemLink>
        <MenuItemLink href="/drama">
          <MdExitToApp/>
          Drama
        </MenuItemLink>
        <MenuItemLink href="/horror">
          <MdExitToApp/>
          Terror
        </MenuItemLink>
        <MenuItemLink href="/family">
          <MdExitToApp/>
          Família
        </MenuItemLink>

      </MenuContainer>
    </Container>
  );
}

export default Aside;