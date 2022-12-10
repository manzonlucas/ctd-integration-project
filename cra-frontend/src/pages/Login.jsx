import { useState } from "react";
import Layout from "../components/Layout";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import axios from 'axios';
import { baseUrl } from '../services/api';

export default function Login() {

  const { userDb, user, setUser } = useContext(UserContext);
  const [loginInput, setLoginInput] = useState({ email: '', password: '' });
  const [loginErrorMsg, setLoginErrorMsg] = useState('');

  const navigate = useNavigate();

  function emailHandler(e) {
    setLoginInput({ ...loginInput, email: e.target.value })
  }

  function passwordHandler(e) {
    setLoginInput({ ...loginInput, password: e.target.value })
  }

  function submitHandler(e) {
    e.preventDefault();
    login(loginInput);
    // loginSimulator(loginInput);
  }

  // TO DO API LOGIN:
  async function login(credentials) {
    const jwtSimulator = 'this is a JWT';

    try {
      // const response = await axios
      // .get(
      // chequear endpoint
      // baseUrl + '/usuario', {
      // chequear estructura que se debe enviar
      // params: { credentials }
      // });
      // console.log(response);

      // Si API devuelve 200:
      if (loginSimulator(credentials)) {
        console.log(credentials);
        console.log(jwtSimulator);
        localStorage.setItem('jwt', JSON.stringify(jwtSimulator));
        navigate('/');
      }
      // Si API no loggea
      else {
        console.log('wrong credentials');
        setLoginErrorMsg('Por favor vuelva a intentarlo, sus credenciales son inválidas.');
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  function loginSimulator(userInput) {
    const foundedIndex = userDb.findIndex(user => userInput.email === user.email && userInput.password === user.password);
    if (foundedIndex !== -1) {
      setUser(userDb[foundedIndex]);
      return true;
    } else {
      return false
    }
  }

  return (
    <>
      <Layout >
        <section className="formView">
          <h1>Iniciar sesión</h1>
          <form action="" className="form" onSubmit={submitHandler}>

            <div className="formItemDiv">
              <label htmlFor="email" >Correo electrónico</label>
              <input type="email" id="email" name="email" className="formInput" onChange={emailHandler} />
            </div>

            <div className="formItemDiv">
              <label htmlFor="password">Contraseña</label>
              <input type="password" id="password" name="password" className="formInput" onChange={passwordHandler} />
              {/* {loginInput.password.length > 6 ? '' : <p style={{ color: 'red', fontWeight: 'normal' }}>La contraseña debe tener mas de 6 caracteres</p>} */}
              {/* Profesor Gustavo dijo que saquemos este mensaje, para no dar indicios en caso de intentos ilegitimos de login */}
            </div>

            <input type="submit" className="submitButton" value='Ingresar' />
          </form>

          <p>Aún no tienes cuenta?</p>
          <Link style={{textDecoration: "none"}}to='/signup'>Regístrate</Link>
          <p style={{ color: 'red', fontWeight: 'normal' }}> {loginErrorMsg}</p>
        </section>
      </Layout>
    </>
  )
}