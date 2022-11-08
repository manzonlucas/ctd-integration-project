import cities from '../cities.json';
import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

export default function SearchBar() {

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection"
    }
  ]);

  const [isCalendarVisible, setIsCalendarVisible] = useState(false);

  function handleClickDateInput() {
    setIsCalendarVisible(!isCalendarVisible);
  }

  function handleDateChange(e) {
    setDate([e.selection]);
  }

  function handleSearch(e) {
    e.preventDefault();
    console.log(date);
  }

  return (
    <>
      <section className='searchBar'>
        <h1>Busca ofertas en hoteles, casas y mucho más</h1>

        <form action="" className='searchBarForm'>

          <div className='formItem'>
            <select name="city" className='form-item'>
              {/* <select name="city" defaultValue={{ label: "A donde vamos?", value: 1 }}> */}
              <option value="">Donde vamos?</option>

              {cities.map((city, index) => {
                return (
                  <option value={city.city} key={index}>
                    {city.city}, {city.country}
                  </option>)
              })}
            </select>
          </div>

          <div className='formItem'>
            <input
              type="text"
              readOnly
              placeholder=' Check-in / Check-out'
              onClick={handleClickDateInput}
            />
          </div>

          <div className='formItem'>
            <button onClick={handleSearch}>Buscar</button>
          </div>
        </form>
      </section>

      <div
        className={isCalendarVisible ? 'dateRangeInputShow' : 'dateRangeInputHide'}
      >
        <DateRange
          onChange={handleDateChange}
          moveRangeOnFirstSelection={false}
          ranges={date}
          months={window.innerWidth > 414 ? 2 : 1}
          direction='horizontal'
          rangeColors={['#545776']}
          color='#545776'
          minDate={new Date()}
          className='dateRangeInput'
        />
      </div>
    </>
  )
}