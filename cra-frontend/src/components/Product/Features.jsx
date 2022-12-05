import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonSwimming,
  faCar,
  faSnowflake,
} from "@fortawesome/free-solid-svg-icons";

export default function Features({ product }) {
  function iconCall(id) {
    switch (id) {
      case 1:
        return <FontAwesomeIcon icon={faPersonSwimming} className="featureIcon" />;

      case 2:
        return <FontAwesomeIcon icon={faCar} className="featureIcon" />;

      case 3:
        return <FontAwesomeIcon icon={faSnowflake} className="featureIcon" />;
    }
  }

  return (
    <section className="features">
      <h3>Qué ofrece este lugar?</h3>
      <div className="featuresContainer">
        {product.caracteristicas.map((feature, id) => {
          return (
            <p key={feature.id}>
              {iconCall(feature.id)}
              {feature.nombre}
            </p>
          );
        })}
      </div>
    </section>
  );
}
