import Layout from "../components/Layout";

export default function Signup() {
  return (
    <>
      <Layout>
        <section className="loginView">
          <h1>Crear cuenta</h1>
          <form action="" className="loginForm">

            <div className="formItemDiv">
              <label htmlFor="name">Nombre</label>
              <input type="text" id="name" name="name" className="formInput" />
            </div>

            <div className="formItemDiv">
              <label htmlFor="lastname" >Apellido</label>
              <input type="text" id="lastname" name="lastname" className="formInput" />
            </div>

            <div className="formItemDiv">
              <label htmlFor="email" >Correo electrónico</label>
              <input type="email" id="email" name="email" className="formInput" />
            </div>

            <div className="formItemDiv">
              <label htmlFor="password">Contraseña</label>
              <input type="password" id="password" name="password" className="formInput" />
            </div>

            <div className="formItemDiv">
              <label htmlFor="passwordConfirm">Confirmar contraseña</label>
              <input type="password" id="passwordConfirm" name="passwordConfirm" className="formInput" />
            </div>

            <input type="submit" className="submitButton" value='Crea cuenta' />
          </form>

          <p>Ya tienes cuenta? <a href="/login">Iniciar sesión</a></p>
        </section>
      </Layout>
    </>
  )
}