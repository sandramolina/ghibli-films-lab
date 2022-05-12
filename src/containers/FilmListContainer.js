import React, { useState, useEffect } from 'react';
import FilmDetail from '../components/FilmDetail';
import FilmList from '../components/FilmList';

const FilmListContainer = () => {
  const [films, setFilms] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState(null);

  useEffect(() => {
    loadFilms();
  }, []);

  const loadFilms = () => {
    fetch('https://ghibliapi.herokuapp.com/films')
      .then((res) => res.json())
      .then((filmsList) => setFilms(filmsList))
      .catch((err) => console.error);
  };

  const onFilmClick = function (film) {
    setSelectedFilm(film);
  };

  return (
    <>
      <div className='film-list-container'>
        <h1>Studio Ghibli Movies</h1>
        <FilmList films={films} onFilmClick={onFilmClick} />
        {selectedFilm ? (
          <FilmDetail selectedFilm={selectedFilm} onFilmClick={onFilmClick} />
        ) : null}
      </div>
    </>
  );
};

export default FilmListContainer;
