import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';

export default function NewProduct() {
    return (
        <>
            <Layout>
                <div>
                    <h1>Administración</h1>
                </div>

                    <h2>Crear propiedad</h2>

                <div>
                    
                        <form action="" className="form">
                    <div>
                        <label>Nombre de la propiedad</label>
                        <input type="text" id="productname" name="productname" className="formInput" placeholder="Hotel Hermitage"></input>
                    </div>

                    <div>
                        <label>Categoría</label>
                        <select name="category" id="category">

                        </select>
                    </div>

                    <div>
                        <label>Dirección</label>
                        <input type="text" id="productadress" name="productadress" className="formInput" placeholder="Av. Colón 1643"></input>
                    </div>

                    <div>
                        <label>Ciudad</label>
                        <select name="city" id="city">

                        </select>
                    </div>

                    <div>
                        <label>Descripción</label>
                        <input type="text" id="productname" name="productname" className="formInput" placeholder="Escribir aquí"></input>
                    </div>

                    <h3>Agregar atributos</h3>

                    <div>

                    <div>
                        <label>Nombre</label>
                        <input type="text" id="attributes" name="attributes" className="formInput" placeholder="wifi"></input>
                    </div>
                    <div>
                        <label>Ícono</label>
                        <input type="text" id="icon" name="icon" className="formInput" placeholder="fa-wifi"></input>
                        <FontAwesomeIcon icon={faSquarePlus} style={{ display: "inline-block", marginRight: '5px', color: '#1DBEB4'}} />
                    </div>

                    </div>

                    <h3>Políticas del producto</h3>

                    <div>

                    <div>
                        <h4>Normas de la casa</h4>
                        <label>Descripción</label>
                        <input type="text" id="description" name="description" className="formInput" placeholder="Escribir aquí"></input>
                    </div>

                    <div>
                        <h4>Salud y seguridad</h4>
                        <label>Descripción</label>
                        <input type="text" id="security" name="security" className="formInput" placeholder="Escribir aquí"></input>
                    </div>

                    <div>
                        <h4>Políticas de cancelación</h4>
                        <label>Descripción</label>
                        <input type="text" id="policies" name="policies" className="formInput" placeholder="Escribir aquí"></input>
                    </div>

                    <div>

                    <h3>Cargar imágenes</h3>
                        <input type="text" id="urlimg" name="urlimg" className="formInput" placeholder="Insertar https://"></input>
                        <FontAwesomeIcon icon={faSquarePlus} style={{ display: "inline-block", marginRight: '5px', color: '#1DBEB4'}} />
                    </div>

                    </div>

                    <button type="submit" className="submitButton" value='Crea producto'>Crear</button>

                    </form>
                </div>
            </Layout>
        </>
    )



}