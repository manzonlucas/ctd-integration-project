import { useState } from 'react';
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import { Link } from 'react-router-dom';

export default function Header() {

  const { user, setUser, decodedToken } = useContext(UserContext);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  function handleBurgerClick() {
    setIsBurgerOpen(!isBurgerOpen);
    console.log('burger click');
  }

  function userInitials() {
    const firstLetter = user.name[0];
    const secondLetter = user.lastName[0];
    return firstLetter + secondLetter;
  }

  function clickHandlerLogout() {
    setUser({
      email: '',
      password: '',
      name: '',
      lastName: '',
      role: '',
      isLogged: false
    });
    localStorage.setItem("jwt", '');
  }

  return (
    <header className='bg-white flex p-25 sticky-top z-1 justify-between'>
      <section className='logo-container w-30'>
        <Link to={'/'} className='logo-link flex justify-center align-center gap-10 decoration-none'>
          <img src='https://imagenesg4c7.s3.us-east-2.amazonaws.com/public/logo1.png' alt="" />
          <span className='t-display-none'>Sentite como en tu hogar</span>
        </Link>
      </section>

      {/* <section className='header-placeholder w-50 t:display-none'>
      </section> */}

      <section
        className={`w-30 flex justify-evenly align-center ${!isBurgerOpen ? 'user-buttons' : 'user-buttons-open'}`} >

        {isBurgerOpen ?
          <div>
            <input type="checkbox" id='check' onClick={handleBurgerClick} className='display-none' />
            <label htmlFor="check" className="checkbtn display-none">
              <i className="fa-solid fa-bars"></i>
            </label>
          </div> :
          null
        }

        {!user.isLogged ?
          <>
            {window.location.pathname !== '/signup' ?
              <Link to='/signup' className='cyan bold bg-white border-cyan radius-5 p-10-20 decoration-none center'>
                Crear cuenta
              </Link>
              : ''}

            {window.location.pathname !== '/login' ?
              <Link to='/login' className='cyan bold bg-white border-cyan radius-5 p-10-20 decoration-none center'>
                Iniciar sesión
              </Link>
              : ''}
          </>
          :
          <>
            <Link to='/' className='grey flex justify-around bold decoration-none'>
              <span className='user-logo'>
                {userInitials()}
              </span>
              <div>
                <p>Hola,</p>
                <span className='userName cyan'>
                  {`${user.name} ${user.lastName}`}
                </span>
              </div>
            </Link>

            {decodedToken.role === 'USER_ADMIN' ?
              <Link to='/newproduct' className='cyan bold bg-white border-cyan radius-5 p-10-20 decoration-none'>Administrar</Link>
              : ''
            }

            <Link to='/' className='cyan bold bg-white border-cyan radius-5 p-10-20 decoration-none' onClick={clickHandlerLogout}>
              Cerrar sesión
            </Link>

          </>
        }

      </section>
      <div className='divBurger inline-block absolute'>
        <input type="checkbox" id='check' onClick={handleBurgerClick} className='display-none' />
        <label htmlFor="check" className="burgerButton display-none">
          <i className="fa-solid fa-bars"></i>
        </label>
      </div>
    </header >
  )
}