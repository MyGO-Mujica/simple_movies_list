const API_KEY = "a488d29f9599876635aed088452bc017";
const BASE_URL = "https://api.themoviedb.org/3";

// 电影数据类型定义
export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  overview: string;
  vote_average: number;
  backdrop_path: string;
}

// API 响应类型
interface ApiResponse {
  results: Movie[];
  page: number;
  total_pages: number;
  total_results: number;
}

export const getPopularMovies = async (): Promise<Movie[]> => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data: ApiResponse = await response.json();
  return data.results;
};

export const searchMovies = async (query: string): Promise<Movie[]> => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data: ApiResponse = await response.json();
  return data.results;
};
