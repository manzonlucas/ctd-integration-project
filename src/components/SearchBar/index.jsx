import React, { useState, useContext } from "react";
import Calendar from "./Calendar";
import CitiesDropdown from "./CitiesDropdown";
import { UserContext } from "../../contexts/UserContext";
import { useEffect } from "react";
import { formatDate } from "../../util";

export default function SearchBar() {

  const { fetchProductsByQuery } = useContext(UserContext);

  const [query, setQuery] = useState({
    destination: {},
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
    const destinationId = query.destination.id;
    const destinationName = query.destination.innerText;
    const startDate = formatDate(query.startDate);
    const endDate = formatDate(query.endDate);
    fetchProductsByQuery(destinationId, destinationName, startDate, endDate);
  }

  return (
    <>
      <section className="h-150px bg-grey p-25 gap-2 center flex column justify-around align-center sm-height-250">
        <h1 className="size-2 m-size-1 white">Busca ofertas en hoteles, casas y mucho más</h1>

        <form action="" className="w-80 flex justify-around align-center m-column sm-column sm-height-400 gap-10">

          <CitiesDropdown
            query={query}
            setQuery={setQuery}
          />

          <div className="formItem sm-w-100">
            <input
              type="text"
              readOnly
              onClick={handleClickDateInput}
              // FIX
              // onBlur={handleClickDateInput}
              className='w-100 h-100 m-5 p-10 border-none radius-5 shadow'

              value={
                query.startDate && query.endDate ?
                  `Check-in: ${query.startDate.toLocaleDateString('es-ES')} - Check-out: ${query.endDate.toLocaleDateString('es-ES')}`
                  : 'Check-in: - Check-out: '}
            />
          </div>

          <div className="formItem sm-w-100">
            <button onClick={handleSearch} className='w-100 h-100 m-5 p-10 border-none radius-5 shadow white bold bg-cyan border-none'>Buscar</button>
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