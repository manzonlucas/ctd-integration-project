import Layout from "../components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import "../../src/classes.css";
import { Link } from "react-router-dom";

export default function NewProduct() {

    return (
        <>
            <Layout>
                <section className="h-60px bg-grey p-15 gap-2 column justify-around align-center">
                    <h1 className="white" >Administración</h1>
                </section>

                <div className="m-50 grey">
                    <h2>Crear propiedad</h2>
                </div>

                <div className="m-50 shadow">
                    <form action="" className="w-95 m-sides15">
                        <div className="flex gap-10 wrap m-10 justify-center">
                            <div className="w-40 h-40px m-10 m-top-20">
                                <h4 className="m-bottom-10">Nombre de la propiedad</h4>
                                <input type="text" id="productname" name="productname" className="formInput " placeholder="Hotel Hermitage"></input>
                            </div>

                            <div className="w-40 h-40px m-10 m-top-20">
                                <h4 className="m-bottom-10">Categoría</h4>
                                <select name="category" id="category">
                                </select>
                            </div>

                            <div className="w-40 h-40px m-10 m-top-20">
                                <h4 className="m-bottom-10">Dirección</h4>
                                <input type="text" id="productadress" name="productadress" className="formInput" placeholder="Av. Colón 1643"></input>
                            </div>

                            <div className="w-40 h-40px m-10 m-top-20">
                                <h4 className="m-bottom-10">Ciudad</h4>
                                <select name="city" id="city">
                                </select>
                            </div>

                            <div className="flex column gap-10 w-100 h-150px m-top-20">
                                <h4>Descripción</h4>
                                <input type="text" id="productname" name="productname" className="formInput-newproduct" placeholder="Escribir aquí"></input>
                            </div>
                        </div>

                        <div className="m-10 m-top-20">
                            <h4>Agregar atributos</h4>
                        </div>

                        <div className="flex gap-10 wrap m-10 shadow-grey h-110px">
                            <div className="w-60 h-40px m-10">
                                <h4 className="m-bottom-10">Nombre</h4>
                                <input type="text" id="attributes" name="attributes" className="formInput" placeholder="wifi"></input>
                            </div>

                            <div className="w-30 h-40px m-10">
                                <h4 className="m-bottom-10">Ícono</h4>
                                <input type="text" id="icon" name="icon" className="formInput" placeholder="fa-wifi"></input>
                            </div>

                        </div>

                        <div className="m-10 m-top-20">
                            <h4>Políticas del producto</h4>
                        </div>

                        <div className="flex h-300px wrap justify-center shadow">
                            <div className="w-30 h-200px m-10 m-top-20">
                                <h4>Normas de la casa</h4>
                                <h5 className="m-top-20 m-bottom-10">Descripción</h5>
                                <input type="text" id="description" name="description" className="formInput" placeholder="Escribir aquí"></input>
                            </div>

                            <div className="w-30 h-200px m-10 m-top-20">
                                <h4>Salud y seguridad</h4>
                                <h5 className="m-top-20 m-bottom-10">Descripción</h5>
                                <input type="text" id="security" name="security" className="formInput" placeholder="Escribir aquí"></input>
                            </div>

                            <div className="w-30 h-200px m-10 m-top-20">
                                <h4>Políticas de cancelación</h4>
                                <h5 className="m-top-20 m-bottom-10">Descripción</h5>
                                <input type="text" id="policies" name="policies" className="formInput" placeholder="Escribir aquí"></input>
                            </div>
                        </div>

                        <div className="flex column gap-10 wrap shadow-grey m-top-30 h-200px">
                            <div className="w-95 h-55px m-10">
                                <h4 className="m-bottom-10">Cargar imágenes</h4>
                                <input type="text" id="urlimg" name="urlimg" className="formInput" placeholder="Insertar https://"></input>

                            </div>

                            <div className="w-95 h-55px m-10 m-top-20">
                                <h4 className="m-bottom-10">Cargar ubicación</h4>
                                <input type="text" id="urlmapa" name="urlmapa" className="formInput" placeholder="Insertar https://"></input>
                                <FontAwesomeIcon icon={faSquarePlus} style={{ display: "inline-block", marginRight: '5px', color: '#1DBEB4' }} />

                            </div>
                        </div>

                        <div className="justify-center h-60px m-50 flex">
                            <Link to={'/successfulProduct'} className='okButton-newproduct'>
                                <p>Crear</p>
                            </Link>
                        </div>

                    </form>
                </div>
            </Layout>
        </>
    );
}
