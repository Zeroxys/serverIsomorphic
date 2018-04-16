import React,  {Component} from 'react'
import {connect} from 'react-redux'
import {getPost} from '../actions/'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'
import TweetEmbed from 'react-tweet-embed'
import InstagramEmbed from 'react-instagram-embed'
import Dfp from 'react-simple-dfp'
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share'

const styles = {
  figure: {
    position: 'relative',
    maxHeight: '200px',
    overflow: 'hidden'
  },
  gradient: {
    height: '100%',
    width: '100%',
    background: 'linear-gradient(to top, transparent 0%, rgba(0, 0, 0, 0.65) 100%, rgba(0, 0, 0, 0.65) 70%, transparent 30%)',
    position: 'absolute'
  },

  title: {
    color: '#000',
    fontSize: '30px',
    width: '95%',
    margin: '10px auto',
    lineHeight: '29px',
    padding: '2px 5px',
    textAlign: 'center'
  },
  p: {
    color: '#666',
    margin: '10px 12px'
  },
  autorLogo: {
    width: '30px',
    height: '23px',
    marginRight: '8px'
  },
  contAutor: {
    fontSize: '12px',
    color: '#666',
    width: '55%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '10px auto',
    padding: '8px 0',
    borderBottom: '1px solid #666',
    borderTop: '1px solid #666'
  },
  autor: {
    marginLeft: '4px',
    textTransform: 'uppercase',
  },
  dfp: {
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center'
  }
}
class Article extends Component {
  componentDidMount() {
    this.props.getPost()
  }

  taboola(){
    window._taboola = window._taboola || [];
    taboola.push({article:'auto'});
    !function (e, f, u, i) {
      if (!document.getElementById(i)){
        e.async = 1;
        e.src = u;
        e.id = i;
        f.parentNode.insertBefore(e, f);
      }
    }(document.createElement('script'),
    document.getElementsByTagName('script')[0],
    '//cdn.taboola.com/libtrc/[Publisher_Name]/loader.js',
    'tb_loader_script');
    if(window.performance && typeof window.performance.mark == 'function')
      {window.performance.mark('tbl_ic');}
  }

  taboola_print() {
    window._taboola = window._taboola || [];
    _taboola.push({flush: true});
  }

  render () {
    const data =  this.props.post.data[0]
    console.log(data)
    const body = data.body
    const parse = ReactHtmlParser(body)
    parse.splice(3, 0, <Dfp adUnitPath='/35139216/Actitudfem' adSize={[728, 90]}/>) 
    parse.push(<Dfp adUnitPath='/35139216/Actitudfem' adSize={[728, 90]}/>)
    
    return (
    <main>
      <article>
        <h1 style={styles.title}>{this.props.post.data[0].title}</h1>
        <figure style={styles.figure}>
          <img src={this.props.post.data[0].images.files[0].url} alt={this.props.post.data[0].images.files[0].title}/>
        </figure>
        <p style={styles.author}> 
          <a style={styles.contAutor} href="http://m.actitudfem.com/actitudfem"> 
            
            Por  <span style={styles.autor}> {this.props.post.data[0]['autor-colaborador'].name} </span> 
          </a>
        </p>
        <div style={styles.dfp}>
          <Dfp adUnitPath='/35139216/Actitudfem' adSize={[728, 90]}/>
        </div>  
        <div style={styles.p} className="text-note">
          {parse}      
          <TweetEmbed />
          <InstagramEmbed/>
        </div>
      </article>
      <div className="share_social">
        <FacebookShareButton url={this.props.post.data[0].url}> <span className="share-facebook"></span> </FacebookShareButton>
        <TwitterShareButton url={this.props.post.data[0].url}> <span className="share-twitter"></span> </TwitterShareButton>
        <WhatsappShareButton url={this.props.post.data[0].url}> <span className="share-whatsapp"></span> </WhatsappShareButton>
      </div>
      <div id="script"></div>
    </main>)
  }
}

const mapStateToProps = (state) => {
  //console.log(state.post)
  return {post : state.post}
}

const loadData = (store, path) => {
  return store.dispatch(getPost(path))
}

export default {
  loadData, 
  component : connect(mapStateToProps, {getPost})(Article)
}
