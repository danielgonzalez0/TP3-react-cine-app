import React, { useCallback, useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import axios from 'axios';
import Card from '../../components/cards/Card';
import FormSearch from '../../components/FormSearch/FormSearch';

const Home = () => {
  const [data, setData] = useState();
  const [genre, setGenre] = useState();
  const [keyword, setKeyword] = useState('war');
  const [reload, setReload] = useState(false);
  const [sortPlusToMinus, setSortPlusToMinus] = useState(false);
  const [sortMToP, setSortMToP] = useState(false);

  const getData = useCallback(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_KEY}&language=fr-FR&query=${keyword}&include_adult=false`
      )
      .then((res) => {
        setData(res.data.results);
      })
      .catch((err) => console.log(err + reload));
  }, [keyword, reload]);

  const getGenre = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_KEY}&language=fr-FR`
      )
      .then((res) => setGenre(res.data.genres))
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
    getGenre();
  }, [getData]);

  return (
    <div>
      <Header />
      <FormSearch
        keyword={setKeyword}
        sortDataPtoM={setSortPlusToMinus}
        sortDataMtoP={setSortMToP}
      />
      {keyword.length > 0 && data && data.length === 0 && (
        <p className="NoData">Aucun film trouvé. Essayez un autre mot clé</p>
      )}
      <ul className="card-container">
        {data &&
          keyword.length > 2 &&
          genre &&
          data
            .sort((a, b) => {
              if (sortPlusToMinus) {
                return b.vote_average - a.vote_average;
              } else if (sortMToP) {
                return a.vote_average - b.vote_average;
              } else return null;
            })
            .map(
              (movie) => (
                //   movie.media_type === 'movie' && (

                <Card
                  key={movie.id}
                  movie={movie}
                  genre={genre}
                  reloadState={setReload}
                />
              )
              //   )
            )}
      </ul>
    </div>
  );
};

export default Home;
