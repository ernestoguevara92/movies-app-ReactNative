import { useState } from 'react';
import { searchQuery } from "../../services/api";
import { Container, Center, Text } from 'native-base';
import SearchForm from '../forms/SearchForm';
import SearchList from '../lists/SearchList';

const SearchTab = props => {
    const { navigation } = props;
    const [search, setSearch] = useState();
    const [filter, setFilter] = useState('multi');
    const [searchResults, setSearchResults] = useState([]);

    const onSelectChange = filter => {
      setFilter(filter);
      if (search) {
        searchQuery(search, filter).then(results => {
          setSearchResults(results);
        });
      }
    }

    const handleOnInputChange = search => {
      setSearch(search);
      searchQuery(search, filter).then(results => {
        setSearchResults(results)
      })
    }

    const fetchSearch= () => {
      searchQuery(search, filter).then(results => {
        setSearchResults(results)
      })
    }

    if (search && filter) {
      return (
        <Container>
           <SearchForm fetchSearch={fetchSearch} onInputChange={handleOnInputChange} onSelectChange={onSelectChange} />
           <SearchList searchResults={searchResults} navigation={navigation} />
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
