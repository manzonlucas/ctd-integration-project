import CardCategory from './CardCategory';
import categories from '../categories.json';

export default function Categories() {
  return (
    <section className='categories'>
      <p>Categories</p>

      {categories.length !== 4 ? <p>No hay exactamente 4 categorias</p> : null}

      {categories.map((category, index) => {
        return (
          <article className="category" key={index}>
            {/* REEMPLAZAR INDEX POR ID UNA VEZ CONECTADO A DB */}
            <div>
              <img src="./img-placeholder.jpg" alt="" />
            </div>
            <h2>{category.category}</h2>
          </article >
        )
      })}
    </section>
  )
}