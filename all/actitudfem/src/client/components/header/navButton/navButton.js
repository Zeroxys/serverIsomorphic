import React from 'react'
import Items from './items'

const NavButton = (props) => {

  const styles = {
    nav: {
      borderTop: '1px solid #909090',
      marginBottom: '20px'
    },
    ul: {
      display: 'flex'
    }
  }

  let items = props.listas.map((lista, i) => {
    return <Items name={lista} key={i} click={props.click} isActive ={props.isActive}/>
  })

  return (
    <nav style={styles.nav}>
      <ul className='listMenu' style={styles.ul}>
        {items}
      </ul>  
    </nav>  	
  )
}
export default NavButton