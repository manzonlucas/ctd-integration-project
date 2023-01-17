import CardProduct from "./CardProduct";

export default function Recommendations({ products }) {
  return (
    <section className="recommendations">
      <h2>Recomendaciones</h2>
      <div className="container">

        {/* TEMPLATE PARA IMPLEMENTAR CONSUMO DE API DESDE HOME.JSX */}
        {/* {products.map(product => {
          <CardProduct product={product} />
        })} */}

        <CardProduct />
      </div>
    </section>
  )
}