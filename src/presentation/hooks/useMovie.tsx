import { useEffect, useState } from 'react';
import * as  UseCases from '../../core/use-cases';
import { movieDBfetcher } from '../../config/adapters/movieDB.adapters';
import { FullMovie } from '../../core/entities/movie.entity';
import { Cast } from '../../core/entities/cast.entity';

export  const useMovie = ( movieId : number) => {

  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState<FullMovie>();
  const [cast, setCast] = useState<Cast[] | undefined>();
  
  

  useEffect(()=>{
    loadMovie();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);

  const loadMovie = async () => {
    setIsLoading(true);
    const fullMoviePromise = UseCases.getMovieByIdUseCase(movieDBfetcher, movieId);
    const castPromise = UseCases.getMovieCastUseCase(movieDBfetcher, movieId);

    const [fullMovie, cast] = await Promise.all([fullMoviePromise, castPromise]);

    setMovie(fullMovie);
    setCast(cast);
    setIsLoading(false);
    //console.log(cast);
  }
  
  return {
    isLoading,
    movie,
    cast,
  }
}