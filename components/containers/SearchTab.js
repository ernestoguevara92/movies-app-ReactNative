import { useState } from 'react';
import { searchQuery } from "../../services/api";
import { Container, Center } from 'native-base';
import SearchForm from '../forms/SearchForm';

const SearchTab = () => {
    const [search, setSearch] = useState();
    // const [movies, setMovies] = useState([]);

    const handleOnInputChange = search => {
      setSearch(search);
    }

    const fetchSearch= () => {
      searchQuery(search)
    }

    return (
      <Container>
        <Center px={4}>
          <SearchForm fetchSearch={fetchSearch} onInputChange={handleOnInputChange} />
        </Center>
        {/* <Center px={4}>
          <MoviesFilter />
        </Center> */}
      </Container>
    );
}

export default SearchTab;
