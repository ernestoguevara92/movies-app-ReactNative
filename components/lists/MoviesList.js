import { FlatList } from "native-base";
import MovieTvCard from "../listItems/MovieTvCard";

const MoviesList = props => {
    const { movies } = props;

    return (
        <FlatList
        data={movies}
        renderItem={({ item }) => (
            <MovieTvCard 
            image={item.poster_path} 
            title={item.title}
            popularity={item.popularity}
            releaseDate={item.release_date}
            />
        )}
        />
    )
}

export default MoviesList;