import styled from 'styled-components';

export const Container = styled.div`
position: relative;
cursor: pointer;
transition: all 0.3s;

&:hover { //aplica o efeito sempre que o mouse passar por cima
  opacity: 0.7;
  transform: translateY(-5px);
}

  img {
    width: 14.31rem;
    height: 21.25rem;
    border-radius: 5px;
  }

  > div {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 14.31rem;
    height: 21.25rem;

    display: flex;
    justify-content: center;
    background: rgba(31, 34, 41, 0.4);

    .movie-info {
      max-width: 12.31rem;
      width: 100%;
      
      display: flex;
      flex-direction: column;
  
      > span {
        font-weight: 600;
        font-size: 1rem;
        color: #fbfbfb;
  
        margin-top: auto;
        margin-bottom: 0.5rem;
      }
  
      .meta {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
  
        margin-bottom: 1rem;
  
        div {
          display: flex;
          align-items: center;
  
          font-weight: 600;
          color: '#FFF';
  
          svg {
            color: #FAE800;
            margin-right: 0.5rem;
          }
        }
      }
    }
  }

`;

