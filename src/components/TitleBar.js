import React from 'react';

const TitleBar = ({ listsArray, handleSelectChange }) => {
  return (
    <>
      <h1>Studio Ghibli Movies</h1>
      <select onChange={handleSelectChange}>
        {/* <option value=''>--Please choose an option--</option> */}
        <option key='0' value={listsArray[0]}>
          All Films
        </option>
        <option key='1' value={listsArray[1]}>
          Favourites Films
        </option>
      </select>
    </>
  );
};

export default TitleBar;
