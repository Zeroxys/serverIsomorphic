import React, {Component} from 'react'
import {connect} from 'react-redux'
import { DFPSlotsProvider, AdSlot } from 'react-dfp'

import Articles from '../components/body/Articles/Articles'
import Dfp from 'react-simple-dfp'
import {fetchPosts} from '../actions'
import TitleSection from '../components/body/TitleSection/TitleSection'

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
	},
]
const styles = {
  dfp: {
    display:'flex', 
    justifyContent : 'center', 
    alignItems:'center', 
    margin:'26px 0'
  }
}

class Home extends Component {
  constructor() {
    super()
    this._getPost = this._getPost.bind(this)
  }

  _getPost(el) {
    const string = el.url
    const r = /(http[s]?:\/\/)?([^\/\s]+\/)(.*)/
    const url = string.match(r)[3]
    console.log(url)
    location.href=url
  }

  _renderPosts () {
    let count = 0
    return this.props.posts.da
    ta.map( (el, key) => {
      count++
      if(count == 3) {
        count = 0
        return <div> <Dfp adUnitPath='/35139216/Actitudfem' adSize={[728, 90]}/></div>
      }else {
        return <Articles
        key={el.id}
        title={el.title}
        summary={el.summary}
        img={el.images.principal[0].url}
        getPost={() => this._getPost(el)}/>
      }
    })
    
  }

  componentDidMount() {
    this.props.fetchPosts()
  }

  render () {
    return (
      <div>
        <div style={styles.dfp}>	
					<Dfp adUnitPath='/35139216/Actitudfem' adSize={[728, 90]}/>
				</div>
        <TitleSection title={'lo ultimo'}/>
          {this._renderPosts()}
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
