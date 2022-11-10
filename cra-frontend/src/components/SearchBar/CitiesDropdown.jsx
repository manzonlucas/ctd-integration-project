import { useState } from 'react';
import cities from '../../cities.json';

export default function CitiesDropdown({ query, setQuery }) {

  const [citiesDisplay, setCitiesDisplay] = useState(false);

  function handleClickDropdown() {
    setCitiesDisplay(!citiesDisplay);
  }

  function handleClickOption(e) {
    setQuery({ ...query, destination: e.target.id });
  }

  return (
    <>
      <div onClick={handleClickDropdown} className='formItem dropdown'>
        <h2 >A donde vamos?</h2>
        <ul
          className={citiesDisplay ? 'citiesList citiesListShow' : 'citiesList'}
          onClick={handleClickOption}
        >
          {cities.map((city, index) => {
            return (
              <li value={city.city} id={index} key={index} className='city'>
                {city.city}, {city.country}
              </li>)
          })}
        </ul>
      </div>
    </>
  )
}