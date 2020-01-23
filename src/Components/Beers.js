import React, { Fragment } from 'react';
import './Beers.css';


const Beers = (props) => {
  return(
    <Fragment>     
      {props.name} 
      <div id="img">  
        <img src={props.image}/>     
      </div>
    </Fragment>
  )
}

export default Beers;