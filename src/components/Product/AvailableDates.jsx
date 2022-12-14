import { DateRange } from "react-date-range";
import { useParams, Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import '../../classes.css';

export default function AvailableDates({ product }) {

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
    <section className="w-90 m-auto">
      <h3>Fechas disponibles</h3>

      <div className="flex justify-evenly w-80 m-auto m-bottom">
        <div className="itemContainer w-60" >
          <DateRange
            onChange={handleDateChange}
            moveRangeOnFirstSelection={false}
            months={window.innerWidth > 414 ? 2 : 1}
            direction='horizontal'
            rangeColors={['#545776']}
            color='#545776'
            minDate={new Date()}
          />
        </div>

        <div className="itemContainer w-30">
          {user.isLogged ?
            <>
              <p>Agregá tus fechas de viaje para obtener precios exacto</p>
              <Link to={'booking'} className='okButton'>
                <p>Iniciar reserva</p>
              </Link>
            </>
            :
            <>
              <p>Debes iniciar sesión para iniciar una reserva</p>
              <Link to={'/login'} className='okButton'>
                <p>Iniciar sesión</p>
              </Link>
            </>
          }
        </div>
      </div>

    </section >
  )
}