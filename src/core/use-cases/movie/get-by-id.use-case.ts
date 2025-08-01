import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { MovieDBMovie } from '../../../infrastructure/interfaces/movie-db.responses';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';
import { FullMovie } from '../../entities/movie.entity';

export const getMovieByIdUseCase = async (
  fetcher : HttpAdapter, 
  movieId : number   
) : Promise<FullMovie> => {
  try {    
    const movie = await fetcher.get<MovieDBMovie>(`/${movieId}`);
    const fullMovie = MovieMapper.fromMovieDbToEntity(movie);
    return fullMovie;
  } catch (error) {
    throw new Error(`Cant get movie by id: ${movieId}`);
  }
}