import { useState,useEffect } from "react"
import { getPopularMovies, searchMovies } from "../services/api";
import "../css/Home.css"
import MovieCard from "../components/MovieCard"

function Home() {
   const [searchQuery, setSearchQuery]= useState("");
   const [movies, setMovie] = useState([])
   const [error, seterror] = useState(null)
   const [loading, setLoading] = useState(true)
   
   useEffect(() => {
      const loadPopularMovies = async () => {
        try{
          const popularMovies = await getPopularMovies()
          setMovie(popularMovies)
        }catch(err){
          console.log(err);
          seterror('Failed to load movies...')
        }
        finally{
          setLoading(false)
        }
      }
      loadPopularMovies()
   },[])
  
const handleSearch = async (e) => {
    e.preventDefault()
   if(!searchQuery.trim()) return
   if(loading) return
    setLoading(true)
    try{
      const searchResults = await searchMovies(searchQuery)
      setMovie(searchResults)
      seterror(null)
    }catch (err) {
      console.log(err);
      seterror("Failed to search movies...")
    } finally{
      setLoading(false)
    }
}

  return <div className="home">
    <form onSubmit={handleSearch} className="search-form">
      <input 
       type="text" 
       placeholder="Search for movie..."  
       className="search-input"
       value={searchQuery}
       onChange={(e)=> setSearchQuery(e.target.value)}
       />
       <button type="submit" className="search-button">Search</button>
    </form>

    {error && <div className="error-message">{error}</div>}

    {loading ? (<div className="loading">Loading...</div>) : (
    <div className="movies-grid">
      {movies.map((movie) => 
        <MovieCard movie={movie} key={movie.id}/>
        )}
    </div>
   )}
  </div>
}
export default Home