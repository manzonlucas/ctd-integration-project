import { useState } from 'react';
// import cities from '../../cities.json';

export default function CitiesDropdown({ query, setQuery, cities }) {

  const [citiesDisplay, setCitiesDisplay] = useState(false);
  const [h2Placeholder, setH2Placeholder] = useState('A donde vamos?')

  function handleClickDropdown() {
    setCitiesDisplay(!citiesDisplay);
  }

  function handleClickOption(e) {
    setQuery({ ...query, destination: e.target.id });
    setH2Placeholder(e.target.innerText);
  }

  return (
    <>
      <div onClick={handleClickDropdown} className='formItem dropdown'>
        <h2>{h2Placeholder}</h2>
        <ul
          className={citiesDisplay ? 'citiesList citiesListShow' : 'citiesList'}
          onClick={handleClickOption}
        >
          {cities.map((city, index) => {
            return (
              <li value={city.city} id={index} key={index} className='city'>
                {city.nombre}, {city.pais}
              </li>)
          })}
        </ul>
      </div>
    </>
  )
}