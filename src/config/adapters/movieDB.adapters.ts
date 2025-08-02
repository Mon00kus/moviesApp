import { AxiosAdapter } from './http/axios.adapter';

export const movieDBfetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key:'4e001b994b1198717c1bebef5b4c5539',
    language: 'es'
  }
});

/* export const movieDBfetcher = (params?: Record<string, unknown>) =>
 new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key:'4e001b994b1198717c1bebef5b4c5539',
    language: 'es',
    ...params
  }
}); */