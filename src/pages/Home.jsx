import { useState,useEffect } from "react";
import Moviecard from "../components/Moviecard";
import "../css/Home.css";
import { searchMovies,getPopularMovies } from "../services/api" ; 


function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
      const popularMovies = await getPopularMovies();
      setMovies(popularMovies);
    } catch(err) {}
    finally {}
  }}, []);

  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
    setSearchQuery("");
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for a movie..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>
      <button type="submit" className="search-button">
        Search
      </button>
      <div className="movies-grid">
        {movies.map((movie) => (
          <Moviecard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
