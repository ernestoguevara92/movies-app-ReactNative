import { Box, Center, Divider, VStack, HStack, Image, Heading, Text, Button } from 'native-base'
import { IMAGE_URL } from '../../services/api_config'

const MovieTvCard = props => {
    const { id, image, title, popularity, releaseDate, overview, navigation} = props 


    return (
        <Box borderRadius='xs' pb={1} mb={2} backgroundColor="#e7e5e4">
            <HStack>
                <Box width='35%'>
                    <Center>
                        <Image alt={title} source={{uri: IMAGE_URL+image}} size="lg" resizeMode="cover" />
                    </Center>
                </Box>
            <VStack ml={1}>
                <Heading size='sm'>{title}</Heading>
                <Text>Popularity: {popularity}</Text>
                <Text>Release Date: {releaseDate}</Text>
                <Box>
                    <Button variant='solid' size="xs"
                    onPress={() => navigation.navigate('Details', {
                        title,
                        image,
                        overview,
                        popularity,
                        releaseDate
                    })}
                    >More Details</Button>
                </Box>
            </VStack>
            </HStack>
        </Box>
    )
}
export default MovieTvCard