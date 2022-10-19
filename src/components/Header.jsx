import { useState } from 'react';
import styles from './header.module.css';

export default function Header() {

  const [isLogged, setIsLogged] = useState(false);

  return (
    <header>
      <a href="/">
        <img src='/logo-sm.png' alt="" />
        <span>Sentite como en tu hogar</span>
      </a>

      <section style={styles.header}>
        {!isLogged ?
          <>
            <span>Login</span>
            <span>Sign up</span>
          </> :
          <>
            <span>Username</span>
            <span>LM</span>
            <span>Logout</span>
          </>
        }
      </section>
    </header >
  )
}