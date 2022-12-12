import Layout from "../components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import "../../src/classes.css";
import { Link } from "react-router-dom";

export default function NewProduct() {
    return (
        <>
            <Layout>
                <section className="h-60px bg-grey p-25 gap-2 m-auto center flex column justify-around align-center">
                    <h1 className="white">Administración</h1>
                </section>

                <div className="m-50">
                    <h2>Crear propiedad</h2>
                </div>

                <div className="m-50 shadow">
                    <form action="" className="w-80 m-sides15">
                        <div className="flex gap-10 wrap m-10 justify-center">
                            <div className="w-40 h-40px m-10">
                                <label>Nombre de la propiedad</label>
                                <input
                                    type="text"
                                    id="productname"
                                    name="productname"
                                    className="formInput"
                                    placeholder="Hotel Hermitage"
                                ></input>
                            </div>

                            <div className="w-40 h-40px m-10">
                                <label>Categoría</label>
                                <select name="category" id="category"></select>
                            </div>

                            <div className="w-40 h-40px m-10">
                                <label>Dirección</label>
                                <input
                                    type="text"
                                    id="productadress"
                                    name="productadress"
                                    className="formInput"
                                    placeholder="Av. Colón 1643"
                                ></input>
                            </div>

                            <div className="w-40 h-40px m-10">
                                <label>Ciudad</label>
                                <select name="city" id="city"></select>
                            </div>

                            <div className="w-80 h-60px m-10">
                                <label>Descripción</label>
                                <input
                                    type="text"
                                    id="productname"
                                    name="productname"
                                    className="formInput"
                                    placeholder="Escribir aquí"
                                ></input>
                            </div>
                        </div>

                        <div className="m-10">
                            <h4>Agregar atributos</h4>
                        </div>

                        <div className="flex gap-10 wrap m-10 justify-center shadow">
                            <div className="w-40 h-40px m-10">
                                <label>Nombre</label>
                                <input
                                    type="text"
                                    id="attributes"
                                    name="attributes"
                                    className="formInput"
                                    placeholder="wifi"
                                ></input>
                            </div>

                            <div className="w-20 h-40px m-10">
                                <label>Ícono</label>
                                <input
                                    type="text"
                                    id="icon"
                                    name="icon"
                                    className="formInput"
                                    placeholder="fa-wifi"
                                ></input>
                                <FontAwesomeIcon
                                    icon={faSquarePlus}
                                    style={{
                                        display: "inline-block",
                                        marginRight: "5px",
                                        color: "#1DBEB4",
                                    }}
                                />
                            </div>
                        </div>

                        <div className="m-10">
                            <h4>Políticas del producto</h4>
                        </div>

                        <div className="flex h-200px wrap justify-center shadow">
                            <div className="w-30 h-110px m-10">
                                <h4>Normas de la casa</h4>
                                <label>Descripción</label>
                                <input
                                    type="text"
                                    id="description"
                                    name="description"
                                    className="formInput"
                                    placeholder="Escribir aquí"
                                ></input>
                            </div>

                            <div className="w-30 h-110px m-10">
                                <h4>Salud y seguridad</h4>
                                <label>Descripción</label>
                                <input
                                    type="text"
                                    id="security"
                                    name="security"
                                    className="formInput"
                                    placeholder="Escribir aquí"
                                ></input>
                            </div>

                            <div className="w-30 h-110px m-10">
                                <h4>Políticas de cancelación</h4>
                                <label>Descripción</label>
                                <input
                                    type="text"
                                    id="policies"
                                    name="policies"
                                    className="formInput"
                                    placeholder="Escribir aquí"
                                ></input>
                            </div>
                        </div>

                        <div className="flex gap-10 wrap justify-center shadow m-10">
                            <div className="w-80 h-60px m-10">
                                <h4>Cargar imágenes</h4>
                                <input
                                    type="text"
                                    id="urlimg"
                                    name="urlimg"
                                    className="formInput"
                                    placeholder="Insertar https://"
                                ></input>
                                <FontAwesomeIcon
                                    icon={faSquarePlus}
                                    style={{
                                        display: "inline-block",
                                        marginRight: "5px",
                                        color: "#1DBEB4",
                                    }}
                                />
                            </div>

                            <div className="w-80 h-60px m-10">
                                <h4>Cargar ubicación</h4>
                                <input
                                    type="text"
                                    id="urlmapa"
                                    name="urlmapa"
                                    className="formInput"
                                    placeholder="Insertar https://"
                                ></input>
                                <FontAwesomeIcon
                                    icon={faSquarePlus}
                                    style={{
                                        display: "inline-block",
                                        marginRight: "5px",
                                        color: "#1DBEB4",
                                    }}
                                />
                            </div>
                        </div>

                        <div className="justify-center m-50 w-50">
                            <Link to={"/successfulProduct"} className="okButton">
                                <p>Crear</p>
                            </Link>
                        </div>
                    </form>
                </div>
            </Layout>
        </>
    );
}
