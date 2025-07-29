import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { MovieDBMoviesResponse } from '../../../infrastructure/interfaces/movie-db.responses';
import { MovieMapper } from '../../../infrastructure/mapppers/movie.mapper';
import { Movie } from '../../entities/movie.entity';

export const moviesUpcomingUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {
    try {
      const upcoming = await fetcher.get<MovieDBMoviesResponse>('/upcoming');
      return  upcoming.results.map( MovieMapper.fromMovieDBResultToEntity);
    } catch (error) {
      console.log(error);
      throw new Error('Error fectching movies-upcoming');
    }
}