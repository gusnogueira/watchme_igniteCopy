import styled from 'styled-components';

export const Container = styled.div`
  grid-area: CT;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.primary};
  padding: 25px;
  height: 100vh;
  overflow-y: scroll; //todo o conteúdo que não couber, não mostra e habilita scroll

  ::-webkit-scrollbar { //estilizar o scrollbar
    width: 10px;
  }

  ::-webkit-scrollbar-thumb { //estilizar o scrollbar
    background-color: ${props => props.theme.colors.secondary};
    border-radius: 10px;
  }
  
  ::-webkit-scrollbar-track { //estilizar o scrollbar
    background-color: ${props => props.theme.colors.tertiary};
    border-radius: 10px;
  }

`;