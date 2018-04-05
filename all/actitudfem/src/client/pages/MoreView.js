import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getMoreViews} from '../actions'

import Articles from '../components/body/Articles/Articles'
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

class MoreView extends Component {


  _renderPosts () {
    return this.props.views.data.map(el => {
      return <Articles 
                key={el.id}
                title={el.title}
                summary={el.summary}
                img={el.images.principal[0].url}
                getPost={() => this._getPost(el)}/>      
    })
  }

  componentDidMount () {
    this.props.getMoreViews()
  }

  render() {
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
