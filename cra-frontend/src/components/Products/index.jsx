import CardProduct from "./CardProduct";
import { useContext } from "react";
import { UserContext } from '../../contexts/UserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { formatText } from "../../util";

export default function Products() {
  const { products, fetchProducts, actualCategory } = useContext(UserContext);

  return (
    <section className="recommendations">


      {!actualCategory ?
        <h2 onClick={fetchProducts} className='inline-block cursor-default'>Recomendaciones</h2>
        :
        <>

          <h2 onClick={fetchProducts} className='inline-block underline cursor-pointer'>Recomendaciones</h2>
          <FontAwesomeIcon icon={faChevronRight} className='icon inline-block m-sides' />
          <h2 className="inline-block">{formatText(actualCategory)}</h2>
        </>
      }

      <div className="container">
        {products.map((product, index) => {
          return (
            <CardProduct key={index} product={product} />
          )
        })}
      </div>
    </section >
  )
}