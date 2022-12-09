import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export default function ProductHeader({ product }) {
  return (
    <section className="productHeader">
      <div>
        <h4>{product.categoria}</h4>
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