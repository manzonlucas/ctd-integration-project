import React, { useState, useContext } from "react";
import Calendar from "./Calendar";
import CitiesDropdown from "./CitiesDropdown";
import { UserContext } from "../../contexts/UserContext";
import { useEffect } from "react";

export default function SearchBar() {

  const { fetchProductsByCityId, fetchProductsByDate } = useContext(UserContext);

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

  useEffect(() => {
    setQuery({ ...query, startDate: date[0].startDate, endDate: date[0].endDate });
  }, [date])

  function handleClickDateInput() {
    setIsCalendarVisible(!isCalendarVisible);
  }

  function handleDateChange(e) {
    setDate([e.selection]);
    setQuery({ ...query, startDate: date[0].startDate, endDate: date[0].endDate });
  }

  function handleSearch(e) {
    e.preventDefault();
    // PENDING BACKEND
    fetchProductsByCityId(query.destination);
    fetchProductsByDate(query.startDate, query.endDate);
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
              onClick={handleClickDateInput}
              // FIX
              // onBlur={handleClickDateInput}
              className='searchBarFormInput m-5 p-10 border-none'

              value={
                query.startDate && query.endDate ?
                  `Check-in: ${query.startDate.toLocaleDateString('es-ES')} - Check-out: ${query.endDate.toLocaleDateString('es-ES')}`
                  : 'Check-in: - Check-out: '}
            />
          </div>

          <div className="formItem">
            <button onClick={handleSearch} className='searchBarFormButton'>Buscar</button>
          </div>
        </form>
      </section>

      <Calendar
        isCalendarVisible={isCalendarVisible}
        setIsCalendarVisible={setIsCalendarVisible}
        handleDateChange={handleDateChange}
        date={date}
      />
    </>
  );
}