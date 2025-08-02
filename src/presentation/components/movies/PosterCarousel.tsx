import { Text, View } from 'react-native';
import { Movie } from '../../../core/entities/movie.entity';
import { ScrollView } from 'react-native-gesture-handler';
import { MoviePoster } from './MoviePoster';

interface Props {
  movies: Movie[];
  title: string;
  height?: number;
}

export const PosterCarousel = ({ height = 460, movies, title = '' }: Props) => {
  return (
    <View style={{ height: height }}>
      {title && (
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            fontSize: 30,
            fontWeight: '300',
            marginLeft: 10,
            marginBottom: 10,
          }}
        >
          {title}
        </Text>
      )}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {movies.map(movie => (
          <MoviePoster key={movie.id} movie={movie} />
        ))}
      </ScrollView>
    </View>
  );
};
