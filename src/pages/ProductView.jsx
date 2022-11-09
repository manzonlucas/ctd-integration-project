import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faLocationDot } from '@fortawesome/free-solid-svg-icons';

import Layout from "../components/Layout";
import CarouselMaster from "../components/Product/CarouselMaster";
import ImgGrid from "../components/Product/ImgGrid";

export default function ProductView() {

  const [product, setProduct] = useState('');
  const [carouselIsOpen, setcarouselIsOpen] = useState(false);
  const params = useParams();

  const RANKING = '★★★★★☆☆☆☆☆';
  function getRanking(ranking) {
    return RANKING.slice(5 - ranking, 10 - ranking);
  }

  function handleClickCarouselState() {
    setcarouselIsOpen(!carouselIsOpen);
  }

  return (
    <>
      <Layout>
        <section className="productHeader">
          <div>
            <p>Categoria</p>
            <h3>Nombre producto</h3>
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
            <span>Ubicacion a 400mts de CABA</span>
          </div>
          <div>
            <p className="ranking">{getRanking(3)}</p>
          </div>
        </section>

        <CarouselMaster handleClickCarouselState={handleClickCarouselState} carouselIsOpen={carouselIsOpen} />

        <ImgGrid handleClickCarouselState={handleClickCarouselState} />

        <section className="description">
          <h2>Alojate en el corazon de Buenos Aires</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, quis! Eum ipsa aperiam vero, perspiciatis, iusto ab assumenda dignissimos est iste inventore facilis! Porro sapiente sequi, ullam quisquam unde omnis!
            Suscipit consectetur, officiis earum voluptatum, eaque quae id aspernatur maxime eos praesentium odit porro magnam pariatur voluptas non! Reprehenderit consequatur ab deleniti non debitis atque officiis facilis earum cum dolores?
            Sit ipsam nulla quaerat quasi ipsa consequatur odit molestias quo. Nihil nam veniam vero quasi suscipit ducimus officiis, tempore placeat obcaecati facere fuga tenetur eaque, illum, libero similique exercitationem ea!
            Reiciendis cumque omnis ipsum corporis explicabo consequatur similique saepe quasi aliquid, totam at a voluptas quis quod sequi consequuntur mollitia quas facilis deleniti aspernatur. Ex ullam error illum expedita sit.
            Error, dolorum reprehenderit velit tempora non in cum quas labore. Quaerat ad illum corporis magnam distinctio, veritatis sequi et optio quo deserunt magni est veniam iste consequatur facilis porro esse!
            Nobis labore culpa doloremque autem deleniti placeat sunt inventore non sapiente, repudiandae rem soluta mollitia quas et cupiditate suscipit fugit laborum similique. Natus voluptatum voluptatibus dolores rerum non alias iste?
            Voluptatum incidunt odit ducimus reiciendis error commodi quasi totam! Corrupti assumenda obcaecati quod facilis beatae voluptate soluta asperiores unde, excepturi, exercitationem dolorem amet atque praesentium mollitia hic, non vero debitis!
            Delectus quisquam, omnis, earum atque nobis illum ea tempore laudantium cupiditate inventore dolore recusandae nulla minima illo praesentium impedit consequuntur optio magni cum magnam nisi animi quidem. Cum, pariatur magnam.
            Quae iure aperiam autem recusandae unde sapiente ipsum temporibus aliquid magnam reiciendis est quo assumenda asperiores modi, dolorum consequuntur tenetur dolore! Porro, placeat itaque quas labore dolor eum nihil sunt.
            A dicta corrupti illum est cumque deserunt ea voluptates veniam nemo eius temporibus necessitatibus velit fugit rem expedita dolorem commodi ratione, omnis natus porro sit. Ut odio a temporibus quisquam.
          </p>
        </section>

        <section className="features">
          <h3>Qué ofrece este lugar? Listar todas las caracteristicas existentes y asignar un icono a cada una</h3>
          <div className="featuresContainer">
            <p className="featuresItem">Caracteristica desde backend</p>
            <p className="featuresItem">Caracteristica desde backend</p>
            <p className="featuresItem">Caracteristica desde backend</p>
            <p className="featuresItem">Caracteristica desde backend</p>
            <p className="featuresItem">Caracteristica desde backend</p>
            <p className="featuresItem">Caracteristica desde backend</p>
            <p className="featuresItem">Caracteristica desde backend</p>
            <p className="featuresItem">Caracteristica desde backend</p>
            <p className="featuresItem">Caracteristica desde backend</p>
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

      </Layout >
    </>
  )
}