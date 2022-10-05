import { useState } from 'react';
import { getMovies } from '../../services/api';
import MoviesFilter from '../forms/MoviesFilter';
import { Container, Center } from 'native-base';
import MoviesList from '../lists/MoviesList';
import Loading from '../layout/Loading';

const MoviesTab = props => {
  const { navigation } = props;
    const [ isLoading, setIsLoading ] = useState(true);
    const [filter, setFilter] = useState('popular');
    const [movies, setMovies] = useState([]);

    const handleOnValueChange = filter => {
      setIsLoading(true);
      setFilter(filter);
      getMovies(filter).then(movies => {
        setMovies(movies)
        setIsLoading(false)
      })
      //console.log('handleOnValueChange FILTER: ', filter);
    }

    const fetchMovies= async () => {
      await getMovies(filter).then(movies => {
        setMovies(movies)
        setIsLoading(false)
      })
    }

    return (
      <Container ml='auto' mr='auto' width='100%'>
        <Center>
          <MoviesFilter fetchMovies={fetchMovies} onSelectChange={handleOnValueChange} />
          {isLoading ? <Loading /> : <MoviesList width='100%' movies={movies} navigation={navigation} />}
        </Center>
      </Container>
    );
  };

export default MoviesTab;