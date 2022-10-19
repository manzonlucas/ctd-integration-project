export default function SearchForm() {
  return (
    <section className='searchForm'>
      <h1>Busca ofertas en hoteles, casas y mucho más</h1>
      <form action="">
        <input type="text" placeholder="A donde vamos?" />
        <input type="text" placeholder="Check in / Check out" />
        <button>Buscar</button>
      </form>
    </section>
  )
}