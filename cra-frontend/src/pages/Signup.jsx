import Layout from "../components/Layout";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <>
      <Layout>
        <section className="formView ">
          <h1 className="m-bottom-50 m-top-70">Crear cuenta</h1>
          <form action="" className="form">

            <div className="formItemDiv m-bottom-20">
              <label htmlFor="name">Nombre</label>
              <input type="text" id="name" name="name" className="formInput" />
            </div>

            <div className="formItemDiv m-bottom-20">
              <label htmlFor="lastname" >Apellido</label>
              <input type="text" id="lastname" name="lastname" className="formInput" />
            </div>

            <div className="formItemDiv m-bottom-20">
              <label htmlFor="email" >Correo electrónico</label>
              <input type="email" id="email" name="email" className="formInput" />
            </div>

            <div className="formItemDiv m-bottom-20">
              <label htmlFor="password">Contraseña</label>
              <input type="password" id="password" name="password" className="formInput" />
            </div>

            <div className="formItemDiv m-bottom-20">
              <label htmlFor="passwordConfirm">Confirmar contraseña</label>
              <input type="password" id="passwordConfirm" name="passwordConfirm" className="formInput" />
            </div>

            <input type="submit" className="submitButton m-bottom-20 m-top-20" value='Crea cuenta' />
          </form>

          <p className="m-top-20">Ya tienes cuenta?</p>
          <Link style={{textDecoration: "none"}} to='/login' >
            Iniciar sesión
          </Link>
        </section>
      </Layout>
    </>
  )
}