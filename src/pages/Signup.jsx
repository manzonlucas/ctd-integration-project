import Layout from "../components/Layout";
import { Link, useNavigate } from "react-router-dom";
import { useState, useSyncExternalStore } from "react";
import axios from "axios";
import { baseUrl } from "../services/api";

export default function Signup() {

  const navigate = useNavigate();

  const [signUpErrorMsg, setSignUpErrorMsg] = useState('');
  const [signUpInput, setSignUpInput] = useState({ username: "", password: "" });

  function handleChangeEmail(e) {
    setSignUpInput({ ...signUpInput, username: e.target.value })
  }

  function handleChangePassword(e) {
    setSignUpInput({ ...signUpInput, password: e.target.value })
  }

  // async function signUpRequest(credentials) {
  //   try {
  //     const response = await axios
  //       .post(baseUrl + 'usuario', credentials);
  //     console.log(response);

  // if (response.status === 200) {
  //   navigate("/");
  //   console.log(response);
  // }

  //   } catch (error) {
  //     setSignUpErrorMsg(
  //       "Error."
  //     );
  //     console.log(error);
  //   }
  // }

  function signUp() {
    // signUpRequest(signUpInput);
  }


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
              <input type="email" id="email" name="email" className="formInput" onChange={handleChangeEmail} />
            </div>

            <div className="formItemDiv m-bottom-20">
              <label htmlFor="password">Contraseña</label>
              <input type="password" id="password" name="password" className="formInput" onChange={handleChangePassword} />
            </div>

            <div className="formItemDiv m-bottom-20">
              <label htmlFor="passwordConfirm">Confirmar contraseña</label>
              <input type="password" id="passwordConfirm" name="passwordConfirm" className="formInput" />
            </div>

            <input type="submit" className="submitButton m-bottom-20 m-top-20" value='Crea cuenta' />
          </form>

          <p className="m-top-20">Ya tienes cuenta?</p>
          <Link style={{ textDecoration: "none" }} to='/login' >
            Iniciar sesión
          </Link>

          {signUpErrorMsg
            ? 'Error en crear la cuenta.'
            : ''}
        </section>
      </Layout>
    </>
  )
}