import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { formatText } from "../../util";

export default function ProductHeader({ product }) {
  return (
    <section className="productHeader">
      <div>
        {product.categoria ?
          <h4>{formatText(product.categoria)}</h4>
          : ''
        }
        <h4>{product.titulo}</h4>
      </div>
      <div>
        <Link to='/'>
          <FontAwesomeIcon icon={faChevronLeft} className='icon' />
        </Link>
      </div>
    </section>
  )
}