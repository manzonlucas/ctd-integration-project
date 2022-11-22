import CitiesDropdown from "../SearchBar/CitiesDropdown";
import { DateRange } from "react-date-range";
import { useState, useContext } from "react";
import '../../reservation.css'
import { UserContext } from "../../contexts/UserContext";
import Categories from "../Categories";

export default function Reservation() {

  const { products } = useContext(UserContext);

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

  function handleDateChange(e) {
    setDate([e.selection]);
    setQuery({ ...query, startDate: date[0].startDate, endDate: date[0].endDate });
  }

  return (

    <section className="reservationGrid">


      <section className="reservationForm reservationItem">
        <h2>Completá tus datos</h2>
        <form action="">

          <div className="formItemDiv">
            <label htmlFor="name" >Nombre</label>
            <input type="text" id="name" name="name" className="formInput" />
          </div>

          <div className="formItemDiv">
            <label htmlFor="lastName">Apellido</label>
            <input type="text" id="lastName" name="lastName" className="formInput" />
          </div>

          <div className="formItemDiv">
            <label htmlFor="email" >Correo electrónico</label>
            <input type="email" id="email" name="email" className="formInput" />
          </div>

          <div className="formItemDiv">
            <CitiesDropdown
              query={query}
              setQuery={setQuery}
            />
          </div>

        </form>

      </section>

      <div className="reservationDate reservationItem" >
        <DateRange
          onChange={handleDateChange}
          moveRangeOnFirstSelection={false}
          ranges={date}
          months={window.innerWidth > 414 ? 2 : 1}
          direction='horizontal'
          rangeColors={['#545776']}
          color='#545776'
          minDate={new Date()}
        />
      </div>

      <div className="reservationDetails reservationItem">
        <h2>Detalle de la reserva</h2>
        <img src="../hotelroom/room1.jpg" alt="Habitacion de ejemplo" />

      </div>


      <input type="submit" className="submitButton" value='Reservar' />
    </section>
  )
}
