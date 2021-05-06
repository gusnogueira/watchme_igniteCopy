import styled from 'styled-components';

export const Container = styled.div`
  grid-area: AS;
  background-color: ${props => props.theme.colors.secondary};
  padding: 0 30px;
`;

export const Header = styled.header`
  height: 70px;
  display: flex;
  align-items: center;
  margin-top: 40px;
`;

export const MenuContainer = styled.nav`
  display: flex;
  margin-top: 50px;
  flex-direction: column;
`;

export const MenuItemLink = styled.a`
  color: ${props => props.theme.colors.white};
  text-decoration: none;
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px;
  background-color: ${props => props.theme.colors.gray};
  font-size: 18px;
  border-radius: 5px;

  transition: opacity .3s; //add uma transição e coloca em qual efeito será
  
  &:hover{
    opacity: .7;
    color: #FAE800
  }

  > svg {
    font-size: 20px;
  } //pra mexer somente no svg
`;

export const TitleWatch = styled.h3`
  color: ${props => props.theme.colors.white};
  margin-left: 18%;
  font-size: 50px;
  color: #FAE800;
`;

export const TitleMe = styled.h3`
  color: ${props => props.theme.colors.white};
  font-size: 50px;

`;
