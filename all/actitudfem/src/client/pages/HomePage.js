import React, {Component} from 'react'
import {connect} from 'react-redux'

import Articles from '../components/body/Articles/Articles'
import {fetchPosts} from '../actions'

import Footer from '../components/footer/footer'
import Header from '../components/header/header'

import DFP from '../components/DFP/DFP'

const imgs = [
	{
		href: 'http://www.imagen.com.mx/',
		position: '2px 63.6%',
		height: '32px',
		width: '87px',
	},
	{
		position: '40% 63.6%',
		height: '30px',
		width: '100px',
	}
]

class Home extends Component {
  constructor() {
    super()

    this._getPost = this._getPost.bind(this)
  }

  _getPost(el) {
    console.log(el.id)
  }

  _renderPosts () {
    return this.props.posts.data.map(el => {
      return <Articles 
                key={el.id}
                title={el.title}
                summary={el.summary}
                img={el.images.principal[0].url}
                getPost={() => this._getPost(el)}/>      
    })
  }

  componentDidMount() {
    this.props.fetchPosts()
  }


  render () {
    return (
      <div>
        <Header/>
        <div style={{display:'flex', justifyContent : 'center', alignItems:'center', margin:'26px 0'}}>	
					<DFP/>
				</div>
        {this._renderPosts()}
        <Footer imgs={imgs}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {posts : state.posts}
}

function loadData (store) {
  return store.dispatch(fetchPosts())
}

export default {
  loadData,
  component : connect(mapStateToProps, {fetchPosts})(Home)
}
