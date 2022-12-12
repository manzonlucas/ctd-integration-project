import { Link } from 'react-router-dom';
import { formatText } from '../../util';
import FeaturesCards from "./FeaturesCardProduct";

export default function CardProduct({ product, index }) {

  const RANKING = '★★★★★☆☆☆☆☆';
  function getRankingCard(ranking) {
    return RANKING.slice(5 - ranking, 10 - ranking);
  }

  function randomNum() {
    return Math.round(Math.random() * 5);
  }

  return (

    <article className="flex justify-around radius-10 bg-white shadow m-auto" key={product.id} style={{ width: '600px', height: '300px' }}>
      <div className='w-90 h-100'>

        {product.imagenes !== undefined ?
          <img src={product.imagenes[0].url} alt="" className='inline-block m-auto w-100 h-100 fit-cover' style={{
            borderTopLeftRadius: '10px',
            borderBottomLeftRadius: '10px'
          }} />
          : ''}
      </div>

      <div className='w-90 h-100 p-10 flex column justify-around'>
        <div className='flex align-center'>
          <p>{formatText(product.categoria.toUpperCase())}</p>
          <p className="cyan m-sides">{getRankingCard(randomNum())}</p>
          <p className='white bg-grey bold radius-10 p-5' style={{ width: '25px', textAlign: 'center', marginLeft: 'auto' }}>8</p>
        </div>

        <div className='flex bold grey align-center'>
          <h2>{product.titulo}</h2>
          <p style={{ marginLeft: 'auto' }}>Muy Bueno</p>
        </div>

        <p className=''>
          <i className='fa-solid fa-location-dot grey' style={{ marginRight: '5px' }} />
          {product.ciudad}
        </p>

        <FeaturesCards product={product} />

        <p className='descripcion-info'>{product.descripcion.length > 150 ? `${product.descripcion.substring(0, 150)}...` : product.descripcion}
        </p>

        <Link to={`/producto/${product.id}`} className='white bold bg-cyan radius-5 p-10-20 decoration-none w-50 center' style={{ margin: '0 auto' }}>Ver detalle</Link>
      </div>

    </article >
  )
}