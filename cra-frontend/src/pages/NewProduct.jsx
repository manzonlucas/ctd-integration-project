import Layout from "../components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../../src/classes.css";

export default function NewProduct() {
    return (
        <Layout>
            <section className="bg-grey p-15 gap-2 column justify-around align-center">
                <h1 className="white">Administración</h1>
            </section>

            <section className="bg-cream p-30 p-bottom">
                <h2 className="grey m-bottom-10">Crear propiedad</h2>

                <form className="flex column gap-20 shadow w-95 grey bg-white radius-5 p-20">
                    <section>
                        <h4>Agregar datos</h4>

                        <div className="bg-cream p-10 radius-10 flex wrap sm-column">
                            <div className="w-50 sm-w-100">
                                <label htmlFor="productName" className="display-block">Nombre de la propiedad</label>
                                <input
                                    type="text"
                                    id="productName"
                                    name="productName"
                                    placeholder="Hotel Hermitage"
                                    className="w-50 sm-w-100"
                                ></input>
                            </div>

                            <div className="w-50 sm-w-100">
                                <label htmlFor="category" className="display-block">Categoría</label>
                                <input
                                    type="text"
                                    className="w-50 sm-w-100"
                                ></input>
                            </div>

                            <div className="w-50 sm-w-100">
                                <label htmlFor="productAdress" className="display-block">Dirección</label>
                                <input
                                    type="text"
                                    id="productAdress"
                                    name="productAdress"
                                    placeholder="Av. Colón 1643"
                                    className="w-50 sm-w-100"
                                ></input>
                            </div>

                            <div className="w-50 sm-w-100">
                                <label htmlFor="city" className="display-block">Ciudad</label>
                                <input
                                    type="text"
                                    className="w-50 sm-w-100"
                                ></input>
                            </div>

                            <div className="w-100">
                                <label htmlFor='productDescription' className="display-block">Descripción</label>
                                <input
                                    type="text"
                                    id="productDescription"
                                    name="productDescription"
                                    placeholder="Escribir aquí"
                                    className="w-100"
                                ></input>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h4>Agregar características</h4>

                        <div className="bg-cream p-10 radius-10 flex wrap">
                            <div className="w-50 sm-w-100">
                                <label htmlFor="features" className="display-block">Nombre</label>
                                <input
                                    type="text"
                                    id="features"
                                    name="features"
                                    placeholder="wifi"
                                    className="w-5 sm-w-100"
                                ></input>
                            </div>

                            <div className="w-50 sm-w-100">
                                <label htmlFor="icon" className="display-block">Icono</label>
                                <input
                                    type="text"
                                    id="icon"
                                    name="icon"
                                    placeholder="fa-wifi"
                                    className="w-50 sm-w-100"
                                ></input>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h4>Políticas del producto</h4>
                        <div className="bg-cream p-10 radius-10 flex justify-between wrap sm-column">
                            <div className="w-30 sm-w-100">
                                <label htmlFor="norma" className="display-block">Normas de la casa</label>
                                <input type="text" id="norma" className="w-90 sm-w-100" />
                            </div>
                            <div className="w-30 sm-w-100">
                                <label htmlFor="seguridad" className="display-block">Salud y seguridad</label>
                                <input type="text" id="seguridad" className="w-90 sm-w-100" />
                            </div>
                            <div className="w-30 sm-w-100">
                                <label htmlFor="cancelacion" className="display-block">Políticas de cancelación</label>
                                <input type="text" id="cancelacion" className="w-90 sm-w-100" />
                            </div>
                        </div>
                    </section>

                    <section className="flex column gap-10">
                        <h4>Cargar imágenes</h4>
                        <div className="bg-cream p-10 radius-10">
                            <label htmlFor="img1" className="m-sides">#1</label>
                            <input
                                type="url"
                                id="img1"
                                name="img1"
                                placeholder="url...."
                                className="w-30 sm-w-100"
                            ></input>
                        </div>
                        <div className="bg-cream p-10 radius-10">
                            <label htmlFor="img2" className="m-sides">#2</label>
                            <input
                                type="url"
                                id="img2"
                                name="img2"
                                placeholder="url...."
                                className="w-30 sm-w-100"
                            ></input>
                        </div>
                        <div className="bg-cream p-10 radius-10">
                            <label htmlFor="img3" className="m-sides">#3</label>
                            <input
                                type="url"
                                id="img3"
                                name="img3"
                                placeholder="url...."
                                className="w-30 sm-w-100"
                            ></input>
                        </div>
                        <div className="bg-cream p-10 radius-10">
                            <label htmlFor="img4" className="m-sides">#4</label>
                            <input
                                type="url"
                                id="img4"
                                name="img4"
                                placeholder="url...."
                                className="w-30 sm-w-100"
                            ></input>
                        </div>
                        <div className="bg-cream p-10 radius-10">
                            <label htmlFor="img5" className="m-sides">#5</label>
                            <input
                                type="url"
                                id="img5"
                                name="img5"
                                placeholder="url...."
                                className="w-30 sm-w-100"
                            ></input>
                        </div>
                    </section>


                    <section>
                        <h4>Cargar ubicación</h4>
                        <div className="bg-cream p-10 radius-10">
                            <label htmlFor="location" className="m-sides">URL de Google Maps</label>
                            <input
                                type="text"
                                id="location"
                                name="location"
                                placeholder="ubicacion? como cargar?"
                                className="w-30 sm-w-100"
                            ></input>
                        </div>
                    </section>

                    <Link to={"/successfulProduct"} className="cyan bold bg-white border-cyan radius-5 p-10-20 decoration-none center m-auto">Crear</Link>

                </form>
            </section>
        </Layout >
    )
}
