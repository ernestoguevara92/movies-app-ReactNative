import { useState } from 'react';
import { Select, Box, CheckIcon, Center, NativeBaseProvider, VStack, HStack } from 'native-base';

const selectMovieFilter = props => {
    const { onValueChange } = props;
    const [selectValue, setValue] = useState("popular");

    return (
        <VStack space={2} width='50%' py={5} alignItems="center">
        {/* <Box maxW="300"> */}
        <HStack width='100%' space={2}>
          <Select selectedValue={selectValue} minWidth="200" _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="4" />
        }} mt={1} onValueChange={itemValue => setValue(itemValue)}>
            <Select.Item label="Popular" value="popular" />
            <Select.Item label="Now Playing" value="now_playing" />
            <Select.Item label="Top Rated" value="top_rated" />
            <Select.Item label="Upcoming" value="upcoming" />
          </Select>
        </HStack>
        {/* </Box> */}
        </VStack>
    )  
}

export default selectMovieFilter;