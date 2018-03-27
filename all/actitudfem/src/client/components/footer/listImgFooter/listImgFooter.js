import React from 'react'

const ListImgFooter = (props) => {
  const styles = {
    li: {
      padding: '2px',
      margin: '4px'
    },
    span: {
      backgroundPosition:`${props.position}`,
      display: 'block',
      height: `${props.height}`,
      width: `${props.width}`, 
      padding: '2px 6px',
      boxSizing: 'border-box'
    }
  }
  
  return (
    <li style={styles.li}>
      <a href={props.href}> 
        <span className="spites" style={styles.span}></span> 
      </a>
    </li>
  )
}

export default ListImgFooter