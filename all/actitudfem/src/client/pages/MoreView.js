import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getMoreViews} from '../actions'

class MoreView extends Component {
  componentDidMount () {
    this.props.getMoreViews()
  }

  render() {
    return (
      <div>
        <h1>Lo mas visto</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return  { views : state.views}
}

const loadData = (store) => {
  return store.dispatch(getMoreViews())
}

export default {  
  loadData,
  component : connect(mapStateToProps, {getMoreViews})(MoreView)
}
