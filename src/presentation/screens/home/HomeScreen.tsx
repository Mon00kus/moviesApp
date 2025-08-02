import React from 'react';
import { Text, View } from 'react-native';
import { useMovies } from '../../hooks/useMovies';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PosterCarousel } from '../../components/movies/PosterCarousel';
import { HorizontalCarousel } from '../../components/movies/HorizontalCarousel';

export const HomeScreen = () => {

  const { top } = useSafeAreaInsets();

  const { isLoading, nowPlaying, popular, topRated, upComing, popularNextPage } = useMovies();

  if (isLoading){
    return (<Text>Cargando...</Text>)
  }

  return (
    <ScrollView>
      <View 
        // eslint-disable-next-line react-native/no-inline-styles
        style= {{marginTop: top + 20, paddingBottom: 30}}
      >
        {/* Principal */}
        <PosterCarousel 
          movies={nowPlaying}
          title="Cartelera"
        />
        {/* Populares */}
        <HorizontalCarousel 
          movies={popular}
          title="Populares"
  /*         loadNextPage={()=>console.log('FIN ALCANZADO')} */
          loadNextPage={popularNextPage}
        />
        {/* Mejor calificadas */}
        <HorizontalCarousel 
          movies={topRated}
          title="Mejor calificadas"
        />
        {/* Proximas en salir */}
        <HorizontalCarousel 
          movies={upComing}
          title="Proximas"
        />
      </View>
    </ScrollView>
  )
};