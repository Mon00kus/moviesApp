import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { MovieDbCastResponse } from '../../../infrastructure/interfaces/movie-db.responses';
import { CastMapper } from '../../../infrastructure/mappers/cast.mapper';
import { Cast } from '../../entities/cast.entity';

export const getMovieCastUseCase = async (fetcher: HttpAdapter, movieId: number): Promise<Cast[]>  => {
  try {

    const {cast} = await fetcher.get<MovieDbCastResponse>(`/${movieId}/credits`);
    const actors = cast.map((actor)=>CastMapper.fromMovieDbCastToEntity(actor));
    //const actors = cast.map(CastMapper.fromMovieDbCastToEntity) -> es lo mismo
    return actors;
    
  } catch (error) {
    throw new Error(`Cant get  movie Cast ${movieId}`)
  }
}