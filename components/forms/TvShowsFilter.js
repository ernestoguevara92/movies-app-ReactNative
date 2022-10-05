import { useState } from 'react';
import { Select, Box, CheckIcon, Center, NativeBaseProvider, VStack, HStack } from 'native-base';

const TvShowsFilter = props => {
  const { fetchTvShows, onSelectChange } = props
  const [currentValue, setCurrentValue] = useState(null);

    
    if (currentValue === null) {
        fetchTvShows();
      setCurrentValue('popular');
    }

    return (<>
        <VStack space={2} width='50%' py={5} alignItems="center">
        {/* <Box maxW="300"> */}
        <HStack width='100%' space={2}>
          <Select selectedValue={currentValue} placeholder="Popular" minWidth="200" _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="4" />
        }} mt={1} onValueChange={itemValue => {
          onSelectChange(itemValue);
          setCurrentValue(itemValue);
          }}>
            <Select.Item label="Popular" value="popular" />
            <Select.Item label="Airing Today" value="airing_today" />
            <Select.Item label="Top Rated" value="top_rated" />
            <Select.Item label="On The Air" value="on_the_air" />
          </Select>
        </HStack>
        {/* </Box> */}
        </VStack>
        </>
    )  
}

export default TvShowsFilter;