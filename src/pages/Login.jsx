import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import axios from "axios";
import { baseUrl, mockyUsers } from "../services/api";

export default function Login() {
  const { user, setUser, decodedToken } = useContext(UserContext);
  const [usersList, setUsersList] = useState([])
  const [loginInput, setLoginInput] = useState({ email: "", password: "" });
  const [loginErrorMsg, setLoginErrorMsg] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    getUsersFromDb();
  }, [])

  async function getUsersFromDb() {
    const response = await axios.get(mockyUsers);
    return setUsersList(response.data);
  }

  function emailHandler(e) {
    setLoginInput({ ...loginInput, email: e.target.value });
  }

  function passwordHandler(e) {
    setLoginInput({ ...loginInput, password: e.target.value });
  }

  async function submitHandler(e) {
    e.preventDefault();
    // login(loginInput);
    mockyLogin(loginInput);
  }

  async function mockyLogin(credentials) {
    const found = usersList.find(user => user.email == credentials.email && user.password == credentials.password);
    if (found) {
      navigate("/");
      setUser({
        ...user,
        name: 'Usuario',
        lastName: 'Apellido',
        isLogged: true
      });
    } else {
      setLoginErrorMsg(
        "Por favor vuelva a intentarlo, sus credenciales son inválidas."
      );
    }
  }

  async function login(credentials) {
    try {
      const response = await axios
        .post(baseUrl + 'authenticate', credentials);

      if (response.status === 200) {
        const token = response.data.token
        localStorage.setItem("jwt", token);
        navigate("/");
        setUser({
          ...user,
          name: 'Usuario',
          lastName: 'Apellido',
          isLogged: true
        });
      }

    } catch (error) {
      setLoginErrorMsg(
        "Por favor vuelva a intentarlo, sus credenciales son inválidas."
      );
    }
  }

  return (
    <>
      <Layout>
        <section className="formView">
          <h1>Iniciar sesión</h1>
          <form action="" className="form" onSubmit={submitHandler}>
            <div className="formItemDiv">
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                className="formInput"
                onChange={emailHandler}
              />
            </div>

            <div className="formItemDiv">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                name="password"
                className="formInput"
                onChange={passwordHandler}
              />
              {/* {loginInput.password.length > 6 ? '' : <p style={{ color: 'red', fontWeight: 'normal' }}>La contraseña debe tener mas de 6 caracteres</p>} */}
              {/* Profesor Gustavo dijo que saquemos este mensaje, para no dar indicios en caso de intentos ilegitimos de login */}
            </div>

            <input type="submit" className="submitButton" value="Ingresar" />
          </form>

          <p>Aún no tienes cuenta?</p>
          <Link style={{ textDecoration: "none" }} to="/signup">
            Regístrate
          </Link>
          <p style={{ color: "red", fontWeight: "normal" }}> {loginErrorMsg}</p>
        </section>
      </Layout>
    </>
  );
}
