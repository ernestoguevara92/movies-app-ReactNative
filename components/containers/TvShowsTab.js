import { useState } from 'react';
import { getTvShows } from '../../services/api';
import TvShowsFilter from '../forms/TvShowsFilter';
import { Container, Center } from 'native-base';
import TvShowsList from '../lists/TvShowsList';
import Loading from '../layout/Loading';

const TvShowsTab = ({navigation}) => {
    const [ isLoading, setIsLoading ] = useState(true);
    const [filter, setFilter] = useState('popular');
    const [tvShows, setTvShows] = useState([]);

    const handleOnValueChange = filter => {
        setIsLoading(true);
      setFilter(filter);
      getTvShows(filter).then(tvShows => {
        setTvShows(tvShows)
        setIsLoading(false)
      })
    }

    const fetchTvShows = () => {
        getTvShows(filter).then(tvShows => {
            setTvShows(tvShows)
            setIsLoading(false)
          })
    }

    return (
      <Container ml='auto' mr='auto'>
        <Center>
          <TvShowsFilter fetchTvShows={fetchTvShows} onSelectChange={handleOnValueChange} />
            {isLoading ? <Loading /> : <TvShowsList width='100%' tvShows={tvShows} navigation={navigation} />}
        </Center>
      </Container>
    );
  };

export default TvShowsTab;