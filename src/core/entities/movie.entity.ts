
export interface Movie {
  id: number;
  title: string;
  description: string; //overview
  releaseDate: Date;
  rating: number;
  poster: string; //poster_path"
  backdrop: string; //backdrop_path
}

export interface FullMovie extends Movie {
  genres : string[];
  duration : number;
  budget : number;
  originalTitle : string;
  productionCompanies : string[];
}