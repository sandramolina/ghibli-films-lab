import React from 'react';
import Films from './Films';

const FavouritesList = ({ films, onFilmClick, handleCheckboxChange }) => (
  <div className='favourites-list'>
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
export default FavouritesList;
