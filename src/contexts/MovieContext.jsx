import {  createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({children}) => {
  // ✅ 使用惰性初始化，直接从 localStorage 读取初始值
  const [favorites, setFavorites] = useState(() => {
    const storedFavs = localStorage.getItem("favorites")
    return storedFavs ? JSON.parse(storedFavs) : []
    //     ^^^^^^^^^^  正确检查 storedFavs 是否存在
  })
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  },[favorites])
  const addToFavorites = (movie) => {
    setFavorites(prev => [...prev, movie])
  }
    const removeFromFavorites = (movieId) => {
    setFavorites(prev =>prev.filter(movie => movie.id !== movieId))
  }
   const isFavorite = (movieId) => {
    return favorites.some(movie => movie.id === movieId)
   } 

   const value = {
      favorites,
      addToFavorites,
      removeFromFavorites,
      isFavorite
   }
  return <MovieContext.Provider value={value}>
    {children}
  </MovieContext.Provider>
}