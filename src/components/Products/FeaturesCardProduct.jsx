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

export default function FeaturesCards({ product }) {
  function iconCallCards(id) {
    switch (id) {
      case 1:
        return <FontAwesomeIcon icon={faPersonSwimming} className="featureIconCards" />;

      case 2:
        return <FontAwesomeIcon icon={faCar} className="featureIconCards" />;

      case 3:
        return <FontAwesomeIcon icon={faSnowflake} className="featureIconCards" />;

      case 5:
        return <FontAwesomeIcon icon={faWheelchairAlt} className="featureIconCards" />;

      case 6:
        return <FontAwesomeIcon icon={faSmokingBan} className="featureIconCards" />;

      case 7:
        return <FontAwesomeIcon icon={faMartiniGlassCitrus} className="featureIconCards" />;

      case 9:
        return <FontAwesomeIcon icon={faBellConcierge} className="featureIconCards" />;

      case 10:
        return <FontAwesomeIcon icon={faMugSaucer} className="featureIconCards" />;

      case 11:
        return <FontAwesomeIcon icon={faWifi} className="featureIconCards" />;

      case 12:
        return <FontAwesomeIcon icon={faCar} className="featureIconCards" />;

      case 13:
        return <FontAwesomeIcon icon={faUtensils} className="featureIconCards" />;

      case 14:
        return <FontAwesomeIcon icon={faShield} className="featureIconCards" />;

      case 15:
        return <FontAwesomeIcon icon={faPaw} className="featureIconCards" />;

      case 16:
        return <FontAwesomeIcon icon={faFire} className="featureIconCards" />;

      case 17:
        return <FontAwesomeIcon icon={faDroplet} className="featureIconCards" />;

      case 18:
        return <FontAwesomeIcon icon={faCoffee} className="featureIconCards" />;

      case 19:
        return <FontAwesomeIcon icon={faTv} className="featureIconCards" />;

      case 20:
        return <FontAwesomeIcon icon={faClock} className="featureIconCards" />;

      case 21:
        return <FontAwesomeIcon icon={faCartFlatbedSuitcase} className="featureIconCards" />;

      case 22:
        return <FontAwesomeIcon icon={faDumbbell} className="featureIconCards" />;

      case 23:
        return <FontAwesomeIcon icon={faSmile} className="featureIconCards" />;

      case 24:
        return <FontAwesomeIcon icon={faLeaf} className="featureIconCards" />;

      case 25:
        return <FontAwesomeIcon icon={faUtensils} className="featureIconCards" />;

      case 26:
        return <FontAwesomeIcon icon={faFireBurner} className="featureIconCards" />;

      case 27:
        return <FontAwesomeIcon icon={faCar} className="featureIconCards" />;

      case 28:
        return <FontAwesomeIcon icon={faBroom} className="featureIconCards" />;

      case 29:
        return <FontAwesomeIcon icon={faWater} className="featureIconCards" />;

      case 30:
        return <FontAwesomeIcon icon={faWater} className="featureIconCards" />;

      case 31:
        return <FontAwesomeIcon icon={faCircleExclamation} className="featureIconCards" />;

      default:
        return '';
    }
  }

  return (
    <div className="flex wrap grey gap-10">
      {product.caracteristicas ?
        product.caracteristicas.map((feature, id) => {
          return (
            <p key={feature.id} >
              {iconCallCards(feature.id)}
            </p>
          );
        }) : ''}
    </div>
  );
}