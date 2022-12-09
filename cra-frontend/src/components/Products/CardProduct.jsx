import { Link } from 'react-router-dom';
import { formatText } from '../../util';
import FeaturesCards from "./FeaturesCardProduct";
import RankigCardProduct from "./RankigCardProduct";


export default function CardProduct({ product, index }) {
  return (
    
    <article className="card shadow" key={index}>
      {/* REEMPLAZAR INDEX POR ID UNA VEZ CONECTADO A DB */}
      <div>
        <img src={product.imagenes[0].url} alt="" />
      </div>
      <div>
        <div className='product-info'>
          <p className='name-info'>{formatText(product.categoria.toUpperCase())} <RankigCardProduct product={product} /></p> 
          <p className='titulo-info'>{product.titulo}</p>
          {/* TO DO ICONO DE UBICACION */}
          <p className='ciudad-info' ><i class="fa-solid fa-location-dot"></i> {product.ciudad}</p>
          <FeaturesCards product={product} />
          <p className='descripcion-info'>{product.descripcion.length > 150 ? `${product.descripcion.substring(0, 150)}...` : product.descripcion}
          </p>
        </div>

        {/* TODO CHEQUEAR ESTE LINK */}
        <Link style={{textDecoration: "none"}} to={`/producto/${product.id}`} className='moreInfo'>Ver detalle</Link>
      </div>

    </article >
  )
}