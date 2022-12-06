import React, { useState, useContext } from "react";
import Calendar from "./Calendar";
import CitiesDropdown from "./CitiesDropdown";
import { UserContext } from "../../contexts/UserContext";

export default function SearchBar() {

  const { fetchProductsByCityId } = useContext(UserContext);

  const [query, setQuery] = useState({
    destination: '',
    startDate: '',
    endDate: ''
  });

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [isCalendarVisible, setIsCalendarVisible] = useState(false);

  function handleClickDateInput() {
    setIsCalendarVisible(!isCalendarVisible);
  }

  function handleDateChange(e) {
    setDate([e.selection]);
    setQuery({ ...query, startDate: date[0].startDate, endDate: date[0].endDate });
  }

  function handleSearch(e) {
    e.preventDefault();
    fetchProductsByCityId(query.destination);
    console.log(query);
  }

  return (
    <>
      <section className="searchBar">
        <h1>Busca ofertas en hoteles, casas y mucho más</h1>

        <form action="" className="searchBarForm">

          <CitiesDropdown
            query={query}
            setQuery={setQuery}
          />

          <div className="formItem">
            <input
              type="text"
              readOnly
              placeholder=" Check-in / Check-out"
              onClick={handleClickDateInput}
              className='searchBarFormInput'
            />
          </div>

          <div className="formItem">
            <button onClick={handleSearch} className='searchBarFormButton'>Buscar</button>
          </div>
        </form>
      </section>

      <Calendar
        isCalendarVisible={isCalendarVisible}
        handleDateChange={handleDateChange}
        date={date}
      />
    </>
  );
}