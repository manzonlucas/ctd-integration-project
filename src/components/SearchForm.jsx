import styles from './searchForm.module.css';

export default function SearchForm() {
  return (
    <section className={styles.searchForm}>
      <h1>Busca ofertas en hoteles, casas y mucho más</h1>
      <form action="">
        <input type="text" />
        <input type="text" />
        <button>Search</button>
      </form>
    </section>
  )
}