import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../../carousel.css';
import { Carousel } from 'react-responsive-carousel';


export default function CarouselBase({ product }) {
  return (
    <Carousel
      autoPlay={true}
      interval={2000}
      infiniteLoop={true}
      emulateTouch={true}
      swipeable={true}
    >
      {/* {product.imagenes.map(img => {
        return (
          <div key={img.id}>
            <img src={img.url} />
            <p className="legend">Pendiente titulo descriptivo</p>
          </div>)
      })} */}

      {product.imagenes ?
        product.imagenes.map(img => {
          return (
            <div key={img.id}>
              <img src={img.url} />
              {/* <p className="legend">Pendiente titulo descriptivo</p> */}
            </div>)
        }) : ''}
    </Carousel>
  )
}
