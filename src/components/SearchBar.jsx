import cities from '../cities.json'
export default function SearchBar() {
  return (
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

        {/* TO DO: DUAL CALENDAR 
        https://www.npmjs.com/package/react-calendar */}
        <div className='formItem'>
          <input
            type="date"
            id='check-in'
            name='check-in'
          />
        </div>

        <div className='formItem'>
          <button>Buscar</button>
        </div>

      </form>
    </section>
  )
}