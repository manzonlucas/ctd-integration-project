import products from '../../products.json';

export default function CardProduct() {
  return (
    <>
      {products.map((product, index) => {
        return (
          <article className="card" key={index}>
            {/* REEMPLAZAR INDEX POR ID UNA VEZ CONECTADO A DB */}
            <div>
              <img src="./img-placeholder.jpg" alt="" />
            </div>
            <div>
              <div className='product-info'>
                <p>Categoría: {product.category}</p>
                <p>Nombre: {product.title}</p>
                <p>Ubicación: {product.location}</p>
                <p>Descripción: {product.description} </p>
              </div>
              <button>Ver detalle</button>
            </div>
          </article >
        )
      })}
    </>
  )
}