import React from 'react';
import { Text, View } from 'react-native';
import { Movie } from '../../../core/entities/movie.entity';
import { FlatList } from 'react-native-gesture-handler';
import { MoviePoster } from './MoviePoster';

interface Props {
  movies: Movie[];
  title?: string;
}

export const HorizontalCarousel = ({movies, title}: Props) => {
return (
  // eslint-disable-next-line react-native/no-inline-styles
  <View style= {{height: title ? 260: 220}}
  >
    {
      title && (
        <Text 
           // eslint-disable-next-line react-native/no-inline-styles
           style={{
            fontSize: 30,
            fontWeight: '300',
            marginLeft: 10,
            marginBottom: 10
           }}
        >
           {title}
        </Text> 
      )
    }
    <FlatList
      data={movies}
      renderItem= { ({item}) => (
        <MoviePoster movie={item} width={140} height={200} />
      )}
      keyExtractor={(item)=>item.id.toString()}
      horizontal={true}
    />
  </View>
)};