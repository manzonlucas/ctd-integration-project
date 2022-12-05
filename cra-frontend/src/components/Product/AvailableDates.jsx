import { DateRange } from "react-date-range";
import { useParams, Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import '../../availableDates.css'

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
            ranges={date}
            months={window.innerWidth > 414 ? 2 : 1}
            direction='horizontal'
            rangeColors={['#545776']}
            color='#545776'
            minDate={new Date()}
          />
        </div>

        <div className="itemContainer w-30">
          <p>Agregá tus fechas de viaje para obtener precios exacto</p>
          <Link to={'/successful'} className='okButton'>
            <p>Iniciar reserva</p>
          </Link>
        </div>
      </div>

    </section >
  )
}