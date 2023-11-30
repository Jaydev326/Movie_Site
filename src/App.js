import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=f84604d4';
// const API_KEY = 'api_key=f01894d2a38347d37b108f2129603b59';
// const BASE_URL='https://api.themoviedb.org/3';
// const API_URL =BASE_URL+'/discover/movie?sort_by=popularity.desc&'+API_KEY;

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
        <img src={SearchIcon} alt="SearchIcon" 
        onClick={(e)=>searchMovies(searchTerm)}/>
      </div>
      
      { //trinary operator to check if movies>0 rander MovieCard
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