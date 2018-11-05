import React from 'react';
import Amiibo from '../components/Amiibo';

const AmiiboList = (props) => {
  if (props.amiibos === null) {
    return "Nothing to see here";
  } else {
    return (
      <div className="amiibo-list">
        {props.amiibos.map((amiibo, index) => {
          return <Amiibo amiibo={amiibo} key={index} />
        })}
      </div>
    );
  }
}

export default AmiiboList;
