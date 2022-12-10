import CardCategory from './CardCategory';
// import categories from '../../categories.json';
import { useContext } from 'react';
import { UserContext } from "../../contexts/UserContext";

export default function Categories() {

  const { categories } = useContext(UserContext);

  return (
    <section className='categories bg-white p-30 flex column wrap justify-evenly gap-30'>
      <h2>Buscar por tipo de alojamiento</h2>

      <div className="flex wrap justify-evenly gap-30">
        {/* Aviso pedido en el 1er sprint si las categorias no eran exactamente 4*/}
        {/* {categories.length !== 4 ? console.log('No hay precisamente 4 categorias') : null} */}

        {categories.map((category, index) => {
          return (
            <CardCategory key={index} category={category} />
          )
        })}
      </div>
    </section>
  )
}