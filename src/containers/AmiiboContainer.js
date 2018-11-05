import React, {Component} from 'react';
import AmiiboList from './AmiiboList'

class AmiiboContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      amiibos: null
    }
  }

  componentDidMount(){
    fetch("http://www.amiiboapi.com/api/amiibo/")
    .then(res => res.json())
    .then(amiibos => this.setState({amiibos: amiibos.amiibo}))
  }

  render(){
    return (
      <div className="amiibo-container">
      <center><img src="images/amiibo_transparent_logo.png" className="logo" alt="logo" width="150px" height="75px"/></center>
        <AmiiboList className="amiibo-list" amiibos={this.state.amiibos}/>
      </div>
    );
  }
}

export default AmiiboContainer;
