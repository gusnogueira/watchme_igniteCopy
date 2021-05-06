import React from 'react';

import MovieCard from '../../components/MovieCard';

import Movies from '../../repositories'

import {Container, Content, TitleContainer, Gender} from './styles';

const Comedy: React.FC = () => {
  const data = Movies.filter(movie => movie.Genre_id === 2);

  return (

    <Container>
      <TitleContainer>
        <h1>Categoria:</h1>
        <Gender>Comédia</Gender>
      </TitleContainer>
      <Content>
      {//para cada item em data gera um componente na tela
          data.map(item => (
        <MovieCard
          title= {item.Title}
          poster= {item.Poster}
          rating={item.Ratings[0].Value}
          runtime={item.Runtime}
        />
        ))
      }
      </Content>
    </Container>
  );
}

export default Comedy;