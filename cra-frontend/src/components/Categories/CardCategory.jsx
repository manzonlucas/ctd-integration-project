import { UserContext } from "../../contexts/UserContext";
import { useContext } from 'react';
import { formatText } from "../../util";

export default function CardCategory({ category }) {
  const { fetchProductsByCategoryName } = useContext(UserContext);

  function handleClick(e) {
    fetchProductsByCategoryName(category.tipo);
  }

  return (
    <article className="flex column radius-10 shadow" onClick={handleClick} style={{ width: '280px', height: '255px' }}>
      <img src={category.url_imagen} alt="" className="inline-block category-img" />
      <div className='w-100 h-100'>
        <h2>{formatText(category.tipo)}</h2>
        <p>10.000 opciones</p>
      </div>
    </article >
  )
}