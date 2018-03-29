var _ = require('lodash');
import React, {Component} from 'react'

const styles = {
  linkActive :{
    backgroundColor: 'black',
  }
}

var LOCATION_COUNT = 10;

/*var ITEMS = ['belleza': [{
    'Maquillaje': [{
      name: 'Peinados y cabello',
      link: '/belleza/maquillaje' 
    }],
    'Piel': [{
      name :'Relajación', 
      link:'/belleza/peinados-y-cabello'
    }],
]}];*/

var ITEMS = [
  {
    'BELLEZA' : [
      {
        name : 'MAQUILLEJE',
        url: '/belleza/maquillaje'
      },
      {
        name :'Relajación', 
        link:'/belleza/peinados-y-cabello' 
      },
      {
        name :'otro mas', 
        link:'/belleza/peinadosello' 
      }
    ]
  },
  {
    'SALUD' : [
      {
        name : 'ENFERMEDADES',
        url: '/belleza/maquillaje'
      },
      {
        name :'DOC', 
        link:'/belleza/peinados-y-cabello' 
      },
      {
        name :'MAS', 
        link:'/belleza/peinadosello' 
      }
    ]
  },
]

class Menu extends Component {
  constructor (props) {
    super()
    this.state = {
      expanded: true,
      items: null,
      duration: 500,
    }
    this.whenToggleClicked = this.whenToggleClicked.bind(this)
    this.loadLocations = this.loadLocations.bind(this)
  }

  whenToggleClicked () {
    if (this.state.expanded) {
      this.setState({
        expanded: false,
        items: null,
      });

      window.clearTimeout(this.locationTimeout);
    } else {
      this.setState({
        expanded: true,
        items: null,
      });

      this.locationTimeout = window.setTimeout(this.loadLocations, this.state.duration * 1.5);
    }
  };

  loadLocations () {
    this.setState({
      items: Array.apply(null, Array(LOCATION_COUNT)).map(function () {
        return {
          city: _.sample(ITEMS),
        };
      }),
    });
  };
  
  render () {
    
    const items = ITEMS.map((el, key)=> {
      let keyMenu = Object.keys(el)
      let optionsMenu = keyMenu[0]
    })

    return(
      <nav className="navMenu">
        <ul>
          <li>
            <a style={styles.linkActive} href=""><span className="a-inicio"></span> INICIO</a>
          </li>
          <li>
            <a href=""><span className="a-tv"></span> TV</a>
          </li>
          <li>
            <a href=""> <span className="a-obsesiones"></span> OBSESIONES</a>
          </li>    
        </ul>

        <ul className="dropdown-menu">
          <li>
            <a className="title-menu" onClick={this.whenToggleClicked}>Belleza</a>
            <ul className="dropdown-submenu">
              
              {this.state.expanded ? this.renderItems() : null}
              
            </ul>  
          </li>
        </ul>
      </nav> 
    )
  }

  renderItems (props) {
  //  var locations = this.state.items != null ? this.state.items : Array.apply(null, Array(LOCATION_COUNT));

  /*
    return ITEMS.map( (el, key) => {
      console.log(el.BELLEZA)
      console.log(el)
      return (
        <li>
          
        </li>
      );
    })
    */
  }

/*
  renderItem(location, i) {
    location = location || {building: '', city: ''}; 
    return (
      <div className="flex-box align-items-center" style={rowStyle} key={i}>
        <div style={cityStyle} className={'flex-1 ' + (location.city == '' ? 'loading-placeholder-dark loading-placeholder-full' : '')}>
          {location.city}
        </div>
      </div>
    );
  }
  */
}
export default Menu