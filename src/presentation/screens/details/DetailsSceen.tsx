/* import { useRoute } from '@react-navigation/native'; */
import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { Text } from 'react-native';
import { RootStackParams } from '../../navigation/StackNavigator';
import { useMovie } from '../../hooks/useMovie';
import { MovieHeader } from '../../components/movie/MovieHeader';
import { MovieDetails } from '../../components/movie/MovieDetails';
import { ScrollView } from 'react-native-gesture-handler';

interface Props extends StackScreenProps<RootStackParams, 'Details'>{};

export const DetailsSceen = ({ route } : Props) => {
const { movieId } = route.params;
//const {movieId} = useRoute().params;
/* console.log({movieId}); */
const { isLoading, movie, cast = [] } = useMovie(movieId);

if (isLoading){
  return <Text>Loading...</Text>
}

return (
  <ScrollView >
     <MovieHeader 
        originalTitle = { movie!.originalTitle } 
        title = {movie!.title}
        poster = {movie!.poster}
      />
     <MovieDetails 
        movie = {movie!}
        cast={cast}
     />
  </ScrollView>
)};