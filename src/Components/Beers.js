import React, { Fragment } from 'react';
import './Beers.css';


const Beers = (props) => {
  return(
    <Fragment> 
      <div className="text">  
      <h1>{props.name}</h1>
      </div>  
      <div id="img">  
        <img src={props.image}/>     
      </div>
    </Fragment>
  )
}

export default Beers;