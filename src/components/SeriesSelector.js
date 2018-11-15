import React from 'react';

const SeriesSelector = (props) => {
  if(!props.amiibos) return null;

  const amiiboSeriesList = props.amiibos.map(amiibo => amiibo.amiiboSeries);

  const uniqueAmiiboSeries = amiiboSeriesList.filter((series, index) => {
    return amiiboSeriesList.indexOf(series) === index;
  })

  const options = uniqueAmiiboSeries.map((series, index) => {
    return <option key={index} value={index}>{series}</option>;
  })

  function handleSeriesSelected(event) {
    props.onSeriesSelect(event.target.value)
  }

  return (
    <div className="series-selector">
      <select id="series-select" onChange={handleSeriesSelected}>
        <option value="All">All</option>
        {options}
      </select>
    </div>
  );
}

export default SeriesSelector;
