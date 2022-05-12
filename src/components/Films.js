import React from 'react';

const Films = ({ film, onFilmClick }) => {
  const handleClick = () => {
    onFilmClick(film);
  };
  return (
    <div className='film' onClick={handleClick}>
      <h2>{film.title}</h2>
    </div>
  );
};
export default Films;
