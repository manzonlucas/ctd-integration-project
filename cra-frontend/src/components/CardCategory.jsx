import categories from '../categories.json';

export default function CardCategory() {
  return (
    <>
      {categories.map((category, index) => {
        return (
          <article className="category" key={index}>
            {/* REEMPLAZAR INDEX POR ID UNA VEZ CONECTADO A DB */}
            <img src="./img-placeholder.jpg" alt="" />
            <h2>{category.category}</h2>
          </article >
        )
      })}
    </>
  )
}