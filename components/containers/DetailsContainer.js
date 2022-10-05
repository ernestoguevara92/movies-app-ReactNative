import {Box, Image, Heading, Text, VStack, HStack, Center} from 'native-base';
import {IMAGE_URL} from '../../services/api_config';

const DetailsContainer = ({navigation, route}) => {
    const { title, image, overview, popularity, releaseDate } = route.params

    return (<Center>
        <Box p={2}>
            <VStack space={2} justifyContent="center" alignItems="center">
            <Heading size='lg'>{title}</Heading>
            <Image alt={title} source={{uri: `https://image.tmdb.org/t/p/original${image}`}}  width='100%' size="2xl" resizeMode="cover"/>
            <Text>{overview}</Text>
            <HStack>
            <Text p={2} fontWeight='bold' >Popularity: {popularity}</Text>
            <Text p={2} fontWeight='bold'>Release Date: {releaseDate}</Text>
            </HStack>
            </VStack>
        </Box> 
    </Center>
    )
}

export default DetailsContainer