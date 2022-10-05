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
        searchQuery(search, filter).then(searchResults => {
          setSearchResults(searchResults);
        });
      }
    }

    const handleOnInputChange = search => {
      setSearch(search);
      searchQuery(search, filter).then(searchResults => {
        setSearchResults(searchResults)
      })
    }

    const fetchSearch= () => {
      searchQuery(search, filter).then(searchResults => {
        setSearchResults(searchResults)
      })
    }

    if (search && filter) {
      return (<Center>
        <Container>
           <SearchForm fetchSearch={fetchSearch} onInputChange={handleOnInputChange} onSelectChange={onSelectChange} />
           <SearchList searchResults={searchResults} navigation={navigation} />
        </Container>
      </Center>
      );
    } else {
      return (<Center>
        <Container>
          <Center>
            <SearchForm fetchSearch={fetchSearch} onInputChange={handleOnInputChange} onSelectChange={onSelectChange} />
          </Center>
          <Center>
             <Text>Please initiate a search</Text>
          </Center>
        </Container>
        </Center>
      );
    }
}

export default SearchTab;
