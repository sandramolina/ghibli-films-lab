import React from 'react';

const FilmDetail = ({ selectedFilm }) => (
  <div className='film-detail'>
    <h2>{selectedFilm.title}</h2>
    <p>{selectedFilm.release_date}</p>
    <p>{selectedFilm.running_time}</p>
    <p>{selectedFilm.description}</p>
    <img src={selectedFilm.movie_banner}></img>
  </div>
);

export default FilmDetail;
