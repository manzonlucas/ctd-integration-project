import './footer.module.css'

export default function Footer() {
  return (
    <footer>
      <section>
        <span>© Digital Booking</span>
      </section>

      <section>
        <img src="/social-media/logo-fb.png" alt="" />
        <img src="/social-media/logo-ig.png" alt="" />
        <img src="/social-media/logo-linkedin.png" alt="" />
        <img src="/social-media/logo-tw.png" alt="" />
      </section>
    </footer>
  )
}


// Crear un footer al 100% del ancho de la pantalla y al pie de la misma que, se verá en todas las pantallas de la aplicación, siguiendo el modelo de referencia.
// Dentro del footer armar un bloque alineado a la izquierda que incluya el isologotipo el año y el copyright.
// Dentro del footer armar un bloque alineado a la derecha que incluya íconos de redes sociales. Los íconos no necesitan ser vinculados a ninguna página.
