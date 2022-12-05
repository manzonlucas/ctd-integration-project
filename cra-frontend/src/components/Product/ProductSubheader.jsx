import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function ProductSubheader({ product }) {

  const RANKING = '★★★★★☆☆☆☆☆';
  function getRanking(ranking) {
    return RANKING.slice(5 - ranking, 10 - ranking);
  }



  return (
    <section className="productSubheader">
      <div>
        <FontAwesomeIcon icon={faLocationDot} style={{ display: "inline-block", marginRight: '5px' }} />
        <span>{product.ciudad}</span>
      </div>
      <div>
        <p className="ranking">{getRanking(3)}</p>
      </div>
    </section>
  )
}