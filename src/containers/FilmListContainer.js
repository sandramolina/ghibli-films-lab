import React, { useState, useEffect } from 'react';
import FilmList from '../components/FilmList';

const FilmListContainer = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    loadFilms();
  }, []);

  const loadFilms = () => {
    fetch('https://ghibliapi.herokuapp.com/films')
      .then((res) => res.json())
      .then((filmsList) => setFilms(filmsList))
      .catch((err) => console.error);
  };
  return (
    <>
      <div className='film-list-container'>
        <h1>Studio Ghibli Movies</h1>
        <FilmList films={films} />
      </div>
    </>
  );
};

export default FilmListContainer;
