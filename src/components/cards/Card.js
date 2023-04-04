import React, { useEffect, useState } from 'react';
import poster from '../cards/poster.jpg';

const Card = ({ movie, genre }) => {
  const [date, setDate] = useState();
  const [rating, setRating] = useState(0);
  const genreArray = genre;

  const dateFormat = (date) => {
    const validDate = Date.parse(date);
    if (!isNaN(validDate)) {
      const formatDate = new Date(date);
      setDate(formatDate.toLocaleDateString('fr-FR'));
    }
  };

  const ratingFormat = (rate) => {
    if (rate % 1 === 0) {
      setRating(rate.toFixed(0));
    } else {
      setRating(rate.toFixed(1));
    }
  };

  useEffect(() => {
    dateFormat(movie.release_date);
    ratingFormat(movie.vote_average);
  }, [movie.release_date, movie.vote_average]);

  return (
    <li className="card">
      <div className="img-content">
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : `${poster}`
          }
          alt={movie.title}
        />
      </div>
      <div className="infos-content">
        <h4>{movie.title}</h4>
        {date ? <p>Sorti le : {date}</p> : <p>Date de sortie inconnu</p>}
        <span className="rating">
          {rating}/10 <i className="fa-solid fa-star"></i>
        </span>
        <ul className="genres-list">
          {genreArray &&
            movie.genre_ids.map((movieGenre, index) => (
              <li key={index}>
                {
                  genreArray[
                    genreArray.findIndex((item) => item.id === movieGenre)
                  ].name
                }
              </li>
            ))}
        </ul>
        <p>Synopsys</p>
        <p>{movie.overview}</p>
      </div>
    </li>
  );
};

export default Card;
