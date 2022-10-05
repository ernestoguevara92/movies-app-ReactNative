import { FlatList } from "native-base";
import MovieTvCard from "../listItems/MovieTvCard";

const SearchList = props => {
    const { navigation, searchResults } = props;

    // const image = searchResults.media_type === 'movie' ? item.poster_path : item.backdrop_path;
    // const title = searchResults.media_type === 'movie' ? item.title : item.name;
    // const releaseDate = searchResults.media_type === 'movie' ? item.release_date : item.first_air_date;

    return (
        <FlatList
        data={searchResults}
        renderItem={({ item }) => (
            <MovieTvCard 
            id={item.id}
            image={item.poster_path}
            title={item.title}
            popularity={item.popularity}
            releaseDate={item.release_date}
            overview={item.overview}
            navigation={navigation}
            />
        )}
        />
    )
}

export default SearchList;