import { useState } from "react";
import Layout from "../components/Layout";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";

export default function Login() {

  const { userDb, user, setUser } = useContext(UserContext);

  const [loginInput, setLoginInput] = useState({ email: '', password: '' });

  const navigate = useNavigate();

  const [loginErrorMsg, setLoginErrorMsg] = useState('');

  function emailHandler(e) {
    setLoginInput({ ...loginInput, email: e.target.value })
  }

  function passwordHandler(e) {
    setLoginInput({ ...loginInput, password: e.target.value })
  }

  function submitHandler(e) {
    e.preventDefault();
    login(loginInput);
  }

  function login(userInput) {
    const foundIndex = userDb.findIndex(user => userInput.email === user.email && userInput.password === user.password);
    if (foundIndex === -1) {
      console.log('wrong credentials');
      setLoginErrorMsg('Por favor vuelva a intentarlo, sus credenciales son inválidas.');
    } else {
      console.log(userDb[foundIndex]);
      setUser(userDb[foundIndex]);
      navigate('/');
    }
  }

  return (
    <>
      <Layout >
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
              {/* {loginInput.password.length > 6 ? '' : <p style={{ color: 'red', fontWeight: 'normal' }}>La contraseña debe tener mas de 6 caracteres</p>} */}
            </div>

            <input type="submit" className="submitButton" value='Ingresar' />
          </form>

          <p>Aún no tienes cuenta?</p>
          <Link to='/signup'>Regístrate</Link>
          <p style={{ color: 'red', fontWeight: 'normal' }}> {loginErrorMsg}</p>
        </section>
      </Layout>
    </>
  )
}