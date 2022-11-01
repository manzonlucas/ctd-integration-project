import { useState } from "react";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const userInDb = {
    email: 'manzonlucas@dh.com',
    password: '1234567'
  }
  const [userInfo, setUserInfo] = useState(
    {
      email: '',
      password: ''
    });

  const navigate = useNavigate();

  const [loginErrorMsg, setLoginErrorMsg] = useState('');


  function emailHandler(e) {
    setUserInfo({ ...userInfo, email: e.target.value })
  }

  function passwordHandler(e) {
    setUserInfo({ ...userInfo, password: e.target.value })
  }

  function submitHandler(e) {
    e.preventDefault();
    if (userInfo.email === userInDb.email && userInfo.password === userInDb.password) return navigate('/');
    else setLoginErrorMsg('Por favor vuelva a intentarlo, sus credenciales son inválidas.');
  }

  return (
    <>
      <Layout>
        <section className="signupView">
          <h1>Iniciar sesión</h1>
          <form action="" className="signupForm" onSubmit={submitHandler}>

            <div className="formItemDiv">
              <label htmlFor="email" >Correo electrónico</label>
              <input type="email" id="email" name="email" className="formInput" onChange={emailHandler} />
            </div>

            <div className="formItemDiv">
              <label htmlFor="password">Contraseña</label>
              <input type="password" id="password" name="password" className="formInput" onChange={passwordHandler} />
              {userInfo.password.length > 6 ? '' : <p style={{ color: 'red', fontWeight: 'normal' }}>La contraseña debe tener mas de 6 caracteres</p>}
            </div>

            <input type="submit" className="submitButton" value='Ingresar' />
          </form>

          <p>Aún no tienes cuenta? <a href="/signup">Regístrate</a></p>
          <p style={{ color: 'red', fontWeight: 'normal' }}> {loginErrorMsg}</p>
        </section>
      </Layout>
    </>
  )
}