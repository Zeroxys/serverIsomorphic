import React from 'react'

const HeadSection = () => {
  
  const styles = {
    content: {
      margin: '12px 0',
      textAlign: 'center',
      position: 'relative'
    },
    title: {
      fontSize: '40px',
      padding: '6px 0'
    },
    spanBefore: {
      backgroundImage: 'url("http://cdn2.webapps.imagendigital.com/soyactitud/images/sprite.v1.png")',
      backgroundPosition: '-47px -347px',
      width: '65px',
      height: '20px',
      position: 'absolute',
      left: '0',
      top: '22px'
    },
    spanAfter: {
      backgroundImage: 'url("http://cdn2.webapps.imagendigital.com/soyactitud/images/sprite.v1.png")',
      backgroundPosition: '-128px -347px',
      width: '65px',
      height: '20px',
      position: 'absolute',
      right: '0',
      top: '22px'
    }
  }

  return (
    <div style={styles.content}>
      <span style={styles.spanBefore}></span>
      <h2 style={styles.title}>Lo más visto</h2>
      <span style={styles.spanAfter}></span>
    </div>
  )
}

export default HeadSection