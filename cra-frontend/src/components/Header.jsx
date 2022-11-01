import { useState } from 'react';

export default function Header() {

  const [isLogged, setIsLogged] = useState(true);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  function handleBurgerClick() {
    setIsBurgerOpen(!isBurgerOpen);
    console.log('burger click');
  }

  return (
    <header>
      <section className='logo-container'>
        <a href="/" className='logo-link'>
          <img src='/logo1.png' alt="" />
          <span className='slogan'>Sentite como en tu hogar</span>
        </a>
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

        {!isLogged ?
          <>
            <a href="/signup" className='header-button'>Crear cuenta</a>
            <a href="/login" className='header-button'>Iniciar sesión</a>
          </>
          :
          <>
            <a href="/" className='header-user'>
              <span className='user-logo'> <b>UN</b> </span>
              <span>Hola, Username</span>
            </a>
            {/* <a href="/" className='header-button'>Cerrar sesión</a> */}
            <a href="/" className='header-button'>Cerrar sesión</a>
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