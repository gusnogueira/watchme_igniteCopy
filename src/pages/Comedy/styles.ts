import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 30px;
  padding-left: 30px;
`;

export const TitleContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const Gender = styled.h1`
  margin-left: 10px;
  font-weight: bold;
  color: #FAE800;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
  list-style: none;
`;