import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import axios from 'axios';
import Card from '../../components/cards/Card';

const Home = () => {
  const [data, setData] = useState();
  const [genre, setGenre] = useState();

  const getData = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_KEY}&language=fr-FR&query=war&include_adult=false`
      )
      //   .get(
      //     `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_KEY}&language=fr-FR&query=tomorrow&page=1&include_adult=true`
      //   )
      .then((res) => {
        setData(res.data.results);
      })
      .catch((err) => console.log(err));
  };

  const getGenre = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_KEY}&language=fr-FR`
      )
      .then((res) => setGenre(res.data.genres))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
    getGenre();
  }, []);

  return (
    <div>
      <Header />
      <ul className="card-container">
        {data &&
          genre &&
          data.map(
            (movie) => (
              //   movie.media_type === 'movie' && (
              
                <Card key={movie.id} movie={movie} genre={genre} reload={false}/>
              
            )
            //   )
          )}
      </ul>
    </div>
  );
};

export default Home;
