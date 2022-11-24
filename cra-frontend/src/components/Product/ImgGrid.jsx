export default function ImgGrid({ handleClickCarouselState, product }) {

  if (product.imagenes) {
    return (
      <section className="imgGrid">
        <img src={product.imagenes[0].url} alt="" className="mainImg" />

        <div className="secondaryImgs">
          {product.imagenes.slice(1).map((img) => {
            return <img key={img.id} src={img.url} className="gridItem" />
          })
          }
        </div>
        < button className="carouselOpener" onClick={handleClickCarouselState}>Ver mas</button>
      </section >
    );
  }

}
