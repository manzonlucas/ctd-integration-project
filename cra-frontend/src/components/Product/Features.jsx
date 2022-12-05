import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonSwimming,
  faCar,
  faSnowflake,
  faWifi,
  faWheelchairAlt,
  faSmokingBan,
  faMartiniGlassCitrus,
  faPaw
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

      case 4:
        return <FontAwesomeIcon icon={faWifi} className="featureIcon" />;

      case 5:
        return <FontAwesomeIcon icon={faWheelchairAlt} className="featureIcon" />;

      case 6:
        return <FontAwesomeIcon icon={faSmokingBan} className="featureIcon" />;

      case 7:
        return <FontAwesomeIcon icon={faMartiniGlassCitrus} className="featureIcon" />;

      case 8:
        return <FontAwesomeIcon icon={faPaw} className="featureIcon" />;

      default:
        return '';
    }
  }

  return (
    <section className="features">
      <h3>Qué ofrece este lugar?</h3>
      <div className="featuresContainer">
        {product.caracteristicas ?
          product.caracteristicas.map((feature, id) => {
            return (
              <p key={feature.id}>
                {iconCall(feature.id)}
                {feature.nombre}
              </p>
            );
          }) : ''}
      </div>
    </section>
  );
}
