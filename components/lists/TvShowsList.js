import { FlatList } from "native-base";
import MovieTvCard from "../listItems/MovieTvCard";

const TvShowsList = props => {
    const { navigation, tvShows } = props;

    return (
        <FlatList
        data={tvShows}
        renderItem={({ item }) => (
            <MovieTvCard 
            id={item.id}
            image={item.backdrop_path} 
            title={item.name}
            popularity={item.popularity}
            releaseDate={item.first_air_date}
            overview={item.overview}
            navigation={navigation}
            />
        )}
        />
    )
}

export default TvShowsList;