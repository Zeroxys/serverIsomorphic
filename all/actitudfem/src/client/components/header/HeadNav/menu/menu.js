import React  from 'react'

const Menu = () => {

  const styles = {
    linkActive :{
      backgroundColor: 'black',
    }
  }

  return (
    <nav className="navMenu">
  
      <ul>
        <li>
          <a style={styles.linkActive} href=""><span className="a-inicio"></span> INICIO</a>
        </li>
        <li>
          <a href=""><span className="a-tv"></span> TV</a>
        </li>
        <li>
          <a href=""> <span className="a-obsesiones"></span> OBSESIONES</a>
        </li>    
      </ul>

      <ul className="dropdown-menu">
        <li>
          <a className="title-menu">Belleza</a>
          <ul className="dropdown-submenu">
            <li><a>Maquillaje</a></li>
            <li><a>Peinados y cabello</a></li>
            <li><a>Piel</a></li>
            <li><a>Relajación</a></li>
            <li><a>Nutrición y ejercicio</a></li>
          </ul>  
        </li>
      </ul>
      <ul className="dropdown-menu">
        <li>
          <a className="title-menu">Celebridades</a>
          <ul className="dropdown-submenu">
            <li><a>Famosos</a></li>
          </ul>  
        </li>
      </ul>  
      <ul className="dropdown-menu">
        <li>
          <a className="title-menu">Moda</a>
          <ul className="dropdown-submenu">
            <li><a>Pasarelas</a></li>
            <li><a>Tendencias</a></li>
            <li><a>Obsesiones</a></li>
            <li><a>Fashion Shows</a></li>
            <li><a>Colecciones</a></li>
          </ul>  
        </li>
      </ul> 
      <ul className="dropdown-menu">
        <li>
          <a className="title-menu">Novias</a>
          <ul className="dropdown-submenu">
            <li><a>Banquete</a></li>
            <li><a>Decoración</a></li>
            <li><a>Vestidos y accesorios</a></li>
          </ul>  
        </li>
      </ul>  
      <ul className="dropdown-menu">
        <li>
          <a className="title-menu">Amor y pareja</a>
          <ul className="dropdown-submenu">
            <li><a>Comunicación</a></li>
            <li><a>Sexo</a></li>
            <li><a>Solteras</a></li>
            <li><a>Tu cuerpo</a></li>
          </ul>  
        </li>
      </ul> 
      <ul className="dropdown-menu">
        <li>
          <a className="title-menu">Geek</a>
          <ul className="dropdown-submenu">
            <li><a>Viral</a></li>
            <li><a>Nuevo</a></li>
          </ul>  
        </li>
      </ul> 
      <ul className="dropdown-menu">
        <li>
          <a className="title-menu">Guía</a>
          <ul className="dropdown-submenu">
            <li><a>Música</a></li>
            <li><a>Libros</a></li>
            <li><a>Vida y estilo</a></li>
            <li><a>Cine y televisión</a></li>
          </ul>  
        </li>
      </ul> 
      <ul className="dropdown-menu">
        <li>
          <a className="title-menu">Entorno</a>
          <ul className="dropdown-submenu">
            <li><a>El personaje</a></li>
            <li><a>LGBT</a></li>
            <li><a>Mujeres</a></li>
            <li><a>Política</a></li>
          </ul>  
        </li>
      </ul> 
      <ul className="dropdown-menu">
        <li>
          <a className="title-menu">Hogar</a>
          <ul className="dropdown-submenu">
            <li><a>Diseño y decoración</a></li>
            <li><a>Finanzas personales</a></li>
            <li><a>Recetas</a></li>
            <li><a>Mamás</a></li>
          </ul>  
        </li>
      </ul>
      <ul className="dropdown-menu">
        <li>
          <a className="title-menu">Tópicos</a>  
        </li>
      </ul>
      <ul className="dropdown-menu">
        <li>
          <a className="title-menu">SÍGUENOS Y DESCARGANOS</a> 
        </li>
      </ul>   
    </nav> 
  )
}
export default Menu