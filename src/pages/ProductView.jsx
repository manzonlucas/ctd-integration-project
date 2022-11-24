import { useParams, Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

import Layout from "../components/Layout";
import CarouselMaster from "../components/Product/CarouselMaster";
import ImgGrid from "../components/Product/ImgGrid";
import Reservation from "../components/Product/Reservation";
import { UserContext } from "../contexts/UserContext";

export default function ProductView() {

  const baseUrl = 'http://ec2-18-191-158-71.us-east-2.compute.amazonaws.com:8080/api/';
  const { isLoading, setIsLoading } = useContext(UserContext);

  const [carouselIsOpen, setcarouselIsOpen] = useState(false);
  const [features, setFeatures] = useState([]);
  const { id } = useParams();

  const RANKING = '★★★★★☆☆☆☆☆';
  function getRanking(ranking) {
    return RANKING.slice(5 - ranking, 10 - ranking);
  }

  const [product, setProduct] = useState('');

  async function getProductById(id) {
    const response = await axios.get(baseUrl + 'producto/' + id);
    setProduct(response.data);
    setIsLoading(false);
  }


  useEffect(() => {
    // fetchFeatures();
    setIsLoading(true);
    setProduct(getProductById(id));
  }, []);

  function handleClickCarouselState() {
    setcarouselIsOpen(!carouselIsOpen);
  }

  if (isLoading) {
    return (
      <Layout>
        <p>Loading</p>
      </Layout>
    )
  }

  return (
    <Layout>
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

      <section className="productSubheader">
        <div>
          <FontAwesomeIcon icon={faLocationDot} style={{ display: "inline-block", marginRight: '5px' }} />
          <span>{product.ciudad}</span>
        </div>
        <div>
          <p className="ranking">{getRanking(3)}</p>
        </div>
      </section>

      <CarouselMaster handleClickCarouselState={handleClickCarouselState} carouselIsOpen={carouselIsOpen} />

      <ImgGrid handleClickCarouselState={handleClickCarouselState} />

      <section className="description">
        <p>{product.descripcion}</p>
      </section>

      <section className="features">
        <h3>Qué ofrece este lugar?</h3>
        <div className="featuresContainer">

          {product.caracteristicas ?
            product.caracteristicas.map((feature, id) => {
              return <p key={feature.id}>{feature.nombre}</p>
            }) : ''}
        </div>
      </section>

      <section className="policies">
        <h3>Qué tenes que saber</h3>
        <div className="policiesContainer">
          <article className="policiesItem">
            <h4>Normas de la casa</h4>
            <p>Checkout: 10:00</p>
            <p>No se permiten fiestas</p>
            <p>No fumar</p>

          </article>

          <article className="policiesItem">
            <h4>Salud y seguridad</h4>
            <p>Se aplican las pautas de distanciamiento social y otras normas relacionadas al coronavirus</p>
            <p>Detector de humo</p>
            <p>Depósito de seguridad</p>
          </article>

          <article className="policiesItem">
            <h4>Políticas de cancelación</h4>
            Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía
          </article>
        </div>
      </section>

      <section className="reservation">
        <h3>Hacé tu reserva</h3>
        <Reservation product={product} />
      </section>

    </Layout >
  )
}