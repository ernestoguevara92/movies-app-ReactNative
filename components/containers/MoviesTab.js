import { useState } from 'react';
import { getMovies } from '../../services/api';
import MoviesFilter from '../forms/MoviesFilter';
import { Container, Center } from 'native-base';

const MoviesTab = () => {
    const [filter, setFilter] = useState("popular");
    const [movies, setMovies] = useState([]);

    const handleOnValueChange = filter => {
      setFilter(filter);
      getMovies(filter)
      //console.log('handleOnValueChange FILTER: ', filter);
    }

    const fetchMovies= () => {
      getMovies(filter)
    }

    return (
      <Container>
        <Center px={4}>
          <MoviesFilter fetchMovies={fetchMovies} onSelectChange={handleOnValueChange} />
        </Center>
        {/* <Center px={4}>
          <MoviesFilter />
        </Center> */}
      </Container>
    );
  };

export default MoviesTab;