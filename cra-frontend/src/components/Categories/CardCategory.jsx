import { UserContext } from "../../contexts/UserContext";
import { useContext } from 'react';

export default function CardCategory({ category }) {
  const { fetchProductsByCategoryName } = useContext(UserContext);

  function formatText(text) {
    return text.charAt(0).toUpperCase() + text.slice(1).replaceAll('_', ' ');
  }

  function handleClick(e) {
    fetchProductsByCategoryName(category.tipo);
  }

  return (
    <article className="category" onClick={handleClick}>
      <img src={category.url_imagen} alt="" />
      <div className='categoryInfo'>
        <h2>{formatText(category.tipo)}</h2>
        <p>100.000 opciones</p>
      </div>
    </article >
  )
}