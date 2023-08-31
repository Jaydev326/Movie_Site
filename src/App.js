import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=f84604d4';

// const movie1={
//     "Title": "Batman Begins",
//     "Year": "2005",
//     "imdbID": "tt0372784",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
// }

const App = () => {
  const [movies, setMovies]=useState([]);
  const [searchTerm, setSearchTerm]=useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("avengers");
  }, []);

  return (
    <div className="app">
      <h1>MovieHouse</h1>

      <div className="search">
        <input type="text" placeholder="search for movies"
        value={searchTerm}
        onChange={(e)=>{setSearchTerm(e.target.value)}}
        />
        <img src={SearchIcon} alt="search" 
        onClick={(e)=>searchMovies(searchTerm)}/>
      </div>
      
      {
        movies?.length>0 ? (
          <div className="container">  
          {movies.map((movie)=>(      //map into 'movie'
            <MovieCard movie1={movie} />
            ))}       
          </div>
        ) :(
          <div className="empty">
            <h2>No Movies Found</h2>
          </div>
        )
      }
    </div>
  );
};
export default App;