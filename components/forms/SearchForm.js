import { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Button, CheckIcon, FormControl, HStack, Icon, Input, Select, VStack } from 'native-base'

const SearchForm = props => {
  const { fetchSearch, onInputChange, onSelectChange } = props
  const [formData, setData] = useState()
  const [currentValue, setCurrentValue] = useState('multi');

  const onSubmit = () => {
    if (formData) {
    fetchSearch()
    }
  }

  return (
    <VStack space={2} width='100%' py={5}>
      <FormControl isRequired>
        <FormControl.Label>Search Movie/TV Show Name</FormControl.Label>
        <HStack width='100%' space={2}>
          <Input
            placeholder='i.e. Breaking Bad, Top Gun ...'
            variant='filled'
            bg='gray.200'
            px={3}
            width='85%'
            onChangeText={value => {
              onInputChange(value)
              setData(value)
            }}
            InputLeftElement={
              <Icon size={5} ml={2} color='gray.400' as={<Ionicons name='ios-search' />} />
            }
          />
        </HStack>
        <FormControl.Label>Search Filter</FormControl.Label>
        <HStack width='100%' space={2}>
          <Select selectedValue={currentValue} placeholder="Multi" minWidth="200" _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size="4" />
          }} mt={1} onValueChange={itemValue => {
            onSelectChange(itemValue);
            setCurrentValue(itemValue);
            }}>
              <Select.Item label="Multi" value="multi" />
              <Select.Item label="Movie" value="movie" />
              <Select.Item label="TV Show" value="tv" />
            </Select>
          <Button onPress={onSubmit} startIcon={<Icon as={Ionicons} name='ios-search' />}>
              Search
          </Button>
        </HStack>
      </FormControl>
    </VStack>
  )
}

export default SearchForm;