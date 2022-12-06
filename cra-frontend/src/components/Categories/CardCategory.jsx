import { UserContext } from "../../contexts/UserContext";
import { useContext } from 'react';
import { formatText } from "../../util";

export default function CardCategory({ category }) {
  const { fetchProductsByCategoryName } = useContext(UserContext);

  function handleClick(e) {
    fetchProductsByCategoryName(category.tipo);
  }

  return (
    <article className="category shadow" onClick={handleClick}>
      <img src={category.url_imagen} alt="" />
      <div className='categoryInfo'>
        <h2>{formatText(category.tipo)}</h2>
        <p>100.000 opciones</p>
      </div>
    </article >
  )
}