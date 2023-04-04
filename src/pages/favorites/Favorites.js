import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import axios from 'axios';
import Card from '../../components/cards/Card';
import { updateDataFromLocalStorage } from '../../components/cards/localStorage';

const Favorites = () => {
  const [movies, setMovies] = useState([]);
  const [genre, setGenre] = useState();

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
  }, []);

  return (
    <div>
      <Header />
      <ul className="card-container">
        {movies &&
          genre &&
          movies.map((movie) => (
            <Card key={movie.id} movie={movie} genre={genre} reload={true} />
          ))}
      </ul>
    </div>
  );
};

export default Favorites;
