export default function ImgGrid({ handleClickCarouselState }) {
  return (
    <section className="imgGrid">
      <img src="../hotelroom/room1.jpg" alt="Habitacion de ejemplo" className="mainImg" />
      <div className="secondaryImgs">
        <img src="../hotelroom/room2.jpg" alt="Placeholder" className="gridItem" />
        <img src="../hotelroom/room3.jpg" alt="Placeholder" className="gridItem" />
        <img src="../hotelroom/room4.jpg" alt="Placeholder" className="gridItem" />
        <img src="../hotelroom/room5.jpg" alt="Placeholder" className="gridItem" />
        <button className="carouselOpener" onClick={handleClickCarouselState}>Ver mas</button>
      </div>
    </section>
  )
}