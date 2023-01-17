import CarouselBase from "./CarouselBase";

export default function CarouselMaster({ carouselIsOpen, handleClickCarouselState, product }) {
  return (
    <>
      {/* DESKTOP CAROUSEL */}
      <div className={carouselIsOpen ? 'carouselOverlayShown' : ''} onClick={handleClickCarouselState} />
      <section className={carouselIsOpen ? 'carouselDesktopShown' : 'carouselDesktopHidden'}>
        <CarouselBase product={product} />
      </section>

      {/* TABLET/MOBILE CAROUSEL */}
      <section className='carouselTabletMobile' >
        <CarouselBase product={product} />
      </section>
    </>
  )
}