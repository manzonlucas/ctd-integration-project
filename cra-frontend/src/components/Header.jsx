import { useState } from 'react';

export default function Header() {

  const [isLogged, setIsLogged] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  function handleBurgerClick() {
    setIsBurgerOpen(!isBurgerOpen);
    console.log('burger click');
  }

  return (
    <header>
      <section>
        <a href="" className='logo-container'>
          <img src='/logo1.png' alt="" />
          <span>Sentite como en tu hogar</span>
        </a>
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
            <a href="/">Login</a>
            <a href="/">Signup</a>
          </> :
          <>
            <a href="/">
              <span className='user-logo'>LM</span>
              Hola,
              <span>
                Lucas Manzón
              </span>
            </a>
            <a href="/">Logout</a>
          </>
        }

      </section>
      <div>
        <input type="checkbox" id='check' onClick={handleBurgerClick} />
        <label htmlFor="check" className="checkbtn">
          <i className="fa-solid fa-bars"></i>
        </label>
      </div>
    </header >
  )
}