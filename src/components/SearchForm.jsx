import cities from '../cities.json'
export default function SearchForm() {
  return (
    <section className='searchForm'>
      <h1>Busca ofertas en hoteles, casas y mucho más</h1>

      <form action="">
        <select name="city">
          {/* <select name="city" defaultValue={{ label: "A donde vamos?", value: 1 }}> */}
          <option value="">Donde vamos?</option>

          {cities.map(city => {
            return (<option value={city.city}>
              {city.city}, {city.country}
            </option>)
          })}
        </select>

        <label htmlFor="check-in">Check in:</label>
        <input type="date" id='check-in' name='check-in' />
        <label htmlFor="check-out">Check in:</label>
        <input type="date" id='check-out' name='check-out' />


        <button>Buscar</button>

      </form>
    </section>
  )
}