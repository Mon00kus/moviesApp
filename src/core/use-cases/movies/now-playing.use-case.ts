import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { MovieDBMoviesResponse } from '../../../infrastructure/interfaces/movie-db.responses';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';
import { Movie } from '../../entities/movie.entity';

export const moviesNowPlayingUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {
  try {
    
    const nowPlaying = await fetcher.get<MovieDBMoviesResponse>('/now_playing');
    
   // return nowPlaying.results.map( result => MovieMapper.fromMovieDBResultToEntity(result) ) -> They are the same
    return nowPlaying.results.map( MovieMapper.fromMovieDBResultToEntity );

  } catch (error) {
    console.log(error);
    throw new Error('Error fectching movies-Now Playing');
  }
}