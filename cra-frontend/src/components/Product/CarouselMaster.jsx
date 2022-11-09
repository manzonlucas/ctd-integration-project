import CarouselBase from "./CarouselBase";

export default function CarouselMaster({ carouselIsOpen, handleClickCarouselState }) {
  return (
    <>
      {/* DESKTOP CAROUSEL */}
      <div className={carouselIsOpen ? 'carouselOverlayShown' : ''} onClick={handleClickCarouselState} />
      <section className={carouselIsOpen ? 'carouselDesktopShown' : 'carouselDesktopHidden'}>
        <CarouselBase />
      </section>

      {/* TABLET/MOBILE CAROUSEL */}
      <section className='carouselTabletMobile'>
        <CarouselBase />
      </section>
    </>
  )
}