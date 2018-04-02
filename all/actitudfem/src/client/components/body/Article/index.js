import React,  {Component} from 'react'
import {connect} from 'react-redux'
import {getPost} from '../../../actions'

class Article extends Component {
  componentDidMount() {
    this.props.getPost()
  }

  _someArticle() {
    let data = this.props.post.map( el  => {
      return <li>{el.name}</li>
    })   
    
    return data
  }

  render () {
    console.log(this.props.post)
    return (<div>
      <h1>print</h1>
    </div>)
  }
}

const mapStateToProps = (state) => {
  return {post : state.post}
}

const loadData = (store) => {
  return store.dispatch(getPost())
}

export default {
  loadData, 
  component : connect(mapStateToProps, {getPost})(Article)
}
