import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import axios from 'axios';
import Card from '../../components/cards/Card';
import { updateDataFromLocalStorage } from '../../components/cards/localStorage';

const Favorites = () => {
  const [movies, setMovies] = useState([]);
  const [genre, setGenre] = useState();
  const [reload, setReload] = useState(false);

  const getGenre = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_KEY}&language=fr-FR`
      )
      .then((res) => setGenre(res.data.genres))
      .catch((err) => console.log(err));
  };

  const updateData = () => {
    setMovies(updateDataFromLocalStorage());
  };

  useEffect(() => {
    updateData();
    getGenre();

    if (movies.length > 0 && reload === true) {
      updateData();
      setReload(false);
    }
  }, [reload, movies.length]);

  return (
    <div className="favorites-container">
      <Header />
      <h2>Coups de coeur 💖</h2>
      <ul className="card-container">
        {movies &&
          genre &&
          movies.map((movie) => (
            <Card
              key={movie.id}
              movie={movie}
              genre={genre}
              reloadState={setReload}
            />
          ))}
      </ul>
      {movies.length === 0 && <p>Pas de coups de coeur pour le moment...</p>}
    </div>
  );
};

export default Favorites;
