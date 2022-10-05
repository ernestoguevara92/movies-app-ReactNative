import {Box, Image, Heading, Text} from 'native-base';
import {IMAGE_URL} from '../../services/api_config';

const DetailsContainer = ({navigation, route}) => {
    const { title, image, overview, popularity, releaseDate } = route.params

    return (
        <Box>
            <Heading size='lg'>{title}</Heading>
            <Image alt={title} source={{uri: IMAGE_URL+image}} size="xl" resizeMode="cover" />
            <Text>{overview}</Text>
            <Text>Popularity: {popularity}</Text>
            <Text>Release Date: {releaseDate}</Text>
        </Box> 
    )
}

export default DetailsContainer