import { DateRange } from "react-date-range";
import { useParams, Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import '../../booking.css'

export default function Reservation({ product }) {

  const { id } = useParams();
  const { products, user } = useContext(UserContext);

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
  }

  useEffect(() => {
    setQuery({ ...query, startDate: date[0].startDate, endDate: date[0].endDate });
  }, [date])

  return (

    <section className="reservationGrid">

      <form className="reservationForm reservationItem">
        <h4>Completá tus datos</h4>

        <div className="formItemDiv">
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" name="name" className="formInput" value={user.name} disabled />
        </div>

        <div className="formItemDiv">
          <label htmlFor="lastName">Apellido</label>
          <input type="text" id="lastName" name="lastName" className="formInput" value={user.lastName} disabled />
        </div>

        <div className="formItemDiv">
          <label htmlFor="email" >Correo electrónico</label>
          <input type="email" id="email" name="email" className="formInput" value={user.email} disabled />
        </div>

        <div className="formItemDiv">
          <label htmlFor="city">Ciudad</label>
          {/* TO DO: EL USER TIENE CIUDAD EN SUS DATOS EN DB? */}
          <input type="text" id="city" name="city" className="formInput" value={user.city} disabled />
        </div>

      </form>

      <div className="reservationDate reservationItem" >
        <h4>Seleccioná tu fecha de reserva</h4>

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
        <h4>Detalle de la reserva</h4>
        <img src="https://imagenesg4c7.s3.us-east-2.amazonaws.com/public/hotelroom/room2.jpg" alt="Habitacion de ejemplo" />

        <p>{product.categoria}</p>
        <p>{product.titulo}</p>
        <p>{product.ciudad}</p>

        {query.startDate && query.endDate ?
          <>
            <p>Check-in: {query.startDate.toDateString()}</p>
            <p>Check-out: {query.endDate.toDateString()}</p>
          </>
          :
          ''
        }

        <Link to={'/successful'} className='okButton'>
          <p>Iniciar reserva</p>
        </Link>
      </div>

    </section >
  )
}
