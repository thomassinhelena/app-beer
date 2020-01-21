import React from 'react';


const Beers = (props) => {
  return(
    <div>
      <tr>
        <td>{props.name}</td>
        <td>{props.country}</td>
        <td>{props.city}</td>
      </tr>  
    </div>
  )
}

export default Beers;