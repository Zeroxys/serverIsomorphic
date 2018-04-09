import React from 'react'
import ListImgFooter from './listImgFooter/listImgFooter'

const styles = {
  footer: {
    display: 'block',
    background: '#222222'
  },
  ul: {
    display: 'flex'
  },
  nav: {
    height: '46px'
  },
  li: {
    width: '100px',
    height: '30px',
    margin: '4px'
  },
  a: {
    height: '100%'
  },
  img: {
    width: 'inherit',
    height: 'inherit'
  }
}

const imgSrc = 'http://cdn.imagendigital.com/resources/bottom/images/sello_victoria.png'

const Footer = (props) => {
  let imgs = props.imgs.map(( img, i) =>{
    return <ListImgFooter href={img.href} position={img.position} height={img.height} width={img.width} key={i}/>
  })

  return (
    <footer style={styles.footer}>
      <nav style={styles.nav}>
        <ul style={styles.ul}>
          {imgs}
          <li style={styles.li}>
            <a style={styles.a} href='https://www.victoria147.com/'>
              <img style={styles.img} src={imgSrc}/>
            </a>
          </li>  
        </ul>  
      </nav>    
    </footer>  
  )
}

export default Footer