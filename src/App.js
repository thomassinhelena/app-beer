import React from 'react';
import Apibeers from './bin/Apibeers.json';
import Beers from './Components/Beers';
import './App.css';

function App() {
  console.log(Apibeers);
  return ( 
    Apibeers.map((beer) => {
      return <Beers 
        name={beer.name}
        image={beer.image_url}
      /> 
    })
  );
};

export default App;
