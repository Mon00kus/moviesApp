import { useEffect, useState } from 'react';
import { Movie } from '../../core/entities/movie.entity';

import *  as UseCases  from '../../core/use-cases';
import { movieDBfetcher } from '../../config/adapters/movieDB.adapters';

let popularPageNumber = 1;

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
      const upComingPromise = UseCases.moviesUpcomingUseCase(movieDBfetcher);

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
    /*     await UseCases.moviesNowPlayingUseCase(movieDBfetcher),
        await UseCases.moviesPopularUseCase(movieDBfetcher),
        await UseCases.moviesTopRateUseCase(movieDBfetcher),
        await UseCases.moviesUpcomingUseCase(movieDBfetcher) */
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
    upComing,

    //Methods
    popularNextPage: async()=>{
      popularPageNumber++;
      const popularMovies = await UseCases.moviesPopularUseCase(movieDBfetcher, {
        page: popularPageNumber,
        limit:1
      });
   /*    const popularMovies = await UseCases.moviesPopularUseCase(
        movieDBfetcher({
          page: popularPageNumber
        })
      ) */
      setPopular( prev => [...prev, ...popularMovies] ); // Considerar la actualizacion del SetState
    }
  };
}