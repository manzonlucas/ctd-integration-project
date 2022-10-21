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
            <a href="/" class='Loginbtn'>Login</a>
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

        <input type="checkbox" id='check' />
        <label for="check" class="checkbtn">
        <i class="fa-solid fa-bars"></i>
        </label>
      </section>
    </header >
  )
}