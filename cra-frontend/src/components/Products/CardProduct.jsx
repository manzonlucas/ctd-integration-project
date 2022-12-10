import { Link } from 'react-router-dom';
import { formatText } from '../../util';
import FeaturesCards from "./FeaturesCardProduct";

export default function CardProduct({ product, index }) {

  const RANKING = '★★★★★☆☆☆☆☆';
  function getRankingCard(ranking) {
    return RANKING.slice(5 - ranking, 10 - ranking);
  }

  return (

    <article className="card shadow" key={index}>
      {/* REEMPLAZAR INDEX POR ID UNA VEZ CONECTADO A DB */}
      <div>

        {product.imagenes !== undefined ?
          <img src={product.imagenes[0].url} alt="" />
          : ''}

      </div>
      <div>
        <div className='product-info'>

          {/* Quitar nestings de <p/> dentro de <p/> */}
          <p className='name-info'>{formatText(product.categoria.toUpperCase())}
            <p className="rankingCard">{getRankingCard(4)}</p>
            <p className='numberRanking'>8</p>
          </p>

          <p className='titulo-info'>{product.titulo} <p className='textRanking'>Muy Bueno</p></p>

          <p className='ciudad-info'>
            <i className='fa-solid fa-location-dot'></i>
            {product.ciudad}
          </p>

          <FeaturesCards product={product} />

          <p className='descripcion-info'>{product.descripcion.length > 150 ? `${product.descripcion.substring(0, 150)}...` : product.descripcion}
          </p>

        </div>

        <div className='boton'>
          <Link style={{ textDecoration: "none" }} to={`/producto/${product.id}`} className='moreInfo'>Ver detalle</Link>
        </div>
      </div>

    </article >
  )
}