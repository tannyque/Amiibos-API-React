import React, {Component} from 'react';
import AmiiboList from './AmiiboList';
import SeriesSelector from '../components/SeriesSelector';

class AmiiboContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      amiibos: null,
      amiibosSeries: null,
      currentSeries: null
    }
    this.handleSeriesSelected = this.handleSeriesSelected.bind(this);
  }

  componentDidMount(){
    fetch("http://www.amiiboapi.com/api/amiibo/")
    .then(res => res.json())
    .then(amiibos => this.setState({amiibos: amiibos.amiibo, amiibosSeries: amiibos.amiibo.amiiboSeries}))
  }

  // handleSeriesSelected(index) {
  //   console.log("handleSeriesSelected", this.state.amiiboSeries)
  //   const selectedSeries = this.state.amiibosSeries[index];
  //   this.setState({currentSeries: selectedSeries})
  // }

  handleSeriesSelected(series) {
    var filteredSeries = [];
    if (series === 'all') {
      filteredSeries = this.state.amiibosSeries;
    } else {
      filteredSeries = this.getAmiibosBySeries(series)
    }
    this.setState({amiibosSeries: filteredSeries})
    console.log("handleSeriesSelected", this.state.amiiboSeries)
  }

  getAmiibosBySeries(seriesIndex) {
    const selectedSeries = this.state.amiibos[seriesIndex];
    return this.state.amiibos.filter((amiibo) => {
      return amiibo.amiiboSeries === selectedSeries;
    });
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
