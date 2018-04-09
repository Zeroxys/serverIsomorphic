import React,  {Component} from 'react'
import {connect} from 'react-redux'
import {getPost} from '../actions/'

class Article extends Component {
  componentDidMount() {
    this.props.getPost()
  }

  _someArticle() {
  }

  render () {
    console.log(this.props.post.data[0])
    return (<div>
      <h1>{this.props.post.data[0].title}</h1>
    </div>)
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
