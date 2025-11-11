import { createContext, useState, useContext, useEffect, ReactNode } from "react";
import type { Movie } from "../types/movie";

/**
 * 电影 Context 类型定义
 * 定义全局共享的电影收藏管理功能
 */
interface MovieContextType {
  /** 收藏的电影列表 */
  favorites: Movie[];
  
  /** 添加电影到收藏夹 */
  addToFavorites: (movie: Movie) => void;
  
  /** 从收藏夹移除电影 */
  removeFromFavorites: (movieId: number) => void;
  
  /** 检查指定电影是否已收藏 */
  isFavorite: (movieId: number) => boolean;
}

const MovieContext = createContext<MovieContextType | undefined>(undefined);

export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error("useMovieContext must be used within a MovieProvider");
  }
  return context;
};

/**
 * MovieProvider 组件的 Props 接口
 */
interface MovieProviderProps {
  /** 子组件（接受任何可渲染的 React 内容） */
  children: ReactNode;
}

export const MovieProvider = ({ children }: MovieProviderProps) => {
  // 从 localStorage 初始化状态
  const [favorites, setFavorites] = useState<Movie[]>(() => {
    const storedFavs = localStorage.getItem("favorites");
    return storedFavs ? JSON.parse(storedFavs) : [];
  });

  // 监听 favorites 变化，自动保存到 localStorage
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (movie: Movie) => {
    setFavorites((prev) => [...prev, movie]);
  };

  const removeFromFavorites = (movieId: number) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  const isFavorite = (movieId: number): boolean => {
    return favorites.some((movie) => movie.id === movieId);
  };

  const value: MovieContextType = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  };

  return (
    <MovieContext.Provider value={value}>
      {children} {/* 渲染任何传入的子元素 */}
      </MovieContext.Provider>
  );
};
