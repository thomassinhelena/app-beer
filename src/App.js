import React from 'react';
import Apibeers from './bin/beeres.json';
import Beers from './Components/Beers';
import './App.css';

function App() {
  console.log(Apibeers);
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <table className="table">
            <thead className="thead-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Country</th>
              <th scope="col">City</th>
            </tr>
          </thead>
          <tbody>
            {Apibeers.map((beer) => {
              return <Beers name={beer.records.fields.name} country={beer.records.fields.country} city={beer.records.fields.city} />
            })}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  );
}

export default App;
