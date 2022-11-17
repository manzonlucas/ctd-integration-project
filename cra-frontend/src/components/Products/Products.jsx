import CardProduct from "./CardProduct";
import { useContext } from "react";
import { UserContext } from '../../contexts/UserContext';

export default function Products() {
  const { products } = useContext(UserContext);

  return (
    < section className="recommendations" >

      <h2>Recomendaciones</h2>
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