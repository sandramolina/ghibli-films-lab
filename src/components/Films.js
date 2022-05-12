import React from 'react';

const Films = ({ film, onFilmClick, handleCheckboxChange }) => {
  const handleClick = () => {
    onFilmClick(film);
  };

  return (
    <div>
      <h2 className='film' onClick={handleClick}>
        {film.title}
      </h2>
      <div>
        <input
          type='checkbox'
          id='checkbox'
          name={film.id}
          value={film.id}
          onChange={handleCheckboxChange}
        />
      </div>
    </div>
  );
};
export default Films;
