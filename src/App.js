import { useEffect, useState } from 'react';
import SearchIcon from './search.svg';
import './App.css';
import MovieCard from './MovieCard';
// 261922c1
function App() {
  const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=261922c1';


        const searchMovie = async(title)=>{
        const response = await fetch(` ${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);  }

const[movies, setMovies]=useState([]);
const[searchTerm, setSearchTerm]= useState('');

        useEffect(()=>{
        searchMovie('Spiderman');
        }, []);

  return (
    <div className='app'>
<h1>MovieLands</h1>
<div className='search'>
  <input 
      placeholder='search for movies'
      value={searchTerm}
      onChange={(e)=>setSearchTerm(e.target.value)}
  />
  <img
  src={SearchIcon}
  alt = "search"
  onClick={()=>searchMovie(searchTerm)}
  />
</div>
{
movies.length > 0?(
<div className='container'>
 {movies.map((movie)=>(
  <MovieCard movie={movie}/>
 ))}
</div>
 ):(
  <div className='empty'>
    <h1>No movies found</h1>
  </div>
 )
}

    </div>
  );
  }

export default App;
