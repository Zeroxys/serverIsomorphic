import React from 'react'
import LazyLoad from 'react-lazyload'
import {Link} from 'react-router-dom'

const styles = {
  article:{
    header:{
      padding: '10px 3% 10px 3%',
      boxSizing: 'border-box',
      fontSize: '25px',
      fontFamily: ['Playfair Display', 'serif']
    },
    body:{
      fontFamily: 'Arial',
      color: '#666',
      margin: 'margin',
      padding: '10px 3% 10px 3%',
    },
    seeMore:{
      border: '1px solid black',
      padding: '6px 14px',
      marginTop: '18px',
      background: 'transparent',
      borderRadius: '5px',
      fontFamily: 'Helvetica',
      fontSize: '100%' 
    },
    blur:{
      backgroundImage: 'url("http://cdn2.webapps.imagendigital.com/soyactitud/images/bg_notas.png")',
      position: 'relative',
      zIndex: '1',
      textAlign: 'center',
      marginTop: '-110px',
      height: '95px',
      paddingTop: '40px',
      backgroundRepeat: 'repeat-x'
    },
    img: {
      width: '100%'
    }
  }
}

const Article = props => {
  return (
    <article>
      <LazyLoad throttle={200} height={300}>
        <img alt={props.title} src={props.img}/>
      </LazyLoad>
      <div className={"article-content"}>
        <h3 style={styles.article.header}>{props.title}</h3>
        <p style={styles.article.body}>{props.summary}</p>
      </div>
      <div style={styles.article.blur}>
        <button onClick={props.getPost} style={styles.article.seeMore}>VER MÁS</button>
      </div>
    </article>
  )
}

export default Article