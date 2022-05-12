import React from 'react';
import Films from './Films';

const FilmList = ({ films }) => (
  <div className='film-list'>
    {films.map((film, index) => (
      <Films key={index} title={film['title']} />
    ))}
  </div>
);
export default FilmList;
