import React from 'react';

const Amiibo = (props) => {
  // if (!props.selectedSeries) return null;
  return (
    <div className="amiibo">
      <h2>{props.amiibo.name}</h2>
      <ul className="amiibo-info">
        <li>Amiibo Series: {props.amiibo.amiiboSeries}</li>
        <li>Character: {props.amiibo.character}</li>
        <li>Game Series: {props.amiibo.gameSeries}</li>
        <li>Type: {props.amiibo.type}</li>
      </ul>
      <img src={props.amiibo.image} alt={props.amiibo.name} className="image"/>
    </div>
  );
}

export default Amiibo;
