export default function Features({ product }) {
  return (
    <section className="features">
      <h3>Qué ofrece este lugar?</h3>
      <div className="featuresContainer">
        {product.caracteristicas ?
          product.caracteristicas.map((feature, id) => {
            return <p key={feature.id}>{feature.nombre}</p>
          }) : ''}
      </div>
    </section>
  )
}