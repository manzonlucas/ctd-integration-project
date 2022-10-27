import Layout from "../components/Layout"

export default function Login() {
  return (
    <>
      <Layout>
        <h1>Crear cuenta</h1>
        <form action="">
          <label htmlFor="">Nombre</label>
          <input type="text" />
          <label htmlFor="">Apellido</label>
          <input type="text" />
          <label htmlFor="">Correo electrónico</label>
          <input type="email" />
          <label htmlFor="">Contraseña</label>
          <input type="password" />
          <label htmlFor="">Confirmar contraseña</label>
          <input type="password" />

          <button>Crear cuenta</button>
        </form>

        <p>Ya tienes cuenta?
          <a href="/login">Iniciar sesión</a>
        </p>
      </Layout>
    </>
  )
}