import React, {Component} from 'react';
import AmiiboList from './AmiiboList';
import SeriesSelector from '../components/SeriesSelector';

class AmiiboContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      amiibos: null,
      amiiboSeries: null
    }
    this.handleSeriesSelected = this.handleSeriesSelected.bind(this);
  }

  componentDidMount(){
    fetch("http://www.amiiboapi.com/api/amiibo/")
    .then(res => res.json())
    .then(amiibos => this.setState({amiibos: amiibos.amiibo}))
  }

  amiiboSeriesList(){
    const fullList = this.state.amiibos.map(amiibo => amiibo.amiiboSeries)
    return fullList;
    // fullList is all the amiibo series
  }

  uniqueAmiiboSeries(seriesIndex){
    const uniqueAmiiboSeries = this.amiiboSeriesList().filter((series, index, array) => {
      return array.indexOf(series) === index;
    })
    this.setState({amiiboSeries: uniqueAmiiboSeries})
    // uniqueAmiiboSeries is the unique amiibo series in an array
  }

  amiibosBySeries(seriesIndex){
    // if(!this.state.amiiboSeries) return null;
    const selectedSeries = this.uniqueAmiiboSeries()[seriesIndex];
    return this.state.amiibos.filter((amiibo) => {
      return (seriesIndex === 'All' || amiibo.amiiboSeries === selectedSeries)
    });
  }

  // handleSeriesSelected(seriesIndex){
  //   console.log(seriesIndex);
  //   return "hello world";
  // }

  handleSeriesSelected(seriesIndex) {
    let filteredSeries = [];
    if (seriesIndex === 'All') {
      filteredSeries = this.state.amiibos;
    }
    else {
      filteredSeries = this.uniqueAmiiboSeries(seriesIndex);
    }
    // this.setState({amiiboSeries: filteredSeries})
    console.log(this.state.amiiboSeries);
  }

  render(){
    return (
      <div className="amiibo-container">
        <img src="images/amiibo_transparent_logo.png" alt="logo" className="logo"/>
        <SeriesSelector amiibos={this.state.amiibos} onSeriesSelect={this.handleSeriesSelected}/>
        <AmiiboList className="amiibo-list" amiibos={this.state.amiibos}/>
      </div>
    );
  }
}

export default AmiiboContainer;
