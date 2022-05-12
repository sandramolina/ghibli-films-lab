import React, { useState, useEffect } from 'react';
import FilmDetail from '../components/FilmDetail';
import FilmList from '../components/FilmList';
import TitleBar from '../components/TitleBar';

const FilmListContainer = () => {
  const mockFaves = [
    { title: '1st movie' },
    { title: '2nd movie' },
    { title: 'third movie' },
  ];
  const [films, setFilms] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [favoriteFilms, setfavoriteFilms] = useState(mockFaves);
  const [selectedList, setSelectedList] = useState([]);
  const listsArray = [films, favoriteFilms];

  useEffect(() => {
    loadFilms();
  }, [selectedList]);

  const loadFilms = () => {
    fetch('https://ghibliapi.herokuapp.com/films')
      .then((res) => res.json())
      .then((filmsList) => setFilms(filmsList))
      .catch((err) => console.error);
  };

  const onFilmClick = function (film) {
    setSelectedFilm(film);
  };

  const handleSelectChange = function (event) {
    setSelectedList(event.target.value);
  };

  return (
    <>
      <TitleBar
        listsArray={listsArray}
        handleSelectChange={handleSelectChange}
      />
      <div className='film-list-container'>
        <div>
          {selectedList == favoriteFilms ? (
            <FilmList films={favoriteFilms} onFilmClick={onFilmClick} />
          ) : (
            <FilmList films={films} onFilmClick={onFilmClick} />
          )}
        </div>
        <div>
          {selectedFilm ? (
            <FilmDetail selectedFilm={selectedFilm} onFilmClick={onFilmClick} />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default FilmListContainer;
