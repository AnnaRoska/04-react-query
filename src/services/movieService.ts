import axios from "axios";
import type { Movie } from '../types/movie';
const tmdbToken = import.meta.env.VITE_TMDB_TOKEN;

export interface MoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const response = await axios.get<MoviesResponse>("https://api.themoviedb.org/3/search/movie", {
    params: {
      query,
      include_adult: false,
    },
headers: {
    Authorization: `Bearer ${tmdbToken}`,
  },
  });
  return response.data.results;
};

export default fetchMovies;
