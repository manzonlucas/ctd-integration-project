import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import axios from 'axios';
import Layout from "../components/Layout";
import CarouselMaster from "../components/Product/CarouselMaster";
import ImgGrid from "../components/Product/ImgGrid";
import Booking from "../components/Product/Booking";
import Features from "../components/Product/Features";
import Description from "../components/Product/Description";
import ProductSubheader from "../components/Product/ProductSubheader";
import ProductHeader from "../components/Product/ProductHeader";
import AvailableDates from "../components/Product/AvailableDates";

export default function ProductView() {

  const baseUrl = 'http://ec2-18-191-158-71.us-east-2.compute.amazonaws.com:8080/api/';
  const { isLoading, setIsLoading } = useContext(UserContext);
  const [product, setProduct] = useState('');
  const [carouselIsOpen, setcarouselIsOpen] = useState(false);
  const { id } = useParams();

  async function getProductById(id) {
    const response = await axios.get(baseUrl + 'producto/' + id);
    setProduct(response.data);
    setIsLoading(false);
  }

  useEffect(() => {
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

      <ProductHeader product={product} />

      <ProductSubheader product={product} />

      <CarouselMaster handleClickCarouselState={handleClickCarouselState} carouselIsOpen={carouselIsOpen} product={product} />

      <ImgGrid handleClickCarouselState={handleClickCarouselState} product={product} />

      <Description product={product} />

      <Features product={product} />

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

      <AvailableDates product={product} />
      {/* <Booking product={product} /> */}

    </Layout >
  )
}