import React from 'react';
import { useState } from 'react';

import './App.css';

function App() {

  const [data, setData] = useState({});

  const callService = () => {
    fetch("/api/transactions/123/")
      .then(x => x.json())
      .then(x => setData(x))
      .catch(x => console.log(x));
  };

  return (
    <div className="App">


      <button onClick={callService} >get data</button>

      {data.id}
      {data.from}
      {data.to}
    </div>
  );
}

export default App;
