export const addToLocalStorage = (movie) => {
  console.log(`clik sur ${movie.id}`);
  const name = `React-app-cine-${movie.id}`;
  if (!localStorage.getItem(name)) {
    const movieData = {
      id: movie.id,
      release_date: movie.release_date,
      vote_average: movie.vote_average,
      poster_path: movie.poster_path,
      title: movie.title,
      genre_ids: movie.genre_ids,
      overview: movie.overview,
    };
    localStorage.setItem(name, JSON.stringify(movieData));
    console.log(movieData);
  }
};

export const removeFromLocalStorage = (movie) => {
  const name = `React-app-cine-${movie.id}`;
  if (localStorage.getItem(name)) localStorage.removeItem(name);
};

export const updateDataFromLocalStorage = () => {
  const localKey = window.localStorage;
  let movieArray = [];
  for (let i = 0; i < localKey.length; i++) {
    console.log(localKey.key(i));
    if (localKey.key(i).includes('React-app-cine'))
      movieArray.push(JSON.parse(localStorage.getItem(localKey.key(i))));
  }
  return movieArray;
};
