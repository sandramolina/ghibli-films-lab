import React, { useState, useEffect } from 'react';
import FilmDetail from '../components/FilmDetail';
import FilmList from '../components/FilmList';
import FavouritesList from '../components/FavouritesList';
import TitleBar from '../components/TitleBar';

const FilmListContainer = () => {
  const [films, setFilms] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [favoriteFilms, setfavoriteFilms] = useState([]);
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
    setSelectedFilm(null);
  };

  const handleCheckboxChange = function (event) {
    const checkedFilmId = event.target.value;
    const checkedFilmObject = films.find(
      (filmObject) => filmObject.id == checkedFilmId
    );
    console.log(test);
    const copyArray = [...favoriteFilms, checkedFilmObject];
    console.log(copyArray);
    setfavoriteFilms(copyArray);
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
            <FavouritesList
              films={favoriteFilms}
              onFilmClick={onFilmClick}
              handleCheckboxChange={handleCheckboxChange}
            />
          ) : (
            <FilmList
              films={films}
              onFilmClick={onFilmClick}
              handleCheckboxChange={handleCheckboxChange}
            />
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
