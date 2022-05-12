import React from 'react';
import Films from './Films';

const FilmList = ({ films, onFilmClick }) => (
  <div className='film-list'>
    {films.map((film, index) => (
      <Films key={index} film={film} onFilmClick={onFilmClick} />
    ))}
  </div>
);
export default FilmList;
