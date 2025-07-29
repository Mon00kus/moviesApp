import { useEffect, useState } from 'react';
import { Movie } from '../../core/entities/movie.entity';

import *  as UseCases  from '../../core/use-cases';
import { movieDBfetcher } from '../../config/adapters/movieDB.adapters';


export const useMovies = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);
  const [topRated, setTopRated ] = useState<Movie[]>([]);
  const [upComing, setUpComing] = useState<Movie[]>([]);    
  
  useEffect(() => {    
    initialLoad();
  }, [])

  const initialLoad = async () => {
      setIsLoading(true);

      const nowPlayingPromise = UseCases.moviesNowPlayingUseCase(movieDBfetcher);
      const popularPromise = UseCases.moviesPopularUseCase(movieDBfetcher);
      const topRatedPromise = UseCases.moviesTopRateUseCase(movieDBfetcher);
      const upComingPromise = UseCases.moviesPopularUseCase(movieDBfetcher);      
      const [
        nowPlayingMovies, 
        popularMovies, 
        TopRatedMovies, 
        upComingMovies 
      ] = await Promise.all([
        nowPlayingPromise, 
        popularPromise , 
        topRatedPromise, 
        upComingPromise
      ]);
      setNowPlaying(nowPlayingMovies);
      setPopular(popularMovies);
      setTopRated(TopRatedMovies);
      setUpComing(upComingMovies);

      setIsLoading(false);

      console.log({nowPlayingMovies, 
        popularMovies, 
        TopRatedMovies, 
        upComingMovies});
  };
  
  return{
    isLoading,
    nowPlaying,
    popular,
    topRated,
    upComing
  };
}