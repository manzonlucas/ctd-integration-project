import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../carousel.css';
import { Carousel } from 'react-responsive-carousel';

export default function CarouselBase() {
  return (
    <Carousel
      autoPlay={true}
      interval={2000}
      infiniteLoop={true}
      emulateTouch={true}
      swipeable={true}
    >
      <div>
        <img src="../hotelroom/room1.jpg" />
        <p className="legend">Pileta</p>
      </div>
      <div>
        <img src="../hotelroom/room2.jpg" />
        <p className="legend">Suite 1</p>
      </div>
      <div>
        <img src="../hotelroom/room3.jpg" />
        <p className="legend">Pileta climatizada</p>
      </div>
      <div>
        <img src="../hotelroom/room4.jpg" />
        <p className="legend">Habitacion doble</p>
      </div>
      <div>
        <img src="../hotelroom/room5.jpg" />
        <p className="legend">Habitacion con living/comedor</p>
      </div>
    </Carousel>
  );
}