// import categories from '../../categories.json';

export default function CardCategory({ categories }) {

  function formatText(text) {
    return text.charAt(0).toUpperCase() + text.slice(1).replaceAll('_', ' ');
  }

  return (
    <>
      {categories.map((category, index) => {
        return (
          <article className="category" key={index}>

            <img src={category.url_imagen} alt="" />
            <div className='categoryInfo'>
              <h2>{formatText(category.tipo)}</h2>
              <p>100.000 opciones</p>
            </div>
          </article >
        )
      })}
    </>
  )
}