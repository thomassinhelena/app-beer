import React, { Fragment } from 'react';
import './Beers.css';
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';


const Beers = (props) => {
  console.log(props.description)
  return(
    <Fragment> 
      <div className="text" style={{backgroundColor:props.name.startsWith("A") ? "blue": "red" }}>  
      <h1>{props.name}</h1>
      </div>  
      <div id="img">  
        <img src={props.image}/> 
      </div>
      {props.description}
      {props.brewed}

    </Fragment>
  )
}

export default Beers;