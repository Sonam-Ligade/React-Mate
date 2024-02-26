import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect, useCallback } from "react";
import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

   const fetchMoviesHandler = useCallback(async () =>  {
    setIsLoading(true);
    setError(null);
    try {
      
      // const response = await fetch("https://swapi.dev/api/films/");
      const response = await fetch("https://react-http-d95ad-default-rtdb.firebaseio.com/movies.json")
      if(!response.ok){
        throw new Error("Something went Wrong!!");
      }
      const data =  await response.json();
      console.log(data);

      // const fetchedMovies = data.results.map((movie) => {
      //       return {
      //         id: movie.episode_id,
      //         title: movie.title,
      //         openingText: movie.opening_crawl,
      //         releaseDate: movie.release_date,
      //       };
      //     });

      const fetchedMovies = [];
      for(const key in data){
        fetchedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate
        });
      }

      setMovies(fetchedMovies);

    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  let content = <p>No Movie Found.</p>;

  if(movies.length > 0){
    content = <MoviesList movies={movies} />;
  }
  if(error){
    content = <p>{error}</p>;
  }
  if(isLoading){
    content = <p>Loading....</p>;
  }

  async function addMovieHandler(movie) {
    console.log(movie);
   const response =  await fetch("https://react-http-d95ad-default-rtdb.firebaseio.com/movies.json", {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
