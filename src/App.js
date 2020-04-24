import React, { useEffect, useState } from 'react';
import logo from '../src/images/chuck-norris.png';
import './App.css';

function App() {
  const [chuckFact, setChuchFact] = useState({ data: {} });

  async function fetchData() {
    const result = await fetch(
      'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random',
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
          'x-rapidapi-key':
            '920767e39amsha50bf0f39380cd2p169483jsnd1a1c7865e50',
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        }
      }
    );

    result.json().then(result => setChuchFact(result));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        <div className="App-logo">
          <img src={logo} alt="" />
        </div>
      </div>

      <div className="container">
        <div>
          <img className="icon" src={chuckFact.icon_url} alt="" />
        </div>
        <blockquote>{chuckFact.value}</blockquote>
      </div>
    </div>
  );
}

export default App;
