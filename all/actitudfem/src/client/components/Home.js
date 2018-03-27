import React, {Component} from 'react'
import {connect} from 'react-redux'

import Articles from './body/Articles/Articles'
import {fetchPosts} from '../actions'

class Home extends Component {

  componentDidMount() {
    this.props.fetchPosts()
  }

  _renderPosts () {

    return this.props.posts.data.map(el => {
      return <Articles 
                key={el.id}
                title={el.title}
                summary={el.summary}
                img={el.images.principal[0].url}/>      
    })
    /*let posts = data.map( el => {
      return <Articles 
                key={el.id}
                title={el.title}
                summary={el.summary}
                img={el.images.principal[0].url}/>
    })*/

    //== Forma correcta ==//
    /*return this.props.posts.data.map( el => {
      return <li>{el.title}</li>
    })*/
    console.log(this.props.posts)
  }

  render () {
    console.log(this._renderPosts())
    return (
      <div>
        Server Render
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
  console.log('intentando cargar algo de informacion')
}

export {loadData}
export default connect(mapStateToProps, {fetchPosts})(Home)
