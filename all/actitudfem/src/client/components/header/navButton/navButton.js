import React from 'react'
import Items from './items'

const NavButton = (props) => {

  const styles = {
    nav: {
      marginBottom: '20px'
    },
    ul: {
      display: 'flex'
    },

    li: {
      width: '100%',
      display: 'flex',
      textAlign: 'center',
      borderBottom: '1px solid #c3c3c3'
    },
    
    a: {
      width: '100%',
      display: 'block',
      color: 'white',
      textTransform: 'uppercase',
      padding: '8px 0px',
      fontSize: '16px',
      fontFamily: ['Oswald', 'sans-serif'],
      fontWeight: '300'
    }
  }

  let items = props.listas.map((lista, i) => {
    return <Items key={i} name={lista.name} click={props.click} isActive={props.isActive}/>
  })

  return (
    <nav style={styles.nav}>
      <ul className='listMenu' style={styles.ul}>
        <li onClick={props.click} style={styles.li}>
          <a href={'/'} style={styles.a}>Lo último</a>
          <a href={'/lo-mas-visto'} style={styles.a}>Lo Más Visto</a>
        </li>  
      </ul>  
    </nav>  	
  )
}
export default NavButton