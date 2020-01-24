import React from 'react';
import Apibeers from './bin/Apibeers.json';
import Beers from './Components/Beers';
import './App.css';

function App() {
  console.log(Apibeers);
  return ( 
    Apibeers.sort((a, b) =>{
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
    })
      .map((beer) => {
      return <Beers 
        name={beer.name}
        image={beer.image_url}
        description={beer.description}
        brewed={beer.first_brewed}
      /> 
    })
  );
};

export default App;


