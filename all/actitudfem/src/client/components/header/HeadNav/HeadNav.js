import React from 'react'
import Menu from './menu/menu'

const styles = {
  header: {
    width: '100%',
    height: '38px',
    content: {
      textAlign: 'center',
      position: 'relative',
    },
    img: {
      backgroundImage: 'url(http://cdn2.webapps.imagendigital.com/soyactitud/images/sprite.v1.png)',
      width: '140px',
      height: '34px',
      display: 'inline-block'
    },
    btnMenu: {
      width: '38px',
      height: '31px',
      border: '0',
      background: 'transparent',
      margin: '3px 12px 0 0'
    },
    contentManu: {
      position: 'absolute',
      top: '0',
      right: '0',
      backgroundImage: 'url(http://cdn2.webapps.imagendigital.com/soyactitud/images/sprite.v1.png)',
      backgroundPosition: '1% 4.4%',
      transform: 'scale(.9)'
    },
    btnSearch: {
      backgroundImage: 'url(http://cdn2.webapps.imagendigital.com/soyactitud/images/sprite.v1.png)',
      backgroundPosition: '-1px -559px',
      height: '30px',
      width: '32px',
      border: '0',
      transform: 'scale(.9)',
    },
    input: {
      width: '90%',
      height: '30px',
      color: 'white'
    },
    formMenu: {
      padding: '6px 0',
      display: 'flex'
    }
  }
}

const HeadNav = (props) =>  {
  const toogleMenu = () => {
    if(props.isToogle) {
      return (
        <div className="menu">
          <form style={styles.header.formMenu}>
            <input style={styles.header.input} type="search" placeholder="Buscar"/>
            <input style={styles.header.btnSearch} type="submit" value=""/>
          </form> 
          <Menu/>
        </div>
      )
    }
    else return ''
  }

  return (
    <header style={styles.header}>
      <div style={styles.header.content}>
        <div style={styles.header.img} ></div>
        <div style={styles.header.contentManu}>
          <button onClick={props.menuEnable} style={styles.header.btnMenu}></button> 
        </div>
      </div>
      {toogleMenu()}
    </header>  
  )
}

export default HeadNav
