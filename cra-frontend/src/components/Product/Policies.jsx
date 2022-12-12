export default function Policies({ product }) {
  function formatPolicies(policy) {
    return policy.split('\n');
  }

  return (
    <section className="policies">
      <h3>Qué tenes que saber</h3>

      {console.log(formatPolicies(product.norma))}
      <div className="policiesContainer">
        <article className="policiesItem">
          <h4>Normas de la casa</h4>
          {/* {formatPolicies(product.norma).map(policy => {
            return (<p>{policy}</p>)
          })} */}

          <p>Checkout: 10:00</p>
          <p>No se permiten fiestas</p>
          <p>No fumar</p>

        </article>

        <article className="policiesItem">
          <h4>Salud y seguridad</h4>
          {/* {formatPolicies(product.seguridad).map(policy => {
            return (<p>{policy}</p>)
          })} */}
          <p>Se aplican las pautas de distanciamiento social y otras normas relacionadas al coronavirus</p>
          <p>Detector de humo</p>
          <p>Depósito de seguridad</p>
        </article>

        <article className="policiesItem">
          <h4>Políticas de cancelación</h4>
          {/* {formatPolicies(product.cancelacion).map(policy => {
            return (<p>{policy}</p>)
          })} */}

          <p>Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía</p>
        </article>
      </div>
    </section>
  )
}