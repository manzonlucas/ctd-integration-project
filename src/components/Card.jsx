import products from '../products.json';

export default function Card() {
  return (
    <>
      {products.map((product) => {
        return (
          <article className="card">
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