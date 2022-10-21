import { useState } from 'react';

export default function Header() {

  const [isLogged, setIsLogged] = useState(false);

  return (
    <header>
      <section className='logo'>
        <a href="/">
          <img src='/logo1.png' alt="" />
        </a>
        <a href="/">
          <span>Sentite como en tu hogar</span>
        </a>
      </section>

      <section className='user-buttons'>
        {!isLogged ?
          <>
            <ul>
              <li><a href="/">Login</a></li>
              <li><a href="/">Signup</a></li>
            </ul>
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

        <input type="checkbox" id='check' />
        <label htmlFor="check" className="checkbtn">
          <i className="fa-solid fa-bars"></i>
        </label>
      </section>
    </header >
  )
}