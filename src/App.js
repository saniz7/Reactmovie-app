import React, {useState,useEffect} from 'react';
import './App.css';
import Favourite from './Component/Favourite';
import Home from './Component/Home';
import Navbar from './Component/Navbar';

function App() {
  const [movies,setMovies]=useState([]);
  const [search,setSearch]=useState('');
  const [favourite,setFavourite]=useState([]);
  const getMovieRequest = async () => {
      const url=`http://www.omdbapi.com/?s=${search}&apikey=86f1a87`;
      const response = await fetch(url);
      const responseJson = await response.json();
      if(responseJson.Search){
      setMovies(responseJson.Search)
      }
      console.log(search);
    }
  useEffect(()=>{
      getMovieRequest(search);
  },[search]);

  const addFavourite = (movie) =>{
    const newFavouriteList = [...favourite,movie];
    setFavourite(newFavouriteList);
  };
  const removeFavourite = (movie) => {
		const newFavouriteList = favourite.filter(
			(favourite) => favourite.imdbID !== movie.imdbID
		);
    setFavourite(newFavouriteList);
    };
  return (
    <div className="App">
      <Navbar search={search} setSearch={setSearch}/>
    <Home movies={movies} handleFavourite={addFavourite}/>
   <Favourite movies={favourite} handleFavourite={removeFavourite}/>
    </div>
  );
}

export default App;
