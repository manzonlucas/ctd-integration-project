import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonSwimming,
  faCar,
  faSnowflake,
  faWifi,
  faWheelchairAlt,
  faSmokingBan,
  faMartiniGlassCitrus,
  faPaw,
  faBellConcierge,
  faMugSaucer,
  faUtensils,
  faShield,
  faFire,
  faDroplet,
  faCoffee,
  faTv,
  faClock,
  faCartFlatbedSuitcase,
  faDumbbell,
  faSmile,
  faLeaf,
  faFireBurner,
  faBroom,
  faWater,
  faCircleExclamation
} from "@fortawesome/free-solid-svg-icons";

export default function Features({ product }) {
  function iconCall(id) {
    switch (id) {
      case 1:
        return <FontAwesomeIcon icon={faPersonSwimming} className="featureIcon" />;

      case 3:
        return <FontAwesomeIcon icon={faSnowflake} className="featureIcon" />;

      case 5:
        return <FontAwesomeIcon icon={faWheelchairAlt} className="featureIcon" />;

      case 6:
        return <FontAwesomeIcon icon={faSmokingBan} className="featureIcon" />;

      case 7:
        return <FontAwesomeIcon icon={faMartiniGlassCitrus} className="featureIcon" />;

      case 9:
        return <FontAwesomeIcon icon={faBellConcierge} className="featureIcon" />;

      case 10:
        return <FontAwesomeIcon icon={faMugSaucer} className="featureIcon" />;

      case 11:
        return <FontAwesomeIcon icon={faWifi} className="featureIcon" />;

      case 12:
        return <FontAwesomeIcon icon={faCar} className="featureIcon" />;

      case 13:
        return <FontAwesomeIcon icon={faUtensils} className="featureIcon" />;

      case 14:
        return <FontAwesomeIcon icon={faShield} className="featureIcon" />;

      case 15:
        return <FontAwesomeIcon icon={faPaw} className="featureIcon" />;

      case 16:
        return <FontAwesomeIcon icon={faFire} className="featureIcon" />;

      case 17:
        return <FontAwesomeIcon icon={faDroplet} className="featureIcon" />;

      case 18:
        return <FontAwesomeIcon icon={faCoffee} className="featureIcon" />;

      case 19:
        return <FontAwesomeIcon icon={faTv} className="featureIcon" />;

      case 20:
        return <FontAwesomeIcon icon={faClock} className="featureIcon" />;

      case 21:
        return <FontAwesomeIcon icon={faCartFlatbedSuitcase} className="featureIcon" />;

      case 22:
        return <FontAwesomeIcon icon={faDumbbell} className="featureIcon" />;

      case 23:
        return <FontAwesomeIcon icon={faSmile} className="featureIcon" />;

      case 24:
        return <FontAwesomeIcon icon={faLeaf} className="featureIcon" />;

      case 25:
        return <FontAwesomeIcon icon={faUtensils} className="featureIcon" />;

      case 26:
        return <FontAwesomeIcon icon={faFireBurner} className="featureIcon" />;

      case 27:
        return <FontAwesomeIcon icon={faCar} className="featureIcon" />;

      case 28:
        return <FontAwesomeIcon icon={faBroom} className="featureIcon" />;

      case 29:
        return <FontAwesomeIcon icon={faWater} className="featureIcon" />;

      case 30:
        return <FontAwesomeIcon icon={faWater} className="featureIcon" />;

      case 31:
        return <FontAwesomeIcon icon={faCircleExclamation} className="featureIcon" />;

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
