import { Star, Clock } from 'react-feather';

import { Container } from './styles';

interface IMovieCardProps {
  title: string;
  poster: string;
  rating: string;
  runtime: string;
}

const MovieCard: React.FC<IMovieCardProps> = ({
  title,
  poster,
  rating,
  runtime
}) => {
  return (
    <Container>
      <img
        src={poster}
        alt={title}
      />

      <div>
        <div className="movie-info">
          <span>{title}</span>
          <div className="meta">
            <div>
              <Star /> {rating}
            </div>

            <div>
              <Clock /> {runtime}
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default MovieCard;