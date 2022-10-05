import { useState } from 'react';
import { getTvShows } from '../../services/api';
import TvShowsFilter from '../forms/TvShowsFilter';
import { Container, Center } from 'native-base';

const TvShowsTab = () => {
    const [filter, setFilter] = useState('popular');
    const [tvShows, setTvShows] = useState([]);

    const handleOnValueChange = filter => {
      setFilter(filter);
      getTvShows(filter)
      //console.log('handleOnValueChange FILTER: ', filter);
    }

    const fetchTvShows = () => {
      getTvShows(filter)
    }

    return (
      <Container>
        <Center px={4}>
          <TvShowsFilter fetchTvShows={fetchTvShows} onSelectChange={handleOnValueChange} />
        </Center>
        {/* <Center px={4}>
          <MoviesFilter />
        </Center> */}
      </Container>
    );
  };

export default TvShowsTab;