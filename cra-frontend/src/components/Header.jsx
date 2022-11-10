import { useState } from 'react';
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import { Link } from 'react-router-dom';

export default function Header() {

  const { user, setUser } = useContext(UserContext);
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
      isLogged: false
    })
  }

  return (
    <header>
      <section className='logo-container'>
        <Link to={'/'} className='logo-link'>
          <img src='/logo1.png' alt="" />
          <span className='slogan'>Sentite como en tu hogar</span>
        </Link>
      </section>

      <section className='header-placeholder'>
      </section>

      <section
        className={!isBurgerOpen ? 'user-buttons' : 'user-buttons-open'} >

        {isBurgerOpen ?
          <div>
            <input type="checkbox" id='check' onClick={handleBurgerClick} />
            <label htmlFor="check" className="checkbtn">
              <i className="fa-solid fa-bars"></i>
            </label>
          </div> :
          null
        }

        {!user.isLogged ?
          <>
            {window.location.pathname !== '/signup' ?
              <Link to='/signup' className='header-button'>
                Crear cuenta
              </Link>
              : ''}

            {window.location.pathname !== '/login' ?
              <Link to='/login' className='header-button'>
                Iniciar sesión
              </Link>
              : ''}
          </>
          :
          <>
            <Link to='/' className='loggedUserBlock'>
              <span className='user-logo'>
                {userInitials()}
              </span>
              <div>
                <p>Hola,</p>
                <span className='userName'>
                  {`${user.name} ${user.lastName}`}
                </span>
              </div>
            </Link>

            <Link to='/' className='header-button' onClick={clickHandlerLogout}>
              Cerrar sesión
            </Link>
          </>
        }

      </section>
      <div className='divBurger'>
        <input type="checkbox" id='check' onClick={handleBurgerClick} />
        <label htmlFor="check" className="burgerButton">
          <i className="fa-solid fa-bars"></i>
        </label>
      </div>
    </header >
  )
}