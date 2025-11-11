import type { Movie, ApiResponse } from "../types/movie";

const API_KEY = "a488d29f9599876635aed088452bc017";
const BASE_URL = "https://api.themoviedb.org/3";

/**
 * 获取热门电影列表
 * 
 * 从 TMDB API 获取当前热门的电影列表
 * 
 * @returns {Promise<Movie[]>} 返回热门电影数组的 Promise
 * @throws {Error} 当网络请求失败或 API 返回错误时抛出异常
 * 
 */
export const getPopularMovies = async (): Promise<Movie[]> => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data: ApiResponse = await response.json();
  return data.results;
};

/**
 * 搜索电影
 * 
 * 根据关键词搜索电影，支持中文搜索
 * 
 * @param {string} query - 搜索关键词（会自动进行 URL 编码）
 * @returns {Promise<Movie[]>} 返回匹配的电影数组的 Promise
 * @throws {Error} 当网络请求失败或 API 返回错误时抛出异常
 * 
 */
export const searchMovies = async (query: string): Promise<Movie[]> => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data: ApiResponse = await response.json();
  return data.results;
};
