import React, {Component} from 'react'
import HeadNav from './HeadNav/HeadNav'
import NavButton from './navButton/navButton'


class Header extends Component{
  constructor(props) {
    super()
    this.state = {
      isActive: false,
      data : [],
      toogleMenu: false,
    }

    this.menuEnable = this.menuEnable.bind(this)
  }

      
    menuEnable ()  {
      this.setState( prevState => {
        return {
          toogleMenu : !prevState.toogleMenu
        }
      })
    }

    onClick ()  {
      this.setState( (prevState) => {
        return {
          isActive : !prevState.isActive 
        }
      })
    }
  render() {
    return (
      <div className="header">
        <HeadNav isToogle={this.state.toogleMenu} menuEnable={this.menuEnable}/>
        <NavButton click={this.onClick} isActive={this.state.isActive}  listas={[{name : 'LO ÚLTIMO', path:'/'}, {name:'LO MAS VISTO', path:'lo-mas-visto'}]}/>
      </div>
    )
  } 
}

export default Header