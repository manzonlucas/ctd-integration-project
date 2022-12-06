import { Link } from 'react-router-dom';
import { formatText } from '../../util';

export default function CardProduct({ product, index }) {
  return (

    <article className="card shadow" key={index}>
      {/* REEMPLAZAR INDEX POR ID UNA VEZ CONECTADO A DB */}
      <div>
        <img src={product.imagenes[0].url} alt="" />
      </div>
      <div>
        <div className='product-info'>
          <p>{formatText(product.categoria.toUpperCase())}</p>
          <p>{product.titulo}</p>
          {/* TO DO ICONO DE UBICACION */}
          <p>{product.ciudad}</p>
          <p>{product.descripcion.length > 150 ? `${product.descripcion.substring(0, 150)}...` : product.descripcion}
          </p>
        </div>

        {/* TODO CHEQUEAR ESTE LINK */}
        <Link to={`/producto/${product.id}`} className='moreInfo'>Ver detalle</Link>
      </div>
    </article >
  )
}