import { useState } from 'react';
import { searchQuery } from "../../services/api";
import { Container, Center, Text } from 'native-base';
import SearchForm from '../forms/SearchForm';

const SearchTab = () => {
    const [search, setSearch] = useState();
    const [filter, setFilter] = useState('multi');

    const onSelectChange = filter => {
      setFilter(filter);
    }

    const handleOnInputChange = search => {
      setSearch(search);
    }

    const fetchSearch= () => {
      searchQuery(search, filter)
    }

    if (search && filter) {
      return (
        <Container>
           <SearchForm fetchSearch={fetchSearch} onInputChange={handleOnInputChange} onSelectChange={onSelectChange} />
           <Text>Render Query Results</Text>
        </Container>
      );
    } else {
      return (
        <Container>
          <Center>
            <SearchForm fetchSearch={fetchSearch} onInputChange={handleOnInputChange} onSelectChange={onSelectChange} />
          </Center>
          <Center>
             <Text>Please initiate a search</Text>
          </Center>
        </Container>
      );
    }
}

export default SearchTab;
