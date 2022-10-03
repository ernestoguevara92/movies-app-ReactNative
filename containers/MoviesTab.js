import { useState } from 'react';
import { getMovies } from '../services/api';
import selectMovieFilter from '../forms/MoviesFilter';
import { Container } from 'native-base';

const MoviesTab = () => {
    const [filter, setFilter] = useState("popular");
    const [movies, setMovies] = useState([]);
    
    const fetchMovies = filter => {
        getMovies(filter).then(movies => {
            setMovies(movies);
        });
    }

    const handleOnValueChange = filter => {
      setFilter(filter);
    }

    console.log('FILTER: ', filter);

    return (
      <Container>
        <Center px={4}>
          <selectMovieFilter fetchMovies={fetchMovies} onValueChange={handleOnValueChange} />
        </Center>
      </Container>
    );
  };