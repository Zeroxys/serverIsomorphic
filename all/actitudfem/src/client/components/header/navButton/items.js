import React from 'react'

const Items = (props) => {
  const styles = {
    li: {
      width: '50%',
      textAlign: 'center',
    },
    a: {
      width: '100%',
      display: 'block',
      padding: '10px 0px',
      fontSize: '15px',
      fontFamily: ['Oswald', 'sans-serif'],
      fontWeight: '300'
    }
  }

  return (
    <li onClick={props.click} style={styles.li}>
      <a style={styles.a}>{props.name}</a>
    </li>  
  )
}

export default Items
