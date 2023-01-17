import cities from '../cities.json'
export default function SearchForm() {
  return (
    <section className='searchForm'>
      <h1>Busca ofertas en hoteles, casas y mucho más</h1>

      <form action="">
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

        {/* TO DO: DUAL CALENDAR 
        https://www.npmjs.com/package/react-calendar */}
        <div>
          <label htmlFor="check-in">Check in: </label>
          <input
            type="date"
            id='check-in'
            name='check-in'
            className='form-item'
          />
        </div>

        <div>
          <label htmlFor="check-out">Check out: </label>
          <input
            type="date"
            id='check-out'
            name='check-out'
            className='form-item'
          />
        </div>

        <button>Buscar</button>

      </form>
    </section>
  )
}