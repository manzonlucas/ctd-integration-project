import Layout from "../components/Layout"

export default function Login() {
  return (
    <>
      <Layout>
        <section className="signupView">
          <h1>Iniciar sesión</h1>
          <form action="" className="signupForm">

            <div className="formItemDiv">
              <label htmlFor="email" >Correo electrónico</label>
              <input type="email" id="email" name="email" className="formInput" />
            </div>

            <div className="formItemDiv">
              <label htmlFor="password">Contraseña</label>
              <input type="password" id="password" name="password" className="formInput" />
            </div>

            <button>Ingresar</button>
          </form>

          <p>Aún no tienes cuenta? <a href="/signup">Regístrate</a></p>
        </section>
      </Layout>
    </>
  )
}