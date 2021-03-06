import React from 'react';
import Films from './Films';

const FilmList = ({ films, onFilmClick, handleCheckboxChange }) => (
  <div className='film-list'>
    {films.map((film) => (
      <Films
        key={film.id}
        film={film}
        onFilmClick={onFilmClick}
        handleCheckboxChange={handleCheckboxChange}
      />
    ))}
  </div>
);
export default FilmList;
