import { useState } from 'react';
import { Select, Box, CheckIcon, Center, NativeBaseProvider } from 'native-base';
import { getMovies } from '../../services/api';

export const selectMovieFilter = () => {
    const [filter, setFilter] = useState("popular");
    getMovies(filter);
    console.log('FILTER: ', filter);
    return <><Center>
        <Box maxW="300">
          <Select selectedValue={filter} minWidth="200" _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="4" />
        }} mt={1} onValueChange={itemValue => setFilter(itemValue)}>
            <Select.Item label="Popular" value="popular" />
            <Select.Item label="Now Playing" value="now_playing" />
            <Select.Item label="Top Rated" value="top_rated" />
            <Select.Item label="Upcoming" value="upcoming" />
          </Select>
        </Box>
      </Center></>;
  };