import CardCategory from './CardCategory';
import categories from '../categories.json';

export default function Categories() {
  return (
    <section className='categories'>
      <h2>Buscar por tipo de alojamiento</h2>

      <div className="container">
        {categories.length !== 4 ? <p style={{ color: 'red' }}>No hay exactamente 4 categorias</p> : null}

        <CardCategory />

      </div>
    </section>
  )
}