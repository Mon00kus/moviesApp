import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { MovieDBMoviesResponse } from '../../../infrastructure/interfaces/movie-db.responses';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';
import { Movie } from '../../entities/movie.entity';


export const moviesTopRateUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {
    try {
      const upcoming = await fetcher.get<MovieDBMoviesResponse>('/top_rated');
      return  upcoming.results.map( MovieMapper.fromMovieDBResultToEntity);
    } catch (error) {
      console.log(error);
      throw new Error('Error fectching movies-upcoming');
    }
}