import { useState } from 'react';
import { getMovies } from '../../services/api';
import MoviesFilter from '../forms/MoviesFilter';
import { Container, Center } from 'native-base';
import MoviesList from '../lists/MoviesList';
import Loading from '../layout/Loading';

const MoviesTab = () => {
    const [ isLoading, setIsLoading ] = useState(false);
    const [filter, setFilter] = useState('popular');
    const [movies, setMovies] = useState([]);

    const handleOnValueChange = filter => {
      setFilter(filter);
      getMovies(filter).then(movies => {
        setMovies(movies)
      })
      //console.log('handleOnValueChange FILTER: ', filter);
    }

    const fetchMovies= () => {
      getMovies(filter).then(movies => {
        setMovies(movies)
      })
    }

    return (
      <Container ml='auto' mr='auto'>
        <Center>
          <MoviesFilter fetchMovies={fetchMovies} onSelectChange={handleOnValueChange} />
          {isLoading ? <Loading /> : <MoviesList movies={movies} />}
        </Center>
      </Container>
    );
  };

export default MoviesTab;